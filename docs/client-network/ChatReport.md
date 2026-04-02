# ChatReport

**Package:** `net.minecraft.client.multiplayer.chat.report`
**Type:** class
**Extends:** `Report`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ChatReport

```java
 ChatReport(UUID p_300023_, Instant p_299922_, UUID p_299952_)
```

**Parameters:**

- `p_300023_` (`UUID`)
- `p_299922_` (`Instant`)
- `p_299952_` (`UUID`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### toggleReported

```java
public void toggleReported(int p_299907_, AbuseReportLimits p_299997_)
```

**Parameters:**

- `p_299907_` (`int`)
- `p_299997_` (`AbuseReportLimits`)

**Returns:** `public void`

### copy

```java
public ChatReport copy()
```

**Returns:** `public ChatReport`

### createScreen

```java
public Screen createScreen(Screen p_300022_, ReportingContext p_299859_)
```

**Parameters:**

- `p_300022_` (`Screen`)
- `p_299859_` (`ReportingContext`)

**Returns:** `Screen`

### ChatReportScreen

```java
return new ChatReportScreen()
```

**Returns:** `return new`

### Builder

```java
public Builder(ChatReport p_299929_, AbuseReportLimits p_299930_)
```

**Parameters:**

- `p_299929_` (`ChatReport`)
- `p_299930_` (`AbuseReportLimits`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### Builder

```java
public Builder(UUID p_299973_, AbuseReportLimits p_299942_)
```

**Parameters:**

- `p_299973_` (`UUID`)
- `p_299942_` (`AbuseReportLimits`)

**Returns:** `public`

### reportedMessages

```java
public IntSet reportedMessages()
```

**Returns:** `public IntSet`

### toggleReported

```java
public void toggleReported(int p_299851_)
```

**Parameters:**

- `p_299851_` (`int`)

**Returns:** `public void`

### isReported

```java
public boolean isReported(int p_299830_)
```

**Parameters:**

- `p_299830_` (`int`)

**Returns:** `public boolean`

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
public Either<Report.Result, Report.CannotBuildReason> build(ReportingContext p_299928_)
```

**Parameters:**

- `p_299928_` (`ReportingContext`)

**Returns:** `Either<Report.Result, Report.CannotBuildReason>`

### buildEvidence

```java
private ReportEvidence buildEvidence(ReportingContext p_299855_)
```

**Parameters:**

- `p_299855_` (`ReportingContext`)

**Returns:** `private ReportEvidence`

### buildReportedChatMessage

```java
private ReportChatMessage buildReportedChatMessage(LoggedChatMessage.Player p_299916_, boolean p_299962_)
```

**Parameters:**

- `p_299916_` (`LoggedChatMessage.Player`)
- `p_299962_` (`boolean`)

**Returns:** `private ReportChatMessage`

### copy

```java
public ChatReport.Builder copy()
```

**Returns:** `public ChatReport.Builder`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
