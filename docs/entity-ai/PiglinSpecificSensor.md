# PiglinSpecificSensor

**Package:** `net.minecraft.world.entity.ai.sensing`
**Type:** class
**Extends:** `Sensor<LivingEntity>`

## Methods

### requires

```java
public Set<MemoryModuleType<?>> requires()
```

**Returns:** `Set<MemoryModuleType<?>>`

### doTick

```java
protected void doTick(ServerLevel p_26726_, LivingEntity p_26727_)
```

**Parameters:**

- `p_26726_` (`ServerLevel`)
- `p_26727_` (`LivingEntity`)

### findNearestRepellent

```java
private static Optional<BlockPos> findNearestRepellent(ServerLevel p_26735_, LivingEntity p_26736_)
```

**Parameters:**

- `p_26735_` (`ServerLevel`)
- `p_26736_` (`LivingEntity`)

**Returns:** `private static Optional<BlockPos>`

### isValidRepellent

```java
private static boolean isValidRepellent(ServerLevel p_26729_, BlockPos p_26730_)
```

**Parameters:**

- `p_26729_` (`ServerLevel`)
- `p_26730_` (`BlockPos`)

**Returns:** `private static boolean`
