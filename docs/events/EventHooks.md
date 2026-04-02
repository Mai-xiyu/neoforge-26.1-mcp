# EventHooks

**Package:** `net.neoforged.neoforge.event`
**Type:** class

## Methods

### onMultiBlockPlace

```java
public static boolean onMultiBlockPlace(Entity entity, List<BlockSnapshot> blockSnapshots, Direction direction)
```

**Parameters:**

- `entity` (`Entity`)
- `blockSnapshots` (`List<BlockSnapshot>`)
- `direction` (`Direction`)

**Returns:** `public static boolean`

### onBlockPlace

```java
public static boolean onBlockPlace(Entity entity, BlockSnapshot blockSnapshot, Direction direction)
```

**Parameters:**

- `entity` (`Entity`)
- `blockSnapshot` (`BlockSnapshot`)
- `direction` (`Direction`)

**Returns:** `public static boolean`

### onNeighborNotify

```java
public static NeighborNotifyEvent onNeighborNotify(Level level, BlockPos pos, BlockState state, EnumSet<Direction> notifiedSides, boolean forceRedstoneUpdate)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `notifiedSides` (`EnumSet<Direction>`)
- `forceRedstoneUpdate` (`boolean`)

**Returns:** `public static NeighborNotifyEvent`

### doPlayerHarvestCheck

```java
public static boolean doPlayerHarvestCheck(Player player, BlockState state, BlockGetter level, BlockPos pos)
```

**Parameters:**

- `player` (`Player`)
- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `public static boolean`

### getBreakSpeed

```java
public static float getBreakSpeed(Player player, BlockState state, float original, BlockPos pos)
```

**Parameters:**

- `player` (`Player`)
- `state` (`BlockState`)
- `original` (`float`)
- `pos` (`BlockPos`)

**Returns:** `public static float`

### onPlayerDestroyItem

```java
public static void onPlayerDestroyItem(Player player, ItemStack stack, InteractionHand hand)
```

**Parameters:**

- `player` (`Player`)
- `stack` (`ItemStack`)
- `hand` (`InteractionHand`)

**Returns:** `public static void`

### checkSpawnPlacements

```java
.Internal
    public static boolean checkSpawnPlacements(EntityType<?> entityType, ServerLevelAccessor level, MobSpawnType spawnType, BlockPos pos, RandomSource random, boolean defaultResult)
```

**Parameters:**

- `entityType` (`EntityType<?>`)
- `level` (`ServerLevelAccessor`)
- `spawnType` (`MobSpawnType`)
- `pos` (`BlockPos`)
- `random` (`RandomSource`)
- `defaultResult` (`boolean`)

**Returns:** `.Internal
    public static boolean`

### checkSpawnPosition

```java
public static boolean checkSpawnPosition(Mob mob, ServerLevelAccessor level, MobSpawnType spawnType)
```

**Parameters:**

- `mob` (`Mob`)
- `level` (`ServerLevelAccessor`)
- `spawnType` (`MobSpawnType`)

**Returns:** `boolean`

### checkSpawnPositionSpawner

```java
public static boolean checkSpawnPositionSpawner(Mob mob, ServerLevelAccessor level, MobSpawnType spawnType, SpawnData spawnData, BaseSpawner spawner)
```

**Parameters:**

- `mob` (`Mob`)
- `level` (`ServerLevelAccessor`)
- `spawnType` (`MobSpawnType`)
- `spawnData` (`SpawnData`)
- `spawner` (`BaseSpawner`)

**Returns:** `boolean`

### firePlayerSpawnPhantoms

```java
PlayerSpawnPhantomsEvent firePlayerSpawnPhantoms(ServerPlayer player, ServerLevel level, BlockPos pos)
```

**Parameters:**

- `player` (`ServerPlayer`)
- `level` (`ServerLevel`)
- `pos` (`BlockPos`)

**Returns:** `PlayerSpawnPhantomsEvent`

### checkMobDespawn

```java
public static boolean checkMobDespawn(Mob mob)
```

**Parameters:**

- `mob` (`Mob`)

**Returns:** `boolean`

### getItemBurnTime

```java
public static int getItemBurnTime(ItemStack itemStack, int burnTime, RecipeType<?> recipeType)
```

**Parameters:**

- `itemStack` (`ItemStack`)
- `burnTime` (`int`)
- `recipeType` (`RecipeType<?>`)

**Returns:** `public static int`

### getExperienceDrop

```java
public static int getExperienceDrop(LivingEntity entity, Player attackingPlayer, int originalExperience)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `attackingPlayer` (`Player`)
- `originalExperience` (`int`)

