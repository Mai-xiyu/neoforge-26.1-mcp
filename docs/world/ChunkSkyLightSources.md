# ChunkSkyLightSources

**Package:** `net.minecraft.world.level.lighting`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NEGATIVE_INFINITY` | `int` |  |

## Methods

### ChunkSkyLightSources

```java
public ChunkSkyLightSources(LevelHeightAccessor p_285502_)
```

**Parameters:**

- `p_285502_` (`LevelHeightAccessor`)

**Returns:** `public`

### fillFrom

```java
public void fillFrom(ChunkAccess p_285152_)
```

**Parameters:**

- `p_285152_` (`ChunkAccess`)

**Returns:** `public void`

### findLowestSourceY

```java
private int findLowestSourceY(ChunkAccess p_285214_, int p_285171_, int p_285021_, int p_285226_)
```

**Parameters:**

- `p_285214_` (`ChunkAccess`)
- `p_285171_` (`int`)
- `p_285021_` (`int`)
- `p_285226_` (`int`)

**Returns:** `private int`

### update

```java
public boolean update(BlockGetter p_285514_, int p_284999_, int p_285358_, int p_284944_)
```

**Parameters:**

- `p_285514_` (`BlockGetter`)
- `p_284999_` (`int`)
- `p_285358_` (`int`)
- `p_284944_` (`int`)

**Returns:** `public boolean`

### updateEdge

```java
private boolean updateEdge(BlockGetter p_285066_, int p_285184_, int p_285101_, BlockPos p_285446_, BlockState p_285185_, BlockPos p_285103_, BlockState p_285009_)
```

**Parameters:**

- `p_285066_` (`BlockGetter`)
- `p_285184_` (`int`)
- `p_285101_` (`int`)
- `p_285446_` (`BlockPos`)
- `p_285185_` (`BlockState`)
- `p_285103_` (`BlockPos`)
- `p_285009_` (`BlockState`)

**Returns:** `private boolean`

### findLowestSourceBelow

```java
private int findLowestSourceBelow(BlockGetter p_285279_, BlockPos p_285119_, BlockState p_285096_)
```

**Parameters:**

- `p_285279_` (`BlockGetter`)
- `p_285119_` (`BlockPos`)
- `p_285096_` (`BlockState`)

**Returns:** `private int`

### isEdgeOccluded

```java
private static boolean isEdgeOccluded(BlockGetter p_285329_, BlockPos p_285258_, BlockState p_285219_, BlockPos p_285288_, BlockState p_285512_)
```

**Parameters:**

- `p_285329_` (`BlockGetter`)
- `p_285258_` (`BlockPos`)
- `p_285219_` (`BlockState`)
- `p_285288_` (`BlockPos`)
- `p_285512_` (`BlockState`)

**Returns:** `private static boolean`

### getLowestSourceY

```java
public int getLowestSourceY(int p_285247_, int p_285082_)
```

**Parameters:**

- `p_285247_` (`int`)
- `p_285082_` (`int`)

**Returns:** `public int`

### getHighestLowestSourceY

```java
public int getHighestLowestSourceY()
```

**Returns:** `public int`

### fill

```java
private void fill(int p_285311_)
```

**Parameters:**

- `p_285311_` (`int`)

**Returns:** `private void`

### set

```java
private void set(int p_285323_, int p_285220_)
```

**Parameters:**

- `p_285323_` (`int`)
- `p_285220_` (`int`)

**Returns:** `private void`

### get

```java
private int get(int p_284951_)
```

**Parameters:**

- `p_284951_` (`int`)

**Returns:** `private int`

### extendSourcesBelowWorld

```java
private int extendSourcesBelowWorld(int p_284953_)
```

**Parameters:**

- `p_284953_` (`int`)

**Returns:** `private int`

### index

```java
private static int index(int p_284980_, int p_285277_)
```

**Parameters:**

- `p_284980_` (`int`)
- `p_285277_` (`int`)

**Returns:** `private static int`
