# ActiveMetricsRecorder

**Package:** `net.minecraft.util.profiling.metrics.profiling`
**Type:** class
**Implements:** `MetricsRecorder`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PROFILING_MAX_DURATION_SECONDS` | `int` |  |

## Methods

### ActiveMetricsRecorder

```java
private ActiveMetricsRecorder(MetricsSamplerProvider p_146121_, LongSupplier p_146122_, Executor p_146123_, MetricsPersister p_146124_, Consumer<ProfileResults> p_146125_, Consumer<Path> p_146126_)
```

**Parameters:**

- `p_146121_` (`MetricsSamplerProvider`)
- `p_146122_` (`LongSupplier`)
- `p_146123_` (`Executor`)
- `p_146124_` (`MetricsPersister`)
- `p_146125_` (`Consumer<ProfileResults>`)
- `p_146126_` (`Consumer<Path>`)

**Returns:** `private`

### createStarted

```java
public static ActiveMetricsRecorder createStarted(MetricsSamplerProvider p_146133_, LongSupplier p_146134_, Executor p_146135_, MetricsPersister p_146136_, Consumer<ProfileResults> p_146137_, Consumer<Path> p_146138_)
```

**Parameters:**

- `p_146133_` (`MetricsSamplerProvider`)
- `p_146134_` (`LongSupplier`)
- `p_146135_` (`Executor`)
- `p_146136_` (`MetricsPersister`)
- `p_146137_` (`Consumer<ProfileResults>`)
- `p_146138_` (`Consumer<Path>`)

**Returns:** `public static ActiveMetricsRecorder`

### ActiveMetricsRecorder

```java
return new ActiveMetricsRecorder()
```

**Returns:** `return new`

### end

```java
public synchronized void end()
```

### cancel

```java
public synchronized void cancel()
```

### startTick

```java
public void startTick()
```

### endTick

```java
public void endTick()
```

### isRecording

```java
public boolean isRecording()
```

**Returns:** `boolean`

### getProfiler

```java
public ProfilerFiller getProfiler()
```

**Returns:** `ProfilerFiller`

### verifyStarted

```java
private void verifyStarted()
```

**Returns:** `private void`

### IllegalStateException

```java
throw new IllegalStateException("Not started!")
```

**Parameters:**

- `started!"` (`"Not`)

**Returns:** `throw new`

### scheduleSaveResults

```java
private void scheduleSaveResults(ProfileResults p_146129_)
```

**Parameters:**

- `p_146129_` (`ProfileResults`)

**Returns:** `private void`

### cleanup

```java
private void cleanup(Collection<MetricSampler> p_216817_)
```

**Parameters:**

- `p_216817_` (`Collection<MetricSampler>`)

**Returns:** `private void`

### registerGlobalCompletionCallback

```java
public static void registerGlobalCompletionCallback(Consumer<Path> p_146143_)
```

**Parameters:**

- `p_146143_` (`Consumer<Path>`)

**Returns:** `public static void`
