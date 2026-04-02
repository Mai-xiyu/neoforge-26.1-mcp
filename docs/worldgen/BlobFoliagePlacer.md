# BlobFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `FoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BlobFoliagePlacer>` |  |
| `height` | `int` |  |

## Methods

### blobParts

```java
<P extends BlobFoliagePlacer> protected static <P extends BlobFoliagePlacer> P3<Mu<P>, IntProvider, IntProvider, Integer> blobParts(Instance<P> p_68414_)
```

**Parameters:**

- `p_68414_` (`Instance<P>`)

**Returns:** `protected static <P extends BlobFoliagePlacer> P3<Mu<P>, IntProvider, IntProvider, Integer>`

### BlobFoliagePlacer

```java
public BlobFoliagePlacer(IntProvider p_161356_, IntProvider p_161357_, int p_161358_)
```

**Parameters:**

- `p_161356_` (`IntProvider`)
- `p_161357_` (`IntProvider`)
- `p_161358_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### type

```java
protected FoliagePlacerType<?> type()
```

**Returns:** `FoliagePlacerType<?>`

### createFoliage

```java
protected void createFoliage(LevelSimulatedReader p_273066_, FoliagePlacer.FoliageSetter p_272716_, RandomSource p_273178_, TreeConfiguration p_272850_, int p_273067_, FoliagePlacer.FoliageAttachment p_273711_, int p_273580_, int p_273511_, int p_273685_)
```

**Parameters:**

- `p_273066_` (`LevelSimulatedReader`)
- `p_272716_` (`FoliagePlacer.FoliageSetter`)
- `p_273178_` (`RandomSource`)
- `p_272850_` (`TreeConfiguration`)
- `p_273067_` (`int`)
- `p_273711_` (`FoliagePlacer.FoliageAttachment`)
- `p_273580_` (`int`)
- `p_273511_` (`int`)
- `p_273685_` (`int`)

### foliageHeight

```java
public int foliageHeight(RandomSource p_225516_, int p_225517_, TreeConfiguration p_225518_)
```

**Parameters:**

- `p_225516_` (`RandomSource`)
- `p_225517_` (`int`)
- `p_225518_` (`TreeConfiguration`)

**Returns:** `int`

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_225509_, int p_225510_, int p_225511_, int p_225512_, int p_225513_, boolean p_225514_)
```

**Parameters:**

- `p_225509_` (`RandomSource`)
- `p_225510_` (`int`)
- `p_225511_` (`int`)
- `p_225512_` (`int`)
- `p_225513_` (`int`)
- `p_225514_` (`boolean`)

**Returns:** `boolean`
