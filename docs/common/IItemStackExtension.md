# IItemStackExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
Helpers for accessing Item data
    private ItemStack self()
```

**Returns:** `Helpers for accessing Item data
    private ItemStack`

### getCraftingRemainingItem

```java
default ItemStack getCraftingRemainingItem()
```

**Returns:** `ItemStack`

### hasCraftingRemainingItem

```java
default boolean hasCraftingRemainingItem()
```

**Returns:** `boolean`

### getBurnTime

```java
default int getBurnTime(RecipeType<?> recipeType)
```

**Parameters:**

- `recipeType` (`RecipeType<?>`)

**Returns:** `int`

### onItemUseFirst

```java
default InteractionResult onItemUseFirst(UseOnContext context)
```

**Parameters:**

- `context` (`UseOnContext`)

**Returns:** `default InteractionResult`

### canPerformAction

```java
default boolean canPerformAction(ItemAbility itemAbility)
```

**Parameters:**

- `itemAbility` (`ItemAbility`)

**Returns:** `boolean`

### shouldCauseBlockBreakReset

```java
default boolean shouldCauseBlockBreakReset(ItemStack newStack)
```

**Parameters:**

- `newStack` (`ItemStack`)

**Returns:** `boolean`

### isPrimaryItemFor

```java
default boolean isPrimaryItemFor(Holder<Enchantment> enchantment)
```

**Parameters:**

- `enchantment` (`Holder<Enchantment>`)

**Returns:** `boolean`

### supportsEnchantment

```java
default boolean supportsEnchantment(Holder<Enchantment> enchantment)
```

**Parameters:**

- `enchantment` (`Holder<Enchantment>`)

**Returns:** `boolean`

### getEnchantmentLevel

```java
default int getEnchantmentLevel(Holder<Enchantment> enchantment)
```

**Parameters:**

- `enchantment` (`Holder<Enchantment>`)

**Returns:** `int`

### getAllEnchantments

```java
default ItemEnchantments getAllEnchantments(RegistryLookup<Enchantment> lookup)
```

**Parameters:**

- `lookup` (`RegistryLookup<Enchantment>`)

**Returns:** `ItemEnchantments`

### getEnchantmentValue

```java
default int getEnchantmentValue()
```

**Returns:** `int`

### getEquipmentSlot

```java
default EquipmentSlot getEquipmentSlot()
```

**Returns:** `EquipmentSlot`

### canDisableShield

```java
default boolean canDisableShield(ItemStack shield, LivingEntity entity, LivingEntity attacker)
```

**Parameters:**

- `shield` (`ItemStack`)
- `entity` (`LivingEntity`)
- `attacker` (`LivingEntity`)

**Returns:** `boolean`

### onEntitySwing

```java
default boolean onEntitySwing(LivingEntity entity)
```

**Parameters:**

- `entity` (`LivingEntity`)

**Returns:** `boolean`

### onEntitySwing

```java
default boolean onEntitySwing(LivingEntity entity, InteractionHand hand)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `hand` (`InteractionHand`)

**Returns:** `boolean`

### onStopUsing

```java
default void onStopUsing(LivingEntity entity, int count)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `count` (`int`)

### getEntityLifespan

```java
default int getEntityLifespan(Level level)
```

**Parameters:**

- `level` (`Level`)

**Returns:** `int`

### onEntityItemUpdate

```java
default boolean onEntityItemUpdate(ItemEntity entity)
```

**Parameters:**

- `entity` (`ItemEntity`)

**Returns:** `boolean`

### getXpRepairRatio

```java
default float getXpRepairRatio()
```

**Returns:** `float`

### onAnimalArmorTick

```java
default void onAnimalArmorTick(Level level, Mob horse)
```

**Parameters:**

- `level` (`Level`)
- `horse` (`Mob`)

### canEquip

```java
default boolean canEquip(EquipmentSlot armorType, LivingEntity entity)
```

**Parameters:**

- `armorType` (`EquipmentSlot`)
- `entity` (`LivingEntity`)

**Returns:** `boolean`

### isBookEnchantable

```java
default boolean isBookEnchantable(ItemStack book)
```

**Parameters:**

- `book` (`ItemStack`)

**Returns:** `boolean`

### onDroppedByPlayer

```java
default boolean onDroppedByPlayer(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `boolean`

### getHighlightTip

```java
default Component getHighlightTip(Component displayName)
```

**Parameters:**

- `displayName` (`Component`)

**Returns:** `Component`

### doesSneakBypassUse

```java
default boolean doesSneakBypassUse(net.minecraft.world.level.LevelReader level, BlockPos pos, Player player)
```

**Parameters:**

- `level` (`net.minecraft.world.level.LevelReader`)
- `pos` (`BlockPos`)
- `player` (`Player`)

**Returns:** `boolean`

### isRepairable

```java
default boolean isRepairable()
```

**Returns:** `boolean`

### isPiglinCurrency

```java
default boolean isPiglinCurrency()
```

**Returns:** `boolean`

### makesPiglinsNeutral

```java
default boolean makesPiglinsNeutral(LivingEntity wearer)
```

**Parameters:**

- `wearer` (`LivingEntity`)

**Returns:** `boolean`

### isEnderMask

```java
default boolean isEnderMask(Player player, EnderMan endermanEntity)
```

**Parameters:**

- `player` (`Player`)
- `endermanEntity` (`EnderMan`)

**Returns:** `boolean`

### canElytraFly

```java
default boolean canElytraFly(LivingEntity entity)
```

**Parameters:**

- `entity` (`LivingEntity`)

**Returns:** `boolean`

### elytraFlightTick

```java
default boolean elytraFlightTick(LivingEntity entity, int flightTicks)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `flightTicks` (`int`)

**Returns:** `boolean`

### canWalkOnPowderedSnow

```java
default boolean canWalkOnPowderedSnow(LivingEntity wearer)
```

**Parameters:**

- `wearer` (`LivingEntity`)

**Returns:** `boolean`

### getSweepHitBox

```java
default AABB getSweepHitBox(Player player, Entity target)
```

**Parameters:**

- `player` (`Player`)
- `target` (`Entity`)

**Returns:** `AABB`

### onDestroyed

```java
default void onDestroyed(ItemEntity itemEntity, DamageSource damageSource)
```

**Parameters:**

- `itemEntity` (`ItemEntity`)
- `damageSource` (`DamageSource`)

### isNotReplaceableByPickAction

```java
boolean isNotReplaceableByPickAction(Player player, int inventorySlot)
```

**Parameters:**

- `player` (`Player`)
- `inventorySlot` (`int`)

**Returns:** `boolean`

### canGrindstoneRepair

```java
default boolean canGrindstoneRepair()
```

**Returns:** `boolean`

### getCapability

```java
default <T, C extends @Nullable Object> T getCapability(ItemCapability<T, C> capability, C context)
```

**Parameters:**

- `capability` (`ItemCapability<T, C>`)
- `context` (`C`)

**Returns:** `T`

### getCapability

```java
default <T> T getCapability(ItemCapability<T, Void> capability)
```

**Parameters:**

- `capability` (`ItemCapability<T, Void>`)

**Returns:** `T`

### getAttributeModifiers

```java
default ItemAttributeModifiers getAttributeModifiers()
```

**Returns:** `ItemAttributeModifiers`
