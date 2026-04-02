# ChunkTicketManager

**Package:** `net.neoforged.neoforge.common.ticket`
**Type:** class<T> implements ITicketGetter<T>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `pos` | `ChunkPos` |  |

## Methods

### ChunkTicketManager

```java
public ChunkTicketManager(ChunkPos pos)
```

**Parameters:**

- `pos` (`ChunkPos`)

**Returns:** `public`

### add

```java
public void add(SimpleTicket<T> ticket)
```

**Parameters:**

- `ticket` (`SimpleTicket<T>`)

### remove

```java
public void remove(SimpleTicket<T> ticket)
```

**Parameters:**

- `ticket` (`SimpleTicket<T>`)

### getTickets

```java
public Collection<SimpleTicket<T>> getTickets()
```

**Returns:** `Collection<SimpleTicket<T>>`
