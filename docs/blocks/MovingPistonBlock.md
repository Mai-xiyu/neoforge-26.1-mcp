# MovingPistonBlock

**Package:** `net.minecraft.world.level.block.piston`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MovingPistonBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `TYPE` | `EnumProperty<PistonType>` |  |

## Methods

### codec

```java
public MapCodec<MovingPistonBlock> codec()
```

**Returns:** `MapCodec<MovingPistonBlock>`

### MovingPistonBlock

```java
public MovingPistonBlock(BlockBehaviour.Properties p_60050_)
```

**Parameters:**

- `p_60050_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_155879_, BlockState p_155880_)
```

**Parameters:**

- `p_155879_` (`BlockPos`)
- `p_155880_` (`BlockState`)

**Returns:** `BlockEntity`

### newMovingBlockEntity

```java
public static BlockEntity newMovingBlockEntity(BlockPos p_155882_, BlockState p_155883_, BlockState p_155884_, Direction p_155885_, boolean p_155886_, boolean p_155887_)
```

**Parameters:**

- `p_155882_` (`BlockPos`)
- `p_155883_` (`BlockState`)
- `p_155884_` (`BlockState`)
- `p_155885_` (`Direction`)
- `p_155886_` (`boolean`)
- `p_155887_` (`boolean`)

**Returns:** `public static BlockEntity`

### PistonMovingBlockEntity

```java
return new PistonMovingBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_155875_, BlockState p_155876_, BlockEntityType<T> p_155877_)
```

**Parameters:**

- `p_155875_` (`Level`)
- `p_155876_` (`BlockState`)
- `p_155877_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createTickerHelper

```java
return createTickerHelper()
```

**Returns:** `return`

### onRemove

```java
protected void onRemove(BlockState p_60077_, Level p_60078_, BlockPos p_60079_, BlockState p_60080_, boolean p_60081_)
```

**Parameters:**

- `p_60077_` (`BlockState`)
- `p_60078_` (`Level`)
- `p_60079_` (`BlockPos`)
- `p_60080_` (`BlockState`)
- `p_60081_` (`boolean`)

### destroy

```java
public void destroy(LevelAccessor p_60061_, BlockPos p_60062_, BlockState p_60063_)
```

**Parameters:**

- `p_60061_` (`LevelAccessor`)
- `p_60062_` (`BlockPos`)
- `p_60063_` (`BlockState`)

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_60070_, Level p_60071_, BlockPos p_60072_, Player p_60073_, BlockHitResult p_60075_)
```

**Parameters:**

- `p_60070_` (`BlockState`)
- `p_60071_` (`Level`)
- `p_60072_` (`BlockPos`)
- `p_60073_` (`Player`)
- `p_60075_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getDrops

```java
protected List<ItemStack> getDrops(BlockState p_287650_, LootParams.Builder p_287754_)
```

**Parameters:**

- `p_287650_` (`BlockState`)
- `p_287754_` (`LootParams.Builder`)

**Returns:** `List<ItemStack>`

### getShape

```java
protected VoxelShape getShape(BlockState p_60099_, BlockGetter p_60100_, BlockPos p_60101_, CollisionContext p_60102_)
```

**Parameters:**

- `p_60099_` (`BlockState`)
- `p_60100_` (`BlockGetter`)
- `p_60101_` (`BlockPos`)
- `p_60102_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_60104_, BlockGetter p_60105_, BlockPos p_60106_, CollisionContext p_60107_)
```

**Parameters:**

- `p_60104_` (`BlockState`)
- `p_60105_` (`BlockGetter`)
- `p_60106_` (`BlockPos`)
- `p_60107_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304937_, BlockPos p_60058_, BlockState p_60059_)
```

**Parameters:**

- `p_304937_` (`LevelReader`)
- `p_60058_` (`BlockPos`)
- `p_60059_` (`BlockState`)

**Returns:** `ItemStack`

### rotate

```java
protected BlockState rotate(BlockState p_60086_, Rotation p_60087_)
```

**Parameters:**

- `p_60086_` (`BlockState`)
- `p_60087_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_60083_, Mirror p_60084_)
```

**Parameters:**

- `p_60083_` (`BlockState`)
- `p_60084_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_60097_)
```

**Parameters:**

- `p_60097_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_60065_, PathComputationType p_60068_)
```

**Parameters:**

- `p_60065_` (`BlockState`)
- `p_60068_` (`PathComputationType`)

**Returns:** `boolean`
