# BellBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ticks` | `int` |  |
| `shaking` | `boolean` |  |
| `clickDirection` | `Direction` |  |

## Methods

### BellBlockEntity

```java
public BellBlockEntity(BlockPos p_155173_, BlockState p_155174_)
```

**Parameters:**

- `p_155173_` (`BlockPos`)
- `p_155174_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### triggerEvent

```java
public boolean triggerEvent(int p_58837_, int p_58838_)
```

**Parameters:**

- `p_58837_` (`int`)
- `p_58838_` (`int`)

**Returns:** `boolean`

### tick

```java
private static void tick(Level p_155181_, BlockPos p_155182_, BlockState p_155183_, BellBlockEntity p_155184_, BellBlockEntity.ResonationEndAction p_155185_)
```

**Parameters:**

- `p_155181_` (`Level`)
- `p_155182_` (`BlockPos`)
- `p_155183_` (`BlockState`)
- `p_155184_` (`BellBlockEntity`)
- `p_155185_` (`BellBlockEntity.ResonationEndAction`)

**Returns:** `private static void`

### clientTick

```java
public static void clientTick(Level p_155176_, BlockPos p_155177_, BlockState p_155178_, BellBlockEntity p_155179_)
```

**Parameters:**

- `p_155176_` (`Level`)
- `p_155177_` (`BlockPos`)
- `p_155178_` (`BlockState`)
- `p_155179_` (`BellBlockEntity`)

**Returns:** `public static void`

### tick

```java
 tick()
```

**Returns:** ``

### serverTick

```java
public static void serverTick(Level p_155203_, BlockPos p_155204_, BlockState p_155205_, BellBlockEntity p_155206_)
```

**Parameters:**

- `p_155203_` (`Level`)
- `p_155204_` (`BlockPos`)
- `p_155205_` (`BlockState`)
- `p_155206_` (`BellBlockEntity`)

**Returns:** `public static void`

### tick

```java
 tick()
```

**Returns:** ``

### onHit

```java
public void onHit(Direction p_58835_)
```

**Parameters:**

- `p_58835_` (`Direction`)

**Returns:** `public void`

### updateEntities

```java
private void updateEntities()
```

**Returns:** `private void`

### areRaidersNearby

```java
private static boolean areRaidersNearby(BlockPos p_155200_, List<LivingEntity> p_155201_)
```

**Parameters:**

- `p_155200_` (`BlockPos`)
- `p_155201_` (`List<LivingEntity>`)

**Returns:** `private static boolean`

### makeRaidersGlow

```java
private static void makeRaidersGlow(Level p_155187_, BlockPos p_155188_, List<LivingEntity> p_155189_)
```

**Parameters:**

- `p_155187_` (`Level`)
- `p_155188_` (`BlockPos`)
- `p_155189_` (`List<LivingEntity>`)

**Returns:** `private static void`

### showBellParticles

```java
private static void showBellParticles(Level p_155208_, BlockPos p_155209_, List<LivingEntity> p_155210_)
```

**Parameters:**

- `p_155208_` (`Level`)
- `p_155209_` (`BlockPos`)
- `p_155210_` (`List<LivingEntity>`)

**Returns:** `private static void`

### isRaiderWithinRange

```java
private static boolean isRaiderWithinRange(BlockPos p_155197_, LivingEntity p_155198_)
```

**Parameters:**

- `p_155197_` (`BlockPos`)
- `p_155198_` (`LivingEntity`)

**Returns:** `private static boolean`

### glow

```java
private static void glow(LivingEntity p_58841_)
```

**Parameters:**

- `p_58841_` (`LivingEntity`)

**Returns:** `private static void`

### run

```java
void run(Level p_155221_, BlockPos p_155222_, List<LivingEntity> p_155223_)
```

**Parameters:**

- `p_155221_` (`Level`)
- `p_155222_` (`BlockPos`)
- `p_155223_` (`List<LivingEntity>`)
