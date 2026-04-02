# StructureSettingsBuilder

**Package:** `net.neoforged.neoforge.common.world`
**Type:** class

## Methods

### copyOf

```java
public static StructureSettingsBuilder copyOf(StructureSettings settings)
```

**Parameters:**

- `settings` (`StructureSettings`)

**Returns:** `StructureSettingsBuilder`

### StructureSettingsBuilder

```java
private StructureSettingsBuilder(HolderSet<Biome> biomes, Map<MobCategory, StructureSpawnOverride> spawnOverrides, GenerationStep.Decoration step, TerrainAdjustment terrainAdaptation)
```

**Parameters:**

- `biomes` (`HolderSet<Biome>`)
- `spawnOverrides` (`Map<MobCategory, StructureSpawnOverride>`)
- `step` (`GenerationStep.Decoration`)
- `terrainAdaptation` (`TerrainAdjustment`)

**Returns:** `private`

### build

```java
public StructureSettings build()
```

**Returns:** `StructureSettings`

### StructureSettings

```java
return new StructureSettings()
```

**Returns:** `return new`

### getBiomes

```java
public HolderSet<Biome> getBiomes()
```

**Returns:** `public HolderSet<Biome>`

### setBiomes

```java
public void setBiomes(HolderSet<Biome> biomes)
```

**Parameters:**

- `biomes` (`HolderSet<Biome>`)

**Returns:** `public void`

### getSpawnOverrides

```java
public StructureSpawnOverrideBuilder getSpawnOverrides(MobCategory category)
```

**Parameters:**

- `category` (`MobCategory`)

**Returns:** `StructureSpawnOverrideBuilder`

### getOrAddSpawnOverrides

```java
public StructureSpawnOverrideBuilder getOrAddSpawnOverrides(MobCategory category)
```

**Parameters:**

- `category` (`MobCategory`)

**Returns:** `StructureSpawnOverrideBuilder`

### removeSpawnOverrides

```java
public void removeSpawnOverrides(MobCategory category)
```

**Parameters:**

- `category` (`MobCategory`)

### getDecorationStep

```java
public GenerationStep.Decoration getDecorationStep()
```

**Returns:** `GenerationStep.Decoration`

### setDecorationStep

```java
public void setDecorationStep(GenerationStep.Decoration step)
```

**Parameters:**

- `step` (`GenerationStep.Decoration`)

### getTerrainAdaptation

```java
public TerrainAdjustment getTerrainAdaptation()
```

**Returns:** `TerrainAdjustment`

### setTerrainAdaptation

```java
public void setTerrainAdaptation(TerrainAdjustment terrainAdaptation)
```

**Parameters:**

- `terrainAdaptation` (`TerrainAdjustment`)

### copyOf

```java
public static StructureSpawnOverrideBuilder copyOf(StructureSpawnOverride override)
```

**Parameters:**

- `override` (`StructureSpawnOverride`)

**Returns:** `StructureSpawnOverrideBuilder`

### StructureSpawnOverrideBuilder

```java
private StructureSpawnOverrideBuilder(StructureSpawnOverride.BoundingBoxType boundingBox, List<MobSpawnSettings.SpawnerData> spawns)
```

**Parameters:**

- `boundingBox` (`StructureSpawnOverride.BoundingBoxType`)
- `spawns` (`List<MobSpawnSettings.SpawnerData>`)

**Returns:** `private`

### getBoundingBox

```java
public StructureSpawnOverride.BoundingBoxType getBoundingBox()
```

**Returns:** `StructureSpawnOverride.BoundingBoxType`

### setBoundingBox

```java
public void setBoundingBox(StructureSpawnOverride.BoundingBoxType boundingBox)
```

**Parameters:**

- `boundingBox` (`StructureSpawnOverride.BoundingBoxType`)

### getSpawns

```java
public List<MobSpawnSettings.SpawnerData> getSpawns()
```

**Returns:** `List<MobSpawnSettings.SpawnerData>`

### addSpawn

```java
public void addSpawn(MobSpawnSettings.SpawnerData spawn)
```

**Parameters:**

- `spawn` (`MobSpawnSettings.SpawnerData`)

### removeSpawn

```java
public void removeSpawn(MobSpawnSettings.SpawnerData spawn)
```

**Parameters:**

- `spawn` (`MobSpawnSettings.SpawnerData`)

### removeSpawns

```java
public void removeSpawns(Predicate<MobSpawnSettings.SpawnerData> spawnPredicate)
```

**Parameters:**

- `spawnPredicate` (`Predicate<MobSpawnSettings.SpawnerData>`)

**Returns:** `public void`

### build

```java
public StructureSpawnOverride build()
```

**Returns:** `StructureSpawnOverride`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `StructureSpawnOverrideBuilder` | class |  |
