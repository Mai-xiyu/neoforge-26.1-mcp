# StatType

**Package:** `net.minecraft.stats`
**Type:** class<T> implements Iterable<Stat<T>>

## Methods

### StatType

```java
public StatType(Registry<T> p_12892_, Component p_298934_)
```

**Parameters:**

- `p_12892_` (`Registry<T>`)
- `p_298934_` (`Component`)

**Returns:** `public`

### streamCodec

```java
public StreamCodec<RegistryFriendlyByteBuf, Stat<T>> streamCodec()
```

**Returns:** `public StreamCodec<RegistryFriendlyByteBuf, Stat<T>>`

### contains

```java
public boolean contains(T p_12898_)
```

**Parameters:**

- `p_12898_` (`T`)

**Returns:** `public boolean`

### get

```java
public Stat<T> get(T p_12900_, StatFormatter p_12901_)
```

**Parameters:**

- `p_12900_` (`T`)
- `p_12901_` (`StatFormatter`)

**Returns:** `public Stat<T>`

### getRegistry

```java
public Registry<T> getRegistry()
```

**Returns:** `public Registry<T>`

### iterator

```java
public Iterator<Stat<T>> iterator()
```

**Returns:** `Iterator<Stat<T>>`

### get

```java
public Stat<T> get(T p_12903_)
```

**Parameters:**

- `p_12903_` (`T`)

**Returns:** `public Stat<T>`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `public Component`
