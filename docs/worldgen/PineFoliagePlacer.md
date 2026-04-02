# PineFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `FoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<PineFoliagePlacer>` |  |

## Methods

### PineFoliagePlacer

```java
public PineFoliagePlacer(IntProvider p_161486_, IntProvider p_161487_, IntProvider p_161488_)
```

**Parameters:**

- `p_161486_` (`IntProvider`)
- `p_161487_` (`IntProvider`)
- `p_161488_` (`IntProvider`)

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
protected void createFoliage(LevelSimulatedReader p_225702_, FoliagePlacer.FoliageSetter p_272791_, RandomSource p_225704_, TreeConfiguration p_225705_, int p_225706_, FoliagePlacer.FoliageAttachment p_225707_, int p_225708_, int p_225709_, int p_225710_)
```

**Parameters:**

- `p_225702_` (`LevelSimulatedReader`)
- `p_272791_` (`FoliagePlacer.FoliageSetter`)
- `p_225704_` (`RandomSource`)
- `p_225705_` (`TreeConfiguration`)
- `p_225706_` (`int`)
- `p_225707_` (`FoliagePlacer.FoliageAttachment`)
- `p_225708_` (`int`)
- `p_225709_` (`int`)
- `p_225710_` (`int`)

### foliageRadius

```java
public int foliageRadius(RandomSource p_225688_, int p_225689_)
```

**Parameters:**

- `p_225688_` (`RandomSource`)
- `p_225689_` (`int`)

**Returns:** `int`

### foliageHeight

```java
public int foliageHeight(RandomSource p_225698_, int p_225699_, TreeConfiguration p_225700_)
```

**Parameters:**

- `p_225698_` (`RandomSource`)
- `p_225699_` (`int`)
- `p_225700_` (`TreeConfiguration`)

**Returns:** `int`

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_225691_, int p_225692_, int p_225693_, int p_225694_, int p_225695_, boolean p_225696_)
```

**Parameters:**

- `p_225691_` (`RandomSource`)
- `p_225692_` (`int`)
- `p_225693_` (`int`)
- `p_225694_` (`int`)
- `p_225695_` (`int`)
- `p_225696_` (`boolean`)

**Returns:** `boolean`
