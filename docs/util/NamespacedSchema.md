# NamespacedSchema

**Package:** `net.minecraft.util.datafix.schemas`
**Type:** class
**Extends:** `Schema`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NAMESPACED_STRING_CODEC` | `PrimitiveCodec<String>` |  |

## Methods

### read

```java
public <T> DataResult<String> read(DynamicOps<T> p_17321_, T p_17322_)
```

**Parameters:**

- `p_17321_` (`DynamicOps<T>`)
- `p_17322_` (`T`)

**Returns:** `DataResult<String>`

### write

```java
<T> public <T> T write(DynamicOps<T> p_17318_, String p_17319_)
```

**Parameters:**

- `p_17318_` (`DynamicOps<T>`)
- `p_17319_` (`String`)

**Returns:** `public <T> T`

### toString

```java
public String toString()
```

**Returns:** `String`

### NamespacedSchema

```java
public NamespacedSchema(int p_17308_, Schema p_17309_)
```

**Parameters:**

- `p_17308_` (`int`)
- `p_17309_` (`Schema`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ensureNamespaced

```java
public static String ensureNamespaced(String p_17312_)
```

**Parameters:**

- `p_17312_` (`String`)

**Returns:** `public static String`

### namespacedString

```java
public static Type<String> namespacedString()
```

**Returns:** `public static Type<String>`

### getChoiceType

```java
public Type<?> getChoiceType(TypeReference p_17314_, String p_17315_)
```

**Parameters:**

- `p_17314_` (`TypeReference`)
- `p_17315_` (`String`)

**Returns:** `Type<?>`
