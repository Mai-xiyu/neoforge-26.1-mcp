# ServerMetricsSamplersProvider

**Package:** `net.minecraft.util.profiling.metrics.profiling`
**Type:** class
**Implements:** `MetricsSamplerProvider`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `nrOfCpus` | `int` |  |

## Methods

### ServerMetricsSamplersProvider

```java
public ServerMetricsSamplersProvider(LongSupplier p_146180_, boolean p_146181_)
```

**Parameters:**

- `p_146180_` (`LongSupplier`)
- `p_146181_` (`boolean`)

**Returns:** `public`

### runtimeIndependentSamplers

```java
public static Set<MetricSampler> runtimeIndependentSamplers()
```

**Returns:** `public static Set<MetricSampler>`

### samplers

```java
public Set<MetricSampler> samplers(Supplier<ProfileCollector> p_146191_)
```

**Parameters:**

- `p_146191_` (`Supplier<ProfileCollector>`)

**Returns:** `Set<MetricSampler>`

### tickTimeSampler

```java
public static MetricSampler tickTimeSampler(LongSupplier p_146189_)
```

**Parameters:**

- `p_146189_` (`LongSupplier`)

**Returns:** `public static MetricSampler`

### read

```java
public long read()
```

**Returns:** `long`

### loadForCpu

```java
public double loadForCpu(int p_146208_)
```

**Parameters:**

- `p_146208_` (`int`)

**Returns:** `public double`
