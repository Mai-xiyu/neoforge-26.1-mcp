# DataFixers

**Package:** `net.minecraft.util.datafix`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BLENDING_VERSION` | `int` |  |

## Methods

### DataFixers

```java
private DataFixers()
```

**Returns:** `private`

### getDataFixer

```java
public static DataFixer getDataFixer()
```

**Returns:** `public static DataFixer`

### createFixerUpper

```java
private static Result createFixerUpper()
```

**Returns:** `private static Result`

### addFixers

```java
 addFixers()
```

**Returns:** ``

### optimize

```java
public static CompletableFuture<?> optimize(Set<TypeReference> p_347628_)
```

**Parameters:**

- `p_347628_` (`Set<TypeReference>`)

**Returns:** `public static CompletableFuture<?>`

### addFixers

```java
private static void addFixers(DataFixerBuilder p_14514_)
```

**Parameters:**

- `p_14514_` (`DataFixerBuilder`)

**Returns:** `private static void`

### fix

```java
protected Typed<?> fix(Typed<?> p_14541_)
```

**Parameters:**

- `p_14541_` (`Typed<?>`)

**Returns:** `Typed<?>`

### fix

```java
protected Typed<?> fix(Typed<?> p_14549_)
```

**Parameters:**

- `p_14549_` (`Typed<?>`)

**Returns:** `Typed<?>`

### createRenamerNoNamespace

```java
private static UnaryOperator<String> createRenamerNoNamespace(Map<String, String> p_326818_)
```

**Parameters:**

- `p_326818_` (`Map<String, String>`)

**Returns:** `private static UnaryOperator<String>`

### createRenamer

```java
private static UnaryOperator<String> createRenamer(Map<String, String> p_14525_)
```

**Parameters:**

- `p_14525_` (`Map<String, String>`)

**Returns:** `private static UnaryOperator<String>`

### createRenamer

```java
private static UnaryOperator<String> createRenamer(String p_14518_, String p_14519_)
```

**Parameters:**

- `p_14518_` (`String`)
- `p_14519_` (`String`)

**Returns:** `private static UnaryOperator<String>`
