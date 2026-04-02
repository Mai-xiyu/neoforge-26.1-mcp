# ClientGamePacketListener

**Package:** `net.minecraft.network.protocol.game`
**Type:** interface
**Extends:** `ClientPongPacketListener, ClientCommonPacketListener`

## Methods

### protocol

```java
default ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### handleAddEntity

```java
void handleAddEntity(ClientboundAddEntityPacket p_131367_)
```

**Parameters:**

- `p_131367_` (`ClientboundAddEntityPacket`)

### handleAddExperienceOrb

```java
void handleAddExperienceOrb(ClientboundAddExperienceOrbPacket p_131368_)
```

**Parameters:**

- `p_131368_` (`ClientboundAddExperienceOrbPacket`)

### handleAddObjective

```java
void handleAddObjective(ClientboundSetObjectivePacket p_131438_)
```

**Parameters:**

- `p_131438_` (`ClientboundSetObjectivePacket`)

### handleAnimate

```java
void handleAnimate(ClientboundAnimatePacket p_131372_)
```

**Parameters:**

- `p_131372_` (`ClientboundAnimatePacket`)

### handleHurtAnimation

```java
void handleHurtAnimation(ClientboundHurtAnimationPacket p_265165_)
```

**Parameters:**

- `p_265165_` (`ClientboundHurtAnimationPacket`)

### handleAwardStats

```java
void handleAwardStats(ClientboundAwardStatsPacket p_131373_)
```

**Parameters:**

- `p_131373_` (`ClientboundAwardStatsPacket`)

### handleAddOrRemoveRecipes

```java
void handleAddOrRemoveRecipes(ClientboundRecipePacket p_131417_)
```

**Parameters:**

- `p_131417_` (`ClientboundRecipePacket`)

### handleBlockDestruction

```java
void handleBlockDestruction(ClientboundBlockDestructionPacket p_131375_)
```

**Parameters:**

- `p_131375_` (`ClientboundBlockDestructionPacket`)

### handleOpenSignEditor

```java
void handleOpenSignEditor(ClientboundOpenSignEditorPacket p_131410_)
```

**Parameters:**

- `p_131410_` (`ClientboundOpenSignEditorPacket`)

### handleBlockEntityData

```java
void handleBlockEntityData(ClientboundBlockEntityDataPacket p_131376_)
```

**Parameters:**

- `p_131376_` (`ClientboundBlockEntityDataPacket`)

### handleBlockEvent

```java
void handleBlockEvent(ClientboundBlockEventPacket p_131377_)
```

**Parameters:**

- `p_131377_` (`ClientboundBlockEventPacket`)

### handleBlockUpdate

```java
void handleBlockUpdate(ClientboundBlockUpdatePacket p_131378_)
```

**Parameters:**

- `p_131378_` (`ClientboundBlockUpdatePacket`)

### handleSystemChat

```java
void handleSystemChat(ClientboundSystemChatPacket p_237543_)
```

**Parameters:**

- `p_237543_` (`ClientboundSystemChatPacket`)

### handlePlayerChat

```java
void handlePlayerChat(ClientboundPlayerChatPacket p_237540_)
```

**Parameters:**

- `p_237540_` (`ClientboundPlayerChatPacket`)

### handleDisguisedChat

```java
void handleDisguisedChat(ClientboundDisguisedChatPacket p_251057_)
```

**Parameters:**

- `p_251057_` (`ClientboundDisguisedChatPacket`)

### handleDeleteChat

```java
void handleDeleteChat(ClientboundDeleteChatPacket p_241462_)
```

**Parameters:**

- `p_241462_` (`ClientboundDeleteChatPacket`)

### handleChunkBlocksUpdate

```java
void handleChunkBlocksUpdate(ClientboundSectionBlocksUpdatePacket p_131423_)
```

**Parameters:**

- `p_131423_` (`ClientboundSectionBlocksUpdatePacket`)

### handleMapItemData

```java
void handleMapItemData(ClientboundMapItemDataPacket p_131404_)
```

**Parameters:**

- `p_131404_` (`ClientboundMapItemDataPacket`)

### handleContainerClose

```java
void handleContainerClose(ClientboundContainerClosePacket p_131385_)
```

**Parameters:**

- `p_131385_` (`ClientboundContainerClosePacket`)

### handleContainerContent

```java
void handleContainerContent(ClientboundContainerSetContentPacket p_131386_)
```

**Parameters:**

- `p_131386_` (`ClientboundContainerSetContentPacket`)

### handleHorseScreenOpen

```java
void handleHorseScreenOpen(ClientboundHorseScreenOpenPacket p_131397_)
```

**Parameters:**

- `p_131397_` (`ClientboundHorseScreenOpenPacket`)

### handleContainerSetData

```java
void handleContainerSetData(ClientboundContainerSetDataPacket p_131387_)
```

**Parameters:**

- `p_131387_` (`ClientboundContainerSetDataPacket`)

### handleContainerSetSlot

```java
void handleContainerSetSlot(ClientboundContainerSetSlotPacket p_131388_)
```

**Parameters:**

- `p_131388_` (`ClientboundContainerSetSlotPacket`)

### handleEntityEvent

```java
void handleEntityEvent(ClientboundEntityEventPacket p_131393_)
```

**Parameters:**

- `p_131393_` (`ClientboundEntityEventPacket`)

### handleEntityLinkPacket

```java
void handleEntityLinkPacket(ClientboundSetEntityLinkPacket p_131433_)
```

**Parameters:**

- `p_131433_` (`ClientboundSetEntityLinkPacket`)

### handleSetEntityPassengersPacket

```java
void handleSetEntityPassengersPacket(ClientboundSetPassengersPacket p_131439_)
```

**Parameters:**

- `p_131439_` (`ClientboundSetPassengersPacket`)

### handleExplosion

```java
void handleExplosion(ClientboundExplodePacket p_131394_)
```

**Parameters:**

- `p_131394_` (`ClientboundExplodePacket`)

### handleGameEvent

```java
void handleGameEvent(ClientboundGameEventPacket p_131396_)
```

**Parameters:**

- `p_131396_` (`ClientboundGameEventPacket`)

### handleLevelChunkWithLight

```java
void handleLevelChunkWithLight(ClientboundLevelChunkWithLightPacket p_195622_)
```

**Parameters:**

- `p_195622_` (`ClientboundLevelChunkWithLightPacket`)

### handleChunksBiomes

```java
void handleChunksBiomes(ClientboundChunksBiomesPacket p_275451_)
```

**Parameters:**

- `p_275451_` (`ClientboundChunksBiomesPacket`)

### handleForgetLevelChunk

```java
void handleForgetLevelChunk(ClientboundForgetLevelChunkPacket p_131395_)
```

**Parameters:**

- `p_131395_` (`ClientboundForgetLevelChunkPacket`)

### handleLevelEvent

```java
void handleLevelEvent(ClientboundLevelEventPacket p_131400_)
```

**Parameters:**

- `p_131400_` (`ClientboundLevelEventPacket`)

### handleLogin

```java
void handleLogin(ClientboundLoginPacket p_131403_)
```

**Parameters:**

- `p_131403_` (`ClientboundLoginPacket`)

### handleMoveEntity

```java
void handleMoveEntity(ClientboundMoveEntityPacket p_131406_)
```

**Parameters:**

- `p_131406_` (`ClientboundMoveEntityPacket`)

### handleMovePlayer

```java
void handleMovePlayer(ClientboundPlayerPositionPacket p_131416_)
```

**Parameters:**

- `p_131416_` (`ClientboundPlayerPositionPacket`)

### handleParticleEvent

```java
void handleParticleEvent(ClientboundLevelParticlesPacket p_131401_)
```

**Parameters:**

- `p_131401_` (`ClientboundLevelParticlesPacket`)

### handlePlayerAbilities

```java
void handlePlayerAbilities(ClientboundPlayerAbilitiesPacket p_131412_)
```

**Parameters:**

- `p_131412_` (`ClientboundPlayerAbilitiesPacket`)

### handlePlayerInfoRemove

```java
void handlePlayerInfoRemove(ClientboundPlayerInfoRemovePacket p_252308_)
```

**Parameters:**

- `p_252308_` (`ClientboundPlayerInfoRemovePacket`)

### handlePlayerInfoUpdate

```java
void handlePlayerInfoUpdate(ClientboundPlayerInfoUpdatePacket p_248573_)
```

**Parameters:**

- `p_248573_` (`ClientboundPlayerInfoUpdatePacket`)

### handleRemoveEntities

```java
void handleRemoveEntities(ClientboundRemoveEntitiesPacket p_182700_)
```

**Parameters:**

- `p_182700_` (`ClientboundRemoveEntitiesPacket`)

### handleRemoveMobEffect

```java
void handleRemoveMobEffect(ClientboundRemoveMobEffectPacket p_131419_)
```

**Parameters:**

- `p_131419_` (`ClientboundRemoveMobEffectPacket`)

### handleRespawn

```java
void handleRespawn(ClientboundRespawnPacket p_131421_)
```

**Parameters:**

- `p_131421_` (`ClientboundRespawnPacket`)

### handleRotateMob

```java
void handleRotateMob(ClientboundRotateHeadPacket p_131422_)
```

**Parameters:**

- `p_131422_` (`ClientboundRotateHeadPacket`)

### handleSetCarriedItem

```java
void handleSetCarriedItem(ClientboundSetCarriedItemPacket p_131427_)
```

**Parameters:**

- `p_131427_` (`ClientboundSetCarriedItemPacket`)

### handleSetDisplayObjective

```java
void handleSetDisplayObjective(ClientboundSetDisplayObjectivePacket p_131431_)
```

**Parameters:**

- `p_131431_` (`ClientboundSetDisplayObjectivePacket`)

### handleSetEntityData

```java
void handleSetEntityData(ClientboundSetEntityDataPacket p_131432_)
```

**Parameters:**

- `p_131432_` (`ClientboundSetEntityDataPacket`)

### handleSetEntityMotion

```java
void handleSetEntityMotion(ClientboundSetEntityMotionPacket p_131434_)
```

**Parameters:**

- `p_131434_` (`ClientboundSetEntityMotionPacket`)

### handleSetEquipment

```java
void handleSetEquipment(ClientboundSetEquipmentPacket p_131435_)
```

**Parameters:**

- `p_131435_` (`ClientboundSetEquipmentPacket`)

### handleSetExperience

```java
void handleSetExperience(ClientboundSetExperiencePacket p_131436_)
```

**Parameters:**

- `p_131436_` (`ClientboundSetExperiencePacket`)

### handleSetHealth

```java
void handleSetHealth(ClientboundSetHealthPacket p_131437_)
```

**Parameters:**

- `p_131437_` (`ClientboundSetHealthPacket`)

### handleSetPlayerTeamPacket

```java
void handleSetPlayerTeamPacket(ClientboundSetPlayerTeamPacket p_131440_)
```

**Parameters:**

- `p_131440_` (`ClientboundSetPlayerTeamPacket`)

### handleSetScore

```java
void handleSetScore(ClientboundSetScorePacket p_131441_)
```

**Parameters:**

- `p_131441_` (`ClientboundSetScorePacket`)

### handleResetScore

```java
void handleResetScore(ClientboundResetScorePacket p_313913_)
```

**Parameters:**

- `p_313913_` (`ClientboundResetScorePacket`)

### handleSetSpawn

```java
void handleSetSpawn(ClientboundSetDefaultSpawnPositionPacket p_131430_)
```

**Parameters:**

- `p_131430_` (`ClientboundSetDefaultSpawnPositionPacket`)

### handleSetTime

```java
void handleSetTime(ClientboundSetTimePacket p_131442_)
```

**Parameters:**

- `p_131442_` (`ClientboundSetTimePacket`)

### handleSoundEvent

```java
void handleSoundEvent(ClientboundSoundPacket p_131445_)
```

**Parameters:**

- `p_131445_` (`ClientboundSoundPacket`)

### handleSoundEntityEvent

```java
void handleSoundEntityEvent(ClientboundSoundEntityPacket p_131444_)
```

**Parameters:**

- `p_131444_` (`ClientboundSoundEntityPacket`)

### handleTakeItemEntity

```java
void handleTakeItemEntity(ClientboundTakeItemEntityPacket p_131449_)
```

**Parameters:**

- `p_131449_` (`ClientboundTakeItemEntityPacket`)

### handleTeleportEntity

```java
void handleTeleportEntity(ClientboundTeleportEntityPacket p_131450_)
```

**Parameters:**

- `p_131450_` (`ClientboundTeleportEntityPacket`)

### handleTickingState

```java
void handleTickingState(ClientboundTickingStatePacket p_309206_)
```

**Parameters:**

- `p_309206_` (`ClientboundTickingStatePacket`)

### handleTickingStep

```java
void handleTickingStep(ClientboundTickingStepPacket p_309008_)
```

**Parameters:**

- `p_309008_` (`ClientboundTickingStepPacket`)

### handleUpdateAttributes

```java
void handleUpdateAttributes(ClientboundUpdateAttributesPacket p_131452_)
```

**Parameters:**

- `p_131452_` (`ClientboundUpdateAttributesPacket`)

### handleUpdateMobEffect

```java
void handleUpdateMobEffect(ClientboundUpdateMobEffectPacket p_131453_)
```

**Parameters:**

- `p_131453_` (`ClientboundUpdateMobEffectPacket`)

### handlePlayerCombatEnd

```java
void handlePlayerCombatEnd(ClientboundPlayerCombatEndPacket p_178546_)
```

**Parameters:**

- `p_178546_` (`ClientboundPlayerCombatEndPacket`)

### handlePlayerCombatEnter

```java
void handlePlayerCombatEnter(ClientboundPlayerCombatEnterPacket p_178547_)
```

**Parameters:**

- `p_178547_` (`ClientboundPlayerCombatEnterPacket`)

### handlePlayerCombatKill

```java
void handlePlayerCombatKill(ClientboundPlayerCombatKillPacket p_178548_)
```

**Parameters:**

- `p_178548_` (`ClientboundPlayerCombatKillPacket`)

### handleChangeDifficulty

```java
void handleChangeDifficulty(ClientboundChangeDifficultyPacket p_131380_)
```

**Parameters:**

- `p_131380_` (`ClientboundChangeDifficultyPacket`)

### handleSetCamera

```java
void handleSetCamera(ClientboundSetCameraPacket p_131426_)
```

**Parameters:**

- `p_131426_` (`ClientboundSetCameraPacket`)

### handleInitializeBorder

```java
void handleInitializeBorder(ClientboundInitializeBorderPacket p_178544_)
```

**Parameters:**

- `p_178544_` (`ClientboundInitializeBorderPacket`)

### handleSetBorderLerpSize

```java
void handleSetBorderLerpSize(ClientboundSetBorderLerpSizePacket p_178552_)
```

**Parameters:**

- `p_178552_` (`ClientboundSetBorderLerpSizePacket`)

### handleSetBorderSize

```java
void handleSetBorderSize(ClientboundSetBorderSizePacket p_178553_)
```

**Parameters:**

- `p_178553_` (`ClientboundSetBorderSizePacket`)

### handleSetBorderWarningDelay

```java
void handleSetBorderWarningDelay(ClientboundSetBorderWarningDelayPacket p_178554_)
```

**Parameters:**

- `p_178554_` (`ClientboundSetBorderWarningDelayPacket`)

### handleSetBorderWarningDistance

```java
void handleSetBorderWarningDistance(ClientboundSetBorderWarningDistancePacket p_178555_)
```

**Parameters:**

- `p_178555_` (`ClientboundSetBorderWarningDistancePacket`)

### handleSetBorderCenter

```java
void handleSetBorderCenter(ClientboundSetBorderCenterPacket p_178551_)
```

**Parameters:**

- `p_178551_` (`ClientboundSetBorderCenterPacket`)

### handleTabListCustomisation

```java
void handleTabListCustomisation(ClientboundTabListPacket p_131447_)
```

**Parameters:**

- `p_131447_` (`ClientboundTabListPacket`)

### handleBossUpdate

```java
void handleBossUpdate(ClientboundBossEventPacket p_131379_)
```

**Parameters:**

- `p_131379_` (`ClientboundBossEventPacket`)

### handleItemCooldown

```java
void handleItemCooldown(ClientboundCooldownPacket p_131389_)
```

**Parameters:**

- `p_131389_` (`ClientboundCooldownPacket`)

### handleMoveVehicle

```java
void handleMoveVehicle(ClientboundMoveVehiclePacket p_131407_)
```

**Parameters:**

- `p_131407_` (`ClientboundMoveVehiclePacket`)

### handleUpdateAdvancementsPacket

```java
void handleUpdateAdvancementsPacket(ClientboundUpdateAdvancementsPacket p_131451_)
```

**Parameters:**

- `p_131451_` (`ClientboundUpdateAdvancementsPacket`)

### handleSelectAdvancementsTab

```java
void handleSelectAdvancementsTab(ClientboundSelectAdvancementsTabPacket p_131424_)
```

**Parameters:**

- `p_131424_` (`ClientboundSelectAdvancementsTabPacket`)

### handlePlaceRecipe

```java
void handlePlaceRecipe(ClientboundPlaceGhostRecipePacket p_131411_)
```

**Parameters:**

- `p_131411_` (`ClientboundPlaceGhostRecipePacket`)

### handleCommands

```java
void handleCommands(ClientboundCommandsPacket p_131383_)
```

**Parameters:**

- `p_131383_` (`ClientboundCommandsPacket`)

### handleStopSoundEvent

```java
void handleStopSoundEvent(ClientboundStopSoundPacket p_131446_)
```

**Parameters:**

- `p_131446_` (`ClientboundStopSoundPacket`)

### handleCommandSuggestions

```java
void handleCommandSuggestions(ClientboundCommandSuggestionsPacket p_131382_)
```

**Parameters:**

- `p_131382_` (`ClientboundCommandSuggestionsPacket`)

### handleUpdateRecipes

```java
void handleUpdateRecipes(ClientboundUpdateRecipesPacket p_131454_)
```

**Parameters:**

- `p_131454_` (`ClientboundUpdateRecipesPacket`)

### handleLookAt

```java
void handleLookAt(ClientboundPlayerLookAtPacket p_131415_)
```

**Parameters:**

- `p_131415_` (`ClientboundPlayerLookAtPacket`)

### handleTagQueryPacket

```java
void handleTagQueryPacket(ClientboundTagQueryPacket p_131448_)
```

**Parameters:**

- `p_131448_` (`ClientboundTagQueryPacket`)

### handleLightUpdatePacket

```java
void handleLightUpdatePacket(ClientboundLightUpdatePacket p_195623_)
```

**Parameters:**

- `p_195623_` (`ClientboundLightUpdatePacket`)

### handleOpenBook

```java
void handleOpenBook(ClientboundOpenBookPacket p_131408_)
```

**Parameters:**

- `p_131408_` (`ClientboundOpenBookPacket`)

### handleOpenScreen

```java
void handleOpenScreen(ClientboundOpenScreenPacket p_131409_)
```

**Parameters:**

- `p_131409_` (`ClientboundOpenScreenPacket`)

### handleMerchantOffers

```java
void handleMerchantOffers(ClientboundMerchantOffersPacket p_131405_)
```

**Parameters:**

- `p_131405_` (`ClientboundMerchantOffersPacket`)

### handleSetChunkCacheRadius

```java
void handleSetChunkCacheRadius(ClientboundSetChunkCacheRadiusPacket p_131429_)
```

**Parameters:**

- `p_131429_` (`ClientboundSetChunkCacheRadiusPacket`)

### handleSetSimulationDistance

```java
void handleSetSimulationDistance(ClientboundSetSimulationDistancePacket p_195624_)
```

**Parameters:**

- `p_195624_` (`ClientboundSetSimulationDistancePacket`)

### handleSetChunkCacheCenter

```java
void handleSetChunkCacheCenter(ClientboundSetChunkCacheCenterPacket p_131428_)
```

**Parameters:**

- `p_131428_` (`ClientboundSetChunkCacheCenterPacket`)

### handleBlockChangedAck

```java
void handleBlockChangedAck(ClientboundBlockChangedAckPacket p_237538_)
```

**Parameters:**

- `p_237538_` (`ClientboundBlockChangedAckPacket`)

### setActionBarText

```java
void setActionBarText(ClientboundSetActionBarTextPacket p_178550_)
```

**Parameters:**

- `p_178550_` (`ClientboundSetActionBarTextPacket`)

### setSubtitleText

```java
void setSubtitleText(ClientboundSetSubtitleTextPacket p_178556_)
```

**Parameters:**

- `p_178556_` (`ClientboundSetSubtitleTextPacket`)

### setTitleText

```java
void setTitleText(ClientboundSetTitleTextPacket p_178557_)
```

**Parameters:**

- `p_178557_` (`ClientboundSetTitleTextPacket`)

### setTitlesAnimation

```java
void setTitlesAnimation(ClientboundSetTitlesAnimationPacket p_178558_)
```

**Parameters:**

- `p_178558_` (`ClientboundSetTitlesAnimationPacket`)

### handleTitlesClear

```java
void handleTitlesClear(ClientboundClearTitlesPacket p_178543_)
```

**Parameters:**

- `p_178543_` (`ClientboundClearTitlesPacket`)

### handleServerData

```java
void handleServerData(ClientboundServerDataPacket p_237541_)
```

**Parameters:**

- `p_237541_` (`ClientboundServerDataPacket`)

### handleCustomChatCompletions

```java
void handleCustomChatCompletions(ClientboundCustomChatCompletionsPacket p_240770_)
```

**Parameters:**

- `p_240770_` (`ClientboundCustomChatCompletionsPacket`)

### handleBundlePacket

```java
void handleBundlePacket(ClientboundBundlePacket p_265211_)
```

**Parameters:**

- `p_265211_` (`ClientboundBundlePacket`)

### handleDamageEvent

```java
void handleDamageEvent(ClientboundDamageEventPacket p_270900_)
```

**Parameters:**

- `p_270900_` (`ClientboundDamageEventPacket`)

### handleConfigurationStart

```java
void handleConfigurationStart(ClientboundStartConfigurationPacket p_294815_)
```

**Parameters:**

- `p_294815_` (`ClientboundStartConfigurationPacket`)

### handleChunkBatchStart

```java
void handleChunkBatchStart(ClientboundChunkBatchStartPacket p_295789_)
```

**Parameters:**

- `p_295789_` (`ClientboundChunkBatchStartPacket`)

### handleChunkBatchFinished

```java
void handleChunkBatchFinished(ClientboundChunkBatchFinishedPacket p_295302_)
```

**Parameters:**

- `p_295302_` (`ClientboundChunkBatchFinishedPacket`)

### handleDebugSample

```java
void handleDebugSample(ClientboundDebugSamplePacket p_323534_)
```

**Parameters:**

- `p_323534_` (`ClientboundDebugSamplePacket`)

### handleProjectilePowerPacket

```java
void handleProjectilePowerPacket(ClientboundProjectilePowerPacket p_339666_)
```

**Parameters:**

- `p_339666_` (`ClientboundProjectilePowerPacket`)
