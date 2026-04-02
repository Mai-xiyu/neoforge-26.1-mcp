# AbuseReportSender

**Package:** `net.minecraft.client.multiplayer.chat.report`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### create

```java
static AbuseReportSender create(ReportEnvironment p_239536_, UserApiService p_239537_)
```

**Parameters:**

- `p_239536_` (`ReportEnvironment`)
- `p_239537_` (`UserApiService`)

**Returns:** `static AbuseReportSender`

### send

```java
CompletableFuture<Unit> send(UUID p_239838_, ReportType p_300001_, AbuseReport p_239839_)
```

**Parameters:**

- `p_239838_` (`UUID`)
- `p_300001_` (`ReportType`)
- `p_239839_` (`AbuseReport`)

**Returns:** `CompletableFuture<Unit>`

### isEnabled

```java
boolean isEnabled()
```

**Returns:** `boolean`

### reportLimits

```java
default AbuseReportLimits reportLimits()
```

**Returns:** `default AbuseReportLimits`

### SendException

```java
public SendException(Component p_239646_, Throwable p_239647_)
```

**Parameters:**

- `p_239646_` (`Component`)
- `p_239647_` (`Throwable`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### send

```java
public CompletableFuture<Unit> send(UUID p_239470_, ReportType p_299858_, AbuseReport p_239471_)
```

**Parameters:**

- `p_239470_` (`UUID`)
- `p_299858_` (`ReportType`)
- `p_239471_` (`AbuseReport`)

**Returns:** `CompletableFuture<Unit>`

### isEnabled

```java
public boolean isEnabled()
```

**Returns:** `boolean`

### getHttpErrorDescription

```java
private Component getHttpErrorDescription(MinecraftClientHttpException p_239705_)
```

**Parameters:**

- `p_239705_` (`MinecraftClientHttpException`)

**Returns:** `private Component`

### getErrorDescription

```java
private Component getErrorDescription(MinecraftClientException p_240068_)
```

**Parameters:**

- `p_240068_` (`MinecraftClientException`)

**Returns:** `private Component`

### reportLimits

```java
public AbuseReportLimits reportLimits()
```

**Returns:** `AbuseReportLimits`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SendException` | class |  |
| `Services` | record |  |
