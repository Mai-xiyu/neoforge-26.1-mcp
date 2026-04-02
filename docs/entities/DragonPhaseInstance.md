# DragonPhaseInstance

**Package:** `net.minecraft.world.entity.boss.enderdragon.phases`
**Type:** interface

## Methods

### isSitting

```java
boolean isSitting()
```

**Returns:** `boolean`

### doClientTick

```java
void doClientTick()
```

### doServerTick

```java
void doServerTick()
```

### onCrystalDestroyed

```java
void onCrystalDestroyed(EndCrystal p_31315_, BlockPos p_31316_, DamageSource p_31317_, Player p_31318_)
```

**Parameters:**

- `p_31315_` (`EndCrystal`)
- `p_31316_` (`BlockPos`)
- `p_31317_` (`DamageSource`)
- `p_31318_` (`Player`)

### begin

```java
void begin()
```

### end

```java
void end()
```

### getFlySpeed

```java
float getFlySpeed()
```

**Returns:** `float`

### getTurnSpeed

```java
float getTurnSpeed()
```

**Returns:** `float`

### getPhase

```java
EnderDragonPhase<? extends DragonPhaseInstance> getPhase()
```

**Returns:** `EnderDragonPhase<? extends DragonPhaseInstance>`

### getFlyTargetLocation

```java
Vec3 getFlyTargetLocation()
```

**Returns:** `Vec3`

### onHurt

```java
float onHurt(DamageSource p_31313_, float p_31314_)
```

**Parameters:**

- `p_31313_` (`DamageSource`)
- `p_31314_` (`float`)

**Returns:** `float`
