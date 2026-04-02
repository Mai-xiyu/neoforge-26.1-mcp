# FakePlayerFactory

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Methods

### FakePlayerKey

```java
private record FakePlayerKey(ServerLevel level, GameProfile username)
```

**Parameters:**

- `level` (`ServerLevel`)
- `username` (`GameProfile`)

**Returns:** `private record`

### getMinecraft

```java
public static FakePlayer getMinecraft(ServerLevel level)
```

**Parameters:**

- `level` (`ServerLevel`)

**Returns:** `public static FakePlayer`

### get

```java
return get()
```

**Returns:** `return`

### get

```java
public static FakePlayer get(ServerLevel level, GameProfile username)
```

**Parameters:**

- `level` (`ServerLevel`)
- `username` (`GameProfile`)

**Returns:** `FakePlayer`

### unloadLevel

```java
public static void unloadLevel(ServerLevel level)
```

**Parameters:**

- `level` (`ServerLevel`)

**Returns:** `public static void`
