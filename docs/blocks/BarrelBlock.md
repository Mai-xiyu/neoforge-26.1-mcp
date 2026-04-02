# BarrelBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BarrelBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `OPEN` | `BooleanProperty` |  |

## Methods

### codec

```java
public MapCodec<BarrelBlock> codec()
```

**Returns:** `MapCodec<BarrelBlock>`

### BarrelBlock

```java
public BarrelBlock(BlockBehaviour.Properties p_49046_)
```

**Parameters:**

- `p_49046_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_49069_, Level p_49070_, BlockPos p_49071_, Player p_49072_, BlockHitResult p_49074_)
```

**Parameters:**

- `p_49069_` (`BlockState`)
- `p_49070_` (`Level`)
- `p_49071_` (`BlockPos`)
- `p_49072_` (`Player`)
- `p_49074_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### onRemove

```java
protected void onRemove(BlockState p_49076_, Level p_49077_, BlockPos p_49078_, BlockState p_49079_, boolean p_49080_)
```

**Parameters:**

- `p_49076_` (`BlockState`)
- `p_49077_` (`Level`)
- `p_49078_` (`BlockPos`)
- `p_49079_` (`BlockState`)
- `p_49080_` (`boolean`)

### tick

```java
protected void tick(BlockState p_220758_, ServerLevel p_220759_, BlockPos p_220760_, RandomSource p_220761_)
```

**Parameters:**

- `p_220758_` (`BlockState`)
- `p_220759_` (`ServerLevel`)
- `p_220760_` (`BlockPos`)
- `p_220761_` (`RandomSource`)

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_152102_, BlockState p_152103_)
```

**Parameters:**

- `p_152102_` (`BlockPos`)
- `p_152103_` (`BlockState`)

**Returns:** `BlockEntity`

### BarrelBlockEntity

```java
return new BarrelBlockEntity()
```

**Returns:** `return new`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_49090_)
```

**Parameters:**

- `p_49090_` (`BlockState`)

**Returns:** `RenderShape`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_49058_)
```

**Parameters:**

- `p_49058_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_49065_, Level p_49066_, BlockPos p_49067_)
```

**Parameters:**

- `p_49065_` (`BlockState`)
- `p_49066_` (`Level`)
- `p_49067_` (`BlockPos`)

**Returns:** `int`

### rotate

```java
protected BlockState rotate(BlockState p_49085_, Rotation p_49086_)
```

**Parameters:**

- `p_49085_` (`BlockState`)
- `p_49086_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_49082_, Mirror p_49083_)
```

**Parameters:**

- `p_49082_` (`BlockState`)
- `p_49083_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_49088_)
```

**Parameters:**

- `p_49088_` (`StateDefinition.Builder<Block, BlockState>`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_49048_)
```

**Parameters:**

- `p_49048_` (`BlockPlaceContext`)

**Returns:** `BlockState`
