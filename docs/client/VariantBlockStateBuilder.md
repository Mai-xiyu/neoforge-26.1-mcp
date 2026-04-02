# VariantBlockStateBuilder

**Package:** `net.neoforged.neoforge.client.model.generators`
**Type:** class
**Implements:** `IGeneratedBlockState`
**Side:** 🖥️ Client

## Description

Builder for variant-type blockstates, i.e. non-multipart blockstates. Should
not be manually instantiated, instead use
`BlockStateProvider#getVariantBuilder(Block)`.



Variants can either be set via
`#setModels(PartialBlockstate, ConfiguredModel...)` or
`#addModels(PartialBlockstate, ConfiguredModel...)`, where model(s) can
be assigned directly to `PartialBlockstate partial states`, or builder
style via `#partialState()` and its subsequent methods.



This class also provides the convenience methods
`#forAllStates(Function)` and
`#forAllStatesExcept(Function, Property...)` for cases where the model
for each variant can be decided dynamically based on the state's property
values.
@see BlockStateProvider

## Methods

### VariantBlockStateBuilder

```java
 VariantBlockStateBuilder(Block owner)
```

**Parameters:**

- `owner` (`Block`)

**Returns:** ``

### getModels

```java
public Map<PartialBlockstate, ConfiguredModelList> getModels()
```

**Returns:** `public Map<PartialBlockstate, ConfiguredModelList>`

### getOwner

```java
public Block getOwner()
```

**Returns:** `public Block`

### toJson

```java
public JsonObject toJson()
```

**Returns:** `JsonObject`

### addModels

```java
public VariantBlockStateBuilder addModels(PartialBlockstate state, ConfiguredModel[]... models)
```

**Parameters:**

- `state` (`PartialBlockstate`)
- `models` (`ConfiguredModel[]...`)

**Returns:** `VariantBlockStateBuilder`

### setModels

```java
public VariantBlockStateBuilder setModels(PartialBlockstate state, ConfiguredModel[]... model)
```

**Parameters:**

- `state` (`PartialBlockstate`)
- `model` (`ConfiguredModel[]...`)

**Returns:** `VariantBlockStateBuilder`

### addModels

```java
 addModels()
```

**Returns:** ``

### disjointToAll

```java
private boolean disjointToAll(PartialBlockstate newState)
```

**Parameters:**

- `newState` (`PartialBlockstate`)

**Returns:** `private boolean`

### partialState

```java
public PartialBlockstate partialState()
```

**Returns:** `public PartialBlockstate`

### PartialBlockstate

```java
return new PartialBlockstate()
```

**Returns:** `return new`

### forAllStates

```java
public VariantBlockStateBuilder forAllStates(Function<BlockState, ConfiguredModel[]> mapper)
```

**Parameters:**

- `mapper` (`Function<BlockState, ConfiguredModel[]>`)

**Returns:** `public VariantBlockStateBuilder`

### forAllStatesExcept

```java
return forAllStatesExcept()
```

**Returns:** `return`

### forAllStatesExcept

```java
public VariantBlockStateBuilder forAllStatesExcept(Function<BlockState, ConfiguredModel[]> mapper, Property<?>[]... ignored)
```

**Parameters:**

- `mapper` (`Function<BlockState, ConfiguredModel[]>`)
- `ignored` (`Property<?>[]...`)

**Returns:** `public VariantBlockStateBuilder`

### PartialBlockstate

```java
 PartialBlockstate(Block owner, VariantBlockStateBuilder outerBuilder)
```

**Parameters:**

- `owner` (`Block`)
- `outerBuilder` (`VariantBlockStateBuilder`)

**Returns:** ``

### PartialBlockstate

```java
 PartialBlockstate(Block owner, Map<Property<?>, Comparable<?>> setStates, VariantBlockStateBuilder outerBuilder)
```

**Parameters:**

- `owner` (`Block`)
- `setStates` (`Map<Property<?>, Comparable<?>>`)
- `outerBuilder` (`VariantBlockStateBuilder`)

**Returns:** ``

### with

```java
public <T extends Comparable<T>> PartialBlockstate with(Property<T> prop, T value)
```

**Parameters:**

- `prop` (`Property<T>`)
- `value` (`T`)

**Returns:** `public <T extends Comparable<T>> PartialBlockstate`

### PartialBlockstate

```java
return new PartialBlockstate()
```

**Returns:** `return new`

### checkValidOwner

```java
private void checkValidOwner()
```

**Returns:** `private void`

### modelForState

```java
public ConfiguredModel.Builder<VariantBlockStateBuilder> modelForState()
```

**Returns:** `ConfiguredModel.Builder<VariantBlockStateBuilder>`

### checkValidOwner

```java
 checkValidOwner()
```

**Returns:** ``

### addModels

```java
public PartialBlockstate addModels(ConfiguredModel[]... models)
```

**Parameters:**

- `models` (`ConfiguredModel[]...`)

**Returns:** `PartialBlockstate`

### checkValidOwner

```java
 checkValidOwner()
```

**Returns:** ``

### setModels

```java
public VariantBlockStateBuilder setModels(ConfiguredModel[]... models)
```

**Parameters:**

- `models` (`ConfiguredModel[]...`)

**Returns:** `VariantBlockStateBuilder`

### checkValidOwner

```java
 checkValidOwner()
```

**Returns:** ``

### partialState

```java
public PartialBlockstate partialState()
```

**Returns:** `PartialBlockstate`

### checkValidOwner

```java
 checkValidOwner()
```

**Returns:** ``

### equals

```java
public boolean equals(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### getOwner

```java
public Block getOwner()
```

**Returns:** `public Block`

### getSetStates

```java
public SortedMap<Property<?>, Comparable<?>> getSetStates()
```

**Returns:** `public SortedMap<Property<?>, Comparable<?>>`

### test

```java
public boolean test(BlockState blockState)
```

**Parameters:**

- `blockState` (`BlockState`)

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### comparingByProperties

```java
public static Comparator<PartialBlockstate> comparingByProperties()
```

**Returns:** `Comparator<PartialBlockstate>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PartialBlockstate` | class |  |
