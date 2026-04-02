# MultifaceGrowthFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<MultifaceGrowthConfiguration>`

## Methods

### MultifaceGrowthFeature

```java
public MultifaceGrowthFeature(Codec<MultifaceGrowthConfiguration> p_225156_)
```

**Parameters:**

- `p_225156_` (`Codec<MultifaceGrowthConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### place

```java
public boolean place(FeaturePlaceContext<MultifaceGrowthConfiguration> p_225165_)
```

**Parameters:**

- `p_225165_` (`FeaturePlaceContext<MultifaceGrowthConfiguration>`)

**Returns:** `boolean`

### placeGrowthIfPossible

```java
public static boolean placeGrowthIfPossible(WorldGenLevel p_225158_, BlockPos p_225159_, BlockState p_225160_, MultifaceGrowthConfiguration p_225161_, RandomSource p_225162_, List<Direction> p_225163_)
```

**Parameters:**

- `p_225158_` (`WorldGenLevel`)
- `p_225159_` (`BlockPos`)
- `p_225160_` (`BlockState`)
- `p_225161_` (`MultifaceGrowthConfiguration`)
- `p_225162_` (`RandomSource`)
- `p_225163_` (`List<Direction>`)

**Returns:** `public static boolean`

### isAirOrWater

```java
private static boolean isAirOrWater(BlockState p_225167_)
```

**Parameters:**

- `p_225167_` (`BlockState`)

**Returns:** `private static boolean`
