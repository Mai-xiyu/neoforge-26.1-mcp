# EmptyProfileResults

**Package:** `net.minecraft.util.profiling`
**Type:** class
**Implements:** `ProfileResults`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `EmptyProfileResults` |  |

## Methods

### EmptyProfileResults

```java
private EmptyProfileResults()
```

**Returns:** `private`

### getTimes

```java
public List<ResultField> getTimes(String p_18448_)
```

**Parameters:**

- `p_18448_` (`String`)

**Returns:** `List<ResultField>`

### saveResults

```java
public boolean saveResults(Path p_145937_)
```

**Parameters:**

- `p_145937_` (`Path`)

**Returns:** `boolean`

### getStartTimeNano

```java
public long getStartTimeNano()
```

**Returns:** `long`

### getStartTimeTicks

```java
public int getStartTimeTicks()
```

**Returns:** `int`

### getEndTimeNano

```java
public long getEndTimeNano()
```

**Returns:** `long`

### getEndTimeTicks

```java
public int getEndTimeTicks()
```

**Returns:** `int`

### getProfilerResults

```java
public String getProfilerResults()
```

**Returns:** `String`
