# CreativeModeTabs

**Package:** `net.minecraft.world.item`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BUILDING_BLOCKS` | `ResourceKey<CreativeModeTab>` |  |
| `COLORED_BLOCKS` | `ResourceKey<CreativeModeTab>` |  |
| `NATURAL_BLOCKS` | `ResourceKey<CreativeModeTab>` |  |
| `FUNCTIONAL_BLOCKS` | `ResourceKey<CreativeModeTab>` |  |
| `REDSTONE_BLOCKS` | `ResourceKey<CreativeModeTab>` |  |
| `HOTBAR` | `ResourceKey<CreativeModeTab>` |  |
| `SEARCH` | `ResourceKey<CreativeModeTab>` |  |
| `TOOLS_AND_UTILITIES` | `ResourceKey<CreativeModeTab>` |  |
| `COMBAT` | `ResourceKey<CreativeModeTab>` |  |
| `FOOD_AND_DRINKS` | `ResourceKey<CreativeModeTab>` |  |
| `INGREDIENTS` | `ResourceKey<CreativeModeTab>` |  |
| `SPAWN_EGGS` | `ResourceKey<CreativeModeTab>` |  |
| `OP_BLOCKS` | `ResourceKey<CreativeModeTab>` |  |
| `INVENTORY` | `ResourceKey<CreativeModeTab>` |  |

## Methods

### createKey

```java
private static ResourceKey<CreativeModeTab> createKey(String p_281544_)
```

**Parameters:**

- `p_281544_` (`String`)

**Returns:** `private static ResourceKey<CreativeModeTab>`

### bootstrap

```java
public static CreativeModeTab bootstrap(Registry<CreativeModeTab> p_283144_)
```

**Parameters:**

- `p_283144_` (`Registry<CreativeModeTab>`)

**Returns:** `public static CreativeModeTab`

### generateFireworksAllDurations

```java
 generateFireworksAllDurations()
```

**Returns:** ``

### generateFireworksAllDurations

```java
 generateFireworksAllDurations()
```

**Returns:** ``

### generateSuspiciousStews

```java
 generateSuspiciousStews()
```

**Returns:** ``

### generateOminousVials

```java
 generateOminousVials()
```

**Returns:** ``

### generateEnchantmentBookTypesOnlyMaxLevel

```java
 generateEnchantmentBookTypesOnlyMaxLevel()
```

**Returns:** ``

### generateEnchantmentBookTypesAllLevels

```java
 generateEnchantmentBookTypesAllLevels()
