# ServerPlayer

**Package:** `net.minecraft.server.level`
**Type:** class
**Extends:** `Player`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INTERACTION_DISTANCE_VERIFICATION_BUFFER` | `double` |  |
| `connection` | `ServerGamePacketListenerImpl` |  |
| `server` | `MinecraftServer` |  |
| `gameMode` | `ServerPlayerGameMode` |  |
| `seenCredits` | `boolean` |  |

## Methods

### sendInitialData

```java
public void sendInitialData(AbstractContainerMenu p_143448_, NonNullList<ItemStack> p_143449_, ItemStack p_143450_, int[] p_143451_)
```

**Parameters:**

- `p_143448_` (`AbstractContainerMenu`)
- `p_143449_` (`NonNullList<ItemStack>`)
- `p_143450_` (`ItemStack`)
- `p_143451_` (`int[]`)

### sendSlotChange

```java
public void sendSlotChange(AbstractContainerMenu p_143441_, int p_143442_, ItemStack p_143443_)
```

**Parameters:**

- `p_143441_` (`AbstractContainerMenu`)
- `p_143442_` (`int`)
- `p_143443_` (`ItemStack`)

### sendCarriedChange

```java
public void sendCarriedChange(AbstractContainerMenu p_143445_, ItemStack p_143446_)
```

**Parameters:**

- `p_143445_` (`AbstractContainerMenu`)
- `p_143446_` (`ItemStack`)

### sendDataChange

```java
public void sendDataChange(AbstractContainerMenu p_143437_, int p_143438_, int p_143439_)
```

**Parameters:**

- `p_143437_` (`AbstractContainerMenu`)
- `p_143438_` (`int`)
- `p_143439_` (`int`)

### broadcastDataValue

```java
private void broadcastDataValue(AbstractContainerMenu p_143455_, int p_143456_, int p_143457_)
```

**Parameters:**

- `p_143455_` (`AbstractContainerMenu`)
- `p_143456_` (`int`)
- `p_143457_` (`int`)

**Returns:** `private void`

### slotChanged

```java
public void slotChanged(AbstractContainerMenu p_143466_, int p_143467_, ItemStack p_143468_)
```

**Parameters:**

- `p_143466_` (`AbstractContainerMenu`)
- `p_143467_` (`int`)
- `p_143468_` (`ItemStack`)

### dataChanged

```java
public void dataChanged(AbstractContainerMenu p_143462_, int p_143463_, int p_143464_)
```

**Parameters:**

- `p_143462_` (`AbstractContainerMenu`)
- `p_143463_` (`int`)
- `p_143464_` (`int`)

### ServerPlayer

```java
public ServerPlayer(MinecraftServer p_254143_, ServerLevel p_254435_, GameProfile p_253651_, ClientInformation p_301997_)
```

**Parameters:**

- `p_254143_` (`MinecraftServer`)
- `p_254435_` (`ServerLevel`)
- `p_253651_` (`GameProfile`)
- `p_301997_` (`ClientInformation`)

**Returns:** `public`

### adjustSpawnLocation

```java
public BlockPos adjustSpawnLocation(ServerLevel p_352206_, BlockPos p_352202_)
```

**Parameters:**

- `p_352206_` (`ServerLevel`)
- `p_352202_` (`BlockPos`)

**Returns:** `BlockPos`

### getCoprime

```java
private int getCoprime(int p_9238_)
```

**Parameters:**

- `p_9238_` (`int`)

**Returns:** `private int`

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_9131_)
```

**Parameters:**

