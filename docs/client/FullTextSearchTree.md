# FullTextSearchTree

**Package:** `net.minecraft.client.searchtree`
**Type:** class<T> extends IdSearchTree<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### FullTextSearchTree

```java
public FullTextSearchTree(Function<T, Stream<String>> p_235155_, Function<T, Stream<ResourceLocation>> p_235156_, List<T> p_235157_)
```

**Parameters:**

- `p_235155_` (`Function<T, Stream<String>>`)
- `p_235156_` (`Function<T, Stream<ResourceLocation>>`)
- `p_235157_` (`List<T>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### searchPlainText

```java
protected List<T> searchPlainText(String p_235160_)
```

**Parameters:**

- `p_235160_` (`String`)

**Returns:** `List<T>`

### searchResourceLocation

```java
protected List<T> searchResourceLocation(String p_235162_, String p_235163_)
```

**Parameters:**

- `p_235162_` (`String`)
- `p_235163_` (`String`)

**Returns:** `List<T>`
