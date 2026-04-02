# MetricsRegistry

**Package:** `net.minecraft.util.profiling.metrics`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `MetricsRegistry` |  |

## Methods

### MetricsRegistry

```java
private MetricsRegistry()
```

**Returns:** `private`

### add

```java
public void add(ProfilerMeasured p_146073_)
```

**Parameters:**

- `p_146073_` (`ProfilerMeasured`)

**Returns:** `public void`

### getRegisteredSamplers

```java
public List<MetricSampler> getRegisteredSamplers()
```

**Returns:** `public List<MetricSampler>`

### aggregateDuplicates

```java
return aggregateDuplicates()
```

**Returns:** `return`

### aggregateDuplicates

```java
private static List<MetricSampler> aggregateDuplicates(Map<String, List<MetricSampler>> p_146077_)
```

**Parameters:**

- `p_146077_` (`Map<String, List<MetricSampler>>`)

**Returns:** `private static List<MetricSampler>`

### AggregatedMetricSampler

```java
 AggregatedMetricSampler(String p_146082_, List<MetricSampler> p_146083_)
```

**Parameters:**

- `p_146082_` (`String`)
- `p_146083_` (`List<MetricSampler>`)

**Returns:** ``

### thresholdTest

```java
private static MetricSampler.ThresholdTest thresholdTest(List<MetricSampler> p_146088_)
```

**Parameters:**

- `p_146088_` (`List<MetricSampler>`)

**Returns:** `private static MetricSampler.ThresholdTest`

### beforeTick

```java
private static void beforeTick(List<MetricSampler> p_146093_)
```

**Parameters:**

- `p_146093_` (`List<MetricSampler>`)

**Returns:** `private static void`

### averageValueFromDelegates

```java
private static double averageValueFromDelegates(List<MetricSampler> p_146095_)
```

**Parameters:**

- `p_146095_` (`List<MetricSampler>`)

**Returns:** `private static double`

### equals

```java
public boolean equals(Object p_146101_)
```

**Parameters:**

- `p_146101_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`
