# NeutralMob

**Package:** `net.minecraft.world.entity`
**Type:** interface

## Methods

### getRemainingPersistentAngerTime

```java
int getRemainingPersistentAngerTime()
```

**Returns:** `int`

### setRemainingPersistentAngerTime

```java
void setRemainingPersistentAngerTime(int p_21673_)
```

**Parameters:**

- `p_21673_` (`int`)

### getPersistentAngerTarget

```java
UUID getPersistentAngerTarget()
```

**Returns:** `UUID`

### setPersistentAngerTarget

```java
void setPersistentAngerTarget(UUID p_21672_)
```

**Parameters:**

- `p_21672_` (`UUID`)

### startPersistentAngerTimer

```java
void startPersistentAngerTimer()
```

### addPersistentAngerSaveData

```java
default void addPersistentAngerSaveData(CompoundTag p_21679_)
```

**Parameters:**

- `p_21679_` (`CompoundTag`)

**Returns:** `default void`

### readPersistentAngerSaveData

```java
default void readPersistentAngerSaveData(Level p_147286_, CompoundTag p_147287_)
```

**Parameters:**

- `p_147286_` (`Level`)
- `p_147287_` (`CompoundTag`)

**Returns:** `default void`

### updatePersistentAnger

```java
default void updatePersistentAnger(ServerLevel p_21667_, boolean p_21668_)
```

**Parameters:**

- `p_21667_` (`ServerLevel`)
- `p_21668_` (`boolean`)

**Returns:** `default void`

### isAngryAt

```java
default boolean isAngryAt(LivingEntity p_21675_)
```

**Parameters:**

- `p_21675_` (`LivingEntity`)

**Returns:** `default boolean`

### isAngryAtAllPlayers

```java
default boolean isAngryAtAllPlayers(Level p_21671_)
```

**Parameters:**

- `p_21671_` (`Level`)

**Returns:** `default boolean`

### isAngry

```java
default boolean isAngry()
```

**Returns:** `default boolean`

### playerDied

```java
default void playerDied(Player p_21677_)
```

**Parameters:**

- `p_21677_` (`Player`)

**Returns:** `default void`

### forgetCurrentTargetAndRefreshUniversalAnger

```java
default void forgetCurrentTargetAndRefreshUniversalAnger()
```

**Returns:** `default void`

### stopBeingAngry

```java
default void stopBeingAngry()
```

**Returns:** `default void`

### getLastHurtByMob

```java
LivingEntity getLastHurtByMob()
```

**Returns:** `LivingEntity`

### setLastHurtByMob

```java
void setLastHurtByMob(LivingEntity p_21669_)
```

**Parameters:**

- `p_21669_` (`LivingEntity`)

### setLastHurtByPlayer

```java
void setLastHurtByPlayer(Player p_21680_)
```

**Parameters:**

- `p_21680_` (`Player`)

### setTarget

```java
void setTarget(LivingEntity p_21681_)
```

**Parameters:**

- `p_21681_` (`LivingEntity`)

### canAttack

```java
boolean canAttack(LivingEntity p_181126_)
```

**Parameters:**

- `p_181126_` (`LivingEntity`)

**Returns:** `boolean`

### getTarget

```java
LivingEntity getTarget()
```

**Returns:** `LivingEntity`