- `p_9131_` (`CompoundTag`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_9197_)
```

**Parameters:**

- `p_9197_` (`CompoundTag`)

### setExperiencePoints

```java
public void setExperiencePoints(int p_8986_)
```

**Parameters:**

- `p_8986_` (`int`)

**Returns:** `public void`

### setExperienceLevels

```java
public void setExperienceLevels(int p_9175_)
```

**Parameters:**

- `p_9175_` (`int`)

**Returns:** `public void`

### giveExperienceLevels

```java
public void giveExperienceLevels(int p_9200_)
```

**Parameters:**

- `p_9200_` (`int`)

### onEnchantmentPerformed

```java
public void onEnchantmentPerformed(ItemStack p_9079_, int p_9080_)
```

**Parameters:**

- `p_9079_` (`ItemStack`)
- `p_9080_` (`int`)

### initMenu

```java
private void initMenu(AbstractContainerMenu p_143400_)
```

**Parameters:**

- `p_143400_` (`AbstractContainerMenu`)

**Returns:** `private void`

### initInventoryMenu

```java
public void initInventoryMenu()
```

**Returns:** `public void`

### onEnterCombat

```java
public void onEnterCombat()
```

### onLeaveCombat

```java
public void onLeaveCombat()
```

### onInsideBlock

```java
public void onInsideBlock(BlockState p_9103_)
```

**Parameters:**

- `p_9103_` (`BlockState`)

### createItemCooldowns

```java
protected ItemCooldowns createItemCooldowns()
```

**Returns:** `ItemCooldowns`

### ServerItemCooldowns

```java
return new ServerItemCooldowns()
```

**Returns:** `return new`

### tick

```java
public void tick()
```

### updatePlayerAttributes

```java
private void updatePlayerAttributes()
```

**Returns:** `private void`

### doTick

```java
public void doTick()
```

**Returns:** `public void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### resetFallDistance

```java
public void resetFallDistance()
```

### trackStartFallingPosition

```java
public void trackStartFallingPosition()
```

**Returns:** `public void`

### trackEnteredOrExitedLavaOnVehicle

```java
public void trackEnteredOrExitedLavaOnVehicle()
```

**Returns:** `public void`

### updateScoreForCriteria

```java
private void updateScoreForCriteria(ObjectiveCriteria p_9105_, int p_9106_)
```

**Parameters:**

- `p_9105_` (`ObjectiveCriteria`)
- `p_9106_` (`int`)

**Returns:** `private void`

### die

```java
public void die(DamageSource p_9035_)
```

**Parameters:**

- `p_9035_` (`DamageSource`)

### tellNeutralMobsThatIDied

```java
private void tellNeutralMobsThatIDied()
```

**Returns:** `private void`

### awardKillScore

```java
public void awardKillScore(Entity p_9050_, int p_9051_, DamageSource p_9052_)
```

**Parameters:**

- `p_9050_` (`Entity`)
- `p_9051_` (`int`)
- `p_9052_` (`DamageSource`)

### handleTeamKill

```java
private void handleTeamKill(ScoreHolder p_313693_, ScoreHolder p_313814_, ObjectiveCriteria[] p_9127_)
```

**Parameters:**

- `p_313693_` (`ScoreHolder`)
- `p_313814_` (`ScoreHolder`)
- `p_9127_` (`ObjectiveCriteria[]`)

**Returns:** `private void`

### hurt

```java
public boolean hurt(DamageSource p_9037_, float p_9038_)
```

**Parameters:**

- `p_9037_` (`DamageSource`)
- `p_9038_` (`float`)

**Returns:** `boolean`

### canHarmPlayer

```java
public boolean canHarmPlayer(Player p_9064_)
```

**Parameters:**

- `p_9064_` (`Player`)

**Returns:** `boolean`

### isPvpAllowed

```java
private boolean isPvpAllowed()
```

**Returns:** `private boolean`

### findRespawnPositionAndUseSpawnBlock

```java
public DimensionTransition findRespawnPositionAndUseSpawnBlock(boolean p_348590_, DimensionTransition.PostDimensionTransition p_352261_)
```

**Parameters:**

- `p_348590_` (`boolean`)
- `p_352261_` (`DimensionTransition.PostDimensionTransition`)

**Returns:** `public DimensionTransition`

### findRespawnAndUseSpawnBlock

```java
private static Optional<ServerPlayer.RespawnPosAngle> findRespawnAndUseSpawnBlock(ServerLevel p_348505_, BlockPos p_348607_, float p_348481_, boolean p_348513_, boolean p_348600_)
```

**Parameters:**

- `p_348505_` (`ServerLevel`)
- `p_348607_` (`BlockPos`)
- `p_348481_` (`float`)
- `p_348513_` (`boolean`)
- `p_348600_` (`boolean`)

**Returns:** `private static Optional<ServerPlayer.RespawnPosAngle>`

### showEndCredits

```java
public void showEndCredits()
```

**Returns:** `public void`

### changeDimension

```java
public Entity changeDimension(DimensionTransition p_350472_)
```

