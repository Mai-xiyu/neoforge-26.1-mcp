# BiomeManager

**Package:** `net.minecraft.world.level.biome`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CHUNK_CENTER_QUART` | `int` |  |

## Methods

### BiomeManager

```java
public BiomeManager(BiomeManager.NoiseBiomeSource p_186677_, long p_186678_)
```

**Parameters:**

- `p_186677_` (`BiomeManager.NoiseBiomeSource`)
- `p_186678_` (`long`)

**Returns:** `public`

### obfuscateSeed

```java
public static long obfuscateSeed(long p_47878_)
```

**Parameters:**

- `p_47878_` (`long`)

**Returns:** `public static long`

### withDifferentSource

```java
public BiomeManager withDifferentSource(BiomeManager.NoiseBiomeSource p_186688_)
```

**Parameters:**

- `p_186688_` (`BiomeManager.NoiseBiomeSource`)

**Returns:** `public BiomeManager`

### BiomeManager

```java
return new BiomeManager()
```

**Returns:** `return new`

### getBiome

```java
public Holder<Biome> getBiome(BlockPos p_204215_)
```

**Parameters:**

- `p_204215_` (`BlockPos`)

**Returns:** `public Holder<Biome>`

### getNoiseBiomeAtPosition

```java
public Holder<Biome> getNoiseBiomeAtPosition(double p_204207_, double p_204208_, double p_204209_)
```

**Parameters:**

- `p_204207_` (`double`)
- `p_204208_` (`double`)
- `p_204209_` (`double`)

**Returns:** `public Holder<Biome>`

### getNoiseBiomeAtPosition

```java
public Holder<Biome> getNoiseBiomeAtPosition(BlockPos p_204217_)
```

**Parameters:**

- `p_204217_` (`BlockPos`)

**Returns:** `public Holder<Biome>`

### getNoiseBiomeAtQuart

```java
public Holder<Biome> getNoiseBiomeAtQuart(int p_204211_, int p_204212_, int p_204213_)
```

**Parameters:**

- `p_204211_` (`int`)
- `p_204212_` (`int`)
- `p_204213_` (`int`)

**Returns:** `public Holder<Biome>`

### getFiddledDistance

```java
private static double getFiddledDistance(long p_186680_, int p_186681_, int p_186682_, int p_186683_, double p_186684_, double p_186685_, double p_186686_)
```

**Parameters:**

- `p_186680_` (`long`)
- `p_186681_` (`int`)
- `p_186682_` (`int`)
- `p_186683_` (`int`)
- `p_186684_` (`double`)
- `p_186685_` (`double`)
- `p_186686_` (`double`)

**Returns:** `private static double`

### getFiddle

```java
private static double getFiddle(long p_186690_)
```

**Parameters:**

- `p_186690_` (`long`)

**Returns:** `private static double`

### getNoiseBiome

```java
Holder<Biome> getNoiseBiome(int p_204218_, int p_204219_, int p_204220_)
```

**Parameters:**

- `p_204218_` (`int`)
- `p_204219_` (`int`)
- `p_204220_` (`int`)

**Returns:** `Holder<Biome>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NoiseBiomeSource` | interface |  |
