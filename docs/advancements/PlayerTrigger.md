# PlayerTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<PlayerTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<PlayerTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<PlayerTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<PlayerTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_222619_)
```

**Parameters:**

- `p_222619_` (`ServerPlayer`)

**Returns:** `public void`

### located

```java
public static Criterion<PlayerTrigger.TriggerInstance> located(LocationPredicate.Builder p_301139_)
```

**Parameters:**

- `p_301139_` (`LocationPredicate.Builder`)

**Returns:** `public static Criterion<PlayerTrigger.TriggerInstance>`

### located

```java
public static Criterion<PlayerTrigger.TriggerInstance> located(EntityPredicate.Builder p_300962_)
```

**Parameters:**

- `p_300962_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<PlayerTrigger.TriggerInstance>`

### located

```java
public static Criterion<PlayerTrigger.TriggerInstance> located(Optional<EntityPredicate> p_301141_)
```

**Parameters:**

- `p_301141_` (`Optional<EntityPredicate>`)

**Returns:** `public static Criterion<PlayerTrigger.TriggerInstance>`

### sleptInBed

```java
public static Criterion<PlayerTrigger.TriggerInstance> sleptInBed()
```

**Returns:** `public static Criterion<PlayerTrigger.TriggerInstance>`

### raidWon

```java
public static Criterion<PlayerTrigger.TriggerInstance> raidWon()
```

**Returns:** `public static Criterion<PlayerTrigger.TriggerInstance>`

### avoidVibration

```java
public static Criterion<PlayerTrigger.TriggerInstance> avoidVibration()
```

**Returns:** `public static Criterion<PlayerTrigger.TriggerInstance>`

### tick

```java
public static Criterion<PlayerTrigger.TriggerInstance> tick()
```

**Returns:** `public static Criterion<PlayerTrigger.TriggerInstance>`

### walkOnBlockWithEquipment

```java
public static Criterion<PlayerTrigger.TriggerInstance> walkOnBlockWithEquipment(Block p_222638_, Item p_222639_)
```

**Parameters:**

- `p_222638_` (`Block`)
- `p_222639_` (`Item`)

**Returns:** `public static Criterion<PlayerTrigger.TriggerInstance>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
