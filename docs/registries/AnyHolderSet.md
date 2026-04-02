# AnyHolderSet

**Package:** `net.neoforged.neoforge.registries.holdersets`
**Type:** record<T>(HolderLookup.RegistryLookup<T> registryLookup) implements ICustomHolderSet<T>

## Description



Holderset that represents all elements of a registry. Json format:

{
"type": "neoforge:any"
}


## Methods

### type

```java
public HolderSetType type()
```

**Returns:** `HolderSetType`

### iterator

```java
public Iterator<Holder<T>> iterator()
```

**Returns:** `Iterator<Holder<T>>`

### stream

```java
public Stream<Holder<T>> stream()
```

**Returns:** `Stream<Holder<T>>`

### size

```java
public int size()
```

**Returns:** `int`

### unwrap

```java
public Either<TagKey<T>, List<Holder<T>>> unwrap()
```

**Returns:** `Either<TagKey<T>, List<Holder<T>>>`

### getRandomElement

```java
public Optional<Holder<T>> getRandomElement(RandomSource random)
```

**Parameters:**

- `random` (`RandomSource`)

**Returns:** `Optional<Holder<T>>`

### get

```java
public Holder<T> get(int i)
```

**Parameters:**

- `i` (`int`)

**Returns:** `Holder<T>`

### contains

```java
public boolean contains(Holder<T> holder)
```

**Parameters:**

- `holder` (`Holder<T>`)

**Returns:** `boolean`

### canSerializeIn

```java
public boolean canSerializeIn(HolderOwner<T> holderOwner)
```

**Parameters:**

- `holderOwner` (`HolderOwner<T>`)

**Returns:** `boolean`

### unwrapKey

```java
public Optional<TagKey<T>> unwrapKey()
```

**Returns:** `Optional<TagKey<T>>`

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

### decode

```java
public AnyHolderSet<T> decode(RegistryFriendlyByteBuf buf)
```

**Parameters:**

- `buf` (`RegistryFriendlyByteBuf`)

**Returns:** `AnyHolderSet<T>`

### encode

```java
public void encode(RegistryFriendlyByteBuf buf, AnyHolderSet<T> holderSet)
```

**Parameters:**

- `buf` (`RegistryFriendlyByteBuf`)
- `holderSet` (`AnyHolderSet<T>`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | class |  |
