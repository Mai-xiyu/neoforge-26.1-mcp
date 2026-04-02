# SnowLayerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SnowLayerBlock>` |  |
| `MAX_HEIGHT` | `int` |  |
| `LAYERS` | `IntegerProperty` |  |
| `SHAPE_BY_LAYER` | `VoxelShape[]` |  |
| `HEIGHT_IMPASSABLE` | `int` |  |

## Methods

### codec

```java
public MapCodec<SnowLayerBlock> codec()
```

**Returns:** `MapCodec<SnowLayerBlock>`

### SnowLayerBlock

```java
public SnowLayerBlock(BlockBehaviour.Properties p_56585_)
```

**Parameters:**

- `p_56585_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_56592_, PathComputationType p_56595_)
```

**Parameters:**

- `p_56592_` (`BlockState`)
- `p_56595_` (`PathComputationType`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_56620_, BlockGetter p_56621_, BlockPos p_56622_, CollisionContext p_56623_)
```

**Parameters:**

- `p_56620_` (`BlockState`)
- `p_56621_` (`BlockGetter`)
- `p_56622_` (`BlockPos`)
- `p_56623_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_56625_, BlockGetter p_56626_, BlockPos p_56627_, CollisionContext p_56628_)
```

**Parameters:**

- `p_56625_` (`BlockState`)
- `p_56626_` (`BlockGetter`)
- `p_56627_` (`BlockPos`)
- `p_56628_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getBlockSupportShape

```java
protected VoxelShape getBlockSupportShape(BlockState p_56632_, BlockGetter p_56633_, BlockPos p_56634_)
```

**Parameters:**

- `p_56632_` (`BlockState`)
- `p_56633_` (`BlockGetter`)
- `p_56634_` (`BlockPos`)

**Returns:** `VoxelShape`

### getVisualShape

```java
protected VoxelShape getVisualShape(BlockState p_56597_, BlockGetter p_56598_, BlockPos p_56599_, CollisionContext p_56600_)
```

**Parameters:**

- `p_56597_` (`BlockState`)
- `p_56598_` (`BlockGetter`)
- `p_56599_` (`BlockPos`)
- `p_56600_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_56630_)
```

**Parameters:**

- `p_56630_` (`BlockState`)

**Returns:** `boolean`

### getShadeBrightness

```java
protected float getShadeBrightness(BlockState p_222453_, BlockGetter p_222454_, BlockPos p_222455_)
```

**Parameters:**

- `p_222453_` (`BlockState`)
- `p_222454_` (`BlockGetter`)
- `p_222455_` (`BlockPos`)

**Returns:** `float`

### canSurvive

```java
protected boolean canSurvive(BlockState p_56602_, LevelReader p_56603_, BlockPos p_56604_)
```

**Parameters:**

- `p_56602_` (`BlockState`)
- `p_56603_` (`LevelReader`)
- `p_56604_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_56606_, Direction p_56607_, BlockState p_56608_, LevelAccessor p_56609_, BlockPos p_56610_, BlockPos p_56611_)
```

**Parameters:**

- `p_56606_` (`BlockState`)
- `p_56607_` (`Direction`)
- `p_56608_` (`BlockState`)
- `p_56609_` (`LevelAccessor`)
- `p_56610_` (`BlockPos`)
- `p_56611_` (`BlockPos`)

**Returns:** `BlockState`

### randomTick

```java
protected void randomTick(BlockState p_222448_, ServerLevel p_222449_, BlockPos p_222450_, RandomSource p_222451_)
```

**Parameters:**

- `p_222448_` (`BlockState`)
- `p_222449_` (`ServerLevel`)
- `p_222450_` (`BlockPos`)
- `p_222451_` (`RandomSource`)

### dropResources

```java
 dropResources()
```

**Returns:** ``

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_56589_, BlockPlaceContext p_56590_)
```

**Parameters:**

- `p_56589_` (`BlockState`)
- `p_56590_` (`BlockPlaceContext`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_56587_)
```

**Parameters:**

- `p_56587_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_56613_)
```

**Parameters:**

- `p_56613_` (`StateDefinition.Builder<Block, BlockState>`)
