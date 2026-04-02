# WorldLoadEvent

**Package:** `net.minecraft.client.telemetry.events`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### WorldLoadEvent

```java
public WorldLoadEvent(String p_286661_)
```

**Parameters:**

- `p_286661_` (`String`)

**Returns:** `public`

### addProperties

```java
public void addProperties(TelemetryPropertyMap.Builder p_261869_)
```

**Parameters:**

- `p_261869_` (`TelemetryPropertyMap.Builder`)

**Returns:** `public void`

### getServerType

```java
private TelemetryProperty.ServerType getServerType()
```

**Returns:** `private TelemetryProperty.ServerType`

### send

```java
public boolean send(TelemetryEventSender p_263325_)
```

**Parameters:**

- `p_263325_` (`TelemetryEventSender`)

**Returns:** `public boolean`

### setGameMode

```java
public void setGameMode(GameType p_261852_, boolean p_261831_)
```

**Parameters:**

- `p_261852_` (`GameType`)
- `p_261831_` (`boolean`)

**Returns:** `public void`

### setServerBrand

```java
public void setServerBrand(String p_261964_)
```

**Parameters:**

- `p_261964_` (`String`)

**Returns:** `public void`
