# BonemealableBlock

**Package:** `net.minecraft.world.level.block`
**Type:** interface

## Methods

### isValidBonemealTarget

```java
boolean isValidBonemealTarget(LevelReader p_256559_, BlockPos p_50898_, BlockState p_50899_)
```

**Parameters:**

- `p_256559_` (`LevelReader`)
- `p_50898_` (`BlockPos`)
- `p_50899_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
boolean isBonemealSuccess(Level p_220878_, RandomSource p_220879_, BlockPos p_220880_, BlockState p_220881_)
```

**Parameters:**

- `p_220878_` (`Level`)
- `p_220879_` (`RandomSource`)
- `p_220880_` (`BlockPos`)
- `p_220881_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
void performBonemeal(ServerLevel p_220874_, RandomSource p_220875_, BlockPos p_220876_, BlockState p_220877_)
```

**Parameters:**

- `p_220874_` (`ServerLevel`)
- `p_220875_` (`RandomSource`)
- `p_220876_` (`BlockPos`)
- `p_220877_` (`BlockState`)

### getParticlePos

```java
default BlockPos getParticlePos(BlockPos p_316301_)
```

**Parameters:**

- `p_316301_` (`BlockPos`)

**Returns:** `default BlockPos`

### getType

```java
default BonemealableBlock.Type getType()
```

**Returns:** `default BonemealableBlock.Type`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
