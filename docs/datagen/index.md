# Datagen

This category contains 160 class(es).

## minecraft.data

| Class | Type | Description |
|-------|------|-------------|
| [`BlockFamilies`](BlockFamilies.md) | class |  |
| [`BlockFamily`](BlockFamily.md) | class |  |
| [`Builder`](Builder.md) | class |  |
| [`CachedOutput`](CachedOutput.md) | interface |  |
| [`DataGenerator`](DataGenerator.md) | class |  |
| [`DataProvider`](DataProvider.md) | interface |  |
| [`Factory`](Factory.md) | interface |  |
| [`HashCache`](HashCache.md) | class |  |
| [`Main`](Main.md) | class |  |
| [`PackGenerator`](PackGenerator.md) | class |  |
| [`PackOutput`](PackOutput.md) | class |  |
| [`PathProvider`](PathProvider.md) | class |  |
| [`Target`](Target.md) | enum |  |
| [`UpdateFunction`](UpdateFunction.md) | interface |  |
| [`UpdateResult`](UpdateResult.md) | record |  |
| [`Variant`](Variant.md) | enum |  |

## data.advancements

| Class | Type | Description |
|-------|------|-------------|
| [`AdvancementProvider`](AdvancementProvider.md) | class | @deprecated NeoForge: Use net.neoforged.neoforge.common.data.AdvancementProvider instead,
provides e |
| [`AdvancementSubProvider`](AdvancementSubProvider.md) | interface |  |

## advancements.packs

| Class | Type | Description |
|-------|------|-------------|
| [`VanillaAdvancementProvider`](VanillaAdvancementProvider.md) | class |  |
| [`VanillaAdventureAdvancements`](VanillaAdventureAdvancements.md) | class |  |
| [`VanillaHusbandryAdvancements`](VanillaHusbandryAdvancements.md) | class |  |
| [`VanillaNetherAdvancements`](VanillaNetherAdvancements.md) | class |  |
| [`VanillaStoryAdvancements`](VanillaStoryAdvancements.md) | class |  |
| [`VanillaTheEndAdvancements`](VanillaTheEndAdvancements.md) | class |  |

## data.info

| Class | Type | Description |
|-------|------|-------------|
| [`BiomeParametersDumpReport`](BiomeParametersDumpReport.md) | class |  |
| [`BlockListReport`](BlockListReport.md) | class |  |
| [`CommandsReport`](CommandsReport.md) | class |  |
| [`ItemListReport`](ItemListReport.md) | class |  |
| [`PacketReport`](PacketReport.md) | class |  |
| [`RegistryDumpReport`](RegistryDumpReport.md) | class |  |

## data.loot

| Class | Type | Description |
|-------|------|-------------|
| [`LootTableProvider`](LootTableProvider.md) | class |  |
| [`LootTableSubProvider`](LootTableSubProvider.md) | interface |  |
| [`SubProviderEntry`](SubProviderEntry.md) | record |  |

## loot.packs

| Class | Type | Description |
|-------|------|-------------|
| [`TradeRebalanceLootTableProvider`](TradeRebalanceLootTableProvider.md) | class |  |
| [`VanillaBlockLoot`](VanillaBlockLoot.md) | class |  |
| [`VanillaEntityLoot`](VanillaEntityLoot.md) | class |  |
| [`VanillaLootTableProvider`](VanillaLootTableProvider.md) | class |  |

## data.metadata

| Class | Type | Description |
|-------|------|-------------|
| [`PackMetadataGenerator`](PackMetadataGenerator.md) | class |  |

## data.models

| Class | Type | Description |
|-------|------|-------------|
| [`BlockModelGenerators`](BlockModelGenerators.md) | class |  |
| [`ItemModelGenerators`](ItemModelGenerators.md) | class |  |
| [`ModelProvider`](ModelProvider.md) | class |  |
| [`TrimModelData`](TrimModelData.md) | record |  |

## models.blockstates

| Class | Type | Description |
|-------|------|-------------|
| [`BlockStateGenerator`](BlockStateGenerator.md) | interface |  |
| [`CompositeCondition`](CompositeCondition.md) | class |  |
| [`Condition`](Condition.md) | interface |  |
| [`MultiPartGenerator`](MultiPartGenerator.md) | class |  |
| [`MultiVariantGenerator`](MultiVariantGenerator.md) | class |  |
| [`Operation`](Operation.md) | enum |  |
| [`Rotation`](Rotation.md) | enum |  |
| [`TerminalCondition`](TerminalCondition.md) | class |  |
| [`Value`](Value.md) | class |  |
| [`Variant`](Variant.md) | class |  |
| [`VariantProperties`](VariantProperties.md) | class |  |
| [`VariantProperty`](VariantProperty.md) | class |  |

## models.model

