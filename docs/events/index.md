# Events

This category contains 136 class(es).

## neoforge.event

| Class | Type | Description |
|-------|------|-------------|
| [`AddAttributeTooltipsEvent`](AddAttributeTooltipsEvent.md) | class | This event is fired after attribute tooltip lines have been added to an item stack's tooltip in Attr |
| [`AddPackFindersEvent`](AddPackFindersEvent.md) | class | Fired on PackRepository creation to allow mods to add new pack finders. |
| [`AddReloadListenerEvent`](AddReloadListenerEvent.md) | class | The main ResourceManager is recreated on each reload, just after ReloadableServerResources's creatio |
| [`AddServerReloadListenersEvent`](AddServerReloadListenersEvent.md) | class | The main ResourceManager is recreated on each reload, just after ReloadableServerResources's creatio |
| [`AnvilUpdateEvent`](AnvilUpdateEvent.md) | class | AnvilUpdateEvent is fired whenever the input stacks (left or right) or the name in an anvil changed. |
| [`AtEntity`](AtEntity.md) | class |  |
| [`AtPosition`](AtPosition.md) | class |  |
| [`BlockEntityTypeAddBlocksEvent`](BlockEntityTypeAddBlocksEvent.md) | class | Allows injecting new blocks into a block entity's BlockEntityType#validBlocks field in a safe manner |
| [`CommandEvent`](CommandEvent.md) | class | CommandEvent is fired after a command is parsed, but before it is executed. |
| [`DefaultDataComponentsBoundEvent`](DefaultDataComponentsBoundEvent.md) | class | This event is emitted after data components have been bound to holders in a registry. |
| [`DifficultyChangeEvent`](DifficultyChangeEvent.md) | class | DifficultyChangeEvent is fired when difficulty is changing. |
| [`EventHooks`](EventHooks.md) | class |  |
| [`GameShuttingDownEvent`](GameShuttingDownEvent.md) | class | A simple marker event that notifies when the game is about to close. |
| [`GatherSkippedAttributeTooltipsEvent`](GatherSkippedAttributeTooltipsEvent.md) | class | This event is used to collect the IDs of attribute modifiers that will not be displayed in item tool |
| [`ItemAttributeModifierEvent`](ItemAttributeModifierEvent.md) | class | This event is fired when the attributes for an item stack are queried (for any reason) through ItemS |
| [`ItemStackedOnOtherEvent`](ItemStackedOnOtherEvent.md) | class | This event provides the functionality of the pair of functions used for the Bundle, in one event:
<u |
| [`LootTableLoadEvent`](LootTableLoadEvent.md) | class | Fired when a LootTable is loaded from JSON. |
| [`MismatchedVersionInfo`](MismatchedVersionInfo.md) | record |  |
| [`MismatchResolutionResult`](MismatchResolutionResult.md) | record |  |
| [`ModMismatchEvent`](ModMismatchEvent.md) | class | Fires when the mod loader is in the process of loading a world that was last saved
with mod versions |
| [`OnDatapackSyncEvent`](OnDatapackSyncEvent.md) | class | Fires when a player joins the server or when the reload command is ran,
before tags and crafting rec |
| [`PlayLevelSoundEvent`](PlayLevelSoundEvent.md) | class | PlayLevelSoundEvent is fired when a sound is played on a Level. |
| [`RegisterCommandsEvent`](RegisterCommandsEvent.md) | class | Commands are rebuilt whenever ReloadableServerResources is recreated. |
| [`RegisterGameTestsEvent`](RegisterGameTestsEvent.md) | class | Game tests are registered on client or server startup. |
| [`RegisterStructureConversionsEvent`](RegisterStructureConversionsEvent.md) | class | Fired for registering structure conversions for pre-1.18.2 worlds. |
| [`ServerChatEvent`](ServerChatEvent.md) | class | This event is fired whenever a ServerboundChatPacket is received from a client
who has submitted the |
| [`StatAwardEvent`](StatAwardEvent.md) | class | Fired when a Player is awarded a Stat. |
| [`TagsUpdatedEvent`](TagsUpdatedEvent.md) | class | Fired when tags are updated on either server or client. |
| [`UpdateCause`](UpdateCause.md) | enum |  |
| [`VanillaGameEvent`](VanillaGameEvent.md) | class | VanillaGameEvent is fired on the server whenever one of Vanilla's GameEvent GameEvents fire. |