**Parameters:**

- `p_350472_` (`DimensionTransition`)

**Returns:** `Entity`

### triggerDimensionChangeTriggers

```java
private void triggerDimensionChangeTriggers(ServerLevel p_9210_)
```

**Parameters:**

- `p_9210_` (`ServerLevel`)

**Returns:** `private void`

### broadcastToPlayer

```java
public boolean broadcastToPlayer(ServerPlayer p_9014_)
```

**Parameters:**

- `p_9014_` (`ServerPlayer`)

**Returns:** `boolean`

### take

```java
public void take(Entity p_9047_, int p_9048_)
```

**Parameters:**

- `p_9047_` (`Entity`)
- `p_9048_` (`int`)

### startSleepInBed

```java
public Either<Player.BedSleepingProblem, Unit> startSleepInBed(BlockPos p_9115_)
```

**Parameters:**

- `p_9115_` (`BlockPos`)

**Returns:** `Either<Player.BedSleepingProblem, Unit>`

### startSleeping

```java
public void startSleeping(BlockPos p_9190_)
```

**Parameters:**

- `p_9190_` (`BlockPos`)

### bedInRange

```java
private boolean bedInRange(BlockPos p_9117_, Direction p_9118_)
```

**Parameters:**

- `p_9117_` (`BlockPos`)
- `p_9118_` (`Direction`)

**Returns:** `private boolean`

### isReachableBedBlock

```java
private boolean isReachableBedBlock(BlockPos p_9223_)
```

**Parameters:**

- `p_9223_` (`BlockPos`)

**Returns:** `private boolean`

### bedBlocked

```java
private boolean bedBlocked(BlockPos p_9192_, Direction p_9193_)
```

**Parameters:**

- `p_9192_` (`BlockPos`)
- `p_9193_` (`Direction`)

**Returns:** `private boolean`

### stopSleepInBed

```java
public void stopSleepInBed(boolean p_9165_, boolean p_9166_)
```

**Parameters:**

- `p_9165_` (`boolean`)
- `p_9166_` (`boolean`)

### dismountTo

```java
public void dismountTo(double p_143389_, double p_143390_, double p_143391_)
```

**Parameters:**

- `p_143389_` (`double`)
- `p_143390_` (`double`)
- `p_143391_` (`double`)

### isInvulnerableTo

```java
public boolean isInvulnerableTo(DamageSource p_9182_)
```

**Parameters:**

- `p_9182_` (`DamageSource`)

**Returns:** `boolean`

### checkFallDamage

```java
protected void checkFallDamage(double p_8976_, boolean p_8977_, BlockState p_8978_, BlockPos p_8979_)
```

**Parameters:**

- `p_8976_` (`double`)
- `p_8977_` (`boolean`)
- `p_8978_` (`BlockState`)
- `p_8979_` (`BlockPos`)

### onChangedBlock

```java
protected void onChangedBlock(ServerLevel p_346052_, BlockPos p_9206_)
```

**Parameters:**

- `p_346052_` (`ServerLevel`)
- `p_9206_` (`BlockPos`)

### doCheckFallDamage

```java
public void doCheckFallDamage(double p_289676_, double p_289671_, double p_289665_, boolean p_289696_)
```

**Parameters:**

- `p_289676_` (`double`)
- `p_289671_` (`double`)
- `p_289665_` (`double`)
- `p_289696_` (`boolean`)

**Returns:** `public void`

### onExplosionHit

```java
public void onExplosionHit(Entity p_326351_)
```

**Parameters:**

- `p_326351_` (`Entity`)

### pushEntities

```java
protected void pushEntities()
```

### openTextEdit

```java
public void openTextEdit(SignBlockEntity p_277909_, boolean p_277495_)
```

**Parameters:**

- `p_277909_` (`SignBlockEntity`)
- `p_277495_` (`boolean`)

### nextContainerCounter

```java
private void nextContainerCounter()
```

**Returns:** `private void`

### openMenu

```java
public OptionalInt openMenu(MenuProvider p_9033_)
```

**Parameters:**

- `p_9033_` (`MenuProvider`)

**Returns:** `OptionalInt`

### openMenu

```java
public OptionalInt openMenu(MenuProvider p_9033_, java.util.function.Consumer<net.minecraft.network.RegistryFriendlyByteBuf> extraDataWriter)
```

