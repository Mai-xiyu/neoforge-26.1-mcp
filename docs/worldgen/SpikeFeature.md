# SpikeFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<SpikeConfiguration>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NUMBER_OF_SPIKES` | `int` |  |

## Methods

### SpikeFeature

```java
public SpikeFeature(Codec<SpikeConfiguration> p_66852_)
```

**Parameters:**

- `p_66852_` (`Codec<SpikeConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSpikesForLevel

```java
public static List<SpikeFeature.EndSpike> getSpikesForLevel(WorldGenLevel p_66859_)
```

**Parameters:**

- `p_66859_` (`WorldGenLevel`)

**Returns:** `public static List<SpikeFeature.EndSpike>`

### place

```java
public boolean place(FeaturePlaceContext<SpikeConfiguration> p_160372_)
```

**Parameters:**

- `p_160372_` (`FeaturePlaceContext<SpikeConfiguration>`)

**Returns:** `boolean`

### placeSpike

```java
private void placeSpike(ServerLevelAccessor p_225247_, RandomSource p_225248_, SpikeConfiguration p_225249_, SpikeFeature.EndSpike p_225250_)
```

**Parameters:**

- `p_225247_` (`ServerLevelAccessor`)
- `p_225248_` (`RandomSource`)
- `p_225249_` (`SpikeConfiguration`)
- `p_225250_` (`SpikeFeature.EndSpike`)

**Returns:** `private void`

### EndSpike

```java
public EndSpike(int p_66881_, int p_66882_, int p_66883_, int p_66884_, boolean p_66885_)
```

**Parameters:**

- `p_66881_` (`int`)
- `p_66882_` (`int`)
- `p_66883_` (`int`)
- `p_66884_` (`int`)
- `p_66885_` (`boolean`)

**Returns:** `public`

### isCenterWithinChunk

```java
public boolean isCenterWithinChunk(BlockPos p_66892_)
```

**Parameters:**

- `p_66892_` (`BlockPos`)

**Returns:** `public boolean`

### getCenterX

```java
public int getCenterX()
```

**Returns:** `public int`

### getCenterZ

```java
public int getCenterZ()
```

**Returns:** `public int`

### getRadius

```java
public int getRadius()
```

**Returns:** `public int`

### getHeight

```java
public int getHeight()
```

**Returns:** `public int`

### isGuarded

```java
public boolean isGuarded()
```

**Returns:** `public boolean`

### getTopBoundingBox

```java
public AABB getTopBoundingBox()
```

**Returns:** `public AABB`

### load

```java
public List<SpikeFeature.EndSpike> load(Long p_66910_)
```

**Parameters:**

- `p_66910_` (`Long`)

**Returns:** `public List<SpikeFeature.EndSpike>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EndSpike` | class |  |
