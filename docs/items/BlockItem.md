# BlockItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Methods

### BlockItem

```java
public BlockItem(Block p_40565_, Item.Properties p_40566_)
```

**Parameters:**

- `p_40565_` (`Block`)
- `p_40566_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_40581_)
```

**Parameters:**

- `p_40581_` (`UseOnContext`)

**Returns:** `InteractionResult`

### place

```java
public InteractionResult place(BlockPlaceContext p_40577_)
```

**Parameters:**

- `p_40577_` (`BlockPlaceContext`)

**Returns:** `public InteractionResult`

### updateBlockEntityComponents

```java
 updateBlockEntityComponents()
```

**Returns:** ``

### getPlaceSound ⚠️ *Deprecated*

```java
protected SoundEvent getPlaceSound(BlockState p_40588_)
```

**Parameters:**

- `p_40588_` (`BlockState`)

**Returns:** `protected SoundEvent`

### getPlaceSound

```java
getPlaceSound
    protected SoundEvent getPlaceSound(BlockState state, Level world, BlockPos pos, Player entity)
```

**Parameters:**

- `state` (`BlockState`)
- `world` (`Level`)
- `pos` (`BlockPos`)
- `entity` (`Player`)

**Returns:** `getPlaceSound
    protected SoundEvent`

### updatePlacementContext

```java
public BlockPlaceContext updatePlacementContext(BlockPlaceContext p_40609_)
```

**Parameters:**

- `p_40609_` (`BlockPlaceContext`)

**Returns:** `BlockPlaceContext`

### updateBlockEntityComponents

```java
private static void updateBlockEntityComponents(Level p_331559_, BlockPos p_331993_, ItemStack p_332021_)
```

**Parameters:**

- `p_331559_` (`Level`)
- `p_331993_` (`BlockPos`)
- `p_332021_` (`ItemStack`)

**Returns:** `private static void`

### updateCustomBlockEntityTag

```java
protected boolean updateCustomBlockEntityTag(BlockPos p_40597_, Level p_40598_, Player p_40599_, ItemStack p_40600_, BlockState p_40601_)
```

**Parameters:**

- `p_40597_` (`BlockPos`)
- `p_40598_` (`Level`)
- `p_40599_` (`Player`)
- `p_40600_` (`ItemStack`)
- `p_40601_` (`BlockState`)

**Returns:** `protected boolean`

### updateCustomBlockEntityTag

```java
return updateCustomBlockEntityTag()
```

**Returns:** `return`

### getPlacementState

```java
protected BlockState getPlacementState(BlockPlaceContext p_40613_)
```

**Parameters:**

- `p_40613_` (`BlockPlaceContext`)

**Returns:** `BlockState`

### updateBlockStateFromTag

```java
private BlockState updateBlockStateFromTag(BlockPos p_40603_, Level p_40604_, ItemStack p_40605_, BlockState p_40606_)
```

**Parameters:**

- `p_40603_` (`BlockPos`)
- `p_40604_` (`Level`)
- `p_40605_` (`ItemStack`)
- `p_40606_` (`BlockState`)

**Returns:** `private BlockState`

### canPlace

```java
protected boolean canPlace(BlockPlaceContext p_40611_, BlockState p_40612_)
```

**Parameters:**

- `p_40611_` (`BlockPlaceContext`)
- `p_40612_` (`BlockState`)

**Returns:** `protected boolean`

### mustSurvive

```java
protected boolean mustSurvive()
```

**Returns:** `protected boolean`

### placeBlock

```java
protected boolean placeBlock(BlockPlaceContext p_40578_, BlockState p_40579_)
```

**Parameters:**

- `p_40578_` (`BlockPlaceContext`)
- `p_40579_` (`BlockState`)

**Returns:** `protected boolean`

### updateCustomBlockEntityTag

```java
public static boolean updateCustomBlockEntityTag(Level p_40583_, Player p_40584_, BlockPos p_40585_, ItemStack p_40586_)
```

**Parameters:**

- `p_40583_` (`Level`)
- `p_40584_` (`Player`)
- `p_40585_` (`BlockPos`)
- `p_40586_` (`ItemStack`)

**Returns:** `public static boolean`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `String`

### appendHoverText

```java
public void appendHoverText(ItemStack p_40572_, Item.TooltipContext p_339655_, List<Component> p_40574_, TooltipFlag p_40575_)
```

**Parameters:**

- `p_40572_` (`ItemStack`)
- `p_339655_` (`Item.TooltipContext`)
- `p_40574_` (`List<Component>`)
- `p_40575_` (`TooltipFlag`)

### getBlock

```java
public Block getBlock()
```

**Returns:** `public Block`

### registerBlocks

```java
public void registerBlocks(Map<Block, Item> p_40607_, Item p_40608_)
```

**Parameters:**

- `p_40607_` (`Map<Block, Item>`)
- `p_40608_` (`Item`)

**Returns:** `public void`

### removeFromBlockToItemMap

```java
public void removeFromBlockToItemMap(Map<Block, Item> blockToItemMap, Item itemIn)
```

**Parameters:**

- `blockToItemMap` (`Map<Block, Item>`)
- `itemIn` (`Item`)

### canFitInsideContainerItems

```java
public boolean canFitInsideContainerItems()
```

**Returns:** `boolean`

### onDestroyed

```java
public void onDestroyed(ItemEntity p_150700_)
```

**Parameters:**

- `p_150700_` (`ItemEntity`)

### setBlockEntityData

```java
public static void setBlockEntityData(ItemStack p_186339_, BlockEntityType<?> p_186340_, CompoundTag p_186341_)
```

**Parameters:**

- `p_186339_` (`ItemStack`)
- `p_186340_` (`BlockEntityType<?>`)
- `p_186341_` (`CompoundTag`)

**Returns:** `public static void`

### requiredFeatures

```java
public FeatureFlagSet requiredFeatures()
```

**Returns:** `FeatureFlagSet`
