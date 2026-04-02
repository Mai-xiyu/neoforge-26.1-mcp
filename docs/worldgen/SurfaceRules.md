# SurfaceRules

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ON_FLOOR` | `SurfaceRules.ConditionSource` |  |
| `UNDER_FLOOR` | `SurfaceRules.ConditionSource` |  |
| `DEEP_UNDER_FLOOR` | `SurfaceRules.ConditionSource` |  |
| `VERY_DEEP_UNDER_FLOOR` | `SurfaceRules.ConditionSource` |  |
| `ON_CEILING` | `SurfaceRules.ConditionSource` |  |
| `UNDER_CEILING` | `SurfaceRules.ConditionSource` |  |

## Methods

### stoneDepthCheck

```java
public static SurfaceRules.ConditionSource stoneDepthCheck(int p_202177_, boolean p_202178_, CaveSurface p_202179_)
```

**Parameters:**

- `p_202177_` (`int`)
- `p_202178_` (`boolean`)
- `p_202179_` (`CaveSurface`)

**Returns:** `public static SurfaceRules.ConditionSource`

### stoneDepthCheck

```java
public static SurfaceRules.ConditionSource stoneDepthCheck(int p_202172_, boolean p_202173_, int p_202174_, CaveSurface p_202175_)
```

**Parameters:**

- `p_202172_` (`int`)
- `p_202173_` (`boolean`)
- `p_202174_` (`int`)
- `p_202175_` (`CaveSurface`)

**Returns:** `public static SurfaceRules.ConditionSource`

### not

```java
public static SurfaceRules.ConditionSource not(SurfaceRules.ConditionSource p_189393_)
```

**Parameters:**

- `p_189393_` (`SurfaceRules.ConditionSource`)

**Returns:** `public static SurfaceRules.ConditionSource`

### yBlockCheck

```java
public static SurfaceRules.ConditionSource yBlockCheck(VerticalAnchor p_189401_, int p_189402_)
```

**Parameters:**

- `p_189401_` (`VerticalAnchor`)
- `p_189402_` (`int`)

**Returns:** `public static SurfaceRules.ConditionSource`

### yStartCheck

```java
public static SurfaceRules.ConditionSource yStartCheck(VerticalAnchor p_189423_, int p_189424_)
```

**Parameters:**

- `p_189423_` (`VerticalAnchor`)
- `p_189424_` (`int`)

**Returns:** `public static SurfaceRules.ConditionSource`

### waterBlockCheck

```java
public static SurfaceRules.ConditionSource waterBlockCheck(int p_189383_, int p_189384_)
```

**Parameters:**

- `p_189383_` (`int`)
- `p_189384_` (`int`)

**Returns:** `public static SurfaceRules.ConditionSource`

### waterStartCheck

```java
public static SurfaceRules.ConditionSource waterStartCheck(int p_189420_, int p_189421_)
```

**Parameters:**

- `p_189420_` (`int`)
- `p_189421_` (`int`)

**Returns:** `public static SurfaceRules.ConditionSource`

### isBiome

```java
public static SurfaceRules.ConditionSource isBiome(ResourceKey<Biome>[]... p_189417_)
```

**Parameters:**

- `p_189417_` (`ResourceKey<Biome>[]...`)

**Returns:** `SurfaceRules.ConditionSource`

### isBiome

```java
private static SurfaceRules.BiomeConditionSource isBiome(List<ResourceKey<Biome>> p_189408_)
```

**Parameters:**

- `p_189408_` (`List<ResourceKey<Biome>>`)

**Returns:** `private static SurfaceRules.BiomeConditionSource`

### noiseCondition

```java
public static SurfaceRules.ConditionSource noiseCondition(ResourceKey<NormalNoise.NoiseParameters> p_189410_, double p_189411_)
```

**Parameters:**

- `p_189410_` (`ResourceKey<NormalNoise.NoiseParameters>`)
- `p_189411_` (`double`)

**Returns:** `public static SurfaceRules.ConditionSource`

### noiseCondition

```java
return noiseCondition()
```

**Returns:** `return`

### noiseCondition

```java
public static SurfaceRules.ConditionSource noiseCondition(ResourceKey<NormalNoise.NoiseParameters> p_189413_, double p_189414_, double p_189415_)
```

**Parameters:**

- `p_189413_` (`ResourceKey<NormalNoise.NoiseParameters>`)
- `p_189414_` (`double`)
- `p_189415_` (`double`)

**Returns:** `public static SurfaceRules.ConditionSource`

### verticalGradient

```java
public static SurfaceRules.ConditionSource verticalGradient(String p_189404_, VerticalAnchor p_189405_, VerticalAnchor p_189406_)
```

**Parameters:**

- `p_189404_` (`String`)
- `p_189405_` (`VerticalAnchor`)
- `p_189406_` (`VerticalAnchor`)

**Returns:** `public static SurfaceRules.ConditionSource`

### steep

```java
public static SurfaceRules.ConditionSource steep()
```

**Returns:** `public static SurfaceRules.ConditionSource`

### hole

```java
public static SurfaceRules.ConditionSource hole()
```

**Returns:** `public static SurfaceRules.ConditionSource`

### abovePreliminarySurface

```java
public static SurfaceRules.ConditionSource abovePreliminarySurface()
```

**Returns:** `public static SurfaceRules.ConditionSource`

### temperature

```java
public static SurfaceRules.ConditionSource temperature()
```

**Returns:** `public static SurfaceRules.ConditionSource`

### ifTrue

```java
public static SurfaceRules.RuleSource ifTrue(SurfaceRules.ConditionSource p_189395_, SurfaceRules.RuleSource p_189396_)
```

**Parameters:**

- `p_189395_` (`SurfaceRules.ConditionSource`)
- `p_189396_` (`SurfaceRules.RuleSource`)

**Returns:** `public static SurfaceRules.RuleSource`

### sequence

```java
public static SurfaceRules.RuleSource sequence(SurfaceRules.RuleSource[]... p_198273_)
```

**Parameters:**

- `p_198273_` (`SurfaceRules.RuleSource[]...`)

**Returns:** `public static SurfaceRules.RuleSource`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Need at least 1 rule for a sequence")
```

