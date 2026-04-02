# WardenSpawnTracker

**Package:** `net.minecraft.world.entity.monster.warden`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<WardenSpawnTracker>` |  |
| `MAX_WARNING_LEVEL` | `int` |  |

## Methods

### WardenSpawnTracker

```java
public WardenSpawnTracker(int p_219568_, int p_219569_, int p_219570_)
```

**Parameters:**

- `p_219568_` (`int`)
- `p_219569_` (`int`)
- `p_219570_` (`int`)

**Returns:** `public`

### tick

```java
public void tick()
```

**Returns:** `public void`

### reset

```java
public void reset()
```

**Returns:** `public void`

### tryWarn

```java
public static OptionalInt tryWarn(ServerLevel p_219578_, BlockPos p_219579_, ServerPlayer p_219580_)
```

**Parameters:**

- `p_219578_` (`ServerLevel`)
- `p_219579_` (`BlockPos`)
- `p_219580_` (`ServerPlayer`)

**Returns:** `public static OptionalInt`

### onCooldown

```java
private boolean onCooldown()
```

**Returns:** `private boolean`

### hasNearbyWarden

```java
private static boolean hasNearbyWarden(ServerLevel p_219575_, BlockPos p_219576_)
```

**Parameters:**

- `p_219575_` (`ServerLevel`)
- `p_219576_` (`BlockPos`)

**Returns:** `private static boolean`

### getNearbyPlayers

```java
private static List<ServerPlayer> getNearbyPlayers(ServerLevel p_219595_, BlockPos p_219596_)
```

**Parameters:**

- `p_219595_` (`ServerLevel`)
- `p_219596_` (`BlockPos`)

**Returns:** `private static List<ServerPlayer>`

### increaseWarningLevel

```java
private void increaseWarningLevel()
```

**Returns:** `private void`

### decreaseWarningLevel

```java
private void decreaseWarningLevel()
```

**Returns:** `private void`

### setWarningLevel

```java
public void setWarningLevel(int p_219573_)
```

**Parameters:**

- `p_219573_` (`int`)

**Returns:** `public void`

### getWarningLevel

```java
public int getWarningLevel()
```

**Returns:** `public int`

### copyData

```java
private void copyData(WardenSpawnTracker p_219584_)
```

**Parameters:**

- `p_219584_` (`WardenSpawnTracker`)

**Returns:** `private void`
