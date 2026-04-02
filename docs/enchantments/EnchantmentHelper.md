# EnchantmentHelper

**Package:** `net.minecraft.world.item.enchantment`
**Type:** class

## Methods

### getItemEnchantmentLevel

```java
public static int getItemEnchantmentLevel(Holder<Enchantment> p_346179_, ItemStack p_44845_)
```

**Parameters:**

- `p_346179_` (`Holder<Enchantment>`)
- `p_44845_` (`ItemStack`)

**Returns:** `int`

### getTagEnchantmentLevel

```java
public static int getTagEnchantmentLevel(Holder<Enchantment> p_346179_, ItemStack p_44845_)
```

**Parameters:**

- `p_346179_` (`Holder<Enchantment>`)
- `p_44845_` (`ItemStack`)

**Returns:** `int`

### updateEnchantments

```java
public static ItemEnchantments updateEnchantments(ItemStack p_331034_, Consumer<ItemEnchantments.Mutable> p_332031_)
```

**Parameters:**

- `p_331034_` (`ItemStack`)
- `p_332031_` (`Consumer<ItemEnchantments.Mutable>`)

**Returns:** `public static ItemEnchantments`

### canStoreEnchantments

```java
public static boolean canStoreEnchantments(ItemStack p_330666_)
```

**Parameters:**

- `p_330666_` (`ItemStack`)

**Returns:** `public static boolean`

### setEnchantments

```java
public static void setEnchantments(ItemStack p_44867_, ItemEnchantments p_332148_)
```

**Parameters:**

- `p_44867_` (`ItemStack`)
- `p_332148_` (`ItemEnchantments`)

**Returns:** `public static void`

### getEnchantmentsForCrafting

```java
public static ItemEnchantments getEnchantmentsForCrafting(ItemStack p_330538_)
```

**Parameters:**

- `p_330538_` (`ItemStack`)

**Returns:** `public static ItemEnchantments`

### getComponentType

```java
public static DataComponentType<ItemEnchantments> getComponentType(ItemStack p_331909_)
```

**Parameters:**

- `p_331909_` (`ItemStack`)

**Returns:** `public static DataComponentType<ItemEnchantments>`

### hasAnyEnchantments

```java
public static boolean hasAnyEnchantments(ItemStack p_332657_)
```

**Parameters:**

- `p_332657_` (`ItemStack`)

**Returns:** `public static boolean`

### processDurabilityChange

```java
public static int processDurabilityChange(ServerLevel p_345153_, ItemStack p_344889_, int p_345787_)
```

**Parameters:**

- `p_345153_` (`ServerLevel`)
- `p_344889_` (`ItemStack`)
- `p_345787_` (`int`)

**Returns:** `public static int`

### processAmmoUse

```java
public static int processAmmoUse(ServerLevel p_344848_, ItemStack p_345072_, ItemStack p_345407_, int p_346289_)
```

**Parameters:**

- `p_344848_` (`ServerLevel`)
- `p_345072_` (`ItemStack`)
- `p_345407_` (`ItemStack`)
- `p_346289_` (`int`)

**Returns:** `public static int`

### processBlockExperience

```java
public static int processBlockExperience(ServerLevel p_344948_, ItemStack p_345630_, int p_345026_)
```

**Parameters:**

- `p_344948_` (`ServerLevel`)
- `p_345630_` (`ItemStack`)
- `p_345026_` (`int`)

**Returns:** `public static int`

### processMobExperience

```java
public static int processMobExperience(ServerLevel p_344940_, Entity p_345838_, Entity p_345369_, int p_344901_)
```

**Parameters:**

- `p_344940_` (`ServerLevel`)
- `p_345838_` (`Entity`)
- `p_345369_` (`Entity`)
- `p_344901_` (`int`)

**Returns:** `public static int`

### runIterationOnItem

```java
public static void runIterationOnItem(ItemStack p_345425_, EnchantmentHelper.EnchantmentVisitor p_345023_)
```

**Parameters:**

- `p_345425_` (`ItemStack`)
- `p_345023_` (`EnchantmentHelper.EnchantmentVisitor`)

**Returns:** `public static void`

### runIterationOnItem

```java
public static void runIterationOnItem(ItemStack p_44852_, EquipmentSlot p_345566_, LivingEntity p_345792_, EnchantmentHelper.EnchantmentInSlotVisitor p_345683_)
```

**Parameters:**

