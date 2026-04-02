# ConditionalOps

**Package:** `net.neoforged.neoforge.common.conditions`
**Type:** class<T> extends RegistryOps<T>

## Description

Extension of `RegistryOps` that also encapsulates a `ICondition.IContext`.
This allows getting the `ICondition.IContext` while decoding an entry from within a codec.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `conditionsCodec` | `Codec<List<ICondition>>` |  |

## Methods

### ConditionalOps

```java
public ConditionalOps(RegistryOps<T> ops, ICondition.IContext context)
```

**Parameters:**

- `ops` (`RegistryOps<T>`)
- `context` (`ICondition.IContext`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### retrieveContext

```java
public static MapCodec<ICondition.IContext> retrieveContext()
```

**Returns:** `MapCodec<ICondition.IContext>`

### createConditionalCodec

```java
public static final <T> Codec<Optional<T>> createConditionalCodec(Codec<T> ownerCodec)
```

**Parameters:**

- `ownerCodec` (`Codec<T>`)

**Returns:** `Codec<Optional<T>>`

### createConditionalCodec

```java
return createConditionalCodec()
```

**Returns:** `return`

### createConditionalCodec

```java
public static <T> Codec<Optional<T>> createConditionalCodec(Codec<T> ownerCodec, String conditionalsKey)
```

**Parameters:**

- `ownerCodec` (`Codec<T>`)
- `conditionalsKey` (`String`)

**Returns:** `Codec<Optional<T>>`

### decodeListWithElementConditions

```java
public static <T> Codec<List<T>> decodeListWithElementConditions(Codec<T> ownerCodec)
```

**Parameters:**

- `ownerCodec` (`Codec<T>`)

**Returns:** `Codec<List<T>>`

### createConditionalCodecWithConditions

```java
public static <T> Codec<Optional<WithConditions<T>>> createConditionalCodecWithConditions(Codec<T> ownerCodec)
```

**Parameters:**

- `ownerCodec` (`Codec<T>`)

**Returns:** `Codec<Optional<WithConditions<T>>>`

### createConditionalCodecWithConditions

```java
return createConditionalCodecWithConditions()
```

**Returns:** `return`

### createConditionalCodecWithConditions

```java
public static <T> Codec<Optional<WithConditions<T>>> createConditionalCodecWithConditions(Codec<T> ownerCodec, String conditionalsKey)
```

**Parameters:**

- `ownerCodec` (`Codec<T>`)
- `conditionalsKey` (`String`)

**Returns:** `Codec<Optional<WithConditions<T>>>`

### ConditionalEncoder

```java
private ConditionalEncoder(String conditionalsPropertyKey, Codec<List<ICondition>> conditionsCodec, Encoder<A> innerCodec)
```

**Parameters:**

- `conditionalsPropertyKey` (`String`)
- `conditionsCodec` (`Codec<List<ICondition>>`)
- `innerCodec` (`Encoder<A>`)

**Returns:** `private`

### encode

```java
public <T> DataResult<T> encode(Optional<WithConditions<A>> input, DynamicOps<T> ops, T prefix)
```

**Parameters:**

- `input` (`Optional<WithConditions<A>>`)
- `ops` (`DynamicOps<T>`)
- `prefix` (`T`)

**Returns:** `DataResult<T>`

### toString

```java
public String toString()
```

**Returns:** `String`

### ConditionalDecoder

```java
private ConditionalDecoder(String conditionalsPropertyKey, Codec<List<ICondition>> conditionsCodec, Codec<ICondition.IContext> contextCodec, Decoder<A> innerCodec)
```

**Parameters:**

- `conditionalsPropertyKey` (`String`)
- `conditionsCodec` (`Codec<List<ICondition>>`)
- `contextCodec` (`Codec<ICondition.IContext>`)
- `innerCodec` (`Decoder<A>`)

**Returns:** `private`

### decode

```java
public <T> DataResult<Pair<Optional<WithConditions<A>>, T>> decode(DynamicOps<T> ops, T input)
```

**Parameters:**

- `ops` (`DynamicOps<T>`)
- `input` (`T`)

**Returns:** `DataResult<Pair<Optional<WithConditions<A>>, T>>`
