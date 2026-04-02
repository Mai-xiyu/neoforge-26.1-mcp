# TelemetryLogManager

**Package:** `net.minecraft.client.telemetry`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TelemetryLogManager

```java
private TelemetryLogManager(EventLogDirectory p_261728_)
```

**Parameters:**

- `p_261728_` (`EventLogDirectory`)

**Returns:** `private`

### open

```java
public static CompletableFuture<Optional<TelemetryLogManager>> open(Path p_262078_)
```

**Parameters:**

- `p_262078_` (`Path`)

**Returns:** `public static CompletableFuture<Optional<TelemetryLogManager>>`

### openLogger

```java
public CompletableFuture<Optional<TelemetryEventLogger>> openLogger()
```

**Returns:** `public CompletableFuture<Optional<TelemetryEventLogger>>`

### close

```java
public void close()
```
