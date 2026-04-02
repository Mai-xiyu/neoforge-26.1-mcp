# NeoForgeAdvancementProvider

**Package:** `net.neoforged.neoforge.common.data.internal`
**Type:** class
**Extends:** `AdvancementProvider`

## Methods

### NeoForgeAdvancementProvider

```java
public NeoForgeAdvancementProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries)
```

**Parameters:**

- `output` (`PackOutput`)
- `registries` (`CompletableFuture<HolderLookup.Provider>`)

**Returns:** `public`

### getVanillaAdvancementProviders

```java
private static List<AdvancementSubProvider> getVanillaAdvancementProviders(PackOutput output, CompletableFuture<HolderLookup.Provider> registries)
```

**Parameters:**

- `output` (`PackOutput`)
- `registries` (`CompletableFuture<HolderLookup.Provider>`)

**Returns:** `private static List<AdvancementSubProvider>`

### replaceMatchToolCriteria

```java
private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>> replaceMatchToolCriteria(ItemAbility itemAbility, ItemLike[]... targetItem)
```

**Parameters:**

- `itemAbility` (`ItemAbility`)
- `targetItem` (`ItemLike[]...`)

**Returns:** `private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>>`

### replaceInteractCriteria

```java
private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>> replaceInteractCriteria(ItemPredicate replacement, ItemLike[]... targetItem)
```

**Parameters:**

- `replacement` (`ItemPredicate`)
- `targetItem` (`ItemLike[]...`)

**Returns:** `private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>>`

### replacePlayerHurtEntityCriteria

```java
private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>> replacePlayerHurtEntityCriteria(Predicate<EntityPredicateReplacementHelper> predicateHelper)
```

**Parameters:**

- `predicateHelper` (`Predicate<EntityPredicateReplacementHelper>`)

**Returns:** `private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>>`

### predicateMatches

```java
private static boolean predicateMatches(ItemPredicate predicate, ItemLike[]... targets)
```

**Parameters:**

- `predicate` (`ItemPredicate`)
- `targets` (`ItemLike[]...`)

**Returns:** `private static boolean`

### predicateMatches

```java
private static boolean predicateMatches(ItemPredicate predicate, TagKey<Item> tagKey)
```

**Parameters:**

- `predicate` (`ItemPredicate`)
- `tagKey` (`TagKey<Item>`)

**Returns:** `private static boolean`

### replaceLootEntityPredicate

```java
private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>> replaceLootEntityPredicate(Predicate<EntityPredicateReplacementHelper> predicateHelper)
```

**Parameters:**

- `predicateHelper` (`Predicate<EntityPredicateReplacementHelper>`)

**Returns:** `private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>>`

### replacePlayerPredicate

```java
return replacePlayerPredicate(condition -> { boolean invert = false; if (condition instanceof InvertedLootItemCondition inverted)
```

**Parameters:**

- `inverted` (`condition -> { boolean invert = false; if (condition instanceof InvertedLootItemCondition`)

**Returns:** `return`

### replacePlayerPredicate

```java
private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>> replacePlayerPredicate(UnaryOperator<LootItemCondition> replacer, Predicate<LootItemCondition> shouldSkipReplacement)
```

**Parameters:**

- `replacer` (`UnaryOperator<LootItemCondition>`)
- `shouldSkipReplacement` (`Predicate<LootItemCondition>`)

**Returns:** `private static BiFunction<Criterion<?>, HolderLookup.Provider, Criterion<?>>`

### replacePlayerPredicate

```java
<T extends SimpleCriterionTrigger.SimpleInstance> private static <T extends SimpleCriterionTrigger.SimpleInstance> Criterion<T> replacePlayerPredicate(Criterion<T> old, ContextAwarePredicate newPlayer, HolderLookup.Provider registries)
```

**Parameters:**

- `old` (`Criterion<T>`)
- `newPlayer` (`ContextAwarePredicate`)
- `registries` (`HolderLookup.Provider`)

**Returns:** `private static <T extends SimpleCriterionTrigger.SimpleInstance> Criterion<T>`

### getPrivateValue

```java
<T, C> private static <T, C> T getPrivateValue(Class<C> clazz, C inst, String name)
```

**Parameters:**

- `clazz` (`Class<C>`)
- `inst` (`C`)
- `name` (`String`)

**Returns:** `private static <T, C> T`

### generate

```java
public void generate(HolderLookup.Provider registries, Consumer<AdvancementHolder> saver)
```

**Parameters:**

- `registries` (`HolderLookup.Provider`)
- `saver` (`Consumer<AdvancementHolder>`)

### listRegistryKeys

```java
public Stream<ResourceKey<? extends Registry<?>>> listRegistryKeys()
```

**Returns:** `Stream<ResourceKey<? extends Registry<?>>>`

### lookup

```java
public <T> Optional<? extends HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> key)
```

**Parameters:**

- `key` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<? extends HolderLookup.RegistryLookup<T>>`

### createSerializationContext

```java
public <V> RegistryOps<V> createSerializationContext(DynamicOps<V> parent)
```

**Parameters:**

- `parent` (`DynamicOps<V>`)

**Returns:** `RegistryOps<V>`

### lookup

```java
public <T> Optional<RegistryOps.RegistryInfo<T>> lookup(ResourceKey<? extends Registry<? extends T>> registry)
```

**Parameters:**

- `registry` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<RegistryOps.RegistryInfo<T>>`

### parent

```java
public RegistryLookup<T> parent()
```

**Returns:** `RegistryLookup<T>`

### canSerializeIn

```java
public boolean canSerializeIn(HolderOwner<T> context)
```

**Parameters:**

- `context` (`HolderOwner<T>`)

**Returns:** `boolean`

### get

```java
public Optional<HolderSet.Named<T>> get(TagKey<T> tagKey)
```

**Parameters:**

- `tagKey` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### findAndReplaceInHolder

```java
Builder findAndReplaceInHolder(AdvancementHolder advancementHolder, HolderLookup.Provider registries)
```

**Parameters:**

- `advancementHolder` (`AdvancementHolder`)
- `registries` (`HolderLookup.Provider`)

**Returns:** `Builder`

### EntityPredicateReplacementHelper

```java
public EntityPredicateReplacementHelper(EntityPredicate source)
```

**Parameters:**

- `source` (`EntityPredicate`)

**Returns:** `public`

### clearTypeIfMatches

```java
public boolean clearTypeIfMatches(EntityType<?> type)
```

**Parameters:**

- `type` (`EntityType<?>`)

**Returns:** `public boolean`

### clearEquipmentIfMatches

```java
public boolean clearEquipmentIfMatches(Predicate<EntityEquipmentPredicate> shouldReplace)
```

**Parameters:**

- `shouldReplace` (`Predicate<EntityEquipmentPredicate>`)

**Returns:** `public boolean`

### replaceSubPredicate

```java
public void replaceSubPredicate(EntitySubPredicate predicate)
```

**Parameters:**

- `predicate` (`EntitySubPredicate`)

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Attempting to replace an entity predicate that already has a sub predicate")
```

**Parameters:**

- `predicate"` (`"Attempting to replace an entity predicate that already has a sub`)

**Returns:** `throw new`

### create

```java
public EntityPredicate create()
```

**Returns:** `public EntityPredicate`
