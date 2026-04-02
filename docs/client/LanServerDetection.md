# LanServerDetection

**Package:** `net.minecraft.client.server`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### LanServerDetector

```java
public LanServerDetector(LanServerDetection.LanServerList p_120090_)
```

**Parameters:**

- `p_120090_` (`LanServerDetection.LanServerList`)

**Returns:** `public`

### run

```java
public void run()
```

### takeDirtyServers

```java
public synchronized List<LanServer> takeDirtyServers()
```

**Returns:** `List<LanServer>`

### addServer

```java
public synchronized void addServer(String p_120097_, InetAddress p_120098_)
```

**Parameters:**

- `p_120097_` (`String`)
- `p_120098_` (`InetAddress`)

**Returns:** `public synchronized void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LanServerDetector` | class |  |
| `LanServerList` | class |  |
