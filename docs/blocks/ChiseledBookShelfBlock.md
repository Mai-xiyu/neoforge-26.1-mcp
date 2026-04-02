# ChiseledBookShelfBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ChiseledBookShelfBlock>` |  |
| `BOOKS_PER_ROW` | `int` |  |
| `SLOT_OCCUPIED_PROPERTIES` | `List<BooleanProperty>` |  |

## Methods

### codec

```java
public MapCodec<ChiseledBookShelfBlock> codec()
```

**Returns:** `MapCodec<ChiseledBookShelfBlock>`

### ChiseledBookShelfBlock

```java
public ChiseledBookShelfBlock(BlockBehaviour.Properties p_249989_)
```

**Parameters:**

- `p_249989_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_251274_)
```

**Parameters:**

- `p_251274_` (`BlockState`)

**Returns:** `RenderShape`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316457_, BlockState p_316201_, Level p_316747_, BlockPos p_316462_, Player p_316228_, InteractionHand p_316721_, BlockHitResult p_316464_)
```

**Parameters:**

- `p_316457_` (`ItemStack`)
- `p_316201_` (`BlockState`)
- `p_316747_` (`Level`)
- `p_316462_` (`BlockPos`)
- `p_316228_` (`Player`)
- `p_316721_` (`InteractionHand`)
- `p_316464_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316403_, Level p_316842_, BlockPos p_316539_, Player p_316349_, BlockHitResult p_316278_)
```

**Parameters:**

- `p_316403_` (`BlockState`)
- `p_316842_` (`Level`)
- `p_316539_` (`BlockPos`)
- `p_316349_` (`Player`)
- `p_316278_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getHitSlot

```java
private OptionalInt getHitSlot(BlockHitResult p_316156_, BlockState p_316148_)
```

**Parameters:**

- `p_316156_` (`BlockHitResult`)
- `p_316148_` (`BlockState`)

**Returns:** `private OptionalInt`

### getRelativeHitCoordinatesForBlockFace

```java
private static Optional<Vec2> getRelativeHitCoordinatesForBlockFace(BlockHitResult p_261714_, Direction p_262116_)
```

**Parameters:**

- `p_261714_` (`BlockHitResult`)
- `p_262116_` (`Direction`)

**Returns:** `private static Optional<Vec2>`

### getSection

```java
private static int getSection(float p_261599_)
```

**Parameters:**

- `p_261599_` (`float`)

**Returns:** `private static int`

### addBook

```java
private static void addBook(Level p_262592_, BlockPos p_262669_, Player p_262572_, ChiseledBookShelfBlockEntity p_262606_, ItemStack p_262587_, int p_262692_)
```

**Parameters:**

- `p_262592_` (`Level`)
- `p_262669_` (`BlockPos`)
- `p_262572_` (`Player`)
- `p_262606_` (`ChiseledBookShelfBlockEntity`)
- `p_262587_` (`ItemStack`)
- `p_262692_` (`int`)

**Returns:** `private static void`

### removeBook

```java
private static void removeBook(Level p_262654_, BlockPos p_262601_, Player p_262636_, ChiseledBookShelfBlockEntity p_262605_, int p_262673_)
```

**Parameters:**

- `p_262654_` (`Level`)
- `p_262601_` (`BlockPos`)
- `p_262636_` (`Player`)
- `p_262605_` (`ChiseledBookShelfBlockEntity`)
- `p_262673_` (`int`)

**Returns:** `private static void`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_250440_, BlockState p_248729_)
```

**Parameters:**

- `p_250440_` (`BlockPos`)
- `p_248729_` (`BlockState`)

**Returns:** `BlockEntity`

### ChiseledBookShelfBlockEntity

```java
return new ChiseledBookShelfBlockEntity()
```

**Returns:** `return new`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_250973_)
```

**Parameters:**

- `p_250973_` (`StateDefinition.Builder<Block, BlockState>`)

### onRemove

```java
protected void onRemove(BlockState p_250071_, Level p_251485_, BlockPos p_251954_, BlockState p_251852_, boolean p_252250_)
```

**Parameters:**

- `p_250071_` (`BlockState`)
- `p_251485_` (`Level`)
- `p_251954_` (`BlockPos`)
- `p_251852_` (`BlockState`)
- `p_252250_` (`boolean`)

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_251318_)
```

**Parameters:**

- `p_251318_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### rotate

```java
public BlockState rotate(BlockState p_288975_, Rotation p_288993_)
```

**Parameters:**

- `p_288975_` (`BlockState`)
- `p_288993_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
public BlockState mirror(BlockState p_289000_, Mirror p_288962_)
```

**Parameters:**

- `p_289000_` (`BlockState`)
- `p_288962_` (`Mirror`)

**Returns:** `BlockState`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_249302_)
```

**Parameters:**

- `p_249302_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_249192_, Level p_252207_, BlockPos p_248999_)
```

**Parameters:**

- `p_249192_` (`BlockState`)
- `p_252207_` (`Level`)
- `p_248999_` (`BlockPos`)

**Returns:** `int`
