# DripstoneClusterFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<DripstoneClusterConfiguration>`

## Methods

### DripstoneClusterFeature

```java
public DripstoneClusterFeature(Codec<DripstoneClusterConfiguration> p_159575_)
```

**Parameters:**

- `p_159575_` (`Codec<DripstoneClusterConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### place

```java
public boolean place(FeaturePlaceContext<DripstoneClusterConfiguration> p_159605_)
```

**Parameters:**

- `p_159605_` (`FeaturePlaceContext<DripstoneClusterConfiguration>`)

**Returns:** `boolean`

### placeColumn

```java
private void placeColumn(WorldGenLevel p_225016_, RandomSource p_225017_, BlockPos p_225018_, int p_225019_, int p_225020_, float p_225021_, double p_225022_, int p_225023_, float p_225024_, DripstoneClusterConfiguration p_225025_)
```

**Parameters:**

- `p_225016_` (`WorldGenLevel`)
- `p_225017_` (`RandomSource`)
- `p_225018_` (`BlockPos`)
- `p_225019_` (`int`)
- `p_225020_` (`int`)
- `p_225021_` (`float`)
- `p_225022_` (`double`)
- `p_225023_` (`int`)
- `p_225024_` (`float`)
- `p_225025_` (`DripstoneClusterConfiguration`)

**Returns:** `private void`

### isLava

```java
private boolean isLava(LevelReader p_159586_, BlockPos p_159587_)
```

**Parameters:**

- `p_159586_` (`LevelReader`)
- `p_159587_` (`BlockPos`)

**Returns:** `private boolean`

### getDripstoneHeight

```java
private int getDripstoneHeight(RandomSource p_225009_, int p_225010_, int p_225011_, float p_225012_, int p_225013_, DripstoneClusterConfiguration p_225014_)
```

**Parameters:**

- `p_225009_` (`RandomSource`)
- `p_225010_` (`int`)
- `p_225011_` (`int`)
- `p_225012_` (`float`)
- `p_225013_` (`int`)
- `p_225014_` (`DripstoneClusterConfiguration`)

**Returns:** `private int`

### canPlacePool

```java
private boolean canPlacePool(WorldGenLevel p_159620_, BlockPos p_159621_)
```

**Parameters:**

- `p_159620_` (`WorldGenLevel`)
- `p_159621_` (`BlockPos`)

**Returns:** `private boolean`

### canBeAdjacentToWater

```java
private boolean canBeAdjacentToWater(LevelAccessor p_159583_, BlockPos p_159584_)
```

**Parameters:**

- `p_159583_` (`LevelAccessor`)
- `p_159584_` (`BlockPos`)

**Returns:** `private boolean`

### replaceBlocksWithDripstoneBlocks

```java
private void replaceBlocksWithDripstoneBlocks(WorldGenLevel p_159589_, BlockPos p_159590_, int p_159591_, Direction p_159592_)
```

**Parameters:**

- `p_159589_` (`WorldGenLevel`)
- `p_159590_` (`BlockPos`)
- `p_159591_` (`int`)
- `p_159592_` (`Direction`)

**Returns:** `private void`

### getChanceOfStalagmiteOrStalactite

```java
private double getChanceOfStalagmiteOrStalactite(int p_159577_, int p_159578_, int p_159579_, int p_159580_, DripstoneClusterConfiguration p_159581_)
```

**Parameters:**

- `p_159577_` (`int`)
- `p_159578_` (`int`)
- `p_159579_` (`int`)
- `p_159580_` (`int`)
- `p_159581_` (`DripstoneClusterConfiguration`)

**Returns:** `private double`

### randomBetweenBiased

```java
private static float randomBetweenBiased(RandomSource p_225003_, float p_225004_, float p_225005_, float p_225006_, float p_225007_)
```

**Parameters:**

- `p_225003_` (`RandomSource`)
- `p_225004_` (`float`)
- `p_225005_` (`float`)
- `p_225006_` (`float`)
- `p_225007_` (`float`)

**Returns:** `private static float`
