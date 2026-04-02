# CollectionCountsPredicate

**Package:** `net.minecraft.advancements.critereon`
**Type:** interface<T, P extends Predicate<T>> extends Predicate<Iterable<T>>

## Methods

### unpack

```java
List<CollectionCountsPredicate.Entry<T, P>> unpack()
```

**Returns:** `List<CollectionCountsPredicate.Entry<T, P>>`

### codec

```java
static <T, P extends Predicate<T>> Codec<CollectionCountsPredicate<T, P>> codec(Codec<P> p_341206_)
```

**Parameters:**

- `p_341206_` (`Codec<P>`)

**Returns:** `static <T, P extends Predicate<T>> Codec<CollectionCountsPredicate<T, P>>`

### of

```java
static <T, P extends Predicate<T>> CollectionCountsPredicate<T, P> of(CollectionCountsPredicate.Entry<T, P>[]... p_341225_)
```

**Parameters:**

- `p_341225_` (`CollectionCountsPredicate.Entry<T, P>[]...`)

**Returns:** `<T, P extends Predicate<T>> CollectionCountsPredicate<T, P>`

### of

```java
static <T, P extends Predicate<T>> CollectionCountsPredicate<T, P> of(List<CollectionCountsPredicate.Entry<T, P>> p_341102_)
```

**Parameters:**

- `p_341102_` (`List<CollectionCountsPredicate.Entry<T, P>>`)

**Returns:** `static <T, P extends Predicate<T>> CollectionCountsPredicate<T, P>`

### codec

```java
public static <T, P extends Predicate<T>> Codec<CollectionCountsPredicate.Entry<T, P>> codec(Codec<P> p_341286_)
```

**Parameters:**

- `p_341286_` (`Codec<P>`)

**Returns:** `public static <T, P extends Predicate<T>> Codec<CollectionCountsPredicate.Entry<T, P>>`

### test

```java
public boolean test(Iterable<T> p_340995_)
```

**Parameters:**

- `p_340995_` (`Iterable<T>`)

**Returns:** `public boolean`

### test

```java
public boolean test(Iterable<T> p_340928_)
```

**Parameters:**

- `p_340928_` (`Iterable<T>`)

**Returns:** `public boolean`

### unpack

```java
public List<CollectionCountsPredicate.Entry<T, P>> unpack()
```

**Returns:** `List<CollectionCountsPredicate.Entry<T, P>>`

### test

```java
public boolean test(Iterable<T> p_341391_)
```

**Parameters:**

- `p_341391_` (`Iterable<T>`)

**Returns:** `public boolean`

### unpack

```java
public List<CollectionCountsPredicate.Entry<T, P>> unpack()
```

**Returns:** `List<CollectionCountsPredicate.Entry<T, P>>`

### test

```java
public boolean test(Iterable<T> p_341222_)
```

**Parameters:**

- `p_341222_` (`Iterable<T>`)

**Returns:** `public boolean`

### unpack

```java
public List<CollectionCountsPredicate.Entry<T, P>> unpack()
```

**Returns:** `List<CollectionCountsPredicate.Entry<T, P>>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Entry` | record |  |
| `Multiple` | record |  |
| `Single` | record |  |
| `Zero` | class |  |
