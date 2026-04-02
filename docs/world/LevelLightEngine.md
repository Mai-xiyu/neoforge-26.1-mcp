# LevelLightEngine

**Package:** `net.minecraft.world.level.lighting`
**Type:** class
**Implements:** `LightEventListener`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LIGHT_SECTION_PADDING` | `int` |  |
| `levelHeightAccessor` | `LevelHeightAccessor` |  |

## Methods

### LevelLightEngine

```java
public LevelLightEngine(LightChunkGetter p_75805_, boolean p_75806_, boolean p_75807_)
```

**Parameters:**

- `p_75805_` (`LightChunkGetter`)
- `p_75806_` (`boolean`)
- `p_75807_` (`boolean`)

**Returns:** `public`

### checkBlock

```java
public void checkBlock(BlockPos p_75823_)
```

**Parameters:**

- `p_75823_` (`BlockPos`)

### hasLightWork

```java
public boolean hasLightWork()
```

**Returns:** `boolean`

### runLightUpdates

```java
public int runLightUpdates()
```

**Returns:** `int`

### updateSectionStatus

```java
public void updateSectionStatus(SectionPos p_75827_, boolean p_75828_)
```

**Parameters:**

- `p_75827_` (`SectionPos`)
- `p_75828_` (`boolean`)

### setLightEnabled

```java
public void setLightEnabled(ChunkPos p_285439_, boolean p_285012_)
```

**Parameters:**

- `p_285439_` (`ChunkPos`)
- `p_285012_` (`boolean`)

### propagateLightSources

```java
public void propagateLightSources(ChunkPos p_284998_)
```

**Parameters:**

- `p_284998_` (`ChunkPos`)

### getLayerListener

```java
public LayerLightEventListener getLayerListener(LightLayer p_75815_)
```

**Parameters:**

- `p_75815_` (`LightLayer`)

**Returns:** `public LayerLightEventListener`

### getDebugData

```java
public String getDebugData(LightLayer p_75817_, SectionPos p_75818_)
```

**Parameters:**

- `p_75817_` (`LightLayer`)
- `p_75818_` (`SectionPos`)

**Returns:** `public String`

### getDebugSectionType

```java
public LayerLightSectionStorage.SectionType getDebugSectionType(LightLayer p_285008_, SectionPos p_285336_)
```

**Parameters:**

- `p_285008_` (`LightLayer`)
- `p_285336_` (`SectionPos`)

**Returns:** `public LayerLightSectionStorage.SectionType`

### queueSectionData

```java
public void queueSectionData(LightLayer p_285328_, SectionPos p_284962_, DataLayer p_285035_)
```

**Parameters:**

- `p_285328_` (`LightLayer`)
- `p_284962_` (`SectionPos`)
- `p_285035_` (`DataLayer`)

**Returns:** `public void`

### retainData

```java
public void retainData(ChunkPos p_75829_, boolean p_75830_)
```

**Parameters:**

- `p_75829_` (`ChunkPos`)
- `p_75830_` (`boolean`)

**Returns:** `public void`

### getRawBrightness

```java
public int getRawBrightness(BlockPos p_75832_, int p_75833_)
```

**Parameters:**

- `p_75832_` (`BlockPos`)
- `p_75833_` (`int`)

**Returns:** `public int`

### lightOnInSection

```java
public boolean lightOnInSection(SectionPos p_285319_)
```

**Parameters:**

- `p_285319_` (`SectionPos`)

**Returns:** `public boolean`

### getLightSectionCount

```java
public int getLightSectionCount()
```

**Returns:** `public int`

### getMinLightSection

```java
public int getMinLightSection()
```

**Returns:** `public int`

### getMaxLightSection

```java
public int getMaxLightSection()
```

**Returns:** `public int`
