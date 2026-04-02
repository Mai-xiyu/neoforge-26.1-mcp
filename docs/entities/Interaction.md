# Interaction

**Package:** `net.minecraft.world.entity`
**Type:** class
**Extends:** `Entity`
**Implements:** `Attackable`, `Targeting`

## Methods

### Interaction

```java
public Interaction(EntityType<?> p_273319_, Level p_272713_)
```

**Parameters:**

- `p_273319_` (`EntityType<?>`)
- `p_272713_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326193_)
```

**Parameters:**

- `p_326193_` (`SynchedEntityData.Builder`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_272702_)
```

**Parameters:**

- `p_272702_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_273772_)
```

**Parameters:**

- `p_273772_` (`CompoundTag`)

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_272722_)
```

**Parameters:**

- `p_272722_` (`EntityDataAccessor<?>`)

### canBeHitByProjectile

```java
public boolean canBeHitByProjectile()
```

**Returns:** `boolean`

### isPickable

```java
public boolean isPickable()
```

**Returns:** `boolean`

### getPistonPushReaction

```java
public PushReaction getPistonPushReaction()
```

**Returns:** `PushReaction`

### isIgnoringBlockTriggers

```java
public boolean isIgnoringBlockTriggers()
```

**Returns:** `boolean`

### skipAttackInteraction

```java
public boolean skipAttackInteraction(Entity p_273553_)
```

**Parameters:**

- `p_273553_` (`Entity`)

**Returns:** `boolean`

### interact

```java
public InteractionResult interact(Player p_273507_, InteractionHand p_273048_)
```

**Parameters:**

- `p_273507_` (`Player`)
- `p_273048_` (`InteractionHand`)

**Returns:** `InteractionResult`

### tick

```java
public void tick()
```

### getLastAttacker

```java
public LivingEntity getLastAttacker()
```

**Returns:** `LivingEntity`

### getTarget

```java
public LivingEntity getTarget()
```

**Returns:** `LivingEntity`

### setWidth

```java
private void setWidth(float p_273385_)
```

**Parameters:**

- `p_273385_` (`float`)

**Returns:** `private void`

### getWidth

```java
private float getWidth()
```

**Returns:** `private float`

### setHeight

```java
private void setHeight(float p_273733_)
```

**Parameters:**

- `p_273733_` (`float`)

**Returns:** `private void`

### getHeight

```java
private float getHeight()
```

**Returns:** `private float`

### setResponse

```java
private void setResponse(boolean p_273657_)
```

**Parameters:**

- `p_273657_` (`boolean`)

**Returns:** `private void`

### getResponse

```java
private boolean getResponse()
```

**Returns:** `private boolean`

### getDimensions

```java
private EntityDimensions getDimensions()
```

**Returns:** `private EntityDimensions`

### getDimensions

```java
public EntityDimensions getDimensions(Pose p_273111_)
```

**Parameters:**

- `p_273111_` (`Pose`)

**Returns:** `EntityDimensions`

### makeBoundingBox

```java
protected AABB makeBoundingBox()
```

**Returns:** `AABB`

### PlayerAction

```java
static record PlayerAction(UUID player, long timestamp)
```

**Parameters:**

- `player` (`UUID`)
- `timestamp` (`long`)

**Returns:** `static record`
