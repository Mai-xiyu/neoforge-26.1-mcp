# MultiNoiseBiomeSourceParameterList

**Package:** `net.minecraft.world.level.biome`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DIRECT_CODEC` | `Codec<MultiNoiseBiomeSourceParameterList>` |  |
| `CODEC` | `Codec<Holder<MultiNoiseBiomeSourceParameterList>>` |  |
| `NETHER` | `MultiNoiseBiomeSourceParameterList.Preset` |  |
| `OVERWORLD` | `MultiNoiseBiomeSourceParameterList.Preset` |  |
| `CODEC` | `Codec<MultiNoiseBiomeSourceParameterList.Preset>` |  |

## Methods

### MultiNoiseBiomeSourceParameterList

```java
public MultiNoiseBiomeSourceParameterList(MultiNoiseBiomeSourceParameterList.Preset p_275275_, HolderGetter<Biome> p_275192_)
```

**Parameters:**

- `p_275275_` (`MultiNoiseBiomeSourceParameterList.Preset`)
- `p_275192_` (`HolderGetter<Biome>`)

**Returns:** `public`

### parameters

```java
public Climate.ParameterList<Holder<Biome>> parameters()
```

**Returns:** `public Climate.ParameterList<Holder<Biome>>`

### knownPresets

```java
public static Map<MultiNoiseBiomeSourceParameterList.Preset, Climate.ParameterList<ResourceKey<Biome>>> knownPresets()
```

**Returns:** `public static Map<MultiNoiseBiomeSourceParameterList.Preset, Climate.ParameterList<ResourceKey<Biome>>>`

### Preset

```java
public static record Preset(ResourceLocation id, MultiNoiseBiomeSourceParameterList.Preset.SourceProvider provider)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `provider` (`MultiNoiseBiomeSourceParameterList.Preset.SourceProvider`)

**Returns:** `public static record`

### apply

```java
public <T> Climate.ParameterList<T> apply(Function<ResourceKey<Biome>, T> p_275356_)
```

**Parameters:**

- `p_275356_` (`Function<ResourceKey<Biome>, T>`)

**Returns:** `Climate.ParameterList<T>`

### apply

```java
public <T> Climate.ParameterList<T> apply(Function<ResourceKey<Biome>, T> p_275530_)
```

**Parameters:**

- `p_275530_` (`Function<ResourceKey<Biome>, T>`)

**Returns:** `Climate.ParameterList<T>`

### generateOverworldBiomes

```java
<T> static <T> Climate.ParameterList<T> generateOverworldBiomes(Function<ResourceKey<Biome>, T> p_277826_)
```

**Parameters:**

- `p_277826_` (`Function<ResourceKey<Biome>, T>`)

**Returns:** `static <T> Climate.ParameterList<T>`

### usedBiomes

```java
public Stream<ResourceKey<Biome>> usedBiomes()
```

**Returns:** `public Stream<ResourceKey<Biome>>`

### apply

```java
<T> <T> Climate.ParameterList<T> apply(Function<ResourceKey<Biome>, T> p_275485_)
```

**Parameters:**

- `p_275485_` (`Function<ResourceKey<Biome>, T>`)

**Returns:** `<T> Climate.ParameterList<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Preset` | record |  |
