# LegacySinglePoolElement

**Package:** `net.minecraft.world.level.levelgen.structure.pools`
**Type:** class
**Extends:** `SinglePoolElement`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LegacySinglePoolElement>` |  |

## Methods

### LegacySinglePoolElement

```java
protected LegacySinglePoolElement(Either<ResourceLocation, StructureTemplate> p_210348_, Holder<StructureProcessorList> p_210349_, StructureTemplatePool.Projection p_210350_, Optional<LiquidSettings> p_352209_)
```

**Parameters:**

- `p_210348_` (`Either<ResourceLocation, StructureTemplate>`)
- `p_210349_` (`Holder<StructureProcessorList>`)
- `p_210350_` (`StructureTemplatePool.Projection`)
- `p_352209_` (`Optional<LiquidSettings>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getSettings

```java
protected StructurePlaceSettings getSettings(Rotation p_210353_, BoundingBox p_210354_, LiquidSettings p_352069_, boolean p_210355_)
```

**Parameters:**

- `p_210353_` (`Rotation`)
- `p_210354_` (`BoundingBox`)
- `p_352069_` (`LiquidSettings`)
- `p_210355_` (`boolean`)

**Returns:** `StructurePlaceSettings`

### getType

```java
public StructurePoolElementType<?> getType()
```

**Returns:** `StructurePoolElementType<?>`

### toString

```java
public String toString()
```

**Returns:** `String`
