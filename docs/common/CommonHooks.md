# CommonHooks

**Package:** `net.neoforged.neoforge.common`
**Type:** class

## Description

Class for various common (i.e. client and server-side) hooks.

## Methods

### canContinueUsing

```java
public static boolean canContinueUsing(ItemStack from, ItemStack to)
```

**Parameters:**

- `from` (`ItemStack`)
- `to` (`ItemStack`)

**Returns:** `public static boolean`

### onItemStackedOn

```java
public static boolean onItemStackedOn(ItemStack carriedItem, ItemStack stackedOnItem, Slot slot, ClickAction action, Player player, SlotAccess carriedSlotAccess)
```

**Parameters:**

- `carriedItem` (`ItemStack`)
- `stackedOnItem` (`ItemStack`)
- `slot` (`Slot`)
- `action` (`ClickAction`)
- `player` (`Player`)
- `carriedSlotAccess` (`SlotAccess`)

**Returns:** `boolean`

### onDifficultyChange

```java
public static void onDifficultyChange(Difficulty difficulty, Difficulty oldDifficulty)
```

**Parameters:**

- `difficulty` (`Difficulty`)
- `oldDifficulty` (`Difficulty`)

**Returns:** `public static void`

### onLivingChangeTarget

```java
public static LivingChangeTargetEvent onLivingChangeTarget(LivingEntity entity, LivingEntity originalTarget, LivingChangeTargetEvent.ILivingTargetType targetType)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `originalTarget` (`LivingEntity`)
- `targetType` (`LivingChangeTargetEvent.ILivingTargetType`)

**Returns:** `public static LivingChangeTargetEvent`

### isEntityInvulnerableTo

```java
public static boolean isEntityInvulnerableTo(Entity entity, DamageSource source, boolean isInvul)
```

**Parameters:**

- `entity` (`Entity`)
- `source` (`DamageSource`)
- `isInvul` (`boolean`)

**Returns:** `boolean`

### onEntityIncomingDamage

```java
public static boolean onEntityIncomingDamage(LivingEntity entity, DamageContainer container)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `container` (`DamageContainer`)

**Returns:** `boolean`

### onLivingKnockBack

```java
public static LivingKnockBackEvent onLivingKnockBack(LivingEntity target, float strength, double ratioX, double ratioZ)
```

**Parameters:**

- `target` (`LivingEntity`)
- `strength` (`float`)
- `ratioX` (`double`)
- `ratioZ` (`double`)

**Returns:** `public static LivingKnockBackEvent`

### onLivingUseTotem

```java
public static boolean onLivingUseTotem(LivingEntity entity, DamageSource damageSource, ItemStack totem, InteractionHand hand)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `damageSource` (`DamageSource`)
- `totem` (`ItemStack`)
- `hand` (`InteractionHand`)

**Returns:** `public static boolean`

### onLivingDamagePre

```java
public static float onLivingDamagePre(LivingEntity entity, DamageContainer container)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `container` (`DamageContainer`)

**Returns:** `float`

### onLivingDamagePost

```java
public static void onLivingDamagePost(LivingEntity entity, DamageContainer container)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `container` (`DamageContainer`)

### onArmorHurt

```java
public static void onArmorHurt(DamageSource source, EquipmentSlot[] slots, float damage, LivingEntity armoredEntity)
```

**Parameters:**

- `source` (`DamageSource`)
- `slots` (`EquipmentSlot[]`)
- `damage` (`float`)
- `armoredEntity` (`LivingEntity`)

### onLivingDeath

```java
public static boolean onLivingDeath(LivingEntity entity, DamageSource src)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `src` (`DamageSource`)

**Returns:** `public static boolean`

### onLivingDrops

```java
public static boolean onLivingDrops(LivingEntity entity, DamageSource source, Collection<ItemEntity> drops, boolean recentlyHit)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `source` (`DamageSource`)
- `drops` (`Collection<ItemEntity>`)
- `recentlyHit` (`boolean`)

**Returns:** `public static boolean`

### onLivingFall

```java
public static float[] onLivingFall(LivingEntity entity, float distance, float damageMultiplier)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `distance` (`float`)
- `damageMultiplier` (`float`)

