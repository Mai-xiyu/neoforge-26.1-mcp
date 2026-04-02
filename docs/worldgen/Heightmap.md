# Heightmap

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class

## Methods

### Heightmap

```java
public Heightmap(ChunkAccess p_64237_, Heightmap.Types p_64238_)
```

**Parameters:**

- `p_64237_` (`ChunkAccess`)
- `p_64238_` (`Heightmap.Types`)

**Returns:** `public`

### primeHeightmaps

```java
public static void primeHeightmaps(ChunkAccess p_64257_, Set<Heightmap.Types> p_64258_)
```

**Parameters:**

- `p_64257_` (`ChunkAccess`)
- `p_64258_` (`Set<Heightmap.Types>`)

**Returns:** `public static void`

### update

```java
public boolean update(int p_64250_, int p_64251_, int p_64252_, BlockState p_64253_)
```

**Parameters:**

- `p_64250_` (`int`)
- `p_64251_` (`int`)
- `p_64252_` (`int`)
- `p_64253_` (`BlockState`)

**Returns:** `public boolean`

### getFirstAvailable

```java
public int getFirstAvailable(int p_64243_, int p_64244_)
```

**Parameters:**

- `p_64243_` (`int`)
- `p_64244_` (`int`)

**Returns:** `public int`

### getHighestTaken

```java
public int getHighestTaken(int p_158369_, int p_158370_)
```

**Parameters:**

- `p_158369_` (`int`)
- `p_158370_` (`int`)

**Returns:** `public int`

### getFirstAvailable

```java
private int getFirstAvailable(int p_64241_)
```

**Parameters:**

- `p_64241_` (`int`)

**Returns:** `private int`

### setHeight

```java
private void setHeight(int p_64246_, int p_64247_, int p_64248_)
```

**Parameters:**

- `p_64246_` (`int`)
- `p_64247_` (`int`)
- `p_64248_` (`int`)

**Returns:** `private void`

### setRawData

```java
public void setRawData(ChunkAccess p_158365_, Heightmap.Types p_158366_, long[] p_158367_)
```

**Parameters:**

- `p_158365_` (`ChunkAccess`)
- `p_158366_` (`Heightmap.Types`)
- `p_158367_` (`long[]`)

**Returns:** `public void`

### getRawData

```java
public long[] getRawData()
```

**Returns:** `public long[]`

### getIndex

```java
private static int getIndex(int p_64266_, int p_64267_)
```

**Parameters:**

- `p_64266_` (`int`)
- `p_64267_` (`int`)

**Returns:** `private static int`

### Types

```java
private Types(String p_64284_, Heightmap.Usage p_64285_, Predicate<BlockState> p_64286_)
```

**Parameters:**

- `p_64284_` (`String`)
- `p_64285_` (`Heightmap.Usage`)
- `p_64286_` (`Predicate<BlockState>`)

**Returns:** `private`

### getSerializationKey

```java
public String getSerializationKey()
```

**Returns:** `public String`

### sendToClient

```java
public boolean sendToClient()
```

**Returns:** `public boolean`

### keepAfterWorldgen

```java
public boolean keepAfterWorldgen()
```

**Returns:** `public boolean`

### isOpaque

```java
public Predicate<BlockState> isOpaque()
```

**Returns:** `public Predicate<BlockState>`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Types` | enum |  |
| `Usage` | enum |  |