**Parameters:**

- `p_9033_` (`MenuProvider`)
- `extraDataWriter` (`java.util.function.Consumer<net.minecraft.network.RegistryFriendlyByteBuf>`)

**Returns:** `OptionalInt`

### sendMerchantOffers

```java
public void sendMerchantOffers(int p_8988_, MerchantOffers p_8989_, int p_8990_, int p_8991_, boolean p_8992_, boolean p_8993_)
```

**Parameters:**

- `p_8988_` (`int`)
- `p_8989_` (`MerchantOffers`)
- `p_8990_` (`int`)
- `p_8991_` (`int`)
- `p_8992_` (`boolean`)
- `p_8993_` (`boolean`)

### openHorseInventory

```java
public void openHorseInventory(AbstractHorse p_9059_, Container p_9060_)
```

**Parameters:**

- `p_9059_` (`AbstractHorse`)
- `p_9060_` (`Container`)

### openItemGui

```java
public void openItemGui(ItemStack p_9082_, InteractionHand p_9083_)
```

**Parameters:**

- `p_9082_` (`ItemStack`)
- `p_9083_` (`InteractionHand`)

### openCommandBlock

```java
public void openCommandBlock(CommandBlockEntity p_9099_)
```

**Parameters:**

- `p_9099_` (`CommandBlockEntity`)

### closeContainer

```java
public void closeContainer()
```

### doCloseContainer

```java
public void doCloseContainer()
```

### setPlayerInput

```java
public void setPlayerInput(float p_8981_, float p_8982_, boolean p_8983_, boolean p_8984_)
```

**Parameters:**

- `p_8981_` (`float`)
- `p_8982_` (`float`)
- `p_8983_` (`boolean`)
- `p_8984_` (`boolean`)

**Returns:** `public void`

### travel

```java
public void travel(Vec3 p_308985_)
```

**Parameters:**

- `p_308985_` (`Vec3`)

### rideTick

```java
public void rideTick()
```

### checkMovementStatistics

```java
public void checkMovementStatistics(double p_308996_, double p_309062_, double p_309170_)
```

**Parameters:**

- `p_308996_` (`double`)
- `p_309062_` (`double`)
- `p_309170_` (`double`)

**Returns:** `public void`

### checkRidingStatistics

```java
public void checkRidingStatistics(double p_308888_, double p_309131_, double p_308893_)
```

**Parameters:**

- `p_308888_` (`double`)
- `p_309131_` (`double`)
- `p_308893_` (`double`)

**Returns:** `public void`

### didNotMove

```java
private static boolean didNotMove(double p_309023_, double p_309067_, double p_309143_)
```

**Parameters:**

- `p_309023_` (`double`)
- `p_309067_` (`double`)
- `p_309143_` (`double`)

**Returns:** `private static boolean`

### awardStat

```java
public void awardStat(Stat<?> p_9026_, int p_9027_)
```

**Parameters:**

- `p_9026_` (`Stat<?>`)
- `p_9027_` (`int`)

### resetStat

```java
public void resetStat(Stat<?> p_9024_)
```

**Parameters:**

- `p_9024_` (`Stat<?>`)

### awardRecipes

```java
public int awardRecipes(Collection<RecipeHolder<?>> p_9129_)
```

**Parameters:**

- `p_9129_` (`Collection<RecipeHolder<?>>`)

**Returns:** `int`

### triggerRecipeCrafted

```java
public void triggerRecipeCrafted(RecipeHolder<?> p_301156_, List<ItemStack> p_282336_)
```

**Parameters:**

- `p_301156_` (`RecipeHolder<?>`)
- `p_282336_` (`List<ItemStack>`)

### awardRecipesByKey

```java
public void awardRecipesByKey(List<ResourceLocation> p_312811_)
```

**Parameters:**

- `p_312811_` (`List<ResourceLocation>`)

### resetRecipes

```java
public int resetRecipes(Collection<RecipeHolder<?>> p_9195_)
```

**Parameters:**

- `p_9195_` (`Collection<RecipeHolder<?>>`)

**Returns:** `int`

### giveExperiencePoints

```java
public void giveExperiencePoints(int p_9208_)
```

**Parameters:**

