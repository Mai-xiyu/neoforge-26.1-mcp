# SlabBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SlabBlock>` |  |
| `TYPE` | `EnumProperty<SlabType>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `BOTTOM_AABB` | `VoxelShape` |  |
| `TOP_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<? extends SlabBlock> codec()
```

**Returns:** `MapCodec<? extends SlabBlock>`

### SlabBlock

```java
public SlabBlock(BlockBehaviour.Properties p_56359_)
```

**Parameters:**

- `p_56359_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_56395_)
```

**Parameters:**

- `p_56395_` (`BlockState`)

**Returns:** `boolean`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_56388_)
```

**Parameters:**

- `p_56388_` (`StateDefinition.Builder<Block, BlockState>`)

### getShape

```java
protected VoxelShape getShape(BlockState p_56390_, BlockGetter p_56391_, BlockPos p_56392_, CollisionContext p_56393_)
```

**Parameters:**

- `p_56390_` (`BlockState`)
- `p_56391_` (`BlockGetter`)
- `p_56392_` (`BlockPos`)
- `p_56393_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_56361_)
```

**Parameters:**

- `p_56361_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### canBeReplaced

```java
protected boolean canBeReplaced(BlockState p_56373_, BlockPlaceContext p_56374_)
```

**Parameters:**

- `p_56373_` (`BlockState`)
- `p_56374_` (`BlockPlaceContext`)

**Returns:** `boolean`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_56397_)
```

**Parameters:**

- `p_56397_` (`BlockState`)

**Returns:** `FluidState`

### placeLiquid

```java
public boolean placeLiquid(LevelAccessor p_56368_, BlockPos p_56369_, BlockState p_56370_, FluidState p_56371_)
```

**Parameters:**

- `p_56368_` (`LevelAccessor`)
- `p_56369_` (`BlockPos`)
- `p_56370_` (`BlockState`)
- `p_56371_` (`FluidState`)

**Returns:** `boolean`

### canPlaceLiquid

```java
public boolean canPlaceLiquid(Player p_294165_, BlockGetter p_56363_, BlockPos p_56364_, BlockState p_56365_, Fluid p_56366_)
```

**Parameters:**

- `p_294165_` (`Player`)
- `p_56363_` (`BlockGetter`)
- `p_56364_` (`BlockPos`)
- `p_56365_` (`BlockState`)
- `p_56366_` (`Fluid`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_56381_, Direction p_56382_, BlockState p_56383_, LevelAccessor p_56384_, BlockPos p_56385_, BlockPos p_56386_)
```

**Parameters:**

- `p_56381_` (`BlockState`)
- `p_56382_` (`Direction`)
- `p_56383_` (`BlockState`)
- `p_56384_` (`LevelAccessor`)
- `p_56385_` (`BlockPos`)
- `p_56386_` (`BlockPos`)

**Returns:** `BlockState`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_56376_, PathComputationType p_56379_)
```

**Parameters:**

- `p_56376_` (`BlockState`)
- `p_56379_` (`PathComputationType`)

**Returns:** `boolean`
