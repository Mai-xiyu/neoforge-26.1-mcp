# Beardifier

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class
**Implements:** `DensityFunctions.BeardifierOrMarker`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BEARD_KERNEL_RADIUS` | `int` |  |
| `pieceIterator` | `ObjectListIterator<Beardifier.Rigid>` |  |
| `junctionIterator` | `ObjectListIterator<JigsawJunction>` |  |

## Methods

### forStructuresInChunk

```java
public static Beardifier forStructuresInChunk(StructureManager p_223938_, ChunkPos p_223939_)
```

**Parameters:**

- `p_223938_` (`StructureManager`)
- `p_223939_` (`ChunkPos`)

**Returns:** `public static Beardifier`

### Beardifier

```java
public public Beardifier(ObjectListIterator<Beardifier.Rigid> p_223917_, ObjectListIterator<JigsawJunction> p_223918_)
```

**Parameters:**

- `p_223917_` (`ObjectListIterator<Beardifier.Rigid>`)
- `p_223918_` (`ObjectListIterator<JigsawJunction>`)

**Returns:** `public`

### compute

```java
public double compute(DensityFunction.FunctionContext p_208200_)
```

**Parameters:**

- `p_208200_` (`DensityFunction.FunctionContext`)

**Returns:** `double`

### minValue

```java
public double minValue()
```

**Returns:** `double`

### maxValue

```java
public double maxValue()
```

**Returns:** `double`

### getBuryContribution

```java
protected static double getBuryContribution(double p_340947_, double p_340921_, double p_341266_)
```

**Parameters:**

- `p_340947_` (`double`)
- `p_340921_` (`double`)
- `p_341266_` (`double`)

**Returns:** `protected static double`

### getBeardContribution

```java
protected static double getBeardContribution(int p_223926_, int p_223927_, int p_223928_, int p_223929_)
```

**Parameters:**

- `p_223926_` (`int`)
- `p_223927_` (`int`)
- `p_223928_` (`int`)
- `p_223929_` (`int`)

**Returns:** `protected static double`

### isInKernelRange

```java
private static boolean isInKernelRange(int p_223920_)
```

**Parameters:**

- `p_223920_` (`int`)

**Returns:** `private static boolean`

### computeBeardContribution

```java
private static double computeBeardContribution(int p_158092_, int p_158093_, int p_158094_)
```

**Parameters:**

- `p_158092_` (`int`)
- `p_158093_` (`int`)
- `p_158094_` (`int`)

**Returns:** `private static double`

### computeBeardContribution

```java
private static double computeBeardContribution(int p_223922_, double p_223923_, int p_223924_)
```

**Parameters:**

- `p_223922_` (`int`)
- `p_223923_` (`double`)
- `p_223924_` (`int`)

**Returns:** `private static double`

### Rigid

```java
public static record Rigid(BoundingBox box, TerrainAdjustment terrainAdjustment, int groundLevelDelta)
```

**Parameters:**

- `box` (`BoundingBox`)
- `terrainAdjustment` (`TerrainAdjustment`)
- `groundLevelDelta` (`int`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Rigid` | record |  |
