# EntityDataSerializer

**Package:** `net.minecraft.network.syncher`
**Type:** interface<T>

## Methods

### codec

```java
StreamCodec<? super RegistryFriendlyByteBuf, T> codec()
```

**Returns:** `StreamCodec<? super RegistryFriendlyByteBuf, T>`

### createAccessor

```java
default EntityDataAccessor<T> createAccessor(int p_135022_)
```

**Parameters:**

- `p_135022_` (`int`)

**Returns:** `default EntityDataAccessor<T>`

### copy

```java
T copy(T p_135023_)
```

**Parameters:**

- `p_135023_` (`T`)

**Returns:** `T`

### forValueType

```java
<T> static <T> EntityDataSerializer<T> forValueType(StreamCodec<? super RegistryFriendlyByteBuf, T> p_319946_)
```

**Parameters:**

- `p_319946_` (`StreamCodec<? super RegistryFriendlyByteBuf, T>`)

**Returns:** `static <T> EntityDataSerializer<T>`

### copy

```java
default T copy(T p_238112_)
```

**Parameters:**

- `p_238112_` (`T`)

**Returns:** `T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ForValueType` | interface |  |