- `p_44852_` (`ItemStack`)
- `p_345566_` (`EquipmentSlot`)
- `p_345792_` (`LivingEntity`)
- `p_345683_` (`EnchantmentHelper.EnchantmentInSlotVisitor`)

**Returns:** `public static void`

### runIterationOnEquipment

```java
public static void runIterationOnEquipment(LivingEntity p_344744_, EnchantmentHelper.EnchantmentInSlotVisitor p_345709_)
```

**Parameters:**

- `p_344744_` (`LivingEntity`)
- `p_345709_` (`EnchantmentHelper.EnchantmentInSlotVisitor`)

**Returns:** `public static void`

### isImmuneToDamage

```java
public static boolean isImmuneToDamage(ServerLevel p_346228_, LivingEntity p_345220_, DamageSource p_345884_)
```

**Parameters:**

- `p_346228_` (`ServerLevel`)
- `p_345220_` (`LivingEntity`)
- `p_345884_` (`DamageSource`)

**Returns:** `public static boolean`

### getDamageProtection

```java
public static float getDamageProtection(ServerLevel p_346015_, LivingEntity p_346118_, DamageSource p_44858_)
```

**Parameters:**

- `p_346015_` (`ServerLevel`)
- `p_346118_` (`LivingEntity`)
- `p_44858_` (`DamageSource`)

**Returns:** `public static float`

### modifyDamage

```java
public static float modifyDamage(ServerLevel p_345523_, ItemStack p_345856_, Entity p_344995_, DamageSource p_345216_, float p_346025_)
```

**Parameters:**

- `p_345523_` (`ServerLevel`)
- `p_345856_` (`ItemStack`)
- `p_344995_` (`Entity`)
- `p_345216_` (`DamageSource`)
- `p_346025_` (`float`)

**Returns:** `public static float`

### modifyFallBasedDamage

```java
public static float modifyFallBasedDamage(ServerLevel p_345433_, ItemStack p_345368_, Entity p_345047_, DamageSource p_345711_, float p_346245_)
```

**Parameters:**

- `p_345433_` (`ServerLevel`)
- `p_345368_` (`ItemStack`)
- `p_345047_` (`Entity`)
- `p_345711_` (`DamageSource`)
- `p_346245_` (`float`)

**Returns:** `public static float`

### modifyArmorEffectiveness

```java
public static float modifyArmorEffectiveness(ServerLevel p_345426_, ItemStack p_345454_, Entity p_345834_, DamageSource p_345082_, float p_344790_)
```

**Parameters:**

- `p_345426_` (`ServerLevel`)
- `p_345454_` (`ItemStack`)
- `p_345834_` (`Entity`)
- `p_345082_` (`DamageSource`)
- `p_344790_` (`float`)

**Returns:** `public static float`

### modifyKnockback

```java
public static float modifyKnockback(ServerLevel p_346221_, ItemStack p_344862_, Entity p_345720_, DamageSource p_345322_, float p_345116_)
```

**Parameters:**

- `p_346221_` (`ServerLevel`)
- `p_344862_` (`ItemStack`)
- `p_345720_` (`Entity`)
- `p_345322_` (`DamageSource`)
- `p_345116_` (`float`)

**Returns:** `public static float`

### doPostAttackEffects

```java
public static void doPostAttackEffects(ServerLevel p_345941_, Entity p_345661_, DamageSource p_345580_)
```

**Parameters:**

- `p_345941_` (`ServerLevel`)
- `p_345661_` (`Entity`)
- `p_345580_` (`DamageSource`)

**Returns:** `public static void`

### doPostAttackEffectsWithItemSource

```java
 doPostAttackEffectsWithItemSource()
```

**Returns:** ``

### doPostAttackEffectsWithItemSource

```java
public static void doPostAttackEffectsWithItemSource(ServerLevel p_348463_, Entity p_348545_, DamageSource p_348552_, ItemStack p_348507_)
```

**Parameters:**

- `p_348463_` (`ServerLevel`)
- `p_348545_` (`Entity`)
- `p_348552_` (`DamageSource`)
- `p_348507_` (`ItemStack`)

**Returns:** `public static void`

### runLocationChangedEffects

```java
public static void runLocationChangedEffects(ServerLevel p_345674_, LivingEntity p_346396_)
```

**Parameters:**

- `p_345674_` (`ServerLevel`)
- `p_346396_` (`LivingEntity`)

**Returns:** `public static void`

