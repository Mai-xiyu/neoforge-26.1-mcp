# ConnectionUtils

**Package:** `net.neoforged.neoforge.network.connection`
**Type:** class

## Description

Utility class for storing and retrieving `Connection` objects from `ChannelHandlerContext` objects.

## Methods

### ConnectionUtils

```java
private ConnectionUtils()
```

**Returns:** `private`

### IllegalStateException

```java
throw new IllegalStateException("Tried to create utility class!")
```

**Parameters:**

- `class!"` (`"Tried to create utility`)

**Returns:** `throw new`

### getConnection

```java
public static Connection getConnection(ChannelHandlerContext connection)
```

**Parameters:**

- `connection` (`ChannelHandlerContext`)

**Returns:** `Connection`

### setConnection

```java
.Internal
    public static void setConnection(ChannelHandlerContext connection, Connection value)
```

**Parameters:**

- `connection` (`ChannelHandlerContext`)
- `value` (`Connection`)

**Returns:** `.Internal
    public static void`

### removeConnection

```java
.Internal
    public static void removeConnection(ChannelHandlerContext connection)
```

**Parameters:**

- `connection` (`ChannelHandlerContext`)

**Returns:** `.Internal
    public static void`