**Returns:** `float[]`

### getEntityVisibilityMultiplier

```java
public static double getEntityVisibilityMultiplier(LivingEntity entity, Entity lookingEntity, double originalMultiplier)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `lookingEntity` (`Entity`)
- `originalMultiplier` (`double`)

**Returns:** `public static double`

### isLivingOnLadder

```java
public static Optional<BlockPos> isLivingOnLadder(BlockState state, Level level, BlockPos pos, LivingEntity entity)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `entity` (`LivingEntity`)

**Returns:** `public static Optional<BlockPos>`

### onLivingJump

```java
public static void onLivingJump(LivingEntity entity)
```

**Parameters:**

- `entity` (`LivingEntity`)

**Returns:** `public static void`

### onPlayerTossEvent

```java
public static ItemEntity onPlayerTossEvent(Player player, ItemStack item, boolean includeName)
```

**Parameters:**

- `player` (`Player`)
- `item` (`ItemStack`)
- `includeName` (`boolean`)

**Returns:** `ItemEntity`

### onVanillaGameEvent

```java
public static boolean onVanillaGameEvent(Level level, Holder<GameEvent> vanillaEvent, Vec3 pos, GameEvent.Context context)
```

**Parameters:**

- `level` (`Level`)
- `vanillaEvent` (`Holder<GameEvent>`)
- `pos` (`Vec3`)
- `context` (`GameEvent.Context`)

**Returns:** `public static boolean`

### getRawText

```java
private static String getRawText(Component message)
```

**Parameters:**

- `message` (`Component`)

**Returns:** `private static String`

### onServerChatSubmittedEvent

```java
public static Component onServerChatSubmittedEvent(ServerPlayer player, String plain, Component decorated)
```

**Parameters:**

- `player` (`ServerPlayer`)
- `plain` (`String`)
- `decorated` (`Component`)

**Returns:** `Component`

### getServerChatSubmittedDecorator

```java
public static ChatDecorator getServerChatSubmittedDecorator()
```

**Returns:** `public static ChatDecorator`

### newChatWithLinks

```java
public static Component newChatWithLinks(String string)
```

**Parameters:**

- `string` (`String`)

**Returns:** `public static Component`

### newChatWithLinks

```java
return newChatWithLinks()
```

**Returns:** `return`

### newChatWithLinks

```java
public static Component newChatWithLinks(String string, boolean allowMissingHeader)
```

**Parameters:**

- `string` (`String`)
- `allowMissingHeader` (`boolean`)

**Returns:** `public static Component`

### handleBlockDrops

```java
public static void handleBlockDrops(ServerLevel level, BlockPos pos, BlockState state, BlockEntity blockEntity, List<ItemEntity> drops, Entity breaker, ItemStack tool)
```

**Parameters:**

