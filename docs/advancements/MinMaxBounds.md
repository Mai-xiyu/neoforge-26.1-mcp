# MinMaxBounds

**Package:** `net.minecraft.advancements.critereon`
**Type:** interface<T extends Number>

## Methods

### min

```java
Optional<T> min()
```

**Returns:** `Optional<T>`

### max

```java
Optional<T> max()
```

**Returns:** `Optional<T>`

### isAny

```java
default boolean isAny()
```

**Returns:** `default boolean`

### unwrapPoint

```java
default Optional<T> unwrapPoint()
```

**Returns:** `default Optional<T>`

### createCodec

```java
static <T extends Number, R extends MinMaxBounds<T>> Codec<R> createCodec(Codec<T> p_298521_, MinMaxBounds.BoundsFactory<T, R> p_298688_)
```

**Parameters:**

- `p_298521_` (`Codec<T>`)
- `p_298688_` (`MinMaxBounds.BoundsFactory<T, R>`)

**Returns:** `static <T extends Number, R extends MinMaxBounds<T>> Codec<R>`

### fromReader

```java
static <T extends Number, R extends MinMaxBounds<T>> R fromReader(StringReader p_55314_, MinMaxBounds.BoundsFromReaderFactory<T, R> p_55315_, Function<String, T> p_55316_, Supplier<DynamicCommandExceptionType> p_55317_, Function<T, T> p_55318_)
```

**Parameters:**

- `p_55314_` (`StringReader`)
- `p_55315_` (`MinMaxBounds.BoundsFromReaderFactory<T, R>`)
- `p_55316_` (`Function<String, T>`)
- `p_55317_` (`Supplier<DynamicCommandExceptionType>`)
- `p_55318_` (`Function<T, T>`)

**Returns:** `static <T extends Number, R extends MinMaxBounds<T>> R`

### readNumber

```java
<T extends Number> private static <T extends Number> Optional<T> readNumber(StringReader p_55320_, Function<String, T> p_55321_, Supplier<DynamicCommandExceptionType> p_55322_)
```

**Parameters:**

- `p_55320_` (`StringReader`)
- `p_55321_` (`Function<String, T>`)
- `p_55322_` (`Supplier<DynamicCommandExceptionType>`)

**Returns:** `private static <T extends Number> Optional<T>`

### isAllowedInputChat

```java
private static boolean isAllowedInputChat(StringReader p_55312_)
```

**Parameters:**

- `p_55312_` (`StringReader`)

**Returns:** `private static boolean`

### create

```java
R create(Optional<T> p_298287_, Optional<T> p_299044_)
```

**Parameters:**

- `p_298287_` (`Optional<T>`)
- `p_299044_` (`Optional<T>`)

**Returns:** `R`

### create

```java
R create(StringReader p_55333_, Optional<T> p_298885_, Optional<T> p_298613_)
```

**Parameters:**

- `p_55333_` (`StringReader`)
- `p_298885_` (`Optional<T>`)
- `p_298613_` (`Optional<T>`)

**Returns:** `R`

### Doubles

```java
private Doubles(Optional<Double> p_298243_, Optional<Double> p_299159_)
```

**Parameters:**

- `p_298243_` (`Optional<Double>`)
- `p_299159_` (`Optional<Double>`)

**Returns:** `private`

### create

```java
private static MinMaxBounds.Doubles create(StringReader p_154796_, Optional<Double> p_298478_, Optional<Double> p_298476_)
```

**Parameters:**

- `p_154796_` (`StringReader`)
- `p_298478_` (`Optional<Double>`)
- `p_298476_` (`Optional<Double>`)

**Returns:** `private static MinMaxBounds.Doubles`

### squareOpt

```java
private static Optional<Double> squareOpt(Optional<Double> p_298534_)
```

**Parameters:**

- `p_298534_` (`Optional<Double>`)

**Returns:** `private static Optional<Double>`

### exactly

```java
public static MinMaxBounds.Doubles exactly(double p_154787_)
```

**Parameters:**

- `p_154787_` (`double`)

**Returns:** `public static MinMaxBounds.Doubles`

### between

```java
public static MinMaxBounds.Doubles between(double p_154789_, double p_154790_)
```

**Parameters:**

- `p_154789_` (`double`)
- `p_154790_` (`double`)

**Returns:** `public static MinMaxBounds.Doubles`

### atLeast

