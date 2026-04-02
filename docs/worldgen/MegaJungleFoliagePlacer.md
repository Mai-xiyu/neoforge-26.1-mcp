# MegaJungleFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `FoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MegaJungleFoliagePlacer>` |  |
| `height` | `int` |  |

## Methods

### MegaJungleFoliagePlacer

```java
public MegaJungleFoliagePlacer(IntProvider p_161454_, IntProvider p_161455_, int p_161456_)
```

**Parameters:**

- `p_161454_` (`IntProvider`)
- `p_161455_` (`IntProvider`)
- `p_161456_` (`int`)

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
protected void createFoliage(LevelSimulatedReader p_225657_, FoliagePlacer.FoliageSetter p_273447_, RandomSource p_225659_, TreeConfiguration p_225660_, int p_225661_, FoliagePlacer.FoliageAttachment p_225662_, int p_225663_, int p_225664_, int p_225665_)
```

**Parameters:**

- `p_225657_` (`LevelSimulatedReader`)
- `p_273447_` (`FoliagePlacer.FoliageSetter`)
- `p_225659_` (`RandomSource`)
- `p_225660_` (`TreeConfiguration`)
- `p_225661_` (`int`)
- `p_225662_` (`FoliagePlacer.FoliageAttachment`)
- `p_225663_` (`int`)
- `p_225664_` (`int`)
- `p_225665_` (`int`)

### foliageHeight

```java
public int foliageHeight(RandomSource p_225653_, int p_225654_, TreeConfiguration p_225655_)
```

**Parameters:**

- `p_225653_` (`RandomSource`)
- `p_225654_` (`int`)
- `p_225655_` (`TreeConfiguration`)

**Returns:** `int`

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_225646_, int p_225647_, int p_225648_, int p_225649_, int p_225650_, boolean p_225651_)
```

**Parameters:**

- `p_225646_` (`RandomSource`)
- `p_225647_` (`int`)
- `p_225648_` (`int`)
- `p_225649_` (`int`)
- `p_225650_` (`int`)
- `p_225651_` (`boolean`)

**Returns:** `boolean`
