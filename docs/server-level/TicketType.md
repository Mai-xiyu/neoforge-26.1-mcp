# TicketType

**Package:** `net.minecraft.server.level`
**Type:** class<T>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `START` | `TicketType<Unit>` |  |
| `DRAGON` | `TicketType<Unit>` |  |
| `PLAYER` | `TicketType<ChunkPos>` |  |
| `FORCED` | `TicketType<ChunkPos>` |  |
| `PORTAL` | `TicketType<BlockPos>` |  |
| `POST_TELEPORT` | `TicketType<Integer>` |  |
| `UNKNOWN` | `TicketType<ChunkPos>` |  |

## Methods

### create

```java
<T> public static <T> TicketType<T> create(String p_9463_, Comparator<T> p_9464_)
```

**Parameters:**

- `p_9463_` (`String`)
- `p_9464_` (`Comparator<T>`)

**Returns:** `public static <T> TicketType<T>`

### create

```java
<T> public static <T> TicketType<T> create(String p_9466_, Comparator<T> p_9467_, int p_9468_)
```

**Parameters:**

- `p_9466_` (`String`)
- `p_9467_` (`Comparator<T>`)
- `p_9468_` (`int`)

**Returns:** `public static <T> TicketType<T>`

### TicketType

```java
protected TicketType(String p_9455_, Comparator<T> p_9456_, long p_9457_)
```

**Parameters:**

- `p_9455_` (`String`)
- `p_9456_` (`Comparator<T>`)
- `p_9457_` (`long`)

**Returns:** `protected`

### toString

```java
public String toString()
```

**Returns:** `String`

### getComparator

```java
public Comparator<T> getComparator()
```

**Returns:** `public Comparator<T>`

### timeout

```java
public long timeout()
```

**Returns:** `public long`
