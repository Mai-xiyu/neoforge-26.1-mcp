# ProfileCollector

**Package:** `net.minecraft.util.profiling`
**Type:** interface
**Extends:** `ProfilerFiller`

## Methods

### getResults

```java
ProfileResults getResults()
```

**Returns:** `ProfileResults`

### getEntry

```java
ActiveProfiler.PathEntry getEntry(String p_145955_)
```

**Parameters:**

- `p_145955_` (`String`)

**Returns:** `ActiveProfiler.PathEntry`

### getChartedPaths

```java
Set<Pair<String, MetricCategory>> getChartedPaths()
```

**Returns:** `Set<Pair<String, MetricCategory>>`
