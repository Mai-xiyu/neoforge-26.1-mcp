# ReloadableServerResources

**Package:** `net.minecraft.server`
**Type:** class
**Side:** 🖧 Server

## Methods

### ReloadableServerResources

```java
private ReloadableServerResources(RegistryAccess.Frozen p_206857_, FeatureFlagSet p_250695_, Commands.CommandSelection p_206858_, int p_206859_)
```

**Parameters:**

- `p_206857_` (`RegistryAccess.Frozen`)
- `p_250695_` (`FeatureFlagSet`)
- `p_206858_` (`Commands.CommandSelection`)
- `p_206859_` (`int`)

**Returns:** `private`

### getFunctionLibrary

```java
public ServerFunctionLibrary getFunctionLibrary()
```

**Returns:** `public ServerFunctionLibrary`

### fullRegistries

```java
public ReloadableServerRegistries.Holder fullRegistries()
```

**Returns:** `public ReloadableServerRegistries.Holder`

### getRecipeManager

```java
public RecipeManager getRecipeManager()
```

**Returns:** `public RecipeManager`

### getCommands

```java
public Commands getCommands()
```

**Returns:** `public Commands`

### getAdvancements

```java
public ServerAdvancementManager getAdvancements()
```

**Returns:** `public ServerAdvancementManager`

### listeners

```java
public List<PreparableReloadListener> listeners()
```

**Returns:** `public List<PreparableReloadListener>`

### getConditionContext

```java
public net.neoforged.neoforge.common.conditions.ICondition.IContext getConditionContext()
```

**Returns:** `net.neoforged.neoforge.common.conditions.ICondition.IContext`

### getRegistryLookup

```java
public HolderLookup.Provider getRegistryLookup()
```

**Returns:** `HolderLookup.Provider`

### loadResources

```java
public static CompletableFuture<ReloadableServerResources> loadResources(ResourceManager p_248588_, LayeredRegistryAccess<RegistryLayer> p_335667_, FeatureFlagSet p_250212_, Commands.CommandSelection p_249301_, int p_251126_, Executor p_249136_, Executor p_249601_)
```

**Parameters:**

- `p_248588_` (`ResourceManager`)
- `p_335667_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_250212_` (`FeatureFlagSet`)
- `p_249301_` (`Commands.CommandSelection`)
- `p_251126_` (`int`)
- `p_249136_` (`Executor`)
- `p_249601_` (`Executor`)

**Returns:** `public static CompletableFuture<ReloadableServerResources>`

### updateRegistryTags

```java
public void updateRegistryTags()
```

**Returns:** `public void`

### updateRegistryTags

```java
<T> private static <T> void updateRegistryTags(RegistryAccess p_206871_, TagManager.LoadResult<T> p_206872_)
```

**Parameters:**

- `p_206871_` (`RegistryAccess`)
- `p_206872_` (`TagManager.LoadResult<T>`)

**Returns:** `private static <T> void`

### ConfigurableRegistryLookup

```java
 ConfigurableRegistryLookup(RegistryAccess p_324146_)
```

**Parameters:**

- `p_324146_` (`RegistryAccess`)

**Returns:** ``

### missingTagAccessPolicy

```java
public void missingTagAccessPolicy(ReloadableServerResources.MissingTagAccessPolicy p_324138_)
```

**Parameters:**

- `p_324138_` (`ReloadableServerResources.MissingTagAccessPolicy`)

**Returns:** `public void`

### listRegistries

```java
public Stream<ResourceKey<? extends Registry<?>>> listRegistries()
```

**Returns:** `Stream<ResourceKey<? extends Registry<?>>>`

### lookup

```java
public <T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_323818_)
```

**Parameters:**

- `p_323818_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<HolderLookup.RegistryLookup<T>>`

### createDispatchedLookup

```java
<T> private <T> HolderLookup.RegistryLookup<T> createDispatchedLookup(HolderLookup.RegistryLookup<T> p_324196_, HolderLookup.RegistryLookup<T> p_323710_)
```

**Parameters:**

- `p_324196_` (`HolderLookup.RegistryLookup<T>`)
- `p_323710_` (`HolderLookup.RegistryLookup<T>`)

**Returns:** `private <T> HolderLookup.RegistryLookup<T>`

### parent

```java
public HolderLookup.RegistryLookup<T> parent()
```

**Returns:** `HolderLookup.RegistryLookup<T>`
