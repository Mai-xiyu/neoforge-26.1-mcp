# OreFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<OreConfiguration>`

## Methods

### OreFeature

```java
public OreFeature(Codec<OreConfiguration> p_66531_)
```

**Parameters:**

- `p_66531_` (`Codec<OreConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### place

```java
public boolean place(FeaturePlaceContext<OreConfiguration> p_160177_)
```

**Parameters:**

- `p_160177_` (`FeaturePlaceContext<OreConfiguration>`)

**Returns:** `boolean`

### doPlace

```java
protected boolean doPlace(WorldGenLevel p_225172_, RandomSource p_225173_, OreConfiguration p_225174_, double p_225175_, double p_225176_, double p_225177_, double p_225178_, double p_225179_, double p_225180_, int p_225181_, int p_225182_, int p_225183_, int p_225184_, int p_225185_)
```

**Parameters:**

- `p_225172_` (`WorldGenLevel`)
- `p_225173_` (`RandomSource`)
- `p_225174_` (`OreConfiguration`)
- `p_225175_` (`double`)
- `p_225176_` (`double`)
- `p_225177_` (`double`)
- `p_225178_` (`double`)
- `p_225179_` (`double`)
- `p_225180_` (`double`)
- `p_225181_` (`int`)
- `p_225182_` (`int`)
- `p_225183_` (`int`)
- `p_225184_` (`int`)
- `p_225185_` (`int`)

**Returns:** `protected boolean`

### canPlaceOre

```java
public static boolean canPlaceOre(BlockState p_225187_, Function<BlockPos, BlockState> p_225188_, RandomSource p_225189_, OreConfiguration p_225190_, OreConfiguration.TargetBlockState p_225191_, BlockPos.MutableBlockPos p_225192_)
```

**Parameters:**

- `p_225187_` (`BlockState`)
- `p_225188_` (`Function<BlockPos, BlockState>`)
- `p_225189_` (`RandomSource`)
- `p_225190_` (`OreConfiguration`)
- `p_225191_` (`OreConfiguration.TargetBlockState`)
- `p_225192_` (`BlockPos.MutableBlockPos`)

**Returns:** `public static boolean`

### shouldSkipAirCheck

```java
protected static boolean shouldSkipAirCheck(RandomSource p_225169_, float p_225170_)
```

**Parameters:**

- `p_225169_` (`RandomSource`)
- `p_225170_` (`float`)

**Returns:** `protected static boolean`
