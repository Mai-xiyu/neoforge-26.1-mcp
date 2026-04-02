# NetherPortalBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `Portal`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NetherPortalBlock>` |  |
| `AXIS` | `EnumProperty<Direction.Axis>` |  |
| `AABB_OFFSET` | `int` |  |
| `X_AXIS_AABB` | `VoxelShape` |  |
| `Z_AXIS_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<NetherPortalBlock> codec()
```

**Returns:** `MapCodec<NetherPortalBlock>`

### NetherPortalBlock

```java
public NetherPortalBlock(BlockBehaviour.Properties p_54909_)
```

**Parameters:**

- `p_54909_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_54942_, BlockGetter p_54943_, BlockPos p_54944_, CollisionContext p_54945_)
```

**Parameters:**

- `p_54942_` (`BlockState`)
- `p_54943_` (`BlockGetter`)
- `p_54944_` (`BlockPos`)
- `p_54945_` (`CollisionContext`)

**Returns:** `VoxelShape`

### randomTick

```java
protected void randomTick(BlockState p_221799_, ServerLevel p_221800_, BlockPos p_221801_, RandomSource p_221802_)
```

**Parameters:**

- `p_221799_` (`BlockState`)
- `p_221800_` (`ServerLevel`)
- `p_221801_` (`BlockPos`)
- `p_221802_` (`RandomSource`)

### updateShape

```java
protected BlockState updateShape(BlockState p_54928_, Direction p_54929_, BlockState p_54930_, LevelAccessor p_54931_, BlockPos p_54932_, BlockPos p_54933_)
```

**Parameters:**

- `p_54928_` (`BlockState`)
- `p_54929_` (`Direction`)
- `p_54930_` (`BlockState`)
- `p_54931_` (`LevelAccessor`)
- `p_54932_` (`BlockPos`)
- `p_54933_` (`BlockPos`)

**Returns:** `BlockState`

### entityInside

```java
protected void entityInside(BlockState p_54915_, Level p_54916_, BlockPos p_54917_, Entity p_54918_)
```

**Parameters:**

- `p_54915_` (`BlockState`)
- `p_54916_` (`Level`)
- `p_54917_` (`BlockPos`)
- `p_54918_` (`Entity`)

### getPortalTransitionTime

```java
public int getPortalTransitionTime(ServerLevel p_350689_, Entity p_350280_)
```

**Parameters:**

- `p_350689_` (`ServerLevel`)
- `p_350280_` (`Entity`)

**Returns:** `int`

### getPortalDestination

```java
public DimensionTransition getPortalDestination(ServerLevel p_350444_, Entity p_350334_, BlockPos p_350764_)
```

**Parameters:**

- `p_350444_` (`ServerLevel`)
- `p_350334_` (`Entity`)
- `p_350764_` (`BlockPos`)

**Returns:** `DimensionTransition`

### getDimensionTransitionFromExit

```java
return getDimensionTransitionFromExit()
```

**Returns:** `return`

### getDimensionTransitionFromExit

```java
private static DimensionTransition getDimensionTransitionFromExit(Entity p_350906_, BlockPos p_350376_, BlockUtil.FoundRectangle p_350428_, ServerLevel p_350928_, DimensionTransition.PostDimensionTransition p_352093_)
```

**Parameters:**

- `p_350906_` (`Entity`)
- `p_350376_` (`BlockPos`)
- `p_350428_` (`BlockUtil.FoundRectangle`)
- `p_350928_` (`ServerLevel`)
- `p_352093_` (`DimensionTransition.PostDimensionTransition`)

**Returns:** `private static DimensionTransition`

### createDimensionTransition

```java
private static DimensionTransition createDimensionTransition(ServerLevel p_350955_, BlockUtil.FoundRectangle p_350865_, Direction.Axis p_351013_, Vec3 p_351020_, Entity p_350578_, Vec3 p_350266_, float p_350648_, float p_350338_, DimensionTransition.PostDimensionTransition p_352441_)
```

**Parameters:**

- `p_350955_` (`ServerLevel`)
- `p_350865_` (`BlockUtil.FoundRectangle`)
- `p_351013_` (`Direction.Axis`)
- `p_351020_` (`Vec3`)
- `p_350578_` (`Entity`)
- `p_350266_` (`Vec3`)
- `p_350648_` (`float`)
- `p_350338_` (`float`)
- `p_352441_` (`DimensionTransition.PostDimensionTransition`)

**Returns:** `private static DimensionTransition`

### getLocalTransition

```java
public Portal.Transition getLocalTransition()
```

**Returns:** `Portal.Transition`

### animateTick

```java
public void animateTick(BlockState p_221794_, Level p_221795_, BlockPos p_221796_, RandomSource p_221797_)
```

**Parameters:**

- `p_221794_` (`BlockState`)
- `p_221795_` (`Level`)
- `p_221796_` (`BlockPos`)
- `p_221797_` (`RandomSource`)

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304402_, BlockPos p_54912_, BlockState p_54913_)
```

**Parameters:**

- `p_304402_` (`LevelReader`)
- `p_54912_` (`BlockPos`)
- `p_54913_` (`BlockState`)

**Returns:** `ItemStack`

### rotate

```java
protected BlockState rotate(BlockState p_54925_, Rotation p_54926_)
```

**Parameters:**

- `p_54925_` (`BlockState`)
- `p_54926_` (`Rotation`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_54935_)
```

**Parameters:**

- `p_54935_` (`StateDefinition.Builder<Block, BlockState>`)
