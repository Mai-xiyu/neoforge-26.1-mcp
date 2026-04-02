# CuredZombieVillagerTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<CuredZombieVillagerTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<CuredZombieVillagerTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<CuredZombieVillagerTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<CuredZombieVillagerTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_24275_, Zombie p_24276_, Villager p_24277_)
```

**Parameters:**

- `p_24275_` (`ServerPlayer`)
- `p_24276_` (`Zombie`)
- `p_24277_` (`Villager`)

**Returns:** `public void`

### curedZombieVillager

```java
public static Criterion<CuredZombieVillagerTrigger.TriggerInstance> curedZombieVillager()
```

**Returns:** `public static Criterion<CuredZombieVillagerTrigger.TriggerInstance>`

### matches

```java
public boolean matches(LootContext p_24300_, LootContext p_24301_)
```

**Parameters:**

- `p_24300_` (`LootContext`)
- `p_24301_` (`LootContext`)

**Returns:** `public boolean`

### validate

```java
public void validate(CriterionValidator p_312270_)
```

**Parameters:**

- `p_312270_` (`CriterionValidator`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
