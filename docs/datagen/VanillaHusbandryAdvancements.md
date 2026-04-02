# VanillaHusbandryAdvancements

**Package:** `net.minecraft.data.advancements.packs`
**Type:** class
**Implements:** `AdvancementSubProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BREEDABLE_ANIMALS` | `List<EntityType<?>>` |  |
| `INDIRECTLY_BREEDABLE_ANIMALS` | `List<EntityType<?>>` |  |
| `WAX_SCRAPING_TOOLS` | `Item[]` |  |

## Methods

### generate

```java
public void generate(HolderLookup.Provider p_255680_, Consumer<AdvancementHolder> p_251389_)
```

**Parameters:**

- `p_255680_` (`HolderLookup.Provider`)
- `p_251389_` (`Consumer<AdvancementHolder>`)

### createBreedAllAnimalsAdvancement

```java
public static AdvancementHolder createBreedAllAnimalsAdvancement(AdvancementHolder p_300959_, Consumer<AdvancementHolder> p_266923_, Stream<EntityType<?>> p_266961_, Stream<EntityType<?>> p_266751_)
```

**Parameters:**

- `p_300959_` (`AdvancementHolder`)
- `p_266923_` (`Consumer<AdvancementHolder>`)
- `p_266961_` (`Stream<EntityType<?>>`)
- `p_266751_` (`Stream<EntityType<?>>`)

**Returns:** `public static AdvancementHolder`

### addLeashedFrogVariants

```java
private static Advancement.Builder addLeashedFrogVariants(Advancement.Builder p_249739_)
```

**Parameters:**

- `p_249739_` (`Advancement.Builder`)

**Returns:** `private static Advancement.Builder`

### addFood

```java
private static Advancement.Builder addFood(Advancement.Builder p_248532_)
```

**Parameters:**

- `p_248532_` (`Advancement.Builder`)

**Returns:** `private static Advancement.Builder`

### addBreedable

```java
private static Advancement.Builder addBreedable(Advancement.Builder p_266978_, Stream<EntityType<?>> p_267147_, Stream<EntityType<?>> p_267091_)
```

**Parameters:**

- `p_266978_` (`Advancement.Builder`)
- `p_267147_` (`Stream<EntityType<?>>`)
- `p_267091_` (`Stream<EntityType<?>>`)

**Returns:** `private static Advancement.Builder`

### addFishBuckets

```java
private static Advancement.Builder addFishBuckets(Advancement.Builder p_249285_)
```

**Parameters:**

- `p_249285_` (`Advancement.Builder`)

**Returns:** `private static Advancement.Builder`

### addFish

```java
private static Advancement.Builder addFish(Advancement.Builder p_248725_)
```

**Parameters:**

- `p_248725_` (`Advancement.Builder`)

**Returns:** `private static Advancement.Builder`

### addCatVariants

```java
private static Advancement.Builder addCatVariants(Advancement.Builder p_249232_)
```

**Parameters:**

- `p_249232_` (`Advancement.Builder`)

**Returns:** `private static Advancement.Builder`

### addTamedWolfVariants

```java
private static Advancement.Builder addTamedWolfVariants(Advancement.Builder p_341402_, HolderLookup.Provider p_341196_)
```

**Parameters:**

- `p_341402_` (`Advancement.Builder`)
- `p_341196_` (`HolderLookup.Provider`)

**Returns:** `private static Advancement.Builder`
