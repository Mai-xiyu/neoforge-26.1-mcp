# BrewingStandBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BrewingStandBlock>` |  |
| `HAS_BOTTLE` | `BooleanProperty[]` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<BrewingStandBlock> codec()
```

**Returns:** `MapCodec<BrewingStandBlock>`

### BrewingStandBlock

```java
public BrewingStandBlock(BlockBehaviour.Properties p_50909_)
```

**Parameters:**

- `p_50909_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_50950_)
```

**Parameters:**

- `p_50950_` (`BlockState`)

**Returns:** `RenderShape`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_152698_, BlockState p_152699_)
```

**Parameters:**

- `p_152698_` (`BlockPos`)
- `p_152699_` (`BlockState`)

**Returns:** `BlockEntity`

### BrewingStandBlockEntity

```java
return new BrewingStandBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_152694_, BlockState p_152695_, BlockEntityType<T> p_152696_)
```

**Parameters:**

- `p_152694_` (`Level`)
- `p_152695_` (`BlockState`)
- `p_152696_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### getShape

```java
protected VoxelShape getShape(BlockState p_50952_, BlockGetter p_50953_, BlockPos p_50954_, CollisionContext p_50955_)
```

**Parameters:**

- `p_50952_` (`BlockState`)
- `p_50953_` (`BlockGetter`)
- `p_50954_` (`BlockPos`)
- `p_50955_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_50930_, Level p_50931_, BlockPos p_50932_, Player p_50933_, BlockHitResult p_50935_)
```

**Parameters:**

- `p_50930_` (`BlockState`)
- `p_50931_` (`Level`)
- `p_50932_` (`BlockPos`)
- `p_50933_` (`Player`)
- `p_50935_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### animateTick

```java
public void animateTick(BlockState p_220883_, Level p_220884_, BlockPos p_220885_, RandomSource p_220886_)
```

**Parameters:**

- `p_220883_` (`BlockState`)
- `p_220884_` (`Level`)
- `p_220885_` (`BlockPos`)
- `p_220886_` (`RandomSource`)

### onRemove

```java
protected void onRemove(BlockState p_50937_, Level p_50938_, BlockPos p_50939_, BlockState p_50940_, boolean p_50941_)
```

**Parameters:**

- `p_50937_` (`BlockState`)
- `p_50938_` (`Level`)
- `p_50939_` (`BlockPos`)
- `p_50940_` (`BlockState`)
- `p_50941_` (`boolean`)

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_50919_)
```

**Parameters:**

- `p_50919_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_50926_, Level p_50927_, BlockPos p_50928_)
```

**Parameters:**

- `p_50926_` (`BlockState`)
- `p_50927_` (`Level`)
- `p_50928_` (`BlockPos`)

**Returns:** `int`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_50948_)
```

**Parameters:**

- `p_50948_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_50921_, PathComputationType p_50924_)
```

**Parameters:**

- `p_50921_` (`BlockState`)
- `p_50924_` (`PathComputationType`)

**Returns:** `boolean`
