# ResolvedServerAddress

**Package:** `net.minecraft.client.multiplayer.resolver`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getHostName

```java
String getHostName()
```

**Returns:** `String`

### getHostIp

```java
String getHostIp()
```

**Returns:** `String`

### getPort

```java
int getPort()
```

**Returns:** `int`

### asInetSocketAddress

```java
InetSocketAddress asInetSocketAddress()
```

**Returns:** `InetSocketAddress`

### from

```java
static ResolvedServerAddress from(InetSocketAddress p_171846_)
```

**Parameters:**

- `p_171846_` (`InetSocketAddress`)

**Returns:** `static ResolvedServerAddress`

### ResolvedServerAddress

```java
return new ResolvedServerAddress()
```

**Returns:** `return new`

### getHostName

```java
public String getHostName()
```

**Returns:** `String`

### getHostIp

```java
public String getHostIp()
```

**Returns:** `String`

### getPort

```java
public int getPort()
```

**Returns:** `int`

### asInetSocketAddress

```java
public InetSocketAddress asInetSocketAddress()
```

**Returns:** `InetSocketAddress`
