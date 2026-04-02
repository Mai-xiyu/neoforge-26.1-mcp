# CrashReportExtender

**Package:** `net.neoforged.neoforge.logging`
**Type:** class

## Methods

### extendSystemReport

```java
public static void extendSystemReport(SystemReport systemReport)
```

**Parameters:**

- `systemReport` (`SystemReport`)

**Returns:** `public static void`

### addCrashReportHeader

```java
public static void addCrashReportHeader(StringBuilder stringbuilder, CrashReport crashReport)
```

**Parameters:**

- `stringbuilder` (`StringBuilder`)
- `crashReport` (`CrashReport`)

**Returns:** `public static void`

### generateEnhancedStackTrace

```java
public static String generateEnhancedStackTrace(Throwable throwable)
```

**Parameters:**

- `throwable` (`Throwable`)

**Returns:** `public static String`

### generateEnhancedStackTrace

```java
return generateEnhancedStackTrace()
```

**Returns:** `return`

### generateEnhancedStackTrace

```java
public static String generateEnhancedStackTrace(StackTraceElement[] stacktrace)
```

**Parameters:**

- `stacktrace` (`StackTraceElement[]`)

**Returns:** `public static String`

### generateEnhancedStackTrace

```java
return generateEnhancedStackTrace()
```

**Returns:** `return`

### generateEnhancedStackTrace

```java
public static String generateEnhancedStackTrace(Throwable throwable, boolean header)
```

**Parameters:**

- `throwable` (`Throwable`)
- `header` (`boolean`)

**Returns:** `public static String`

### dumpModLoadingCrashReport

```java
public static File dumpModLoadingCrashReport(Logger logger, List<ModLoadingIssue> issues, File topLevelDir)
```

**Parameters:**

- `logger` (`Logger`)
- `issues` (`List<ModLoadingIssue>`)
- `topLevelDir` (`File`)

**Returns:** `public static File`

### ModLoadingCrashException

```java
public ModLoadingCrashException(String message)
```

**Parameters:**

- `message` (`String`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### fillInStackTrace

```java
public synchronized Throwable fillInStackTrace()
```

**Returns:** `Throwable`
