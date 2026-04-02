# ProfileResults

**Package:** `net.minecraft.util.profiling`
**Type:** interface

## Methods

### getTimes

```java
List<ResultField> getTimes(String p_18574_)
```

**Parameters:**

- `p_18574_` (`String`)

**Returns:** `List<ResultField>`

### saveResults

```java
boolean saveResults(Path p_145957_)
```

**Parameters:**

- `p_145957_` (`Path`)

**Returns:** `boolean`

### getStartTimeNano

```java
long getStartTimeNano()
```

**Returns:** `long`

### getStartTimeTicks

```java
int getStartTimeTicks()
```

**Returns:** `int`

### getEndTimeNano

```java
long getEndTimeNano()
```

**Returns:** `long`

### getEndTimeTicks

```java
int getEndTimeTicks()
```

**Returns:** `int`

### getNanoDuration

```java
default long getNanoDuration()
```

**Returns:** `default long`

### getTickDuration

```java
default int getTickDuration()
```

**Returns:** `default int`

### getProfilerResults

```java
String getProfilerResults()
```

**Returns:** `String`

### demanglePath

```java
static String demanglePath(String p_18576_)
```

**Parameters:**

- `p_18576_` (`String`)

**Returns:** `static String`
