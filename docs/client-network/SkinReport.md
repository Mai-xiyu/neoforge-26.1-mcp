# SkinReport

**Package:** `net.minecraft.client.multiplayer.chat.report`
**Type:** class
**Extends:** `Report`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SkinReport

```java
 SkinReport(UUID p_299908_, Instant p_299882_, UUID p_299986_, Supplier<PlayerSkin> p_299871_)
```

**Parameters:**

- `p_299908_` (`UUID`)
- `p_299882_` (`Instant`)
- `p_299986_` (`UUID`)
- `p_299871_` (`Supplier<PlayerSkin>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getSkinGetter

```java
public Supplier<PlayerSkin> getSkinGetter()
```

**Returns:** `public Supplier<PlayerSkin>`

### copy

```java
public SkinReport copy()
```

**Returns:** `public SkinReport`

### createScreen

```java
public Screen createScreen(Screen p_299975_, ReportingContext p_299961_)
```

**Parameters:**

- `p_299975_` (`Screen`)
- `p_299961_` (`ReportingContext`)

**Returns:** `Screen`

### SkinReportScreen

```java
return new SkinReportScreen()
```

**Returns:** `return new`

### Builder

```java
public Builder(SkinReport p_299828_, AbuseReportLimits p_299881_)
```

**Parameters:**

- `p_299828_` (`SkinReport`)
- `p_299881_` (`AbuseReportLimits`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### Builder

```java
public Builder(UUID p_299890_, Supplier<PlayerSkin> p_299967_, AbuseReportLimits p_300039_)
```

**Parameters:**

- `p_299890_` (`UUID`)
- `p_299967_` (`Supplier<PlayerSkin>`)
- `p_300039_` (`AbuseReportLimits`)

**Returns:** `public`

### hasContent

```java
public boolean hasContent()
```

**Returns:** `boolean`

### checkBuildable

```java
public Report.CannotBuildReason checkBuildable()
```

**Returns:** `Report.CannotBuildReason`

### build

```java
public Either<Report.Result, Report.CannotBuildReason> build(ReportingContext p_299847_)
```

**Parameters:**

- `p_299847_` (`ReportingContext`)

**Returns:** `Either<Report.Result, Report.CannotBuildReason>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
