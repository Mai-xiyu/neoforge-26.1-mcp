# ItemPredicateArgument

**Package:** `net.minecraft.commands.arguments.item`
**Type:** class
**Implements:** `ArgumentType<ItemPredicateArgument.Result>`

## Methods

### ItemPredicateArgument

```java
public ItemPredicateArgument(CommandBuildContext p_235352_)
```

**Parameters:**

- `p_235352_` (`CommandBuildContext`)

**Returns:** `public`

### itemPredicate

```java
public static ItemPredicateArgument itemPredicate(CommandBuildContext p_235354_)
```

**Parameters:**

- `p_235354_` (`CommandBuildContext`)

**Returns:** `public static ItemPredicateArgument`

### ItemPredicateArgument

```java
return new ItemPredicateArgument()
```

**Returns:** `return new`

### parse

```java
public ItemPredicateArgument.Result parse(StringReader p_121039_)
```

**Parameters:**

- `p_121039_` (`StringReader`)

**Returns:** `public ItemPredicateArgument.Result`

### getItemPredicate

```java
public static ItemPredicateArgument.Result getItemPredicate(CommandContext<CommandSourceStack> p_121041_, String p_121042_)
```

**Parameters:**

- `p_121041_` (`CommandContext<CommandSourceStack>`)
- `p_121042_` (`String`)

**Returns:** `public static ItemPredicateArgument.Result`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_121054_, SuggestionsBuilder p_121055_)
```

**Parameters:**

- `p_121054_` (`CommandContext<S>`)
- `p_121055_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### ComponentWrapper

```java
static record ComponentWrapper(ResourceLocation id, Predicate<ItemStack> presenceChecker, Decoder<? extends Predicate<ItemStack>> valueChecker)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `presenceChecker` (`Predicate<ItemStack>`)
- `valueChecker` (`Decoder<? extends Predicate<ItemStack>>`)

**Returns:** `static record`

### create

```java
<T> public static <T> ItemPredicateArgument.ComponentWrapper create(ImmutableStringReader p_335592_, ResourceLocation p_335737_, DataComponentType<T> p_335860_)
```

**Parameters:**

- `p_335592_` (`ImmutableStringReader`)
- `p_335737_` (`ResourceLocation`)
- `p_335860_` (`DataComponentType<T>`)

**Returns:** `public static <T> ItemPredicateArgument.ComponentWrapper`

### decode

```java
public Predicate<ItemStack> decode(ImmutableStringReader p_335970_, RegistryOps<Tag> p_335855_, Tag p_335892_)
```

**Parameters:**

- `p_335970_` (`ImmutableStringReader`)
- `p_335855_` (`RegistryOps<Tag>`)
- `p_335892_` (`Tag`)

**Returns:** `public Predicate<ItemStack>`

### Context

```java
 Context(HolderLookup.Provider p_335856_)
```

**Parameters:**

- `p_335856_` (`HolderLookup.Provider`)

**Returns:** ``

### forElementType

```java
public Predicate<ItemStack> forElementType(ImmutableStringReader p_335407_, ResourceLocation p_335837_)
```

**Parameters:**

- `p_335407_` (`ImmutableStringReader`)
- `p_335837_` (`ResourceLocation`)

**Returns:** `public Predicate<ItemStack>`

### forTagType

```java
public Predicate<ItemStack> forTagType(ImmutableStringReader p_335801_, ResourceLocation p_336117_)
```

**Parameters:**

- `p_335801_` (`ImmutableStringReader`)
- `p_336117_` (`ResourceLocation`)

**Returns:** `public Predicate<ItemStack>`

### lookupComponentType

```java
public ItemPredicateArgument.ComponentWrapper lookupComponentType(ImmutableStringReader p_336180_, ResourceLocation p_335872_)
```

**Parameters:**

- `p_336180_` (`ImmutableStringReader`)
- `p_335872_` (`ResourceLocation`)

**Returns:** `public ItemPredicateArgument.ComponentWrapper`

### createComponentTest

```java
public Predicate<ItemStack> createComponentTest(ImmutableStringReader p_335953_, ItemPredicateArgument.ComponentWrapper p_335824_, Tag p_335973_)
```

**Parameters:**

- `p_335953_` (`ImmutableStringReader`)
- `p_335824_` (`ItemPredicateArgument.ComponentWrapper`)
- `p_335973_` (`Tag`)

**Returns:** `public Predicate<ItemStack>`

### createComponentTest

```java
public Predicate<ItemStack> createComponentTest(ImmutableStringReader p_335602_, ItemPredicateArgument.ComponentWrapper p_335607_)
```

**Parameters:**

- `p_335602_` (`ImmutableStringReader`)
- `p_335607_` (`ItemPredicateArgument.ComponentWrapper`)

**Returns:** `public Predicate<ItemStack>`

### lookupPredicateType

```java
public ItemPredicateArgument.PredicateWrapper lookupPredicateType(ImmutableStringReader p_335514_, ResourceLocation p_335709_)
```

**Parameters:**

- `p_335514_` (`ImmutableStringReader`)
- `p_335709_` (`ResourceLocation`)

**Returns:** `public ItemPredicateArgument.PredicateWrapper`

### createPredicateTest

```java
public Predicate<ItemStack> createPredicateTest(ImmutableStringReader p_335414_, ItemPredicateArgument.PredicateWrapper p_335561_, Tag p_336073_)
```

**Parameters:**

- `p_335414_` (`ImmutableStringReader`)
- `p_335561_` (`ItemPredicateArgument.PredicateWrapper`)
- `p_336073_` (`Tag`)

**Returns:** `public Predicate<ItemStack>`

### listElementTypes

```java
public Stream<ResourceLocation> listElementTypes()
```

**Returns:** `Stream<ResourceLocation>`

### listTagTypes

```java
public Stream<ResourceLocation> listTagTypes()
```

**Returns:** `Stream<ResourceLocation>`

### listComponentTypes

```java
public Stream<ResourceLocation> listComponentTypes()
```

**Returns:** `Stream<ResourceLocation>`

### listPredicateTypes

```java
public Stream<ResourceLocation> listPredicateTypes()
```

**Returns:** `Stream<ResourceLocation>`

### negate

```java
public Predicate<ItemStack> negate(Predicate<ItemStack> p_335412_)
```

**Parameters:**

- `p_335412_` (`Predicate<ItemStack>`)

**Returns:** `public Predicate<ItemStack>`

### anyOf

```java
public Predicate<ItemStack> anyOf(List<Predicate<ItemStack>> p_336064_)
```

**Parameters:**

- `p_336064_` (`List<Predicate<ItemStack>>`)

**Returns:** `public Predicate<ItemStack>`

### PredicateWrapper

```java
static record PredicateWrapper(ResourceLocation id, Decoder<? extends Predicate<ItemStack>> type)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `type` (`Decoder<? extends Predicate<ItemStack>>`)

**Returns:** `static record`

### PredicateWrapper

```java
public PredicateWrapper(Holder.Reference<ItemSubPredicate.Type<?>> p_336100_)
```

**Parameters:**

- `p_336100_` (`Holder.Reference<ItemSubPredicate.Type<?>>`)

**Returns:** `public`

### decode

```java
public Predicate<ItemStack> decode(ImmutableStringReader p_335497_, RegistryOps<Tag> p_335845_, Tag p_335487_)
```

**Parameters:**

- `p_335497_` (`ImmutableStringReader`)
- `p_335845_` (`RegistryOps<Tag>`)
- `p_335487_` (`Tag`)

**Returns:** `public Predicate<ItemStack>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Result` | interface |  |
