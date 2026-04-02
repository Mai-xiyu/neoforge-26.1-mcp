# RconThread

**Package:** `net.minecraft.server.rcon.thread`
**Type:** class
**Extends:** `GenericThread`
**Side:** 🖧 Server

## Methods

### RconThread

```java
private RconThread(ServerInterface p_11608_, ServerSocket p_11609_, String p_11610_)
```

**Parameters:**

- `p_11608_` (`ServerInterface`)
- `p_11609_` (`ServerSocket`)
- `p_11610_` (`String`)

**Returns:** `private`

### super

```java
 super("RCON Listener")
```

**Parameters:**

- `Listener"` (`"RCON`)

**Returns:** ``

### clearClients

```java
private void clearClients()
```

**Returns:** `private void`

### run

```java
public void run()
```

### create

```java
public static RconThread create(ServerInterface p_11616_)
```

**Parameters:**

- `p_11616_` (`ServerInterface`)

**Returns:** `RconThread`

### stop

```java
public void stop()
```

### closeSocket

```java
private void closeSocket(ServerSocket p_11614_)
```

**Parameters:**

- `p_11614_` (`ServerSocket`)

**Returns:** `private void`
