# Common

This category contains 199 class(es).

## neoforge.common

| Class | Type | Description |
|-------|------|-------------|
| [`BasicItemListing`](BasicItemListing.md) | class | A default, exposed implementation of ITrade. |
| [`BiomeCallbackFunction`](BiomeCallbackFunction.md) | interface |  |
| [`Biomes`](Biomes.md) | class |  |
| [`Blocks`](Blocks.md) | class |  |
| [`BooleanAttribute`](BooleanAttribute.md) | class | A boolean attribute only has two states, on or off, represented by a value of 0 (false) or 1 (true). |
| [`Client`](Client.md) | class |  |
| [`Common`](Common.md) | class |  |
| [`CommonHooks`](CommonHooks.md) | class | Class for various common (i.e. |
| [`DamageTypes`](DamageTypes.md) | class |  |
| [`DataMapHooks`](DataMapHooks.md) | class |  |
| [`DeferredSpawnEggItem`](DeferredSpawnEggItem.md) | class |  |
| [`EffectCures`](EffectCures.md) | class |  |
| [`Enchantments`](Enchantments.md) | class |  |
| [`FarmlandWaterManager`](FarmlandWaterManager.md) | class |  |
| [`Fluids`](Fluids.md) | class |  |
| [`IMinecartCollisionHandler`](IMinecartCollisionHandler.md) | interface | This class defines a replacement for the default minecart collision code. |
| [`IShearable`](IShearable.md) | interface | This interfaces allows shears (modded & vanilla) and Entity entities (modded & vanilla) to cooperate |
| [`ItemAbilities`](ItemAbilities.md) | class |  |
| [`IWorker`](IWorker.md) | interface |  |
| [`LenientUnboundedMapCodec`](LenientUnboundedMapCodec.md) | class | Key and value decoded independently, unknown set of keys |
| [`MobEntry`](MobEntry.md) | record |  |
| [`ModConfigSpec`](ModConfigSpec.md) | class |  |
| [`MonsterRoomHooks`](MonsterRoomHooks.md) | class |  |
| [`MutableDataComponentHolder`](MutableDataComponentHolder.md) | interface |  |
| [`NeoForge`](NeoForge.md) | class |  |
| [`NeoForgeBuildType`](NeoForgeBuildType.md) | enum |  |
| [`NeoForgeConfig`](NeoForgeConfig.md) | class | NeoForge's own configuration. |
| [`NeoForgeEventHandler`](NeoForgeEventHandler.md) | class |  |
| [`NeoForgeMod`](NeoForgeMod.md) | class |  |
| [`OnlyInWarningsHandler`](OnlyInWarningsHandler.md) | class |  |
| [`PercentageAttribute`](PercentageAttribute.md) | class | A Percentage Attribute is one which always displays modifiers as percentages, including for Operatio |
| [`RestartType`](RestartType.md) | enum |  |
| [`Server`](Server.md) | class |  |
| [`SimpleTier`](SimpleTier.md) | class | Helper class to define a custom tier |
| [`SpecialPlantable`](SpecialPlantable.md) | interface | Intended for mods to help mark if a modded item allows for placing modded plants of any kind or size |
| [`Structures`](Structures.md) | class |  |
| [`Tags`](Tags.md) | class |  |
| [`TranslatableEnum`](TranslatableEnum.md) | interface | An enum value that can be be translated. |
| [`VillagerTradingManager`](VillagerTradingManager.md) | class |  |
| [`WorldWorkerManager`](WorldWorkerManager.md) | class |  |

## common.damagesource

| Class | Type | Description |
|-------|------|-------------|
| [`DamageContainer`](DamageContainer.md) | class | DamageContainer encapsulates aspects of the entity damage sequence so that
relevant context related  |
| [`IDeathMessageProvider`](IDeathMessageProvider.md) | interface | An IDeathMessageProvider is used by custom DeathMessageType instances.<br>
This allows providing cus |
| [`IReductionFunction`](IReductionFunction.md) | interface | An IReductionFunction is used by DamageContainer instances.<br>
This allows sequential modification  |
| [`IScalingFunction`](IScalingFunction.md) | interface | An IScalingFunction is used by custom DamageScaling instances.<br>
This allows finer control over th |
| [`Reduction`](Reduction.md) | enum |  |

## common.property

| Class | Type | Description |
|-------|------|-------------|
| [`Properties`](Properties.md) | class |  |

## common.ticket

| Class | Type | Description |
|-------|------|-------------|
| [`AABBTicket`](AABBTicket.md) | class |  |
| [`ChunkTicketManager`](ChunkTicketManager.md) | class |  |
| [`ITicketGetter`](ITicketGetter.md) | interface |  |
| [`ITicketManager`](ITicketManager.md) | interface |  |

## common.loot

| Class | Type | Description |
|-------|------|-------------|
| [`AddTableLootModifier`](AddTableLootModifier.md) | class | <p>Loot modifier that rolls one loot table (the "subtable" and adds the results to the loot being mo |
| [`Builder`](Builder.md) | class |  |
| [`CanItemPerformAbility`](CanItemPerformAbility.md) | class | This LootItemCondition "neoforge:can_item_perform_ability" can be used to check if an item can perfo |
| [`IGlobalLootModifier`](IGlobalLootModifier.md) | interface | Implementation that defines what a global loot modifier must implement in order to be functional. |
| [`LootModifierManager`](LootModifierManager.md) | class |  |
| [`LootTableIdCondition`](LootTableIdCondition.md) | class |  |

## common.util

| Class | Type | Description |
|-------|------|-------------|
| [`Alignment`](Alignment.md) | enum |  |
| [`AttributeTooltipContext`](AttributeTooltipContext.md) | interface | Extended TooltipContext used when generating attribute tooltips. |
| [`AttributeUtil`](AttributeUtil.md) | class | Utility code to support IAttributeExtension. |
| [`BlockSnapshot`](BlockSnapshot.md) | class | Represents a captured snapshot of a block, including the level, position, state, BE data, and setBlo |
| [`CenterChunkPosComparator`](CenterChunkPosComparator.md) | class |  |
| [`Column`](Column.md) | class |  |
| [`ConcatenatedListView`](ConcatenatedListView.md) | class | A list that concatenates multiple other lists for efficient iteration.<p/>
You may use this in place |
| [`DataComponentUtil`](DataComponentUtil.md) | class |  |
| [`DeferredSoundType`](DeferredSoundType.md) | class | A subclass of SoundType that uses Supplier<SoundEvent>s. |
| [`DummySavedData`](DummySavedData.md) | class | A no-op SavedData implementation which does not store data. |
| [`FakePlayer`](FakePlayer.md) | class | A basic fake server player implementation that can be used to simulate player actions. |
| [`FakePlayerFactory`](FakePlayerFactory.md) | class |  |
| [`FriendlyByteBufUtil`](FriendlyByteBufUtil.md) | class | Utility class for working with FriendlyByteBufs. |
| [`HexDumper`](HexDumper.md) | class | Utility class for creating a nice human readable dump of binary data. |
| [`ImmutableListTypeAdapter`](ImmutableListTypeAdapter.md) | enum |  |
| [`ImmutableMapTypeAdapter`](ImmutableMapTypeAdapter.md) | enum |  |
| [`INBTSerializable`](INBTSerializable.md) | interface | An interface designed to unify various things in the Minecraft
code base that can be serialized to a |
| [`InsertableLinkedOpenCustomHashSet`](InsertableLinkedOpenCustomHashSet.md) | class | Special linked hash set that allow changing the order of its entries and is strict to throw if attem |
| [`ItemStackMap`](ItemStackMap.md) | class |  |
| [`JsonUtils`](JsonUtils.md) | class |  |
| [`LogicalSidedProvider`](LogicalSidedProvider.md) | class |  |
| [`MergeFunction`](MergeFunction.md) | interface |  |
| [`MutableHashedLinkedMap`](MutableHashedLinkedMap.md) | class | A mutable linked map with a hashing strategy and a merge function. |
| [`NeoForgeExtraCodecs`](NeoForgeExtraCodecs.md) | class | Codec-related helper functions that are not in ExtraCodecs, but useful to NeoForge and other mods. |
| [`RecipeMatcher`](RecipeMatcher.md) | class |  |
| [`Row`](Row.md) | class |  |
| [`SortedProperties`](SortedProperties.md) | class | An Implementation of Properties that is sorted when iterating. |
| [`TablePrinter`](TablePrinter.md) | class |  |
| [`TextTable`](TextTable.md) | class | Utility to format data into a textual (markdown-compliant) table. |
| [`TriPredicate`](TriPredicate.md) | interface | A predicate that takes three arguments and returns a boolean. |
| [`TriState`](TriState.md) | enum | Represents a boolean value that can be true, false or refer to a default value. |
| [`ValueIOSerializable`](ValueIOSerializable.md) | interface | A generic interface for objects that can be serialized to a ValueOutput and deserialized from a Valu |
| [`VanillaClassToKey`](VanillaClassToKey.md) | class |  |

## util.strategy

| Class | Type | Description |
|-------|------|-------------|
| [`BasicStrategy`](BasicStrategy.md) | class | A strategy that uses Objects#hashCode(Object) and Object#equals(Object). |
| [`IdentityStrategy`](IdentityStrategy.md) | class | A strategy that uses System#identityHashCode(Object) and a == b comparisons. |

## common.crafting

| Class | Type | Description |
|-------|------|-------------|
| [`BlockTagIngredient`](BlockTagIngredient.md) | class | Ingredient that matches ItemStacks of Blocks from a TagKey<Block>, useful in cases
like "minecraft:c |
| [`ConditionalRecipeOutput`](ConditionalRecipeOutput.md) | class | Wrapper around a RecipeOutput that adds conditions to all received recipes. |
| [`CraftingHelper`](CraftingHelper.md) | class |  |
| [`DataComponentIngredient`](DataComponentIngredient.md) | class | Ingredient that matches the given items, performing either a DataComponentIngredient#isStrict() stri |
| [`ICustomIngredient`](ICustomIngredient.md) | interface | Interface that modders can implement to create new behaviors for Ingredients. |
| [`IngredientCodecs`](IngredientCodecs.md) | class |  |
| [`IRecipeContainer`](IRecipeContainer.md) | interface | This interface is to be implemented on Container objects. |
| [`RecipePriorityManager`](RecipePriorityManager.md) | class |  |

## common.command

| Class | Type | Description |
|-------|------|-------------|
| [`EntitySelectorManager`](EntitySelectorManager.md) | class | Allows modders to register custom entity selectors by assigning an IEntitySelectorType to a String t |
| [`IEntitySelectorType`](IEntitySelectorType.md) | interface | Implementations of this interface can be registered using EntitySelectorManager#register |

## advancements.critereon

| Class | Type | Description |
|-------|------|-------------|
| [`PiglinCurrencyItemPredicate`](PiglinCurrencyItemPredicate.md) | class |  |
| [`PiglinNeutralArmorEntityPredicate`](PiglinNeutralArmorEntityPredicate.md) | class |  |
| [`SnowBootsEntityPredicate`](SnowBootsEntityPredicate.md) | class |  |
| [`TridentEntityPredicate`](TridentEntityPredicate.md) | class |  |

## common.world

| Class | Type | Description |
|-------|------|-------------|
| [`AuxiliaryLightManager`](AuxiliaryLightManager.md) | interface | Manager for light values controlled by dynamic data in BlockEntitys. |
| [`BiomeGenerationSettingsBuilder`](BiomeGenerationSettingsBuilder.md) | class |  |
| [`BiomeInfo`](BiomeInfo.md) | record |  |
| [`BiomeModifier`](BiomeModifier.md) | interface | JSON-serializable biome modifier. |
| [`BiomeSpecialEffectsBuilder`](BiomeSpecialEffectsBuilder.md) | class | Extension of the vanilla builder but also provides read access and a copy-from-existing-data helper. |
| [`Builder`](Builder.md) | class |  |
| [`Builder`](Builder.md) | class |  |
| [`ClimateSettingsBuilder`](ClimateSettingsBuilder.md) | class | Builder for ClimateSettings. |
| [`MobSpawnSettingsBuilder`](MobSpawnSettingsBuilder.md) | class |  |
| [`ModifiableBiomeInfo`](ModifiableBiomeInfo.md) | class | Holds lazy-evaluable modified biome info. |
| [`ModifiableStructureInfo`](ModifiableStructureInfo.md) | class | Holds lazy-evaluable modified structure info. |
| [`NoneBiomeModifier`](NoneBiomeModifier.md) | class |  |
| [`NoneStructureModifier`](NoneStructureModifier.md) | class |  |
| [`PieceBeardifierModifier`](PieceBeardifierModifier.md) | interface | Implement this interface in a net.minecraft.world.level.levelgen.structure.StructurePiece class exte |
| [`StructureInfo`](StructureInfo.md) | record |  |
| [`StructureModifier`](StructureModifier.md) | interface | JSON-serializable structure modifier. |
| [`StructureSettingsBuilder`](StructureSettingsBuilder.md) | class |  |
| [`StructureSpawnOverrideBuilder`](StructureSpawnOverrideBuilder.md) | class |  |

## world.chunk

| Class | Type | Description |
|-------|------|-------------|
| [`ForcedChunkManager`](ForcedChunkManager.md) | class |  |
| [`LoadingValidationCallback`](LoadingValidationCallback.md) | interface |  |
| [`RegisterTicketControllersEvent`](RegisterTicketControllersEvent.md) | class | Fired in order to register chunk TicketController ticket controllers. |
| [`TicketHelper`](TicketHelper.md) | class | Class to help mods remove no longer valid tickets. |
| [`TicketTracker`](TicketTracker.md) | class |  |

## common.extensions

| Class | Type | Description |
|-------|------|-------------|
| [`ContainerExtension`](ContainerExtension.md) | interface | Extension methods for Container. |
| [`GameTestHelperExtension`](GameTestHelperExtension.md) | interface | Additional functionality for net.minecraft.gametest.framework.GameTestHelper |
| [`IAbstractBoatExtension`](IAbstractBoatExtension.md) | interface |  |
| [`IAbstractMinecartExtension`](IAbstractMinecartExtension.md) | interface |  |
| [`IAdvancementBuilderExtension`](IAdvancementBuilderExtension.md) | interface |  |
| [`IAttributeExtension`](IAttributeExtension.md) | interface |  |
| [`IBaseRailBlockExtension`](IBaseRailBlockExtension.md) | interface |  |
| [`IBlockAndTintGetterExtension`](IBlockAndTintGetterExtension.md) | interface | Extension interface for BlockAndTintGetter. |
| [`IBlockEntityExtension`](IBlockEntityExtension.md) | interface |  |
| [`IBlockExtension`](IBlockExtension.md) | interface |  |
| [`IBlockGetterExtension`](IBlockGetterExtension.md) | interface |  |
| [`IBlockStateExtension`](IBlockStateExtension.md) | interface |  |
| [`IBoatExtension`](IBoatExtension.md) | interface |  |
| [`IBucketPickupExtension`](IBucketPickupExtension.md) | interface |  |
| [`IClientCommonPacketListenerExtension`](IClientCommonPacketListenerExtension.md) | interface | Extension interface for ClientCommonPacketListener |
| [`ICommandSourceStackExtension`](ICommandSourceStackExtension.md) | interface | Additional methods for CommandSourceStack so that commands and arguments can access various things w |
| [`ICommonPacketListener`](ICommonPacketListener.md) | interface | Extension interface and functionality hoist for both ServerCommonPacketListener
and ClientCommonPack |
| [`IDataComponentHolderExtension`](IDataComponentHolderExtension.md) | interface |  |
| [`IDataComponentMapBuilderExtensions`](IDataComponentMapBuilderExtensions.md) | interface |  |
| [`IDispensibleContainerItemExtension`](IDispensibleContainerItemExtension.md) | interface |  |
| [`IEnchantmentExtension`](IEnchantmentExtension.md) | interface |  |
| [`IEntityExtension`](IEntityExtension.md) | interface |  |
| [`IFallableExtension`](IFallableExtension.md) | interface |  |
| [`IFluidExtension`](IFluidExtension.md) | interface |  |
| [`IFluidStateExtension`](IFluidStateExtension.md) | interface |  |
| [`IFriendlyByteBufExtension`](IFriendlyByteBufExtension.md) | interface | Additional helper methods for FriendlyByteBuf. |
| [`IHolderExtension`](IHolderExtension.md) | interface | Extension for Holder |
| [`IHolderLookupProviderExtension`](IHolderLookupProviderExtension.md) | interface |  |
| [`IHolderSetExtension`](IHolderSetExtension.md) | interface |  |
| [`IIntrinsicHolderTagAppenderExtension`](IIntrinsicHolderTagAppenderExtension.md) | interface |  |
| [`IItemExtension`](IItemExtension.md) | interface |  |
| [`IItemPropertiesExtensions`](IItemPropertiesExtensions.md) | interface |  |
| [`IItemStackExtension`](IItemStackExtension.md) | interface |  |
| [`ILevelExtension`](ILevelExtension.md) | interface |  |
| [`ILevelReaderExtension`](ILevelReaderExtension.md) | interface |  |
| [`ILivingEntityExtension`](ILivingEntityExtension.md) | interface |  |
| [`IMenuProviderExtension`](IMenuProviderExtension.md) | interface | Extension type for the net.minecraft.world.MenuProvider interface. |
| [`IMenuTypeExtension`](IMenuTypeExtension.md) | interface |  |
| [`IMobEffectExtension`](IMobEffectExtension.md) | interface |  |
| [`IOwnedSpawner`](IOwnedSpawner.md) | interface |  |
| [`IPacketFlowExtension`](IPacketFlowExtension.md) | interface | Extension for PacketFlow to add some utility methods. |
| [`IPackResourcesExtension`](IPackResourcesExtension.md) | interface |  |
| [`IPlayerExtension`](IPlayerExtension.md) | interface |  |
| [`IPlayerListExtension`](IPlayerListExtension.md) | interface | Extension class for PlayerList
<p>
This interface with its default methods allows for easy sending o |
| [`IRecipeOutputExtension`](IRecipeOutputExtension.md) | interface | Extra methods for RecipeOutput. |
| [`IServerChunkCacheExtension`](IServerChunkCacheExtension.md) | interface | Extension class for ServerChunkCache
<p>
This interface with its default methods allows for easy sen |
| [`IServerCommonPacketListenerExtension`](IServerCommonPacketListenerExtension.md) | interface | Extension interface for ServerCommonPacketListener |
| [`IServerConfigurationPacketListenerExtension`](IServerConfigurationPacketListenerExtension.md) | interface | Extension class for ServerConfigurationPacketListener |
| [`IServerGamePacketListenerExtension`](IServerGamePacketListenerExtension.md) | interface | Extension class for ServerGamePacketListener |
| [`ITagAppenderExtension`](ITagAppenderExtension.md) | interface |  |
| [`ITagBuilderExtension`](ITagBuilderExtension.md) | interface |  |
| [`ItemInstanceExtension`](ItemInstanceExtension.md) | interface |  |
| [`ITransformationExtension`](ITransformationExtension.md) | interface | Extension interface for Transformation. |
| [`LootTableSubProviderExtension`](LootTableSubProviderExtension.md) | interface |  |
| [`SerializationType`](SerializationType.md) | enum |  |
| [`ValueInputExtension`](ValueInputExtension.md) | interface | Extension class for ValueInput |
| [`ValueOutputExtension`](ValueOutputExtension.md) | interface | Extension class for ValueOutput |

## common.enums

| Class | Type | Description |
|-------|------|-------------|
| [`BubbleColumnDirection`](BubbleColumnDirection.md) | enum |  |

## common.brewing

| Class | Type | Description |
|-------|------|-------------|
| [`BrewingRecipe`](BrewingRecipe.md) | class |  |
| [`IBrewingRecipe`](IBrewingRecipe.md) | interface | Interface for more flexible brewing recipes. |

## common.data

| Class | Type | Description |
|-------|------|-------------|
| [`AdvancementGenerator`](AdvancementGenerator.md) | interface |  |
| [`AdvancementProvider`](AdvancementProvider.md) | class | An extension of the vanilla AdvancementProvider to provide a feature-complete
experience to generate |
| [`DatapackBuiltinEntriesProvider`](DatapackBuiltinEntriesProvider.md) | class | An extension of the RegistriesDatapackGenerator which properly handles
referencing existing dynamic  |
| [`ExistingFileHelper`](ExistingFileHelper.md) | class | Enables data providers to check if other data files currently exist. |
| [`IResourceType`](IResourceType.md) | interface |  |
| [`ResourceType`](ResourceType.md) | class |  |

## data.fixes

| Class | Type | Description |
|-------|------|-------------|
| [`NeoForgeEntityLegacyAttributesFix`](NeoForgeEntityLegacyAttributesFix.md) | class |  |

## data.internal

| Class | Type | Description |
|-------|------|-------------|
| [`NeoForgeAdvancementProvider`](NeoForgeAdvancementProvider.md) | class |  |
| [`NeoForgeDataMapsProvider`](NeoForgeDataMapsProvider.md) | class |  |
| [`NeoForgeEntityTypeTagsProvider`](NeoForgeEntityTypeTagsProvider.md) | class |  |
| [`VanillaSoundDefinitionsProvider`](VanillaSoundDefinitionsProvider.md) | class |  |
