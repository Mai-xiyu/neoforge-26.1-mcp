# ChestBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractChestBlock<ChestBlockEntity>`
**Implements:** `SimpleWaterloggedBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ChestBlock>` |  |
| `FACING` | `DirectionProperty` |  |
| `TYPE` | `EnumProperty<ChestType>` |  |
| `WATERLOGGED` | `BooleanProperty` |  |
| `EVENT_SET_OPEN_COUNT` | `int` |  |
| `AABB_OFFSET` | `int` |  |
| `AABB_HEIGHT` | `int` |  |
| `NORTH_AABB` | `VoxelShape` |  |
| `SOUTH_AABB` | `VoxelShape` |  |
| `WEST_AABB` | `VoxelShape` |  |
| `EAST_AABB` | `VoxelShape` |  |
| `AABB` | `VoxelShape` |  |

## Methods

### acceptDouble

```java
public Optional<Container> acceptDouble(ChestBlockEntity p_51591_, ChestBlockEntity p_51592_)
```

**Parameters:**

- `p_51591_` (`ChestBlockEntity`)
- `p_51592_` (`ChestBlockEntity`)

**Returns:** `public Optional<Container>`

### acceptSingle

```java
public Optional<Container> acceptSingle(ChestBlockEntity p_51589_)
```

**Parameters:**

- `p_51589_` (`ChestBlockEntity`)

**Returns:** `public Optional<Container>`

### acceptNone

```java
public Optional<Container> acceptNone()
```

**Returns:** `public Optional<Container>`

### acceptDouble

```java
public Optional<MenuProvider> acceptDouble(ChestBlockEntity p_51604_, ChestBlockEntity p_51605_)
```

**Parameters:**

- `p_51604_` (`ChestBlockEntity`)
- `p_51605_` (`ChestBlockEntity`)

**Returns:** `public Optional<MenuProvider>`

### createMenu

```java
public AbstractContainerMenu createMenu(int p_51622_, Inventory p_51623_, Player p_51624_)
```

**Parameters:**

- `p_51622_` (`int`)
- `p_51623_` (`Inventory`)
- `p_51624_` (`Player`)

**Returns:** `AbstractContainerMenu`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `Component`

### acceptSingle

```java
public Optional<MenuProvider> acceptSingle(ChestBlockEntity p_51602_)
```

**Parameters:**

- `p_51602_` (`ChestBlockEntity`)

**Returns:** `public Optional<MenuProvider>`

### acceptNone

```java
public Optional<MenuProvider> acceptNone()
```

**Returns:** `public Optional<MenuProvider>`

### codec

```java
public MapCodec<? extends ChestBlock> codec()
```

**Returns:** `MapCodec<? extends ChestBlock>`

### ChestBlock

```java
public ChestBlock(BlockBehaviour.Properties p_51490_, Supplier<BlockEntityType<? extends ChestBlockEntity>> p_51491_)
```

**Parameters:**

