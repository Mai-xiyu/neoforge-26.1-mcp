# ShufflingList

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class<U> implements Iterable<U>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `entries` | `List<ShufflingList.WeightedEntry<U>>` |  |

## Methods

### ShufflingList

```java
public ShufflingList()
```

**Returns:** `public`

### ShufflingList

```java
private ShufflingList(List<ShufflingList.WeightedEntry<U>> p_147921_)
```

**Parameters:**

- `p_147921_` (`List<ShufflingList.WeightedEntry<U>>`)

**Returns:** `private`

### codec

```java
<U> public static <U> Codec<ShufflingList<U>> codec(Codec<U> p_147928_)
```

**Parameters:**

- `p_147928_` (`Codec<U>`)

**Returns:** `public static <U> Codec<ShufflingList<U>>`

### add

```java
public ShufflingList<U> add(U p_147930_, int p_147931_)
```

**Parameters:**

- `p_147930_` (`U`)
- `p_147931_` (`int`)

**Returns:** `public ShufflingList<U>`

### shuffle

```java
public ShufflingList<U> shuffle()
```

**Returns:** `public ShufflingList<U>`

### stream

```java
public Stream<U> stream()
```

**Returns:** `public Stream<U>`

### iterator

```java
public Iterator<U> iterator()
```

**Returns:** `Iterator<U>`

### toString

```java
public String toString()
```

**Returns:** `String`

### WeightedEntry

```java
 WeightedEntry(T p_147938_, int p_147939_)
```

**Parameters:**

- `p_147938_` (`T`)
- `p_147939_` (`int`)

**Returns:** ``

### getRandWeight

```java
private double getRandWeight()
```

**Returns:** `private double`

### setRandom

```java
void setRandom(float p_147942_)
```

**Parameters:**

- `p_147942_` (`float`)

### getData

```java
public T getData()
```

**Returns:** `public T`

### getWeight

```java
public int getWeight()
```

**Returns:** `public int`

### toString

```java
public String toString()
```

**Returns:** `String`

### codec

```java
<E> public static <E> Codec<ShufflingList.WeightedEntry<E>> codec(Codec<E> p_147944_)
```

**Parameters:**

- `p_147944_` (`Codec<E>`)

**Returns:** `public static <E> Codec<ShufflingList.WeightedEntry<E>>`

### decode

```java
public <T> DataResult<Pair<ShufflingList.WeightedEntry<E>, T>> decode(DynamicOps<T> p_147962_, T p_147963_)
```

**Parameters:**

- `p_147962_` (`DynamicOps<T>`)
- `p_147963_` (`T`)

**Returns:** `DataResult<Pair<ShufflingList.WeightedEntry<E>, T>>`

### encode

```java
<T> public <T> DataResult<T> encode(ShufflingList.WeightedEntry<E> p_147952_, DynamicOps<T> p_147953_, T p_147954_)
```

**Parameters:**

- `p_147952_` (`ShufflingList.WeightedEntry<E>`)
- `p_147953_` (`DynamicOps<T>`)
- `p_147954_` (`T`)

**Returns:** `public <T> DataResult<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `WeightedEntry` | class |  |
