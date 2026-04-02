# WeightedRandomList

**Package:** `net.minecraft.util.random`
**Type:** class<E extends WeightedEntry>

## Methods

### WeightedRandomList

```java
 WeightedRandomList(List<? extends E> p_146327_)
```

**Parameters:**

- `p_146327_` (`List<? extends E>`)

**Returns:** ``

### create

```java
<E extends WeightedEntry> public static <E extends WeightedEntry> WeightedRandomList<E> create()
```

**Returns:** `public static <E extends WeightedEntry> WeightedRandomList<E>`

### create

```java
public static <E extends WeightedEntry> WeightedRandomList<E> create(E[]... p_146331_)
```

**Parameters:**

- `p_146331_` (`E[]...`)

**Returns:** `WeightedRandomList<E>`

### create

```java
<E extends WeightedEntry> public static <E extends WeightedEntry> WeightedRandomList<E> create(List<E> p_146329_)
```

**Parameters:**

- `p_146329_` (`List<E>`)

**Returns:** `public static <E extends WeightedEntry> WeightedRandomList<E>`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### getRandom

```java
public Optional<E> getRandom(RandomSource p_216830_)
```

**Parameters:**

- `p_216830_` (`RandomSource`)

**Returns:** `public Optional<E>`

### unwrap

```java
public List<E> unwrap()
```

**Returns:** `public List<E>`

### codec

```java
<E extends WeightedEntry> public static <E extends WeightedEntry> Codec<WeightedRandomList<E>> codec(Codec<E> p_146334_)
```

**Parameters:**

- `p_146334_` (`Codec<E>`)

**Returns:** `public static <E extends WeightedEntry> Codec<WeightedRandomList<E>>`

### equals

```java
public boolean equals(Object p_338205_)
```

**Parameters:**

- `p_338205_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`
