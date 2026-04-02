# IClientBlockExtensions

**Package:** `net.neoforged.neoforge.client.extensions.common`
**Type:** interface
**Side:** 🖥️ Client

## Description

LogicalSide#CLIENT Client-only extensions to `Block`.
@see Block#initializeClient(Consumer)

## Methods

### of

```java
static IClientBlockExtensions of(BlockState state)
```

**Parameters:**

- `state` (`BlockState`)

**Returns:** `static IClientBlockExtensions`

### of

```java
static IClientBlockExtensions of(Block block)
```

**Parameters:**

- `block` (`Block`)

**Returns:** `static IClientBlockExtensions`

### addHitEffects

```java
default boolean addHitEffects(BlockState state, Level level, HitResult target, ParticleEngine manager)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `target` (`HitResult`)
- `manager` (`ParticleEngine`)

**Returns:** `boolean`

### addDestroyEffects

```java
default boolean addDestroyEffects(BlockState state, Level Level, BlockPos pos, ParticleEngine manager)
```

**Parameters:**

- `state` (`BlockState`)
- `Level` (`Level`)
- `pos` (`BlockPos`)
- `manager` (`ParticleEngine`)

**Returns:** `boolean`

### playBreakSound

```java
default boolean playBreakSound(BlockState state, Level level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### getFogColor

```java
default Vector3d getFogColor(BlockState state, LevelReader level, BlockPos pos, Entity entity, Vector3d originalColor, float partialTick)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`LevelReader`)
- `pos` (`BlockPos`)
- `entity` (`Entity`)
- `originalColor` (`Vector3d`)
- `partialTick` (`float`)

**Returns:** `Vector3d`

### Vector3d

```java
return new Vector3d(0.02F + f12, 0.02F + f12, 0.2F + f12)
```

**Parameters:**

- `f12` (`0.02F +`)
- `f12` (`0.02F +`)
- `f12` (`0.2F +`)

**Returns:** `return new`

### Vector3d

```java
return new Vector3d()
```

**Returns:** `return new`

### areBreakingParticlesTinted

```java
default boolean areBreakingParticlesTinted(BlockState state, ClientLevel level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`ClientLevel`)
- `pos` (`BlockPos`)

**Returns:** `boolean`
