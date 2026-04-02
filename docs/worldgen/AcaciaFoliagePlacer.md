# AcaciaFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `FoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AcaciaFoliagePlacer>` |  |

## Methods

### AcaciaFoliagePlacer

```java
public AcaciaFoliagePlacer(IntProvider p_161343_, IntProvider p_161344_)
```

**Parameters:**

- `p_161343_` (`IntProvider`)
- `p_161344_` (`IntProvider`)

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
protected void createFoliage(LevelSimulatedReader p_225499_, FoliagePlacer.FoliageSetter p_273746_, RandomSource p_225501_, TreeConfiguration p_225502_, int p_225503_, FoliagePlacer.FoliageAttachment p_225504_, int p_225505_, int p_225506_, int p_225507_)
```

**Parameters:**

- `p_225499_` (`LevelSimulatedReader`)
- `p_273746_` (`FoliagePlacer.FoliageSetter`)
- `p_225501_` (`RandomSource`)
- `p_225502_` (`TreeConfiguration`)
- `p_225503_` (`int`)
- `p_225504_` (`FoliagePlacer.FoliageAttachment`)
- `p_225505_` (`int`)
- `p_225506_` (`int`)
- `p_225507_` (`int`)

### foliageHeight

```java
public int foliageHeight(RandomSource p_225495_, int p_225496_, TreeConfiguration p_225497_)
```

**Parameters:**

- `p_225495_` (`RandomSource`)
- `p_225496_` (`int`)
- `p_225497_` (`TreeConfiguration`)

**Returns:** `int`

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_225488_, int p_225489_, int p_225490_, int p_225491_, int p_225492_, boolean p_225493_)
```

**Parameters:**

- `p_225488_` (`RandomSource`)
- `p_225489_` (`int`)
- `p_225490_` (`int`)
- `p_225491_` (`int`)
- `p_225492_` (`int`)
- `p_225493_` (`boolean`)

**Returns:** `boolean`
