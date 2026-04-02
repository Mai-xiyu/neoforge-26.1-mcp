# PistonHeadBlock

**Package:** `net.minecraft.world.level.block.piston`
**Type:** class
**Extends:** `DirectionalBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PistonHeadBlock>` |  |
| `TYPE` | `EnumProperty<PistonType>` |  |
| `SHORT` | `BooleanProperty` |  |
| `PLATFORM` | `float` |  |
| `EAST_AABB` | `VoxelShape` |  |
| `WEST_AABB` | `VoxelShape` |  |
| `SOUTH_AABB` | `VoxelShape` |  |
| `NORTH_AABB` | `VoxelShape` |  |
| `UP_AABB` | `VoxelShape` |  |
| `DOWN_AABB` | `VoxelShape` |  |
| `AABB_OFFSET` | `float` |  |
| `EDGE_MIN` | `float` |  |
| `EDGE_MAX` | `float` |  |
| `UP_ARM_AABB` | `VoxelShape` |  |
| `DOWN_ARM_AABB` | `VoxelShape` |  |
| `SOUTH_ARM_AABB` | `VoxelShape` |  |
| `NORTH_ARM_AABB` | `VoxelShape` |  |
| `EAST_ARM_AABB` | `VoxelShape` |  |
| `WEST_ARM_AABB` | `VoxelShape` |  |
| `SHORT_UP_ARM_AABB` | `VoxelShape` |  |
| `SHORT_DOWN_ARM_AABB` | `VoxelShape` |  |
| `SHORT_SOUTH_ARM_AABB` | `VoxelShape` |  |
| `SHORT_NORTH_ARM_AABB` | `VoxelShape` |  |
| `SHORT_EAST_ARM_AABB` | `VoxelShape` |  |
| `SHORT_WEST_ARM_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
protected MapCodec<PistonHeadBlock> codec()
```

**Returns:** `MapCodec<PistonHeadBlock>`

### makeShapes

```java
private static VoxelShape[] makeShapes(boolean p_60313_)
```

**Parameters:**

- `p_60313_` (`boolean`)

**Returns:** `private static VoxelShape[]`

### calculateShape

```java
private static VoxelShape calculateShape(Direction p_60310_, boolean p_60311_)
```

**Parameters:**

- `p_60310_` (`Direction`)
- `p_60311_` (`boolean`)

**Returns:** `private static VoxelShape`

### PistonHeadBlock

```java
public PistonHeadBlock(BlockBehaviour.Properties p_60259_)
```

**Parameters:**

- `p_60259_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_60325_)
```

**Parameters:**

- `p_60325_` (`BlockState`)

**Returns:** `boolean`

### getShape

```java
protected VoxelShape getShape(BlockState p_60320_, BlockGetter p_60321_, BlockPos p_60322_, CollisionContext p_60323_)
```

**Parameters:**

- `p_60320_` (`BlockState`)
- `p_60321_` (`BlockGetter`)
- `p_60322_` (`BlockPos`)
- `p_60323_` (`CollisionContext`)

**Returns:** `VoxelShape`

### isFittingBase

```java
private boolean isFittingBase(BlockState p_60298_, BlockState p_60299_)
```

**Parameters:**

- `p_60298_` (`BlockState`)
- `p_60299_` (`BlockState`)

**Returns:** `private boolean`

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_60265_, BlockPos p_60266_, BlockState p_60267_, Player p_60268_)
```

**Parameters:**

- `p_60265_` (`Level`)
- `p_60266_` (`BlockPos`)
- `p_60267_` (`BlockState`)
- `p_60268_` (`Player`)

**Returns:** `BlockState`

### onRemove

```java
protected void onRemove(BlockState p_60282_, Level p_60283_, BlockPos p_60284_, BlockState p_60285_, boolean p_60286_)
```

**Parameters:**

- `p_60282_` (`BlockState`)
- `p_60283_` (`Level`)
- `p_60284_` (`BlockPos`)
- `p_60285_` (`BlockState`)
- `p_60286_` (`boolean`)

### updateShape

```java
protected BlockState updateShape(BlockState p_60301_, Direction p_60302_, BlockState p_60303_, LevelAccessor p_60304_, BlockPos p_60305_, BlockPos p_60306_)
```

**Parameters:**

- `p_60301_` (`BlockState`)
- `p_60302_` (`Direction`)
- `p_60303_` (`BlockState`)
- `p_60304_` (`LevelAccessor`)
- `p_60305_` (`BlockPos`)
- `p_60306_` (`BlockPos`)

**Returns:** `BlockState`

### canSurvive

```java
protected boolean canSurvive(BlockState p_60288_, LevelReader p_60289_, BlockPos p_60290_)
```

**Parameters:**

- `p_60288_` (`BlockState`)
- `p_60289_` (`LevelReader`)
- `p_60290_` (`BlockPos`)

**Returns:** `boolean`

### neighborChanged

```java
protected void neighborChanged(BlockState p_60275_, Level p_60276_, BlockPos p_60277_, Block p_60278_, BlockPos p_60279_, boolean p_60280_)
```

**Parameters:**

- `p_60275_` (`BlockState`)
- `p_60276_` (`Level`)
- `p_60277_` (`BlockPos`)
- `p_60278_` (`Block`)
- `p_60279_` (`BlockPos`)
- `p_60280_` (`boolean`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304638_, BlockPos p_60262_, BlockState p_60263_)
```

**Parameters:**

- `p_304638_` (`LevelReader`)
- `p_60262_` (`BlockPos`)
- `p_60263_` (`BlockState`)

**Returns:** `ItemStack`

### rotate

```java
protected BlockState rotate(BlockState p_60295_, Rotation p_60296_)
```

**Parameters:**

- `p_60295_` (`BlockState`)
- `p_60296_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_60292_, Mirror p_60293_)
```

**Parameters:**

- `p_60292_` (`BlockState`)
- `p_60293_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_60308_)
```

**Parameters:**

- `p_60308_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_60270_, PathComputationType p_60273_)
```

**Parameters:**

- `p_60270_` (`BlockState`)
- `p_60273_` (`PathComputationType`)

**Returns:** `boolean`
