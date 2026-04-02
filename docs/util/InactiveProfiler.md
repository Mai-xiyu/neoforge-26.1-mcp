# InactiveProfiler

**Package:** `net.minecraft.util.profiling`
**Type:** class
**Implements:** `ProfileCollector`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `InactiveProfiler` |  |

## Methods

### InactiveProfiler

```java
private InactiveProfiler()
```

**Returns:** `private`

### startTick

```java
public void startTick()
```

### endTick

```java
public void endTick()
```

### push

```java
public void push(String p_18559_)
```

**Parameters:**

- `p_18559_` (`String`)

### push

```java
public void push(Supplier<String> p_18561_)
```

**Parameters:**

- `p_18561_` (`Supplier<String>`)

### markForCharting

```java
public void markForCharting(MetricCategory p_145951_)
```

**Parameters:**

- `p_145951_` (`MetricCategory`)

### pop

```java
public void pop()
```

### popPush

```java
public void popPush(String p_18564_)
```

**Parameters:**

- `p_18564_` (`String`)

### popPush

```java
public void popPush(Supplier<String> p_18566_)
```

**Parameters:**

- `p_18566_` (`Supplier<String>`)

### incrementCounter

```java
public void incrementCounter(String p_185253_, int p_185254_)
```

**Parameters:**

- `p_185253_` (`String`)
- `p_185254_` (`int`)

### incrementCounter

```java
public void incrementCounter(Supplier<String> p_185256_, int p_185257_)
```

**Parameters:**

- `p_185256_` (`Supplier<String>`)
- `p_185257_` (`int`)

### getResults

```java
public ProfileResults getResults()
```

**Returns:** `ProfileResults`

### getEntry

```java
public ActiveProfiler.PathEntry getEntry(String p_145953_)
```

**Parameters:**

- `p_145953_` (`String`)

**Returns:** `ActiveProfiler.PathEntry`

### getChartedPaths

```java
public Set<Pair<String, MetricCategory>> getChartedPaths()
```

**Returns:** `Set<Pair<String, MetricCategory>>`
