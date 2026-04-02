# SystemReport

**Package:** `net.minecraft`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BYTES_PER_MEBIBYTE` | `long` |  |

## Methods

### SystemReport

```java
public SystemReport()
```

**Returns:** `public`

### setDetail

```java
public void setDetail(String p_143520_, String p_143521_)
```

**Parameters:**

- `p_143520_` (`String`)
- `p_143521_` (`String`)

**Returns:** `public void`

### setDetail

```java
public void setDetail(String p_143523_, Supplier<String> p_143524_)
```

**Parameters:**

- `p_143523_` (`String`)
- `p_143524_` (`Supplier<String>`)

**Returns:** `public void`

### putHardware

```java
private void putHardware(SystemInfo p_143536_)
```

**Parameters:**

- `p_143536_` (`SystemInfo`)

**Returns:** `private void`

### ignoreErrors

```java
private void ignoreErrors(String p_143517_, Runnable p_143518_)
```

**Parameters:**

- `p_143517_` (`String`)
- `p_143518_` (`Runnable`)

**Returns:** `private void`

### sizeInMiB

```java
public static float sizeInMiB(long p_345366_)
```

**Parameters:**

- `p_345366_` (`long`)

**Returns:** `public static float`

### putPhysicalMemory

```java
private void putPhysicalMemory(List<PhysicalMemory> p_143532_)
```

**Parameters:**

- `p_143532_` (`List<PhysicalMemory>`)

**Returns:** `private void`

### putVirtualMemory

```java
private void putVirtualMemory(VirtualMemory p_143550_)
```

**Parameters:**

- `p_143550_` (`VirtualMemory`)

**Returns:** `private void`

### putMemory

```java
private void putMemory(GlobalMemory p_143542_)
```

**Parameters:**

- `p_143542_` (`GlobalMemory`)

**Returns:** `private void`

### putGraphics

```java
private void putGraphics(List<GraphicsCard> p_143553_)
```

**Parameters:**

- `p_143553_` (`List<GraphicsCard>`)

**Returns:** `private void`

### putProcessor

```java
private void putProcessor(CentralProcessor p_143540_)
```

**Parameters:**

- `p_143540_` (`CentralProcessor`)

**Returns:** `private void`

### putStorage

```java
private void putStorage()
```

**Returns:** `private void`

### putSpaceForProperty

```java
private void putSpaceForProperty(String p_345533_)
```

**Parameters:**

- `p_345533_` (`String`)

**Returns:** `private void`

### putSpaceForPath

```java
private void putSpaceForPath(String p_344883_, Supplier<String> p_345715_)
```

**Parameters:**

- `p_344883_` (`String`)
- `p_345715_` (`Supplier<String>`)

**Returns:** `private void`

### appendToCrashReportString

```java
public void appendToCrashReportString(StringBuilder p_143526_)
```

**Parameters:**

- `p_143526_` (`StringBuilder`)

**Returns:** `public void`

### toLineSeparatedString

```java
public String toLineSeparatedString()
```

**Returns:** `public String`
