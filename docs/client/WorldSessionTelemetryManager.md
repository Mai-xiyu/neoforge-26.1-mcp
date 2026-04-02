# WorldSessionTelemetryManager

**Package:** `net.minecraft.client.telemetry`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### WorldSessionTelemetryManager

```java
public WorldSessionTelemetryManager(TelemetryEventSender p_286529_, boolean p_286429_, Duration p_286727_, String p_286633_)
```

**Parameters:**

- `p_286529_` (`TelemetryEventSender`)
- `p_286429_` (`boolean`)
- `p_286727_` (`Duration`)
- `p_286633_` (`String`)

**Returns:** `public`

### tick

```java
public void tick()
```

**Returns:** `public void`

### onPlayerInfoReceived

```java
public void onPlayerInfoReceived(GameType p_261768_, boolean p_261669_)
```

**Parameters:**

- `p_261768_` (`GameType`)
- `p_261669_` (`boolean`)

**Returns:** `public void`

### onServerBrandReceived

```java
public void onServerBrandReceived(String p_261520_)
```

**Parameters:**

- `p_261520_` (`String`)

**Returns:** `public void`

### setTime

```java
public void setTime(long p_261878_)
```

**Parameters:**

- `p_261878_` (`long`)

**Returns:** `public void`

### worldSessionStart

```java
public void worldSessionStart()
```

**Returns:** `public void`

### onDisconnect

```java
public void onDisconnect()
```

**Returns:** `public void`

### onAdvancementDone

```java
public void onAdvancementDone(Level p_286825_, AdvancementHolder p_301169_)
```

**Parameters:**

- `p_286825_` (`Level`)
- `p_301169_` (`AdvancementHolder`)

**Returns:** `public void`
