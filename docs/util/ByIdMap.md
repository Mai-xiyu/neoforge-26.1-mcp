# ByIdMap

**Package:** `net.minecraft.util`
**Type:** class

## Methods

### createMap

```java
<T> private static <T> IntFunction<T> createMap(ToIntFunction<T> p_263047_, T[] p_263043_)
```

**Parameters:**

- `p_263047_` (`ToIntFunction<T>`)
- `p_263043_` (`T[]`)

**Returns:** `private static <T> IntFunction<T>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Empty value list")
```

**Parameters:**

- `list"` (`"Empty value`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Duplicate entry on id " + i + ": current=" + t + ", previous=" + t1)
```

**Parameters:**

- `"` (`"Duplicate entry on id " + i + ": current=" + t +`)
- `t1` (`previous=" +`)

**Returns:** `throw new`

### sparse

```java
<T> public static <T> IntFunction<T> sparse(ToIntFunction<T> p_262952_, T[] p_263085_, T p_262981_)
```

**Parameters:**

- `p_262952_` (`ToIntFunction<T>`)
- `p_263085_` (`T[]`)
- `p_262981_` (`T`)

**Returns:** `public static <T> IntFunction<T>`

### createSortedArray

```java
<T> private static <T> T[] createSortedArray(ToIntFunction<T> p_262976_, T[] p_263053_)
```

**Parameters:**

- `p_262976_` (`ToIntFunction<T>`)
- `p_263053_` (`T[]`)

**Returns:** `private static <T> T[]`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Empty value list")
```

**Parameters:**

- `list"` (`"Empty value`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Values are not continous, found index " + j + " for value " + t)
```

**Parameters:**

- `continous` (`"Values are not`)
- `t` (`found index " + j + " for value " +`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Duplicate entry on id " + j + ": current=" + t + ", previous=" + t1)
```

**Parameters:**

- `"` (`"Duplicate entry on id " + j + ": current=" + t +`)
- `t1` (`previous=" +`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Missing value at index: " + k)
```

**Parameters:**

- `k` (`"Missing value at index: " +`)

**Returns:** `throw new`

### continuous

```java
<T> public static <T> IntFunction<T> continuous(ToIntFunction<T> p_263112_, T[] p_262975_, ByIdMap.OutOfBoundsStrategy p_263075_)
```

**Parameters:**

- `p_263112_` (`ToIntFunction<T>`)
- `p_262975_` (`T[]`)
- `p_263075_` (`ByIdMap.OutOfBoundsStrategy`)

**Returns:** `public static <T> IntFunction<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `OutOfBoundsStrategy` | enum |  |
