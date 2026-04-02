# StateDefinition

**Package:** `net.minecraft.world.level.block.state`
**Type:** class<O, S extends StateHolder<O, S>>

## Methods

### StateDefinition

```java
protected StateDefinition(Function<O, S> p_61052_, O p_61053_, StateDefinition.Factory<O, S> p_61054_, Map<String, Property<?>> p_61055_)
```

**Parameters:**

- `p_61052_` (`Function<O, S>`)
- `p_61053_` (`O`)
- `p_61054_` (`StateDefinition.Factory<O, S>`)
- `p_61055_` (`Map<String, Property<?>>`)

**Returns:** `protected`

### appendPropertyCodec

```java
private static <S extends StateHolder<?, S>, T extends Comparable<T>> MapCodec<S> appendPropertyCodec(MapCodec<S> p_61077_, Supplier<S> p_61078_, String p_61079_, Property<T> p_61080_)
```

**Parameters:**

- `p_61077_` (`MapCodec<S>`)
- `p_61078_` (`Supplier<S>`)
- `p_61079_` (`String`)
- `p_61080_` (`Property<T>`)

**Returns:** `private static <S extends StateHolder<?, S>, T extends Comparable<T>> MapCodec<S>`

### getPossibleStates

```java
public ImmutableList<S> getPossibleStates()
```

**Returns:** `public ImmutableList<S>`

### any

```java
public S any()
```

**Returns:** `public S`

### getOwner

```java
public O getOwner()
```

**Returns:** `public O`

### getProperties

```java
public Collection<Property<?>> getProperties()
```

**Returns:** `public Collection<Property<?>>`

### toString

```java
public String toString()
```

**Returns:** `String`

### getProperty

```java
public Property<?> getProperty(String p_61082_)
```

**Parameters:**

- `p_61082_` (`String`)

**Returns:** `Property<?>`

### Builder

```java
public Builder(O p_61098_)
```

**Parameters:**

- `p_61098_` (`O`)

**Returns:** `public`

### add

```java
public StateDefinition.Builder<O, S> add(Property<?>[]... p_61105_)
```

**Parameters:**

- `p_61105_` (`Property<?>[]...`)

**Returns:** `public StateDefinition.Builder<O, S>`

### validateProperty

```java
private <T extends Comparable<T>> void validateProperty(Property<T> p_61100_)
```

**Parameters:**

- `p_61100_` (`Property<T>`)

**Returns:** `private <T extends Comparable<T>> void`

### IllegalArgumentException

```java
throw new IllegalArgumentException(this.owner + " has invalidly named property: " + s)
```

**Parameters:**

- `s` (`this.owner + " has invalidly named property: " +`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException(this.owner + " attempted use property " + s + " with <= 1 possible values")
```

**Parameters:**

- `values"` (`this.owner + " attempted use property " + s + " with <= 1 possible`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException(this.owner + " has property: " + s + " with invalidly named value: " + s1)
```

**Parameters:**

- `s1` (`this.owner + " has property: " + s + " with invalidly named value: " +`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException(this.owner + " has duplicate property: " + s)
```

**Parameters:**

- `s` (`this.owner + " has duplicate property: " +`)

**Returns:** `throw new`

### create

```java
public StateDefinition<O, S> create(Function<O, S> p_61102_, StateDefinition.Factory<O, S> p_61103_)
```

**Parameters:**

- `p_61102_` (`Function<O, S>`)
- `p_61103_` (`StateDefinition.Factory<O, S>`)

**Returns:** `public StateDefinition<O, S>`

### create

```java
S create(O p_61107_, Reference2ObjectArrayMap<Property<?>, Comparable<?>> p_326428_, MapCodec<S> p_61109_)
```

**Parameters:**

- `p_61107_` (`O`)
- `p_326428_` (`Reference2ObjectArrayMap<Property<?>, Comparable<?>>`)
- `p_61109_` (`MapCodec<S>`)

**Returns:** `S`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `Factory` | interface |  |
