# TelemetryEventType

**Package:** `net.minecraft.client.telemetry`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<TelemetryEventType>` |  |
| `WORLD_LOADED` | `TelemetryEventType` |  |
| `PERFORMANCE_METRICS` | `TelemetryEventType` |  |
| `WORLD_LOAD_TIMES` | `TelemetryEventType` |  |
| `WORLD_UNLOADED` | `TelemetryEventType` |  |
| `ADVANCEMENT_MADE` | `TelemetryEventType` |  |
| `GAME_LOAD_TIMES` | `TelemetryEventType` |  |

## Methods

### TelemetryEventType

```java
 TelemetryEventType(String p_261787_, String p_262121_, List<TelemetryProperty<?>> p_261987_, boolean p_261511_)
```

**Parameters:**

- `p_261787_` (`String`)
- `p_262121_` (`String`)
- `p_261987_` (`List<TelemetryProperty<?>>`)
- `p_261511_` (`boolean`)

**Returns:** ``

### builder

```java
public static TelemetryEventType.Builder builder(String p_261734_, String p_261807_)
```

**Parameters:**

- `p_261734_` (`String`)
- `p_261807_` (`String`)

**Returns:** `public static TelemetryEventType.Builder`

### id

```java
public String id()
```

**Returns:** `public String`

### properties

```java
public List<TelemetryProperty<?>> properties()
```

**Returns:** `public List<TelemetryProperty<?>>`

### codec

```java
public MapCodec<TelemetryEventInstance> codec()
```

**Returns:** `public MapCodec<TelemetryEventInstance>`

### isOptIn

```java
public boolean isOptIn()
```

**Returns:** `public boolean`

### export

```java
public TelemetryEvent export(TelemetrySession p_262179_, TelemetryPropertyMap p_262018_)
```

**Parameters:**

- `p_262179_` (`TelemetrySession`)
- `p_262018_` (`TelemetryPropertyMap`)

**Returns:** `public TelemetryEvent`

### contains

```java
<T> public <T> boolean contains(TelemetryProperty<T> p_262037_)
```

**Parameters:**

- `p_262037_` (`TelemetryProperty<T>`)

**Returns:** `public <T> boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### title

```java
public MutableComponent title()
```

**Returns:** `public MutableComponent`

### description

```java
public MutableComponent description()
```

**Returns:** `public MutableComponent`

### makeTranslation

```java
private MutableComponent makeTranslation(String p_261909_)
```

**Parameters:**

- `p_261909_` (`String`)

**Returns:** `private MutableComponent`

### values

```java
public static List<TelemetryEventType> values()
```

**Returns:** `public static List<TelemetryEventType>`

### Builder

```java
 Builder(String p_261797_, String p_261777_)
```

**Parameters:**

- `p_261797_` (`String`)
- `p_261777_` (`String`)

**Returns:** ``

### defineAll

```java
public TelemetryEventType.Builder defineAll(List<TelemetryProperty<?>> p_261497_)
```

**Parameters:**

- `p_261497_` (`List<TelemetryProperty<?>>`)

**Returns:** `public TelemetryEventType.Builder`

### define

```java
<T> public <T> TelemetryEventType.Builder define(TelemetryProperty<T> p_261756_)
```

**Parameters:**

- `p_261756_` (`TelemetryProperty<T>`)

**Returns:** `public <T> TelemetryEventType.Builder`

### optIn

```java
public TelemetryEventType.Builder optIn()
```

**Returns:** `public TelemetryEventType.Builder`

### register

```java
public TelemetryEventType register()
```

**Returns:** `public TelemetryEventType`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate TelemetryEventType with key: '" + this.id + "'")
```

**Parameters:**

- `"'"` (`"Duplicate TelemetryEventType with key: '" + this.id +`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