- `p_9208_` (`int`)

### disconnect

```java
public void disconnect()
```

**Returns:** `public void`

### hasDisconnected

```java
public boolean hasDisconnected()
```

**Returns:** `public boolean`

### resetSentInfo

```java
public void resetSentInfo()
```

**Returns:** `public void`

### displayClientMessage

```java
public void displayClientMessage(Component p_9154_, boolean p_9155_)
```

**Parameters:**

- `p_9154_` (`Component`)
- `p_9155_` (`boolean`)

### completeUsingItem

```java
protected void completeUsingItem()
```

### lookAt

```java
public void lookAt(EntityAnchorArgument.Anchor p_9112_, Vec3 p_9113_)
```

**Parameters:**

- `p_9112_` (`EntityAnchorArgument.Anchor`)
- `p_9113_` (`Vec3`)

### lookAt

```java
public void lookAt(EntityAnchorArgument.Anchor p_9108_, Entity p_9109_, EntityAnchorArgument.Anchor p_9110_)
```

**Parameters:**

- `p_9108_` (`EntityAnchorArgument.Anchor`)
- `p_9109_` (`Entity`)
- `p_9110_` (`EntityAnchorArgument.Anchor`)

**Returns:** `public void`

### restoreFrom

```java
public void restoreFrom(ServerPlayer p_9016_, boolean p_9017_)
```

**Parameters:**

- `p_9016_` (`ServerPlayer`)
- `p_9017_` (`boolean`)

**Returns:** `public void`

### onEffectAdded

```java
protected void onEffectAdded(MobEffectInstance p_143393_, Entity p_143394_)
```

**Parameters:**

- `p_143393_` (`MobEffectInstance`)
- `p_143394_` (`Entity`)

### onEffectUpdated

```java
protected void onEffectUpdated(MobEffectInstance p_143396_, boolean p_143397_, Entity p_143398_)
```

**Parameters:**

- `p_143396_` (`MobEffectInstance`)
- `p_143397_` (`boolean`)
- `p_143398_` (`Entity`)

### onEffectRemoved

```java
protected void onEffectRemoved(MobEffectInstance p_9184_)
```

**Parameters:**

- `p_9184_` (`MobEffectInstance`)

### teleportTo

```java
public void teleportTo(double p_8969_, double p_8970_, double p_8971_)
```

**Parameters:**

- `p_8969_` (`double`)
- `p_8970_` (`double`)
- `p_8971_` (`double`)

### teleportRelative

```java
public void teleportRelative(double p_251611_, double p_248861_, double p_252266_)
```

**Parameters:**

- `p_251611_` (`double`)
- `p_248861_` (`double`)
- `p_252266_` (`double`)

### teleportTo

```java
public boolean teleportTo(ServerLevel p_265564_, double p_265424_, double p_265680_, double p_265312_, Set<RelativeMovement> p_265192_, float p_265059_, float p_265266_)
```

**Parameters:**

- `p_265564_` (`ServerLevel`)
- `p_265424_` (`double`)
- `p_265680_` (`double`)
- `p_265312_` (`double`)
- `p_265192_` (`Set<RelativeMovement>`)
- `p_265059_` (`float`)
- `p_265266_` (`float`)

**Returns:** `boolean`

### moveTo

```java
public void moveTo(double p_9171_, double p_9172_, double p_9173_)
```

**Parameters:**

- `p_9171_` (`double`)
- `p_9172_` (`double`)
- `p_9173_` (`double`)

### crit

```java
public void crit(Entity p_9045_)
```

**Parameters:**

- `p_9045_` (`Entity`)

### magicCrit

```java
public void magicCrit(Entity p_9186_)
```

**Parameters:**

- `p_9186_` (`Entity`)

### onUpdateAbilities

```java
public void onUpdateAbilities()
```

### serverLevel

```java
public ServerLevel serverLevel()
```

**Returns:** `public ServerLevel`

### setGameMode

```java
public boolean setGameMode(GameType p_143404_)
```

**Parameters:**

- `p_143404_` (`GameType`)

**Returns:** `public boolean`

### isSpectator

```java
public boolean isSpectator()
```

**Returns:** `boolean`

### isCreative

```java
public boolean isCreative()
```

**Returns:** `boolean`

### sendSystemMessage

