# ConditionContext

**Package:** `net.neoforged.neoforge.common.conditions`
**Type:** class
**Implements:** `ICondition.IContext`

## Methods

### ConditionContext

```java
public ConditionContext(TagManager tagManager)
```

**Parameters:**

- `tagManager` (`TagManager`)

**Returns:** `public`

### getAllTags

```java
public <T> Map<ResourceLocation, Collection<Holder<T>>> getAllTags(ResourceKey<? extends Registry<T>> registry)
```

**Parameters:**

- `registry` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `Map<ResourceLocation, Collection<Holder<T>>>`

### IllegalStateException

```java
throw new IllegalStateException("Tags have not been loaded yet.")
```

**Parameters:**

- `yet."` (`"Tags have not been loaded`)

**Returns:** `throw new`
