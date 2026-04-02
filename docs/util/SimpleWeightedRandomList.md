# SimpleWeightedRandomList

**Package:** `net.minecraft.util.random`
**Type:** class<E> extends WeightedRandomList<WeightedEntry.Wrapper<E>>

## Methods

### wrappedCodecAllowingEmpty

```java
<E> public static <E> Codec<SimpleWeightedRandomList<E>> wrappedCodecAllowingEmpty(Codec<E> p_185861_)
```

**Parameters:**

- `p_185861_` (`Codec<E>`)

**Returns:** `public static <E> Codec<SimpleWeightedRandomList<E>>`

### wrappedCodec

```java
<E> public static <E> Codec<SimpleWeightedRandomList<E>> wrappedCodec(Codec<E> p_146265_)
```

**Parameters:**

- `p_146265_` (`Codec<E>`)

**Returns:** `public static <E> Codec<SimpleWeightedRandomList<E>>`

### SimpleWeightedRandomList

```java
 SimpleWeightedRandomList(List<? extends WeightedEntry.Wrapper<E>> p_146262_)
```

**Parameters:**

- `p_146262_` (`List<? extends WeightedEntry.Wrapper<E>>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### builder

```java
<E> public static <E> SimpleWeightedRandomList.Builder<E> builder()
```

**Returns:** `public static <E> SimpleWeightedRandomList.Builder<E>`

### empty

```java
<E> public static <E> SimpleWeightedRandomList<E> empty()
```

**Returns:** `public static <E> SimpleWeightedRandomList<E>`

### single

```java
<E> public static <E> SimpleWeightedRandomList<E> single(E p_185863_)
```

**Parameters:**

- `p_185863_` (`E`)

**Returns:** `public static <E> SimpleWeightedRandomList<E>`

### getRandomValue

```java
public Optional<E> getRandomValue(RandomSource p_216821_)
```

**Parameters:**

- `p_216821_` (`RandomSource`)

**Returns:** `public Optional<E>`

### add

```java
public SimpleWeightedRandomList.Builder<E> add(E p_307448_)
```

**Parameters:**

- `p_307448_` (`E`)

**Returns:** `public SimpleWeightedRandomList.Builder<E>`

### add

```java
public SimpleWeightedRandomList.Builder<E> add(E p_146272_, int p_146273_)
```

**Parameters:**

- `p_146272_` (`E`)
- `p_146273_` (`int`)

**Returns:** `public SimpleWeightedRandomList.Builder<E>`

### build

```java
public SimpleWeightedRandomList<E> build()
```

**Returns:** `public SimpleWeightedRandomList<E>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