**Returns:** `public static int`

### getMaxSpawnClusterSize

```java
public static int getMaxSpawnClusterSize(Mob entity)
```

**Parameters:**

- `entity` (`Mob`)

**Returns:** `int`

### getPlayerDisplayName

```java
public static Component getPlayerDisplayName(Player player, Component username)
```

**Parameters:**

- `player` (`Player`)
- `username` (`Component`)

**Returns:** `public static Component`

### getPlayerTabListDisplayName

```java
public static Component getPlayerTabListDisplayName(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `public static Component`

### fireFluidPlaceBlockEvent

```java
public static BlockState fireFluidPlaceBlockEvent(LevelAccessor level, BlockPos pos, BlockPos liquidPos, BlockState state)
```

**Parameters:**

- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `liquidPos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `public static BlockState`

### onItemTooltip

```java
public static ItemTooltipEvent onItemTooltip(ItemStack itemStack, Player entityPlayer, List<Component> list, TooltipFlag flags, Item.TooltipContext context)
```

**Parameters:**

- `itemStack` (`ItemStack`)
- `entityPlayer` (`Player`)
- `list` (`List<Component>`)
- `flags` (`TooltipFlag`)
- `context` (`Item.TooltipContext`)

**Returns:** `public static ItemTooltipEvent`

### onEntityStruckByLightning

```java
public static boolean onEntityStruckByLightning(Entity entity, LightningBolt bolt)
```

**Parameters:**

- `entity` (`Entity`)
- `bolt` (`LightningBolt`)

**Returns:** `public static boolean`

### onItemUseStart

```java
public static int onItemUseStart(LivingEntity entity, ItemStack item, int duration)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `item` (`ItemStack`)
- `duration` (`int`)

**Returns:** `public static int`

### onItemUseTick

```java
public static int onItemUseTick(LivingEntity entity, ItemStack item, int duration)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `item` (`ItemStack`)
- `duration` (`int`)

**Returns:** `public static int`

### onUseItemStop

```java
public static boolean onUseItemStop(LivingEntity entity, ItemStack item, int duration)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `item` (`ItemStack`)
- `duration` (`int`)

**Returns:** `public static boolean`

### onItemUseFinish

```java
public static ItemStack onItemUseFinish(LivingEntity entity, ItemStack item, int duration, ItemStack result)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `item` (`ItemStack`)
- `duration` (`int`)
- `result` (`ItemStack`)

**Returns:** `public static ItemStack`

### onStartEntityTracking

```java
public static void onStartEntityTracking(Entity entity, Player player)
```

**Parameters:**

- `entity` (`Entity`)
- `player` (`Player`)

**Returns:** `public static void`

### onStopEntityTracking

```java
public static void onStopEntityTracking(Entity entity, Player player)
```

**Parameters:**

- `entity` (`Entity`)
- `player` (`Player`)

**Returns:** `public static void`

### firePlayerLoadingEvent

```java
public static void firePlayerLoadingEvent(Player player, File playerDirectory, String uuidString)
```

**Parameters:**

- `player` (`Player`)
- `playerDirectory` (`File`)
- `uuidString` (`String`)

**Returns:** `public static void`

### firePlayerSavingEvent

```java
public static void firePlayerSavingEvent(Player player, File playerDirectory, String uuidString)
```

**Parameters:**

- `player` (`Player`)
- `playerDirectory` (`File`)
- `uuidString` (`String`)

**Returns:** `public static void`

### firePlayerLoadingEvent

```java
public static void firePlayerLoadingEvent(Player player, PlayerDataStorage playerFileData, String uuidString)
```

**Parameters:**

- `player` (`Player`)
- `playerFileData` (`PlayerDataStorage`)
- `uuidString` (`String`)

**Returns:** `public static void`

