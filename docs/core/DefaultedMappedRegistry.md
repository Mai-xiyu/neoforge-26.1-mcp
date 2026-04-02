# DefaultedMappedRegistry

**Package:** `net.minecraft.core`
**Type:** class<T> extends MappedRegistry<T> implements DefaultedRegistry<T>

## Methods

### DefaultedMappedRegistry

```java
public DefaultedMappedRegistry(String p_260196_, ResourceKey<? extends Registry<T>> p_259440_, Lifecycle p_260260_, boolean p_259808_)
```

**Parameters:**

- `p_260196_` (`String`)
- `p_259440_` (`ResourceKey<? extends Registry<T>>`)
- `p_260260_` (`Lifecycle`)
- `p_259808_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### register

```java
public Holder.Reference<T> register(ResourceKey<T> p_321803_, T p_321739_, RegistrationInfo p_325995_)
```

**Parameters:**

- `p_321803_` (`ResourceKey<T>`)
- `p_321739_` (`T`)
- `p_325995_` (`RegistrationInfo`)

**Returns:** `Holder.Reference<T>`

### getId

```java
public int getId(T p_260033_)
```

**Parameters:**

- `p_260033_` (`T`)

**Returns:** `int`

### getKey

```java
public ResourceLocation getKey(T p_259233_)
```

**Parameters:**

- `p_259233_` (`T`)

**Returns:** `ResourceLocation`

### getKeyOrNull

```java
public ResourceLocation getKeyOrNull(T element)
```

**Parameters:**

- `element` (`T`)

**Returns:** `ResourceLocation`

### get

```java
public T get(ResourceLocation p_260004_)
```

**Parameters:**

- `p_260004_` (`ResourceLocation`)

**Returns:** `T`

### getOptional

```java
public Optional<T> getOptional(ResourceLocation p_260078_)
```

**Parameters:**

- `p_260078_` (`ResourceLocation`)

**Returns:** `Optional<T>`

### getAny

```java
public Optional<Holder.Reference<T>> getAny()
```

**Returns:** `Optional<Holder.Reference<T>>`

### byId

```java
public T byId(int p_259534_)
```

**Parameters:**

- `p_259534_` (`int`)

**Returns:** `T`

### getRandom

```java
public Optional<Holder.Reference<T>> getRandom(RandomSource p_260255_)
```

**Parameters:**

- `p_260255_` (`RandomSource`)

**Returns:** `Optional<Holder.Reference<T>>`

### getDefaultKey

```java
public ResourceLocation getDefaultKey()
```

**Returns:** `ResourceLocation`
