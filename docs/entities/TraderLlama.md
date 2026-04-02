# TraderLlama

**Package:** `net.minecraft.world.entity.animal.horse`
**Type:** class
**Extends:** `Llama`

## Methods

### TraderLlama

```java
public TraderLlama(EntityType<? extends TraderLlama> p_30939_, Level p_30940_)
```

**Parameters:**

- `p_30939_` (`EntityType<? extends TraderLlama>`)
- `p_30940_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isTraderLlama

```java
public boolean isTraderLlama()
```

**Returns:** `boolean`

### makeNewLlama

```java
protected Llama makeNewLlama()
```

**Returns:** `Llama`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_30950_)
```

**Parameters:**

- `p_30950_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_30948_)
```

**Parameters:**

- `p_30948_` (`CompoundTag`)

### registerGoals

```java
protected void registerGoals()
```

### setDespawnDelay

```java
public void setDespawnDelay(int p_149556_)
```

**Parameters:**

- `p_149556_` (`int`)

**Returns:** `public void`

### doPlayerRide

```java
protected void doPlayerRide(Player p_30958_)
```

**Parameters:**

- `p_30958_` (`Player`)

### aiStep

```java
public void aiStep()
```

### maybeDespawn

```java
private void maybeDespawn()
```

**Returns:** `private void`

### canDespawn

```java
private boolean canDespawn()
```

**Returns:** `private boolean`

### isLeashedToWanderingTrader

```java
private boolean isLeashedToWanderingTrader()
```

**Returns:** `private boolean`

### isLeashedToSomethingOtherThanTheWanderingTrader

```java
private boolean isLeashedToSomethingOtherThanTheWanderingTrader()
```

**Returns:** `private boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_30942_, DifficultyInstance p_30943_, MobSpawnType p_30944_, SpawnGroupData p_30945_)
```

**Parameters:**

- `p_30942_` (`ServerLevelAccessor`)
- `p_30943_` (`DifficultyInstance`)
- `p_30944_` (`MobSpawnType`)
- `p_30945_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### TraderLlamaDefendWanderingTraderGoal

```java
public TraderLlamaDefendWanderingTraderGoal(Llama p_149558_)
```

**Parameters:**

- `p_149558_` (`Llama`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canUse

```java
public boolean canUse()
```

**Returns:** `boolean`

### start

```java
public void start()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TraderLlamaDefendWanderingTraderGoal` | class |  |
