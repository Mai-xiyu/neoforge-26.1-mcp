# FlowerPotBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<FlowerPotBlock>` |  |
| `AABB_SIZE` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### super

```java
 super()
```

**Returns:** ``

### getShape

```java
protected VoxelShape getShape(BlockState p_53556_, BlockGetter p_53557_, BlockPos p_53558_, CollisionContext p_53559_)
```

**Parameters:**

- `p_53556_` (`BlockState`)
- `p_53557_` (`BlockGetter`)
- `p_53558_` (`BlockPos`)
- `p_53559_` (`CollisionContext`)

**Returns:** `VoxelShape`

### useItemOn

```java
protected ItemInteractionResult useItemOn(ItemStack p_316610_, BlockState p_316240_, Level p_316456_, BlockPos p_316502_, Player p_316491_, InteractionHand p_316444_, BlockHitResult p_316826_)
```

**Parameters:**

- `p_316610_` (`ItemStack`)
- `p_316240_` (`BlockState`)
- `p_316456_` (`Level`)
- `p_316502_` (`BlockPos`)
- `p_316491_` (`Player`)
- `p_316444_` (`InteractionHand`)
- `p_316826_` (`BlockHitResult`)

**Returns:** `ItemInteractionResult`

### useWithoutItem

```java
protected InteractionResult useWithoutItem(BlockState p_316363_, Level p_316655_, BlockPos p_316654_, Player p_316338_, BlockHitResult p_316518_)
```

**Parameters:**

- `p_316363_` (`BlockState`)
- `p_316655_` (`Level`)
- `p_316654_` (`BlockPos`)
- `p_316338_` (`Player`)
- `p_316518_` (`BlockHitResult`)

**Returns:** `InteractionResult`

### getCloneItemStack

```java
public ItemStack getCloneItemStack(LevelReader p_304505_, BlockPos p_53532_, BlockState p_53533_)
```

**Parameters:**

- `p_304505_` (`LevelReader`)
- `p_53532_` (`BlockPos`)
- `p_53533_` (`BlockState`)

**Returns:** `ItemStack`

### isEmpty

```java
private boolean isEmpty()
```

**Returns:** `private boolean`

### updateShape

```java
protected BlockState updateShape(BlockState p_53547_, Direction p_53548_, BlockState p_53549_, LevelAccessor p_53550_, BlockPos p_53551_, BlockPos p_53552_)
```

**Parameters:**

- `p_53547_` (`BlockState`)
- `p_53548_` (`Direction`)
- `p_53549_` (`BlockState`)
- `p_53550_` (`LevelAccessor`)
- `p_53551_` (`BlockPos`)
- `p_53552_` (`BlockPos`)

**Returns:** `BlockState`

### getPotted

```java
public Block getPotted()
```

**Returns:** `public Block`

### isPathfindable

```java
protected boolean isPathfindable(BlockState p_53535_, PathComputationType p_53538_)
```

**Parameters:**

- `p_53535_` (`BlockState`)
- `p_53538_` (`PathComputationType`)

**Returns:** `boolean`

### getEmptyPot

```java
public FlowerPotBlock getEmptyPot()
```

**Returns:** `public FlowerPotBlock`

### addPlant

```java
public void addPlant(net.minecraft.resources.ResourceLocation flower, java.util.function.Supplier<? extends Block> fullPot)
```

**Parameters:**

- `flower` (`net.minecraft.resources.ResourceLocation`)
- `fullPot` (`java.util.function.Supplier<? extends Block>`)

### getFullPotsView

```java
public Map<net.minecraft.resources.ResourceLocation, java.util.function.Supplier<? extends Block>> getFullPotsView()
```

**Returns:** `Map<net.minecraft.resources.ResourceLocation, java.util.function.Supplier<? extends Block>>`
