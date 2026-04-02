# IHolderExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface<T> extends IWithData<T>

## Description

Extension for `Holder`

## Methods

### getDelegate

```java
default Holder<T> getDelegate()
```

**Returns:** `Holder<T>`

### unwrapLookup

```java
default HolderLookup.RegistryLookup<T> unwrapLookup()
```

**Returns:** `HolderLookup.RegistryLookup<T>`

### getKey

```java
default ResourceKey<T> getKey()
```

**Returns:** `ResourceKey<T>`
