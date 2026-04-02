# LevelHeightAccessor

**Package:** `net.minecraft.world.level`
**Type:** interface

## Methods

### getHeight

```java
int getHeight()
```

**Returns:** `int`

### getMinBuildHeight

```java
int getMinBuildHeight()
```

**Returns:** `int`

### getMaxBuildHeight

```java
default int getMaxBuildHeight()
```

**Returns:** `default int`

### getSectionsCount

```java
default int getSectionsCount()
```

**Returns:** `default int`

### getMinSection

```java
default int getMinSection()
```

**Returns:** `default int`

### getMaxSection

```java
default int getMaxSection()
```

**Returns:** `default int`

### isOutsideBuildHeight

```java
default boolean isOutsideBuildHeight(BlockPos p_151571_)
```

**Parameters:**

- `p_151571_` (`BlockPos`)

**Returns:** `default boolean`

### isOutsideBuildHeight

```java
default boolean isOutsideBuildHeight(int p_151563_)
```

**Parameters:**

- `p_151563_` (`int`)

**Returns:** `default boolean`

### getSectionIndex

```java
default int getSectionIndex(int p_151565_)
```

**Parameters:**

- `p_151565_` (`int`)

**Returns:** `default int`

### getSectionIndexFromSectionY

```java
default int getSectionIndexFromSectionY(int p_151567_)
```

**Parameters:**

- `p_151567_` (`int`)

**Returns:** `default int`

### getSectionYFromSectionIndex

```java
default int getSectionYFromSectionIndex(int p_151569_)
```

**Parameters:**

- `p_151569_` (`int`)

**Returns:** `default int`

### create

```java
static LevelHeightAccessor create(int p_186488_, int p_186489_)
```

**Parameters:**

- `p_186488_` (`int`)
- `p_186489_` (`int`)

**Returns:** `static LevelHeightAccessor`

### LevelHeightAccessor

```java
return new LevelHeightAccessor()
```

**Returns:** `return new`

### getHeight

```java
public int getHeight()
```

**Returns:** `int`

### getMinBuildHeight

```java
public int getMinBuildHeight()
```

**Returns:** `int`
