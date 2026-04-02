# FeatureUtils

**Package:** `net.minecraft.data.worldgen.features`
**Type:** class

## Methods

### bootstrap

```java
public static void bootstrap(BootstrapContext<ConfiguredFeature<?, ?>> p_321722_)
```

**Parameters:**

- `p_321722_` (`BootstrapContext<ConfiguredFeature<?, ?>>`)

**Returns:** `public static void`

### simplePatchPredicate

```java
private static BlockPredicate simplePatchPredicate(List<Block> p_195009_)
```

**Parameters:**

- `p_195009_` (`List<Block>`)

**Returns:** `private static BlockPredicate`

### simpleRandomPatchConfiguration

```java
public static RandomPatchConfiguration simpleRandomPatchConfiguration(int p_206471_, Holder<PlacedFeature> p_206472_)
```

**Parameters:**

- `p_206471_` (`int`)
- `p_206472_` (`Holder<PlacedFeature>`)

**Returns:** `public static RandomPatchConfiguration`

### RandomPatchConfiguration

```java
return new RandomPatchConfiguration()
```

**Returns:** `return new`

### simplePatchConfiguration

```java
public static <FC extends FeatureConfiguration, F extends Feature<FC>> RandomPatchConfiguration simplePatchConfiguration(F p_206481_, FC p_206482_, List<Block> p_206483_, int p_206484_)
```

**Parameters:**

- `p_206481_` (`F`)
- `p_206482_` (`FC`)
- `p_206483_` (`List<Block>`)
- `p_206484_` (`int`)

**Returns:** `public static <FC extends FeatureConfiguration, F extends Feature<FC>> RandomPatchConfiguration`

### simplePatchConfiguration

```java
public static <FC extends FeatureConfiguration, F extends Feature<FC>> RandomPatchConfiguration simplePatchConfiguration(F p_206477_, FC p_206478_, List<Block> p_206479_)
```

**Parameters:**

- `p_206477_` (`F`)
- `p_206478_` (`FC`)
- `p_206479_` (`List<Block>`)

**Returns:** `public static <FC extends FeatureConfiguration, F extends Feature<FC>> RandomPatchConfiguration`

### simplePatchConfiguration

```java
return simplePatchConfiguration()
```

**Returns:** `return`

### simplePatchConfiguration

```java
public static <FC extends FeatureConfiguration, F extends Feature<FC>> RandomPatchConfiguration simplePatchConfiguration(F p_206474_, FC p_206475_)
```

**Parameters:**

- `p_206474_` (`F`)
- `p_206475_` (`FC`)

**Returns:** `public static <FC extends FeatureConfiguration, F extends Feature<FC>> RandomPatchConfiguration`

### createKey

```java
public static ResourceKey<ConfiguredFeature<?, ?>> createKey(String p_255643_)
```

**Parameters:**

- `p_255643_` (`String`)

**Returns:** `public static ResourceKey<ConfiguredFeature<?, ?>>`

### register

```java
public static void register(BootstrapContext<ConfiguredFeature<?, ?>> p_321616_, ResourceKey<ConfiguredFeature<?, ?>> p_256555_, Feature<NoneFeatureConfiguration> p_255921_)
```

**Parameters:**

- `p_321616_` (`BootstrapContext<ConfiguredFeature<?, ?>>`)
- `p_256555_` (`ResourceKey<ConfiguredFeature<?, ?>>`)
- `p_255921_` (`Feature<NoneFeatureConfiguration>`)

**Returns:** `public static void`

### register

```java
 register()
```

**Returns:** ``

### register

```java
public static <FC extends FeatureConfiguration, F extends Feature<FC>> void register(BootstrapContext<ConfiguredFeature<?, ?>> p_321618_, ResourceKey<ConfiguredFeature<?, ?>> p_255983_, F p_255949_, FC p_256398_)
```

**Parameters:**

- `p_321618_` (`BootstrapContext<ConfiguredFeature<?, ?>>`)
- `p_255983_` (`ResourceKey<ConfiguredFeature<?, ?>>`)
- `p_255949_` (`F`)
- `p_256398_` (`FC`)

**Returns:** `public static <FC extends FeatureConfiguration, F extends Feature<FC>> void`
