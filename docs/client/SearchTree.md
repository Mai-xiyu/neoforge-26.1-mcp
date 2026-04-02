# SearchTree

**Package:** `net.minecraft.client.searchtree`
**Type:** interface<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`, `@FunctionalInterface`

## Methods

### empty

```java
<T> static <T> SearchTree<T> empty()
```

**Returns:** `static <T> SearchTree<T>`

### plainText

```java
<T> static <T> SearchTree<T> plainText(List<T> p_346366_, Function<T, Stream<String>> p_346287_)
```

**Parameters:**

- `p_346366_` (`List<T>`)
- `p_346287_` (`Function<T, Stream<String>>`)

**Returns:** `static <T> SearchTree<T>`

### empty

```java
return empty()
```

**Returns:** `return`

### search

```java
List<T> search(String p_119955_)
```

**Parameters:**

- `p_119955_` (`String`)

**Returns:** `List<T>`