### onToolUse

```java
public static BlockState onToolUse(BlockState originalState, UseOnContext context, ItemAbility itemAbility, boolean simulate)
```

**Parameters:**

- `originalState` (`BlockState`)
- `context` (`UseOnContext`)
- `itemAbility` (`ItemAbility`)
- `simulate` (`boolean`)

**Returns:** `BlockState`

### fireBonemealEvent

```java
public static BonemealEvent fireBonemealEvent(Player player, Level level, BlockPos pos, BlockState state, ItemStack stack)
```

**Parameters:**

- `player` (`Player`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `stack` (`ItemStack`)

**Returns:** `BonemealEvent`

### onPlaySoundAtEntity

```java
public static PlayLevelSoundEvent.AtEntity onPlaySoundAtEntity(Entity entity, Holder<SoundEvent> name, SoundSource category, float volume, float pitch)
```

**Parameters:**

- `entity` (`Entity`)
- `name` (`Holder<SoundEvent>`)
- `category` (`SoundSource`)
- `volume` (`float`)
- `pitch` (`float`)

**Returns:** `public static PlayLevelSoundEvent.AtEntity`

### onPlaySoundAtPosition

```java
public static PlayLevelSoundEvent.AtPosition onPlaySoundAtPosition(Level level, double x, double y, double z, Holder<SoundEvent> name, SoundSource category, float volume, float pitch)
```

**Parameters:**

- `level` (`Level`)
- `x` (`double`)
- `y` (`double`)
- `z` (`double`)
- `name` (`Holder<SoundEvent>`)
- `category` (`SoundSource`)
- `volume` (`float`)
- `pitch` (`float`)

**Returns:** `public static PlayLevelSoundEvent.AtPosition`

### onItemExpire

```java
public static int onItemExpire(ItemEntity entity)
```

**Parameters:**

- `entity` (`ItemEntity`)

**Returns:** `public static int`

### fireItemPickupPre

```java
public static ItemEntityPickupEvent.Pre fireItemPickupPre(ItemEntity itemEntity, Player player)
```

**Parameters:**

- `itemEntity` (`ItemEntity`)
- `player` (`Player`)

**Returns:** `ItemEntityPickupEvent.Pre`

### fireItemPickupPost

```java
public static void fireItemPickupPost(ItemEntity itemEntity, Player player, ItemStack copy)
```

**Parameters:**

- `itemEntity` (`ItemEntity`)
- `player` (`Player`)
- `copy` (`ItemStack`)

### canMountEntity

```java
public static boolean canMountEntity(Entity entityMounting, Entity entityBeingMounted, boolean isMounting)
```

**Parameters:**

- `entityMounting` (`Entity`)
- `entityBeingMounted` (`Entity`)
- `isMounting` (`boolean`)

**Returns:** `public static boolean`

### onAnimalTame

```java
public static boolean onAnimalTame(Animal animal, Player tamer)
```

**Parameters:**

- `animal` (`Animal`)
- `tamer` (`Player`)

**Returns:** `public static boolean`

### canPlayerStartSleeping

```java
public static Either<BedSleepingProblem, Unit> canPlayerStartSleeping(ServerPlayer player, BlockPos pos, Either<BedSleepingProblem, Unit> vanillaResult)
```

**Parameters:**

- `player` (`ServerPlayer`)
- `pos` (`BlockPos`)
- `vanillaResult` (`Either<BedSleepingProblem, Unit>`)

**Returns:** `public static Either<BedSleepingProblem, Unit>`

### onPlayerWakeup

```java
public static void onPlayerWakeup(Player player, boolean wakeImmediately, boolean updateLevel)
```

**Parameters:**

- `player` (`Player`)
- `wakeImmediately` (`boolean`)
- `updateLevel` (`boolean`)

**Returns:** `public static void`

### onPlayerFall

```java
public static void onPlayerFall(Player player, float distance, float multiplier)
```

**Parameters:**

- `player` (`Player`)
- `distance` (`float`)
- `multiplier` (`float`)

**Returns:** `public static void`

### onPlayerSpawnSet

```java
public static boolean onPlayerSpawnSet(Player player, ResourceKey<Level> levelKey, BlockPos pos, boolean forced)
```

**Parameters:**

- `player` (`Player`)
- `levelKey` (`ResourceKey<Level>`)
- `pos` (`BlockPos`)
- `forced` (`boolean`)

**Returns:** `public static boolean`

### onPlayerClone

```java
public static void onPlayerClone(Player player, Player oldPlayer, boolean wasDeath)
```

**Parameters:**

- `player` (`Player`)
- `oldPlayer` (`Player`)
- `wasDeath` (`boolean`)

**Returns:** `public static void`

### onExplosionStart

```java
public static boolean onExplosionStart(Level level, Explosion explosion)
```

**Parameters:**

- `level` (`Level`)
- `explosion` (`Explosion`)

**Returns:** `public static boolean`

### onExplosionDetonate

```java
public static void onExplosionDetonate(Level level, Explosion explosion, List<Entity> list, double diameter)
```

**Parameters:**

- `level` (`Level`)
- `explosion` (`Explosion`)
- `list` (`List<Entity>`)
- `diameter` (`double`)

**Returns:** `public static void`

### getExplosionKnockback

```java
public static Vec3 getExplosionKnockback(Level level, Explosion explosion, Entity entity, Vec3 initialVelocity)
```

**Parameters:**

- `level` (`Level`)
- `explosion` (`Explosion`)
- `entity` (`Entity`)
- `initialVelocity` (`Vec3`)

**Returns:** `Vec3`

### onCreateWorldSpawn

```java
public static boolean onCreateWorldSpawn(Level level, ServerLevelData settings)
```

**Parameters:**

- `level` (`Level`)
- `settings` (`ServerLevelData`)

**Returns:** `public static boolean`

### onLivingHeal

```java
public static float onLivingHeal(LivingEntity entity, float amount)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `amount` (`float`)

**Returns:** `public static float`

### onPotionAttemptBrew

```java
public static boolean onPotionAttemptBrew(NonNullList<ItemStack> stacks)
```

**Parameters:**

- `stacks` (`NonNullList<ItemStack>`)

**Returns:** `public static boolean`

### onPotionBrewed

```java
 onPotionBrewed()
```

**Returns:** ``

### onPotionBrewed

```java
public static void onPotionBrewed(NonNullList<ItemStack> brewingItemStacks)
```

**Parameters:**

- `brewingItemStacks` (`NonNullList<ItemStack>`)

**Returns:** `public static void`

### onPlayerBrewedPotion

```java
public static void onPlayerBrewedPotion(Player player, ItemStack stack)
```

**Parameters:**

- `player` (`Player`)
- `stack` (`ItemStack`)

**Returns:** `public static void`

### canEntityContinueSleeping

```java
public static boolean canEntityContinueSleeping(LivingEntity sleeper, BedSleepingProblem problem)
```

**Parameters:**

- `sleeper` (`LivingEntity`)
- `problem` (`BedSleepingProblem`)

**Returns:** `boolean`

### onArrowNock

```java
public static InteractionResultHolder<ItemStack> onArrowNock(ItemStack item, Level level, Player player, InteractionHand hand, boolean hasAmmo)
```

**Parameters:**

- `item` (`ItemStack`)
- `level` (`Level`)
- `player` (`Player`)
- `hand` (`InteractionHand`)
- `hasAmmo` (`boolean`)

**Returns:** `public static InteractionResultHolder<ItemStack>`

### onArrowLoose

```java
public static int onArrowLoose(ItemStack stack, Level level, Player player, int charge, boolean hasAmmo)
```

**Parameters:**

- `stack` (`ItemStack`)
- `level` (`Level`)
- `player` (`Player`)
- `charge` (`int`)
- `hasAmmo` (`boolean`)

**Returns:** `public static int`

### onProjectileImpact

```java
public static boolean onProjectileImpact(Projectile projectile, HitResult ray)
```

**Parameters:**

- `projectile` (`Projectile`)
- `ray` (`HitResult`)

**Returns:** `public static boolean`

### loadLootTable

```java
public static LootTable loadLootTable(ResourceLocation name, LootTable table)
```

**Parameters:**

- `name` (`ResourceLocation`)
- `table` (`LootTable`)

**Returns:** `LootTable`

### canCreateFluidSource

```java
public static boolean canCreateFluidSource(Level level, BlockPos pos, BlockState state)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `boolean`

### onTrySpawnPortal

```java
public static Optional<PortalShape> onTrySpawnPortal(LevelAccessor level, BlockPos pos, Optional<PortalShape> size)
```

**Parameters:**

- `level` (`LevelAccessor`)
- `pos` (`BlockPos`)
- `size` (`Optional<PortalShape>`)

**Returns:** `public static Optional<PortalShape>`

### onEnchantmentLevelSet

```java
public static int onEnchantmentLevelSet(Level level, BlockPos pos, int enchantRow, int power, ItemStack itemStack, int enchantmentLevel)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `enchantRow` (`int`)
- `power` (`int`)
- `itemStack` (`ItemStack`)
- `enchantmentLevel` (`int`)

**Returns:** `public static int`

### onEntityDestroyBlock

```java
public static boolean onEntityDestroyBlock(LivingEntity entity, BlockPos pos, BlockState state)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `public static boolean`

### canEntityGrief

```java
public static boolean canEntityGrief(Level level, Entity entity)
```

**Parameters:**

- `level` (`Level`)
- `entity` (`Entity`)

**Returns:** `boolean`

### fireBlockGrowFeature

```java
public static BlockGrowFeatureEvent fireBlockGrowFeature(LevelAccessor level, RandomSource rand, BlockPos pos, Holder<ConfiguredFeature<?, ?>> holder)
```

**Parameters:**

- `level` (`LevelAccessor`)
- `rand` (`RandomSource`)
- `pos` (`BlockPos`)
- `holder` (`Holder<ConfiguredFeature<?, ?>>`)

**Returns:** `BlockGrowFeatureEvent`

### alterGround

```java
public static StateProvider alterGround(TreeDecorator.Context ctx, List<BlockPos> positions, StateProvider provider)
```

**Parameters:**

- `ctx` (`TreeDecorator.Context`)
- `positions` (`List<BlockPos>`)
- `provider` (`StateProvider`)

**Returns:** `StateProvider`

### fireChunkTicketLevelUpdated

```java
public static void fireChunkTicketLevelUpdated(ServerLevel level, long chunkPos, int oldTicketLevel, int newTicketLevel, ChunkHolder chunkHolder)
```

**Parameters:**

- `level` (`ServerLevel`)
- `chunkPos` (`long`)
- `oldTicketLevel` (`int`)
- `newTicketLevel` (`int`)
- `chunkHolder` (`ChunkHolder`)

**Returns:** `public static void`

### fireChunkWatch

```java
public static void fireChunkWatch(ServerPlayer entity, LevelChunk chunk, ServerLevel level)
```

**Parameters:**

- `entity` (`ServerPlayer`)
- `chunk` (`LevelChunk`)
- `level` (`ServerLevel`)

**Returns:** `public static void`

### fireChunkSent

```java
public static void fireChunkSent(ServerPlayer entity, LevelChunk chunk, ServerLevel level)
```

**Parameters:**

- `entity` (`ServerPlayer`)
- `chunk` (`LevelChunk`)
- `level` (`ServerLevel`)

**Returns:** `public static void`

### fireChunkUnWatch

```java
public static void fireChunkUnWatch(ServerPlayer entity, ChunkPos chunkpos, ServerLevel level)
```

**Parameters:**

- `entity` (`ServerPlayer`)
- `chunkpos` (`ChunkPos`)
- `level` (`ServerLevel`)

**Returns:** `public static void`

### onPistonMovePre

```java
public static boolean onPistonMovePre(Level level, BlockPos pos, Direction direction, boolean extending)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)
- `extending` (`boolean`)

**Returns:** `public static boolean`

### onPistonMovePost

```java
public static void onPistonMovePost(Level level, BlockPos pos, Direction direction, boolean extending)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)
- `extending` (`boolean`)