```java
public static MinMaxBounds.Doubles atLeast(double p_154805_)
```

**Parameters:**

- `p_154805_` (`double`)

**Returns:** `public static MinMaxBounds.Doubles`

### atMost

```java
public static MinMaxBounds.Doubles atMost(double p_154809_)
```

**Parameters:**

- `p_154809_` (`double`)

**Returns:** `public static MinMaxBounds.Doubles`

### matches

```java
public boolean matches(double p_154811_)
```

**Parameters:**

- `p_154811_` (`double`)

**Returns:** `public boolean`

### matchesSqr

```java
public boolean matchesSqr(double p_154813_)
```

**Parameters:**

- `p_154813_` (`double`)

**Returns:** `public boolean`

### fromReader

```java
public static MinMaxBounds.Doubles fromReader(StringReader p_154794_)
```

**Parameters:**

- `p_154794_` (`StringReader`)

**Returns:** `public static MinMaxBounds.Doubles`

### fromReader

```java
return fromReader(p_154807_ -> p_154807_)
```

**Parameters:**

- `p_154807_` (`p_154807_ ->`)

**Returns:** `return`

### fromReader

```java
public static MinMaxBounds.Doubles fromReader(StringReader p_154800_, Function<Double, Double> p_154801_)
```

**Parameters:**

- `p_154800_` (`StringReader`)
- `p_154801_` (`Function<Double, Double>`)

**Returns:** `public static MinMaxBounds.Doubles`

### Ints

```java
private Ints(Optional<Integer> p_298275_, Optional<Integer> p_298272_)
```

**Parameters:**

- `p_298275_` (`Optional<Integer>`)
- `p_298272_` (`Optional<Integer>`)

**Returns:** `private`

### create

```java
private static MinMaxBounds.Ints create(StringReader p_55378_, Optional<Integer> p_298250_, Optional<Integer> p_298579_)
```

**Parameters:**

- `p_55378_` (`StringReader`)
- `p_298250_` (`Optional<Integer>`)
- `p_298579_` (`Optional<Integer>`)

**Returns:** `private static MinMaxBounds.Ints`

### squareOpt

```java
private static Optional<Long> squareOpt(Optional<Integer> p_298733_)
```

**Parameters:**

- `p_298733_` (`Optional<Integer>`)

**Returns:** `private static Optional<Long>`

### exactly

```java
public static MinMaxBounds.Ints exactly(int p_55372_)
```

**Parameters:**

- `p_55372_` (`int`)

**Returns:** `public static MinMaxBounds.Ints`

### between

```java
public static MinMaxBounds.Ints between(int p_154815_, int p_154816_)
```

**Parameters:**

- `p_154815_` (`int`)
- `p_154816_` (`int`)

**Returns:** `public static MinMaxBounds.Ints`

### atLeast

```java
public static MinMaxBounds.Ints atLeast(int p_55387_)
```

**Parameters:**

- `p_55387_` (`int`)

**Returns:** `public static MinMaxBounds.Ints`

### atMost

```java
public static MinMaxBounds.Ints atMost(int p_154820_)
```

**Parameters:**

- `p_154820_` (`int`)

**Returns:** `public static MinMaxBounds.Ints`

### matches

```java
public boolean matches(int p_55391_)
```

**Parameters:**

- `p_55391_` (`int`)

**Returns:** `public boolean`

### matchesSqr

```java
public boolean matchesSqr(long p_154818_)
```

**Parameters:**

- `p_154818_` (`long`)

**Returns:** `public boolean`

### fromReader

```java
public static MinMaxBounds.Ints fromReader(StringReader p_55376_)
```

**Parameters:**

- `p_55376_` (`StringReader`)

**Returns:** `public static MinMaxBounds.Ints`

### fromReader

```java
return fromReader(p_55389_ -> p_55389_)
```

**Parameters:**

- `p_55389_` (`p_55389_ ->`)

**Returns:** `return`

### fromReader

```java
public static MinMaxBounds.Ints fromReader(StringReader p_55382_, Function<Integer, Integer> p_55383_)
```

**Parameters:**

- `p_55382_` (`StringReader`)
- `p_55383_` (`Function<Integer, Integer>`)

**Returns:** `public static MinMaxBounds.Ints`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BoundsFactory` | interface |  |
| `BoundsFromReaderFactory` | interface |  |
| `Doubles` | record |  |
| `Ints` | record |  |
