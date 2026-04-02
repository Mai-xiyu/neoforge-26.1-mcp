# IMobEffectExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private MobEffect self()
```

**Returns:** `private MobEffect`

### fillEffectCures

```java
default void fillEffectCures(Set<EffectCure> cures, MobEffectInstance effectInstance)
```

**Parameters:**

- `cures` (`Set<EffectCure>`)
- `effectInstance` (`MobEffectInstance`)

### getSortOrder

```java
default int getSortOrder(MobEffectInstance effectInstance)
```

**Parameters:**

- `effectInstance` (`MobEffectInstance`)

**Returns:** `int`
