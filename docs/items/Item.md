# Item

**Package:** `net.minecraft.world.item`
**Type:** class
**Implements:** `FeatureElement`, `ItemLike`, `net.neoforged.neoforge.common.extensions.IItemExtension`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BY_BLOCK` | `Map<Block, Item>` |  |
| `BASE_ATTACK_DAMAGE_ID` | `ResourceLocation` |  |
| `BASE_ATTACK_SPEED_ID` | `ResourceLocation` |  |
| `DEFAULT_MAX_STACK_SIZE` | `int` |  |
| `ABSOLUTE_MAX_STACK_SIZE` | `int` |  |
| `MAX_BAR_WIDTH` | `int` |  |

## Methods

### getId

```java
public static int getId(Item p_41394_)
```

**Parameters:**

- `p_41394_` (`Item`)

**Returns:** `public static int`

### byId

```java
public static Item byId(int p_41446_)
```

**Parameters:**

- `p_41446_` (`int`)

**Returns:** `public static Item`

### byBlock

```java
public static Item byBlock(Block p_41440_)
```

**Parameters:**

- `p_41440_` (`Block`)

**Returns:** `Item`

### Item

```java
public Item(Item.Properties p_41383_)
```

**Parameters:**

- `p_41383_` (`Item.Properties`)

**Returns:** `public`

### builtInRegistryHolder

```java
public Holder.Reference<Item> builtInRegistryHolder()
```

**Returns:** `Holder.Reference<Item>`

### components

```java
public DataComponentMap components()
```

**Returns:** `public DataComponentMap`

### onDestroyed

```java
void onDestroyed(ItemEntity p_150887_)
```

**Parameters:**

- `p_150887_` (`ItemEntity`)

### verifyComponentsAfterLoad

```java
public void verifyComponentsAfterLoad(ItemStack p_331627_)
```

**Parameters:**

- `p_331627_` (`ItemStack`)

**Returns:** `public void`

### canAttackBlock

```java
public boolean canAttackBlock(BlockState p_41441_, Level p_41442_, BlockPos p_41443_, Player p_41444_)
```

**Parameters:**

- `p_41441_` (`BlockState`)
- `p_41442_` (`Level`)
- `p_41443_` (`BlockPos`)
- `p_41444_` (`Player`)

**Returns:** `public boolean`

### asItem

```java
public Item asItem()
```

**Returns:** `Item`

### useOn

```java
public InteractionResult useOn(UseOnContext p_41427_)
```

**Parameters:**

- `p_41427_` (`UseOnContext`)

**Returns:** `public InteractionResult`

### getDestroySpeed

```java
public float getDestroySpeed(ItemStack p_41425_, BlockState p_41426_)
```

**Parameters:**

- `p_41425_` (`ItemStack`)
- `p_41426_` (`BlockState`)

**Returns:** `public float`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_41432_, Player p_41433_, InteractionHand p_41434_)
```

**Parameters:**

- `p_41432_` (`Level`)
- `p_41433_` (`Player`)
- `p_41434_` (`InteractionHand`)

**Returns:** `public InteractionResultHolder<ItemStack>`

### finishUsingItem

```java
public ItemStack finishUsingItem(ItemStack p_41409_, Level p_41410_, LivingEntity p_41411_)
```

**Parameters:**

- `p_41409_` (`ItemStack`)
- `p_41410_` (`Level`)
- `p_41411_` (`LivingEntity`)

**Returns:** `public ItemStack`

### isBarVisible

```java
public boolean isBarVisible(ItemStack p_150899_)
```

**Parameters:**

- `p_150899_` (`ItemStack`)

**Returns:** `public boolean`

### getBarWidth

```java
public int getBarWidth(ItemStack p_150900_)
```

**Parameters:**

- `p_150900_` (`ItemStack`)

**Returns:** `public int`

### getBarColor

```java
public int getBarColor(ItemStack p_150901_)
```

**Parameters:**

- `p_150901_` (`ItemStack`)

**Returns:** `public int`

### overrideStackedOnOther

```java
public boolean overrideStackedOnOther(ItemStack p_150888_, Slot p_150889_, ClickAction p_150890_, Player p_150891_)
```

**Parameters:**

- `p_150888_` (`ItemStack`)
- `p_150889_` (`Slot`)
- `p_150890_` (`ClickAction`)
- `p_150891_` (`Player`)

**Returns:** `public boolean`

### overrideOtherStackedOnMe

```java
public boolean overrideOtherStackedOnMe(ItemStack p_150892_, ItemStack p_150893_, Slot p_150894_, ClickAction p_150895_, Player p_150896_, SlotAccess p_150897_)
```

