# AxolotlAttackablesSensor

**Package:** `net.minecraft.world.entity.ai.sensing`
**Type:** class
**Extends:** `NearestVisibleLivingEntitySensor`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TARGET_DETECTION_DISTANCE` | `float` |  |

## Methods

### isMatchingEntity

```java
protected boolean isMatchingEntity(LivingEntity p_148266_, LivingEntity p_148267_)
```

**Parameters:**

- `p_148266_` (`LivingEntity`)
- `p_148267_` (`LivingEntity`)

**Returns:** `boolean`

### isHuntTarget

```java
private boolean isHuntTarget(LivingEntity p_148272_, LivingEntity p_148273_)
```

**Parameters:**

- `p_148272_` (`LivingEntity`)
- `p_148273_` (`LivingEntity`)

**Returns:** `private boolean`

### isHostileTarget

```java
private boolean isHostileTarget(LivingEntity p_148270_)
```

**Parameters:**

- `p_148270_` (`LivingEntity`)

**Returns:** `private boolean`

### isClose

```java
private boolean isClose(LivingEntity p_148275_, LivingEntity p_148276_)
```

**Parameters:**

- `p_148275_` (`LivingEntity`)
- `p_148276_` (`LivingEntity`)

**Returns:** `private boolean`

### getMemory

```java
protected MemoryModuleType<LivingEntity> getMemory()
```

**Returns:** `MemoryModuleType<LivingEntity>`
