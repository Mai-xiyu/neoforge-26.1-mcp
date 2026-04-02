# SuggestionProviders

**Package:** `net.minecraft.commands.synchronization`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ASK_SERVER` | `SuggestionProvider<SharedSuggestionProvider>` |  |
| `ALL_RECIPES` | `SuggestionProvider<CommandSourceStack>` |  |
| `AVAILABLE_SOUNDS` | `SuggestionProvider<CommandSourceStack>` |  |
| `SUMMONABLE_ENTITIES` | `SuggestionProvider<CommandSourceStack>` |  |

## Methods

### register

```java
<S extends SharedSuggestionProvider> public static <S extends SharedSuggestionProvider> SuggestionProvider<S> register(ResourceLocation p_121659_, SuggestionProvider<SharedSuggestionProvider> p_121660_)
```

**Parameters:**

- `p_121659_` (`ResourceLocation`)
- `p_121660_` (`SuggestionProvider<SharedSuggestionProvider>`)

**Returns:** `public static <S extends SharedSuggestionProvider> SuggestionProvider<S>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("A command suggestion provider is already registered with the name " + p_121659_)
```

**Parameters:**

- `p_121659_` (`"A command suggestion provider is already registered with the name " +`)

**Returns:** `throw new`

### getProvider

```java
public static SuggestionProvider<SharedSuggestionProvider> getProvider(ResourceLocation p_121657_)
```

**Parameters:**

- `p_121657_` (`ResourceLocation`)

**Returns:** `public static SuggestionProvider<SharedSuggestionProvider>`

### getName

```java
public static ResourceLocation getName(SuggestionProvider<SharedSuggestionProvider> p_121655_)
```

**Parameters:**

- `p_121655_` (`SuggestionProvider<SharedSuggestionProvider>`)

**Returns:** `public static ResourceLocation`

### safelySwap

```java
public static SuggestionProvider<SharedSuggestionProvider> safelySwap(SuggestionProvider<SharedSuggestionProvider> p_121665_)
```

**Parameters:**

- `p_121665_` (`SuggestionProvider<SharedSuggestionProvider>`)

**Returns:** `public static SuggestionProvider<SharedSuggestionProvider>`

### Wrapper

```java
public Wrapper(ResourceLocation p_121678_, SuggestionProvider<SharedSuggestionProvider> p_121679_)
```

**Parameters:**

- `p_121678_` (`ResourceLocation`)
- `p_121679_` (`SuggestionProvider<SharedSuggestionProvider>`)

**Returns:** `public`

### getSuggestions

```java
public CompletableFuture<Suggestions> getSuggestions(CommandContext<SharedSuggestionProvider> p_121683_, SuggestionsBuilder p_121684_)
```

**Parameters:**

- `p_121683_` (`CommandContext<SharedSuggestionProvider>`)
- `p_121684_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Wrapper` | class |  |
