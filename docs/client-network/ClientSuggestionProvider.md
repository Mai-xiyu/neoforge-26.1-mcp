# ClientSuggestionProvider

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Implements:** `SharedSuggestionProvider`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ClientSuggestionProvider

```java
public ClientSuggestionProvider(ClientPacketListener p_105165_, Minecraft p_105166_)
```

**Parameters:**

- `p_105165_` (`ClientPacketListener`)
- `p_105166_` (`Minecraft`)

**Returns:** `public`

### getOnlinePlayerNames

```java
public Collection<String> getOnlinePlayerNames()
```

**Returns:** `Collection<String>`

### getCustomTabSugggestions

```java
public Collection<String> getCustomTabSugggestions()
```

**Returns:** `Collection<String>`

### getSelectedEntities

```java
public Collection<String> getSelectedEntities()
```

**Returns:** `Collection<String>`

### getAllTeams

```java
public Collection<String> getAllTeams()
```

**Returns:** `Collection<String>`

### getAvailableSounds

```java
public Stream<ResourceLocation> getAvailableSounds()
```

**Returns:** `Stream<ResourceLocation>`

### getRecipeNames

```java
public Stream<ResourceLocation> getRecipeNames()
```

**Returns:** `Stream<ResourceLocation>`

### hasPermission

```java
public boolean hasPermission(int p_105178_)
```

**Parameters:**

- `p_105178_` (`int`)

**Returns:** `boolean`

### suggestRegistryElements

```java
public CompletableFuture<Suggestions> suggestRegistryElements(ResourceKey<? extends Registry<?>> p_212429_, SharedSuggestionProvider.ElementSuggestionType p_212430_, SuggestionsBuilder p_212431_, CommandContext<?> p_212432_)
```

**Parameters:**

- `p_212429_` (`ResourceKey<? extends Registry<?>>`)
- `p_212430_` (`SharedSuggestionProvider.ElementSuggestionType`)
- `p_212431_` (`SuggestionsBuilder`)
- `p_212432_` (`CommandContext<?>`)

**Returns:** `CompletableFuture<Suggestions>`

### customSuggestion

```java
public CompletableFuture<Suggestions> customSuggestion(CommandContext<?> p_212423_)
```

**Parameters:**

- `p_212423_` (`CommandContext<?>`)

**Returns:** `CompletableFuture<Suggestions>`

### prettyPrint

```java
private static String prettyPrint(double p_105168_)
```

**Parameters:**

- `p_105168_` (`double`)

**Returns:** `private static String`

### prettyPrint

```java
private static String prettyPrint(int p_105170_)
```

**Parameters:**

- `p_105170_` (`int`)

**Returns:** `private static String`

### getRelevantCoordinates

```java
public Collection<SharedSuggestionProvider.TextCoordinates> getRelevantCoordinates()
```

**Returns:** `Collection<SharedSuggestionProvider.TextCoordinates>`

### getAbsoluteCoordinates

```java
public Collection<SharedSuggestionProvider.TextCoordinates> getAbsoluteCoordinates()
```

**Returns:** `Collection<SharedSuggestionProvider.TextCoordinates>`

### levels

```java
public Set<ResourceKey<Level>> levels()
```

**Returns:** `Set<ResourceKey<Level>>`

### registryAccess

```java
public RegistryAccess registryAccess()
```

**Returns:** `RegistryAccess`

### enabledFeatures

```java
public FeatureFlagSet enabledFeatures()
```

**Returns:** `FeatureFlagSet`

### completeCustomSuggestions

```java
public void completeCustomSuggestions(int p_105172_, Suggestions p_105173_)
```

**Parameters:**

- `p_105172_` (`int`)
- `p_105173_` (`Suggestions`)

**Returns:** `public void`

### modifyCustomCompletions

```java
public void modifyCustomCompletions(ClientboundCustomChatCompletionsPacket.Action p_240810_, List<String> p_240765_)
```

**Parameters:**

- `p_240810_` (`ClientboundCustomChatCompletionsPacket.Action`)
- `p_240765_` (`List<String>`)

**Returns:** `public void`
