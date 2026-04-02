# OminousItemSpawner

**Package:** `net.minecraft.world.entity`
**Type:** class
**Extends:** `Entity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TICKS_BEFORE_ABOUT_TO_SPAWN_SOUND` | `int` |  |

## Methods

### OminousItemSpawner

```java
public OminousItemSpawner(EntityType<? extends OminousItemSpawner> p_338198_, Level p_338269_)
```

**Parameters:**

- `p_338198_` (`EntityType<? extends OminousItemSpawner>`)
- `p_338269_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### create

```java
public static OminousItemSpawner create(Level p_338234_, ItemStack p_338571_)
```

**Parameters:**

- `p_338234_` (`Level`)
- `p_338571_` (`ItemStack`)

**Returns:** `public static OminousItemSpawner`

### tick

```java
public void tick()
```

### tickServer

```java
private void tickServer()
```

**Returns:** `private void`

### tickClient

```java
private void tickClient()
```

**Returns:** `private void`

### spawnItem

```java
private void spawnItem()
```

**Returns:** `private void`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_338496_)
```

**Parameters:**

- `p_338496_` (`SynchedEntityData.Builder`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_338507_)
```

**Parameters:**

- `p_338507_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_338411_)
```

**Parameters:**

- `p_338411_` (`CompoundTag`)

### canAddPassenger

```java
protected boolean canAddPassenger(Entity p_338282_)
```

**Parameters:**

- `p_338282_` (`Entity`)

**Returns:** `boolean`

### couldAcceptPassenger

```java
protected boolean couldAcceptPassenger()
```

**Returns:** `boolean`

### addPassenger

```java
protected void addPassenger(Entity p_338681_)
```

**Parameters:**

- `p_338681_` (`Entity`)

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

### addParticles

```java
public void addParticles()
```

**Returns:** `public void`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `public ItemStack`

### setItem

```java
private void setItem(ItemStack p_338789_)
```

**Parameters:**

- `p_338789_` (`ItemStack`)

**Returns:** `private void`