**Parameters:**

- `sequence"` (`"Need at least 1 rule for a`)

**Returns:** `throw new`

### state

```java
public static SurfaceRules.RuleSource state(BlockState p_189391_)
```

**Parameters:**

- `p_189391_` (`BlockState`)

**Returns:** `public static SurfaceRules.RuleSource`

### bandlands

```java
public static SurfaceRules.RuleSource bandlands()
```

**Returns:** `public static SurfaceRules.RuleSource`

### register

```java
<A> static <A> MapCodec<? extends A> register(Registry<MapCodec<? extends A>> p_224604_, String p_224605_, KeyDispatchDataCodec<? extends A> p_224606_)
```

**Parameters:**

- `p_224604_` (`Registry<MapCodec<? extends A>>`)
- `p_224605_` (`String`)
- `p_224606_` (`KeyDispatchDataCodec<? extends A>`)

**Returns:** `static <A> MapCodec<? extends A>`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189437_)
```

**Parameters:**

- `p_189437_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.RuleSource>`

### apply

```java
public SurfaceRules.SurfaceRule apply(SurfaceRules.Context p_189482_)
```

**Parameters:**

- `p_189482_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.SurfaceRule`

### BiomeConditionSource

```java
 BiomeConditionSource(List<ResourceKey<Biome>> p_189493_)
```

**Parameters:**

- `p_189493_` (`List<ResourceKey<Biome>>`)

**Returns:** ``

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189496_)
```

**Parameters:**

- `p_189496_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### BiomeCondition

```java
 BiomeCondition()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### compute

```java
protected boolean compute()
```

**Returns:** `boolean`

### BiomeCondition

```java
return new BiomeCondition()
```

**Returns:** `return new`

### equals

```java
public boolean equals(Object p_209694_)
```

**Parameters:**

- `p_209694_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### BlockRuleSource

```java
 BlockRuleSource(BlockState p_189517_)
```

**Parameters:**

- `p_189517_` (`BlockState`)

**Returns:** ``

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.RuleSource>`

### apply

```java
public SurfaceRules.SurfaceRule apply(SurfaceRules.Context p_189523_)
```

**Parameters:**

- `p_189523_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.SurfaceRule`

### test

```java
boolean test()
```

**Returns:** `boolean`

### bootstrap

