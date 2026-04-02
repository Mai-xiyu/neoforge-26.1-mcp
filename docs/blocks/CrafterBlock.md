# CrafterBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BaseEntityBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CrafterBlock>` |  |
| `CRAFTING` | `BooleanProperty` |  |
| `TRIGGERED` | `BooleanProperty` |  |

## Methods

### CrafterBlock

```java
public CrafterBlock(BlockBehaviour.Properties p_307674_)
```

**Parameters:**

- `p_307674_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### codec

```java
protected MapCodec<CrafterBlock> codec()
```

**Returns:** `MapCodec<CrafterBlock>`

### hasAnalogOutputSignal

```java
protected boolean hasAnalogOutputSignal(BlockState p_307445_)
```

**Parameters:**

- `p_307445_` (`BlockState`)

**Returns:** `boolean`

### getAnalogOutputSignal

```java
protected int getAnalogOutputSignal(BlockState p_307633_, Level p_307264_, BlockPos p_307557_)
```

**Parameters:**

- `p_307633_` (`BlockState`)
- `p_307264_` (`Level`)
- `p_307557_` (`BlockPos`)

**Returns:** `int`

### neighborChanged

```java
protected void neighborChanged(BlockState p_307205_, Level p_307451_, BlockPos p_307272_, Block p_307542_, BlockPos p_307508_, boolean p_307540_)
```

**Parameters:**

- `p_307205_` (`BlockState`)
- `p_307451_` (`Level`)
- `p_307272_` (`BlockPos`)
- `p_307542_` (`Block`)
- `p_307508_` (`BlockPos`)
- `p_307540_` (`boolean`)

### tick

```java
protected void tick(BlockState p_307471_, ServerLevel p_307641_, BlockPos p_307339_, RandomSource p_307565_)
```

**Parameters:**

- `p_307471_` (`BlockState`)
- `p_307641_` (`ServerLevel`)
- `p_307339_` (`BlockPos`)
- `p_307565_` (`RandomSource`)

### getTicker

```java
public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_307308_, BlockState p_307639_, BlockEntityType<T> p_307651_)
```

**Parameters:**

- `p_307308_` (`Level`)
- `p_307639_` (`BlockState`)
- `p_307651_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### setBlockEntityTriggered

```java
private void setBlockEntityTriggered(BlockEntity p_307610_, boolean p_307577_)
```

**Parameters:**

- `p_307610_` (`BlockEntity`)
- `p_307577_` (`boolean`)

**Returns:** `private void`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_307381_, BlockState p_307601_)
```

**Parameters:**

- `p_307381_` (`BlockPos`)
- `p_307601_` (`BlockState`)

**Returns:** `BlockEntity`

### getStateForPlacement

```java
public BlockState getStateForPlacement(BlockPlaceContext p_307251_)
```

**Parameters:**

- `p_307251_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### setPlacedBy

```java
public void setPlacedBy(Level p_307219_, BlockPos p_307681_, BlockState p_307383_, LivingEntity p_307647_, ItemStack p_307190_)
```

**Parameters:**

- `p_307219_` (`Level`)
- `p_307681_` (`BlockPos`)
- `p_307383_` (`BlockState`)
- `p_307647_` (`LivingEntity`)
- `p_307190_` (`ItemStack`)

### onRemove

```java
protected void onRemove(BlockState p_307425_, Level p_307460_, BlockPos p_307342_, BlockState p_307466_, boolean p_307349_)
```

**Parameters:**

- `p_307425_` (`BlockState`)
- `p_307460_` (`Level`)
- `p_307342_` (`BlockPos`)
- `p_307466_` (`BlockState`)
- `p_307349_` (`boolean`)

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_307454_, Level p_307255_, BlockPos p_307303_, Player p_307670_, BlockHitResult p_307546_)
```

**Parameters:**

- `p_307454_` (`BlockState`)
- `p_307255_` (`Level`)
- `p_307303_` (`BlockPos`)
- `p_307670_` (`Player`)
- `p_307546_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### dispenseFrom

```java
protected void dispenseFrom(BlockState p_307495_, ServerLevel p_307310_, BlockPos p_307672_)
```

**Parameters:**

- `p_307495_` (`BlockState`)
- `p_307310_` (`ServerLevel`)
- `p_307672_` (`BlockPos`)

**Returns:** `protected void`

### getPotentialResults

```java
public static Optional<RecipeHolder<CraftingRecipe>> getPotentialResults(Level p_307625_, CraftingInput p_345096_)
```

**Parameters:**

- `p_307625_` (`Level`)
- `p_345096_` (`CraftingInput`)

**Returns:** `public static Optional<RecipeHolder<CraftingRecipe>>`

### dispenseItem

```java
private void dispenseItem(ServerLevel p_335887_, BlockPos p_307620_, CrafterBlockEntity p_307387_, ItemStack p_307296_, BlockState p_307501_, RecipeHolder<CraftingRecipe> p_335494_)
```

**Parameters:**

- `p_335887_` (`ServerLevel`)
- `p_307620_` (`BlockPos`)
- `p_307387_` (`CrafterBlockEntity`)
- `p_307296_` (`ItemStack`)
- `p_307501_` (`BlockState`)
- `p_335494_` (`RecipeHolder<CraftingRecipe>`)

**Returns:** `private void`

### getRenderShape

```java
protected RenderShape getRenderShape(BlockState p_307427_)
```

**Parameters:**

- `p_307427_` (`BlockState`)

**Returns:** `RenderShape`

### rotate

```java
protected BlockState rotate(BlockState p_307240_, Rotation p_307431_)
```

**Parameters:**

- `p_307240_` (`BlockState`)
- `p_307431_` (`Rotation`)

**Returns:** `BlockState`

### mirror

```java
protected BlockState mirror(BlockState p_307514_, Mirror p_307198_)
```

**Parameters:**

- `p_307514_` (`BlockState`)
- `p_307198_` (`Mirror`)

**Returns:** `BlockState`

### createBlockStateDefinition

```java
protected void createBlockStateDefinition(StateDefinition.Builder<Block, BlockState> p_307200_)
```

**Parameters:**

- `p_307200_` (`StateDefinition.Builder<Block, BlockState>`)