| Class | Type | Description |
|-------|------|-------------|
| [`DelegatedModel`](DelegatedModel.md) | class |  |
| [`JsonFactory`](JsonFactory.md) | interface |  |
| [`ModelLocationUtils`](ModelLocationUtils.md) | class |  |
| [`ModelTemplate`](ModelTemplate.md) | class |  |
| [`ModelTemplates`](ModelTemplates.md) | class |  |
| [`Provider`](Provider.md) | interface |  |
| [`TexturedModel`](TexturedModel.md) | class |  |
| [`TextureMapping`](TextureMapping.md) | class |  |

## data.recipes

| Class | Type | Description |
|-------|------|-------------|
| [`RecipeBuilder`](RecipeBuilder.md) | interface |  |
| [`RecipeCategory`](RecipeCategory.md) | enum |  |
| [`RecipeOutput`](RecipeOutput.md) | interface |  |
| [`ShapedRecipeBuilder`](ShapedRecipeBuilder.md) | class |  |
| [`ShapelessRecipeBuilder`](ShapelessRecipeBuilder.md) | class |  |
| [`SimpleCookingRecipeBuilder`](SimpleCookingRecipeBuilder.md) | class |  |
| [`SingleItemRecipeBuilder`](SingleItemRecipeBuilder.md) | class |  |
| [`SmithingTransformRecipeBuilder`](SmithingTransformRecipeBuilder.md) | class |  |
| [`SmithingTrimRecipeBuilder`](SmithingTrimRecipeBuilder.md) | class |  |
| [`SpecialRecipeBuilder`](SpecialRecipeBuilder.md) | class |  |

## recipes.packs

| Class | Type | Description |
|-------|------|-------------|
| [`BundleRecipeProvider`](BundleRecipeProvider.md) | class |  |
| [`TrimTemplate`](TrimTemplate.md) | record |  |
| [`VanillaRecipeProvider`](VanillaRecipeProvider.md) | class |  |

## data.registries

| Class | Type | Description |
|-------|------|-------------|
| [`RegistriesDatapackGenerator`](RegistriesDatapackGenerator.md) | class | @deprecated Forge: Use net.neoforged.neoforge.common.data.DatapackBuiltinEntriesProvider instead |
| [`RegistryPatchGenerator`](RegistryPatchGenerator.md) | class |  |
| [`TradeRebalanceRegistries`](TradeRebalanceRegistries.md) | class |  |
| [`VanillaRegistries`](VanillaRegistries.md) | class |  |

## data.structures

| Class | Type | Description |
|-------|------|-------------|
| [`Filter`](Filter.md) | interface |  |
| [`NbtToSnbt`](NbtToSnbt.md) | class |  |
| [`SnbtDatafixer`](SnbtDatafixer.md) | class |  |
| [`SnbtToNbt`](SnbtToNbt.md) | class |  |
| [`StructureUpdater`](StructureUpdater.md) | class |  |

## data.tags

| Class | Type | Description |
|-------|------|-------------|
| [`BannerPatternTagsProvider`](BannerPatternTagsProvider.md) | class |  |
| [`BiomeTagsProvider`](BiomeTagsProvider.md) | class |  |
| [`CatVariantTagsProvider`](CatVariantTagsProvider.md) | class |  |
| [`DamageTypeTagsProvider`](DamageTypeTagsProvider.md) | class |  |
| [`EntityTypeTagsProvider`](EntityTypeTagsProvider.md) | class |  |
| [`FlatLevelGeneratorPresetTagsProvider`](FlatLevelGeneratorPresetTagsProvider.md) | class |  |
| [`FluidTagsProvider`](FluidTagsProvider.md) | class |  |
| [`GameEventTagsProvider`](GameEventTagsProvider.md) | class |  |
| [`InstrumentTagsProvider`](InstrumentTagsProvider.md) | class |  |
| [`PaintingVariantTagsProvider`](PaintingVariantTagsProvider.md) | class |  |
| [`PoiTypeTagsProvider`](PoiTypeTagsProvider.md) | class |  |
| [`StructureTagsProvider`](StructureTagsProvider.md) | class |  |
| [`TradeRebalanceEnchantmentTagsProvider`](TradeRebalanceEnchantmentTagsProvider.md) | class |  |
| [`TradeRebalanceStructureTagsProvider`](TradeRebalanceStructureTagsProvider.md) | class |  |
| [`VanillaBlockTagsProvider`](VanillaBlockTagsProvider.md) | class |  |
| [`VanillaEnchantmentTagsProvider`](VanillaEnchantmentTagsProvider.md) | class |  |
| [`VanillaItemTagsProvider`](VanillaItemTagsProvider.md) | class |  |
| [`WorldPresetTagsProvider`](WorldPresetTagsProvider.md) | class |  |

## data.worldgen

