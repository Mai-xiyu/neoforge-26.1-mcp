# GameLoadTimesEvent

**Package:** `net.minecraft.client.telemetry.events`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `GameLoadTimesEvent` |  |
| `CODEC` | `Codec<GameLoadTimesEvent.Measurement>` |  |

## Methods

### GameLoadTimesEvent

```java
protected GameLoadTimesEvent(Ticker p_286506_)
```

**Parameters:**

- `p_286506_` (`Ticker`)

**Returns:** `protected`

### beginStep

```java
public synchronized void beginStep(TelemetryProperty<GameLoadTimesEvent.Measurement> p_286394_)
```

**Parameters:**

- `p_286394_` (`TelemetryProperty<GameLoadTimesEvent.Measurement>`)

**Returns:** `public synchronized void`

### beginStep

```java
public synchronized void beginStep(TelemetryProperty<GameLoadTimesEvent.Measurement> p_286396_, Stopwatch p_286822_)
```

**Parameters:**

- `p_286396_` (`TelemetryProperty<GameLoadTimesEvent.Measurement>`)
- `p_286822_` (`Stopwatch`)

**Returns:** `public synchronized void`

### beginStep

```java
private synchronized void beginStep(TelemetryProperty<GameLoadTimesEvent.Measurement> p_286311_, Function<TelemetryProperty<GameLoadTimesEvent.Measurement>, Stopwatch> p_286454_)
```

**Parameters:**

- `p_286311_` (`TelemetryProperty<GameLoadTimesEvent.Measurement>`)
- `p_286454_` (`Function<TelemetryProperty<GameLoadTimesEvent.Measurement>, Stopwatch>`)

**Returns:** `private synchronized void`

### endStep

```java
public synchronized void endStep(TelemetryProperty<GameLoadTimesEvent.Measurement> p_286634_)
```

**Parameters:**

- `p_286634_` (`TelemetryProperty<GameLoadTimesEvent.Measurement>`)

**Returns:** `public synchronized void`

### send

```java
public void send(TelemetryEventSender p_286524_)
```

**Parameters:**

- `p_286524_` (`TelemetryEventSender`)

**Returns:** `public void`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### setBootstrapTime

```java
public synchronized void setBootstrapTime(long p_286847_)
```

**Parameters:**

- `p_286847_` (`long`)

**Returns:** `public synchronized void`

### Measurement

```java
public static record Measurement(int millis)
```

**Parameters:**

- `millis` (`int`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Measurement` | record |  |