### runLocationChangedEffects

```java
public static void runLocationChangedEffects(ServerLevel p_345755_, ItemStack p_345291_, LivingEntity p_346348_, EquipmentSlot p_345919_)
```

**Parameters:**

- `p_345755_` (`ServerLevel`)
- `p_345291_` (`ItemStack`)
- `p_346348_` (`LivingEntity`)
- `p_345919_` (`EquipmentSlot`)

**Returns:** `public static void`

### stopLocationBasedEffects

```java
public static void stopLocationBasedEffects(LivingEntity p_346034_)
```

**Parameters:**

- `p_346034_` (`LivingEntity`)

**Returns:** `public static void`

### stopLocationBasedEffects

```java
public static void stopLocationBasedEffects(ItemStack p_344726_, LivingEntity p_346085_, EquipmentSlot p_345691_)
```

**Parameters:**

- `p_344726_` (`ItemStack`)
- `p_346085_` (`LivingEntity`)
- `p_345691_` (`EquipmentSlot`)

**Returns:** `public static void`

### tickEffects

```java
public static void tickEffects(ServerLevel p_345788_, LivingEntity p_344873_)
```

**Parameters:**

- `p_345788_` (`ServerLevel`)
- `p_344873_` (`LivingEntity`)

**Returns:** `public static void`

### getEnchantmentLevel

```java
public static int getEnchantmentLevel(Holder<Enchantment> p_345086_, LivingEntity p_44838_)
```

**Parameters:**

- `p_345086_` (`Holder<Enchantment>`)
- `p_44838_` (`LivingEntity`)

**Returns:** `public static int`

### processProjectileCount

```java
public static int processProjectileCount(ServerLevel p_345598_, ItemStack p_346421_, Entity p_346006_, int p_346388_)
```

**Parameters:**

- `p_345598_` (`ServerLevel`)
- `p_346421_` (`ItemStack`)
- `p_346006_` (`Entity`)
- `p_346388_` (`int`)

**Returns:** `public static int`

### processProjectileSpread

```java
public static float processProjectileSpread(ServerLevel p_346048_, ItemStack p_345702_, Entity p_346314_, float p_346070_)
```

**Parameters:**

- `p_346048_` (`ServerLevel`)
- `p_345702_` (`ItemStack`)
- `p_346314_` (`Entity`)
- `p_346070_` (`float`)

**Returns:** `public static float`

### getPiercingCount

```java
public static int getPiercingCount(ServerLevel p_345735_, ItemStack p_344942_, ItemStack p_345766_)
```

**Parameters:**

- `p_345735_` (`ServerLevel`)
- `p_344942_` (`ItemStack`)
- `p_345766_` (`ItemStack`)

**Returns:** `public static int`

### onProjectileSpawned

```java
public static void onProjectileSpawned(ServerLevel p_345062_, ItemStack p_345805_, AbstractArrow p_346298_, Consumer<Item> p_348544_)
```

**Parameters:**

- `p_345062_` (`ServerLevel`)
- `p_345805_` (`ItemStack`)
- `p_346298_` (`AbstractArrow`)
- `p_348544_` (`Consumer<Item>`)

**Returns:** `public static void`

### onHitBlock

```java
public static void onHitBlock(ServerLevel p_346213_, ItemStack p_344826_, LivingEntity p_345015_, Entity p_345210_, EquipmentSlot p_345889_, Vec3 p_345922_, BlockState p_350787_, Consumer<Item> p_348575_)
```

**Parameters:**

- `p_346213_` (`ServerLevel`)
- `p_344826_` (`ItemStack`)
- `p_345015_` (`LivingEntity`)
- `p_345210_` (`Entity`)
- `p_345889_` (`EquipmentSlot`)
- `p_345922_` (`Vec3`)
- `p_350787_` (`BlockState`)
- `p_348575_` (`Consumer<Item>`)

**Returns:** `public static void`

### modifyDurabilityToRepairFromXp

```java
public static int modifyDurabilityToRepairFromXp(ServerLevel p_345119_, ItemStack p_345686_, int p_344847_)
```

**Parameters:**

- `p_345119_` (`ServerLevel`)
- `p_345686_` (`ItemStack`)
- `p_344847_` (`int`)

**Returns:** `public static int`

### processEquipmentDropChance

```java
public static float processEquipmentDropChance(ServerLevel p_346339_, LivingEntity p_345864_, DamageSource p_345060_, float p_346089_)
```

