# FlatLevelGeneratorSettings

**Package:** `net.minecraft.world.level.levelgen.flat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<FlatLevelGeneratorSettings>` |  |

## Methods

### validateHeight

```java
private static DataResult<FlatLevelGeneratorSettings> validateHeight(FlatLevelGeneratorSettings p_161906_)
```

**Parameters:**

- `p_161906_` (`FlatLevelGeneratorSettings`)

**Returns:** `private static DataResult<FlatLevelGeneratorSettings>`

### FlatLevelGeneratorSettings

```java
private FlatLevelGeneratorSettings(Optional<HolderSet<StructureSet>> p_256456_, List<FlatLayerInfo> p_255826_, boolean p_255740_, boolean p_255726_, Optional<Holder<Biome>> p_256292_, Holder.Reference<Biome> p_255964_, Holder<PlacedFeature> p_256419_, Holder<PlacedFeature> p_255710_)
```

**Parameters:**

- `p_256456_` (`Optional<HolderSet<StructureSet>>`)
- `p_255826_` (`List<FlatLayerInfo>`)
- `p_255740_` (`boolean`)
- `p_255726_` (`boolean`)
- `p_256292_` (`Optional<Holder<Biome>>`)
- `p_255964_` (`Holder.Reference<Biome>`)
- `p_256419_` (`Holder<PlacedFeature>`)
- `p_255710_` (`Holder<PlacedFeature>`)

**Returns:** `private`

### getBiome

```java
private static Holder<Biome> getBiome(Optional<? extends Holder<Biome>> p_256142_, Holder<Biome> p_256475_)
```

**Parameters:**

- `p_256142_` (`Optional<? extends Holder<Biome>>`)
- `p_256475_` (`Holder<Biome>`)

**Returns:** `private static Holder<Biome>`

### FlatLevelGeneratorSettings

```java
public FlatLevelGeneratorSettings(Optional<HolderSet<StructureSet>> p_256029_, Holder<Biome> p_256190_, List<Holder<PlacedFeature>> p_255960_)
```

**Parameters:**

- `p_256029_` (`Optional<HolderSet<StructureSet>>`)
- `p_256190_` (`Holder<Biome>`)
- `p_255960_` (`List<Holder<PlacedFeature>>`)

**Returns:** `public`

### withBiomeAndLayers

```java
public FlatLevelGeneratorSettings withBiomeAndLayers(List<FlatLayerInfo> p_256587_, Optional<HolderSet<StructureSet>> p_256500_, Holder<Biome> p_256598_)
```

**Parameters:**

- `p_256587_` (`List<FlatLayerInfo>`)
- `p_256500_` (`Optional<HolderSet<StructureSet>>`)
- `p_256598_` (`Holder<Biome>`)

**Returns:** `public FlatLevelGeneratorSettings`

### setDecoration

```java
public void setDecoration()
```

**Returns:** `public void`

### setAddLakes

```java
public void setAddLakes()
```

**Returns:** `public void`

### adjustGenerationSettings

```java
public BiomeGenerationSettings adjustGenerationSettings(Holder<Biome> p_226295_)
```

**Parameters:**

- `p_226295_` (`Holder<Biome>`)

**Returns:** `public BiomeGenerationSettings`

### structureOverrides

```java
public Optional<HolderSet<StructureSet>> structureOverrides()
```

**Returns:** `public Optional<HolderSet<StructureSet>>`

### getBiome

```java
public Holder<Biome> getBiome()
```

**Returns:** `public Holder<Biome>`

### getLayersInfo

```java
public List<FlatLayerInfo> getLayersInfo()
```

**Returns:** `public List<FlatLayerInfo>`

### getLayers

```java
public List<BlockState> getLayers()
```

**Returns:** `public List<BlockState>`

### updateLayers

```java
public void updateLayers()
```

**Returns:** `public void`

### getDefault

```java
public static FlatLevelGeneratorSettings getDefault(HolderGetter<Biome> p_256175_, HolderGetter<StructureSet> p_256081_, HolderGetter<PlacedFeature> p_256484_)
```

**Parameters:**

- `p_256175_` (`HolderGetter<Biome>`)
- `p_256081_` (`HolderGetter<StructureSet>`)
- `p_256484_` (`HolderGetter<PlacedFeature>`)

**Returns:** `public static FlatLevelGeneratorSettings`

### getDefaultBiome

```java
public static Holder<Biome> getDefaultBiome(HolderGetter<Biome> p_256645_)
```

**Parameters:**

- `p_256645_` (`HolderGetter<Biome>`)

**Returns:** `public static Holder<Biome>`

### createLakesList

```java
public static List<Holder<PlacedFeature>> createLakesList(HolderGetter<PlacedFeature> p_256282_)
```

**Parameters:**

- `p_256282_` (`HolderGetter<PlacedFeature>`)

**Returns:** `public static List<Holder<PlacedFeature>>`
