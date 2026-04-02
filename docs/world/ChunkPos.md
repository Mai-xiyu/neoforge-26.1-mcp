# ChunkPos

**Package:** `net.minecraft.world.level`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INVALID_CHUNK_POS` | `long` |  |
| `ZERO` | `ChunkPos` |  |
| `REGION_SIZE` | `int` |  |
| `REGION_MAX_INDEX` | `int` |  |
| `x` | `int` |  |
| `z` | `int` |  |

## Methods

### ChunkPos

```java
public ChunkPos(int p_45582_, int p_45583_)
```

**Parameters:**

- `p_45582_` (`int`)
- `p_45583_` (`int`)

**Returns:** `public`

### ChunkPos

```java
public ChunkPos(BlockPos p_45587_)
```

**Parameters:**

- `p_45587_` (`BlockPos`)

**Returns:** `public`

### ChunkPos

```java
public ChunkPos(long p_45585_)
```

**Parameters:**

- `p_45585_` (`long`)

**Returns:** `public`

### minFromRegion

```java
public static ChunkPos minFromRegion(int p_220338_, int p_220339_)
```

**Parameters:**

- `p_220338_` (`int`)
- `p_220339_` (`int`)

**Returns:** `public static ChunkPos`

### ChunkPos

```java
return new ChunkPos(p_220338_ << 5, p_220339_ << 5)
```

**Parameters:**

- `5` (`p_220338_ << 5, p_220339_ <<`)

**Returns:** `return new`

### maxFromRegion

```java
public static ChunkPos maxFromRegion(int p_220341_, int p_220342_)
```

**Parameters:**

- `p_220341_` (`int`)
- `p_220342_` (`int`)

**Returns:** `public static ChunkPos`

### toLong

```java
public long toLong()
```

**Returns:** `public long`

### asLong

```java
return asLong()
```

**Returns:** `return`

### asLong

```java
public static long asLong(int p_45590_, int p_45591_)
```

**Parameters:**

- `p_45590_` (`int`)
- `p_45591_` (`int`)

**Returns:** `public static long`

### asLong

```java
public static long asLong(BlockPos p_151389_)
```

**Parameters:**

- `p_151389_` (`BlockPos`)

**Returns:** `public static long`

### getX

```java
public static int getX(long p_45593_)
```

**Parameters:**

- `p_45593_` (`long`)

**Returns:** `public static int`

### getZ

```java
public static int getZ(long p_45603_)
```

**Parameters:**

- `p_45603_` (`long`)

**Returns:** `public static int`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### hash

```java
return hash()
```

**Returns:** `return`

### hash

```java
public static int hash(int p_220344_, int p_220345_)
```

**Parameters:**

- `p_220344_` (`int`)
- `p_220345_` (`int`)

**Returns:** `public static int`

### equals

```java
public boolean equals(Object p_45607_)
```

**Parameters:**

- `p_45607_` (`Object`)

**Returns:** `boolean`

### getMiddleBlockX

```java
public int getMiddleBlockX()
```

**Returns:** `public int`

### getMiddleBlockZ

```java
public int getMiddleBlockZ()
```

**Returns:** `public int`

### getMinBlockX

```java
public int getMinBlockX()
```

**Returns:** `public int`

### getMinBlockZ

```java
public int getMinBlockZ()
```

**Returns:** `public int`

### getMaxBlockX

```java
public int getMaxBlockX()
```

**Returns:** `public int`

### getMaxBlockZ

```java
public int getMaxBlockZ()
```

**Returns:** `public int`

### getRegionX

```java
public int getRegionX()
```

**Returns:** `public int`

### getRegionZ

```java
public int getRegionZ()
```

**Returns:** `public int`

### getRegionLocalX

```java
public int getRegionLocalX()
```

**Returns:** `public int`

### getRegionLocalZ

```java
public int getRegionLocalZ()
```

**Returns:** `public int`

### getBlockAt

```java
public BlockPos getBlockAt(int p_151385_, int p_151386_, int p_151387_)
```

**Parameters:**

- `p_151385_` (`int`)
- `p_151386_` (`int`)
- `p_151387_` (`int`)

**Returns:** `public BlockPos`

### getBlockX

```java
public int getBlockX(int p_151383_)
```

**Parameters:**

- `p_151383_` (`int`)

**Returns:** `public int`

### getBlockZ

```java
public int getBlockZ(int p_151392_)
```

**Parameters:**

- `p_151392_` (`int`)

**Returns:** `public int`

### getMiddleBlockPosition

```java
public BlockPos getMiddleBlockPosition(int p_151395_)
```

**Parameters:**

- `p_151395_` (`int`)

**Returns:** `public BlockPos`

### toString

```java
public String toString()
```

**Returns:** `String`

### getWorldPosition

```java
public BlockPos getWorldPosition()
```

**Returns:** `public BlockPos`

### getChessboardDistance

```java
public int getChessboardDistance(ChunkPos p_45595_)
```

**Parameters:**

- `p_45595_` (`ChunkPos`)

**Returns:** `public int`

### getChessboardDistance

```java
public int getChessboardDistance(int p_347518_, int p_347577_)
```

**Parameters:**

- `p_347518_` (`int`)
- `p_347577_` (`int`)

**Returns:** `public int`

### distanceSquared

```java
public int distanceSquared(ChunkPos p_296302_)
```

**Parameters:**

- `p_296302_` (`ChunkPos`)

**Returns:** `public int`

### distanceSquared

```java
public int distanceSquared(long p_294872_)
```

**Parameters:**

- `p_294872_` (`long`)

**Returns:** `public int`

### distanceSquared

```java
private int distanceSquared(int p_295272_, int p_296154_)
```

**Parameters:**

- `p_295272_` (`int`)
- `p_296154_` (`int`)

**Returns:** `private int`

### rangeClosed

```java
public static Stream<ChunkPos> rangeClosed(ChunkPos p_45597_, int p_45598_)
```

**Parameters:**

- `p_45597_` (`ChunkPos`)
- `p_45598_` (`int`)

**Returns:** `public static Stream<ChunkPos>`

### rangeClosed

```java
public static Stream<ChunkPos> rangeClosed(ChunkPos p_45600_, ChunkPos p_45601_)
```

**Parameters:**

- `p_45600_` (`ChunkPos`)
- `p_45601_` (`ChunkPos`)

**Returns:** `public static Stream<ChunkPos>`

### tryAdvance

```java
public boolean tryAdvance(Consumer<? super ChunkPos> p_45630_)
```

**Parameters:**

- `p_45630_` (`Consumer<? super ChunkPos>`)

**Returns:** `boolean`
