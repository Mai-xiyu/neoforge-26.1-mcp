# CherryFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `FoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CherryFoliagePlacer>` |  |

## Methods

### CherryFoliagePlacer

```java
public CherryFoliagePlacer(IntProvider p_272646_, IntProvider p_272802_, IntProvider p_273604_, float p_272737_, float p_273720_, float p_273152_, float p_273529_)
```

**Parameters:**

- `p_272646_` (`IntProvider`)
- `p_272802_` (`IntProvider`)
- `p_273604_` (`IntProvider`)
- `p_272737_` (`float`)
- `p_273720_` (`float`)
- `p_273152_` (`float`)
- `p_273529_` (`float`)

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
protected void createFoliage(LevelSimulatedReader p_272723_, FoliagePlacer.FoliageSetter p_273410_, RandomSource p_273057_, TreeConfiguration p_273220_, int p_272975_, FoliagePlacer.FoliageAttachment p_273037_, int p_273647_, int p_273700_, int p_273188_)
```

**Parameters:**

- `p_272723_` (`LevelSimulatedReader`)
- `p_273410_` (`FoliagePlacer.FoliageSetter`)
- `p_273057_` (`RandomSource`)
- `p_273220_` (`TreeConfiguration`)
- `p_272975_` (`int`)
- `p_273037_` (`FoliagePlacer.FoliageAttachment`)
- `p_273647_` (`int`)
- `p_273700_` (`int`)
- `p_273188_` (`int`)

### foliageHeight

```java
public int foliageHeight(RandomSource p_273679_, int p_273336_, TreeConfiguration p_273643_)
```

**Parameters:**

- `p_273679_` (`RandomSource`)
- `p_273336_` (`int`)
- `p_273643_` (`TreeConfiguration`)

**Returns:** `int`

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_273294_, int p_273380_, int p_272865_, int p_272853_, int p_272631_, boolean p_273432_)
```

**Parameters:**

- `p_273294_` (`RandomSource`)
- `p_273380_` (`int`)
- `p_272865_` (`int`)
- `p_272853_` (`int`)
- `p_272631_` (`int`)
- `p_273432_` (`boolean`)

**Returns:** `boolean`
