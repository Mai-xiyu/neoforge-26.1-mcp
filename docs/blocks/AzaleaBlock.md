# AzaleaBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AzaleaBlock>` |  |

## Methods

### codec

```java
public MapCodec<AzaleaBlock> codec()
```

**Returns:** `MapCodec<AzaleaBlock>`

### AzaleaBlock

```java
public AzaleaBlock(BlockBehaviour.Properties p_152067_)
```

**Parameters:**

- `p_152067_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_152084_, BlockGetter p_152085_, BlockPos p_152086_, CollisionContext p_152087_)
```

**Parameters:**

- `p_152084_` (`BlockState`)
- `p_152085_` (`BlockGetter`)
- `p_152086_` (`BlockPos`)
- `p_152087_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_152089_, BlockGetter p_152090_, BlockPos p_152091_)
```

**Parameters:**

- `p_152089_` (`BlockState`)
- `p_152090_` (`BlockGetter`)
- `p_152091_` (`BlockPos`)

**Returns:** `boolean`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256329_, BlockPos p_256107_, BlockState p_255771_)
```

**Parameters:**

- `p_256329_` (`LevelReader`)
- `p_256107_` (`BlockPos`)
- `p_255771_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_220712_, RandomSource p_220713_, BlockPos p_220714_, BlockState p_220715_)
```

**Parameters:**

- `p_220712_` (`Level`)
- `p_220713_` (`RandomSource`)
- `p_220714_` (`BlockPos`)
- `p_220715_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_220707_, RandomSource p_220708_, BlockPos p_220709_, BlockState p_220710_)
```

**Parameters:**

- `p_220707_` (`ServerLevel`)
- `p_220708_` (`RandomSource`)
- `p_220709_` (`BlockPos`)
- `p_220710_` (`BlockState`)
