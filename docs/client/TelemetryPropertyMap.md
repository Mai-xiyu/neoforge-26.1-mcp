# TelemetryPropertyMap

**Package:** `net.minecraft.client.telemetry`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TelemetryPropertyMap

```java
 TelemetryPropertyMap(Map<TelemetryProperty<?>, Object> p_262135_)
```

**Parameters:**

- `p_262135_` (`Map<TelemetryProperty<?>, Object>`)

**Returns:** ``

### builder

```java
public static TelemetryPropertyMap.Builder builder()
```

**Returns:** `public static TelemetryPropertyMap.Builder`

### createCodec

```java
public static MapCodec<TelemetryPropertyMap> createCodec(List<TelemetryProperty<?>> p_262139_)
```

**Parameters:**

- `p_262139_` (`List<TelemetryProperty<?>>`)

**Returns:** `public static MapCodec<TelemetryPropertyMap>`

### encode

```java
<T> public <T> RecordBuilder<T> encode(TelemetryPropertyMap p_261525_, DynamicOps<T> p_262068_, RecordBuilder<T> p_261850_)
```

**Parameters:**

- `p_261525_` (`TelemetryPropertyMap`)
- `p_262068_` (`DynamicOps<T>`)
- `p_261850_` (`RecordBuilder<T>`)

**Returns:** `public <T> RecordBuilder<T>`

### encodeProperty

```java
<T, V> private <T, V> RecordBuilder<T> encodeProperty(TelemetryPropertyMap p_262128_, RecordBuilder<T> p_261947_, TelemetryProperty<V> p_261911_)
```

**Parameters:**

- `p_262128_` (`TelemetryPropertyMap`)
- `p_261947_` (`RecordBuilder<T>`)
- `p_261911_` (`TelemetryProperty<V>`)

**Returns:** `private <T, V> RecordBuilder<T>`

### decode

```java
public <T> DataResult<TelemetryPropertyMap> decode(DynamicOps<T> p_261767_, MapLike<T> p_262176_)
```

**Parameters:**

- `p_261767_` (`DynamicOps<T>`)
- `p_262176_` (`MapLike<T>`)

**Returns:** `DataResult<TelemetryPropertyMap>`

### decodeProperty

```java
<T, V> private <T, V> DataResult<TelemetryPropertyMap.Builder> decodeProperty(DataResult<TelemetryPropertyMap.Builder> p_261892_, DynamicOps<T> p_261859_, MapLike<T> p_261668_, TelemetryProperty<V> p_261627_)
```

**Parameters:**

- `p_261892_` (`DataResult<TelemetryPropertyMap.Builder>`)
- `p_261859_` (`DynamicOps<T>`)
- `p_261668_` (`MapLike<T>`)
- `p_261627_` (`TelemetryProperty<V>`)

**Returns:** `private <T, V> DataResult<TelemetryPropertyMap.Builder>`

### keys

```java
public <T> Stream<T> keys(DynamicOps<T> p_261746_)
```

**Parameters:**

- `p_261746_` (`DynamicOps<T>`)

**Returns:** `Stream<T>`

### get

```java
public <T> T get(TelemetryProperty<T> p_261667_)
```

**Parameters:**

- `p_261667_` (`TelemetryProperty<T>`)

**Returns:** `T`

### toString

```java
public String toString()
```

**Returns:** `String`

### propertySet

```java
public Set<TelemetryProperty<?>> propertySet()
```

**Returns:** `public Set<TelemetryProperty<?>>`

### Builder

```java
 Builder()
```

**Returns:** ``

### put

```java
<T> public <T> TelemetryPropertyMap.Builder put(TelemetryProperty<T> p_261681_, T p_262093_)
```

**Parameters:**

- `p_261681_` (`TelemetryProperty<T>`)
- `p_262093_` (`T`)

**Returns:** `public <T> TelemetryPropertyMap.Builder`

### putIfNotNull

```java
<T> public <T> TelemetryPropertyMap.Builder putIfNotNull(TelemetryProperty<T> p_286534_, T p_286699_)
```

**Parameters:**

- `p_286534_` (`TelemetryProperty<T>`)
- `p_286699_` (`T`)

**Returns:** `public <T> TelemetryPropertyMap.Builder`

### putAll

```java
public TelemetryPropertyMap.Builder putAll(TelemetryPropertyMap p_261779_)
```

**Parameters:**

- `p_261779_` (`TelemetryPropertyMap`)

**Returns:** `public TelemetryPropertyMap.Builder`

### build

```java
public TelemetryPropertyMap build()
```

**Returns:** `public TelemetryPropertyMap`

### TelemetryPropertyMap

```java
return new TelemetryPropertyMap()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
