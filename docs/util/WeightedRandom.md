# WeightedRandom

**Package:** `net.minecraft.util.random`
**Type:** class

## Methods

### WeightedRandom

```java
private WeightedRandom()
```

**Returns:** `private`

### getTotalWeight

```java
public static int getTotalWeight(List<? extends WeightedEntry> p_146313_)
```

**Parameters:**

- `p_146313_` (`List<? extends WeightedEntry>`)

**Returns:** `public static int`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Sum of weights must be <= 2147483647")
```

**Parameters:**

- `2147483647"` (`"Sum of weights must be <=`)

**Returns:** `throw new`

### getRandomItem

```java
<T extends WeightedEntry> public static <T extends WeightedEntry> Optional<T> getRandomItem(RandomSource p_216826_, List<T> p_216827_, int p_216828_)
```

**Parameters:**

- `p_216826_` (`RandomSource`)
- `p_216827_` (`List<T>`)
- `p_216828_` (`int`)

**Returns:** `public static <T extends WeightedEntry> Optional<T>`

### getWeightedItem

```java
return getWeightedItem()
```

**Returns:** `return`

### getWeightedItem

```java
<T extends WeightedEntry> public static <T extends WeightedEntry> Optional<T> getWeightedItem(List<T> p_146315_, int p_146316_)
```

**Parameters:**

- `p_146315_` (`List<T>`)
- `p_146316_` (`int`)

**Returns:** `public static <T extends WeightedEntry> Optional<T>`

### getRandomItem

```java
<T extends WeightedEntry> public static <T extends WeightedEntry> Optional<T> getRandomItem(RandomSource p_216823_, List<T> p_216824_)
```

**Parameters:**

- `p_216823_` (`RandomSource`)
- `p_216824_` (`List<T>`)

**Returns:** `public static <T extends WeightedEntry> Optional<T>`