```java
public void sendSystemMessage(Component p_215097_)
```

**Parameters:**

- `p_215097_` (`Component`)

### sendSystemMessage

```java
public void sendSystemMessage(Component p_240560_, boolean p_240545_)
```

**Parameters:**

- `p_240560_` (`Component`)
- `p_240545_` (`boolean`)

**Returns:** `public void`

### sendChatMessage

```java
public void sendChatMessage(OutgoingChatMessage p_249852_, boolean p_250110_, ChatType.Bound p_252108_)
```

**Parameters:**

- `p_249852_` (`OutgoingChatMessage`)
- `p_250110_` (`boolean`)
- `p_252108_` (`ChatType.Bound`)

**Returns:** `public void`

### getIpAddress

```java
public String getIpAddress()
```

**Returns:** `public String`

### updateOptions

```java
public void updateOptions(ClientInformation p_301998_)
```

**Parameters:**

- `p_301998_` (`ClientInformation`)

**Returns:** `public void`

### clientInformation

```java
public ClientInformation clientInformation()
```

**Returns:** `public ClientInformation`

### ClientInformation

```java
return new ClientInformation()
```

**Returns:** `return new`

### canChatInColor

```java
public boolean canChatInColor()
```

**Returns:** `public boolean`

### getChatVisibility

```java
public ChatVisiblity getChatVisibility()
```

**Returns:** `public ChatVisiblity`

### acceptsSystemMessages

```java
private boolean acceptsSystemMessages(boolean p_240568_)
```

**Parameters:**

- `p_240568_` (`boolean`)

**Returns:** `private boolean`

### acceptsChatMessages

```java
private boolean acceptsChatMessages()
```

**Returns:** `private boolean`

### requestedViewDistance

```java
public int requestedViewDistance()
```

**Returns:** `public int`

### sendServerStatus

```java
public void sendServerStatus(ServerStatus p_215110_)
```

**Parameters:**

- `p_215110_` (`ServerStatus`)

**Returns:** `public void`

### getPermissionLevel

```java
protected int getPermissionLevel()
```

**Returns:** `int`

### resetLastActionTime

```java
public void resetLastActionTime()
```

**Returns:** `public void`

### getStats

```java
public ServerStatsCounter getStats()
```

**Returns:** `public ServerStatsCounter`

### getRecipeBook

```java
public ServerRecipeBook getRecipeBook()
```

**Returns:** `public ServerRecipeBook`

### updateInvisibilityStatus

```java
protected void updateInvisibilityStatus()
```

### getCamera

```java
public Entity getCamera()
```

**Returns:** `public Entity`

### setCamera

```java
public void setCamera(Entity p_9214_)
```

**Parameters:**

- `p_9214_` (`Entity`)

**Returns:** `public void`

### processPortalCooldown

```java
protected void processPortalCooldown()
```

### attack

```java
public void attack(Entity p_9220_)
```

**Parameters:**

- `p_9220_` (`Entity`)

### getLastActionTime

```java
public long getLastActionTime()
```

**Returns:** `public long`

### getTabListDisplayName

```java
public Component getTabListDisplayName()
```

**Returns:** `Component`

### swing

```java
public void swing(InteractionHand p_9031_)
```

**Parameters:**

- `p_9031_` (`InteractionHand`)

### isChangingDimension

```java
public boolean isChangingDimension()
```

**Returns:** `public boolean`

### hasChangedDimension

```java
public void hasChangedDimension()
```

**Returns:** `public void`

### getAdvancements

```java
public PlayerAdvancements getAdvancements()
```

**Returns:** `public PlayerAdvancements`

### teleportTo

```java
public void teleportTo(ServerLevel p_9000_, double p_9001_, double p_9002_, double p_9003_, float p_9004_, float p_9005_)
```

**Parameters:**

- `p_9000_` (`ServerLevel`)
- `p_9001_` (`double`)
- `p_9002_` (`double`)
- `p_9003_` (`double`)
- `p_9004_` (`float`)
- `p_9005_` (`float`)

**Returns:** `public void`

### getRespawnPosition

```java
public BlockPos getRespawnPosition()
```

**Returns:** `BlockPos`

### getRespawnAngle

```java
public float getRespawnAngle()
```

**Returns:** `public float`

### getRespawnDimension