**Returns:** `public static void`

### onSleepFinished

```java
public static long onSleepFinished(ServerLevel level, long newTime, long minTime)
```

**Parameters:**

- `level` (`ServerLevel`)
- `newTime` (`long`)
- `minTime` (`long`)

**Returns:** `public static long`

### onResourceReload

```java
public static List<PreparableReloadListener> onResourceReload(ReloadableServerResources serverResources, RegistryAccess registryAccess)
```

**Parameters:**

- `serverResources` (`ReloadableServerResources`)
- `registryAccess` (`RegistryAccess`)

**Returns:** `public static List<PreparableReloadListener>`

### onCommandRegister

```java
public static void onCommandRegister(CommandDispatcher<CommandSourceStack> dispatcher, Commands.CommandSelection environment, CommandBuildContext context)
```

**Parameters:**

- `dispatcher` (`CommandDispatcher<CommandSourceStack>`)
- `environment` (`Commands.CommandSelection`)
- `context` (`CommandBuildContext`)

**Returns:** `public static void`

### getEntitySizeForge

```java
public static EntityEvent.Size getEntitySizeForge(Entity entity, Pose pose, EntityDimensions size)
```

**Parameters:**

- `entity` (`Entity`)
- `pose` (`Pose`)
- `size` (`EntityDimensions`)

