# NeoForgeProxy

**Package:** `net.neoforged.neoforge.internal`
**Type:** class
**Annotations:** `@ApiStatus`

## Description

Allows common code to call client-only methods, through `NeoForgeClientProxy`.


Try not to add methods to this class, there are generally better ways to
handle this kind of thing, possibly through different API design.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `NeoForgeProxy` |  |

## Methods

### instantiate

```java
private static NeoForgeProxy instantiate()
```

**Returns:** `private static NeoForgeProxy`

### RuntimeException

```java
throw new RuntimeException("Failed to instantiate client proxy")
```

**Parameters:**

- `proxy"` (`"Failed to instantiate client`)

**Returns:** `throw new`

### NeoForgeProxy

```java
> new NeoForgeProxy()
```

**Returns:** `> new`

### getClientExecutor

```java
public BlockableEventLoop<Runnable> getClientExecutor()
```

**Returns:** `public BlockableEventLoop<Runnable>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Cannot access client on the server")
```

**Parameters:**

- `server"` (`"Cannot access client on the`)

**Returns:** `throw new`

### getTooltipFlag

```java
public TooltipFlag getTooltipFlag()
```

**Returns:** `public TooltipFlag`

### resolveLookup

```java
RegistryLookup<T> resolveLookup(ResourceKey<? extends Registry<T>> key)
```

**Parameters:**

- `key` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `RegistryLookup<T>`