```java
public ResourceKey<Level> getRespawnDimension()
```

**Returns:** `public ResourceKey<Level>`

### isRespawnForced

```java
public boolean isRespawnForced()
```

**Returns:** `public boolean`

### copyRespawnPosition

```java
public void copyRespawnPosition(ServerPlayer p_348642_)
```

**Parameters:**

- `p_348642_` (`ServerPlayer`)

**Returns:** `public void`

### setRespawnPosition

```java
public void setRespawnPosition(ResourceKey<Level> p_9159_, BlockPos p_9160_, float p_9161_, boolean p_9162_, boolean p_9163_)
```

**Parameters:**

- `p_9159_` (`ResourceKey<Level>`)
- `p_9160_` (`BlockPos`)
- `p_9161_` (`float`)
- `p_9162_` (`boolean`)
- `p_9163_` (`boolean`)

**Returns:** `public void`

### getLastSectionPos

```java
public SectionPos getLastSectionPos()
```

**Returns:** `public SectionPos`

### setLastSectionPos

```java
public void setLastSectionPos(SectionPos p_9120_)
```

**Parameters:**

- `p_9120_` (`SectionPos`)

**Returns:** `public void`

### getChunkTrackingView

```java
public ChunkTrackingView getChunkTrackingView()
```

**Returns:** `public ChunkTrackingView`

### setChunkTrackingView

```java
public void setChunkTrackingView(ChunkTrackingView p_296310_)
```

**Parameters:**

- `p_296310_` (`ChunkTrackingView`)

**Returns:** `public void`

### playNotifySound

```java
public void playNotifySound(SoundEvent p_9019_, SoundSource p_9020_, float p_9021_, float p_9022_)
```

**Parameters:**

- `p_9019_` (`SoundEvent`)
- `p_9020_` (`SoundSource`)
- `p_9021_` (`float`)
- `p_9022_` (`float`)

### drop

```java
public ItemEntity drop(ItemStack p_9085_, boolean p_9086_, boolean p_9087_)
```

**Parameters:**

- `p_9085_` (`ItemStack`)
- `p_9086_` (`boolean`)
- `p_9087_` (`boolean`)

**Returns:** `ItemEntity`

### getLanguage

```java
public String getLanguage()
```

**Returns:** `String`

### getTabListHeader

```java
public Component getTabListHeader()
```

**Returns:** `public Component`

### setTabListHeader

```java
public void setTabListHeader(Component header)
```

**Parameters:**

- `header` (`Component`)

### getTabListFooter

```java
public Component getTabListFooter()
```

**Returns:** `public Component`

### setTabListFooter

```java
public void setTabListFooter(Component footer)
```

**Parameters:**

- `footer` (`Component`)

### setTabListHeaderFooter

```java
public void setTabListHeaderFooter(Component header, Component footer)
```

**Parameters:**

- `header` (`Component`)
- `footer` (`Component`)

### refreshTabListName

```java
public void refreshTabListName()
```

### getTextFilter

```java
public TextFilter getTextFilter()
```

**Returns:** `public TextFilter`

### setServerLevel

```java
public void setServerLevel(ServerLevel p_284971_)
```

**Parameters:**

- `p_284971_` (`ServerLevel`)

**Returns:** `public void`

### calculateGameModeForNewPlayer

```java
private GameType calculateGameModeForNewPlayer(GameType p_143424_)
```

**Parameters:**

- `p_143424_` (`GameType`)

**Returns:** `private GameType`

### loadGameTypes

```java
public void loadGameTypes(CompoundTag p_143428_)
```

**Parameters:**

- `p_143428_` (`CompoundTag`)

**Returns:** `public void`

### storeGameTypes

```java
private void storeGameTypes(CompoundTag p_143431_)
```

**Parameters:**

- `p_143431_` (`CompoundTag`)

**Returns:** `private void`

### isTextFilteringEnabled

```java
public boolean isTextFilteringEnabled()
```

**Returns:** `boolean`

### shouldFilterMessageTo

```java
public boolean shouldFilterMessageTo(ServerPlayer p_143422_)
```

**Parameters:**

- `p_143422_` (`ServerPlayer`)

**Returns:** `public boolean`

### mayInteract

```java
public boolean mayInteract(Level p_143406_, BlockPos p_143407_)
```

