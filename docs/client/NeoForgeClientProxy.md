# NeoForgeClientProxy

**Package:** `net.neoforged.neoforge.client.internal`
**Type:** class
**Extends:** `NeoForgeProxy`
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Methods

### getClientExecutor

```java
public BlockableEventLoop<Runnable> getClientExecutor()
```

**Returns:** `BlockableEventLoop<Runnable>`

### getTooltipFlag

```java
public TooltipFlag getTooltipFlag()
```

**Returns:** `TooltipFlag`

### resolveLookup

```java
RegistryLookup<T> resolveLookup(ResourceKey<? extends Registry<T>> key)
```

**Parameters:**

- `key` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `RegistryLookup<T>`
