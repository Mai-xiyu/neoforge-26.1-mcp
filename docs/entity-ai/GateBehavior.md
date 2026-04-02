# GateBehavior

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class<E extends LivingEntity> implements BehaviorControl<E>

## Methods

### GateBehavior

```java
public GateBehavior(Map<MemoryModuleType<?>, MemoryStatus> p_22873_, Set<MemoryModuleType<?>> p_22874_, GateBehavior.OrderPolicy p_22875_, GateBehavior.RunningPolicy p_22876_, List<Pair<? extends BehaviorControl<? super E>, Integer>> p_22877_)
```

**Parameters:**

- `p_22873_` (`Map<MemoryModuleType<?>, MemoryStatus>`)
- `p_22874_` (`Set<MemoryModuleType<?>>`)
- `p_22875_` (`GateBehavior.OrderPolicy`)
- `p_22876_` (`GateBehavior.RunningPolicy`)
- `p_22877_` (`List<Pair<? extends BehaviorControl<? super E>, Integer>>`)

**Returns:** `public`

### getStatus

```java
public Behavior.Status getStatus()
```

**Returns:** `Behavior.Status`

### hasRequiredMemories

```java
private boolean hasRequiredMemories(E p_259419_)
```

**Parameters:**

- `p_259419_` (`E`)

**Returns:** `private boolean`

### tryStart

```java
public final boolean tryStart(ServerLevel p_259362_, E p_259746_, long p_259560_)
```

**Parameters:**

- `p_259362_` (`ServerLevel`)
- `p_259746_` (`E`)
- `p_259560_` (`long`)

**Returns:** `boolean`

### tickOrStop

```java
public final void tickOrStop(ServerLevel p_259934_, E p_259790_, long p_260259_)
```

**Parameters:**

- `p_259934_` (`ServerLevel`)
- `p_259790_` (`E`)
- `p_260259_` (`long`)

### doStop

```java
public final void doStop(ServerLevel p_259962_, E p_260250_, long p_259847_)
```

**Parameters:**

- `p_259962_` (`ServerLevel`)
- `p_260250_` (`E`)
- `p_259847_` (`long`)

### debugString

```java
public String debugString()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### SHUFFLED

```java
, SHUFFLED()
```

**Returns:** `,`

### OrderPolicy

```java
private OrderPolicy(Consumer<ShufflingList<?>> p_22930_)
```

**Parameters:**

- `p_22930_` (`Consumer<ShufflingList<?>>`)

**Returns:** `private`

### apply

```java
public void apply(ShufflingList<?> p_147528_)
```

**Parameters:**

- `p_147528_` (`ShufflingList<?>`)

**Returns:** `public void`

### apply

```java
public <E extends LivingEntity> void apply(Stream<BehaviorControl<? super E>> p_147537_, ServerLevel p_147538_, E p_147539_, long p_147540_)
```

**Parameters:**

- `p_147537_` (`Stream<BehaviorControl<? super E>>`)
- `p_147538_` (`ServerLevel`)
- `p_147539_` (`E`)
- `p_147540_` (`long`)

### apply

```java
public <E extends LivingEntity> void apply(Stream<BehaviorControl<? super E>> p_147542_, ServerLevel p_147543_, E p_147544_, long p_147545_)
```

**Parameters:**

- `p_147542_` (`Stream<BehaviorControl<? super E>>`)
- `p_147543_` (`ServerLevel`)
- `p_147544_` (`E`)
- `p_147545_` (`long`)

### apply

```java
<E extends LivingEntity> public abstract <E extends LivingEntity> void apply(Stream<BehaviorControl<? super E>> p_147532_, ServerLevel p_147533_, E p_147534_, long p_147535_)
```

**Parameters:**

- `p_147532_` (`Stream<BehaviorControl<? super E>>`)
- `p_147533_` (`ServerLevel`)
- `p_147534_` (`E`)
- `p_147535_` (`long`)

**Returns:** `public abstract <E extends LivingEntity> void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `OrderPolicy` | enum |  |
| `RunningPolicy` | enum |  |
