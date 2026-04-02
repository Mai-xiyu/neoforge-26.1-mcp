# ChaseServer

**Package:** `net.minecraft.server.chase`
**Type:** class
**Side:** 🖧 Server

## Methods

### ChaseServer

```java
public ChaseServer(String p_196032_, int p_196033_, PlayerList p_196034_, int p_196035_)
```

**Parameters:**

- `p_196032_` (`String`)
- `p_196033_` (`int`)
- `p_196034_` (`PlayerList`)
- `p_196035_` (`int`)

**Returns:** `public`

### start

```java
public void start()
```

**Returns:** `public void`

### runSender

```java
private void runSender()
```

**Returns:** `private void`

### stop

```java
public void stop()
```

**Returns:** `public void`

### runAcceptor

```java
private void runAcceptor()
```

**Returns:** `private void`

### PlayerPosition

```java
static record PlayerPosition(String dimensionName, double x, double y, double z, float yRot, float xRot)
```

**Parameters:**

- `dimensionName` (`String`)
- `x` (`double`)
- `y` (`double`)
- `z` (`double`)
- `yRot` (`float`)
- `xRot` (`float`)

**Returns:** `static record`

### format

```java
String format()
```

**Returns:** `String`
