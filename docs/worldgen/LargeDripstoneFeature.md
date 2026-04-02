# LargeDripstoneFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<LargeDripstoneConfiguration>`

## Methods

### LargeDripstoneFeature

```java
public LargeDripstoneFeature(Codec<LargeDripstoneConfiguration> p_159960_)
```

**Parameters:**

- `p_159960_` (`Codec<LargeDripstoneConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### place

```java
public boolean place(FeaturePlaceContext<LargeDripstoneConfiguration> p_159967_)
```

**Parameters:**

- `p_159967_` (`FeaturePlaceContext<LargeDripstoneConfiguration>`)

**Returns:** `boolean`

### makeDripstone

```java
private static LargeDripstoneFeature.LargeDripstone makeDripstone(BlockPos p_225139_, boolean p_225140_, RandomSource p_225141_, int p_225142_, FloatProvider p_225143_, FloatProvider p_225144_)
```

**Parameters:**

- `p_225139_` (`BlockPos`)
- `p_225140_` (`boolean`)
- `p_225141_` (`RandomSource`)
- `p_225142_` (`int`)
- `p_225143_` (`FloatProvider`)
- `p_225144_` (`FloatProvider`)

**Returns:** `private static LargeDripstoneFeature.LargeDripstone`

### placeDebugMarkers

```java
private void placeDebugMarkers(WorldGenLevel p_159962_, BlockPos p_159963_, Column.Range p_159964_, LargeDripstoneFeature.WindOffsetter p_159965_)
```

**Parameters:**

- `p_159962_` (`WorldGenLevel`)
- `p_159963_` (`BlockPos`)
- `p_159964_` (`Column.Range`)
- `p_159965_` (`LargeDripstoneFeature.WindOffsetter`)

**Returns:** `private void`

### LargeDripstone

```java
 LargeDripstone(BlockPos p_197116_, boolean p_197117_, int p_197118_, double p_197119_, double p_197120_)
```

**Parameters:**

- `p_197116_` (`BlockPos`)
- `p_197117_` (`boolean`)
- `p_197118_` (`int`)
- `p_197119_` (`double`)
- `p_197120_` (`double`)

**Returns:** ``

### getHeight

```java
private int getHeight()
```

**Returns:** `private int`

### getMinY

```java
private int getMinY()
```

**Returns:** `private int`

### getMaxY

```java
private int getMaxY()
```

**Returns:** `private int`

### moveBackUntilBaseIsInsideStoneAndShrinkRadiusIfNecessary

```java
boolean moveBackUntilBaseIsInsideStoneAndShrinkRadiusIfNecessary(WorldGenLevel p_159990_, LargeDripstoneFeature.WindOffsetter p_159991_)
```

**Parameters:**

- `p_159990_` (`WorldGenLevel`)
- `p_159991_` (`LargeDripstoneFeature.WindOffsetter`)

**Returns:** `boolean`

### getHeightAtRadius

```java
private int getHeightAtRadius(float p_159988_)
```

**Parameters:**

- `p_159988_` (`float`)

**Returns:** `private int`

### placeBlocks

```java
void placeBlocks(WorldGenLevel p_225146_, RandomSource p_225147_, LargeDripstoneFeature.WindOffsetter p_225148_)
```

**Parameters:**

- `p_225146_` (`WorldGenLevel`)
- `p_225147_` (`RandomSource`)
- `p_225148_` (`LargeDripstoneFeature.WindOffsetter`)

### isSuitableForWind

```java
boolean isSuitableForWind(LargeDripstoneConfiguration p_159997_)
```

**Parameters:**

- `p_159997_` (`LargeDripstoneConfiguration`)

**Returns:** `boolean`

### WindOffsetter

```java
 WindOffsetter(int p_225150_, RandomSource p_225151_, FloatProvider p_225152_)
```

**Parameters:**

- `p_225150_` (`int`)
- `p_225151_` (`RandomSource`)
- `p_225152_` (`FloatProvider`)

**Returns:** ``

### WindOffsetter

```java
private WindOffsetter()
```

**Returns:** `private`

### noWind

```java
static LargeDripstoneFeature.WindOffsetter noWind()
```

**Returns:** `static LargeDripstoneFeature.WindOffsetter`

### offset

```java
BlockPos offset(BlockPos p_160009_)
```

**Parameters:**

- `p_160009_` (`BlockPos`)

**Returns:** `BlockPos`