**Parameters:**

- `p_143406_` (`Level`)
- `p_143407_` (`BlockPos`)

**Returns:** `boolean`

### updateUsingItem

```java
protected void updateUsingItem(ItemStack p_143402_)
```

**Parameters:**

- `p_143402_` (`ItemStack`)

### drop

```java
public boolean drop(boolean p_182295_)
```

**Parameters:**

- `p_182295_` (`boolean`)

**Returns:** `public boolean`

### allowsListing

```java
public boolean allowsListing()
```

**Returns:** `public boolean`

### getWardenSpawnTracker

```java
public Optional<WardenSpawnTracker> getWardenSpawnTracker()
```

**Returns:** `Optional<WardenSpawnTracker>`

### setSpawnExtraParticlesOnFall

```java
public void setSpawnExtraParticlesOnFall(boolean p_334029_)
```

**Parameters:**

- `p_334029_` (`boolean`)

**Returns:** `public void`

### onItemPickup

```java
public void onItemPickup(ItemEntity p_215095_)
```

**Parameters:**

- `p_215095_` (`ItemEntity`)

### setChatSession

```java
public void setChatSession(RemoteChatSession p_254468_)
```

**Parameters:**

- `p_254468_` (`RemoteChatSession`)

**Returns:** `public void`

### getChatSession

```java
public RemoteChatSession getChatSession()
```

**Returns:** `RemoteChatSession`

### indicateDamage

```java
public void indicateDamage(double p_270621_, double p_270478_)
```

**Parameters:**

- `p_270621_` (`double`)
- `p_270478_` (`double`)

### startRiding

```java
public boolean startRiding(Entity p_277395_, boolean p_278062_)
```

**Parameters:**

- `p_277395_` (`Entity`)
- `p_278062_` (`boolean`)

**Returns:** `boolean`

### stopRiding

```java
public void stopRiding()
```

### createCommonSpawnInfo

```java
public CommonPlayerSpawnInfo createCommonSpawnInfo(ServerLevel p_294169_)
```

**Parameters:**

- `p_294169_` (`ServerLevel`)

**Returns:** `public CommonPlayerSpawnInfo`

### setRaidOmenPosition

```java
public void setRaidOmenPosition(BlockPos p_338782_)
```

**Parameters:**

- `p_338782_` (`BlockPos`)

**Returns:** `public void`

### clearRaidOmenPosition

```java
public void clearRaidOmenPosition()
```

**Returns:** `public void`

### getRaidOmenPosition

```java
public BlockPos getRaidOmenPosition()
```

**Returns:** `BlockPos`

### getKnownMovement

```java
public Vec3 getKnownMovement()
```

**Returns:** `Vec3`

### setKnownMovement

```java
public void setKnownMovement(Vec3 p_348509_)
```

**Parameters:**

- `p_348509_` (`Vec3`)

**Returns:** `public void`

### getEnchantedDamage

```java
protected float getEnchantedDamage(Entity p_346252_, float p_346142_, DamageSource p_345841_)
```

**Parameters:**

- `p_346252_` (`Entity`)
- `p_346142_` (`float`)
- `p_345841_` (`DamageSource`)

**Returns:** `float`

### onEquippedItemBroken

```java
public void onEquippedItemBroken(Item p_348565_, EquipmentSlot p_348623_)
```

**Parameters:**

- `p_348565_` (`Item`)
- `p_348623_` (`EquipmentSlot`)

### RespawnPosAngle

```java
public static record RespawnPosAngle(Vec3 position, float yaw)
```

**Parameters:**

- `position` (`Vec3`)
- `yaw` (`float`)

**Returns:** `public static record`

### of

```java
public static ServerPlayer.RespawnPosAngle of(Vec3 p_348670_, BlockPos p_348504_)
```

**Parameters:**

- `p_348670_` (`Vec3`)
- `p_348504_` (`BlockPos`)

**Returns:** `public static ServerPlayer.RespawnPosAngle`

### calculateLookAtYaw

```java
private static float calculateLookAtYaw(Vec3 p_348686_, BlockPos p_348467_)
```

**Parameters:**

- `p_348686_` (`Vec3`)
- `p_348467_` (`BlockPos`)

**Returns:** `private static float`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RespawnPosAngle` | record |  |
