# ComponentPredicateParser

**Package:** `net.minecraft.commands.arguments.item`
**Type:** class

## Methods

### createGrammar

```java
<T, C, P> public static <T, C, P> Grammar<List<T>> createGrammar(ComponentPredicateParser.Context<T, C, P> p_335727_)
```

**Parameters:**

- `p_335727_` (`ComponentPredicateParser.Context<T, C, P>`)

**Returns:** `public static <T, C, P> Grammar<List<T>>`

### ComponentLookupRule

```java
 ComponentLookupRule(Atom<ResourceLocation> p_335669_, ComponentPredicateParser.Context<T, C, P> p_335692_)
```

**Parameters:**

- `p_335669_` (`Atom<ResourceLocation>`)
- `p_335692_` (`ComponentPredicateParser.Context<T, C, P>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### validateElement

```java
protected C validateElement(ImmutableStringReader p_335604_, ResourceLocation p_335964_)
```

**Parameters:**

- `p_335604_` (`ImmutableStringReader`)
- `p_335964_` (`ResourceLocation`)

**Returns:** `C`

### possibleResources

```java
public Stream<ResourceLocation> possibleResources()
```

**Returns:** `Stream<ResourceLocation>`

### forElementType

```java
T forElementType(ImmutableStringReader p_335757_, ResourceLocation p_336070_)
```

**Parameters:**

- `p_335757_` (`ImmutableStringReader`)
- `p_336070_` (`ResourceLocation`)

**Returns:** `T`

### listElementTypes

```java
Stream<ResourceLocation> listElementTypes()
```

**Returns:** `Stream<ResourceLocation>`

### forTagType

```java
T forTagType(ImmutableStringReader p_335809_, ResourceLocation p_335925_)
```

**Parameters:**

- `p_335809_` (`ImmutableStringReader`)
- `p_335925_` (`ResourceLocation`)

**Returns:** `T`

### listTagTypes

```java
Stream<ResourceLocation> listTagTypes()
```

**Returns:** `Stream<ResourceLocation>`

### lookupComponentType

```java
C lookupComponentType(ImmutableStringReader p_335515_, ResourceLocation p_335733_)
```

**Parameters:**

- `p_335515_` (`ImmutableStringReader`)
- `p_335733_` (`ResourceLocation`)

**Returns:** `C`

### listComponentTypes

```java
Stream<ResourceLocation> listComponentTypes()
```

**Returns:** `Stream<ResourceLocation>`

### createComponentTest

```java
T createComponentTest(ImmutableStringReader p_336142_, C p_336094_, Tag p_336057_)
```

**Parameters:**

- `p_336142_` (`ImmutableStringReader`)
- `p_336094_` (`C`)
- `p_336057_` (`Tag`)

**Returns:** `T`

### createComponentTest

```java
T createComponentTest(ImmutableStringReader p_335521_, C p_335579_)
```

**Parameters:**

- `p_335521_` (`ImmutableStringReader`)
- `p_335579_` (`C`)

**Returns:** `T`

### lookupPredicateType

```java
P lookupPredicateType(ImmutableStringReader p_336079_, ResourceLocation p_335954_)
```

**Parameters:**

- `p_336079_` (`ImmutableStringReader`)
- `p_335954_` (`ResourceLocation`)

**Returns:** `P`

### listPredicateTypes

```java
Stream<ResourceLocation> listPredicateTypes()
```

**Returns:** `Stream<ResourceLocation>`

### createPredicateTest

```java
T createPredicateTest(ImmutableStringReader p_335898_, P p_335609_, Tag p_335661_)
```

**Parameters:**

- `p_335898_` (`ImmutableStringReader`)
- `p_335609_` (`P`)
- `p_335661_` (`Tag`)

**Returns:** `T`

### negate

```java
T negate(T p_335446_)
```

**Parameters:**

- `p_335446_` (`T`)

**Returns:** `T`

### anyOf

```java
T anyOf(List<T> p_336010_)
```

**Parameters:**

- `p_336010_` (`List<T>`)

**Returns:** `T`

### ElementLookupRule

```java
 ElementLookupRule(Atom<ResourceLocation> p_335457_, ComponentPredicateParser.Context<T, C, P> p_335797_)
```

**Parameters:**

- `p_335457_` (`Atom<ResourceLocation>`)
- `p_335797_` (`ComponentPredicateParser.Context<T, C, P>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### validateElement

```java
protected T validateElement(ImmutableStringReader p_335629_, ResourceLocation p_335530_)
```

**Parameters:**

- `p_335629_` (`ImmutableStringReader`)
- `p_335530_` (`ResourceLocation`)

**Returns:** `T`

### possibleResources

```java
public Stream<ResourceLocation> possibleResources()
```

**Returns:** `Stream<ResourceLocation>`

### PredicateLookupRule

```java
 PredicateLookupRule(Atom<ResourceLocation> p_335495_, ComponentPredicateParser.Context<T, C, P> p_335572_)
```

**Parameters:**

- `p_335495_` (`Atom<ResourceLocation>`)
- `p_335572_` (`ComponentPredicateParser.Context<T, C, P>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### validateElement

```java
protected P validateElement(ImmutableStringReader p_336035_, ResourceLocation p_335697_)
```

**Parameters:**

- `p_336035_` (`ImmutableStringReader`)
- `p_335697_` (`ResourceLocation`)

**Returns:** `P`

### possibleResources

```java
public Stream<ResourceLocation> possibleResources()
```

**Returns:** `Stream<ResourceLocation>`

### TagLookupRule

```java
 TagLookupRule(Atom<ResourceLocation> p_335960_, ComponentPredicateParser.Context<T, C, P> p_335934_)
```

**Parameters:**

- `p_335960_` (`Atom<ResourceLocation>`)
- `p_335934_` (`ComponentPredicateParser.Context<T, C, P>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### validateElement

```java
protected T validateElement(ImmutableStringReader p_335858_, ResourceLocation p_335888_)
```

**Parameters:**

- `p_335858_` (`ImmutableStringReader`)
- `p_335888_` (`ResourceLocation`)

**Returns:** `T`

### possibleResources

```java
public Stream<ResourceLocation> possibleResources()
```

**Returns:** `Stream<ResourceLocation>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Context` | interface |  |
