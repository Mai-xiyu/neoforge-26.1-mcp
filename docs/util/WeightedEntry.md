# WeightedEntry

**Package:** `net.minecraft.util.random`
**Type:** interface

## Methods

### getWeight

```java
Weight getWeight()
```

**Returns:** `Weight`

### wrap

```java
<T> static <T> WeightedEntry.Wrapper<T> wrap(T p_146291_, int p_146292_)
```

**Parameters:**

- `p_146291_` (`T`)
- `p_146292_` (`int`)

**Returns:** `static <T> WeightedEntry.Wrapper<T>`

### IntrusiveBase

```java
public IntrusiveBase(int p_146295_)
```

**Parameters:**

- `p_146295_` (`int`)

**Returns:** `public`

### IntrusiveBase

```java
public IntrusiveBase(Weight p_146297_)
```

**Parameters:**

- `p_146297_` (`Weight`)

**Returns:** `public`

### getWeight

```java
public Weight getWeight()
```

**Returns:** `Weight`

### getWeight

```java
public Weight getWeight()
```

**Returns:** `Weight`

### codec

```java
<E> public static <E> Codec<WeightedEntry.Wrapper<E>> codec(Codec<E> p_146306_)
```

**Parameters:**

- `p_146306_` (`Codec<E>`)

**Returns:** `public static <E> Codec<WeightedEntry.Wrapper<E>>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `IntrusiveBase` | class |  |
| `Wrapper` | record |  |
