# TelemetryEventSender

**Package:** `net.minecraft.client.telemetry`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`, `@FunctionalInterface`

## Methods

### decorate

```java
default TelemetryEventSender decorate(Consumer<TelemetryPropertyMap.Builder> p_261897_)
```

**Parameters:**

- `p_261897_` (`Consumer<TelemetryPropertyMap.Builder>`)

**Returns:** `default TelemetryEventSender`

### send

```java
void send(TelemetryEventType p_261620_, Consumer<TelemetryPropertyMap.Builder> p_262079_)
```

**Parameters:**

- `p_261620_` (`TelemetryEventType`)
- `p_262079_` (`Consumer<TelemetryPropertyMap.Builder>`)
