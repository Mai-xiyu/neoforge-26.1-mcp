# DataComponentMap

**Package:** `net.minecraft.core.component`
**Type:** interface
**Extends:** `Iterable<TypedDataComponent<?>>`

## Methods

### get

```java
public <T> T get(DataComponentType<? extends T> p_331168_)
```

**Parameters:**

- `p_331168_` (`DataComponentType<? extends T>`)

**Returns:** `T`

### keySet

```java
public Set<DataComponentType<?>> keySet()
```

**Returns:** `Set<DataComponentType<?>>`

### iterator

```java
public Iterator<TypedDataComponent<?>> iterator()
```

**Returns:** `Iterator<TypedDataComponent<?>>`

### makeCodec

```java
static Codec<DataComponentMap> makeCodec(Codec<DataComponentType<?>> p_345883_)
```

**Parameters:**

- `p_345883_` (`Codec<DataComponentType<?>>`)

**Returns:** `static Codec<DataComponentMap>`

### makeCodecFromMap

```java
static Codec<DataComponentMap> makeCodecFromMap(Codec<Map<DataComponentType<?>, Object>> p_346302_)
```

**Parameters:**

- `p_346302_` (`Codec<Map<DataComponentType<?>, Object>>`)

**Returns:** `static Codec<DataComponentMap>`

### composite

```java
static DataComponentMap composite(DataComponentMap p_340974_, DataComponentMap p_341350_)
```

**Parameters:**

- `p_340974_` (`DataComponentMap`)
- `p_341350_` (`DataComponentMap`)

**Returns:** `static DataComponentMap`

### DataComponentMap

```java
return new DataComponentMap()
```

**Returns:** `return new`

### get

```java
public <T> T get(DataComponentType<? extends T> p_330291_)
```

**Parameters:**

- `p_330291_` (`DataComponentType<? extends T>`)

**Returns:** `T`

### keySet

```java
public Set<DataComponentType<?>> keySet()
```

**Returns:** `Set<DataComponentType<?>>`

### builder

```java
static DataComponentMap.Builder builder()
```

**Returns:** `static DataComponentMap.Builder`

### get

```java
<T> T get(DataComponentType<? extends T> p_331815_)
```

**Parameters:**

- `p_331815_` (`DataComponentType<? extends T>`)

**Returns:** `T`

### keySet

```java
Set<DataComponentType<?>> keySet()
```

**Returns:** `Set<DataComponentType<?>>`

### has

```java
default boolean has(DataComponentType<?> p_330409_)
```

**Parameters:**

- `p_330409_` (`DataComponentType<?>`)

**Returns:** `default boolean`

### getOrDefault

```java
<T> default <T> T getOrDefault(DataComponentType<? extends T> p_331896_, T p_331597_)
```

**Parameters:**

- `p_331896_` (`DataComponentType<? extends T>`)
- `p_331597_` (`T`)

**Returns:** `default <T> T`

### getTyped

```java
default <T> TypedDataComponent<T> getTyped(DataComponentType<T> p_330594_)
```

**Parameters:**

- `p_330594_` (`DataComponentType<T>`)

**Returns:** `TypedDataComponent<T>`

### iterator

```java
default Iterator<TypedDataComponent<?>> iterator()
```

**Returns:** `Iterator<TypedDataComponent<?>>`

### stream

```java
default Stream<TypedDataComponent<?>> stream()
```

**Returns:** `default Stream<TypedDataComponent<?>>`

### size

```java
default int size()
```

**Returns:** `default int`

### isEmpty

```java
default boolean isEmpty()
```

**Returns:** `default boolean`

### filter

```java
default DataComponentMap filter(Predicate<DataComponentType<?>> p_331448_)
```

**Parameters:**

- `p_331448_` (`Predicate<DataComponentType<?>>`)

**Returns:** `default DataComponentMap`

### DataComponentMap

```java
return new DataComponentMap()
```

**Returns:** `return new`

### get

```java
public <T> T get(DataComponentType<? extends T> p_341052_)
```

**Parameters:**

- `p_341052_` (`DataComponentType<? extends T>`)

**Returns:** `T`

### keySet

```java
public Set<DataComponentType<?>> keySet()
```

**Returns:** `Set<DataComponentType<?>>`

### Builder

```java
 Builder()
```

**Returns:** ``

### set

```java
<T> public <T> DataComponentMap.Builder set(DataComponentType<T> p_330228_, T p_332186_)
```

**Parameters:**

- `p_330228_` (`DataComponentType<T>`)
- `p_332186_` (`T`)

**Returns:** `public <T> DataComponentMap.Builder`

### setUnchecked

```java
<T> <T> void setUnchecked(DataComponentType<T> p_338736_, Object p_338594_)
```

**Parameters:**

- `p_338736_` (`DataComponentType<T>`)
- `p_338594_` (`Object`)

**Returns:** `<T> void`

### addAll

```java
public DataComponentMap.Builder addAll(DataComponentMap p_331194_)
```

**Parameters:**

- `p_331194_` (`DataComponentMap`)

**Returns:** `public DataComponentMap.Builder`

### build

```java
public DataComponentMap build()
```

**Returns:** `public DataComponentMap`

### buildFromMapTrusted

```java
return buildFromMapTrusted()
```

**Returns:** `return`

### buildFromMapTrusted

```java
private static DataComponentMap buildFromMapTrusted(Map<DataComponentType<?>, Object> p_338248_)
```

**Parameters:**

- `p_338248_` (`Map<DataComponentType<?>, Object>`)

**Returns:** `private static DataComponentMap`

### get

```java
public <T> T get(DataComponentType<? extends T> p_331063_)
```

**Parameters:**

- `p_331063_` (`DataComponentType<? extends T>`)

**Returns:** `T`

### has

```java
public boolean has(DataComponentType<?> p_331343_)
```

**Parameters:**

- `p_331343_` (`DataComponentType<?>`)

**Returns:** `boolean`

### keySet

```java
public Set<DataComponentType<?>> keySet()
```

**Returns:** `Set<DataComponentType<?>>`

### iterator

```java
public Iterator<TypedDataComponent<?>> iterator()
```

**Returns:** `Iterator<TypedDataComponent<?>>`

### size

```java
public int size()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
