# CollectionContentsPredicate

**Package:** `net.minecraft.advancements.critereon`
**Type:** interface<T, P extends Predicate<T>> extends Predicate<Iterable<T>>

## Methods

### unpack

```java
List<P> unpack()
```

**Returns:** `List<P>`

### codec

```java
static <T, P extends Predicate<T>> Codec<CollectionContentsPredicate<T, P>> codec(Codec<P> p_341117_)
```

**Parameters:**

- `p_341117_` (`Codec<P>`)

**Returns:** `static <T, P extends Predicate<T>> Codec<CollectionContentsPredicate<T, P>>`

### of

```java
static <T, P extends Predicate<T>> CollectionContentsPredicate<T, P> of(P[]... p_341163_)
```

**Parameters:**

- `p_341163_` (`P[]...`)

**Returns:** `<T, P extends Predicate<T>> CollectionContentsPredicate<T, P>`

### of

```java
static <T, P extends Predicate<T>> CollectionContentsPredicate<T, P> of(List<P> p_341230_)
```

**Parameters:**

- `p_341230_` (`List<P>`)

**Returns:** `static <T, P extends Predicate<T>> CollectionContentsPredicate<T, P>`

### test

```java
public boolean test(Iterable<T> p_340977_)
```

**Parameters:**

- `p_340977_` (`Iterable<T>`)

**Returns:** `public boolean`

### unpack

```java
public List<P> unpack()
```

**Returns:** `List<P>`

### test

```java
public boolean test(Iterable<T> p_340831_)
```

**Parameters:**

- `p_340831_` (`Iterable<T>`)

**Returns:** `public boolean`

### unpack

```java
public List<P> unpack()
```

**Returns:** `List<P>`

### test

```java
public boolean test(Iterable<T> p_341091_)
```

**Parameters:**

- `p_341091_` (`Iterable<T>`)

**Returns:** `public boolean`

### unpack

```java
public List<P> unpack()
```

**Returns:** `List<P>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Multiple` | record |  |
| `Single` | record |  |
| `Zero` | class |  |