**Parameters:**

- `p_346339_` (`ServerLevel`)
- `p_345864_` (`LivingEntity`)
- `p_345060_` (`DamageSource`)
- `p_346089_` (`float`)

**Returns:** `public static float`

### forEachModifier

```java
public static void forEachModifier(ItemStack p_348634_, EquipmentSlotGroup p_348528_, BiConsumer<Holder<Attribute>, AttributeModifier> p_348554_)
```

**Parameters:**

- `p_348634_` (`ItemStack`)
- `p_348528_` (`EquipmentSlotGroup`)
- `p_348554_` (`BiConsumer<Holder<Attribute>, AttributeModifier>`)

**Returns:** `public static void`

### forEachModifier

```java
public static void forEachModifier(ItemStack p_345685_, EquipmentSlot p_345123_, BiConsumer<Holder<Attribute>, AttributeModifier> p_345061_)
```

**Parameters:**

- `p_345685_` (`ItemStack`)
- `p_345123_` (`EquipmentSlot`)
- `p_345061_` (`BiConsumer<Holder<Attribute>, AttributeModifier>`)

**Returns:** `public static void`

### getFishingLuckBonus

```java
public static int getFishingLuckBonus(ServerLevel p_346163_, ItemStack p_44905_, Entity p_345772_)
```

**Parameters:**

- `p_346163_` (`ServerLevel`)
- `p_44905_` (`ItemStack`)
- `p_345772_` (`Entity`)

**Returns:** `public static int`

### getFishingTimeReduction

```java
public static float getFishingTimeReduction(ServerLevel p_345589_, ItemStack p_344902_, Entity p_346054_)
```

**Parameters:**

- `p_345589_` (`ServerLevel`)
- `p_344902_` (`ItemStack`)
- `p_346054_` (`Entity`)

**Returns:** `public static float`

### getTridentReturnToOwnerAcceleration

```java
public static int getTridentReturnToOwnerAcceleration(ServerLevel p_344814_, ItemStack p_346255_, Entity p_346332_)
```

**Parameters:**

- `p_344814_` (`ServerLevel`)
- `p_346255_` (`ItemStack`)
- `p_346332_` (`Entity`)

**Returns:** `public static int`

### modifyCrossbowChargingTime

```java
public static float modifyCrossbowChargingTime(ItemStack p_352460_, LivingEntity p_347534_, float p_345633_)
```

**Parameters:**

- `p_352460_` (`ItemStack`)
- `p_347534_` (`LivingEntity`)
- `p_345633_` (`float`)

**Returns:** `public static float`

### getTridentSpinAttackStrength

```java
public static float getTridentSpinAttackStrength(ItemStack p_352129_, LivingEntity p_345705_)
```

**Parameters:**

- `p_352129_` (`ItemStack`)
- `p_345705_` (`LivingEntity`)

**Returns:** `public static float`

### hasTag

```java
public static boolean hasTag(ItemStack p_345665_, TagKey<Enchantment> p_345928_)
```

**Parameters:**

- `p_345665_` (`ItemStack`)
- `p_345928_` (`TagKey<Enchantment>`)

**Returns:** `public static boolean`

### has

```java
public static boolean has(ItemStack p_345474_, DataComponentType<?> p_344897_)
```

**Parameters:**

- `p_345474_` (`ItemStack`)
- `p_344897_` (`DataComponentType<?>`)

**Returns:** `public static boolean`

### pickHighestLevel

```java
<T> public static <T> Optional<T> pickHighestLevel(ItemStack p_345398_, DataComponentType<List<T>> p_346022_)
```

**Parameters:**

- `p_345398_` (`ItemStack`)
- `p_346022_` (`DataComponentType<List<T>>`)

**Returns:** `public static <T> Optional<T>`

### getHighestLevel

```java
public static <T> Pair<T, Integer> getHighestLevel(ItemStack p_346269_, DataComponentType<T> p_345899_)
```

**Parameters:**

- `p_346269_` (`ItemStack`)
- `p_345899_` (`DataComponentType<T>`)

**Returns:** `Pair<T, Integer>`

### getRandomItemWith

```java
public static Optional<EnchantedItemInUse> getRandomItemWith(DataComponentType<?> p_345509_, LivingEntity p_44841_, Predicate<ItemStack> p_44842_)
```

**Parameters:**

