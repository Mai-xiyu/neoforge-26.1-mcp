# FeatureFlags

**Package:** `net.minecraft.world.flag`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `VANILLA` | `FeatureFlag` |  |
| `BUNDLE` | `FeatureFlag` |  |
| `TRADE_REBALANCE` | `FeatureFlag` |  |
| `REGISTRY` | `FeatureFlagRegistry` |  |
| `CODEC` | `Codec<FeatureFlagSet>` |  |
| `VANILLA_SET` | `FeatureFlagSet` |  |
| `DEFAULT_FLAGS` | `FeatureFlagSet` |  |

## Methods

### printMissingFlags

```java
public static String printMissingFlags(FeatureFlagSet p_250581_, FeatureFlagSet p_250326_)
```

**Parameters:**

- `p_250581_` (`FeatureFlagSet`)
- `p_250326_` (`FeatureFlagSet`)

**Returns:** `public static String`

### printMissingFlags

```java
return printMissingFlags()
```

**Returns:** `return`

### printMissingFlags

```java
public static String printMissingFlags(FeatureFlagRegistry p_249213_, FeatureFlagSet p_250429_, FeatureFlagSet p_250547_)
```

**Parameters:**

- `p_249213_` (`FeatureFlagRegistry`)
- `p_250429_` (`FeatureFlagSet`)
- `p_250547_` (`FeatureFlagSet`)

**Returns:** `public static String`

### isExperimental

```java
public static boolean isExperimental(FeatureFlagSet p_249170_)
```

**Parameters:**

- `p_249170_` (`FeatureFlagSet`)

**Returns:** `public static boolean`
