# MangroveLeavesBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `LeavesBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MangroveLeavesBlock>` |  |

## Methods

### codec

```java
public MapCodec<MangroveLeavesBlock> codec()
```

**Returns:** `MapCodec<MangroveLeavesBlock>`

### MangroveLeavesBlock

```java
public MangroveLeavesBlock(BlockBehaviour.Properties p_221425_)
```

**Parameters:**

- `p_221425_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256534_, BlockPos p_256299_, BlockState p_255926_)
```

**Parameters:**

- `p_256534_` (`LevelReader`)
- `p_256299_` (`BlockPos`)
- `p_255926_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221437_, RandomSource p_221438_, BlockPos p_221439_, BlockState p_221440_)
```

**Parameters:**

- `p_221437_` (`Level`)
- `p_221438_` (`RandomSource`)
- `p_221439_` (`BlockPos`)
- `p_221440_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221427_, RandomSource p_221428_, BlockPos p_221429_, BlockState p_221430_)
```

**Parameters:**

- `p_221427_` (`ServerLevel`)
- `p_221428_` (`RandomSource`)
- `p_221429_` (`BlockPos`)
- `p_221430_` (`BlockState`)

### getParticlePos

```java
public BlockPos getParticlePos(BlockPos p_316180_)
```

**Parameters:**

- `p_316180_` (`BlockPos`)

**Returns:** `BlockPos`