| Class | Type | Description |
|-------|------|-------------|
| [`AncientCityStructurePieces`](AncientCityStructurePieces.md) | class |  |
| [`AncientCityStructurePools`](AncientCityStructurePools.md) | class |  |
| [`BastionBridgePools`](BastionBridgePools.md) | class |  |
| [`BastionHoglinStablePools`](BastionHoglinStablePools.md) | class |  |
| [`BastionHousingUnitsPools`](BastionHousingUnitsPools.md) | class |  |
| [`BastionPieces`](BastionPieces.md) | class |  |
| [`BastionSharedPools`](BastionSharedPools.md) | class |  |
| [`BastionTreasureRoomPools`](BastionTreasureRoomPools.md) | class |  |
| [`BiomeDefaultFeatures`](BiomeDefaultFeatures.md) | class |  |
| [`BootstrapContext`](BootstrapContext.md) | interface |  |
| [`Carvers`](Carvers.md) | class |  |
| [`DesertVillagePools`](DesertVillagePools.md) | class |  |
| [`DimensionTypes`](DimensionTypes.md) | class |  |
| [`NoiseData`](NoiseData.md) | class |  |
| [`PillagerOutpostPools`](PillagerOutpostPools.md) | class |  |
| [`PlainVillagePools`](PlainVillagePools.md) | class |  |
| [`Pools`](Pools.md) | class |  |
| [`ProcessorLists`](ProcessorLists.md) | class |  |
| [`SavannaVillagePools`](SavannaVillagePools.md) | class |  |
| [`SnowyVillagePools`](SnowyVillagePools.md) | class |  |
| [`Structures`](Structures.md) | class |  |
| [`StructureSets`](StructureSets.md) | interface |  |
| [`SurfaceRuleData`](SurfaceRuleData.md) | class |  |
| [`TaigaVillagePools`](TaigaVillagePools.md) | class |  |
| [`TerrainProvider`](TerrainProvider.md) | class |  |
| [`TrailRuinsStructurePools`](TrailRuinsStructurePools.md) | class |  |
| [`TrialChambersStructurePools`](TrialChambersStructurePools.md) | class |  |
| [`VillagePools`](VillagePools.md) | class |  |

## worldgen.biome

| Class | Type | Description |
|-------|------|-------------|
| [`EndBiomes`](EndBiomes.md) | class |  |
| [`NetherBiomes`](NetherBiomes.md) | class |  |
| [`OverworldBiomes`](OverworldBiomes.md) | class |  |

## worldgen.features

| Class | Type | Description |
|-------|------|-------------|
| [`AquaticFeatures`](AquaticFeatures.md) | class |  |
| [`CaveFeatures`](CaveFeatures.md) | class |  |
| [`EndFeatures`](EndFeatures.md) | class |  |
| [`FeatureUtils`](FeatureUtils.md) | class |  |
| [`MiscOverworldFeatures`](MiscOverworldFeatures.md) | class |  |
| [`NetherFeatures`](NetherFeatures.md) | class |  |
| [`OreFeatures`](OreFeatures.md) | class |  |
| [`PileFeatures`](PileFeatures.md) | class |  |
| [`TreeFeatures`](TreeFeatures.md) | class |  |
| [`VegetationFeatures`](VegetationFeatures.md) | class |  |

## worldgen.placement

| Class | Type | Description |
|-------|------|-------------|
| [`AquaticPlacements`](AquaticPlacements.md) | class |  |
| [`CavePlacements`](CavePlacements.md) | class |  |
| [`EndPlacements`](EndPlacements.md) | class |  |
| [`MiscOverworldPlacements`](MiscOverworldPlacements.md) | class |  |
| [`NetherPlacements`](NetherPlacements.md) | class |  |
| [`OrePlacements`](OrePlacements.md) | class |  |
| [`PlacementUtils`](PlacementUtils.md) | class |  |
| [`TreePlacements`](TreePlacements.md) | class |  |
| [`VegetationPlacements`](VegetationPlacements.md) | class |  |
| [`VillagePlacements`](VillagePlacements.md) | class |  |

## data.loading

| Class | Type | Description |
|-------|------|-------------|
| [`DatagenModLoader`](DatagenModLoader.md) | class |  |

## data.event

| Class | Type | Description |
|-------|------|-------------|
| [`DataGeneratorConfig`](DataGeneratorConfig.md) | class |  |
| [`DataProviderFromOutput`](DataProviderFromOutput.md) | interface |  |
| [`DataProviderFromOutputLookup`](DataProviderFromOutputLookup.md) | interface |  |
| [`GatherDataEvent`](GatherDataEvent.md) | class |  |
| [`GatherDataEventGenerator`](GatherDataEventGenerator.md) | interface |  |
| [`ItemTagsProvider`](ItemTagsProvider.md) | interface |  |
