# EndPortalFrameBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EndPortalFrameBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `HAS_EYE` | `BooleanProperty` |  |
| `BASE_SHAPE` | `VoxelShape` |  |
| `EYE_SHAPE` | `VoxelShape` |  |
| `FULL_SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<EndPortalFrameBlock> codec()
```

**Returns:** `MapCodec<EndPortalFrameBlock>`

### EndPortalFrameBlock

```java
public EndPortalFrameBlock(BlockBehaviour.Properties p_53050_)
```

**Parameters:**

- `p_53050_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_53079_)
```

**Parameters:**

- `p_53079_` (`BlockState`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_53073_, BlockGetter p_53074_, BlockPos p_53075_, CollisionContext p_53076_)
```

**Parameters:**

- `p_53073_` (`BlockState`)
- `p_53074_` (`BlockGetter`)
- `p_53075_` (`BlockPos`)
- `p_53076_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_53052_)
```

**Parameters:**

- `p_53052_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_53054_)
```

**Parameters:**

- `p_53054_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_53061_, Level p_53062_, BlockPos p_53063_)
```

**Parameters:**

- `p_53061_` (`BlockState`)
- `p_53062_` (`Level`)
- `p_53063_` (`BlockPos`)

**Returns:** `int`

### rotate

```java
protected BlockState rotate(BlockState p_53068_, Rotation p_53069_)
```

**Parameters:**

- `p_53068_` (`BlockState`)
- `p_53069_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_53065_, Mirror p_53066_)
```

**Parameters:**

- `p_53065_` (`BlockState`)
- `p_53066_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_53071_)
```

**Parameters:**

- `p_53071_` (`StateDefinition.Builder<Block, BlockState>`)

### getOrCreatePortalShape

```java
public static BlockPattern getOrCreatePortalShape()
```

**Returns:** `public static BlockPattern`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_53056_, PathComputationType p_53059_)
```

**Parameters:**

- `p_53056_` (`BlockState`)
- `p_53059_` (`PathComputationType`)

**Returns:** `boolean`