```

**Returns:** ``

### validate

```java
public static void validate()
```

**Returns:** `public static void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Duplicate position: " + s + " vs. " + s1)
```

**Parameters:**

- `s1` (`"Duplicate position: " + s + " vs. " +`)

**Returns:** `throw new`

### getDefaultTab

```java
public static CreativeModeTab getDefaultTab()
```

**Returns:** `public static CreativeModeTab`

### generatePotionEffectTypes

```java
private static void generatePotionEffectTypes(CreativeModeTab.Output p_270129_, HolderLookup<Potion> p_270334_, Item p_270968_, CreativeModeTab.TabVisibility p_270778_, FeatureFlagSet p_338372_)
```

**Parameters:**

- `p_270129_` (`CreativeModeTab.Output`)
- `p_270334_` (`HolderLookup<Potion>`)
- `p_270968_` (`Item`)
- `p_270778_` (`CreativeModeTab.TabVisibility`)
- `p_338372_` (`FeatureFlagSet`)

**Returns:** `private static void`

### generateEnchantmentBookTypesOnlyMaxLevel

```java
private static void generateEnchantmentBookTypesOnlyMaxLevel(CreativeModeTab.Output p_270868_, HolderLookup<Enchantment> p_270903_, CreativeModeTab.TabVisibility p_270407_)
```

**Parameters:**

- `p_270868_` (`CreativeModeTab.Output`)
- `p_270903_` (`HolderLookup<Enchantment>`)
- `p_270407_` (`CreativeModeTab.TabVisibility`)

**Returns:** `private static void`

### generateEnchantmentBookTypesAllLevels

```java
private static void generateEnchantmentBookTypesAllLevels(CreativeModeTab.Output p_270961_, HolderLookup<Enchantment> p_270628_, CreativeModeTab.TabVisibility p_270805_)
```

**Parameters:**

- `p_270961_` (`CreativeModeTab.Output`)
- `p_270628_` (`HolderLookup<Enchantment>`)
- `p_270805_` (`CreativeModeTab.TabVisibility`)

**Returns:** `private static void`

### generateInstrumentTypes

```java
private static void generateInstrumentTypes(CreativeModeTab.Output p_270699_, HolderLookup<Instrument> p_270948_, Item p_270421_, TagKey<Instrument> p_270798_, CreativeModeTab.TabVisibility p_270817_)
```

**Parameters:**

- `p_270699_` (`CreativeModeTab.Output`)
- `p_270948_` (`HolderLookup<Instrument>`)
- `p_270421_` (`Item`)
- `p_270798_` (`TagKey<Instrument>`)
- `p_270817_` (`CreativeModeTab.TabVisibility`)

**Returns:** `private static void`

### generateSuspiciousStews

```java
private static void generateSuspiciousStews(CreativeModeTab.Output p_259484_, CreativeModeTab.TabVisibility p_260051_)
```

**Parameters:**

- `p_259484_` (`CreativeModeTab.Output`)
- `p_260051_` (`CreativeModeTab.TabVisibility`)

**Returns:** `private static void`

### generateOminousVials

```java
private static void generateOminousVials(CreativeModeTab.Output p_338748_, CreativeModeTab.TabVisibility p_338797_)
```

**Parameters:**

- `p_338748_` (`CreativeModeTab.Output`)
- `p_338797_` (`CreativeModeTab.TabVisibility`)

**Returns:** `private static void`

### generateFireworksAllDurations

```java
private static void generateFireworksAllDurations(CreativeModeTab.Output p_259586_, CreativeModeTab.TabVisibility p_259372_)
```

**Parameters:**

- `p_259586_` (`CreativeModeTab.Output`)
- `p_259372_` (`CreativeModeTab.TabVisibility`)

**Returns:** `private static void`

### generatePresetPaintings

```java
private static void generatePresetPaintings(CreativeModeTab.Output p_271007_, HolderLookup.Provider p_345774_, HolderLookup.RegistryLookup<PaintingVariant> p_270618_, Predicate<Holder<PaintingVariant>> p_270878_, CreativeModeTab.TabVisibility p_270261_)
```

**Parameters:**

- `p_271007_` (`CreativeModeTab.Output`)
- `p_345774_` (`HolderLookup.Provider`)
- `p_270618_` (`HolderLookup.RegistryLookup<PaintingVariant>`)
- `p_270878_` (`Predicate<Holder<PaintingVariant>>`)
- `p_270261_` (`CreativeModeTab.TabVisibility`)

**Returns:** `private static void`

### tabs

```java
public static List<CreativeModeTab> tabs()
```

**Returns:** `public static List<CreativeModeTab>`

### allTabs

```java
public static List<CreativeModeTab> allTabs()
```

**Returns:** `public static List<CreativeModeTab>`

### streamAllTabs

```java
private static Stream<CreativeModeTab> streamAllTabs()
```

**Returns:** `private static Stream<CreativeModeTab>`

### searchTab

```java
public static CreativeModeTab searchTab()
```

**Returns:** `public static CreativeModeTab`

### buildAllTabContents

```java
private static void buildAllTabContents(CreativeModeTab.ItemDisplayParameters p_270447_)
```

**Parameters:**

- `p_270447_` (`CreativeModeTab.ItemDisplayParameters`)

**Returns:** `private static void`

### tryRebuildTabContents

```java
public static boolean tryRebuildTabContents(FeatureFlagSet p_270988_, boolean p_270090_, HolderLookup.Provider p_270799_)
```

**Parameters:**

- `p_270988_` (`FeatureFlagSet`)
- `p_270090_` (`boolean`)
- `p_270799_` (`HolderLookup.Provider`)

**Returns:** `public static boolean`

### buildAllTabContents

```java
 buildAllTabContents()
```

**Returns:** ``
