# ServerFunctionLibrary

**Package:** `net.minecraft.server`
**Type:** class
**Implements:** `PreparableReloadListener`
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TYPE_KEY` | `ResourceKey<Registry<CommandFunction<CommandSourceStack>>>` |  |

## Methods

### getFunction

```java
public Optional<CommandFunction<CommandSourceStack>> getFunction(ResourceLocation p_136090_)
```

**Parameters:**

- `p_136090_` (`ResourceLocation`)

**Returns:** `public Optional<CommandFunction<CommandSourceStack>>`

### getFunctions

```java
public Map<ResourceLocation, CommandFunction<CommandSourceStack>> getFunctions()
```

**Returns:** `public Map<ResourceLocation, CommandFunction<CommandSourceStack>>`

### getTag

```java
public Collection<CommandFunction<CommandSourceStack>> getTag(ResourceLocation p_214328_)
```

**Parameters:**

- `p_214328_` (`ResourceLocation`)

**Returns:** `public Collection<CommandFunction<CommandSourceStack>>`

### getAvailableTags

```java
public Iterable<ResourceLocation> getAvailableTags()
```

**Returns:** `public Iterable<ResourceLocation>`

### ServerFunctionLibrary

```java
public ServerFunctionLibrary(int p_136053_, CommandDispatcher<CommandSourceStack> p_136054_)
```

**Parameters:**

- `p_136053_` (`int`)
- `p_136054_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public`

### reload

```java
public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_136057_, ResourceManager p_136058_, ProfilerFiller p_136059_, ProfilerFiller p_136060_, Executor p_136061_, Executor p_136062_)
```

**Parameters:**

- `p_136057_` (`PreparableReloadListener.PreparationBarrier`)
- `p_136058_` (`ResourceManager`)
- `p_136059_` (`ProfilerFiller`)
- `p_136060_` (`ProfilerFiller`)
- `p_136061_` (`Executor`)
- `p_136062_` (`Executor`)

**Returns:** `CompletableFuture<Void>`

### readLines

```java
private static List<String> readLines(Resource p_214317_)
```

**Parameters:**

- `p_214317_` (`Resource`)

**Returns:** `private static List<String>`

### CompletionException

```java
throw new CompletionException()
```

**Returns:** `throw new`
