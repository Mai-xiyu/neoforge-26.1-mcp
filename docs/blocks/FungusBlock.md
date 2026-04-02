# FungusBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FungusBlock>` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<FungusBlock> codec()
```

**Returns:** `MapCodec<FungusBlock>`

### FungusBlock

```java
public FungusBlock(ResourceKey<ConfiguredFeature<?, ?>> p_259087_, Block p_260223_, BlockBehaviour.Properties p_259749_)
```

**Parameters:**

- `p_259087_` (`ResourceKey<ConfiguredFeature<?, ?>>`)
- `p_260223_` (`Block`)
- `p_259749_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_53618_, BlockGetter p_53619_, BlockPos p_53620_, CollisionContext p_53621_)
```

**Parameters:**

- `p_53618_` (`BlockState`)
- `p_53619_` (`BlockGetter`)
- `p_53620_` (`BlockPos`)
- `p_53621_` (`CollisionContext`)

**Returns:** `VoxelShape`

### mayPlaceOn

```java
protected boolean mayPlaceOn(BlockState p_53623_, BlockGetter p_53624_, BlockPos p_53625_)
```

**Parameters:**

- `p_53623_` (`BlockState`)
- `p_53624_` (`BlockGetter`)
- `p_53625_` (`BlockPos`)

**Returns:** `boolean`

### getFeature

```java
private Optional<? extends Holder<ConfiguredFeature<?, ?>>> getFeature(LevelReader p_256589_)
```

**Parameters:**

- `p_256589_` (`LevelReader`)

**Returns:** `private Optional<? extends Holder<ConfiguredFeature<?, ?>>>`

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256655_, BlockPos p_256553_, BlockState p_256213_)
```

**Parameters:**

- `p_256655_` (`LevelReader`)
- `p_256553_` (`BlockPos`)
- `p_256213_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221248_, RandomSource p_221249_, BlockPos p_221250_, BlockState p_221251_)
```

**Parameters:**

- `p_221248_` (`Level`)
- `p_221249_` (`RandomSource`)
- `p_221250_` (`BlockPos`)
- `p_221251_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221243_, RandomSource p_221244_, BlockPos p_221245_, BlockState p_221246_)
```

**Parameters:**

- `p_221243_` (`ServerLevel`)
- `p_221244_` (`RandomSource`)
- `p_221245_` (`BlockPos`)
- `p_221246_` (`BlockState`)
