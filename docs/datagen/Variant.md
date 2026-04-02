# Variant

**Package:** `net.minecraft.data.models.blockstates`
**Type:** class
**Implements:** `Supplier<JsonElement>`

## Methods

### with

```java
<T> public <T> Variant with(VariantProperty<T> p_125512_, T p_125513_)
```

**Parameters:**

- `p_125512_` (`VariantProperty<T>`)
- `p_125513_` (`T`)

**Returns:** `public <T> Variant`

### IllegalStateException

```java
throw new IllegalStateException("Replacing value of " + variantproperty + " with " + p_125513_)
```

**Parameters:**

- `p_125513_` (`"Replacing value of " + variantproperty + " with " +`)

**Returns:** `throw new`

### variant

```java
public static Variant variant()
```

**Returns:** `public static Variant`

### Variant

```java
return new Variant()
```

**Returns:** `return new`

### merge

```java
public static Variant merge(Variant p_125509_, Variant p_125510_)
```

**Parameters:**

- `p_125509_` (`Variant`)
- `p_125510_` (`Variant`)

**Returns:** `public static Variant`

### get

```java
public JsonElement get()
```

**Returns:** `public JsonElement`

### convertList

```java
public static JsonElement convertList(List<Variant> p_125515_)
```

**Parameters:**

- `p_125515_` (`List<Variant>`)

**Returns:** `public static JsonElement`
