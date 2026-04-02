# CrashReport

**Package:** `net.minecraft`
**Type:** class

## Methods

### CrashReport

```java
public CrashReport(String p_127509_, Throwable p_127510_)
```

**Parameters:**

- `p_127509_` (`String`)
- `p_127510_` (`Throwable`)

**Returns:** `public`

### getTitle

```java
public String getTitle()
```

**Returns:** `public String`

### getException

```java
public Throwable getException()
```

**Returns:** `public Throwable`

### getDetails

```java
public String getDetails()
```

**Returns:** `public String`

### getDetails

```java
public void getDetails(StringBuilder p_127520_)
```

**Parameters:**

- `p_127520_` (`StringBuilder`)

**Returns:** `public void`

### getExceptionMessage

```java
public String getExceptionMessage()
```

**Returns:** `public String`

### getFriendlyReport

```java
public String getFriendlyReport(ReportType p_350860_, List<String> p_350563_)
```

**Parameters:**

- `p_350860_` (`ReportType`)
- `p_350563_` (`List<String>`)

**Returns:** `public String`

### getFriendlyReport

```java
public String getFriendlyReport(ReportType p_351019_)
```

**Parameters:**

- `p_351019_` (`ReportType`)

**Returns:** `public String`

### getSaveFile

```java
public Path getSaveFile()
```

**Returns:** `Path`

### saveToFile

```java
public boolean saveToFile(Path p_350440_, ReportType p_350597_, List<String> p_350675_)
```

**Parameters:**

- `p_350440_` (`Path`)
- `p_350597_` (`ReportType`)
- `p_350675_` (`List<String>`)

**Returns:** `public boolean`

### saveToFile

```java
public boolean saveToFile(Path p_350691_, ReportType p_350920_)
```

**Parameters:**

- `p_350691_` (`Path`)
- `p_350920_` (`ReportType`)

**Returns:** `public boolean`

### getSystemReport

```java
public SystemReport getSystemReport()
```

**Returns:** `public SystemReport`

### addCategory

```java
public CrashReportCategory addCategory(String p_127515_)
```

**Parameters:**

- `p_127515_` (`String`)

**Returns:** `public CrashReportCategory`

### addCategory

```java
public CrashReportCategory addCategory(String p_127517_, int p_127518_)
```

**Parameters:**

- `p_127517_` (`String`)
- `p_127518_` (`int`)

**Returns:** `public CrashReportCategory`

### forThrowable

```java
public static CrashReport forThrowable(Throwable p_127522_, String p_127523_)
```

**Parameters:**

- `p_127522_` (`Throwable`)
- `p_127523_` (`String`)

**Returns:** `public static CrashReport`

### preload

```java
public static void preload()
```

**Returns:** `public static void`
