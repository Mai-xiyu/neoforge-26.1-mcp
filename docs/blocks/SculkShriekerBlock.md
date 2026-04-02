# SculkShriekerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SculkShriekerBlock>` |  |
| `SHRIEKING` | `BooleanProperty` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `CAN_SUMMON` | `BooleanProperty` |  |
| `COLLIDER` | `VoxelShape` |  |
| `TOP_Y` | `double` |  |

## Methods

### codec

```java
public MapCodec<SculkShriekerBlock> codec()
```

**Returns:** `MapCodec<SculkShriekerBlock>`

### SculkShriekerBlock

```java
public SculkShriekerBlock(BlockBehaviour.Properties p_222159_)
```

**Parameters:**

- `p_222159_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_222211_)
```

**Parameters:**

- `p_222211_` (`StateDefinition.Builder<Block, BlockState>`)

### stepOn

```java
public void stepOn(Level p_222177_, BlockPos p_222178_, BlockState p_222179_, Entity p_222180_)
```

**Parameters:**

- `p_222177_` (`Level`)
- `p_222178_` (`BlockPos`)
- `p_222179_` (`BlockState`)
- `p_222180_` (`Entity`)

### onRemove

```java
protected void onRemove(BlockState p_222198_, Level p_222199_, BlockPos p_222200_, BlockState p_222201_, boolean p_222202_)
```

**Parameters:**

- `p_222198_` (`BlockState`)
- `p_222199_` (`Level`)
- `p_222200_` (`BlockPos`)
- `p_222201_` (`BlockState`)
- `p_222202_` (`boolean`)

### tick

```java
protected void tick(BlockState p_222187_, ServerLevel p_222188_, BlockPos p_222189_, RandomSource p_222190_)
```

**Parameters:**

- `p_222187_` (`BlockState`)
- `p_222188_` (`ServerLevel`)
- `p_222189_` (`BlockPos`)
- `p_222190_` (`RandomSource`)

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_222219_)
```

**Parameters:**

- `p_222219_` (`BlockState`)

**Returns:** `RenderShape`

### getCollisionShape

```java
protected VoxelShape getCollisionShape(BlockState p_222225_, BlockGetter p_222226_, BlockPos p_222227_, CollisionContext p_222228_)
```

**Parameters:**

- `p_222225_` (`BlockState`)
- `p_222226_` (`BlockGetter`)
- `p_222227_` (`BlockPos`)
- `p_222228_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getOcclusionShape

```java
protected VoxelShape getOcclusionShape(BlockState p_222221_, BlockGetter p_222222_, BlockPos p_222223_)
```

**Parameters:**

- `p_222221_` (`BlockState`)
- `p_222222_` (`BlockGetter`)
- `p_222223_` (`BlockPos`)

**Returns:** `VoxelShape`

### useShapeForLightOcclusion

```java
protected boolean useShapeForLightOcclusion(BlockState p_222232_)
```

**Parameters:**

- `p_222232_` (`BlockState`)

**Returns:** `boolean`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_222213_, BlockState p_222214_)
```

**Parameters:**

- `p_222213_` (`BlockPos`)
- `p_222214_` (`BlockState`)

**Returns:** `BlockEntity`

### SculkShriekerBlockEntity

```java
return new SculkShriekerBlockEntity()
```

**Returns:** `return new`

### updateShape

```java
protected BlockState updateShape(BlockState p_222204_, Direction p_222205_, BlockState p_222206_, LevelAccessor p_222207_, BlockPos p_222208_, BlockPos p_222209_)
```

**Parameters:**

- `p_222204_` (`BlockState`)
- `p_222205_` (`Direction`)
- `p_222206_` (`BlockState`)
- `p_222207_` (`LevelAccessor`)
- `p_222208_` (`BlockPos`)
- `p_222209_` (`BlockPos`)

**Returns:** `BlockState`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_222171_)
```

**Parameters:**

- `p_222171_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_222230_)
```

**Parameters:**

- `p_222230_` (`BlockState`)

**Returns:** `FluidState`

### spawnAfterBreak

```java
protected void spawnAfterBreak(BlockState p_222192_, ServerLevel p_222193_, BlockPos p_222194_, ItemStack p_222195_, boolean p_222196_)
```

**Parameters:**

- `p_222192_` (`BlockState`)
- `p_222193_` (`ServerLevel`)
- `p_222194_` (`BlockPos`)
- `p_222195_` (`ItemStack`)
- `p_222196_` (`boolean`)

### getExpDrop

```java
public int getExpDrop(BlockState state, net.minecraft.world.level.LevelAccessor level, BlockPos pos, .jetbrains.annotations.Nullable net.minecraft.world.level.block.entity.BlockEntity blockEntity, .jetbrains.annotations.Nullable net.minecraft.world.entity.Entity breaker, ItemStack tool)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`net.minecraft.world.level.LevelAccessor`)
- `pos` (`BlockPos`)
- `blockEntity` (`.jetbrains.annotations.Nullable net.minecraft.world.level.block.entity.BlockEntity`)
- `breaker` (`.jetbrains.annotations.Nullable net.minecraft.world.entity.Entity`)
- `tool` (`ItemStack`)

**Returns:** `int`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_222173_, BlockState p_222174_, BlockEntityType<T> p_222175_)
```

**Parameters:**

- `p_222173_` (`Level`)
- `p_222174_` (`BlockState`)
- `p_222175_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`