## event.village

| Class | Type | Description |
|-------|------|-------------|
| [`VillagerTradesEvent`](VillagerTradesEvent.md) | class | VillagerTradesEvent is fired during reload by TagsUpdatedEvent. |
| [`VillageSiegeEvent`](VillageSiegeEvent.md) | class | VillageSiegeEvent is fired just before a zombie siege finds a successful location in
VillageSiege#tr |
| [`WandererTradesEvent`](WandererTradesEvent.md) | class | WandererTradesEvent is fired during reload by TagsUpdatedEvent. |

## event.entity

| Class | Type | Description |
|-------|------|-------------|
| [`ChorusFruit`](ChorusFruit.md) | class |  |
| [`EnderEntity`](EnderEntity.md) | class |  |
| [`EnderPearl`](EnderPearl.md) | class |  |
| [`EntityAttributeCreationEvent`](EntityAttributeCreationEvent.md) | class | EntityAttributeCreationEvent.<br>
Use this event to register attributes for your own EntityTypes. |
| [`EntityAttributeModificationEvent`](EntityAttributeModificationEvent.md) | class | EntityAttributeModificationEvent.<br>
Use this event to add attributes to existing entity types. |
| [`EntityInvulnerabilityCheckEvent`](EntityInvulnerabilityCheckEvent.md) | class | Fired when Entity#isInvulnerableTo(DamageSource) is invoked and determines if
downstream hurt logic  |
| [`EntityJoinLevelEvent`](EntityJoinLevelEvent.md) | class | This event is fired whenever an Entity joins a Level. |
| [`EntityLeaveLevelEvent`](EntityLeaveLevelEvent.md) | class | This event is fired whenever an Entity leaves a Level. |
| [`EntityMobGriefingEvent`](EntityMobGriefingEvent.md) | class | EntityMobGriefingEvent is fired when mob griefing is about to occur and allows an event listener to  |
| [`EntityMountEvent`](EntityMountEvent.md) | class | This event gets fired whenever a entity mounts/dismounts another entity.<br>
<b>entityBeingMounted c |
| [`EntityStruckByLightningEvent`](EntityStruckByLightningEvent.md) | class | EntityStruckByLightningEvent is fired when an Entity is about to be struck by lightening.<br>
This e |
| [`EntityTeleportEvent`](EntityTeleportEvent.md) | class | EntityTeleportEvent is fired when an event involving any teleportation of an Entity occurs.<br>
If a |
| [`EntityTravelToDimensionEvent`](EntityTravelToDimensionEvent.md) | class | EntityTravelToDimensionEvent is fired before an Entity travels to a dimension.<br>
<br>
#dimension c |
| [`MergedSpawnPredicate`](MergedSpawnPredicate.md) | class |  |
| [`Operation`](Operation.md) | enum |  |
| [`ProjectileImpactEvent`](ProjectileImpactEvent.md) | class | This event is fired on the NeoForge#EVENT_BUS.<br>
This event is fired when a projectile entity impa |
| [`RegisterSpawnPlacementsEvent`](RegisterSpawnPlacementsEvent.md) | class | This event allows each EntityType to have a SpawnPlacements.SpawnPredicate registered or modified. |
| [`SpreadPlayersCommand`](SpreadPlayersCommand.md) | class |  |
| [`TeleportCommand`](TeleportCommand.md) | class |  |

## entity.item

| Class | Type | Description |
|-------|------|-------------|
| [`ItemExpireEvent`](ItemExpireEvent.md) | class | Event that is fired when an ItemEntity's age has reached its maximum
lifespan. |
| [`ItemTossEvent`](ItemTossEvent.md) | class | Event that is fired whenever a player tosses (Q) an item or drag-n-drops a
stack of items outside th |

## entity.player

