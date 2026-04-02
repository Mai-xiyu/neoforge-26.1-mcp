# CalibratedSculkSensorBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `SculkSensorBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CalibratedSculkSensorBlock>` |  |
| `FACING` | `DirectionProperty` |  |

## Methods

### codec

```java
public MapCodec<CalibratedSculkSensorBlock> codec()
```

**Returns:** `MapCodec<CalibratedSculkSensorBlock>`

### CalibratedSculkSensorBlock

```java
public CalibratedSculkSensorBlock(BlockBehaviour.Properties p_277532_)
```

**Parameters:**

- `p_277532_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_277925_, BlockState p_277938_)
```

**Parameters:**

- `p_277925_` (`BlockPos`)
- `p_277938_` (`BlockState`)

**Returns:** `BlockEntity`

### CalibratedSculkSensorBlockEntity

```java
return new CalibratedSculkSensorBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_277645_, BlockState p_278033_, BlockEntityType<T> p_277641_)
```

**Parameters:**

- `p_277645_` (`Level`)
- `p_278033_` (`BlockState`)
- `p_277641_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_277423_)
```

**Parameters:**

- `p_277423_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getSignal

```java
public int getSignal(BlockState p_277782_, BlockGetter p_277556_, BlockPos p_277903_, Direction p_278059_)
```

**Parameters:**

- `p_277782_` (`BlockState`)
- `p_277556_` (`BlockGetter`)
- `p_277903_` (`BlockPos`)
- `p_278059_` (`Direction`)

**Returns:** `int`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_277652_)
```

**Parameters:**

- `p_277652_` (`StateDefinition.Builder<Block, BlockState>`)

### rotate

```java
public BlockState rotate(BlockState p_277545_, Rotation p_277482_)
```

**Parameters:**

- `p_277545_` (`BlockState`)
- `p_277482_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
public BlockState mirror(BlockState p_277615_, Mirror p_277916_)
```

**Parameters:**

- `p_277615_` (`BlockState`)
- `p_277916_` (`Mirror`)

**Returns:** `BlockState`

### getActiveTicks

```java
public int getActiveTicks()
```

**Returns:** `int`
