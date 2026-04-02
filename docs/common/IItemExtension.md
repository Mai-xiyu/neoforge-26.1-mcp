# IItemExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private Item self()
```

**Returns:** `private Item`

### getDefaultAttributeModifiers

```java
default ItemAttributeModifiers getDefaultAttributeModifiers(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `ItemAttributeModifiers`

### onDroppedByPlayer

```java
default boolean onDroppedByPlayer(ItemStack item, Player player)
```

**Parameters:**

- `item` (`ItemStack`)
- `player` (`Player`)

**Returns:** `boolean`

### getHighlightTip

```java
default Component getHighlightTip(ItemStack item, Component displayName)
```

**Parameters:**

- `item` (`ItemStack`)
- `displayName` (`Component`)

**Returns:** `Component`

### onItemUseFirst

```java
default InteractionResult onItemUseFirst(ItemStack stack, UseOnContext context)
```

**Parameters:**

- `stack` (`ItemStack`)
- `context` (`UseOnContext`)

**Returns:** `InteractionResult`

### isPiglinCurrency

```java
default boolean isPiglinCurrency(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### makesPiglinsNeutral

```java
default boolean makesPiglinsNeutral(ItemStack stack, LivingEntity wearer)
```

**Parameters:**

- `stack` (`ItemStack`)
- `wearer` (`LivingEntity`)

**Returns:** `boolean`

### isRepairable

```java
boolean isRepairable(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getXpRepairRatio

```java
default float getXpRepairRatio(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `float`

### onStopUsing

```java
default void onStopUsing(ItemStack stack, LivingEntity entity, int count)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`LivingEntity`)
- `count` (`int`)

### onLeftClickEntity

```java
default boolean onLeftClickEntity(ItemStack stack, Player player, Entity entity)
```

**Parameters:**

- `stack` (`ItemStack`)
- `player` (`Player`)
- `entity` (`Entity`)

**Returns:** `boolean`

### getCraftingRemainingItem

```java
default ItemStack getCraftingRemainingItem(ItemStack itemStack)
```

**Parameters:**

- `itemStack` (`ItemStack`)

**Returns:** `ItemStack`

### hasCraftingRemainingItem

```java
default boolean hasCraftingRemainingItem(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getEntityLifespan

```java
default int getEntityLifespan(ItemStack itemStack, Level level)
```

**Parameters:**

- `itemStack` (`ItemStack`)
- `level` (`Level`)

**Returns:** `int`

### hasCustomEntity

```java
default boolean hasCustomEntity(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### createEntity

```java
default Entity createEntity(Level level, Entity location, ItemStack stack)
```

**Parameters:**

- `level` (`Level`)
- `location` (`Entity`)
- `stack` (`ItemStack`)

**Returns:** `Entity`

### onEntityItemUpdate

```java
default boolean onEntityItemUpdate(ItemStack stack, ItemEntity entity)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`ItemEntity`)

**Returns:** `boolean`

### doesSneakBypassUse

```java
default boolean doesSneakBypassUse(ItemStack stack, net.minecraft.world.level.LevelReader level, BlockPos pos, Player player)
```

**Parameters:**

- `stack` (`ItemStack`)
- `level` (`net.minecraft.world.level.LevelReader`)
- `pos` (`BlockPos`)
- `player` (`Player`)

**Returns:** `boolean`

### canEquip

```java
default boolean canEquip(ItemStack stack, EquipmentSlot armorType, LivingEntity entity)
```

**Parameters:**

- `stack` (`ItemStack`)
- `armorType` (`EquipmentSlot`)
- `entity` (`LivingEntity`)

**Returns:** `boolean`

### getEquipmentSlot

```java
default EquipmentSlot getEquipmentSlot(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `EquipmentSlot`

### isBookEnchantable

```java
default boolean isBookEnchantable(ItemStack stack, ItemStack book)
```

**Parameters:**

- `stack` (`ItemStack`)
- `book` (`ItemStack`)

**Returns:** `boolean`

### getArmorTexture

```java
default ResourceLocation getArmorTexture(ItemStack stack, Entity entity, EquipmentSlot slot, ArmorMaterial.Layer layer, boolean innerModel)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`Entity`)
- `slot` (`EquipmentSlot`)
- `layer` (`ArmorMaterial.Layer`)
- `innerModel` (`boolean`)

**Returns:** `ResourceLocation`

### onEntitySwing

```java
default boolean onEntitySwing(ItemStack stack, LivingEntity entity)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`LivingEntity`)

**Returns:** `boolean`

### onEntitySwing

```java
default boolean onEntitySwing(ItemStack stack, LivingEntity entity, InteractionHand hand)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`LivingEntity`)
- `hand` (`InteractionHand`)

**Returns:** `boolean`

### onEntitySwing

```java
return onEntitySwing()
```

**Returns:** `return`

### getDamage

```java
default int getDamage(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `int`

### getMaxDamage

```java
default int getMaxDamage(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `int`

### isDamaged

```java
default boolean isDamaged(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### setDamage

```java
default void setDamage(ItemStack stack, int damage)
```

**Parameters:**

- `stack` (`ItemStack`)
- `damage` (`int`)

### canPerformAction

```java
default boolean canPerformAction(ItemStack stack, ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`ItemAbility`)

**Returns:** `boolean`

### getMaxStackSize

```java
default int getMaxStackSize(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `int`

### getEnchantmentValue

```java
default int getEnchantmentValue(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `int`

### isPrimaryItemFor

```java
.OverrideOnly
    default boolean isPrimaryItemFor(ItemStack stack, Holder<Enchantment> enchantment)
```

**Parameters:**

- `stack` (`ItemStack`)
- `enchantment` (`Holder<Enchantment>`)

**Returns:** `.OverrideOnly
    default boolean`

### supportsEnchantment

```java
.OverrideOnly
    default boolean supportsEnchantment(ItemStack stack, Holder<Enchantment> enchantment)
```

**Parameters:**

- `stack` (`ItemStack`)
- `enchantment` (`Holder<Enchantment>`)

**Returns:** `.OverrideOnly
    default boolean`

### getEnchantmentLevel

```java
.OverrideOnly
    default int getEnchantmentLevel(ItemStack stack, Holder<Enchantment> enchantment)
```

**Parameters:**

- `stack` (`ItemStack`)
- `enchantment` (`Holder<Enchantment>`)

**Returns:** `.OverrideOnly
    default int`

### getAllEnchantments

```java
.OverrideOnly
    default ItemEnchantments getAllEnchantments(ItemStack stack, RegistryLookup<Enchantment> lookup)
```

**Parameters:**

- `stack` (`ItemStack`)
- `lookup` (`RegistryLookup<Enchantment>`)

**Returns:** `.OverrideOnly
    default ItemEnchantments`

### shouldCauseReequipAnimation

```java
default boolean shouldCauseReequipAnimation(ItemStack oldStack, ItemStack newStack, boolean slotChanged)
```

**Parameters:**

- `oldStack` (`ItemStack`)
- `newStack` (`ItemStack`)
- `slotChanged` (`boolean`)

**Returns:** `boolean`

### shouldCauseBlockBreakReset

```java
default boolean shouldCauseBlockBreakReset(ItemStack oldStack, ItemStack newStack)
```

**Parameters:**

- `oldStack` (`ItemStack`)
- `newStack` (`ItemStack`)

**Returns:** `boolean`

### canContinueUsing

```java
default boolean canContinueUsing(ItemStack oldStack, ItemStack newStack)
```

**Parameters:**

- `oldStack` (`ItemStack`)
- `newStack` (`ItemStack`)

**Returns:** `boolean`

### getCreatorModId

```java
default String getCreatorModId(ItemStack itemStack)
```

**Parameters:**

- `itemStack` (`ItemStack`)

**Returns:** `String`

### canDisableShield

```java
default boolean canDisableShield(ItemStack stack, ItemStack shield, LivingEntity entity, LivingEntity attacker)
```

**Parameters:**

- `stack` (`ItemStack`)
- `shield` (`ItemStack`)
- `entity` (`LivingEntity`)
- `attacker` (`LivingEntity`)

**Returns:** `boolean`

### getBurnTime

```java
.OverrideOnly
    default int getBurnTime(ItemStack itemStack, RecipeType<?> recipeType)
```

**Parameters:**

- `itemStack` (`ItemStack`)
- `recipeType` (`RecipeType<?>`)

**Returns:** `.OverrideOnly
    default int`

### onAnimalArmorTick

```java
.OverrideOnly
    default void onAnimalArmorTick(ItemStack stack, Level level, Mob horse)
```

**Parameters:**

- `stack` (`ItemStack`)
- `level` (`Level`)
- `horse` (`Mob`)

**Returns:** `.OverrideOnly
    default void`

### damageItem

```java
default <T extends LivingEntity> int damageItem(ItemStack stack, int amount, T entity, Consumer<Item> onBroken)
```

**Parameters:**

- `stack` (`ItemStack`)
- `amount` (`int`)
- `entity` (`T`)
- `onBroken` (`Consumer<Item>`)

**Returns:** `int`

### onDestroyed

```java
default void onDestroyed(ItemEntity itemEntity, DamageSource damageSource)
```

**Parameters:**

- `itemEntity` (`ItemEntity`)
- `damageSource` (`DamageSource`)

### isEnderMask

```java
default boolean isEnderMask(ItemStack stack, Player player, EnderMan endermanEntity)
```

**Parameters:**

- `stack` (`ItemStack`)
- `player` (`Player`)
- `endermanEntity` (`EnderMan`)

**Returns:** `boolean`

### canElytraFly

```java
default boolean canElytraFly(ItemStack stack, LivingEntity entity)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`LivingEntity`)

**Returns:** `boolean`

### elytraFlightTick

```java
default boolean elytraFlightTick(ItemStack stack, LivingEntity entity, int flightTicks)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`LivingEntity`)
- `flightTicks` (`int`)

**Returns:** `boolean`

### canWalkOnPowderedSnow

```java
default boolean canWalkOnPowderedSnow(ItemStack stack, LivingEntity wearer)
```

**Parameters:**

- `stack` (`ItemStack`)
- `wearer` (`LivingEntity`)

**Returns:** `boolean`

### isDamageable

```java
default boolean isDamageable(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getSweepHitBox

```java
default AABB getSweepHitBox(ItemStack stack, Player player, Entity target)
```

**Parameters:**

- `stack` (`ItemStack`)
- `player` (`Player`)
- `target` (`Entity`)

**Returns:** `AABB`

### isNotReplaceableByPickAction

```java
boolean isNotReplaceableByPickAction(ItemStack stack, Player player, int inventorySlot)
```

**Parameters:**

- `stack` (`ItemStack`)
- `player` (`Player`)
- `inventorySlot` (`int`)

**Returns:** `boolean`

### canGrindstoneRepair

```java
default boolean canGrindstoneRepair(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### canBeHurtBy

```java
default boolean canBeHurtBy(ItemStack stack, DamageSource source)
```

**Parameters:**

- `stack` (`ItemStack`)
- `source` (`DamageSource`)

**Returns:** `boolean`

### applyEnchantments

```java
default ItemStack applyEnchantments(ItemStack stack, List<EnchantmentInstance> enchantments)
```

**Parameters:**

- `stack` (`ItemStack`)
- `enchantments` (`List<EnchantmentInstance>`)

**Returns:** `ItemStack`