- `level` (`ServerLevel`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `blockEntity` (`BlockEntity`)
- `drops` (`List<ItemEntity>`)
- `breaker` (`Entity`)
- `tool` (`ItemStack`)

### fireBlockBreak

```java
public static BlockEvent.BreakEvent fireBlockBreak(Level level, GameType gameType, ServerPlayer player, BlockPos pos, BlockState state)
```

**Parameters:**

- `level` (`Level`)
- `gameType` (`GameType`)
- `player` (`ServerPlayer`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `BlockEvent.BreakEvent`

### onPlaceItemIntoWorld

```java
public static InteractionResult onPlaceItemIntoWorld(UseOnContext context)
```

**Parameters:**

- `context` (`UseOnContext`)

**Returns:** `public static InteractionResult`

### onPlayerEnchantItem

```java
public static void onPlayerEnchantItem(Player player, ItemStack stack, List<EnchantmentInstance> instances)
```

**Parameters:**

- `player` (`Player`)
- `stack` (`ItemStack`)
- `instances` (`List<EnchantmentInstance>`)

### onAnvilChange

```java
public static boolean onAnvilChange(AnvilMenu container, ItemStack left, ItemStack right, Container outputSlot, String name, long baseCost, Player player)
```

**Parameters:**

- `container` (`AnvilMenu`)
- `left` (`ItemStack`)
- `right` (`ItemStack`)
- `outputSlot` (`Container`)
- `name` (`String`)
- `baseCost` (`long`)
- `player` (`Player`)

**Returns:** `public static boolean`

### onAnvilRepair

```java
public static float onAnvilRepair(Player player, ItemStack output, ItemStack left, ItemStack right)
```

**Parameters:**

- `player` (`Player`)
- `output` (`ItemStack`)
- `left` (`ItemStack`)
- `right` (`ItemStack`)

**Returns:** `public static float`

### onGrindstoneChange

```java
public static int onGrindstoneChange(ItemStack top, ItemStack bottom, Container outputSlot, int xp)
```

**Parameters:**

- `top` (`ItemStack`)
- `bottom` (`ItemStack`)
- `outputSlot` (`Container`)
- `xp` (`int`)

**Returns:** `public static int`

### onGrindstoneTake

```java
public static boolean onGrindstoneTake(Container inputSlots, ContainerLevelAccess access, Function<Level, Integer> xpFunction)
```

**Parameters:**

- `inputSlots` (`Container`)
- `access` (`ContainerLevelAccess`)
- `xpFunction` (`Function<Level, Integer>`)

**Returns:** `public static boolean`

### setCraftingPlayer

```java
public static void setCraftingPlayer(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `public static void`

### getCraftingPlayer

```java
public static Player getCraftingPlayer()
```

**Returns:** `public static Player`

### getCraftingRemainingItem

```java
public static ItemStack getCraftingRemainingItem(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `public static ItemStack`

### onPlayerAttackTarget

```java
public static boolean onPlayerAttackTarget(Player player, Entity target)
```

**Parameters:**

- `player` (`Player`)
- `target` (`Entity`)

**Returns:** `public static boolean`

### onTravelToDimension

```java
public static boolean onTravelToDimension(Entity entity, ResourceKey<Level> dimension)
```

**Parameters:**

- `entity` (`Entity`)
- `dimension` (`ResourceKey<Level>`)

**Returns:** `public static boolean`

### onInteractEntityAt

```java
public static InteractionResult onInteractEntityAt(Player player, Entity entity, HitResult ray, InteractionHand hand)
```

**Parameters:**

- `player` (`Player`)
- `entity` (`Entity`)
- `ray` (`HitResult`)
- `hand` (`InteractionHand`)

**Returns:** `InteractionResult`

### onInteractEntityAt

```java
return onInteractEntityAt()
```

**Returns:** `return`

### onInteractEntityAt

```java
public static InteractionResult onInteractEntityAt(Player player, Entity entity, Vec3 vec3d, InteractionHand hand)
```

**Parameters:**

- `player` (`Player`)
- `entity` (`Entity`)
- `vec3d` (`Vec3`)
- `hand` (`InteractionHand`)

**Returns:** `InteractionResult`

### onInteractEntity

```java
public static InteractionResult onInteractEntity(Player player, Entity entity, InteractionHand hand)
```

**Parameters:**

- `player` (`Player`)
- `entity` (`Entity`)
- `hand` (`InteractionHand`)

**Returns:** `InteractionResult`

### onItemRightClick

```java
public static InteractionResult onItemRightClick(Player player, InteractionHand hand)
```

**Parameters:**

- `player` (`Player`)
- `hand` (`InteractionHand`)

**Returns:** `InteractionResult`

### onLeftClickBlock

```java
public static PlayerInteractEvent.LeftClickBlock onLeftClickBlock(Player player, BlockPos pos, Direction face, ServerboundPlayerActionPacket.Action action)
```

**Parameters:**

- `player` (`Player`)
- `pos` (`BlockPos`)
- `face` (`Direction`)
- `action` (`ServerboundPlayerActionPacket.Action`)

**Returns:** `public static PlayerInteractEvent.LeftClickBlock`

### onClientMineHold

```java
public static PlayerInteractEvent.LeftClickBlock onClientMineHold(Player player, BlockPos pos, Direction face)
```

**Parameters:**

- `player` (`Player`)
- `pos` (`BlockPos`)
- `face` (`Direction`)

**Returns:** `public static PlayerInteractEvent.LeftClickBlock`

### onRightClickBlock

```java
public static PlayerInteractEvent.RightClickBlock onRightClickBlock(Player player, InteractionHand hand, BlockPos pos, BlockHitResult hitVec)
```

**Parameters:**

- `player` (`Player`)
- `hand` (`InteractionHand`)
- `pos` (`BlockPos`)
- `hitVec` (`BlockHitResult`)

**Returns:** `public static PlayerInteractEvent.RightClickBlock`

### onEmptyClick

```java
public static void onEmptyClick(Player player, InteractionHand hand)
```

**Parameters:**

- `player` (`Player`)
- `hand` (`InteractionHand`)

**Returns:** `public static void`

### onEmptyLeftClick

```java
public static void onEmptyLeftClick(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `public static void`

### onChangeGameType

```java
public static GameType onChangeGameType(Player player, GameType currentGameType, GameType newGameType)
```

**Parameters:**

- `player` (`Player`)
- `currentGameType` (`GameType`)
- `newGameType` (`GameType`)

**Returns:** `GameType`

### lootPoolsCodec

```java
.Internal
    public static Codec<List<LootPool>> lootPoolsCodec(BiConsumer<LootPool, String> nameSetter)
```

**Parameters:**

- `nameSetter` (`BiConsumer<LootPool, String>`)

**Returns:** `.Internal
    public static Codec<List<LootPool>>`

### getVanillaFluidType

```java
public static FluidType getVanillaFluidType(Fluid fluid)
```

**Parameters:**

- `fluid` (`Fluid`)

**Returns:** `FluidType`

### RuntimeException

```java
throw new RuntimeException("Mod fluids must override getFluidType.")
```

**Parameters:**

- `getFluidType."` (`"Mod fluids must override`)

**Returns:** `throw new`

### getTagFromVanillaTier

```java
public static TagKey<Block> getTagFromVanillaTier(Tiers tier)
```

**Parameters:**

- `tier` (`Tiers`)

**Returns:** `public static TagKey<Block>`

### onCheckCreativeTabs

```java
public static Collection<CreativeModeTab> onCheckCreativeTabs(CreativeModeTab[]... vanillaTabs)
```

**Parameters:**

- `vanillaTabs` (`CreativeModeTab[]...`)

**Returns:** `public static Collection<CreativeModeTab>`

### apply

```java
Biome apply(Biome.ClimateSettings climate, BiomeSpecialEffects effects, BiomeGenerationSettings gen, MobSpawnSettings spawns)
```

**Parameters:**

- `climate` (`Biome.ClimateSettings`)
- `effects` (`BiomeSpecialEffects`)
- `gen` (`BiomeGenerationSettings`)
- `spawns` (`MobSpawnSettings`)

**Returns:** `Biome`

### canCropGrow

```java
public static boolean canCropGrow(Level level, BlockPos pos, BlockState state, boolean def)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `def` (`boolean`)

**Returns:** `boolean`

### fireCropGrowPost

```java
public static void fireCropGrowPost(Level level, BlockPos pos, BlockState state)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `public static void`

### fireCriticalHit

```java
public static CriticalHitEvent fireCriticalHit(Player player, Entity target, boolean vanillaCritical, float damageModifier)
```

**Parameters:**

- `player` (`Player`)
- `target` (`Entity`)
- `vanillaCritical` (`boolean`)
- `damageModifier` (`float`)

**Returns:** `CriticalHitEvent`

### fireSweepAttack

```java
public static SweepAttackEvent fireSweepAttack(Player player, Entity target, boolean isVanillaSweep)
```

**Parameters:**

- `player` (`Player`)
- `target` (`Entity`)
- `isVanillaSweep` (`boolean`)

**Returns:** `SweepAttackEvent`

### computeModifiedAttributes

```java
public static ItemAttributeModifiers computeModifiedAttributes(ItemStack stack, ItemAttributeModifiers defaultModifiers)
```

**Parameters:**

- `stack` (`ItemStack`)
- `defaultModifiers` (`ItemAttributeModifiers`)

**Returns:** `ItemAttributeModifiers`

### getProjectile

```java
public static ItemStack getProjectile(LivingEntity entity, ItemStack projectileWeaponItem, ItemStack projectile)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `projectileWeaponItem` (`ItemStack`)
- `projectile` (`ItemStack`)

**Returns:** `ItemStack`

### getDefaultCreatorModId

```java
public static String getDefaultCreatorModId(ItemStack itemStack)
```

**Parameters:**

- `itemStack` (`ItemStack`)

**Returns:** `String`

### onFarmlandTrample

```java
public static boolean onFarmlandTrample(Level level, BlockPos pos, BlockState state, float fallDistance, Entity entity)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `fallDistance` (`float`)
- `entity` (`Entity`)

**Returns:** `public static boolean`

### onNoteChange

```java
public static int onNoteChange(Level level, BlockPos pos, BlockState state, int old, int _new)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `old` (`int`)
- `_new` (`int`)

**Returns:** `public static int`

### getSerializer

```java
public static EntityDataSerializer<?> getSerializer(int id, CrudeIncrementalIntIdentityHashBiMap<EntityDataSerializer<?>> vanilla)
```

**Parameters:**

- `id` (`int`)
- `vanilla` (`CrudeIncrementalIntIdentityHashBiMap<EntityDataSerializer<?>>`)

**Returns:** `EntityDataSerializer<?>`

### getSerializerId

```java
public static int getSerializerId(EntityDataSerializer<?> serializer, CrudeIncrementalIntIdentityHashBiMap<EntityDataSerializer<?>> vanilla)
```

**Parameters:**

- `serializer` (`EntityDataSerializer<?>`)
- `vanilla` (`CrudeIncrementalIntIdentityHashBiMap<EntityDataSerializer<?>>`)

**Returns:** `public static int`

### canEntityDestroy

```java
public static boolean canEntityDestroy(Level level, BlockPos pos, LivingEntity entity)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `entity` (`LivingEntity`)

**Returns:** `public static boolean`

### modifyLoot

```java
public static List<ItemStack> modifyLoot(List<ItemStack> list, LootContext context)
```

**Parameters:**

- `list` (`List<ItemStack>`)
- `context` (`LootContext`)

**Returns:** `List<ItemStack>`

### modifyLoot

```java
public static ObjectArrayList<ItemStack> modifyLoot(ResourceLocation lootTableId, ObjectArrayList<ItemStack> generatedLoot, LootContext context)
```

**Parameters:**

- `lootTableId` (`ResourceLocation`)
- `generatedLoot` (`ObjectArrayList<ItemStack>`)
- `context` (`LootContext`)

**Returns:** `ObjectArrayList<ItemStack>`

### getModDataPacks

```java
public static List<String> getModDataPacks()
```

**Returns:** `public static List<String>`

### IllegalStateException

```java
throw new IllegalStateException("Attempted to retrieve mod packs before they were loaded in!")
```

**Parameters:**

- `in!"` (`"Attempted to retrieve mod packs before they were loaded`)

**Returns:** `throw new`

### getModDataPacksWithVanilla

```java
public static List<String> getModDataPacksWithVanilla()
```

**Returns:** `public static List<String>`

### getAttributesView

```java
public static Map<EntityType<? extends LivingEntity>, AttributeSupplier> getAttributesView()
```

**Returns:** `Map<EntityType<? extends LivingEntity>, AttributeSupplier>`

### modifyAttributes

```java
public static void modifyAttributes()
```

### onEntityEnterSection

```java
public static void onEntityEnterSection(Entity entity, long packedOldPos, long packedNewPos)
```

**Parameters:**

- `entity` (`Entity`)
- `packedOldPos` (`long`)
- `packedNewPos` (`long`)

**Returns:** `public static void`

### onDamageBlock

```java
public static LivingShieldBlockEvent onDamageBlock(LivingEntity blocker, DamageContainer container, boolean originalBlocked)
```

**Parameters:**

- `blocker` (`LivingEntity`)
- `container` (`DamageContainer`)
- `originalBlocked` (`boolean`)

**Returns:** `LivingShieldBlockEvent`

### onLivingSwapHandItems

```java
public static LivingSwapItemsEvent.Hands onLivingSwapHandItems(LivingEntity livingEntity)
```

**Parameters:**

- `livingEntity` (`LivingEntity`)

**Returns:** `public static LivingSwapItemsEvent.Hands`

### writeAdditionalLevelSaveData

```java
.Internal
    public static void writeAdditionalLevelSaveData(WorldData worldData, CompoundTag levelTag)
```

**Parameters:**

- `worldData` (`WorldData`)
- `levelTag` (`CompoundTag`)

**Returns:** `.Internal
    public static void`

### readAdditionalLevelSaveData

```java
.Internal
    public static void readAdditionalLevelSaveData(CompoundTag rootTag, LevelStorageSource.LevelDirectory levelDirectory)
```

**Parameters:**

- `rootTag` (`CompoundTag`)
- `levelDirectory` (`LevelStorageSource.LevelDirectory`)

**Returns:** `.Internal
    public static void`

### encodeLifecycle

```java
public static String encodeLifecycle(Lifecycle lifecycle)
```

**Parameters:**

- `lifecycle` (`Lifecycle`)

**Returns:** `public static String`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Unknown lifecycle.")
```

**Parameters:**

- `lifecycle."` (`"Unknown`)

**Returns:** `throw new`

### parseLifecycle

```java
public static Lifecycle parseLifecycle(String lifecycle)
```

**Parameters:**

- `lifecycle` (`String`)

**Returns:** `public static Lifecycle`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Unknown lifecycle.")
```

**Parameters:**

- `lifecycle."` (`"Unknown`)

**Returns:** `throw new`

### saveMobEffect

```java
public static void saveMobEffect(CompoundTag nbt, String key, MobEffect effect)
```

**Parameters:**

- `nbt` (`CompoundTag`)
- `key` (`String`)
- `effect` (`MobEffect`)

**Returns:** `public static void`

### loadMobEffect

```java
public static MobEffect loadMobEffect(CompoundTag nbt, String key, MobEffect fallback)
```

**Parameters:**

- `nbt` (`CompoundTag`)
- `key` (`String`)
- `fallback` (`MobEffect`)

**Returns:** `MobEffect`

### shouldSuppressEnderManAnger

```java
public static boolean shouldSuppressEnderManAnger(EnderMan enderMan, Player player, ItemStack mask)
```

**Parameters:**

- `enderMan` (`EnderMan`)
- `player` (`Player`)
- `mask` (`ItemStack`)

**Returns:** `public static boolean`

### getStructureConversion

```java
public static StructuresBecomeConfiguredFix.Conversion getStructureConversion(String originalBiome)
```

**Parameters:**

- `originalBiome` (`String`)

**Returns:** `StructuresBecomeConfiguredFix.Conversion`

### checkStructureNamespace

```java
public static boolean checkStructureNamespace(String biome)
```

**Parameters:**

- `biome` (`String`)

**Returns:** `boolean`

### prefixNamespace

```java
public static String prefixNamespace(ResourceLocation registryKey)
```

**Parameters:**

- `registryKey` (`ResourceLocation`)

**Returns:** `String`

### canUseEntitySelectors

```java
public static boolean canUseEntitySelectors(SharedSuggestionProvider provider)
```

**Parameters:**

- `provider` (`SharedSuggestionProvider`)

**Returns:** `public static boolean`

### wrapRegistryLookup

```java
<T> .Internal
    public static <T> HolderLookup.RegistryLookup<T> wrapRegistryLookup(HolderLookup.RegistryLookup<T> lookup)
```

**Parameters:**

- `lookup` (`HolderLookup.RegistryLookup<T>`)

**Returns:** `.Internal
    public static <T> HolderLookup.RegistryLookup<T>`

### parent

```java
public RegistryLookup<T> parent()
```

**Returns:** `RegistryLookup<T>`

### listTags

```java
public Stream<HolderSet.Named<T>> listTags()
```

**Returns:** `Stream<HolderSet.Named<T>>`

### get

```java
public Optional<HolderSet.Named<T>> get(TagKey<T> key)
```

**Parameters:**

- `key` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### onLivingBreathe

```java
public static void onLivingBreathe(LivingEntity entity, int consumeAirAmount, int refillAirAmount)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `consumeAirAmount` (`int`)
- `refillAirAmount` (`int`)

### markComponentClassAsValid

```java
public static void markComponentClassAsValid(Class<?> clazz)
```

**Parameters:**

- `clazz` (`Class<?>`)

### IllegalArgumentException

```java
throw new IllegalArgumentException("Records and enums are always valid components")
```

**Parameters:**

- `components"` (`"Records and enums are always valid`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Class " + clazz + " already overrides equals and hashCode")
```

**Parameters:**

- `hashCode"` (`"Class " + clazz + " already overrides equals and`)

**Returns:** `throw new`

### markComponentClassAsValid

```java
Mark common singletons as valid markComponentClassAsValid()
```

**Returns:** `Mark common singletons as valid`

### markComponentClassAsValid

```java
 markComponentClassAsValid()
```

**Returns:** ``

### markComponentClassAsValid

```java
Mark common interned classes as valid markComponentClassAsValid()
```

**Returns:** `Mark common interned classes as valid`

### validateComponent

```java
.Internal
    public static void validateComponent(Object dataComponent)
```

**Parameters:**

- `dataComponent` (`Object`)

**Returns:** `.Internal
    public static void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Data components must implement equals and hashCode. Keep in mind they must also be immutable. Problematic class: " + clazz)
```

**Parameters:**

- `clazz` (`"Data components must implement equals and hashCode. Keep in mind they must also be immutable. Problematic class: " +`)

**Returns:** `throw new`

### overridesEqualsAndHashCode

```java
private static boolean overridesEqualsAndHashCode(Class<?> clazz)
```

**Parameters:**

- `clazz` (`Class<?>`)

**Returns:** `private static boolean`

### RuntimeException

```java
throw new RuntimeException("Failed to check for component equals and hashCode")
```

**Parameters:**

- `hashCode"` (`"Failed to check for component equals and`)

**Returns:** `throw new`

### onChunkUnload

```java
public static void onChunkUnload(PoiManager poiManager, ChunkAccess chunkAccess)
```

**Parameters:**

- `poiManager` (`PoiManager`)
- `chunkAccess` (`ChunkAccess`)

### canMobEffectBeApplied

```java
public static boolean canMobEffectBeApplied(LivingEntity entity, MobEffectInstance effect)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `effect` (`MobEffectInstance`)

**Returns:** `boolean`

### resolveLookup

```java
public static <T> RegistryLookup<T> resolveLookup(ResourceKey<? extends Registry<T>> key)
```

**Parameters:**

- `key` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `RegistryLookup<T>`

### dispenseUseOnContext

```java
public static UseOnContext dispenseUseOnContext(BlockSource source, ItemStack stack)
```

**Parameters:**

- `source` (`BlockSource`)
- `stack` (`ItemStack`)

**Returns:** `UseOnContext`

### tryDispenseShearsHarvestBlock

```java
public static boolean tryDispenseShearsHarvestBlock(BlockSource source, ItemStack stack, ServerLevel level, BlockPos pos)
```

**Parameters:**

- `source` (`BlockSource`)
- `stack` (`ItemStack`)
- `level` (`ServerLevel`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### buildRecipeBookTypeTagFields

```java
public static Map<RecipeBookType, Pair<String, String>> buildRecipeBookTypeTagFields(Map<RecipeBookType, Pair<String, String>> vanillaMap)
```

**Parameters:**

- `vanillaMap` (`Map<RecipeBookType, Pair<String, String>>`)

**Returns:** `public static Map<RecipeBookType, Pair<String, String>>`

### getFilteredRecipeBookTypeValues

```java
public static RecipeBookType[] getFilteredRecipeBookTypeValues()
```

**Returns:** `public static RecipeBookType[]`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BiomeCallbackFunction` | interface |  |