**Parameters:**

- `p_150892_` (`ItemStack`)
- `p_150893_` (`ItemStack`)
- `p_150894_` (`Slot`)
- `p_150895_` (`ClickAction`)
- `p_150896_` (`Player`)
- `p_150897_` (`SlotAccess`)

**Returns:** `public boolean`

### getAttackDamageBonus

```java
public float getAttackDamageBonus(Entity p_345249_, float p_336179_, DamageSource p_345403_)
```

**Parameters:**

- `p_345249_` (`Entity`)
- `p_336179_` (`float`)
- `p_345403_` (`DamageSource`)

**Returns:** `public float`

### hurtEnemy

```java
public boolean hurtEnemy(ItemStack p_41395_, LivingEntity p_41396_, LivingEntity p_41397_)
```

**Parameters:**

- `p_41395_` (`ItemStack`)
- `p_41396_` (`LivingEntity`)
- `p_41397_` (`LivingEntity`)

**Returns:** `public boolean`

### postHurtEnemy

```java
public void postHurtEnemy(ItemStack p_346136_, LivingEntity p_346250_, LivingEntity p_346014_)
```

**Parameters:**

- `p_346136_` (`ItemStack`)
- `p_346250_` (`LivingEntity`)
- `p_346014_` (`LivingEntity`)

**Returns:** `public void`

### mineBlock

```java
public boolean mineBlock(ItemStack p_41416_, Level p_41417_, BlockState p_41418_, BlockPos p_41419_, LivingEntity p_41420_)
```

**Parameters:**

- `p_41416_` (`ItemStack`)
- `p_41417_` (`Level`)
- `p_41418_` (`BlockState`)
- `p_41419_` (`BlockPos`)
- `p_41420_` (`LivingEntity`)

**Returns:** `public boolean`

### isCorrectToolForDrops

```java
public boolean isCorrectToolForDrops(ItemStack p_336002_, BlockState p_41450_)
```

**Parameters:**

- `p_336002_` (`ItemStack`)
- `p_41450_` (`BlockState`)

**Returns:** `public boolean`

### interactLivingEntity

```java
public InteractionResult interactLivingEntity(ItemStack p_41398_, Player p_41399_, LivingEntity p_41400_, InteractionHand p_41401_)
```

**Parameters:**

- `p_41398_` (`ItemStack`)
- `p_41399_` (`Player`)
- `p_41400_` (`LivingEntity`)
- `p_41401_` (`InteractionHand`)

**Returns:** `public InteractionResult`

### getDescription

```java
public Component getDescription()
```

**Returns:** `public Component`

### toString

```java
public String toString()
```

**Returns:** `String`

### getOrCreateDescriptionId

```java
protected String getOrCreateDescriptionId()
```

**Returns:** `protected String`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `public String`

### getDescriptionId

```java
public String getDescriptionId(ItemStack p_41455_)
```

**Parameters:**

- `p_41455_` (`ItemStack`)

**Returns:** `public String`

### getCraftingRemainingItem ⚠️ *Deprecated*

```java
Use ItemStack sensitive version.
    public final Item getCraftingRemainingItem()
```

**Returns:** `Use ItemStack sensitive version.
    public final Item`

### hasCraftingRemainingItem ⚠️ *Deprecated*

```java
Use ItemStack sensitive version.
    public boolean hasCraftingRemainingItem()
```

**Returns:** `Use ItemStack sensitive version.
    public boolean`

### inventoryTick

```java
public void inventoryTick(ItemStack p_41404_, Level p_41405_, Entity p_41406_, int p_41407_, boolean p_41408_)
```

**Parameters:**

- `p_41404_` (`ItemStack`)
- `p_41405_` (`Level`)
- `p_41406_` (`Entity`)
- `p_41407_` (`int`)
- `p_41408_` (`boolean`)

**Returns:** `public void`

### onCraftedBy

```java
public void onCraftedBy(ItemStack p_41447_, Level p_41448_, Player p_41449_)
```

**Parameters:**

- `p_41447_` (`ItemStack`)
- `p_41448_` (`Level`)
- `p_41449_` (`Player`)

**Returns:** `public void`

### onCraftedPostProcess

```java
public void onCraftedPostProcess(ItemStack p_307483_, Level p_307537_)
```

**Parameters:**

- `p_307483_` (`ItemStack`)
- `p_307537_` (`Level`)

**Returns:** `public void`

### isComplex

```java
public boolean isComplex()
```

