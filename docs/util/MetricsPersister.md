# MetricsPersister

**Package:** `net.minecraft.util.profiling.metrics.storage`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PROFILING_RESULTS_DIR` | `Path` |  |
| `METRICS_DIR_NAME` | `String` |  |
| `DEVIATIONS_DIR_NAME` | `String` |  |
| `PROFILING_RESULT_FILENAME` | `String` |  |

## Methods

### MetricsPersister

```java
public MetricsPersister(String p_146217_)
```

**Parameters:**

- `p_146217_` (`String`)

**Returns:** `public`

### saveReports

```java
public Path saveReports(Set<MetricSampler> p_146251_, Map<MetricSampler, List<RecordedDeviation>> p_146252_, ProfileResults p_146253_)
```

**Parameters:**

- `p_146251_` (`Set<MetricSampler>`)
- `p_146252_` (`Map<MetricSampler, List<RecordedDeviation>>`)
- `p_146253_` (`ProfileResults`)

**Returns:** `public Path`

### UncheckedIOException

```java
throw new UncheckedIOException()
```

**Returns:** `throw new`

### UncheckedIOException

```java
throw new UncheckedIOException()
```

**Returns:** `throw new`

### saveMetrics

```java
private void saveMetrics(Set<MetricSampler> p_146248_, Path p_146249_)
```

**Parameters:**

- `p_146248_` (`Set<MetricSampler>`)
- `p_146249_` (`Path`)

**Returns:** `private void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Expected at least one sampler to persist")
```

**Parameters:**

- `persist"` (`"Expected at least one sampler to`)

**Returns:** `throw new`

### saveCategory

```java
private void saveCategory(MetricCategory p_146227_, List<MetricSampler> p_146228_, Path p_146229_)
```

**Parameters:**

- `p_146227_` (`MetricCategory`)
- `p_146228_` (`List<MetricSampler>`)
- `p_146229_` (`Path`)

**Returns:** `private void`

### saveDeviations

```java
private void saveDeviations(Map<MetricSampler, List<RecordedDeviation>> p_146245_, Path p_146246_)
```

**Parameters:**

- `p_146245_` (`Map<MetricSampler, List<RecordedDeviation>>`)
- `p_146246_` (`Path`)

**Returns:** `private void`

### saveProfilingTaskExecutionResult

```java
private void saveProfilingTaskExecutionResult(ProfileResults p_146224_, Path p_146225_)
```

**Parameters:**

- `p_146224_` (`ProfileResults`)
- `p_146225_` (`Path`)

**Returns:** `private void`
