# RconClient

**Package:** `net.minecraft.server.rcon.thread`
**Type:** class
**Extends:** `GenericThread`
**Side:** 🖧 Server

## Methods

### RconClient

```java
 RconClient(ServerInterface p_11587_, String p_11588_, Socket p_11589_)
```

**Parameters:**

- `p_11587_` (`ServerInterface`)
- `p_11588_` (`String`)
- `p_11589_` (`Socket`)

**Returns:** ``

### run

```java
public void run()
```

### send

```java
private void send(int p_11591_, int p_11592_, String p_11593_)
```

**Parameters:**

- `p_11591_` (`int`)
- `p_11592_` (`int`)
- `p_11593_` (`String`)

**Returns:** `private void`

### sendAuthFailure

```java
private void sendAuthFailure()
```

**Returns:** `private void`

### sendCmdResponse

```java
private void sendCmdResponse(int p_11595_, String p_11596_)
```

**Parameters:**

- `p_11595_` (`int`)
- `p_11596_` (`String`)

**Returns:** `private void`

### stop

```java
public void stop()
```

### closeSocket

```java
private void closeSocket()
```

**Returns:** `private void`