**Returns:** `public boolean`

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_41452_)
```

**Parameters:**

- `p_41452_` (`ItemStack`)

**Returns:** `public UseAnim`

### getUseDuration

```java
public int getUseDuration(ItemStack p_41454_, LivingEntity p_344979_)
```

**Parameters:**

- `p_41454_` (`ItemStack`)
- `p_344979_` (`LivingEntity`)

**Returns:** `public int`

### releaseUsing

```java
public void releaseUsing(ItemStack p_41412_, Level p_41413_, LivingEntity p_41414_, int p_41415_)
```

**Parameters:**

- `p_41412_` (`ItemStack`)
- `p_41413_` (`Level`)
- `p_41414_` (`LivingEntity`)
- `p_41415_` (`int`)

**Returns:** `public void`

### appendHoverText

```java
public void appendHoverText(ItemStack p_41421_, Item.TooltipContext p_339594_, List<Component> p_41423_, TooltipFlag p_41424_)
```

**Parameters:**

- `p_41421_` (`ItemStack`)
- `p_339594_` (`Item.TooltipContext`)
- `p_41423_` (`List<Component>`)
- `p_41424_` (`TooltipFlag`)

**Returns:** `public void`

### getTooltipImage

```java
public Optional<TooltipComponent> getTooltipImage(ItemStack p_150902_)
```

**Parameters:**

- `p_150902_` (`ItemStack`)

**Returns:** `public Optional<TooltipComponent>`

### getName

```java
public Component getName(ItemStack p_41458_)
```

**Parameters:**

- `p_41458_` (`ItemStack`)

**Returns:** `public Component`

### isFoil

```java
public boolean isFoil(ItemStack p_41453_)
```

**Parameters:**

- `p_41453_` (`ItemStack`)

**Returns:** `public boolean`

### isEnchantable

```java
public boolean isEnchantable(ItemStack p_41456_)
```

**Parameters:**

- `p_41456_` (`ItemStack`)

**Returns:** `public boolean`

### getPlayerPOVHitResult

```java
public static BlockHitResult getPlayerPOVHitResult(Level p_41436_, Player p_41437_, ClipContext.Fluid p_41438_)
```

**Parameters:**

- `p_41436_` (`Level`)
- `p_41437_` (`Player`)
- `p_41438_` (`ClipContext.Fluid`)

**Returns:** `public static BlockHitResult`

### getEnchantmentValue

```java
public int getEnchantmentValue()
```

**Returns:** `int`

### isValidRepairItem

```java
public boolean isValidRepairItem(ItemStack p_41402_, ItemStack p_41403_)
```

**Parameters:**

- `p_41402_` (`ItemStack`)
- `p_41403_` (`ItemStack`)

**Returns:** `public boolean`

### getDefaultAttributeModifiers

```java
public ItemAttributeModifiers getDefaultAttributeModifiers()
```

**Returns:** `ItemAttributeModifiers`

### isRepairable

```java
public boolean isRepairable(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### useOnRelease

```java
public boolean useOnRelease(ItemStack p_41464_)
```

**Parameters:**

- `p_41464_` (`ItemStack`)

**Returns:** `public boolean`

### getDefaultInstance

```java
public ItemStack getDefaultInstance()
```

**Returns:** `public ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getDrinkingSound

```java
public SoundEvent getDrinkingSound()
```

**Returns:** `public SoundEvent`

### getEatingSound

```java
public SoundEvent getEatingSound()
```

**Returns:** `public SoundEvent`

### getBreakingSound

```java
public SoundEvent getBreakingSound()
```

**Returns:** `public SoundEvent`

### canFitInsideContainerItems

```java
public boolean canFitInsideContainerItems()
```

**Returns:** `public boolean`

### requiredFeatures

```java
public FeatureFlagSet requiredFeatures()
```

**Returns:** `FeatureFlagSet`

### initializeClient

```java
public void initializeClient(java.util.function.Consumer<net.neoforged.neoforge.client.extensions.common.IClientItemExtensions> consumer)
```

**Parameters:**

- `consumer` (`java.util.function.Consumer<net.neoforged.neoforge.client.extensions.common.IClientItemExtensions>`)

### food

```java
public Item.Properties food(FoodProperties p_41490_)
```

**Parameters:**

- `p_41490_` (`FoodProperties`)

**Returns:** `public Item.Properties`

### stacksTo

```java
public Item.Properties stacksTo(int p_41488_)
```

**Parameters:**

- `p_41488_` (`int`)

**Returns:** `public Item.Properties`

### durability

```java
public Item.Properties durability(int p_41504_)
```

**Parameters:**

- `p_41504_` (`int`)

**Returns:** `public Item.Properties`

### craftRemainder

```java
public Item.Properties craftRemainder(Item p_41496_)
```

**Parameters:**

- `p_41496_` (`Item`)

**Returns:** `public Item.Properties`

### rarity

```java
public Item.Properties rarity(Rarity p_41498_)
```

**Parameters:**

- `p_41498_` (`Rarity`)

**Returns:** `public Item.Properties`

### fireResistant

```java
public Item.Properties fireResistant()
```

**Returns:** `public Item.Properties`

### jukeboxPlayable

```java
public Item.Properties jukeboxPlayable(ResourceKey<JukeboxSong> p_350862_)
```

**Parameters:**

- `p_350862_` (`ResourceKey<JukeboxSong>`)

**Returns:** `public Item.Properties`

### setNoRepair

```java
public Item.Properties setNoRepair()
```

**Returns:** `public Item.Properties`

### requiredFeatures

```java
public Item.Properties requiredFeatures(FeatureFlag[]... p_250948_)
```

**Parameters:**

- `p_250948_` (`FeatureFlag[]...`)

**Returns:** `public Item.Properties`

### component

```java
<T> public <T> Item.Properties component(DataComponentType<T> p_330871_, T p_330323_)
```

**Parameters:**

- `p_330871_` (`DataComponentType<T>`)
- `p_330323_` (`T`)

**Returns:** `public <T> Item.Properties`

### attributes

```java
public Item.Properties attributes(ItemAttributeModifiers p_331533_)
```

**Parameters:**

- `p_331533_` (`ItemAttributeModifiers`)

**Returns:** `public Item.Properties`

### buildAndValidateComponents

```java
DataComponentMap buildAndValidateComponents()
```

**Returns:** `DataComponentMap`

### validateComponents

```java
return validateComponents()
```

**Returns:** `return`

### validateComponents

```java
public static DataComponentMap validateComponents(DataComponentMap datacomponentmap)
```

**Parameters:**

- `datacomponentmap` (`DataComponentMap`)

**Returns:** `public static DataComponentMap`

### IllegalStateException

```java
throw new IllegalStateException("Item cannot have both durability and be stackable")
```

**Parameters:**

- `stackable"` (`"Item cannot have both durability and be`)

**Returns:** `throw new`

### buildComponents

```java
private DataComponentMap buildComponents()
```

**Returns:** `private DataComponentMap`

### registries

```java
public HolderLookup.Provider registries()
```

**Returns:** `HolderLookup.Provider`

### tickRate

```java
public float tickRate()
```

**Returns:** `float`

### mapData

```java
public MapItemSavedData mapData(MapId p_339618_)
```

**Parameters:**

- `p_339618_` (`MapId`)

**Returns:** `MapItemSavedData`

### registries

```java
HolderLookup.Provider registries()
```

**Returns:** `HolderLookup.Provider`

### tickRate

```java
float tickRate()
```

**Returns:** `float`

### mapData

```java
MapItemSavedData mapData(MapId p_339670_)
```

**Parameters:**

- `p_339670_` (`MapId`)

**Returns:** `MapItemSavedData`

### level

```java
default Level level()
```

**Returns:** `Level`

### of

```java
static Item.TooltipContext of(Level p_339599_)
```

**Parameters:**

- `p_339599_` (`Level`)

**Returns:** `static Item.TooltipContext`

### registries

```java
public HolderLookup.Provider registries()
```

**Returns:** `HolderLookup.Provider`

### tickRate

```java
public float tickRate()
```

**Returns:** `float`

### mapData

```java
public MapItemSavedData mapData(MapId p_339628_)
```

**Parameters:**

- `p_339628_` (`MapId`)

**Returns:** `MapItemSavedData`

### level

```java
public Level level()
```

**Returns:** `Level`

### of

```java
static Item.TooltipContext of(HolderLookup.Provider p_339633_)
```

**Parameters:**

- `p_339633_` (`HolderLookup.Provider`)

**Returns:** `static Item.TooltipContext`

### registries

```java
public HolderLookup.Provider registries()
```

**Returns:** `HolderLookup.Provider`

### tickRate

```java
public float tickRate()
```

**Returns:** `float`

### mapData

```java
public MapItemSavedData mapData(MapId p_339679_)
```

**Parameters:**

- `p_339679_` (`MapId`)

**Returns:** `MapItemSavedData`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Properties` | class |  |
| `TooltipContext` | interface |  |