- `p_51490_` (`BlockBehaviour.Properties`)
- `p_51491_` (`Supplier<BlockEntityType<? extends ChestBlockEntity>>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getBlockType

```java
public static DoubleBlockCombiner.BlockType getBlockType(BlockState p_51583_)
```

**Parameters:**

- `p_51583_` (`BlockState`)

**Returns:** `public static DoubleBlockCombiner.BlockType`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_51567_)
```

**Parameters:**

- `p_51567_` (`BlockState`)

**Returns:** `RenderShape`

### updateShape

```java
protected BlockState updateShape(BlockState p_51555_, Direction p_51556_, BlockState p_51557_, LevelAccessor p_51558_, BlockPos p_51559_, BlockPos p_51560_)
```

**Parameters:**

- `p_51555_` (`BlockState`)
- `p_51556_` (`Direction`)
- `p_51557_` (`BlockState`)
- `p_51558_` (`LevelAccessor`)
- `p_51559_` (`BlockPos`)
- `p_51560_` (`BlockPos`)

**Returns:** `BlockState`

### getShape

```java
protected VoxelShape getShape(BlockState p_51569_, BlockGetter p_51570_, BlockPos p_51571_, CollisionContext p_51572_)
```

**Parameters:**

- `p_51569_` (`BlockState`)
- `p_51570_` (`BlockGetter`)
- `p_51571_` (`BlockPos`)
- `p_51572_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getConnectedDirection

```java
public static Direction getConnectedDirection(BlockState p_51585_)
```

**Parameters:**

- `p_51585_` (`BlockState`)

**Returns:** `public static Direction`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_51493_)
```

**Parameters:**

- `p_51493_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### getFluidState

```java
protected FluidState getFluidState(BlockState p_51581_)
```

**Parameters:**

- `p_51581_` (`BlockState`)

**Returns:** `FluidState`

### onRemove

```java
protected void onRemove(BlockState p_51538_, Level p_51539_, BlockPos p_51540_, BlockState p_51541_, boolean p_51542_)
```

**Parameters:**

- `p_51538_` (`BlockState`)
- `p_51539_` (`Level`)
- `p_51540_` (`BlockPos`)
- `p_51541_` (`BlockState`)
- `p_51542_` (`boolean`)

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_51531_, Level p_51532_, BlockPos p_51533_, Player p_51534_, BlockHitResult p_51536_)
```

**Parameters:**

- `p_51531_` (`BlockState`)
- `p_51532_` (`Level`)
- `p_51533_` (`BlockPos`)
- `p_51534_` (`Player`)
- `p_51536_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getOpenChestStat

```java
protected Stat<ResourceLocation> getOpenChestStat()
```

**Returns:** `protected Stat<ResourceLocation>`

### blockEntityType

```java
public BlockEntityType<? extends ChestBlockEntity> blockEntityType()
```

**Returns:** `public BlockEntityType<? extends ChestBlockEntity>`

### getContainer

```java
public static Container getContainer(ChestBlock p_51512_, BlockState p_51513_, Level p_51514_, BlockPos p_51515_, boolean p_51516_)
```

**Parameters:**

- `p_51512_` (`ChestBlock`)
- `p_51513_` (`BlockState`)
- `p_51514_` (`Level`)
- `p_51515_` (`BlockPos`)
- `p_51516_` (`boolean`)

**Returns:** `Container`

### combine

```java
public DoubleBlockCombiner.NeighborCombineResult<? extends ChestBlockEntity> combine(BlockState p_51544_, Level p_51545_, BlockPos p_51546_, boolean p_51547_)
```

**Parameters:**

- `p_51544_` (`BlockState`)
- `p_51545_` (`Level`)
- `p_51546_` (`BlockPos`)
- `p_51547_` (`boolean`)

**Returns:** `DoubleBlockCombiner.NeighborCombineResult<? extends ChestBlockEntity>`

### getMenuProvider

```java
protected MenuProvider getMenuProvider(BlockState p_51574_, Level p_51575_, BlockPos p_51576_)
```

**Parameters:**

- `p_51574_` (`BlockState`)
- `p_51575_` (`Level`)
- `p_51576_` (`BlockPos`)

**Returns:** `MenuProvider`

### opennessCombiner

```java
public static DoubleBlockCombiner.Combiner<ChestBlockEntity, Float2FloatFunction> opennessCombiner(LidBlockEntity p_51518_)
```

**Parameters:**

- `p_51518_` (`LidBlockEntity`)

**Returns:** `public static DoubleBlockCombiner.Combiner<ChestBlockEntity, Float2FloatFunction>`

### acceptDouble

```java
public Float2FloatFunction acceptDouble(ChestBlockEntity p_51633_, ChestBlockEntity p_51634_)
```

**Parameters:**

- `p_51633_` (`ChestBlockEntity`)
- `p_51634_` (`ChestBlockEntity`)

**Returns:** `public Float2FloatFunction`

### acceptSingle

```java
public Float2FloatFunction acceptSingle(ChestBlockEntity p_51631_)
```

**Parameters:**

- `p_51631_` (`ChestBlockEntity`)

**Returns:** `public Float2FloatFunction`

### acceptNone

```java
public Float2FloatFunction acceptNone()
```

**Returns:** `public Float2FloatFunction`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153064_, BlockState p_153065_)
```

**Parameters:**

- `p_153064_` (`BlockPos`)
- `p_153065_` (`BlockState`)

**Returns:** `BlockEntity`

### ChestBlockEntity

```java
return new ChestBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_153055_, BlockState p_153056_, BlockEntityType<T> p_153057_)
```

**Parameters:**

- `p_153055_` (`Level`)
- `p_153056_` (`BlockState`)
- `p_153057_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### isChestBlockedAt

```java
public static boolean isChestBlockedAt(LevelAccessor p_51509_, BlockPos p_51510_)
```

**Parameters:**

- `p_51509_` (`LevelAccessor`)
- `p_51510_` (`BlockPos`)

**Returns:** `public static boolean`

### isBlockedChestByBlock

```java
private static boolean isBlockedChestByBlock(BlockGetter p_51500_, BlockPos p_51501_)
```

**Parameters:**

- `p_51500_` (`BlockGetter`)
- `p_51501_` (`BlockPos`)

**Returns:** `private static boolean`

### isCatSittingOnChest

```java
private static boolean isCatSittingOnChest(LevelAccessor p_51564_, BlockPos p_51565_)
```

**Parameters:**

- `p_51564_` (`LevelAccessor`)
- `p_51565_` (`BlockPos`)

**Returns:** `private static boolean`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_51520_)
```

**Parameters:**

- `p_51520_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_51527_, Level p_51528_, BlockPos p_51529_)
```

**Parameters:**

- `p_51527_` (`BlockState`)
- `p_51528_` (`Level`)
- `p_51529_` (`BlockPos`)

**Returns:** `int`

### rotate

```java
protected BlockState rotate(BlockState p_51552_, Rotation p_51553_)
```

**Parameters:**

- `p_51552_` (`BlockState`)
- `p_51553_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_51549_, Mirror p_51550_)
```

**Parameters:**

- `p_51549_` (`BlockState`)
- `p_51550_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_51562_)
```

**Parameters:**

- `p_51562_` (`StateDefinition.Builder<Block, BlockState>`)

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_51522_, PathComputationType p_51525_)
```

**Parameters:**

- `p_51522_` (`BlockState`)
- `p_51525_` (`PathComputationType`)

**Returns:** `boolean`

### tick

```java
protected void tick(BlockState p_220958_, ServerLevel p_220959_, BlockPos p_220960_, RandomSource p_220961_)
```

**Parameters:**

- `p_220958_` (`BlockState`)
- `p_220959_` (`ServerLevel`)
- `p_220960_` (`BlockPos`)
- `p_220961_` (`RandomSource`)
