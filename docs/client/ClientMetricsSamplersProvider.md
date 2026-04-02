# ClientMetricsSamplersProvider

**Package:** `net.minecraft.client.profiling`
**Type:** class
**Implements:** `MetricsSamplerProvider`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ClientMetricsSamplersProvider

```java
public ClientMetricsSamplersProvider(LongSupplier p_172540_, LevelRenderer p_172541_)
```

**Parameters:**

- `p_172540_` (`LongSupplier`)
- `p_172541_` (`LevelRenderer`)

**Returns:** `public`

### registerStaticSamplers

```java
private void registerStaticSamplers()
```

**Returns:** `private void`

### samplers

```java
public Set<MetricSampler> samplers(Supplier<ProfileCollector> p_172544_)
```

**Parameters:**

- `p_172544_` (`Supplier<ProfileCollector>`)

**Returns:** `Set<MetricSampler>`
