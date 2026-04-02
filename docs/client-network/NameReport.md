# NameReport

**Package:** `net.minecraft.client.multiplayer.chat.report`
**Type:** class
**Extends:** `Report`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### NameReport

```java
 NameReport(UUID p_299985_, Instant p_299857_, UUID p_299900_, String p_300040_)
```

**Parameters:**

- `p_299985_` (`UUID`)
- `p_299857_` (`Instant`)
- `p_299900_` (`UUID`)
- `p_300040_` (`String`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getReportedName

```java
public String getReportedName()
```

**Returns:** `public String`

### copy

```java
public NameReport copy()
```

**Returns:** `public NameReport`

### createScreen

```java
public Screen createScreen(Screen p_299843_, ReportingContext p_299844_)
```

**Parameters:**

- `p_299843_` (`Screen`)
- `p_299844_` (`ReportingContext`)

**Returns:** `Screen`

### NameReportScreen

```java
return new NameReportScreen()
```

**Returns:** `return new`

### Builder

```java
public Builder(NameReport p_299841_, AbuseReportLimits p_299879_)
```

**Parameters:**

- `p_299841_` (`NameReport`)
- `p_299879_` (`AbuseReportLimits`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### Builder

```java
public Builder(UUID p_299951_, String p_299988_, AbuseReportLimits p_299993_)
```

**Parameters:**

- `p_299951_` (`UUID`)
- `p_299988_` (`String`)
- `p_299993_` (`AbuseReportLimits`)

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
public Either<Report.Result, Report.CannotBuildReason> build(ReportingContext p_299891_)
```

**Parameters:**

- `p_299891_` (`ReportingContext`)

**Returns:** `Either<Report.Result, Report.CannotBuildReason>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
