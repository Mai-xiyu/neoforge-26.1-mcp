# MetricSampler

**Package:** `net.minecraft.util.profiling.metrics`
**Type:** class

## Methods

### MetricSampler

```java
protected MetricSampler(String p_145996_, MetricCategory p_145997_, DoubleSupplier p_145998_, Runnable p_145999_, MetricSampler.ThresholdTest p_146000_)
```

**Parameters:**

- `p_145996_` (`String`)
- `p_145997_` (`MetricCategory`)
- `p_145998_` (`DoubleSupplier`)
- `p_145999_` (`Runnable`)
- `p_146000_` (`MetricSampler.ThresholdTest`)

**Returns:** `protected`

### create

```java
public static MetricSampler create(String p_146010_, MetricCategory p_146011_, DoubleSupplier p_146012_)
```

**Parameters:**

- `p_146010_` (`String`)
- `p_146011_` (`MetricCategory`)
- `p_146012_` (`DoubleSupplier`)

**Returns:** `public static MetricSampler`

### MetricSampler

```java
return new MetricSampler()
```

**Returns:** `return new`

### create

```java
<T> public static <T> MetricSampler create(String p_146005_, MetricCategory p_146006_, T p_146007_, ToDoubleFunction<T> p_146008_)
```

**Parameters:**

- `p_146005_` (`String`)
- `p_146006_` (`MetricCategory`)
- `p_146007_` (`T`)
- `p_146008_` (`ToDoubleFunction<T>`)

**Returns:** `public static <T> MetricSampler`

### builder

```java
<T> public static <T> MetricSampler.MetricSamplerBuilder<T> builder(String p_146014_, MetricCategory p_146015_, ToDoubleFunction<T> p_146016_, T p_146017_)
```

**Parameters:**

- `p_146014_` (`String`)
- `p_146015_` (`MetricCategory`)
- `p_146016_` (`ToDoubleFunction<T>`)
- `p_146017_` (`T`)

**Returns:** `public static <T> MetricSampler.MetricSamplerBuilder<T>`

### onStartTick

```java
public void onStartTick()
```

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Not running")
```

**Parameters:**

- `running"` (`"Not`)

**Returns:** `throw new`

### onEndTick

```java
public void onEndTick(int p_146003_)
```

**Parameters:**

- `p_146003_` (`int`)

**Returns:** `public void`

### onFinished

```java
public void onFinished()
```

**Returns:** `public void`

### verifyRunning

```java
private void verifyRunning()
```

**Returns:** `private void`

### getSampler

```java
DoubleSupplier getSampler()
```

**Returns:** `DoubleSupplier`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getCategory

```java
public MetricCategory getCategory()
```

**Returns:** `public MetricCategory`

### result

```java
public MetricSampler.SamplerResult result()
```

**Returns:** `public MetricSampler.SamplerResult`

### triggersThreshold

```java
public boolean triggersThreshold()
```

**Returns:** `public boolean`

### equals

```java
public boolean equals(Object p_146023_)
```

**Parameters:**

- `p_146023_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### MetricSamplerBuilder

```java
public MetricSamplerBuilder(String p_146035_, MetricCategory p_146036_, ToDoubleFunction<T> p_146037_, T p_146038_)
```

**Parameters:**

- `p_146035_` (`String`)
- `p_146036_` (`MetricCategory`)
- `p_146037_` (`ToDoubleFunction<T>`)
- `p_146038_` (`T`)

**Returns:** `public`

### withBeforeTick

```java
public MetricSampler.MetricSamplerBuilder<T> withBeforeTick(Consumer<T> p_146043_)
```

**Parameters:**

- `p_146043_` (`Consumer<T>`)

**Returns:** `public MetricSampler.MetricSamplerBuilder<T>`

### withThresholdAlert

```java
public MetricSampler.MetricSamplerBuilder<T> withThresholdAlert(MetricSampler.ThresholdTest p_146041_)
```

**Parameters:**

- `p_146041_` (`MetricSampler.ThresholdTest`)

**Returns:** `public MetricSampler.MetricSamplerBuilder<T>`

### build

```java
public MetricSampler build()
```

**Returns:** `public MetricSampler`

### MetricSampler

```java
return new MetricSampler()
```

**Returns:** `return new`

### SamplerResult

```java
public SamplerResult(int p_146053_, int p_146054_, Int2DoubleMap p_146055_)
```

**Parameters:**

- `p_146053_` (`int`)
- `p_146054_` (`int`)
- `p_146055_` (`Int2DoubleMap`)

**Returns:** `public`

### valueAtTick

```java
public double valueAtTick(int p_146058_)
```

**Parameters:**

- `p_146058_` (`int`)

**Returns:** `public double`

### getFirstTick

```java
public int getFirstTick()
```

**Returns:** `public int`

### getLastTick

```java
public int getLastTick()
```

**Returns:** `public int`

### test

```java
boolean test(double p_146060_)
```

**Parameters:**

- `p_146060_` (`double`)

**Returns:** `boolean`

### ValueIncreasedByPercentage

```java
public ValueIncreasedByPercentage(float p_146064_)
```

**Parameters:**

- `p_146064_` (`float`)

**Returns:** `public`

### test

```java
public boolean test(double p_146066_)
```

**Parameters:**

- `p_146066_` (`double`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `MetricSamplerBuilder` | class |  |
| `SamplerResult` | class |  |
| `ThresholdTest` | interface |  |
| `ValueIncreasedByPercentage` | class |  |