```java
static MapCodec<? extends SurfaceRules.ConditionSource> bootstrap(Registry<MapCodec<? extends SurfaceRules.ConditionSource>> p_204625_)
```

**Parameters:**

- `p_204625_` (`Registry<MapCodec<? extends SurfaceRules.ConditionSource>>`)

**Returns:** `static MapCodec<? extends SurfaceRules.ConditionSource>`

### codec

```java
KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### Context

```java
protected Context(SurfaceSystem p_224616_, RandomState p_224617_, ChunkAccess p_224618_, NoiseChunk p_224619_, Function<BlockPos, Holder<Biome>> p_224620_, Registry<Biome> p_224621_, WorldGenerationContext p_224622_)
```

**Parameters:**

- `p_224616_` (`SurfaceSystem`)
- `p_224617_` (`RandomState`)
- `p_224618_` (`ChunkAccess`)
- `p_224619_` (`NoiseChunk`)
- `p_224620_` (`Function<BlockPos, Holder<Biome>>`)
- `p_224621_` (`Registry<Biome>`)
- `p_224622_` (`WorldGenerationContext`)

**Returns:** `protected`

### updateXZ

```java
protected void updateXZ(int p_189570_, int p_189571_)
```

**Parameters:**

- `p_189570_` (`int`)
- `p_189571_` (`int`)

**Returns:** `protected void`

### updateY

```java
protected void updateY(int p_189577_, int p_189578_, int p_189579_, int p_189580_, int p_189581_, int p_189582_)
```

**Parameters:**

- `p_189577_` (`int`)
- `p_189578_` (`int`)
- `p_189579_` (`int`)
- `p_189580_` (`int`)
- `p_189581_` (`int`)
- `p_189582_` (`int`)

**Returns:** `protected void`

### getSurfaceSecondary

```java
protected double getSurfaceSecondary()
```

**Returns:** `protected double`

### blockCoordToSurfaceCell

```java
private static int blockCoordToSurfaceCell(int p_198281_)
```

**Parameters:**

- `p_198281_` (`int`)

**Returns:** `private static int`

### surfaceCellToBlockCoord

```java
private static int surfaceCellToBlockCoord(int p_198283_)
```

**Parameters:**

- `p_198283_` (`int`)

**Returns:** `private static int`

### getMinSurfaceLevel

```java
protected int getMinSurfaceLevel()
```

**Returns:** `protected int`

### test

```java
public boolean test()
```

**Returns:** `boolean`

### HoleCondition

```java
 HoleCondition(SurfaceRules.Context p_189591_)
```

**Parameters:**

- `p_189591_` (`SurfaceRules.Context`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### compute

```java
protected boolean compute()
```

**Returns:** `boolean`

### SteepMaterialCondition

```java
 SteepMaterialCondition(SurfaceRules.Context p_189594_)
```

**Parameters:**

- `p_189594_` (`SurfaceRules.Context`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### compute

```java
protected boolean compute()
```

**Returns:** `boolean`

### TemperatureHelperCondition

```java
 TemperatureHelperCondition(SurfaceRules.Context p_189597_)
```

**Parameters:**

- `p_189597_` (`SurfaceRules.Context`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### compute

```java
protected boolean compute()
```

**Returns:** `boolean`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189608_)
```

**Parameters:**

- `p_189608_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### LazyCondition

```java
protected LazyCondition(SurfaceRules.Context p_189619_)
```

**Parameters:**

- `p_189619_` (`SurfaceRules.Context`)

**Returns:** `protected`

### test

```java
public boolean test()
```

**Returns:** `boolean`

### IllegalStateException

```java
throw new IllegalStateException("Update triggered but the result is null")
```

**Parameters:**

- `null"` (`"Update triggered but the result is`)

**Returns:** `throw new`

### getContextLastUpdate

```java
protected abstract long getContextLastUpdate()
```

**Returns:** `protected abstract long`

### compute

```java
protected abstract boolean compute()
```

**Returns:** `protected abstract boolean`

### LazyXZCondition

```java
protected LazyXZCondition(SurfaceRules.Context p_189622_)
```

**Parameters:**

- `p_189622_` (`SurfaceRules.Context`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getContextLastUpdate

```java
protected long getContextLastUpdate()
```

**Returns:** `long`

### LazyYCondition

```java
protected LazyYCondition(SurfaceRules.Context p_189625_)
```

**Parameters:**

- `p_189625_` (`SurfaceRules.Context`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getContextLastUpdate

```java
protected long getContextLastUpdate()
```

**Returns:** `long`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189640_)
```

