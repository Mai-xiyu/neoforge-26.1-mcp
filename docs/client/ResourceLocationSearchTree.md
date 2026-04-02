# ResourceLocationSearchTree

**Package:** `net.minecraft.client.searchtree`
**Type:** interface<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### empty

```java
<T> static <T> ResourceLocationSearchTree<T> empty()
```

**Returns:** `static <T> ResourceLocationSearchTree<T>`

### searchNamespace

```java
public List<T> searchNamespace(String p_235218_)
```

**Parameters:**

- `p_235218_` (`String`)

**Returns:** `List<T>`

### searchPath

```java
public List<T> searchPath(String p_235220_)
```

**Parameters:**

- `p_235220_` (`String`)

**Returns:** `List<T>`

### create

```java
<T> static <T> ResourceLocationSearchTree<T> create(List<T> p_235213_, Function<T, Stream<ResourceLocation>> p_235214_)
```

**Parameters:**

- `p_235213_` (`List<T>`)
- `p_235214_` (`Function<T, Stream<ResourceLocation>>`)

**Returns:** `static <T> ResourceLocationSearchTree<T>`

### empty

```java
return empty()
```

**Returns:** `return`

### searchNamespace

```java
public List<T> searchNamespace(String p_235227_)
```

**Parameters:**

- `p_235227_` (`String`)

**Returns:** `List<T>`

### searchPath

```java
public List<T> searchPath(String p_235229_)
```

**Parameters:**

- `p_235229_` (`String`)

**Returns:** `List<T>`

### searchNamespace

```java
List<T> searchNamespace(String p_235211_)
```

**Parameters:**

- `p_235211_` (`String`)

**Returns:** `List<T>`

### searchPath

```java
List<T> searchPath(String p_235215_)
```

**Parameters:**

- `p_235215_` (`String`)

**Returns:** `List<T>`
