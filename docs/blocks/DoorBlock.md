# DoorBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DoorBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `OPEN` | `BooleanProperty` |  |
| `HINGE` | `EnumProperty<DoorHingeSide>` |  |
| `POWERED` | `BooleanProperty` |  |
| `HALF` | `EnumProperty<DoubleBlockHalf>` |  |
| `AABB_DOOR_THICKNESS` | `float` |  |
| `SOUTH_AABB` | `VoxelShape` |  |
| `NORTH_AABB` | `VoxelShape` |  |
| `WEST_AABB` | `VoxelShape` |  |
| `EAST_AABB` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<? extends DoorBlock> codec()
```

**Returns:** `MapCodec<? extends DoorBlock>`

### DoorBlock

```java
public DoorBlock(BlockSetType p_272854_, BlockBehaviour.Properties p_273303_)
```

**Parameters:**

- `p_272854_` (`BlockSetType`)
- `p_273303_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### type

```java
public BlockSetType type()
```

**Returns:** `public BlockSetType`

### getShape

```java
protected VoxelShape getShape(BlockState p_52807_, BlockGetter p_52808_, BlockPos p_52809_, CollisionContext p_52810_)
```

**Parameters:**

- `p_52807_` (`BlockState`)
- `p_52808_` (`BlockGetter`)
- `p_52809_` (`BlockPos`)
- `p_52810_` (`CollisionContext`)

**Returns:** `VoxelShape`

### updateShape

```java
protected BlockState updateShape(BlockState p_52796_, Direction p_52797_, BlockState p_52798_, LevelAccessor p_52799_, BlockPos p_52800_, BlockPos p_52801_)
```

**Parameters:**

- `p_52796_` (`BlockState`)
- `p_52797_` (`Direction`)
- `p_52798_` (`BlockState`)
- `p_52799_` (`LevelAccessor`)
- `p_52800_` (`BlockPos`)
- `p_52801_` (`BlockPos`)

**Returns:** `BlockState`

### onExplosionHit

```java
protected void onExplosionHit(BlockState p_312769_, Level p_312778_, BlockPos p_311900_, Explosion p_312544_, BiConsumer<ItemStack, BlockPos> p_312107_)
```

**Parameters:**

- `p_312769_` (`BlockState`)
- `p_312778_` (`Level`)
- `p_311900_` (`BlockPos`)
- `p_312544_` (`Explosion`)
- `p_312107_` (`BiConsumer<ItemStack, BlockPos>`)

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_52755_, BlockPos p_52756_, BlockState p_52757_, Player p_52758_)
```

**Parameters:**

- `p_52755_` (`Level`)
- `p_52756_` (`BlockPos`)
- `p_52757_` (`BlockState`)
- `p_52758_` (`Player`)

**Returns:** `BlockState`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_52764_, PathComputationType p_52767_)
```

**Parameters:**

- `p_52764_` (`BlockState`)
- `p_52767_` (`PathComputationType`)

**Returns:** `boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_52739_)
```

**Parameters:**

- `p_52739_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### setPlacedBy

```java
public void setPlacedBy(Level p_52749_, BlockPos p_52750_, BlockState p_52751_, LivingEntity p_52752_, ItemStack p_52753_)
```

**Parameters:**

- `p_52749_` (`Level`)
- `p_52750_` (`BlockPos`)
- `p_52751_` (`BlockState`)
- `p_52752_` (`LivingEntity`)
- `p_52753_` (`ItemStack`)

### getHinge

```java
private DoorHingeSide getHinge(BlockPlaceContext p_52805_)
```

**Parameters:**

- `p_52805_` (`BlockPlaceContext`)

**Returns:** `private DoorHingeSide`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_52769_, Level p_52770_, BlockPos p_52771_, Player p_52772_, BlockHitResult p_52774_)
```

**Parameters:**

- `p_52769_` (`BlockState`)
- `p_52770_` (`Level`)
- `p_52771_` (`BlockPos`)
- `p_52772_` (`Player`)
- `p_52774_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### isOpen

```java
public boolean isOpen(BlockState p_52816_)
```

**Parameters:**

- `p_52816_` (`BlockState`)

**Returns:** `public boolean`

### setOpen

```java
public void setOpen(Entity p_153166_, Level p_153167_, BlockState p_153168_, BlockPos p_153169_, boolean p_153170_)
```

**Parameters:**

- `p_153166_` (`Entity`)
- `p_153167_` (`Level`)
- `p_153168_` (`BlockState`)
- `p_153169_` (`BlockPos`)
- `p_153170_` (`boolean`)

**Returns:** `public void`

### neighborChanged

```java
protected void neighborChanged(BlockState p_52776_, Level p_52777_, BlockPos p_52778_, Block p_52779_, BlockPos p_52780_, boolean p_52781_)
```

**Parameters:**

- `p_52776_` (`BlockState`)
- `p_52777_` (`Level`)
- `p_52778_` (`BlockPos`)
- `p_52779_` (`Block`)
- `p_52780_` (`BlockPos`)
- `p_52781_` (`boolean`)

### canSurvive

```java
protected boolean canSurvive(BlockState p_52783_, LevelReader p_52784_, BlockPos p_52785_)
```

**Parameters:**

- `p_52783_` (`BlockState`)
- `p_52784_` (`LevelReader`)
- `p_52785_` (`BlockPos`)

**Returns:** `boolean`

### playSound

```java
private void playSound(Entity p_251616_, Level p_249656_, BlockPos p_249439_, boolean p_251628_)
```

**Parameters:**

- `p_251616_` (`Entity`)
- `p_249656_` (`Level`)
- `p_249439_` (`BlockPos`)
- `p_251628_` (`boolean`)

**Returns:** `private void`

### rotate

```java
protected BlockState rotate(BlockState p_52790_, Rotation p_52791_)
```

**Parameters:**

- `p_52790_` (`BlockState`)
- `p_52791_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_52787_, Mirror p_52788_)
```

**Parameters:**

- `p_52787_` (`BlockState`)
- `p_52788_` (`Mirror`)

**Returns:** `BlockState`

### getSeed

```java
protected long getSeed(BlockState p_52793_, BlockPos p_52794_)
```

**Parameters:**

- `p_52793_` (`BlockState`)
- `p_52794_` (`BlockPos`)

**Returns:** `long`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_52803_)
```

**Parameters:**

- `p_52803_` (`StateDefinition.Builder<Block, BlockState>`)

### isWoodenDoor

```java
public static boolean isWoodenDoor(Level p_52746_, BlockPos p_52747_)
```

**Parameters:**

- `p_52746_` (`Level`)
- `p_52747_` (`BlockPos`)

**Returns:** `public static boolean`

### isWoodenDoor

```java
public static boolean isWoodenDoor(BlockState p_52818_)
```

**Parameters:**

- `p_52818_` (`BlockState`)

**Returns:** `public static boolean`
