# TickingTracker

**Package:** `net.minecraft.server.level`
**Type:** class
**Extends:** `ChunkTracker`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_LEVEL` | `int` |  |
| `chunks` | `Long2ByteMap` |  |

## Methods

### TickingTracker

```java
public TickingTracker()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getTickets

```java
private SortedArraySet<Ticket<?>> getTickets(long p_184178_)
```

**Parameters:**

- `p_184178_` (`long`)

**Returns:** `private SortedArraySet<Ticket<?>>`

### getTicketLevelAt

```java
private int getTicketLevelAt(SortedArraySet<Ticket<?>> p_184160_)
```

**Parameters:**

- `p_184160_` (`SortedArraySet<Ticket<?>>`)

**Returns:** `private int`

### addTicket

```java
public void addTicket(long p_184152_, Ticket<?> p_184153_)
```

**Parameters:**

- `p_184152_` (`long`)
- `p_184153_` (`Ticket<?>`)

**Returns:** `public void`

### removeTicket

```java
public void removeTicket(long p_184166_, Ticket<?> p_184167_)
```

**Parameters:**

- `p_184166_` (`long`)
- `p_184167_` (`Ticket<?>`)

**Returns:** `public void`

### addTicket

```java
<T> public <T> void addTicket(TicketType<T> p_184155_, ChunkPos p_184156_, int p_184157_, T p_184158_)
```

**Parameters:**

- `p_184155_` (`TicketType<T>`)
- `p_184156_` (`ChunkPos`)
- `p_184157_` (`int`)
- `p_184158_` (`T`)

**Returns:** `public <T> void`

### removeTicket

```java
<T> public <T> void removeTicket(TicketType<T> p_184169_, ChunkPos p_184170_, int p_184171_, T p_184172_)
```

**Parameters:**

- `p_184169_` (`TicketType<T>`)
- `p_184170_` (`ChunkPos`)
- `p_184171_` (`int`)
- `p_184172_` (`T`)

**Returns:** `public <T> void`

### replacePlayerTicketsLevel

```java
public void replacePlayerTicketsLevel(int p_184147_)
```

**Parameters:**

- `p_184147_` (`int`)

**Returns:** `public void`

### getLevelFromSource

```java
protected int getLevelFromSource(long p_184164_)
```

**Parameters:**

- `p_184164_` (`long`)

**Returns:** `int`

### getLevel

```java
public int getLevel(ChunkPos p_184162_)
```

**Parameters:**

- `p_184162_` (`ChunkPos`)

**Returns:** `public int`

### getLevel

```java
protected int getLevel(long p_184174_)
```

**Parameters:**

- `p_184174_` (`long`)

**Returns:** `int`

### setLevel

```java
protected void setLevel(long p_184149_, int p_184150_)
```

**Parameters:**

- `p_184149_` (`long`)
- `p_184150_` (`int`)

### runAllUpdates

```java
public void runAllUpdates()
```

**Returns:** `public void`

### getTicketDebugString

```java
public String getTicketDebugString(long p_184176_)
```

**Parameters:**

- `p_184176_` (`long`)

**Returns:** `public String`
