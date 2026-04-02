# RandomSpreadFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `FoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RandomSpreadFoliagePlacer>` |  |

## Methods

### RandomSpreadFoliagePlacer

```java
public RandomSpreadFoliagePlacer(IntProvider p_161506_, IntProvider p_161507_, IntProvider p_161508_, int p_161509_)
```

**Parameters:**

- `p_161506_` (`IntProvider`)
- `p_161507_` (`IntProvider`)
- `p_161508_` (`IntProvider`)
- `p_161509_` (`int`)

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
protected void createFoliage(LevelSimulatedReader p_225723_, FoliagePlacer.FoliageSetter p_272842_, RandomSource p_225725_, TreeConfiguration p_225726_, int p_225727_, FoliagePlacer.FoliageAttachment p_225728_, int p_225729_, int p_225730_, int p_225731_)
```

**Parameters:**

- `p_225723_` (`LevelSimulatedReader`)
- `p_272842_` (`FoliagePlacer.FoliageSetter`)
- `p_225725_` (`RandomSource`)
- `p_225726_` (`TreeConfiguration`)
- `p_225727_` (`int`)
- `p_225728_` (`FoliagePlacer.FoliageAttachment`)
- `p_225729_` (`int`)
- `p_225730_` (`int`)
- `p_225731_` (`int`)

### tryPlaceLeaf

```java
 tryPlaceLeaf()
```

**Returns:** ``

### foliageHeight

```java
public int foliageHeight(RandomSource p_225719_, int p_225720_, TreeConfiguration p_225721_)
```

**Parameters:**

- `p_225719_` (`RandomSource`)
- `p_225720_` (`int`)
- `p_225721_` (`TreeConfiguration`)

**Returns:** `int`

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_225712_, int p_225713_, int p_225714_, int p_225715_, int p_225716_, boolean p_225717_)
```

**Parameters:**

- `p_225712_` (`RandomSource`)
- `p_225713_` (`int`)
- `p_225714_` (`int`)
- `p_225715_` (`int`)
- `p_225716_` (`int`)
- `p_225717_` (`boolean`)

**Returns:** `boolean`
