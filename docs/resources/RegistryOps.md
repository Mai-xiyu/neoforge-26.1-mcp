# RegistryOps

**Package:** `net.minecraft.resources`
**Type:** class<T> extends DelegatingOps<T>

## Methods

### create

```java
<T> public static <T> RegistryOps<T> create(DynamicOps<T> p_256342_, HolderLookup.Provider p_255950_)
```

**Parameters:**

- `p_256342_` (`DynamicOps<T>`)
- `p_255950_` (`HolderLookup.Provider`)

**Returns:** `public static <T> RegistryOps<T>`

### create

```java
<T> public static <T> RegistryOps<T> create(DynamicOps<T> p_256278_, RegistryOps.RegistryInfoLookup p_256479_)
```

**Parameters:**

- `p_256278_` (`DynamicOps<T>`)
- `p_256479_` (`RegistryOps.RegistryInfoLookup`)

**Returns:** `public static <T> RegistryOps<T>`

### injectRegistryContext

```java
<T> public static <T> Dynamic<T> injectRegistryContext(Dynamic<T> p_323625_, HolderLookup.Provider p_324054_)
```

**Parameters:**

- `p_323625_` (`Dynamic<T>`)
- `p_324054_` (`HolderLookup.Provider`)

**Returns:** `public static <T> Dynamic<T>`

### RegistryOps

```java
protected RegistryOps(DynamicOps<T> p_256313_, RegistryOps.RegistryInfoLookup p_255799_)
```

**Parameters:**

- `p_256313_` (`DynamicOps<T>`)
- `p_255799_` (`RegistryOps.RegistryInfoLookup`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### RegistryOps

```java
protected RegistryOps(RegistryOps<T> other)
```

**Parameters:**

- `other` (`RegistryOps<T>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### withParent

```java
<U> public <U> RegistryOps<U> withParent(DynamicOps<U> p_330654_)
```

**Parameters:**

- `p_330654_` (`DynamicOps<U>`)

**Returns:** `public <U> RegistryOps<U>`

### owner

```java
<E> public <E> Optional<HolderOwner<E>> owner(ResourceKey<? extends Registry<? extends E>> p_255757_)
```

**Parameters:**

- `p_255757_` (`ResourceKey<? extends Registry<? extends E>>`)

**Returns:** `public <E> Optional<HolderOwner<E>>`

### getter

```java
<E> public <E> Optional<HolderGetter<E>> getter(ResourceKey<? extends Registry<? extends E>> p_256031_)
```

**Parameters:**

- `p_256031_` (`ResourceKey<? extends Registry<? extends E>>`)

**Returns:** `public <E> Optional<HolderGetter<E>>`

### equals

```java
public boolean equals(Object p_341917_)
```

**Parameters:**

- `p_341917_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### retrieveGetter

```java
<E, O> public static <E, O> RecordCodecBuilder<O, HolderGetter<E>> retrieveGetter(ResourceKey<? extends Registry<? extends E>> p_206833_)
```

**Parameters:**

- `p_206833_` (`ResourceKey<? extends Registry<? extends E>>`)

**Returns:** `public static <E, O> RecordCodecBuilder<O, HolderGetter<E>>`

### retrieveRegistryLookup

```java
<E> public static <E> com.mojang.serialization.MapCodec<HolderLookup.RegistryLookup<E>> retrieveRegistryLookup(ResourceKey<? extends Registry<? extends E>> resourceKey)
```

**Parameters:**

- `resourceKey` (`ResourceKey<? extends Registry<? extends E>>`)

**Returns:** `public static <E> com.mojang.serialization.MapCodec<HolderLookup.RegistryLookup<E>>`

### retrieveElement

```java
<E, O> public static <E, O> RecordCodecBuilder<O, Holder.Reference<E>> retrieveElement(ResourceKey<E> p_256347_)
```

**Parameters:**

- `p_256347_` (`ResourceKey<E>`)

**Returns:** `public static <E, O> RecordCodecBuilder<O, Holder.Reference<E>>`

### HolderLookupAdapter

```java
public HolderLookupAdapter(HolderLookup.Provider p_341886_)
```

**Parameters:**

- `p_341886_` (`HolderLookup.Provider`)

**Returns:** `public`

### lookup

```java
public <E> Optional<RegistryOps.RegistryInfo<E>> lookup(ResourceKey<? extends Registry<? extends E>> p_341913_)
```

**Parameters:**

- `p_341913_` (`ResourceKey<? extends Registry<? extends E>>`)

**Returns:** `Optional<RegistryOps.RegistryInfo<E>>`

### createLookup

```java
private Optional<RegistryOps.RegistryInfo<Object>> createLookup(ResourceKey<? extends Registry<?>> p_341910_)
```

**Parameters:**

- `p_341910_` (`ResourceKey<? extends Registry<?>>`)

**Returns:** `private Optional<RegistryOps.RegistryInfo<Object>>`

### equals

```java
public boolean equals(Object p_341924_)
```

**Parameters:**

- `p_341924_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### fromRegistryLookup

```java
<T> public static <T> RegistryOps.RegistryInfo<T> fromRegistryLookup(HolderLookup.RegistryLookup<T> p_326797_)
```

**Parameters:**

- `p_326797_` (`HolderLookup.RegistryLookup<T>`)

**Returns:** `public static <T> RegistryOps.RegistryInfo<T>`

### lookup

```java
<T> <T> Optional<RegistryOps.RegistryInfo<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_256623_)
```

**Parameters:**

- `p_256623_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `<T> Optional<RegistryOps.RegistryInfo<T>>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RegistryInfo` | record |  |
| `RegistryInfoLookup` | interface |  |
