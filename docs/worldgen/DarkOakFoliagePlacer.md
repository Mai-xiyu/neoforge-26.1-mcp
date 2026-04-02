# DarkOakFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `FoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DarkOakFoliagePlacer>` |  |

## Methods

### DarkOakFoliagePlacer

```java
public DarkOakFoliagePlacer(IntProvider p_161384_, IntProvider p_161385_)
```

**Parameters:**

- `p_161384_` (`IntProvider`)
- `p_161385_` (`IntProvider`)

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
protected void createFoliage(LevelSimulatedReader p_225558_, FoliagePlacer.FoliageSetter p_273641_, RandomSource p_225560_, TreeConfiguration p_225561_, int p_225562_, FoliagePlacer.FoliageAttachment p_225563_, int p_225564_, int p_225565_, int p_225566_)
```

**Parameters:**

- `p_225558_` (`LevelSimulatedReader`)
- `p_273641_` (`FoliagePlacer.FoliageSetter`)
- `p_225560_` (`RandomSource`)
- `p_225561_` (`TreeConfiguration`)
- `p_225562_` (`int`)
- `p_225563_` (`FoliagePlacer.FoliageAttachment`)
- `p_225564_` (`int`)
- `p_225565_` (`int`)
- `p_225566_` (`int`)

### foliageHeight

```java
public int foliageHeight(RandomSource p_225554_, int p_225555_, TreeConfiguration p_225556_)
```

**Parameters:**

- `p_225554_` (`RandomSource`)
- `p_225555_` (`int`)
- `p_225556_` (`TreeConfiguration`)

**Returns:** `int`

### shouldSkipLocationSigned

```java
protected boolean shouldSkipLocationSigned(RandomSource p_225568_, int p_225569_, int p_225570_, int p_225571_, int p_225572_, boolean p_225573_)
```

**Parameters:**

- `p_225568_` (`RandomSource`)
- `p_225569_` (`int`)
- `p_225570_` (`int`)
- `p_225571_` (`int`)
- `p_225572_` (`int`)
- `p_225573_` (`boolean`)

**Returns:** `boolean`

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_225547_, int p_225548_, int p_225549_, int p_225550_, int p_225551_, boolean p_225552_)
```

**Parameters:**

- `p_225547_` (`RandomSource`)
- `p_225548_` (`int`)
- `p_225549_` (`int`)
- `p_225550_` (`int`)
- `p_225551_` (`int`)
- `p_225552_` (`boolean`)

**Returns:** `boolean`
