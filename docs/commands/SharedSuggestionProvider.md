# SharedSuggestionProvider

**Package:** `net.minecraft.commands`
**Type:** interface

## Methods

### getOnlinePlayerNames

```java
Collection<String> getOnlinePlayerNames()
```

**Returns:** `Collection<String>`

### getCustomTabSugggestions

```java
default Collection<String> getCustomTabSugggestions()
```

**Returns:** `default Collection<String>`

### getSelectedEntities

```java
default Collection<String> getSelectedEntities()
```

**Returns:** `default Collection<String>`

### getAllTeams

```java
Collection<String> getAllTeams()
```

**Returns:** `Collection<String>`

### getAvailableSounds

```java
Stream<ResourceLocation> getAvailableSounds()
```

**Returns:** `Stream<ResourceLocation>`

### getRecipeNames

```java
Stream<ResourceLocation> getRecipeNames()
```

**Returns:** `Stream<ResourceLocation>`

### customSuggestion

```java
CompletableFuture<Suggestions> customSuggestion(CommandContext<?> p_212334_)
```

**Parameters:**

- `p_212334_` (`CommandContext<?>`)

**Returns:** `CompletableFuture<Suggestions>`

### getRelevantCoordinates

```java
default Collection<SharedSuggestionProvider.TextCoordinates> getRelevantCoordinates()
```

**Returns:** `default Collection<SharedSuggestionProvider.TextCoordinates>`

### getAbsoluteCoordinates

```java
default Collection<SharedSuggestionProvider.TextCoordinates> getAbsoluteCoordinates()
```

**Returns:** `default Collection<SharedSuggestionProvider.TextCoordinates>`

### levels

```java
Set<ResourceKey<Level>> levels()
```

**Returns:** `Set<ResourceKey<Level>>`

### registryAccess

```java
RegistryAccess registryAccess()
```

**Returns:** `RegistryAccess`

### enabledFeatures

```java
FeatureFlagSet enabledFeatures()
```

**Returns:** `FeatureFlagSet`

### suggestRegistryElements

```java
default void suggestRegistryElements(Registry<?> p_212336_, SharedSuggestionProvider.ElementSuggestionType p_212337_, SuggestionsBuilder p_212338_)
```

**Parameters:**

- `p_212336_` (`Registry<?>`)
- `p_212337_` (`SharedSuggestionProvider.ElementSuggestionType`)
- `p_212338_` (`SuggestionsBuilder`)

**Returns:** `default void`

### suggestRegistryElements

```java
CompletableFuture<Suggestions> suggestRegistryElements(ResourceKey<? extends Registry<?>> p_212339_, SharedSuggestionProvider.ElementSuggestionType p_212340_, SuggestionsBuilder p_212341_, CommandContext<?> p_212342_)
```

**Parameters:**

- `p_212339_` (`ResourceKey<? extends Registry<?>>`)
- `p_212340_` (`SharedSuggestionProvider.ElementSuggestionType`)
- `p_212341_` (`SuggestionsBuilder`)
- `p_212342_` (`CommandContext<?>`)

**Returns:** `CompletableFuture<Suggestions>`

### hasPermission

```java
boolean hasPermission(int p_82986_)
```

**Parameters:**

- `p_82986_` (`int`)

**Returns:** `boolean`

### filterResources

```java
<T> static <T> void filterResources(Iterable<T> p_82945_, String p_82946_, Function<T, ResourceLocation> p_82947_, Consumer<T> p_82948_)
```

**Parameters:**

- `p_82945_` (`Iterable<T>`)
- `p_82946_` (`String`)
- `p_82947_` (`Function<T, ResourceLocation>`)
- `p_82948_` (`Consumer<T>`)

**Returns:** `static <T> void`

### filterResources

```java
<T> static <T> void filterResources(Iterable<T> p_82939_, String p_82940_, String p_82941_, Function<T, ResourceLocation> p_82942_, Consumer<T> p_82943_)
```

**Parameters:**

- `p_82939_` (`Iterable<T>`)
- `p_82940_` (`String`)
- `p_82941_` (`String`)
- `p_82942_` (`Function<T, ResourceLocation>`)
- `p_82943_` (`Consumer<T>`)

**Returns:** `static <T> void`

### filterResources

```java
 filterResources()
```

**Returns:** ``

### suggestResource

```java
static CompletableFuture<Suggestions> suggestResource(Iterable<ResourceLocation> p_82930_, SuggestionsBuilder p_82931_, String p_82932_)
```

**Parameters:**

- `p_82930_` (`Iterable<ResourceLocation>`)
- `p_82931_` (`SuggestionsBuilder`)
- `p_82932_` (`String`)

**Returns:** `static CompletableFuture<Suggestions>`

### suggestResource

```java
static CompletableFuture<Suggestions> suggestResource(Stream<ResourceLocation> p_205107_, SuggestionsBuilder p_205108_, String p_205109_)
```

**Parameters:**

- `p_205107_` (`Stream<ResourceLocation>`)
- `p_205108_` (`SuggestionsBuilder`)
- `p_205109_` (`String`)

**Returns:** `static CompletableFuture<Suggestions>`

### suggestResource

```java
return suggestResource()
```

**Returns:** `return`

### suggestResource

```java
static CompletableFuture<Suggestions> suggestResource(Iterable<ResourceLocation> p_82927_, SuggestionsBuilder p_82928_)
```

**Parameters:**

