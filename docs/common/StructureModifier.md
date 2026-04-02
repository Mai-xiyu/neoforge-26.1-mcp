# StructureModifier

**Package:** `net.neoforged.neoforge.common.world`
**Type:** interface

## Description

JSON-serializable structure modifier.
Requires a `Codec` to deserialize structure modifiers from structure modifier jsons.



Structure modifier jsons have the following json format:

{
"type": "yourmod:yourserializer", // Indicates a registered structure modifier serializer
// Additional fields can be specified here according to the codec
}




Datapacks can also disable a structure modifier by overriding the json and using `"type": "neoforge:none"`.

## Methods

### modify

```java
void modify(Holder<Structure> structure, Phase phase, StructureInfo.Builder builder)
```

**Parameters:**

- `structure` (`Holder<Structure>`)
- `phase` (`Phase`)
- `builder` (`StructureInfo.Builder`)

### codec

```java
MapCodec<? extends StructureModifier> codec()
```

**Returns:** `MapCodec<? extends StructureModifier>`
