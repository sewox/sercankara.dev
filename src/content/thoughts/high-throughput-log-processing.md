---
title: "Engineering a 5651-Compliant Log Engine: Millions of Events per Second"
description: "A technical dive into building Syntropy: zero-allocation byte parsing, memory-mapped buffers, and ClickHouse batching under Turkish Law 5651."
pubDate: 2026-09-02
tags: ["Go", "ClickHouse", "Systems", "Performance"]
draft: false
---

Complying with regulatory frameworks such as Turkey's Law 5651 requires accurate, tamper-proof timestamping and long-term retention of access logs across high-density enterprise networks. When processing captive portal DHCP leases, NAT translations, and HTTP/HTTPS access logs at 50,000+ simultaneous connections, traditional relational databases quickly fold under write pressure.

Here is the architectural blueprint behind **Syntropy**, the high-performance log engine I architected to solve this problem.

## 1. Zero-Allocation Ingestion Pipeline

The initial hurdle was syslog and NetFlow ingestion over UDP/TCP. Standard Go JSON or regex parsers allocate heavily on the heap, triggering frequent garbage collection pauses that induce packet drops.

```go
// Custom byte slice scanner avoiding heap escape
func parseSyslogRecord(buf []byte) (Record, error) {
    // Scan delimiters in-place without string allocations
    pos := 0
    // Extract timestamp, host IP, and MAC address directly
    return Record{/* mapped views */}, nil
}
```

By leveraging `sync.Pool` for reusable scratch buffers and passing byte slices directly to the parser, GC pause times plummeted from 42ms to under 1.2ms.

## 2. ClickHouse as the Columnar Anchor

ClickHouse excels at sequential batch ingestion. Instead of inserting individual rows, Syntropy aggregates events into 100,000-record chunks in memory, applying a double-buffering pattern:

- **Buffer A:** Actively ingesting incoming network events.
- **Buffer B:** Compressing and streaming to ClickHouse via native TCP protocol with ZSTD compression.

## 3. Cryptographic Hashing and RFC 3161 Timestamping

Law 5651 mandates that log files be sealed daily using qualified digital signatures and cryptographic timestamps. Syntropy runs a background orchestrator that hashes sealed daily chunks with SHA-256 and communicates with accredited TSA (Time Stamping Authority) servers, ensuring tamper-evident legal validity.

Operational simplicity, zero runtime allocations, and columnar storage turned what could have been a multi-node cluster into a lightweight, single-binary daemon running comfortably on modest hardware.
