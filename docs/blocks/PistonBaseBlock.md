# PistonBaseBlock

**Package:** `net.minecraft.world.level.block.piston`
**Type:** class
**Extends:** `DirectionalBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PistonBaseBlock>` |  |
| `EXTENDED` | `BooleanProperty` |  |
| `TRIGGER_EXTEND` | `int` |  |
| `TRIGGER_CONTRACT` | `int` |  |
| `TRIGGER_DROP` | `int` |  |
| `PLATFORM_THICKNESS` | `float` |  |
| `EAST_AABB` | `VoxelShape` |  |
| `WEST_AABB` | `VoxelShape` |  |
| `SOUTH_AABB` | `VoxelShape` |  |
| `NORTH_AABB` | `VoxelShape` |  |
| `UP_AABB` | `VoxelShape` |  |
| `DOWN_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<PistonBaseBlock> codec()
```

**Returns:** `MapCodec<PistonBaseBlock>`

### PistonBaseBlock

```java
public PistonBaseBlock(boolean p_60163_, BlockBehaviour.Properties p_60164_)
```

**Parameters:**

- `p_60163_` (`boolean`)
- `p_60164_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_60220_, BlockGetter p_60221_, BlockPos p_60222_, CollisionContext p_60223_)
```

**Parameters:**

- `p_60220_` (`BlockState`)
- `p_60221_` (`BlockGetter`)
- `p_60222_` (`BlockPos`)
- `p_60223_` (`CollisionContext`)

**Returns:** `VoxelShape`

### setPlacedBy

```java
public void setPlacedBy(Level p_60172_, BlockPos p_60173_, BlockState p_60174_, LivingEntity p_60175_, ItemStack p_60176_)
```

**Parameters:**

- `p_60172_` (`Level`)
- `p_60173_` (`BlockPos`)
- `p_60174_` (`BlockState`)
- `p_60175_` (`LivingEntity`)
- `p_60176_` (`ItemStack`)

### neighborChanged

```java
protected void neighborChanged(BlockState p_60198_, Level p_60199_, BlockPos p_60200_, Block p_60201_, BlockPos p_60202_, boolean p_60203_)
```

**Parameters:**

- `p_60198_` (`BlockState`)
- `p_60199_` (`Level`)
- `p_60200_` (`BlockPos`)
- `p_60201_` (`Block`)
- `p_60202_` (`BlockPos`)
- `p_60203_` (`boolean`)

### onPlace

```java
protected void onPlace(BlockState p_60225_, Level p_60226_, BlockPos p_60227_, BlockState p_60228_, boolean p_60229_)
```

**Parameters:**

- `p_60225_` (`BlockState`)
- `p_60226_` (`Level`)
- `p_60227_` (`BlockPos`)
- `p_60228_` (`BlockState`)
- `p_60229_` (`boolean`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_60166_)
```

**Parameters:**

- `p_60166_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### checkIfExtend

```java
private void checkIfExtend(Level p_60168_, BlockPos p_60169_, BlockState p_60170_)
```

**Parameters:**

- `p_60168_` (`Level`)
- `p_60169_` (`BlockPos`)
- `p_60170_` (`BlockState`)

**Returns:** `private void`

### getNeighborSignal

```java
private boolean getNeighborSignal(SignalGetter p_277378_, BlockPos p_60179_, Direction p_60180_)
```

**Parameters:**

- `p_277378_` (`SignalGetter`)
- `p_60179_` (`BlockPos`)
- `p_60180_` (`Direction`)

**Returns:** `private boolean`

### triggerEvent

```java
protected boolean triggerEvent(BlockState p_60192_, Level p_60193_, BlockPos p_60194_, int p_60195_, int p_60196_)
```

**Parameters:**

- `p_60192_` (`BlockState`)
- `p_60193_` (`Level`)
- `p_60194_` (`BlockPos`)
- `p_60195_` (`int`)
- `p_60196_` (`int`)

**Returns:** `boolean`

### isPushable

```java
public static boolean isPushable(BlockState p_60205_, Level p_60206_, BlockPos p_60207_, Direction p_60208_, boolean p_60209_, Direction p_60210_)
```

**Parameters:**

- `p_60205_` (`BlockState`)
- `p_60206_` (`Level`)
- `p_60207_` (`BlockPos`)
- `p_60208_` (`Direction`)
- `p_60209_` (`boolean`)
- `p_60210_` (`Direction`)

**Returns:** `public static boolean`

### moveBlocks

```java
private boolean moveBlocks(Level p_60182_, BlockPos p_60183_, Direction p_60184_, boolean p_60185_)
```

**Parameters:**

- `p_60182_` (`Level`)
- `p_60183_` (`BlockPos`)
- `p_60184_` (`Direction`)
- `p_60185_` (`boolean`)

**Returns:** `private boolean`

### dropResources

```java
 dropResources()
```

**Returns:** ``

### rotate

```java
protected BlockState rotate(BlockState p_60215_, Rotation p_60216_)
```

**Parameters:**

- `p_60215_` (`BlockState`)
- `p_60216_` (`Rotation`)

**Returns:** `BlockState`

### rotate

```java
public BlockState rotate(BlockState state, net.minecraft.world.level.LevelAccessor world, BlockPos pos, Rotation direction)
```

**Parameters:**

- `state` (`BlockState`)
- `world` (`net.minecraft.world.level.LevelAccessor`)
- `pos` (`BlockPos`)
- `direction` (`Rotation`)

**Returns:** `public BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_60212_, Mirror p_60213_)
```

**Parameters:**

- `p_60212_` (`BlockState`)
- `p_60213_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_60218_)
```

**Parameters:**

- `p_60218_` (`StateDefinition.Builder<Block, BlockState>`)

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_60231_)
```

**Parameters:**

- `p_60231_` (`BlockState`)

**Returns:** `boolean`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_60187_, PathComputationType p_60190_)
```

**Parameters:**

- `p_60187_` (`BlockState`)
- `p_60190_` (`PathComputationType`)

**Returns:** `boolean`
