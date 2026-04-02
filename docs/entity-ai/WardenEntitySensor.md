# WardenEntitySensor

**Package:** `net.minecraft.world.entity.ai.sensing`
**Type:** class
**Extends:** `NearestLivingEntitySensor<Warden>`

## Methods

### requires

```java
public Set<MemoryModuleType<?>> requires()
```

**Returns:** `Set<MemoryModuleType<?>>`

### doTick

```java
protected void doTick(ServerLevel p_217833_, Warden p_217834_)
```

**Parameters:**

- `p_217833_` (`ServerLevel`)
- `p_217834_` (`Warden`)

**Returns:** `protected void`

### getClosest

```java
private static Optional<LivingEntity> getClosest(Warden p_217843_, Predicate<LivingEntity> p_217844_)
```

**Parameters:**

- `p_217843_` (`Warden`)
- `p_217844_` (`Predicate<LivingEntity>`)

**Returns:** `private static Optional<LivingEntity>`

### radiusXZ

```java
protected int radiusXZ()
```

**Returns:** `int`

### radiusY

```java
protected int radiusY()
```

**Returns:** `int`