| Class | Type | Description |
|-------|------|-------------|
| [`AnvilRepairEvent`](AnvilRepairEvent.md) | class | Fired when the player removes a "repaired" item from the Anvil's Output slot. |
| [`ArrowLooseEvent`](ArrowLooseEvent.md) | class | ArrowLooseEvent is fired when a player stops using a bow.<br>
This event is fired whenever a player  |
| [`ArrowNockEvent`](ArrowNockEvent.md) | class | ArrowNockEvent is fired when a player begins using a bow.<br>
This event is fired whenever a player  |
| [`AttackEntityEvent`](AttackEntityEvent.md) | class | AttackEntityEvent is fired when a player attacks an Entity.<br>
This event is fired whenever a playe |
| [`BonemealEvent`](BonemealEvent.md) | class | This event is called when a player attempts to use bone meal on a block. |
| [`CanContinueSleepingEvent`](CanContinueSleepingEvent.md) | class | This event is fired when the game checks if a sleeping entity may continue sleeping. |
| [`CanPlayerSleepEvent`](CanPlayerSleepEvent.md) | class | Called from ServerPlayer#startSleepInBed(BlockPos) when a player attempts to sleep. |
| [`ClientInformationUpdatedEvent`](ClientInformationUpdatedEvent.md) | class | ClientInformationUpdatedEvent is fired when a player changes server-synced client options,
specifica |
| [`Close`](Close.md) | class |  |
| [`CriticalHitEvent`](CriticalHitEvent.md) | class | This event is fired when a player attacks an entity in Player#attack(Entity). |
| [`FluidTooltipEvent`](FluidTooltipEvent.md) | class |  |
| [`ItemFishedEvent`](ItemFishedEvent.md) | class | This event is called when a player fishes an item. |
| [`ItemTooltipEvent`](ItemTooltipEvent.md) | class |  |
| [`Open`](Open.md) | class |  |
| [`PermissionsChangedEvent`](PermissionsChangedEvent.md) | class | This event will fire when the player is opped or deopped. |
| [`PlayerContainerEvent`](PlayerContainerEvent.md) | class |  |
| [`PlayerDestroyItemEvent`](PlayerDestroyItemEvent.md) | class | PlayerDestroyItemEvent is fired when a player destroys an item.<br>
This event is fired whenever a p |
| [`PlayerEnchantItemEvent`](PlayerEnchantItemEvent.md) | class | This event fires when a player enchants an item, after IItemExtension#applyEnchantments has been cal |
| [`PlayerFlyableFallEvent`](PlayerFlyableFallEvent.md) | class | Occurs when a player falls, but is able to fly. |
| [`PlayerHeartTypeEvent`](PlayerHeartTypeEvent.md) | class | Fired by Gui.HeartType#forPlayer to allow mods to change the heart sprite which is displayed in the  |
| [`PlayerNegotiationEvent`](PlayerNegotiationEvent.md) | class | This event is fired on the server when a connection has started the Forge handshake,
Forge will wait |
| [`PlayerRespawnPositionEvent`](PlayerRespawnPositionEvent.md) | class | Fired by PlayerList#respawn(ServerPlayer, boolean) before the server respawns a player. |
| [`PlayerSetSpawnEvent`](PlayerSetSpawnEvent.md) | class | This event is fired when a player's spawn point is set or reset.<br>
The event can be canceled, whic |
| [`PlayerSpawnPhantomsEvent`](PlayerSpawnPhantomsEvent.md) | class | This event is fired from PhantomSpawner#tick when phantoms would attempt to be spawned, with one eve |
| [`PlayerWakeUpEvent`](PlayerWakeUpEvent.md) | class | This event is fired when the player is waking up.<br/>
This is merely for purposes of listening for  |
| [`Result`](Result.md) | enum |  |
| [`SweepAttackEvent`](SweepAttackEvent.md) | class | The SweepAttackEvent is fired when a Player attacks a target, after the CriticalHitEvent has been fi |
| [`TradeWithVillagerEvent`](TradeWithVillagerEvent.md) | class | Fired when a player trades with an AbstractVillager. |
| [`UseItemOnBlockEvent`](UseItemOnBlockEvent.md) | class | Fires on both the client and server thread when a player interacts with a block. |
| [`UsePhase`](UsePhase.md) | enum |  |

