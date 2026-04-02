# LayeredRegistryAccess

**Package:** `net.minecraft.core`
**Type:** class<T>

## Methods

### LayeredRegistryAccess

```java
public LayeredRegistryAccess(List<T> p_251225_)
```

**Parameters:**

- `p_251225_` (`List<T>`)

**Returns:** `public`

### LayeredRegistryAccess

```java
private LayeredRegistryAccess(List<T> p_250473_, List<RegistryAccess.Frozen> p_249320_)
```

**Parameters:**

- `p_250473_` (`List<T>`)
- `p_249320_` (`List<RegistryAccess.Frozen>`)

**Returns:** `private`

### getLayerIndexOrThrow

```java
private int getLayerIndexOrThrow(T p_250144_)
```

**Parameters:**

- `p_250144_` (`T`)

**Returns:** `private int`

### IllegalStateException

```java
throw new IllegalStateException("Can't find " + p_250144_ + " inside " + this.keys)
```

**Parameters:**

- `this.keys` (`"Can't find " + p_250144_ + " inside " +`)

**Returns:** `throw new`

### getLayer

```java
public RegistryAccess.Frozen getLayer(T p_250826_)
```

**Parameters:**

- `p_250826_` (`T`)

**Returns:** `public RegistryAccess.Frozen`

### getAccessForLoading

```java
public RegistryAccess.Frozen getAccessForLoading(T p_251335_)
```

**Parameters:**

- `p_251335_` (`T`)

**Returns:** `public RegistryAccess.Frozen`

### getAccessFrom

```java
public RegistryAccess.Frozen getAccessFrom(T p_250766_)
```

**Parameters:**

- `p_250766_` (`T`)

**Returns:** `public RegistryAccess.Frozen`

### getCompositeAccessForLayers

```java
private RegistryAccess.Frozen getCompositeAccessForLayers(int p_251526_, int p_251999_)
```

**Parameters:**

- `p_251526_` (`int`)
- `p_251999_` (`int`)

**Returns:** `private RegistryAccess.Frozen`

### replaceFrom

```java
public LayeredRegistryAccess<T> replaceFrom(T p_252104_, RegistryAccess.Frozen[]... p_250492_)
```

**Parameters:**

- `p_252104_` (`T`)
- `p_250492_` (`RegistryAccess.Frozen[]...`)

**Returns:** `public LayeredRegistryAccess<T>`

### replaceFrom

```java
public LayeredRegistryAccess<T> replaceFrom(T p_249539_, List<RegistryAccess.Frozen> p_250124_)
```

**Parameters:**

- `p_249539_` (`T`)
- `p_250124_` (`List<RegistryAccess.Frozen>`)

**Returns:** `public LayeredRegistryAccess<T>`

### IllegalStateException

```java
throw new IllegalStateException("Too many values to replace")
```

**Parameters:**

- `replace"` (`"Too many values to`)

**Returns:** `throw new`

### compositeAccess

```java
public RegistryAccess.Frozen compositeAccess()
```

**Returns:** `public RegistryAccess.Frozen`

### collectRegistries

```java
private static Map<ResourceKey<? extends Registry<?>>, Registry<?>> collectRegistries(Stream<? extends RegistryAccess> p_248595_)
```

**Parameters:**

- `p_248595_` (`Stream<? extends RegistryAccess>`)

**Returns:** `private static Map<ResourceKey<? extends Registry<?>>, Registry<?>>`
