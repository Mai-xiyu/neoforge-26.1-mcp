# KilledTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<KilledTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<KilledTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<KilledTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<KilledTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_48105_, Entity p_48106_, DamageSource p_48107_)
```

**Parameters:**

- `p_48105_` (`ServerPlayer`)
- `p_48106_` (`Entity`)
- `p_48107_` (`DamageSource`)

**Returns:** `public void`

### playerKilledEntity

```java
public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(Optional<EntityPredicate> p_298999_)
```

**Parameters:**

- `p_298999_` (`Optional<EntityPredicate>`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### playerKilledEntity

```java
public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(EntityPredicate.Builder p_48137_)
```

**Parameters:**

- `p_48137_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### playerKilledEntity

```java
public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity()
```

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### playerKilledEntity

```java
public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(Optional<EntityPredicate> p_300920_, Optional<DamageSourcePredicate> p_300985_)
```

**Parameters:**

- `p_300920_` (`Optional<EntityPredicate>`)
- `p_300985_` (`Optional<DamageSourcePredicate>`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### playerKilledEntity

```java
public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(EntityPredicate.Builder p_300879_, Optional<DamageSourcePredicate> p_298956_)
```

**Parameters:**

- `p_300879_` (`EntityPredicate.Builder`)
- `p_298956_` (`Optional<DamageSourcePredicate>`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### playerKilledEntity

```java
public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(Optional<EntityPredicate> p_299297_, DamageSourcePredicate.Builder p_301016_)
```

**Parameters:**

- `p_299297_` (`Optional<EntityPredicate>`)
- `p_301016_` (`DamageSourcePredicate.Builder`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### playerKilledEntity

```java
public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntity(EntityPredicate.Builder p_152106_, DamageSourcePredicate.Builder p_301319_)
```

**Parameters:**

- `p_152106_` (`EntityPredicate.Builder`)
- `p_301319_` (`DamageSourcePredicate.Builder`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### playerKilledEntityNearSculkCatalyst

```java
public static Criterion<KilledTrigger.TriggerInstance> playerKilledEntityNearSculkCatalyst()
```

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### entityKilledPlayer

```java
public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(Optional<EntityPredicate> p_298209_)
```

**Parameters:**

- `p_298209_` (`Optional<EntityPredicate>`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### entityKilledPlayer

```java
public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(EntityPredicate.Builder p_298389_)
```

**Parameters:**

- `p_298389_` (`EntityPredicate.Builder`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### entityKilledPlayer

```java
public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer()
```

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### entityKilledPlayer

```java
public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(Optional<EntityPredicate> p_298878_, Optional<DamageSourcePredicate> p_300913_)
```

**Parameters:**

- `p_298878_` (`Optional<EntityPredicate>`)
- `p_300913_` (`Optional<DamageSourcePredicate>`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### entityKilledPlayer

```java
public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(EntityPredicate.Builder p_152119_, Optional<DamageSourcePredicate> p_301181_)
```

**Parameters:**

- `p_152119_` (`EntityPredicate.Builder`)
- `p_301181_` (`Optional<DamageSourcePredicate>`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### entityKilledPlayer

```java
public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(Optional<EntityPredicate> p_301135_, DamageSourcePredicate.Builder p_301143_)
```

**Parameters:**

- `p_301135_` (`Optional<EntityPredicate>`)
- `p_301143_` (`DamageSourcePredicate.Builder`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### entityKilledPlayer

```java
public static Criterion<KilledTrigger.TriggerInstance> entityKilledPlayer(EntityPredicate.Builder p_301108_, DamageSourcePredicate.Builder p_298860_)
```

**Parameters:**

- `p_301108_` (`EntityPredicate.Builder`)
- `p_298860_` (`DamageSourcePredicate.Builder`)

**Returns:** `public static Criterion<KilledTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ServerPlayer p_48131_, LootContext p_48132_, DamageSource p_48133_)
```

**Parameters:**

- `p_48131_` (`ServerPlayer`)
- `p_48132_` (`LootContext`)
- `p_48133_` (`DamageSource`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_311935_)
```

**Parameters:**

- `p_311935_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