## entity.living

| Class | Type | Description |
|-------|------|-------------|
| [`AnimalTameEvent`](AnimalTameEvent.md) | class | This event is fired when an Animal is tamed. |
| [`ArmorEntry`](ArmorEntry.md) | class |  |
| [`ArmorHurtEvent`](ArmorHurtEvent.md) | class | Fired on both sides when a LivingEntity's armor is dealt damage in
LivingEntity#doHurtEquipment(Dama |
| [`BabyEntitySpawnEvent`](BabyEntitySpawnEvent.md) | class | BabyEntitySpawnEvent is fired just before a baby entity is about to be spawned. |
| [`EffectParticleModificationEvent`](EffectParticleModificationEvent.md) | class | Fires for each effect to allow modification or replacement of the particle options (you can set it t |
| [`EnderManAngerEvent`](EnderManAngerEvent.md) | class | This event is fired on the forge bus before an Enderman detects that a player is looking at them. |
| [`FinalizeSpawnEvent`](FinalizeSpawnEvent.md) | class | This event is fired before Mob#finalizeSpawn is called.<br>
This allows mods to control mob initiali |
| [`Finish`](Finish.md) | class |  |
| [`ILivingTargetType`](ILivingTargetType.md) | interface |  |
| [`LivingBreatheEvent`](LivingBreatheEvent.md) | class | LivingBreatheEvent is fired whenever a living entity ticks.<br>
<br>
This event is fired via CommonH |
| [`LivingChangeTargetEvent`](LivingChangeTargetEvent.md) | class | This event allows you to change the target an entity has. |
| [`LivingDeathEvent`](LivingDeathEvent.md) | class | LivingDeathEvent is fired when an Entity dies. |
| [`LivingDestroyBlockEvent`](LivingDestroyBlockEvent.md) | class | Fired when the ender dragon or wither attempts to destroy a block and when ever a zombie attempts to |
| [`LivingDropsEvent`](LivingDropsEvent.md) | class | LivingDropsEvent is fired when an Entity's death causes dropped items to appear.<br>
This event is f |
| [`LivingDrownEvent`](LivingDrownEvent.md) | class | LivingDrownEvent is fired whenever a living entity can't breathe and its air supply is less than or  |
| [`LivingEntityUseItemEvent`](LivingEntityUseItemEvent.md) | class |  |
| [`LivingEquipmentChangeEvent`](LivingEquipmentChangeEvent.md) | class | LivingEquipmentChangeEvent is fired when the Equipment of a Entity changes. |
| [`LivingExperienceDropEvent`](LivingExperienceDropEvent.md) | class | Event for when an entity drops experience on its death, can be used to change
the amount of experien |
| [`LivingFallEvent`](LivingFallEvent.md) | class | LivingFallEvent is fired when an Entity is set to be falling.<br>
This event is fired whenever an En |
| [`LivingGetProjectileEvent`](LivingGetProjectileEvent.md) | class | This event is fired when a living entity attempts to get a projectile with the
LivingEntity#getProje |
| [`LivingHealEvent`](LivingHealEvent.md) | class | LivingHealEvent is fired when an Entity is set to be healed. |
| [`LivingIncomingDamageEvent`](LivingIncomingDamageEvent.md) | class | LivingIncomingDamageEvent is fired when a LivingEntity is about to receive damage. |
| [`LivingKnockBackEvent`](LivingKnockBackEvent.md) | class | LivingKnockBackEvent is fired when a living entity is about to be knocked back. |
| [`LivingShieldBlockEvent`](LivingShieldBlockEvent.md) | class | LivingShieldBlockEvent is fired when an entity is hurt and vanilla checks if the entity is attemptin |
| [`LivingTargetType`](LivingTargetType.md) | enum |  |
| [`LivingUseTotemEvent`](LivingUseTotemEvent.md) | class | Fired when an Entity attempts to use a totem to prevent its death. |
| [`MobDespawnEvent`](MobDespawnEvent.md) | class | This event is fired from Mob#checkDespawn().<br>
It fires once per tick per mob that is attempting t |
| [`MobSplitEvent`](MobSplitEvent.md) | class | This event is fired whenever a mob is removed and splits into multiple children. |
| [`Result`](Result.md) | enum |  |
| [`SpawnClusterSizeEvent`](SpawnClusterSizeEvent.md) | class | This event is fired from NaturalSpawner#spawnCategoryForPosition when the spawning
system determines |
| [`Start`](Start.md) | class |  |
| [`Stop`](Stop.md) | class |  |
| [`Tick`](Tick.md) | class |  |

## event.furnace

| Class | Type | Description |
|-------|------|-------------|
| [`FurnaceFuelBurnTimeEvent`](FurnaceFuelBurnTimeEvent.md) | class | FurnaceFuelBurnTimeEvent is fired when determining the fuel value for an ItemStack. |

## event.level

| Class | Type | Description |
|-------|------|-------------|
| [`AlterGroundEvent`](AlterGroundEvent.md) | class | This event is fired when AlterGroundDecorator#placeBlockAt(TreeDecorator.Context, BlockPos) attempts |
| [`BlockDropsEvent`](BlockDropsEvent.md) | class | Fired when a block is broken and the drops have been determined, but before they have been added to  |
| [`BlockGrowFeatureEvent`](BlockGrowFeatureEvent.md) | class | This event is fired whenever a block (like a sapling) grows into a feature (like a tree). |
| [`ChunkTicketLevelUpdatedEvent`](ChunkTicketLevelUpdatedEvent.md) | class | This event is fired whenever a chunk has its ticket level changed via the server's ChunkMap. |
| [`ExplosionKnockbackEvent`](ExplosionKnockbackEvent.md) | class | ExplosionKnockbackEvent is fired once the explosion has calculated the knockback velocity to add to  |
| [`ModifyCustomSpawnersEvent`](ModifyCustomSpawnersEvent.md) | class | This event is fired on the net.neoforged.fml.LogicalSide#SERVER logical server when a ServerLevel is |
| [`SleepFinishedTimeEvent`](SleepFinishedTimeEvent.md) | class | This event is fired when all players are asleep and the time should be set to day.<br>
setWakeUpTime |
| [`StateProvider`](StateProvider.md) | interface |  |

## level.block

| Class | Type | Description |
|-------|------|-------------|
| [`CreateFluidSourceEvent`](CreateFluidSourceEvent.md) | class | Fired when a fluid checks if nearby blocks can convert it to a source block. |

## event.server

| Class | Type | Description |
|-------|------|-------------|
| [`ServerAboutToStartEvent`](ServerAboutToStartEvent.md) 🖧 | class | Called before the server begins loading anything. |
| [`ServerStartedEvent`](ServerStartedEvent.md) 🖧 | class | Called after ServerStartingEvent when the server is available and ready to play. |
| [`ServerStartingEvent`](ServerStartingEvent.md) 🖧 | class | Called after ServerAboutToStartEvent and before ServerStartedEvent. |
| [`ServerStoppedEvent`](ServerStoppedEvent.md) 🖧 | class | Called after ServerStoppingEvent when the server has completely shut down. |
| [`ServerStoppingEvent`](ServerStoppingEvent.md) 🖧 | class | Called when the server begins an orderly shutdown, before ServerStoppedEvent. |

## event.enchanting

| Class | Type | Description |
|-------|------|-------------|
| [`EnchantmentLevelSetEvent`](EnchantmentLevelSetEvent.md) | class | Fired when the enchantment level is set for each of the three potential enchantments in the enchanti |
| [`GetEnchantmentLevelEvent`](GetEnchantmentLevelEvent.md) | class | This event is fired whenever the enchantment level of a particular item is requested for gameplay pu |

## event.brewing

| Class | Type | Description |
|-------|------|-------------|
| [`PlayerBrewedPotionEvent`](PlayerBrewedPotionEvent.md) | class | This event is called when a player picks up a potion from a brewing stand. |
| [`RegisterBrewingRecipesEvent`](RegisterBrewingRecipesEvent.md) | class | Event to register new brewing recipes. |