**Returns:** `public static EntityEvent.Size`

### getEntitySizeForge

```java
public static EntityEvent.Size getEntitySizeForge(Entity entity, Pose pose, EntityDimensions oldSize, EntityDimensions newSize)
```

**Parameters:**

- `entity` (`Entity`)
- `pose` (`Pose`)
- `oldSize` (`EntityDimensions`)
- `newSize` (`EntityDimensions`)

**Returns:** `public static EntityEvent.Size`

### canLivingConvert

```java
public static boolean canLivingConvert(LivingEntity entity, EntityType<? extends LivingEntity> outcome, Consumer<Integer> timer)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `outcome` (`EntityType<? extends LivingEntity>`)
- `timer` (`Consumer<Integer>`)

**Returns:** `public static boolean`

### onLivingConvert

```java
public static void onLivingConvert(LivingEntity entity, LivingEntity outcome)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `outcome` (`LivingEntity`)

**Returns:** `public static void`

### onEntityTeleportCommand

```java
public static EntityTeleportEvent.TeleportCommand onEntityTeleportCommand(Entity entity, double targetX, double targetY, double targetZ)
```

**Parameters:**

- `entity` (`Entity`)
- `targetX` (`double`)
- `targetY` (`double`)
- `targetZ` (`double`)

**Returns:** `public static EntityTeleportEvent.TeleportCommand`

