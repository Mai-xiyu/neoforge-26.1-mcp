# ActiveProfiler

**Package:** `net.minecraft.util.profiling`
**Type:** class
**Implements:** `ProfileCollector`

## Methods

### ActiveProfiler

```java
public ActiveProfiler(LongSupplier p_18383_, IntSupplier p_18384_, boolean p_18385_)
```

**Parameters:**

- `p_18383_` (`LongSupplier`)
- `p_18384_` (`IntSupplier`)
- `p_18385_` (`boolean`)

**Returns:** `public`

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
public void push(String p_18390_)
```

**Parameters:**

- `p_18390_` (`String`)

### push

```java
public void push(Supplier<String> p_18392_)
```

**Parameters:**

- `p_18392_` (`Supplier<String>`)

### markForCharting

```java
public void markForCharting(MetricCategory p_145928_)
```

**Parameters:**

- `p_145928_` (`MetricCategory`)

### pop

```java
public void pop()
```

### popPush

```java
public void popPush(String p_18395_)
```

**Parameters:**

- `p_18395_` (`String`)

### popPush

```java
public void popPush(Supplier<String> p_18397_)
```

**Parameters:**

- `p_18397_` (`Supplier<String>`)

### getCurrentEntry

```java
private ActiveProfiler.PathEntry getCurrentEntry()
```

**Returns:** `private ActiveProfiler.PathEntry`

### incrementCounter

```java
public void incrementCounter(String p_185247_, int p_185248_)
```

**Parameters:**

- `p_185247_` (`String`)
- `p_185248_` (`int`)

### incrementCounter

```java
public void incrementCounter(Supplier<String> p_185250_, int p_185251_)
```

**Parameters:**

- `p_185250_` (`Supplier<String>`)
- `p_185251_` (`int`)

### getResults

```java
public ProfileResults getResults()
```

**Returns:** `ProfileResults`

### getEntry

```java
public ActiveProfiler.PathEntry getEntry(String p_145930_)
```

**Parameters:**

- `p_145930_` (`String`)

**Returns:** `ActiveProfiler.PathEntry`

### getChartedPaths

```java
public Set<Pair<String, MetricCategory>> getChartedPaths()
```

**Returns:** `Set<Pair<String, MetricCategory>>`

### getDuration

```java
public long getDuration()
```

**Returns:** `long`

### getMaxDuration

```java
public long getMaxDuration()
```

**Returns:** `long`

### getCount

```java
public long getCount()
```

**Returns:** `long`

### getCounters

```java
public Object2LongMap<String> getCounters()
```

**Returns:** `Object2LongMap<String>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PathEntry` | class |  |
