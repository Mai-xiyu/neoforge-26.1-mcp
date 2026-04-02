# RecipePriorityManager

**Package:** `net.neoforged.neoforge.common.crafting`
**Type:** class
**Extends:** `SimplePreparableReloadListener<Object2IntMap<ResourceKey<Recipe<?>>>>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LOGGER` | `Logger` |  |

## Methods

### RecipePriorityManager

```java
public RecipePriorityManager(RecipeManager recipeManager)
```

**Parameters:**

- `recipeManager` (`RecipeManager`)

**Returns:** `public`

### prepare

```java
protected Object2IntMap<ResourceKey<Recipe<?>>> prepare(ResourceManager resourceManager, ProfilerFiller profilerFiller)
```

**Parameters:**

- `resourceManager` (`ResourceManager`)
- `profilerFiller` (`ProfilerFiller`)

**Returns:** `Object2IntMap<ResourceKey<Recipe<?>>>`

### apply

```java
protected void apply(Object2IntMap<ResourceKey<Recipe<?>>> map, ResourceManager resourceManager, ProfilerFiller profilerFiller)
```

**Parameters:**

- `map` (`Object2IntMap<ResourceKey<Recipe<?>>>`)
- `resourceManager` (`ResourceManager`)
- `profilerFiller` (`ProfilerFiller`)

### getRecipePriorities

```java
public Object2IntMap<ResourceKey<Recipe<?>>> getRecipePriorities()
```

**Returns:** `Object2IntMap<ResourceKey<Recipe<?>>>`
