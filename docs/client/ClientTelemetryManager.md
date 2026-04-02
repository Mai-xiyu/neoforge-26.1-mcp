# ClientTelemetryManager

**Package:** `net.minecraft.client.telemetry`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ClientTelemetryManager

```java
public ClientTelemetryManager(Minecraft p_261610_, UserApiService p_261552_, User p_262159_)
```

**Parameters:**

- `p_261610_` (`Minecraft`)
- `p_261552_` (`UserApiService`)
- `p_262159_` (`User`)

**Returns:** `public`

### createWorldSessionManager

```java
public WorldSessionTelemetryManager createWorldSessionManager(boolean p_286373_, Duration p_286752_, String p_286568_)
```

**Parameters:**

- `p_286373_` (`boolean`)
- `p_286752_` (`Duration`)
- `p_286568_` (`String`)

**Returns:** `public WorldSessionTelemetryManager`

### getOutsideSessionSender

```java
public TelemetryEventSender getOutsideSessionSender()
```

**Returns:** `public TelemetryEventSender`

### createEventSender

```java
private TelemetryEventSender createEventSender()
```

**Returns:** `private TelemetryEventSender`

### getLogDirectory

```java
public Path getLogDirectory()
```

**Returns:** `public Path`

### close

```java
public void close()
```
