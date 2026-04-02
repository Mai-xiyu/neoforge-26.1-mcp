# NeoForgeRegistries

**Package:** `net.neoforged.neoforge.registries`
**Type:** class

## Description

A class that exposes static references to NeoForge registries.
It is still advised that you register things with `RegisterEvent` or `DeferredRegister`, but queries and iterations can use this.


Vanilla's registries can be found in `BuiltInRegistries`, and their keys in `Registries`.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ENTITY_DATA_SERIALIZERS` | `Registry<EntityDataSerializer<?>>` |  |
| `GLOBAL_LOOT_MODIFIER_SERIALIZERS` | `Registry<MapCodec<? extends IGlobalLootModifier>>` |  |
| `BIOME_MODIFIER_SERIALIZERS` | `Registry<MapCodec<? extends BiomeModifier>>` |  |
| `STRUCTURE_MODIFIER_SERIALIZERS` | `Registry<MapCodec<? extends StructureModifier>>` |  |
| `FLUID_TYPES` | `Registry<FluidType>` |  |
| `HOLDER_SET_TYPES` | `Registry<HolderSetType>` |  |
| `INGREDIENT_TYPES` | `Registry<IngredientType<?>>` |  |
| `FLUID_INGREDIENT_TYPES` | `Registry<FluidIngredientType<?>>` |  |
| `CONDITION_SERIALIZERS` | `Registry<MapCodec<? extends ICondition>>` |  |
| `ATTACHMENT_TYPES` | `Registry<AttachmentType<?>>` |  |
| `ENTITY_DATA_SERIALIZERS` | `ResourceKey<Registry<EntityDataSerializer<?>>>` |  |
| `GLOBAL_LOOT_MODIFIER_SERIALIZERS` | `ResourceKey<Registry<MapCodec<? extends IGlobalLootModifier>>>` |  |
| `BIOME_MODIFIER_SERIALIZERS` | `ResourceKey<Registry<MapCodec<? extends BiomeModifier>>>` |  |
| `STRUCTURE_MODIFIER_SERIALIZERS` | `ResourceKey<Registry<MapCodec<? extends StructureModifier>>>` |  |
| `FLUID_TYPES` | `ResourceKey<Registry<FluidType>>` |  |
| `HOLDER_SET_TYPES` | `ResourceKey<Registry<HolderSetType>>` |  |
| `INGREDIENT_TYPES` | `ResourceKey<Registry<IngredientType<?>>>` |  |
| `FLUID_INGREDIENT_TYPES` | `ResourceKey<Registry<FluidIngredientType<?>>>` |  |
| `CONDITION_CODECS` | `ResourceKey<Registry<MapCodec<? extends ICondition>>>` |  |
| `ATTACHMENT_TYPES` | `ResourceKey<Registry<AttachmentType<?>>>` |  |
| `BIOME_MODIFIERS` | `ResourceKey<Registry<BiomeModifier>>` |  |
| `STRUCTURE_MODIFIERS` | `ResourceKey<Registry<StructureModifier>>` |  |

## Methods

### key

```java
<T> private static <T> ResourceKey<Registry<T>> key(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `private static <T> ResourceKey<Registry<T>>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Keys` | class |  |
