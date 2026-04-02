# FixProjectileStoredItem

**Package:** `net.minecraft.util.datafix.fixes`
**Type:** class
**Extends:** `DataFix`

## Methods

### FixProjectileStoredItem

```java
public FixProjectileStoredItem(Schema p_309054_)
```

**Parameters:**

- `p_309054_` (`Schema`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### makeRule

```java
protected TypeRewriteRule makeRule()
```

**Returns:** `TypeRewriteRule`

### fixChoice

```java
private Function<Typed<?>, Typed<?>> fixChoice(String p_309076_, FixProjectileStoredItem.SubFixer<?> p_309176_)
```

**Parameters:**

- `p_309076_` (`String`)
- `p_309176_` (`FixProjectileStoredItem.SubFixer<?>`)

**Returns:** `private Function<Typed<?>, Typed<?>>`

### fixChoiceCap

```java
return fixChoiceCap()
```

**Returns:** `return`

### fixChoiceCap

```java
<T> private static <T> Function<Typed<?>, Typed<?>> fixChoiceCap(String p_309198_, FixProjectileStoredItem.SubFixer<?> p_309081_, Type<?> p_309063_, Type<T> p_308929_)
```

**Parameters:**

- `p_309198_` (`String`)
- `p_309081_` (`FixProjectileStoredItem.SubFixer<?>`)
- `p_309063_` (`Type<?>`)
- `p_308929_` (`Type<T>`)

**Returns:** `private static <T> Function<Typed<?>, Typed<?>>`

### fixArrow

```java
<T> private static <T> Typed<T> fixArrow(Typed<?> p_308973_, Type<T> p_309096_)
```

**Parameters:**

- `p_308973_` (`Typed<?>`)
- `p_309096_` (`Type<T>`)

**Returns:** `private static <T> Typed<T>`

### getArrowType

```java
private static String getArrowType(Dynamic<?> p_308995_)
```

**Parameters:**

- `p_308995_` (`Dynamic<?>`)

**Returns:** `private static String`

### fixSpectralArrow

```java
<T> private static <T> Typed<T> fixSpectralArrow(Typed<?> p_309000_, Type<T> p_308931_)
```

**Parameters:**

- `p_309000_` (`Typed<?>`)
- `p_308931_` (`Type<T>`)

**Returns:** `private static <T> Typed<T>`

### createItemStack

```java
private static Dynamic<?> createItemStack(Dynamic<?> p_308907_, String p_309016_)
```

**Parameters:**

- `p_308907_` (`Dynamic<?>`)
- `p_309016_` (`String`)

**Returns:** `private static Dynamic<?>`

### castUnchecked

```java
<T> private static <T> Typed<T> castUnchecked(Typed<?> p_309048_, Type<T> p_309151_)
```

**Parameters:**

- `p_309048_` (`Typed<?>`)
- `p_309151_` (`Type<T>`)

**Returns:** `private static <T> Typed<T>`

### fix

```java
Typed<F> fix(Typed<?> p_309017_, Type<F> p_309073_)
```

**Parameters:**

- `p_309017_` (`Typed<?>`)
- `p_309073_` (`Type<F>`)

**Returns:** `Typed<F>`
