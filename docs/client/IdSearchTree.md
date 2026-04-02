# IdSearchTree

**Package:** `net.minecraft.client.searchtree`
**Type:** class<T> implements SearchTree<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `additionOrder` | `Comparator<T>` |  |
| `resourceLocationSearchTree` | `ResourceLocationSearchTree<T>` |  |

## Methods

### IdSearchTree

```java
public IdSearchTree(Function<T, Stream<ResourceLocation>> p_235167_, List<T> p_235168_)
```

**Parameters:**

- `p_235167_` (`Function<T, Stream<ResourceLocation>>`)
- `p_235168_` (`List<T>`)

**Returns:** `public`

### search

```java
public List<T> search(String p_235173_)
```

**Parameters:**

- `p_235173_` (`String`)

**Returns:** `List<T>`

### searchPlainText

```java
protected List<T> searchPlainText(String p_235169_)
```

**Parameters:**

- `p_235169_` (`String`)

**Returns:** `protected List<T>`

### searchResourceLocation

```java
protected List<T> searchResourceLocation(String p_235170_, String p_235171_)
```

**Parameters:**

- `p_235170_` (`String`)
- `p_235171_` (`String`)

**Returns:** `protected List<T>`
