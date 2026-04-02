# BiomeModifier

**Package:** `net.neoforged.neoforge.common.world`
**Type:** interface

## Description

JSON-serializable biome modifier.
Requires a `Codec` to deserialize biome modifiers from biome modifier jsons.



Biome modifier jsons have the following json format:

{
"type": "yourmod:yourserializer", // Indicates a registered biome modifier serializer
// Additional fields can be specified here according to the codec
}




Datapacks can also disable a biome modifier by overriding the json and using `"type": "neoforge:none"`.

## Methods

### modify

```java
void modify(Holder<Biome> biome, Phase phase, ModifiableBiomeInfo.BiomeInfo.Builder builder)
```

**Parameters:**

- `biome` (`Holder<Biome>`)
- `phase` (`Phase`)
- `builder` (`ModifiableBiomeInfo.BiomeInfo.Builder`)

### codec

```java
MapCodec<? extends BiomeModifier> codec()
```

**Returns:** `MapCodec<? extends BiomeModifier>`
