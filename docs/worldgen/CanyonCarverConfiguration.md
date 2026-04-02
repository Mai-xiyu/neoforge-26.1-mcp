# CanyonCarverConfiguration

**Package:** `net.minecraft.world.level.levelgen.carver`
**Type:** class
**Extends:** `CarverConfiguration`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<CanyonCarverConfiguration>` |  |
| `verticalRotation` | `FloatProvider` |  |
| `shape` | `CanyonCarverConfiguration.CanyonShapeConfiguration` |  |
| `CODEC` | `Codec<CanyonCarverConfiguration.CanyonShapeConfiguration>` |  |
| `distanceFactor` | `FloatProvider` |  |
| `thickness` | `FloatProvider` |  |
| `widthSmoothness` | `int` |  |
| `horizontalRadiusFactor` | `FloatProvider` |  |
| `verticalRadiusDefaultFactor` | `float` |  |
| `verticalRadiusCenterFactor` | `float` |  |

## Methods

### CanyonCarverConfiguration

```java
public CanyonCarverConfiguration(float p_224788_, HeightProvider p_224789_, FloatProvider p_224790_, VerticalAnchor p_224791_, CarverDebugSettings p_224792_, HolderSet<Block> p_224793_, FloatProvider p_224794_, CanyonCarverConfiguration.CanyonShapeConfiguration p_224795_)
```

**Parameters:**

- `p_224788_` (`float`)
- `p_224789_` (`HeightProvider`)
- `p_224790_` (`FloatProvider`)
- `p_224791_` (`VerticalAnchor`)
- `p_224792_` (`CarverDebugSettings`)
- `p_224793_` (`HolderSet<Block>`)
- `p_224794_` (`FloatProvider`)
- `p_224795_` (`CanyonCarverConfiguration.CanyonShapeConfiguration`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### CanyonCarverConfiguration

```java
public CanyonCarverConfiguration(CarverConfiguration p_158980_, FloatProvider p_158981_, CanyonCarverConfiguration.CanyonShapeConfiguration p_158982_)
```

**Parameters:**

- `p_158980_` (`CarverConfiguration`)
- `p_158981_` (`FloatProvider`)
- `p_158982_` (`CanyonCarverConfiguration.CanyonShapeConfiguration`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### CanyonShapeConfiguration

```java
public CanyonShapeConfiguration(FloatProvider p_159000_, FloatProvider p_159001_, int p_159002_, FloatProvider p_159003_, float p_159004_, float p_159005_)
```

**Parameters:**

- `p_159000_` (`FloatProvider`)
- `p_159001_` (`FloatProvider`)
- `p_159002_` (`int`)
- `p_159003_` (`FloatProvider`)
- `p_159004_` (`float`)
- `p_159005_` (`float`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CanyonShapeConfiguration` | class |  |
