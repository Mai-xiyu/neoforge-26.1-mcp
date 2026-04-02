# StructureTemplatePool

**Package:** `net.minecraft.world.level.levelgen.structure.pools`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DIRECT_CODEC` | `Codec<StructureTemplatePool>` |  |
| `CODEC` | `Codec<Holder<StructureTemplatePool>>` |  |
| `CODEC` | `StringRepresentable.EnumCodec<StructureTemplatePool.Projection>` |  |

## Methods

### StructureTemplatePool

```java
public StructureTemplatePool(Holder<StructureTemplatePool> p_255747_, List<Pair<StructurePoolElement, Integer>> p_255919_)
```

**Parameters:**

- `p_255747_` (`Holder<StructureTemplatePool>`)
- `p_255919_` (`List<Pair<StructurePoolElement, Integer>>`)

**Returns:** `public`

### StructureTemplatePool

```java
public StructureTemplatePool(Holder<StructureTemplatePool> p_255795_, List<Pair<Function<StructureTemplatePool.Projection, ? extends StructurePoolElement>, Integer>> p_256083_, StructureTemplatePool.Projection p_255642_)
```

**Parameters:**

- `p_255795_` (`Holder<StructureTemplatePool>`)
- `p_256083_` (`List<Pair<Function<StructureTemplatePool.Projection, ? extends StructurePoolElement>, Integer>>`)
- `p_255642_` (`StructureTemplatePool.Projection`)

**Returns:** `public`

### getMaxSize

```java
public int getMaxSize(StructureTemplateManager p_227358_)
```

**Parameters:**

- `p_227358_` (`StructureTemplateManager`)

**Returns:** `public int`

### getFallback

```java
public Holder<StructureTemplatePool> getFallback()
```

**Returns:** `public Holder<StructureTemplatePool>`

### getRandomTemplate

```java
public StructurePoolElement getRandomTemplate(RandomSource p_227356_)
```

**Parameters:**

- `p_227356_` (`RandomSource`)

**Returns:** `public StructurePoolElement`

### getShuffledTemplates

```java
public List<StructurePoolElement> getShuffledTemplates(RandomSource p_227363_)
```

**Parameters:**

- `p_227363_` (`RandomSource`)

**Returns:** `public List<StructurePoolElement>`

### size

```java
public int size()
```

**Returns:** `public int`

### Projection

```java
private Projection(String p_210602_, ImmutableList<StructureProcessor> p_210603_)
```

**Parameters:**

- `p_210602_` (`String`)
- `p_210603_` (`ImmutableList<StructureProcessor>`)

**Returns:** `private`

### getName

```java
public String getName()
```

**Returns:** `public String`

### byName

```java
public static StructureTemplatePool.Projection byName(String p_210608_)
```

**Parameters:**

- `p_210608_` (`String`)

**Returns:** `public static StructureTemplatePool.Projection`

### getProcessors

```java
public ImmutableList<StructureProcessor> getProcessors()
```

**Returns:** `public ImmutableList<StructureProcessor>`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Projection` | enum |  |
