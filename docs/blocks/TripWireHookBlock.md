# TripWireHookBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TripWireHookBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `POWERED` | `BooleanProperty` |  |
| `ATTACHED` | `BooleanProperty` |  |
| `WIRE_DIST_MIN` | `int` |  |
| `WIRE_DIST_MAX` | `int` |  |
| `AABB_OFFSET` | `int` |  |
| `NORTH_AABB` | `VoxelShape` |  |
| `SOUTH_AABB` | `VoxelShape` |  |
| `WEST_AABB` | `VoxelShape` |  |
| `EAST_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<TripWireHookBlock> codec()
```

**Returns:** `MapCodec<TripWireHookBlock>`

### TripWireHookBlock

```java
public TripWireHookBlock(BlockBehaviour.Properties p_57676_)
```

**Parameters:**

- `p_57676_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_57740_, BlockGetter p_57741_, BlockPos p_57742_, CollisionContext p_57743_)
```

**Parameters:**

- `p_57740_` (`BlockState`)
- `p_57741_` (`BlockGetter`)
- `p_57742_` (`BlockPos`)
- `p_57743_` (`CollisionContext`)

**Returns:** `VoxelShape`

### canSurvive

```java
protected boolean canSurvive(BlockState p_57721_, LevelReader p_57722_, BlockPos p_57723_)
```

**Parameters:**

- `p_57721_` (`BlockState`)
- `p_57722_` (`LevelReader`)
- `p_57723_` (`BlockPos`)

**Returns:** `boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_57731_, Direction p_57732_, BlockState p_57733_, LevelAccessor p_57734_, BlockPos p_57735_, BlockPos p_57736_)
```

**Parameters:**

- `p_57731_` (`BlockState`)
- `p_57732_` (`Direction`)
- `p_57733_` (`BlockState`)
- `p_57734_` (`LevelAccessor`)
- `p_57735_` (`BlockPos`)
- `p_57736_` (`BlockPos`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_57678_)
```

**Parameters:**

- `p_57678_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### setPlacedBy

```java
public void setPlacedBy(Level p_57680_, BlockPos p_57681_, BlockState p_57682_, LivingEntity p_57683_, ItemStack p_57684_)
```

**Parameters:**

- `p_57680_` (`Level`)
- `p_57681_` (`BlockPos`)
- `p_57682_` (`BlockState`)
- `p_57683_` (`LivingEntity`)
- `p_57684_` (`ItemStack`)

### calculateState

```java
 calculateState()
```

**Returns:** ``

### calculateState

```java
public static void calculateState(Level p_57686_, BlockPos p_57687_, BlockState p_57688_, boolean p_57689_, boolean p_57690_, int p_57691_, BlockState p_57692_)
```

**Parameters:**

- `p_57686_` (`Level`)
- `p_57687_` (`BlockPos`)
- `p_57688_` (`BlockState`)
- `p_57689_` (`boolean`)
- `p_57690_` (`boolean`)
- `p_57691_` (`int`)
- `p_57692_` (`BlockState`)

**Returns:** `public static void`

### notifyNeighbors

```java
 notifyNeighbors()
```

**Returns:** ``

### emitState

```java
 emitState()
```

**Returns:** ``

### emitState

```java
 emitState()
```

**Returns:** ``

### notifyNeighbors

```java
 notifyNeighbors()
```

**Returns:** ``

### tick

```java
protected void tick(BlockState p_222610_, ServerLevel p_222611_, BlockPos p_222612_, RandomSource p_222613_)
```

**Parameters:**

- `p_222610_` (`BlockState`)
- `p_222611_` (`ServerLevel`)
- `p_222612_` (`BlockPos`)
- `p_222613_` (`RandomSource`)

### calculateState

```java
 calculateState()
```

**Returns:** ``

### emitState

```java
private static void emitState(Level p_222603_, BlockPos p_222604_, boolean p_222605_, boolean p_222606_, boolean p_222607_, boolean p_222608_)
```

**Parameters:**

- `p_222603_` (`Level`)
- `p_222604_` (`BlockPos`)
- `p_222605_` (`boolean`)
- `p_222606_` (`boolean`)
- `p_222607_` (`boolean`)
- `p_222608_` (`boolean`)

**Returns:** `private static void`

### notifyNeighbors

```java
private static void notifyNeighbors(Block p_304466_, Level p_57694_, BlockPos p_57695_, Direction p_57696_)
```

**Parameters:**

- `p_304466_` (`Block`)
- `p_57694_` (`Level`)
- `p_57695_` (`BlockPos`)
- `p_57696_` (`Direction`)

**Returns:** `private static void`

### onRemove

```java
protected void onRemove(BlockState p_57715_, Level p_57716_, BlockPos p_57717_, BlockState p_57718_, boolean p_57719_)
```

**Parameters:**

- `p_57715_` (`BlockState`)
- `p_57716_` (`Level`)
- `p_57717_` (`BlockPos`)
- `p_57718_` (`BlockState`)
- `p_57719_` (`boolean`)

### calculateState

```java
 calculateState()
```

**Returns:** ``

### getSignal

```java
protected int getSignal(BlockState p_57710_, BlockGetter p_57711_, BlockPos p_57712_, Direction p_57713_)
```

**Parameters:**

- `p_57710_` (`BlockState`)
- `p_57711_` (`BlockGetter`)
- `p_57712_` (`BlockPos`)
- `p_57713_` (`Direction`)

**Returns:** `int`

### getDirectSignal

```java
protected int getDirectSignal(BlockState p_57745_, BlockGetter p_57746_, BlockPos p_57747_, Direction p_57748_)
```

**Parameters:**

- `p_57745_` (`BlockState`)
- `p_57746_` (`BlockGetter`)
- `p_57747_` (`BlockPos`)
- `p_57748_` (`Direction`)

**Returns:** `int`

### isSignalSource

```java
protected boolean isSignalSource(BlockState p_57750_)
```

**Parameters:**

- `p_57750_` (`BlockState`)

**Returns:** `boolean`

### rotate

```java
protected BlockState rotate(BlockState p_57728_, Rotation p_57729_)
```

**Parameters:**

- `p_57728_` (`BlockState`)
- `p_57729_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_57725_, Mirror p_57726_)
```

**Parameters:**

- `p_57725_` (`BlockState`)
- `p_57726_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_57738_)
```

**Parameters:**

- `p_57738_` (`StateDefinition.Builder<Block, BlockState>`)
