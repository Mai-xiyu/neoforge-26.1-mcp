# SpruceFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `FoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SpruceFoliagePlacer>` |  |

## Methods

### SpruceFoliagePlacer

```java
public SpruceFoliagePlacer(IntProvider p_161539_, IntProvider p_161540_, IntProvider p_161541_)
```

**Parameters:**

- `p_161539_` (`IntProvider`)
- `p_161540_` (`IntProvider`)
- `p_161541_` (`IntProvider`)

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
protected void createFoliage(LevelSimulatedReader p_225744_, FoliagePlacer.FoliageSetter p_273256_, RandomSource p_225746_, TreeConfiguration p_225747_, int p_225748_, FoliagePlacer.FoliageAttachment p_225749_, int p_225750_, int p_225751_, int p_225752_)
```

**Parameters:**

- `p_225744_` (`LevelSimulatedReader`)
- `p_273256_` (`FoliagePlacer.FoliageSetter`)
- `p_225746_` (`RandomSource`)
- `p_225747_` (`TreeConfiguration`)
- `p_225748_` (`int`)
- `p_225749_` (`FoliagePlacer.FoliageAttachment`)
- `p_225750_` (`int`)
- `p_225751_` (`int`)
- `p_225752_` (`int`)

### foliageHeight

```java
public int foliageHeight(RandomSource p_225740_, int p_225741_, TreeConfiguration p_225742_)
```

**Parameters:**

- `p_225740_` (`RandomSource`)
- `p_225741_` (`int`)
- `p_225742_` (`TreeConfiguration`)

**Returns:** `int`

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_225733_, int p_225734_, int p_225735_, int p_225736_, int p_225737_, boolean p_225738_)
```

**Parameters:**

- `p_225733_` (`RandomSource`)
- `p_225734_` (`int`)
- `p_225735_` (`int`)
- `p_225736_` (`int`)
- `p_225737_` (`int`)
- `p_225738_` (`boolean`)

**Returns:** `boolean`
