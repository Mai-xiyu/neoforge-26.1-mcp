# ResourceLoadStateTracker

**Package:** `net.minecraft.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### startReload

```java
public void startReload(ResourceLoadStateTracker.ReloadReason p_168558_, List<PackResources> p_168559_)
```

**Parameters:**

- `p_168558_` (`ResourceLoadStateTracker.ReloadReason`)
- `p_168559_` (`List<PackResources>`)

**Returns:** `public void`

### startRecovery

```java
public void startRecovery(Throwable p_168561_)
```

**Parameters:**

- `p_168561_` (`Throwable`)

**Returns:** `public void`

### finishReload

```java
public void finishReload()
```

**Returns:** `public void`

### fillCrashReport

```java
public void fillCrashReport(CrashReport p_168563_)
```

**Parameters:**

- `p_168563_` (`CrashReport`)

**Returns:** `public void`

### RecoveryInfo

```java
 RecoveryInfo(Throwable p_168566_)
```

**Parameters:**

- `p_168566_` (`Throwable`)

**Returns:** ``

### fillCrashInfo

```java
public void fillCrashInfo(CrashReportCategory p_168569_)
```

**Parameters:**

- `p_168569_` (`CrashReportCategory`)

**Returns:** `public void`

### UNKNOWN

```java
, UNKNOWN()
```

**Returns:** `,`

### ReloadReason

```java
private ReloadReason(String p_168579_)
```

**Parameters:**

- `p_168579_` (`String`)

**Returns:** `private`

### ReloadState

```java
 ReloadState(ResourceLoadStateTracker.ReloadReason p_168589_, List<String> p_168590_)
```

**Parameters:**

- `p_168589_` (`ResourceLoadStateTracker.ReloadReason`)
- `p_168590_` (`List<String>`)

**Returns:** ``

### fillCrashInfo

```java
public void fillCrashInfo(CrashReportCategory p_168593_)
```

**Parameters:**

- `p_168593_` (`CrashReportCategory`)

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ReloadReason` | enum |  |