- `p_345509_` (`DataComponentType<?>`)
- `p_44841_` (`LivingEntity`)
- `p_44842_` (`Predicate<ItemStack>`)

**Returns:** `public static Optional<EnchantedItemInUse>`

### getEnchantmentCost

```java
public static int getEnchantmentCost(RandomSource p_220288_, int p_220289_, int p_220290_, ItemStack p_220291_)
```

**Parameters:**

- `p_220288_` (`RandomSource`)
- `p_220289_` (`int`)
- `p_220290_` (`int`)
- `p_220291_` (`ItemStack`)

**Returns:** `public static int`

### enchantItem

```java
public static ItemStack enchantItem(RandomSource p_346328_, ItemStack p_346267_, int p_345272_, RegistryAccess p_345660_, Optional<? extends HolderSet<Enchantment>> p_345161_)
```

**Parameters:**

- `p_346328_` (`RandomSource`)
- `p_346267_` (`ItemStack`)
- `p_345272_` (`int`)
- `p_345660_` (`RegistryAccess`)
- `p_345161_` (`Optional<? extends HolderSet<Enchantment>>`)

**Returns:** `public static ItemStack`

### enchantItem

```java
public static ItemStack enchantItem(RandomSource p_220293_, ItemStack p_220294_, int p_220295_, Stream<Holder<Enchantment>> p_345380_)
```

**Parameters:**

- `p_220293_` (`RandomSource`)
- `p_220294_` (`ItemStack`)
- `p_220295_` (`int`)
- `p_345380_` (`Stream<Holder<Enchantment>>`)

**Returns:** `public static ItemStack`

### selectEnchantment

```java
public static List<EnchantmentInstance> selectEnchantment(RandomSource p_220298_, ItemStack p_220299_, int p_220300_, Stream<Holder<Enchantment>> p_346061_)
```

**Parameters:**

- `p_220298_` (`RandomSource`)
- `p_220299_` (`ItemStack`)
- `p_220300_` (`int`)
- `p_346061_` (`Stream<Holder<Enchantment>>`)

**Returns:** `public static List<EnchantmentInstance>`

### filterCompatibleEnchantments

```java
public static void filterCompatibleEnchantments(List<EnchantmentInstance> p_44863_, EnchantmentInstance p_44864_)
```

**Parameters:**

- `p_44863_` (`List<EnchantmentInstance>`)
- `p_44864_` (`EnchantmentInstance`)

**Returns:** `public static void`

### isEnchantmentCompatible

```java
public static boolean isEnchantmentCompatible(Collection<Holder<Enchantment>> p_44860_, Holder<Enchantment> p_345356_)
```

**Parameters:**

- `p_44860_` (`Collection<Holder<Enchantment>>`)
- `p_345356_` (`Holder<Enchantment>`)

**Returns:** `public static boolean`

### getAvailableEnchantmentResults

```java
public static List<EnchantmentInstance> getAvailableEnchantmentResults(int p_44818_, ItemStack p_44819_, Stream<Holder<Enchantment>> p_345348_)
```

**Parameters:**

- `p_44818_` (`int`)
- `p_44819_` (`ItemStack`)
- `p_345348_` (`Stream<Holder<Enchantment>>`)

**Returns:** `public static List<EnchantmentInstance>`

### enchantItemFromProvider

```java
public static void enchantItemFromProvider(ItemStack p_345172_, RegistryAccess p_348593_, ResourceKey<EnchantmentProvider> p_345876_, DifficultyInstance p_348599_, RandomSource p_345717_)
```

**Parameters:**

- `p_345172_` (`ItemStack`)
- `p_348593_` (`RegistryAccess`)
- `p_345876_` (`ResourceKey<EnchantmentProvider>`)
- `p_348599_` (`DifficultyInstance`)
- `p_345717_` (`RandomSource`)

**Returns:** `public static void`

### accept

```java
void accept(Holder<Enchantment> p_346326_, int p_346009_, EnchantedItemInUse p_345960_)
```

**Parameters:**

- `p_346326_` (`Holder<Enchantment>`)
- `p_346009_` (`int`)
- `p_345960_` (`EnchantedItemInUse`)

### accept

```java
void accept(Holder<Enchantment> p_346050_, int p_44946_)
```

**Parameters:**

- `p_346050_` (`Holder<Enchantment>`)
- `p_44946_` (`int`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EnchantmentInSlotVisitor` | interface |  |
| `EnchantmentVisitor` | interface |  |