**Parameters:**

- `p_189640_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### NoiseThresholdCondition

```java
 NoiseThresholdCondition()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### compute

```java
protected boolean compute()
```

**Returns:** `boolean`

### NoiseThresholdCondition

```java
return new NoiseThresholdCondition()
```

**Returns:** `return new`

### test

```java
public boolean test()
```

**Returns:** `boolean`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189674_)
```

**Parameters:**

- `p_189674_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### bootstrap

```java
static MapCodec<? extends SurfaceRules.RuleSource> bootstrap(Registry<MapCodec<? extends SurfaceRules.RuleSource>> p_204631_)
```

**Parameters:**

- `p_204631_` (`Registry<MapCodec<? extends SurfaceRules.RuleSource>>`)

**Returns:** `static MapCodec<? extends SurfaceRules.RuleSource>`

### codec

```java
KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.RuleSource>`

### tryApply

```java
public BlockState tryApply(int p_189694_, int p_189695_, int p_189696_)
```

**Parameters:**

- `p_189694_` (`int`)
- `p_189695_` (`int`)
- `p_189696_` (`int`)

**Returns:** `BlockState`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.RuleSource>`

### apply

```java
public SurfaceRules.SurfaceRule apply(SurfaceRules.Context p_189704_)
```

**Parameters:**

- `p_189704_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.SurfaceRule`

### tryApply

```java
public BlockState tryApply(int p_189721_, int p_189722_, int p_189723_)
```

**Parameters:**

- `p_189721_` (`int`)
- `p_189722_` (`int`)
- `p_189723_` (`int`)

**Returns:** `BlockState`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189733_)
```

**Parameters:**

- `p_189733_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189755_)
```

**Parameters:**

- `p_189755_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### StoneDepthCondition

```java
 StoneDepthCondition()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### compute

```java
protected boolean compute()
```

**Returns:** `boolean`

### StoneDepthCondition

```java
return new StoneDepthCondition()
```

**Returns:** `return new`

### tryApply

```java
BlockState tryApply(int p_189774_, int p_189775_, int p_189776_)
```

**Parameters:**

- `p_189774_` (`int`)
- `p_189775_` (`int`)
- `p_189776_` (`int`)

**Returns:** `BlockState`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189786_)
```

**Parameters:**

- `p_189786_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### tryApply

```java
public BlockState tryApply(int p_189805_, int p_189806_, int p_189807_)
```

**Parameters:**

- `p_189805_` (`int`)
- `p_189806_` (`int`)
- `p_189807_` (`int`)

**Returns:** `BlockState`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.RuleSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.RuleSource>`

### apply

```java
public SurfaceRules.SurfaceRule apply(SurfaceRules.Context p_189819_)
```

**Parameters:**

- `p_189819_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.SurfaceRule`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189841_)
```

**Parameters:**

- `p_189841_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### VerticalGradientCondition

```java
 VerticalGradientCondition()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### compute

```java
protected boolean compute()
```

**Returns:** `boolean`

### VerticalGradientCondition

```java
return new VerticalGradientCondition()
```

**Returns:** `return new`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189876_)
```

**Parameters:**

- `p_189876_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### WaterCondition

```java
 WaterCondition()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### compute

```java
protected boolean compute()
```

**Returns:** `boolean`

### WaterCondition

```java
return new WaterCondition()
```

**Returns:** `return new`

### codec

```java
public KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource> codec()
```

**Returns:** `KeyDispatchDataCodec<? extends SurfaceRules.ConditionSource>`

### apply

```java
public SurfaceRules.Condition apply(SurfaceRules.Context p_189457_)
```

**Parameters:**

- `p_189457_` (`SurfaceRules.Context`)

**Returns:** `public SurfaceRules.Condition`

### YCondition

```java
 YCondition()
```

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### compute

```java
protected boolean compute()
```

**Returns:** `boolean`

### YCondition

```java
return new YCondition()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ConditionSource` | interface |  |
| `Context` | class |  |
| `RuleSource` | interface |  |
| `SurfaceRule` | interface |  |
