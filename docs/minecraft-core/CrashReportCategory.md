# CrashReportCategory

**Package:** `net.minecraft`
**Type:** class

## Methods

### CrashReportCategory

```java
public CrashReportCategory(String p_178936_)
```

**Parameters:**

- `p_178936_` (`String`)

**Returns:** `public`

### formatLocation

```java
public static String formatLocation(LevelHeightAccessor p_178938_, double p_178939_, double p_178940_, double p_178941_)
```

**Parameters:**

- `p_178938_` (`LevelHeightAccessor`)
- `p_178939_` (`double`)
- `p_178940_` (`double`)
- `p_178941_` (`double`)

**Returns:** `public static String`

### formatLocation

```java
public static String formatLocation(LevelHeightAccessor p_178948_, BlockPos p_178949_)
```

**Parameters:**

- `p_178948_` (`LevelHeightAccessor`)
- `p_178949_` (`BlockPos`)

**Returns:** `public static String`

### formatLocation

```java
public static String formatLocation(LevelHeightAccessor p_178943_, int p_178944_, int p_178945_, int p_178946_)
```

**Parameters:**

- `p_178943_` (`LevelHeightAccessor`)
- `p_178944_` (`int`)
- `p_178945_` (`int`)
- `p_178946_` (`int`)

**Returns:** `public static String`

### setDetail

```java
public CrashReportCategory setDetail(String p_128166_, CrashReportDetail<String> p_128167_)
```

**Parameters:**

- `p_128166_` (`String`)
- `p_128167_` (`CrashReportDetail<String>`)

**Returns:** `public CrashReportCategory`

### setDetail

```java
public CrashReportCategory setDetail(String p_128160_, Object p_128161_)
```

**Parameters:**

- `p_128160_` (`String`)
- `p_128161_` (`Object`)

**Returns:** `public CrashReportCategory`

### setDetailError

```java
public void setDetailError(String p_128163_, Throwable p_128164_)
```

**Parameters:**

- `p_128163_` (`String`)
- `p_128164_` (`Throwable`)

**Returns:** `public void`

### fillInStackTrace

```java
public int fillInStackTrace(int p_128149_)
```

**Parameters:**

- `p_128149_` (`int`)

**Returns:** `public int`

### validateStackTrace

```java
public boolean validateStackTrace(StackTraceElement p_128157_, StackTraceElement p_128158_)
```

**Parameters:**

- `p_128157_` (`StackTraceElement`)
- `p_128158_` (`StackTraceElement`)

**Returns:** `public boolean`

### trimStacktrace

```java
public void trimStacktrace(int p_128175_)
```

**Parameters:**

- `p_128175_` (`int`)

**Returns:** `public void`

### getDetails

```java
public void getDetails(StringBuilder p_128169_)
```

**Parameters:**

- `p_128169_` (`StringBuilder`)

**Returns:** `public void`

### getStacktrace

```java
public StackTraceElement[] getStacktrace()
```

**Returns:** `public StackTraceElement[]`

### applyStackTrace

```java
public void applyStackTrace(Throwable t)
```

**Parameters:**

- `t` (`Throwable`)

### setStackTrace

```java
public void setStackTrace(StackTraceElement[] stackTrace)
```

**Parameters:**

- `stackTrace` (`StackTraceElement[]`)

**Returns:** `public void`

### populateBlockDetails

```java
public static void populateBlockDetails(CrashReportCategory p_178951_, LevelHeightAccessor p_178952_, BlockPos p_178953_, BlockState p_178954_)
```

**Parameters:**

- `p_178951_` (`CrashReportCategory`)
- `p_178952_` (`LevelHeightAccessor`)
- `p_178953_` (`BlockPos`)
- `p_178954_` (`BlockState`)

**Returns:** `public static void`

### Entry

```java
public Entry(String p_128181_, Object p_128182_)
```

**Parameters:**

- `p_128181_` (`String`)
- `p_128182_` (`Object`)

**Returns:** `public`

### getKey

```java
public String getKey()
```

**Returns:** `public String`

### getValue

```java
public String getValue()
```

**Returns:** `public String`
