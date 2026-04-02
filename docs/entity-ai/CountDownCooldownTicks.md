# CountDownCooldownTicks

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class
**Extends:** `Behavior<LivingEntity>`

## Methods

### CountDownCooldownTicks

```java
public CountDownCooldownTicks(MemoryModuleType<Integer> p_147462_)
```

**Parameters:**

- `p_147462_` (`MemoryModuleType<Integer>`)

**Returns:** `public`

### getCooldownTickMemory

```java
private Optional<Integer> getCooldownTickMemory(LivingEntity p_147466_)
```

**Parameters:**

- `p_147466_` (`LivingEntity`)

**Returns:** `private Optional<Integer>`

### timedOut

```java
protected boolean timedOut(long p_147464_)
```

**Parameters:**

- `p_147464_` (`long`)

**Returns:** `boolean`

### canStillUse

```java
protected boolean canStillUse(ServerLevel p_147468_, LivingEntity p_147469_, long p_147470_)
```

**Parameters:**

- `p_147468_` (`ServerLevel`)
- `p_147469_` (`LivingEntity`)
- `p_147470_` (`long`)

**Returns:** `boolean`

### tick

```java
protected void tick(ServerLevel p_147476_, LivingEntity p_147477_, long p_147478_)
```

**Parameters:**

- `p_147476_` (`ServerLevel`)
- `p_147477_` (`LivingEntity`)
- `p_147478_` (`long`)

### stop

```java
protected void stop(ServerLevel p_147472_, LivingEntity p_147473_, long p_147474_)
```

**Parameters:**

- `p_147472_` (`ServerLevel`)
- `p_147473_` (`LivingEntity`)
- `p_147474_` (`long`)
