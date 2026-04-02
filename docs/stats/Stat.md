# Stat

**Package:** `net.minecraft.stats`
**Type:** class<T>
**Extends:** `ObjectiveCriteria`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, Stat<?>>` |  |

## Methods

### Stat

```java
protected Stat(StatType<T> p_12856_, T p_12857_, StatFormatter p_12858_)
```

**Parameters:**

- `p_12856_` (`StatType<T>`)
- `p_12857_` (`T`)
- `p_12858_` (`StatFormatter`)

**Returns:** `protected`

### buildName

```java
<T> public static <T> String buildName(StatType<T> p_12863_, T p_12864_)
```

**Parameters:**

- `p_12863_` (`StatType<T>`)
- `p_12864_` (`T`)

**Returns:** `public static <T> String`

### locationToKey

```java
<T> private static <T> String locationToKey(ResourceLocation p_12866_)
```

**Parameters:**

- `p_12866_` (`ResourceLocation`)

**Returns:** `private static <T> String`

### getType

```java
public StatType<T> getType()
```

**Returns:** `public StatType<T>`

### getValue

```java
public T getValue()
```

**Returns:** `public T`

### format

```java
public String format(int p_12861_)
```

**Parameters:**

- `p_12861_` (`int`)

**Returns:** `public String`

### equals

```java
public boolean equals(Object p_12869_)
```

**Parameters:**

- `p_12869_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`
