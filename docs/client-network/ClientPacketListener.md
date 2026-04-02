# ClientPacketListener

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Extends:** `ClientCommonPacketListenerImpl`
**Implements:** `ClientGamePacketListener`, `TickablePacketListener`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `commands` | `CommandDispatcher<SharedSuggestionProvider>` |  |

## Methods

### ClientPacketListener

```java
public ClientPacketListener(Minecraft p_253924_, Connection p_253614_, CommonListenerCookie p_295121_)
```

**Parameters:**

- `p_253924_` (`Minecraft`)
- `p_253614_` (`Connection`)
- `p_295121_` (`CommonListenerCookie`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSuggestionsProvider

```java
public ClientSuggestionProvider getSuggestionsProvider()
```

**Returns:** `public ClientSuggestionProvider`

### close

```java
public void close()
```

**Returns:** `public void`

### clearLevel

```java
public void clearLevel()
```

**Returns:** `public void`

### getRecipeManager

```java
public RecipeManager getRecipeManager()
```

**Returns:** `public RecipeManager`

### handleLogin

```java
public void handleLogin(ClientboundLoginPacket p_105030_)
```

**Parameters:**

- `p_105030_` (`ClientboundLoginPacket`)

### handleAddEntity

```java
public void handleAddEntity(ClientboundAddEntityPacket p_104958_)
```

**Parameters:**

- `p_104958_` (`ClientboundAddEntityPacket`)

### postAddEntitySoundInstance

```java
private void postAddEntitySoundInstance(Entity p_233664_)
```

**Parameters:**

- `p_233664_` (`Entity`)

**Returns:** `private void`

### handleAddExperienceOrb

```java
public void handleAddExperienceOrb(ClientboundAddExperienceOrbPacket p_104960_)
```

**Parameters:**

- `p_104960_` (`ClientboundAddExperienceOrbPacket`)

### handleSetEntityMotion

```java
public void handleSetEntityMotion(ClientboundSetEntityMotionPacket p_105092_)
```

**Parameters:**

- `p_105092_` (`ClientboundSetEntityMotionPacket`)

### handleSetEntityData

```java
public void handleSetEntityData(ClientboundSetEntityDataPacket p_105088_)
```

**Parameters:**

- `p_105088_` (`ClientboundSetEntityDataPacket`)

### handleTeleportEntity

```java
public void handleTeleportEntity(ClientboundTeleportEntityPacket p_105124_)
```

**Parameters:**

- `p_105124_` (`ClientboundTeleportEntityPacket`)

### handleTickingState

```java
public void handleTickingState(ClientboundTickingStatePacket p_309203_)
```

**Parameters:**

- `p_309203_` (`ClientboundTickingStatePacket`)

### handleTickingStep

```java
public void handleTickingStep(ClientboundTickingStepPacket p_308901_)
```

**Parameters:**

- `p_308901_` (`ClientboundTickingStepPacket`)

### handleSetCarriedItem

```java
public void handleSetCarriedItem(ClientboundSetCarriedItemPacket p_105078_)
```

**Parameters:**

- `p_105078_` (`ClientboundSetCarriedItemPacket`)

### handleMoveEntity

```java
public void handleMoveEntity(ClientboundMoveEntityPacket p_105036_)
```

**Parameters:**

- `p_105036_` (`ClientboundMoveEntityPacket`)

### handleRotateMob

```java
public void handleRotateMob(ClientboundRotateHeadPacket p_105068_)
```

**Parameters:**

- `p_105068_` (`ClientboundRotateHeadPacket`)

### handleRemoveEntities

```java
public void handleRemoveEntities(ClientboundRemoveEntitiesPacket p_182633_)
```

**Parameters:**

- `p_182633_` (`ClientboundRemoveEntitiesPacket`)

### handleMovePlayer

```java
public void handleMovePlayer(ClientboundPlayerPositionPacket p_105056_)
```

**Parameters:**

- `p_105056_` (`ClientboundPlayerPositionPacket`)

### handleChunkBlocksUpdate

```java
public void handleChunkBlocksUpdate(ClientboundSectionBlocksUpdatePacket p_105070_)
```

**Parameters:**

- `p_105070_` (`ClientboundSectionBlocksUpdatePacket`)

### handleLevelChunkWithLight

```java
public void handleLevelChunkWithLight(ClientboundLevelChunkWithLightPacket p_194241_)
```

**Parameters:**

- `p_194241_` (`ClientboundLevelChunkWithLightPacket`)

### handleChunksBiomes

```java
public void handleChunksBiomes(ClientboundChunksBiomesPacket p_275437_)
```

**Parameters:**

- `p_275437_` (`ClientboundChunksBiomesPacket`)

### updateLevelChunk

```java
private void updateLevelChunk(int p_194199_, int p_194200_, ClientboundLevelChunkPacketData p_194201_)
```

**Parameters:**

- `p_194199_` (`int`)
- `p_194200_` (`int`)
- `p_194201_` (`ClientboundLevelChunkPacketData`)

**Returns:** `private void`

### enableChunkLight

```java
private void enableChunkLight(LevelChunk p_194213_, int p_194214_, int p_194215_)
```

**Parameters:**

- `p_194213_` (`LevelChunk`)
- `p_194214_` (`int`)
- `p_194215_` (`int`)

**Returns:** `private void`

### handleForgetLevelChunk

```java
public void handleForgetLevelChunk(ClientboundForgetLevelChunkPacket p_105014_)
```

**Parameters:**

- `p_105014_` (`ClientboundForgetLevelChunkPacket`)

### queueLightRemoval

```java
private void queueLightRemoval(ClientboundForgetLevelChunkPacket p_194253_)
```

**Parameters:**

- `p_194253_` (`ClientboundForgetLevelChunkPacket`)

**Returns:** `private void`

### handleBlockUpdate

```java
public void handleBlockUpdate(ClientboundBlockUpdatePacket p_104980_)
```

**Parameters:**

- `p_104980_` (`ClientboundBlockUpdatePacket`)

### handleConfigurationStart

```java
public void handleConfigurationStart(ClientboundStartConfigurationPacket p_296485_)
```

**Parameters:**

- `p_296485_` (`ClientboundStartConfigurationPacket`)

### handleTakeItemEntity

```java
public void handleTakeItemEntity(ClientboundTakeItemEntityPacket p_105122_)
```

**Parameters:**

- `p_105122_` (`ClientboundTakeItemEntityPacket`)

### handleSystemChat

```java
public void handleSystemChat(ClientboundSystemChatPacket p_233708_)
```

**Parameters:**

- `p_233708_` (`ClientboundSystemChatPacket`)

### handlePlayerChat

```java
public void handlePlayerChat(ClientboundPlayerChatPacket p_233702_)
```

**Parameters:**

- `p_233702_` (`ClientboundPlayerChatPacket`)

### handleDisguisedChat

```java
public void handleDisguisedChat(ClientboundDisguisedChatPacket p_251920_)
```

**Parameters:**

- `p_251920_` (`ClientboundDisguisedChatPacket`)

### handleDeleteChat

```java
public void handleDeleteChat(ClientboundDeleteChatPacket p_241325_)
```

**Parameters:**

- `p_241325_` (`ClientboundDeleteChatPacket`)

### handleAnimate

```java
public void handleAnimate(ClientboundAnimatePacket p_104968_)
```

**Parameters:**

- `p_104968_` (`ClientboundAnimatePacket`)

### handleHurtAnimation

```java
public void handleHurtAnimation(ClientboundHurtAnimationPacket p_265581_)
```

**Parameters:**

- `p_265581_` (`ClientboundHurtAnimationPacket`)

### handleSetTime

```java
public void handleSetTime(ClientboundSetTimePacket p_105108_)
```

**Parameters:**

- `p_105108_` (`ClientboundSetTimePacket`)

### handleSetSpawn

```java
public void handleSetSpawn(ClientboundSetDefaultSpawnPositionPacket p_105084_)
```

**Parameters:**

- `p_105084_` (`ClientboundSetDefaultSpawnPositionPacket`)

### handleSetEntityPassengersPacket

```java
public void handleSetEntityPassengersPacket(ClientboundSetPassengersPacket p_105102_)
```

**Parameters:**

- `p_105102_` (`ClientboundSetPassengersPacket`)

### handleEntityLinkPacket

```java
public void handleEntityLinkPacket(ClientboundSetEntityLinkPacket p_105090_)
```

**Parameters:**

- `p_105090_` (`ClientboundSetEntityLinkPacket`)

### findTotem

```java
private static ItemStack findTotem(Player p_104928_)
```

**Parameters:**

- `p_104928_` (`Player`)

**Returns:** `private static ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### handleEntityEvent

```java
public void handleEntityEvent(ClientboundEntityEventPacket p_105010_)
```

**Parameters:**

- `p_105010_` (`ClientboundEntityEventPacket`)

### handleDamageEvent

```java
public void handleDamageEvent(ClientboundDamageEventPacket p_270800_)
```

**Parameters:**

- `p_270800_` (`ClientboundDamageEventPacket`)

### handleSetHealth

```java
public void handleSetHealth(ClientboundSetHealthPacket p_105098_)
```

**Parameters:**

- `p_105098_` (`ClientboundSetHealthPacket`)

### handleSetExperience

```java
public void handleSetExperience(ClientboundSetExperiencePacket p_105096_)
```

**Parameters:**

- `p_105096_` (`ClientboundSetExperiencePacket`)

### handleRespawn

```java
public void handleRespawn(ClientboundRespawnPacket p_105066_)
```

**Parameters:**

- `p_105066_` (`ClientboundRespawnPacket`)

### determineLevelLoadingReason

```java
private ReceivingLevelScreen.Reason determineLevelLoadingReason(boolean p_341642_, ResourceKey<Level> p_341617_, ResourceKey<Level> p_341637_)
```

**Parameters:**

- `p_341642_` (`boolean`)
- `p_341617_` (`ResourceKey<Level>`)
- `p_341637_` (`ResourceKey<Level>`)

**Returns:** `private ReceivingLevelScreen.Reason`

### handleExplosion

```java
public void handleExplosion(ClientboundExplodePacket p_105012_)
```

**Parameters:**

- `p_105012_` (`ClientboundExplodePacket`)

### handleHorseScreenOpen

```java
public void handleHorseScreenOpen(ClientboundHorseScreenOpenPacket p_105018_)
```

**Parameters:**

- `p_105018_` (`ClientboundHorseScreenOpenPacket`)

### handleOpenScreen

```java
public void handleOpenScreen(ClientboundOpenScreenPacket p_105042_)
```

**Parameters:**

- `p_105042_` (`ClientboundOpenScreenPacket`)

### handleContainerSetSlot

```java
public void handleContainerSetSlot(ClientboundContainerSetSlotPacket p_105000_)
```

**Parameters:**

- `p_105000_` (`ClientboundContainerSetSlotPacket`)

### handleContainerContent

```java
public void handleContainerContent(ClientboundContainerSetContentPacket p_104996_)
```

**Parameters:**

- `p_104996_` (`ClientboundContainerSetContentPacket`)

### handleOpenSignEditor

```java
public void handleOpenSignEditor(ClientboundOpenSignEditorPacket p_105044_)
```

**Parameters:**

- `p_105044_` (`ClientboundOpenSignEditorPacket`)

### handleBlockEntityData

```java
public void handleBlockEntityData(ClientboundBlockEntityDataPacket p_104976_)
```

**Parameters:**

- `p_104976_` (`ClientboundBlockEntityDataPacket`)

### handleContainerSetData

```java
public void handleContainerSetData(ClientboundContainerSetDataPacket p_104998_)
```

**Parameters:**

- `p_104998_` (`ClientboundContainerSetDataPacket`)

### handleSetEquipment

```java
public void handleSetEquipment(ClientboundSetEquipmentPacket p_105094_)
```

**Parameters:**

- `p_105094_` (`ClientboundSetEquipmentPacket`)

### handleContainerClose

```java
public void handleContainerClose(ClientboundContainerClosePacket p_104994_)
```

**Parameters:**

- `p_104994_` (`ClientboundContainerClosePacket`)

### handleBlockEvent

```java
public void handleBlockEvent(ClientboundBlockEventPacket p_104978_)
```

**Parameters:**

- `p_104978_` (`ClientboundBlockEventPacket`)

### handleBlockDestruction

```java
public void handleBlockDestruction(ClientboundBlockDestructionPacket p_104974_)
```

**Parameters:**

- `p_104974_` (`ClientboundBlockDestructionPacket`)

### handleGameEvent

```java
public void handleGameEvent(ClientboundGameEventPacket p_105016_)
```

**Parameters:**

- `p_105016_` (`ClientboundGameEventPacket`)

### startWaitingForNewLevel

```java
private void startWaitingForNewLevel(LocalPlayer p_304688_, ClientLevel p_304528_, ReceivingLevelScreen.Reason p_341690_, ResourceKey<Level> toDimension, ResourceKey<Level> fromDimension)
```

**Parameters:**

- `p_304688_` (`LocalPlayer`)
- `p_304528_` (`ClientLevel`)
- `p_341690_` (`ReceivingLevelScreen.Reason`)
- `toDimension` (`ResourceKey<Level>`)
- `fromDimension` (`ResourceKey<Level>`)

**Returns:** `private void`

### handleMapItemData

```java
public void handleMapItemData(ClientboundMapItemDataPacket p_105032_)
```

**Parameters:**

- `p_105032_` (`ClientboundMapItemDataPacket`)

### handleLevelEvent

```java
public void handleLevelEvent(ClientboundLevelEventPacket p_105024_)
```

**Parameters:**

- `p_105024_` (`ClientboundLevelEventPacket`)

### handleUpdateAdvancementsPacket

```java
public void handleUpdateAdvancementsPacket(ClientboundUpdateAdvancementsPacket p_105126_)
```

**Parameters:**

- `p_105126_` (`ClientboundUpdateAdvancementsPacket`)

### handleSelectAdvancementsTab

```java
public void handleSelectAdvancementsTab(ClientboundSelectAdvancementsTabPacket p_105072_)
```

**Parameters:**

- `p_105072_` (`ClientboundSelectAdvancementsTabPacket`)

### handleCommands

```java
public void handleCommands(ClientboundCommandsPacket p_104990_)
```

**Parameters:**

- `p_104990_` (`ClientboundCommandsPacket`)

### handleStopSoundEvent

```java
public void handleStopSoundEvent(ClientboundStopSoundPacket p_105116_)
```

**Parameters:**

- `p_105116_` (`ClientboundStopSoundPacket`)

### handleCommandSuggestions

```java
public void handleCommandSuggestions(ClientboundCommandSuggestionsPacket p_104988_)
```

**Parameters:**

- `p_104988_` (`ClientboundCommandSuggestionsPacket`)

### handleUpdateRecipes

```java
public void handleUpdateRecipes(ClientboundUpdateRecipesPacket p_105132_)
```

**Parameters:**

- `p_105132_` (`ClientboundUpdateRecipesPacket`)

### handleLookAt

```java
public void handleLookAt(ClientboundPlayerLookAtPacket p_105054_)
```

**Parameters:**

- `p_105054_` (`ClientboundPlayerLookAtPacket`)

### handleTagQueryPacket

```java
public void handleTagQueryPacket(ClientboundTagQueryPacket p_105120_)
```

**Parameters:**

- `p_105120_` (`ClientboundTagQueryPacket`)

### handleAwardStats

```java
public void handleAwardStats(ClientboundAwardStatsPacket p_104970_)
```

**Parameters:**

- `p_104970_` (`ClientboundAwardStatsPacket`)

### handleAddOrRemoveRecipes

```java
public void handleAddOrRemoveRecipes(ClientboundRecipePacket p_105058_)
```

**Parameters:**

- `p_105058_` (`ClientboundRecipePacket`)

### handleUpdateMobEffect

```java
public void handleUpdateMobEffect(ClientboundUpdateMobEffectPacket p_105130_)
```

**Parameters:**

- `p_105130_` (`ClientboundUpdateMobEffectPacket`)

### handleUpdateTags

```java
public void handleUpdateTags(ClientboundUpdateTagsPacket p_294888_)
```

**Parameters:**

- `p_294888_` (`ClientboundUpdateTagsPacket`)

### handlePlayerCombatEnd

```java
public void handlePlayerCombatEnd(ClientboundPlayerCombatEndPacket p_171771_)
```

**Parameters:**

- `p_171771_` (`ClientboundPlayerCombatEndPacket`)

### handlePlayerCombatEnter

```java
public void handlePlayerCombatEnter(ClientboundPlayerCombatEnterPacket p_171773_)
```

**Parameters:**

- `p_171773_` (`ClientboundPlayerCombatEnterPacket`)

### handlePlayerCombatKill

```java
public void handlePlayerCombatKill(ClientboundPlayerCombatKillPacket p_171775_)
```

**Parameters:**

- `p_171775_` (`ClientboundPlayerCombatKillPacket`)

### handleChangeDifficulty

```java
public void handleChangeDifficulty(ClientboundChangeDifficultyPacket p_104984_)
```

**Parameters:**

- `p_104984_` (`ClientboundChangeDifficultyPacket`)

### handleSetCamera

```java
public void handleSetCamera(ClientboundSetCameraPacket p_105076_)
```

**Parameters:**

- `p_105076_` (`ClientboundSetCameraPacket`)

### handleInitializeBorder

```java
public void handleInitializeBorder(ClientboundInitializeBorderPacket p_171767_)
```

**Parameters:**

- `p_171767_` (`ClientboundInitializeBorderPacket`)

### handleSetBorderCenter

```java
public void handleSetBorderCenter(ClientboundSetBorderCenterPacket p_171781_)
```

**Parameters:**

- `p_171781_` (`ClientboundSetBorderCenterPacket`)

### handleSetBorderLerpSize

```java
public void handleSetBorderLerpSize(ClientboundSetBorderLerpSizePacket p_171783_)
```

**Parameters:**

- `p_171783_` (`ClientboundSetBorderLerpSizePacket`)

### handleSetBorderSize

```java
public void handleSetBorderSize(ClientboundSetBorderSizePacket p_171785_)
```

**Parameters:**

- `p_171785_` (`ClientboundSetBorderSizePacket`)

### handleSetBorderWarningDistance

```java
public void handleSetBorderWarningDistance(ClientboundSetBorderWarningDistancePacket p_171789_)
```

**Parameters:**

- `p_171789_` (`ClientboundSetBorderWarningDistancePacket`)

### handleSetBorderWarningDelay

```java
public void handleSetBorderWarningDelay(ClientboundSetBorderWarningDelayPacket p_171787_)
```

**Parameters:**

- `p_171787_` (`ClientboundSetBorderWarningDelayPacket`)

### handleTitlesClear

```java
public void handleTitlesClear(ClientboundClearTitlesPacket p_171765_)
```

**Parameters:**

- `p_171765_` (`ClientboundClearTitlesPacket`)

### handleServerData

```java
public void handleServerData(ClientboundServerDataPacket p_233704_)
```

**Parameters:**

- `p_233704_` (`ClientboundServerDataPacket`)

### handleCustomChatCompletions

```java
public void handleCustomChatCompletions(ClientboundCustomChatCompletionsPacket p_240832_)
```

**Parameters:**

- `p_240832_` (`ClientboundCustomChatCompletionsPacket`)

### setActionBarText

```java
public void setActionBarText(ClientboundSetActionBarTextPacket p_171779_)
```

**Parameters:**

- `p_171779_` (`ClientboundSetActionBarTextPacket`)

### setTitleText

```java
public void setTitleText(ClientboundSetTitleTextPacket p_171793_)
```

**Parameters:**

- `p_171793_` (`ClientboundSetTitleTextPacket`)

### setSubtitleText

```java
public void setSubtitleText(ClientboundSetSubtitleTextPacket p_171791_)
```

**Parameters:**

- `p_171791_` (`ClientboundSetSubtitleTextPacket`)

### setTitlesAnimation

```java
public void setTitlesAnimation(ClientboundSetTitlesAnimationPacket p_171795_)
```

**Parameters:**

- `p_171795_` (`ClientboundSetTitlesAnimationPacket`)

### handleTabListCustomisation

```java
public void handleTabListCustomisation(ClientboundTabListPacket p_105118_)
```

**Parameters:**

- `p_105118_` (`ClientboundTabListPacket`)

### handleRemoveMobEffect

```java
public void handleRemoveMobEffect(ClientboundRemoveMobEffectPacket p_105062_)
```

**Parameters:**

- `p_105062_` (`ClientboundRemoveMobEffectPacket`)

### handlePlayerInfoRemove

```java
public void handlePlayerInfoRemove(ClientboundPlayerInfoRemovePacket p_248731_)
```

**Parameters:**

- `p_248731_` (`ClientboundPlayerInfoRemovePacket`)

### handlePlayerInfoUpdate

```java
public void handlePlayerInfoUpdate(ClientboundPlayerInfoUpdatePacket p_250115_)
```

**Parameters:**

- `p_250115_` (`ClientboundPlayerInfoUpdatePacket`)

### applyPlayerInfoUpdate

```java
private void applyPlayerInfoUpdate(ClientboundPlayerInfoUpdatePacket.Action p_248954_, ClientboundPlayerInfoUpdatePacket.Entry p_251310_, PlayerInfo p_251146_)
```

**Parameters:**

- `p_248954_` (`ClientboundPlayerInfoUpdatePacket.Action`)
- `p_251310_` (`ClientboundPlayerInfoUpdatePacket.Entry`)
- `p_251146_` (`PlayerInfo`)

**Returns:** `private void`

### initializeChatSession

```java
private void initializeChatSession(ClientboundPlayerInfoUpdatePacket.Entry p_248806_, PlayerInfo p_251136_)
```

**Parameters:**

- `p_248806_` (`ClientboundPlayerInfoUpdatePacket.Entry`)
- `p_251136_` (`PlayerInfo`)

**Returns:** `private void`

### enforcesSecureChat

```java
private boolean enforcesSecureChat()
```

**Returns:** `private boolean`

### handlePlayerAbilities

```java
public void handlePlayerAbilities(ClientboundPlayerAbilitiesPacket p_105048_)
```

**Parameters:**

- `p_105048_` (`ClientboundPlayerAbilitiesPacket`)

### handleSoundEvent

```java
public void handleSoundEvent(ClientboundSoundPacket p_105114_)
```

**Parameters:**

- `p_105114_` (`ClientboundSoundPacket`)

### handleSoundEntityEvent

```java
public void handleSoundEntityEvent(ClientboundSoundEntityPacket p_105112_)
```

**Parameters:**

- `p_105112_` (`ClientboundSoundEntityPacket`)

### handleBossUpdate

```java
public void handleBossUpdate(ClientboundBossEventPacket p_104982_)
```

**Parameters:**

- `p_104982_` (`ClientboundBossEventPacket`)

### handleItemCooldown

```java
public void handleItemCooldown(ClientboundCooldownPacket p_105002_)
```

**Parameters:**

- `p_105002_` (`ClientboundCooldownPacket`)

### handleMoveVehicle

```java
public void handleMoveVehicle(ClientboundMoveVehiclePacket p_105038_)
```

**Parameters:**

- `p_105038_` (`ClientboundMoveVehiclePacket`)

### handleOpenBook

```java
public void handleOpenBook(ClientboundOpenBookPacket p_105040_)
```

**Parameters:**

- `p_105040_` (`ClientboundOpenBookPacket`)

### handleCustomPayload

```java
public void handleCustomPayload(CustomPacketPayload p_295851_)
```

**Parameters:**

- `p_295851_` (`CustomPacketPayload`)

### handleUnknownCustomPayload

```java
private void handleUnknownCustomPayload(CustomPacketPayload p_294389_)
```

**Parameters:**

- `p_294389_` (`CustomPacketPayload`)

**Returns:** `private void`

### handleAddObjective

```java
public void handleAddObjective(ClientboundSetObjectivePacket p_105100_)
```

**Parameters:**

- `p_105100_` (`ClientboundSetObjectivePacket`)

### handleSetScore

```java
public void handleSetScore(ClientboundSetScorePacket p_105106_)
```

**Parameters:**

- `p_105106_` (`ClientboundSetScorePacket`)

### handleResetScore

```java
public void handleResetScore(ClientboundResetScorePacket p_313768_)
```

**Parameters:**

- `p_313768_` (`ClientboundResetScorePacket`)

### handleSetDisplayObjective

```java
public void handleSetDisplayObjective(ClientboundSetDisplayObjectivePacket p_105086_)
```

**Parameters:**

- `p_105086_` (`ClientboundSetDisplayObjectivePacket`)

### handleSetPlayerTeamPacket

```java
public void handleSetPlayerTeamPacket(ClientboundSetPlayerTeamPacket p_105104_)
```

**Parameters:**

- `p_105104_` (`ClientboundSetPlayerTeamPacket`)

### handleParticleEvent

```java
public void handleParticleEvent(ClientboundLevelParticlesPacket p_105026_)
```

**Parameters:**

- `p_105026_` (`ClientboundLevelParticlesPacket`)

### handleUpdateAttributes

```java
public void handleUpdateAttributes(ClientboundUpdateAttributesPacket p_105128_)
```

**Parameters:**

- `p_105128_` (`ClientboundUpdateAttributesPacket`)

### handlePlaceRecipe

```java
public void handlePlaceRecipe(ClientboundPlaceGhostRecipePacket p_105046_)
```

**Parameters:**

- `p_105046_` (`ClientboundPlaceGhostRecipePacket`)

### handleLightUpdatePacket

```java
public void handleLightUpdatePacket(ClientboundLightUpdatePacket p_194243_)
```

**Parameters:**

- `p_194243_` (`ClientboundLightUpdatePacket`)

### applyLightData

```java
private void applyLightData(int p_194249_, int p_194250_, ClientboundLightUpdatePacketData p_194251_)
```

**Parameters:**

- `p_194249_` (`int`)
- `p_194250_` (`int`)
- `p_194251_` (`ClientboundLightUpdatePacketData`)

**Returns:** `private void`

### handleMerchantOffers

```java
public void handleMerchantOffers(ClientboundMerchantOffersPacket p_105034_)
```

**Parameters:**

- `p_105034_` (`ClientboundMerchantOffersPacket`)

### handleSetChunkCacheRadius

```java
public void handleSetChunkCacheRadius(ClientboundSetChunkCacheRadiusPacket p_105082_)
```

**Parameters:**

- `p_105082_` (`ClientboundSetChunkCacheRadiusPacket`)

### handleSetSimulationDistance

```java
public void handleSetSimulationDistance(ClientboundSetSimulationDistancePacket p_194245_)
```

**Parameters:**

- `p_194245_` (`ClientboundSetSimulationDistancePacket`)

### handleSetChunkCacheCenter

```java
public void handleSetChunkCacheCenter(ClientboundSetChunkCacheCenterPacket p_105080_)
```

**Parameters:**

- `p_105080_` (`ClientboundSetChunkCacheCenterPacket`)

### handleBlockChangedAck

```java
public void handleBlockChangedAck(ClientboundBlockChangedAckPacket p_233698_)
```

**Parameters:**

- `p_233698_` (`ClientboundBlockChangedAckPacket`)

### handleBundlePacket

```java
public void handleBundlePacket(ClientboundBundlePacket p_265195_)
```

**Parameters:**

- `p_265195_` (`ClientboundBundlePacket`)

### handleProjectilePowerPacket

```java
public void handleProjectilePowerPacket(ClientboundProjectilePowerPacket p_339600_)
```

**Parameters:**

- `p_339600_` (`ClientboundProjectilePowerPacket`)

### handleChunkBatchStart

```java
public void handleChunkBatchStart(ClientboundChunkBatchStartPacket p_295704_)
```

**Parameters:**

- `p_295704_` (`ClientboundChunkBatchStartPacket`)

### handleChunkBatchFinished

```java
public void handleChunkBatchFinished(ClientboundChunkBatchFinishedPacket p_295731_)
```

**Parameters:**

- `p_295731_` (`ClientboundChunkBatchFinishedPacket`)

### handleDebugSample

```java
public void handleDebugSample(ClientboundDebugSamplePacket p_324125_)
```

**Parameters:**

- `p_324125_` (`ClientboundDebugSamplePacket`)

### handlePongResponse

```java
public void handlePongResponse(ClientboundPongResponsePacket p_320651_)
```

**Parameters:**

- `p_320651_` (`ClientboundPongResponsePacket`)

### readSectionList

```java
private void readSectionList(int p_171735_, int p_171736_, LevelLightEngine p_171737_, LightLayer p_171738_, BitSet p_171739_, BitSet p_171740_, Iterator<byte[]> p_171741_)
```

**Parameters:**

- `p_171735_` (`int`)
- `p_171736_` (`int`)
- `p_171737_` (`LevelLightEngine`)
- `p_171738_` (`LightLayer`)
- `p_171739_` (`BitSet`)
- `p_171740_` (`BitSet`)
- `p_171741_` (`Iterator<byte[]>`)

**Returns:** `private void`

### getConnection

```java
public Connection getConnection()
```

**Returns:** `public Connection`

### isAcceptingMessages

```java
public boolean isAcceptingMessages()
```

**Returns:** `boolean`

### getListedOnlinePlayers

```java
public Collection<PlayerInfo> getListedOnlinePlayers()
```

**Returns:** `public Collection<PlayerInfo>`

### getOnlinePlayers

```java
public Collection<PlayerInfo> getOnlinePlayers()
```

**Returns:** `public Collection<PlayerInfo>`

### getOnlinePlayerIds

```java
public Collection<UUID> getOnlinePlayerIds()
```

**Returns:** `public Collection<UUID>`

### getPlayerInfo

```java
public PlayerInfo getPlayerInfo(UUID p_104950_)
```

**Parameters:**

- `p_104950_` (`UUID`)

**Returns:** `PlayerInfo`

### getPlayerInfo

```java
public PlayerInfo getPlayerInfo(String p_104939_)
```

**Parameters:**

- `p_104939_` (`String`)

**Returns:** `PlayerInfo`

### getLocalGameProfile

```java
public GameProfile getLocalGameProfile()
```

**Returns:** `public GameProfile`

### getAdvancements

```java
public ClientAdvancements getAdvancements()
```

**Returns:** `public ClientAdvancements`

### getCommands

```java
public CommandDispatcher<SharedSuggestionProvider> getCommands()
```

**Returns:** `public CommandDispatcher<SharedSuggestionProvider>`

### getLevel

```java
public ClientLevel getLevel()
```

**Returns:** `public ClientLevel`

### getDebugQueryHandler

```java
public DebugQueryHandler getDebugQueryHandler()
```

**Returns:** `public DebugQueryHandler`

### getId

```java
public UUID getId()
```

**Returns:** `public UUID`

### levels

```java
public Set<ResourceKey<Level>> levels()
```

**Returns:** `public Set<ResourceKey<Level>>`

### registryAccess

```java
public RegistryAccess.Frozen registryAccess()
```

**Returns:** `public RegistryAccess.Frozen`

### markMessageAsProcessed

```java
public void markMessageAsProcessed(PlayerChatMessage p_242356_, boolean p_242455_)
```

**Parameters:**

- `p_242356_` (`PlayerChatMessage`)
- `p_242455_` (`boolean`)

**Returns:** `public void`

### sendChatAcknowledgement

```java
private void sendChatAcknowledgement()
```

**Returns:** `private void`

### sendChat

```java
public void sendChat(String p_249888_)
```

**Parameters:**

- `p_249888_` (`String`)

**Returns:** `public void`

### sendCommand

```java
public void sendCommand(String p_250092_)
```

**Parameters:**

- `p_250092_` (`String`)

**Returns:** `public void`

### sendUnsignedCommand

```java
public boolean sendUnsignedCommand(String p_251509_)
```

**Parameters:**

- `p_251509_` (`String`)

**Returns:** `public boolean`

### parseCommand

```java
private ParseResults<SharedSuggestionProvider> parseCommand(String p_249982_)
```

**Parameters:**

- `p_249982_` (`String`)

**Returns:** `private ParseResults<SharedSuggestionProvider>`

### tick

```java
public void tick()
```

### setKeyPair

```java
public void setKeyPair(ProfileKeyPair p_261475_)
```

**Parameters:**

- `p_261475_` (`ProfileKeyPair`)

**Returns:** `public void`

### getServerData

```java
public ServerData getServerData()
```

**Returns:** `ServerData`

### enabledFeatures

```java
public FeatureFlagSet enabledFeatures()
```

**Returns:** `public FeatureFlagSet`

### isFeatureEnabled

```java
public boolean isFeatureEnabled(FeatureFlagSet p_250605_)
```

**Parameters:**

- `p_250605_` (`FeatureFlagSet`)

**Returns:** `public boolean`

### scoreboard

```java
public Scoreboard scoreboard()
```

**Returns:** `public Scoreboard`

### getConnectionType

```java
public net.neoforged.neoforge.network.connection.ConnectionType getConnectionType()
```

**Returns:** `public net.neoforged.neoforge.network.connection.ConnectionType`

### potionBrewing

```java
public PotionBrewing potionBrewing()
```

**Returns:** `public PotionBrewing`

### updateSearchTrees

```java
public void updateSearchTrees()
```

**Returns:** `public void`

### searchTrees

```java
public SessionSearchTrees searchTrees()
```

**Returns:** `public SessionSearchTrees`

### serverLinks

```java
public ServerLinks serverLinks()
```

**Returns:** `public ServerLinks`
