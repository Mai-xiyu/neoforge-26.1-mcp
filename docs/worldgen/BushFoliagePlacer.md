# BushFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `BlobFoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<BushFoliagePlacer>` |  |

## Methods

### BushFoliagePlacer

```java
public BushFoliagePlacer(IntProvider p_161370_, IntProvider p_161371_, int p_161372_)
```

**Parameters:**

- `p_161370_` (`IntProvider`)
- `p_161371_` (`IntProvider`)
- `p_161372_` (`int`)

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
protected void createFoliage(LevelSimulatedReader p_273251_, FoliagePlacer.FoliageSetter p_273782_, RandomSource p_273626_, TreeConfiguration p_272956_, int p_273384_, FoliagePlacer.FoliageAttachment p_273459_, int p_273161_, int p_272989_, int p_273166_)
```

**Parameters:**

- `p_273251_` (`LevelSimulatedReader`)
- `p_273782_` (`FoliagePlacer.FoliageSetter`)
- `p_273626_` (`RandomSource`)
- `p_272956_` (`TreeConfiguration`)
- `p_273384_` (`int`)
- `p_273459_` (`FoliagePlacer.FoliageAttachment`)
- `p_273161_` (`int`)
- `p_272989_` (`int`)
- `p_273166_` (`int`)

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_225530_, int p_225531_, int p_225532_, int p_225533_, int p_225534_, boolean p_225535_)
```

**Parameters:**

- `p_225530_` (`RandomSource`)
- `p_225531_` (`int`)
- `p_225532_` (`int`)
- `p_225533_` (`int`)
- `p_225534_` (`int`)
- `p_225535_` (`boolean`)

**Returns:** `boolean`