### onEntityTeleportSpreadPlayersCommand

```java
public static EntityTeleportEvent.SpreadPlayersCommand onEntityTeleportSpreadPlayersCommand(Entity entity, double targetX, double targetY, double targetZ)
```

**Parameters:**

- `entity` (`Entity`)
- `targetX` (`double`)
- `targetY` (`double`)
- `targetZ` (`double`)

**Returns:** `public static EntityTeleportEvent.SpreadPlayersCommand`

### onEnderTeleport

```java
public static EntityTeleportEvent.EnderEntity onEnderTeleport(LivingEntity entity, double targetX, double targetY, double targetZ)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `targetX` (`double`)
- `targetY` (`double`)
- `targetZ` (`double`)

**Returns:** `public static EntityTeleportEvent.EnderEntity`

### onEnderPearlLand

```java
.Internal
    public static EntityTeleportEvent.EnderPearl onEnderPearlLand(ServerPlayer entity, double targetX, double targetY, double targetZ, ThrownEnderpearl pearlEntity, float attackDamage, HitResult hitResult)
```

**Parameters:**

- `entity` (`ServerPlayer`)
- `targetX` (`double`)
- `targetY` (`double`)
- `targetZ` (`double`)
- `pearlEntity` (`ThrownEnderpearl`)
- `attackDamage` (`float`)
- `hitResult` (`HitResult`)

**Returns:** `.Internal
    public static EntityTeleportEvent.EnderPearl`

### onChorusFruitTeleport

```java
public static EntityTeleportEvent.ChorusFruit onChorusFruitTeleport(LivingEntity entity, double targetX, double targetY, double targetZ)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `targetX` (`double`)
- `targetY` (`double`)
- `targetZ` (`double`)

**Returns:** `public static EntityTeleportEvent.ChorusFruit`

