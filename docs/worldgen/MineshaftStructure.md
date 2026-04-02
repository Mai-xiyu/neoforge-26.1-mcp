# MineshaftStructure

**Package:** `net.minecraft.world.level.levelgen.structure.structures`
**Type:** class
**Extends:** `Structure`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MineshaftStructure>` |  |
| `CODEC` | `Codec<MineshaftStructure.Type>` |  |

## Methods

### MineshaftStructure

```java
public MineshaftStructure(Structure.StructureSettings p_227961_, MineshaftStructure.Type p_227962_)
```

**Parameters:**

- `p_227961_` (`Structure.StructureSettings`)
- `p_227962_` (`MineshaftStructure.Type`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### findGenerationPoint

```java
public Optional<Structure.GenerationStub> findGenerationPoint(Structure.GenerationContext p_227964_)
```

**Parameters:**

- `p_227964_` (`Structure.GenerationContext`)

**Returns:** `Optional<Structure.GenerationStub>`

### generatePiecesAndAdjust

```java
private int generatePiecesAndAdjust(StructurePiecesBuilder p_227966_, Structure.GenerationContext p_227967_)
```

**Parameters:**

- `p_227966_` (`StructurePiecesBuilder`)
- `p_227967_` (`Structure.GenerationContext`)

**Returns:** `private int`

### type

```java
public StructureType<?> type()
```

**Returns:** `StructureType<?>`

### MESA

```java
, MESA()
```

**Returns:** `,`

### Type

```java
private Type(String p_227985_, Block p_227986_, Block p_227987_, Block p_227988_)
```

**Parameters:**

- `p_227985_` (`String`)
- `p_227986_` (`Block`)
- `p_227987_` (`Block`)
- `p_227988_` (`Block`)

**Returns:** `private`

### getName

```java
public String getName()
```

**Returns:** `public String`

### byId

```java
public static MineshaftStructure.Type byId(int p_227991_)
```

**Parameters:**

- `p_227991_` (`int`)

**Returns:** `public static MineshaftStructure.Type`

### getWoodState

```java
public BlockState getWoodState()
```

**Returns:** `public BlockState`

### getPlanksState

```java
public BlockState getPlanksState()
```

**Returns:** `public BlockState`

### getFenceState

```java
public BlockState getFenceState()
```

**Returns:** `public BlockState`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