- `p_82927_` (`Iterable<ResourceLocation>`)
- `p_82928_` (`SuggestionsBuilder`)

**Returns:** `static CompletableFuture<Suggestions>`

### suggestResource

```java
<T> static <T> CompletableFuture<Suggestions> suggestResource(Iterable<T> p_82934_, SuggestionsBuilder p_82935_, Function<T, ResourceLocation> p_82936_, Function<T, Message> p_82937_)
```

**Parameters:**

- `p_82934_` (`Iterable<T>`)
- `p_82935_` (`SuggestionsBuilder`)
- `p_82936_` (`Function<T, ResourceLocation>`)
- `p_82937_` (`Function<T, Message>`)

**Returns:** `static <T> CompletableFuture<Suggestions>`

### suggestResource

```java
static CompletableFuture<Suggestions> suggestResource(Stream<ResourceLocation> p_82958_, SuggestionsBuilder p_82959_)
```

**Parameters:**

- `p_82958_` (`Stream<ResourceLocation>`)
- `p_82959_` (`SuggestionsBuilder`)

**Returns:** `static CompletableFuture<Suggestions>`

### suggestResource

```java
return suggestResource()
```

**Returns:** `return`

### suggestResource

```java
<T> static <T> CompletableFuture<Suggestions> suggestResource(Stream<T> p_82961_, SuggestionsBuilder p_82962_, Function<T, ResourceLocation> p_82963_, Function<T, Message> p_82964_)
```

**Parameters:**

- `p_82961_` (`Stream<T>`)
- `p_82962_` (`SuggestionsBuilder`)
- `p_82963_` (`Function<T, ResourceLocation>`)
- `p_82964_` (`Function<T, Message>`)

**Returns:** `static <T> CompletableFuture<Suggestions>`

### suggestResource

```java
return suggestResource()
```

**Returns:** `return`

### suggestCoordinates

```java
static CompletableFuture<Suggestions> suggestCoordinates(String p_82953_, Collection<SharedSuggestionProvider.TextCoordinates> p_82954_, SuggestionsBuilder p_82955_, Predicate<String> p_82956_)
```

**Parameters:**

- `p_82953_` (`String`)
- `p_82954_` (`Collection<SharedSuggestionProvider.TextCoordinates>`)
- `p_82955_` (`SuggestionsBuilder`)
- `p_82956_` (`Predicate<String>`)

**Returns:** `static CompletableFuture<Suggestions>`

### suggest

```java
return suggest()
```

**Returns:** `return`

### suggest2DCoordinates

```java
static CompletableFuture<Suggestions> suggest2DCoordinates(String p_82977_, Collection<SharedSuggestionProvider.TextCoordinates> p_82978_, SuggestionsBuilder p_82979_, Predicate<String> p_82980_)
```

**Parameters:**

- `p_82977_` (`String`)
- `p_82978_` (`Collection<SharedSuggestionProvider.TextCoordinates>`)
- `p_82979_` (`SuggestionsBuilder`)
- `p_82980_` (`Predicate<String>`)

**Returns:** `static CompletableFuture<Suggestions>`

### suggest

```java
return suggest()
```

**Returns:** `return`

### suggest

```java
static CompletableFuture<Suggestions> suggest(Iterable<String> p_82971_, SuggestionsBuilder p_82972_)
```

**Parameters:**

- `p_82971_` (`Iterable<String>`)
- `p_82972_` (`SuggestionsBuilder`)

**Returns:** `static CompletableFuture<Suggestions>`

### suggest

```java
static CompletableFuture<Suggestions> suggest(Stream<String> p_82982_, SuggestionsBuilder p_82983_)
```

**Parameters:**

- `p_82982_` (`Stream<String>`)
- `p_82983_` (`SuggestionsBuilder`)

**Returns:** `static CompletableFuture<Suggestions>`

### suggest

```java
static CompletableFuture<Suggestions> suggest(String[] p_82968_, SuggestionsBuilder p_82969_)
```

**Parameters:**

- `p_82968_` (`String[]`)
- `p_82969_` (`SuggestionsBuilder`)

**Returns:** `static CompletableFuture<Suggestions>`

### suggest

```java
<T> static <T> CompletableFuture<Suggestions> suggest(Iterable<T> p_165917_, SuggestionsBuilder p_165918_, Function<T, String> p_165919_, Function<T, Message> p_165920_)
```

**Parameters:**

- `p_165917_` (`Iterable<T>`)
- `p_165918_` (`SuggestionsBuilder`)
- `p_165919_` (`Function<T, String>`)
- `p_165920_` (`Function<T, Message>`)

**Returns:** `static <T> CompletableFuture<Suggestions>`

### matchesSubStr

```java
static boolean matchesSubStr(String p_82950_, String p_82951_)
```

**Parameters:**

- `p_82950_` (`String`)
- `p_82951_` (`String`)

**Returns:** `static boolean`

### shouldSuggestTags

```java
public boolean shouldSuggestTags()
```

**Returns:** `public boolean`

### shouldSuggestElements

```java
public boolean shouldSuggestElements()
```

**Returns:** `public boolean`

### TextCoordinates

```java
public TextCoordinates(String p_82994_, String p_82995_, String p_82996_)
```

**Parameters:**

- `p_82994_` (`String`)
- `p_82995_` (`String`)
- `p_82996_` (`String`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ElementSuggestionType` | enum |  |
| `TextCoordinates` | class |  |
