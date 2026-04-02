# CanItemPerformAbility

**Package:** `net.neoforged.neoforge.common.loot`
**Type:** class
**Implements:** `LootItemCondition`

## Description

This LootItemCondition "neoforge:can_item_perform_ability" can be used to check if an item can perform a given ItemAbility.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CanItemPerformAbility>` |  |
| `LOOT_CONDITION_TYPE` | `LootItemConditionType` |  |

## Methods

### CanItemPerformAbility

```java
public CanItemPerformAbility(ItemAbility ability)
```

**Parameters:**

- `ability` (`ItemAbility`)

**Returns:** `public`

### getType

```java
public LootItemConditionType getType()
```

**Returns:** `public LootItemConditionType`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `public Set<LootContextParam<?>>`

### test

```java
public boolean test(LootContext lootContext)
```

**Parameters:**

- `lootContext` (`LootContext`)

**Returns:** `public boolean`

### canItemPerformAbility

```java
public static LootItemCondition.Builder canItemPerformAbility(ItemAbility action)
```

**Parameters:**

- `action` (`ItemAbility`)

**Returns:** `public static LootItemCondition.Builder`

### CanItemPerformAbility

```java
> new CanItemPerformAbility()
```

**Returns:** `> new`
