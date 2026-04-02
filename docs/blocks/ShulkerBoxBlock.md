# ShulkerBoxBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ShulkerBoxBlock>` |  |
| `FACING` | `EnumProperty<Direction>` |  |
| `CONTENTS` | `ResourceLocation` |  |

## Methods

### codec

```java
public MapCodec<ShulkerBoxBlock> codec()
```

**Returns:** `MapCodec<ShulkerBoxBlock>`

### ShulkerBoxBlock

```java
public ShulkerBoxBlock(DyeColor p_56188_, BlockBehaviour.Properties p_56189_)
```

**Parameters:**

- `p_56188_` (`DyeColor`)
- `p_56189_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_154552_, BlockState p_154553_)
```

**Parameters:**

- `p_154552_` (`BlockPos`)
- `p_154553_` (`BlockState`)

**Returns:** `BlockEntity`

### ShulkerBoxBlockEntity

```java
return new ShulkerBoxBlockEntity()
```

**Returns:** `return new`

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_154543_, BlockState p_154544_, BlockEntityType<T> p_154545_)
```

**Parameters:**

- `p_154543_` (`Level`)
- `p_154544_` (`BlockState`)
- `p_154545_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### createTickerHelper

```java
return createTickerHelper()
```

**Returns:** `return`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_56255_)
```

**Parameters:**

- `p_56255_` (`BlockState`)

**Returns:** `RenderShape`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_56227_, Level p_56228_, BlockPos p_56229_, Player p_56230_, BlockHitResult p_56232_)
```

**Parameters:**

- `p_56227_` (`BlockState`)
- `p_56228_` (`Level`)
- `p_56229_` (`BlockPos`)
- `p_56230_` (`Player`)
- `p_56232_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### canOpen

```java
private static boolean canOpen(BlockState p_154547_, Level p_154548_, BlockPos p_154549_, ShulkerBoxBlockEntity p_154550_)
```

**Parameters:**

- `p_154547_` (`BlockState`)
- `p_154548_` (`Level`)
- `p_154549_` (`BlockPos`)
- `p_154550_` (`ShulkerBoxBlockEntity`)

**Returns:** `private static boolean`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_56198_)
```

**Parameters:**

- `p_56198_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_56249_)
```

**Parameters:**

- `p_56249_` (`StateDefinition.Builder<Block, BlockState>`)

### playerWillDestroy

```java
public BlockState playerWillDestroy(Level p_56212_, BlockPos p_56213_, BlockState p_56214_, Player p_56215_)
```

**Parameters:**

- `p_56212_` (`Level`)
- `p_56213_` (`BlockPos`)
- `p_56214_` (`BlockState`)
- `p_56215_` (`Player`)

**Returns:** `BlockState`

### getDrops

```java
protected List<ItemStack> getDrops(BlockState p_287632_, LootParams.Builder p_287691_)
```

**Parameters:**

- `p_287632_` (`BlockState`)
- `p_287691_` (`LootParams.Builder`)

**Returns:** `List<ItemStack>`

### onRemove

```java
protected void onRemove(BlockState p_56234_, Level p_56235_, BlockPos p_56236_, BlockState p_56237_, boolean p_56238_)
```

**Parameters:**

- `p_56234_` (`BlockState`)
- `p_56235_` (`Level`)
- `p_56236_` (`BlockPos`)
- `p_56237_` (`BlockState`)
- `p_56238_` (`boolean`)

### appendHoverText

```java
public void appendHoverText(ItemStack p_56193_, Item.TooltipContext p_339693_, List<Component> p_56195_, TooltipFlag p_56196_)
```

**Parameters:**

- `p_56193_` (`ItemStack`)
- `p_339693_` (`Item.TooltipContext`)
- `p_56195_` (`List<Component>`)
- `p_56196_` (`TooltipFlag`)

### getBlockSupportShape

```java
protected VoxelShape getBlockSupportShape(BlockState p_259177_, BlockGetter p_260305_, BlockPos p_259168_)
```

**Parameters:**

- `p_259177_` (`BlockState`)
- `p_260305_` (`BlockGetter`)
- `p_259168_` (`BlockPos`)

**Returns:** `VoxelShape`

### getShape

```java
protected VoxelShape getShape(BlockState p_56257_, BlockGetter p_56258_, BlockPos p_56259_, CollisionContext p_56260_)
```

**Parameters:**

- `p_56257_` (`BlockState`)
- `p_56258_` (`BlockGetter`)
- `p_56259_` (`BlockPos`)
- `p_56260_` (`CollisionContext`)

**Returns:** `VoxelShape`

### propagatesSkylightDown

```java
protected boolean propagatesSkylightDown(BlockState p_341628_, BlockGetter p_341633_, BlockPos p_341694_)
```

**Parameters:**

- `p_341628_` (`BlockState`)
- `p_341633_` (`BlockGetter`)
- `p_341694_` (`BlockPos`)

**Returns:** `boolean`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_56221_)
```

**Parameters:**

- `p_56221_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_56223_, Level p_56224_, BlockPos p_56225_)
```

**Parameters:**

- `p_56223_` (`BlockState`)
- `p_56224_` (`Level`)
- `p_56225_` (`BlockPos`)

**Returns:** `int`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304539_, BlockPos p_56203_, BlockState p_56204_)
```

**Parameters:**

- `p_304539_` (`LevelReader`)
- `p_56203_` (`BlockPos`)
- `p_56204_` (`BlockState`)

**Returns:** `ItemStack`

### getColorFromItem

```java
public static DyeColor getColorFromItem(Item p_56253_)
```

**Parameters:**

- `p_56253_` (`Item`)

**Returns:** `DyeColor`

### getColorFromBlock

```java
public static DyeColor getColorFromBlock(Block p_56263_)
```

**Parameters:**

- `p_56263_` (`Block`)

**Returns:** `DyeColor`

### getBlockByColor

```java
public static Block getBlockByColor(DyeColor p_56191_)
```

**Parameters:**

- `p_56191_` (`DyeColor`)

**Returns:** `public static Block`

### getColor

```java
public DyeColor getColor()
```

**Returns:** `DyeColor`

### getColoredItemStack

```java
public static ItemStack getColoredItemStack(DyeColor p_56251_)
```

**Parameters:**

- `p_56251_` (`DyeColor`)

**Returns:** `public static ItemStack`

### rotate

```java
protected BlockState rotate(BlockState p_56243_, Rotation p_56244_)
```

**Parameters:**

- `p_56243_` (`BlockState`)
- `p_56244_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_56240_, Mirror p_56241_)
```

**Parameters:**

- `p_56240_` (`BlockState`)
- `p_56241_` (`Mirror`)

**Returns:** `BlockState`
