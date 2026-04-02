# VanillaAdventureAdvancements

**Package:** `net.minecraft.data.advancements.packs`
**Type:** class
**Implements:** `AdvancementSubProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MOBS_TO_KILL` | `List<EntityType<?>>` |  |

## Methods

### fireCountAndBystander

```java
private static Criterion<LightningStrikeTrigger.TriggerInstance> fireCountAndBystander(MinMaxBounds.Ints p_252298_, Optional<EntityPredicate> p_299106_)
```

**Parameters:**

- `p_252298_` (`MinMaxBounds.Ints`)
- `p_299106_` (`Optional<EntityPredicate>`)

**Returns:** `private static Criterion<LightningStrikeTrigger.TriggerInstance>`

### lookAtThroughItem

```java
private static Criterion<UsingItemTrigger.TriggerInstance> lookAtThroughItem(EntityType<?> p_249703_, Item p_250746_)
```

**Parameters:**

- `p_249703_` (`EntityType<?>`)
- `p_250746_` (`Item`)

**Returns:** `private static Criterion<UsingItemTrigger.TriggerInstance>`

### generate

```java
public void generate(HolderLookup.Provider p_255887_, Consumer<AdvancementHolder> p_256428_)
```

**Parameters:**

- `p_255887_` (`HolderLookup.Provider`)
- `p_256428_` (`Consumer<AdvancementHolder>`)

### createAdventuringTime

```java
 createAdventuringTime()
```

**Returns:** ``

### createMonsterHunterAdvancement

```java
public static AdvancementHolder createMonsterHunterAdvancement(AdvancementHolder p_314489_, Consumer<AdvancementHolder> p_314532_, List<EntityType<?>> p_314614_)
```

**Parameters:**

- `p_314489_` (`AdvancementHolder`)
- `p_314532_` (`Consumer<AdvancementHolder>`)
- `p_314614_` (`List<EntityType<?>>`)

**Returns:** `public static AdvancementHolder`

### placedBlockReadByComparator

```java
private static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> placedBlockReadByComparator(Block p_286401_)
```

**Parameters:**

- `p_286401_` (`Block`)

**Returns:** `private static Criterion<ItemUsedOnLocationTrigger.TriggerInstance>`

### placedComparatorReadingBlock

```java
private static Criterion<ItemUsedOnLocationTrigger.TriggerInstance> placedComparatorReadingBlock(Block p_286250_)
```

**Parameters:**

- `p_286250_` (`Block`)

**Returns:** `private static Criterion<ItemUsedOnLocationTrigger.TriggerInstance>`

### smithingWithStyle

```java
private static Advancement.Builder smithingWithStyle(Advancement.Builder p_285368_)
```

**Parameters:**

- `p_285368_` (`Advancement.Builder`)

**Returns:** `private static Advancement.Builder`

### craftingANewLook

```java
private static Advancement.Builder craftingANewLook(Advancement.Builder p_285062_)
```

**Parameters:**

- `p_285062_` (`Advancement.Builder`)

**Returns:** `private static Advancement.Builder`

### respectingTheRemnantsCriterions

```java
private static Advancement.Builder respectingTheRemnantsCriterions(Advancement.Builder p_285170_)
```

**Parameters:**

- `p_285170_` (`Advancement.Builder`)

**Returns:** `private static Advancement.Builder`

### createAdventuringTime

```java
protected static void createAdventuringTime(HolderLookup.Provider p_330738_, Consumer<AdvancementHolder> p_275645_, AdvancementHolder p_301274_, MultiNoiseBiomeSourceParameterList.Preset p_275211_)
```

**Parameters:**

- `p_330738_` (`HolderLookup.Provider`)
- `p_275645_` (`Consumer<AdvancementHolder>`)
- `p_301274_` (`AdvancementHolder`)
- `p_275211_` (`MultiNoiseBiomeSourceParameterList.Preset`)

**Returns:** `protected static void`

### addMobsToKill

```java
private static Advancement.Builder addMobsToKill(Advancement.Builder p_248814_, List<EntityType<?>> p_314428_)
```

**Parameters:**

- `p_248814_` (`Advancement.Builder`)
- `p_314428_` (`List<EntityType<?>>`)

**Returns:** `private static Advancement.Builder`

### addBiomes

```java
protected static Advancement.Builder addBiomes(Advancement.Builder p_249250_, HolderLookup.Provider p_330401_, List<ResourceKey<Biome>> p_251338_)
```

**Parameters:**

- `p_249250_` (`Advancement.Builder`)
- `p_330401_` (`HolderLookup.Provider`)
- `p_251338_` (`List<ResourceKey<Biome>>`)

**Returns:** `protected static Advancement.Builder`
