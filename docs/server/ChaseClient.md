# ChaseClient

**Package:** `net.minecraft.server.chase`
**Type:** class
**Side:** 🖧 Server

## Methods

### ChaseClient

```java
public ChaseClient(String p_195990_, int p_195991_, MinecraftServer p_195992_)
```

**Parameters:**

- `p_195990_` (`String`)
- `p_195991_` (`int`)
- `p_195992_` (`MinecraftServer`)

**Returns:** `public`

### start

```java
public void start()
```

**Returns:** `public void`

### stop

```java
public void stop()
```

**Returns:** `public void`

### run

```java
public void run()
```

**Returns:** `public void`

### handleMessage

```java
private void handleMessage(String p_195995_)
```

**Parameters:**

- `p_195995_` (`String`)

**Returns:** `private void`

### handleTeleport

```java
private void handleTeleport(Scanner p_195997_)
```

**Parameters:**

- `p_195997_` (`Scanner`)

**Returns:** `private void`

### parseTarget

```java
private Optional<ChaseClient.TeleportTarget> parseTarget(Scanner p_196004_)
```

**Parameters:**

- `p_196004_` (`Scanner`)

**Returns:** `private Optional<ChaseClient.TeleportTarget>`

### executeCommand

```java
private void executeCommand(String p_196002_)
```

**Parameters:**

- `p_196002_` (`String`)

**Returns:** `private void`

### TeleportTarget

```java
static record TeleportTarget(ResourceKey<Level> level, Vec3 pos, Vec2 rot)
```

**Parameters:**

- `level` (`ResourceKey<Level>`)
- `pos` (`Vec3`)
- `rot` (`Vec2`)

**Returns:** `static record`
