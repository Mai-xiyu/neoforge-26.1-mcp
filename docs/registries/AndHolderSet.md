# AndHolderSet

**Package:** `net.neoforged.neoforge.registries.holdersets`
**Type:** class<T> extends CompositeHolderSet<T>

## Description



Holderset that represents an intersection of other holdersets. Json format:

{
"type": "neoforge:and",
"values":
[
// list of sub-holdersets (strings, lists, or objects)
]
}


## Methods

### AndHolderSet

```java
public AndHolderSet(List<HolderSet<T>> values)
```

**Parameters:**

- `values` (`List<HolderSet<T>>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### AndHolderSet

```java
public public AndHolderSet(HolderSet<T>[]... values)
```

**Parameters:**

- `values` (`HolderSet<T>[]...`)

**Returns:** `public`

### type

```java
public HolderSetType type()
```

**Returns:** `HolderSetType`

### createSet

```java
protected Set<Holder<T>> createSet()
```

**Returns:** `Set<Holder<T>>`

### toString

```java
public String toString()
```

**Returns:** `String`

### makeCodec

```java
public <T> MapCodec<? extends ICustomHolderSet<T>> makeCodec(ResourceKey<? extends Registry<T>> registryKey, Codec<Holder<T>> holderCodec, boolean forceList)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<T>>`)
- `holderCodec` (`Codec<Holder<T>>`)
- `forceList` (`boolean`)

**Returns:** `MapCodec<? extends ICustomHolderSet<T>>`

### makeStreamCodec

```java
public <T> StreamCodec<RegistryFriendlyByteBuf, ? extends ICustomHolderSet<T>> makeStreamCodec(ResourceKey<? extends Registry<T>> registryKey)
```

**Parameters:**

- `registryKey` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `StreamCodec<RegistryFriendlyByteBuf, ? extends ICustomHolderSet<T>>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | class |  |
