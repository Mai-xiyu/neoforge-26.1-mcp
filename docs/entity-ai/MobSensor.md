# MobSensor

**Package:** `net.minecraft.world.entity.ai.sensing`
**Type:** class<T extends LivingEntity> extends Sensor<T>

## Methods

### MobSensor

```java
public MobSensor(int p_316590_, BiPredicate<T, LivingEntity> p_316273_, Predicate<T> p_316373_, MemoryModuleType<Boolean> p_316764_, int p_316209_)
```

**Parameters:**

- `p_316590_` (`int`)
- `p_316273_` (`BiPredicate<T, LivingEntity>`)
- `p_316373_` (`Predicate<T>`)
- `p_316764_` (`MemoryModuleType<Boolean>`)
- `p_316209_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### doTick

```java
protected void doTick(ServerLevel p_316535_, T p_316183_)
```

**Parameters:**

- `p_316535_` (`ServerLevel`)
- `p_316183_` (`T`)

### requires

```java
public Set<MemoryModuleType<?>> requires()
```

**Returns:** `Set<MemoryModuleType<?>>`

### checkForMobsNearby

```java
public void checkForMobsNearby(T p_316143_)
```

**Parameters:**

- `p_316143_` (`T`)

**Returns:** `public void`

### mobDetected

```java
public void mobDetected(T p_316813_)
```

**Parameters:**

- `p_316813_` (`T`)

**Returns:** `public void`

### clearMemory

```java
public void clearMemory(T p_316737_)
```

**Parameters:**

- `p_316737_` (`T`)

**Returns:** `public void`