### onPermissionChanged

```java
public static boolean onPermissionChanged(GameProfile gameProfile, int newLevel, PlayerList playerList)
```

**Parameters:**

- `gameProfile` (`GameProfile`)
- `newLevel` (`int`)
- `playerList` (`PlayerList`)

**Returns:** `public static boolean`

### firePlayerChangedDimensionEvent

```java
public static void firePlayerChangedDimensionEvent(Player player, ResourceKey<Level> fromDim, ResourceKey<Level> toDim)
```

**Parameters:**

- `player` (`Player`)
- `fromDim` (`ResourceKey<Level>`)
- `toDim` (`ResourceKey<Level>`)

**Returns:** `public static void`

### firePlayerLoggedIn

```java
public static void firePlayerLoggedIn(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `public static void`

### firePlayerLoggedOut

```java
public static void firePlayerLoggedOut(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `public static void`

### firePlayerRespawnPositionEvent

```java
public static PlayerRespawnPositionEvent firePlayerRespawnPositionEvent(ServerPlayer player, DimensionTransition dimensionTransition, boolean fromEndFight)
```

**Parameters:**

- `player` (`ServerPlayer`)
- `dimensionTransition` (`DimensionTransition`)
- `fromEndFight` (`boolean`)

**Returns:** `PlayerRespawnPositionEvent`

### firePlayerRespawnEvent

```java
public static void firePlayerRespawnEvent(ServerPlayer player, boolean fromEndFight)
```

**Parameters:**

- `player` (`ServerPlayer`)
- `fromEndFight` (`boolean`)

### firePlayerCraftingEvent

```java
public static void firePlayerCraftingEvent(Player player, ItemStack crafted, Container craftMatrix)
```

**Parameters:**

- `player` (`Player`)
- `crafted` (`ItemStack`)
- `craftMatrix` (`Container`)

**Returns:** `public static void`

### firePlayerSmeltedEvent

```java
public static void firePlayerSmeltedEvent(Player player, ItemStack smelted)
```

**Parameters:**

- `player` (`Player`)
- `smelted` (`ItemStack`)

**Returns:** `public static void`

### firePlayerHeartTypeEvent

```java
public static Gui.HeartType firePlayerHeartTypeEvent(Player player, Gui.HeartType heartType)
```

**Parameters:**

- `player` (`Player`)
- `heartType` (`Gui.HeartType`)

**Returns:** `Gui.HeartType`

### fireEntityTickPre

```java
public static EntityTickEvent.Pre fireEntityTickPre(Entity entity)
```

**Parameters:**

- `entity` (`Entity`)

**Returns:** `EntityTickEvent.Pre`

### fireEntityTickPost

```java
public static void fireEntityTickPost(Entity entity)
```

**Parameters:**

- `entity` (`Entity`)

### firePlayerTickPre

```java
public static void firePlayerTickPre(Player player)
```

**Parameters:**

- `player` (`Player`)

### firePlayerTickPost

```java
public static void firePlayerTickPost(Player player)
```

**Parameters:**

- `player` (`Player`)

### fireLevelTickPre

```java
public static void fireLevelTickPre(Level level, BooleanSupplier haveTime)
```

**Parameters:**

- `level` (`Level`)
- `haveTime` (`BooleanSupplier`)

### fireLevelTickPost

```java
public static void fireLevelTickPost(Level level, BooleanSupplier haveTime)
```

**Parameters:**

- `level` (`Level`)
- `haveTime` (`BooleanSupplier`)

### fireServerTickPre

```java
public static void fireServerTickPre(BooleanSupplier haveTime, MinecraftServer server)
```

**Parameters:**

- `haveTime` (`BooleanSupplier`)
- `server` (`MinecraftServer`)

### fireServerTickPost

```java
public static void fireServerTickPost(BooleanSupplier haveTime, MinecraftServer server)
```

**Parameters:**

- `haveTime` (`BooleanSupplier`)
- `server` (`MinecraftServer`)

### getPotentialSpawns

```java
public static WeightedRandomList<MobSpawnSettings.SpawnerData> getPotentialSpawns(LevelAccessor level, MobCategory category, BlockPos pos, WeightedRandomList<MobSpawnSettings.SpawnerData> oldList)
```

**Parameters:**

- `level` (`LevelAccessor`)
- `category` (`MobCategory`)
- `pos` (`BlockPos`)
- `oldList` (`WeightedRandomList<MobSpawnSettings.SpawnerData>`)

**Returns:** `public static WeightedRandomList<MobSpawnSettings.SpawnerData>`

### onStatAward

```java
public static StatAwardEvent onStatAward(Player player, Stat<?> stat, int value)
```

**Parameters:**

- `player` (`Player`)
- `stat` (`Stat<?>`)
- `value` (`int`)

**Returns:** `public static StatAwardEvent`

### onAdvancementEarnedEvent

```java
.Internal
    public static void onAdvancementEarnedEvent(Player player, AdvancementHolder earned)
```

**Parameters:**

- `player` (`Player`)
- `earned` (`AdvancementHolder`)

**Returns:** `.Internal
    public static void`

### onAdvancementProgressedEvent

```java
.Internal
    public static void onAdvancementProgressedEvent(Player player, AdvancementHolder progressed, AdvancementProgress advancementProgress, String criterion, ProgressType progressType)
```

**Parameters:**

- `player` (`Player`)
- `progressed` (`AdvancementHolder`)
- `advancementProgress` (`AdvancementProgress`)
- `criterion` (`String`)
- `progressType` (`ProgressType`)

**Returns:** `.Internal
    public static void`

### onEffectRemoved

```java
public static boolean onEffectRemoved(LivingEntity entity, Holder<MobEffect> effect, EffectCure cure)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `effect` (`Holder<MobEffect>`)
- `cure` (`EffectCure`)

**Returns:** `public static boolean`

### onEffectRemoved

```java
public static boolean onEffectRemoved(LivingEntity entity, MobEffectInstance effectInstance, EffectCure cure)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `effectInstance` (`MobEffectInstance`)
- `cure` (`EffectCure`)

**Returns:** `public static boolean`

### getEnchantmentLevelSpecific

```java
public static int getEnchantmentLevelSpecific(int level, ItemStack stack, Holder<Enchantment> ench)
```

**Parameters:**

- `level` (`int`)
- `stack` (`ItemStack`)
- `ench` (`Holder<Enchantment>`)

**Returns:** `int`

### getAllEnchantmentLevels

```java
public static ItemEnchantments getAllEnchantmentLevels(ItemEnchantments enchantments, ItemStack stack, RegistryLookup<Enchantment> lookup)
```

**Parameters:**

- `enchantments` (`ItemEnchantments`)
- `stack` (`ItemStack`)
- `lookup` (`RegistryLookup<Enchantment>`)

**Returns:** `ItemEnchantments`

### onCreativeModeTabBuildContents

```java
.Internal
    public static void onCreativeModeTabBuildContents(CreativeModeTab tab, ResourceKey<CreativeModeTab> tabKey, CreativeModeTab.DisplayItemsGenerator originalGenerator, CreativeModeTab.ItemDisplayParameters params, CreativeModeTab.Output output)
```

**Parameters:**

- `tab` (`CreativeModeTab`)
- `tabKey` (`ResourceKey<CreativeModeTab>`)
- `originalGenerator` (`CreativeModeTab.DisplayItemsGenerator`)
- `params` (`CreativeModeTab.ItemDisplayParameters`)
- `output` (`CreativeModeTab.Output`)

**Returns:** `.Internal
    public static void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("The stack count must be 1")
```

**Parameters:**

- `1"` (`"The stack count must be`)

**Returns:** `throw new`

### onMobSplit

```java
public static MobSplitEvent onMobSplit(Mob parent, List<Mob> children)
```

**Parameters:**

- `parent` (`Mob`)
- `children` (`List<Mob>`)

**Returns:** `MobSplitEvent`

### getCustomSpawners

```java
public static List<CustomSpawner> getCustomSpawners(ServerLevel serverLevel, List<CustomSpawner> customSpawners)
```

**Parameters:**

- `serverLevel` (`ServerLevel`)
- `customSpawners` (`List<CustomSpawner>`)

**Returns:** `List<CustomSpawner>`
