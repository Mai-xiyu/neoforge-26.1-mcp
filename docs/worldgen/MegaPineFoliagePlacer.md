# MegaPineFoliagePlacer

**Package:** `net.minecraft.world.level.levelgen.feature.foliageplacers`
**Type:** class
**Extends:** `FoliagePlacer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MegaPineFoliagePlacer>` |  |

## Methods

### MegaPineFoliagePlacer

```java
public MegaPineFoliagePlacer(IntProvider p_161470_, IntProvider p_161471_, IntProvider p_161472_)
```

**Parameters:**

- `p_161470_` (`IntProvider`)
- `p_161471_` (`IntProvider`)
- `p_161472_` (`IntProvider`)

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
protected void createFoliage(LevelSimulatedReader p_225678_, FoliagePlacer.FoliageSetter p_273345_, RandomSource p_225680_, TreeConfiguration p_225681_, int p_225682_, FoliagePlacer.FoliageAttachment p_225683_, int p_225684_, int p_225685_, int p_225686_)
```

**Parameters:**

- `p_225678_` (`LevelSimulatedReader`)
- `p_273345_` (`FoliagePlacer.FoliageSetter`)
- `p_225680_` (`RandomSource`)
- `p_225681_` (`TreeConfiguration`)
- `p_225682_` (`int`)
- `p_225683_` (`FoliagePlacer.FoliageAttachment`)
- `p_225684_` (`int`)
- `p_225685_` (`int`)
- `p_225686_` (`int`)

### foliageHeight

```java
public int foliageHeight(RandomSource p_225674_, int p_225675_, TreeConfiguration p_225676_)
```

**Parameters:**

- `p_225674_` (`RandomSource`)
- `p_225675_` (`int`)
- `p_225676_` (`TreeConfiguration`)

**Returns:** `int`

### shouldSkipLocation

```java
protected boolean shouldSkipLocation(RandomSource p_225667_, int p_225668_, int p_225669_, int p_225670_, int p_225671_, boolean p_225672_)
```

**Parameters:**

- `p_225667_` (`RandomSource`)
- `p_225668_` (`int`)
- `p_225669_` (`int`)
- `p_225670_` (`int`)
- `p_225671_` (`int`)
- `p_225672_` (`boolean`)

**Returns:** `boolean`
