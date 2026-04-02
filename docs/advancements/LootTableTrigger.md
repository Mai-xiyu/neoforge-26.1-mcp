# LootTableTrigger

**Package:** `net.minecraft.advancements.critereon`
**Type:** class
**Extends:** `SimpleCriterionTrigger<LootTableTrigger.TriggerInstance>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<LootTableTrigger.TriggerInstance>` |  |

## Methods

### codec

```java
public Codec<LootTableTrigger.TriggerInstance> codec()
```

**Returns:** `Codec<LootTableTrigger.TriggerInstance>`

### trigger

```java
public void trigger(ServerPlayer p_54598_, ResourceKey<LootTable> p_335591_)
```

**Parameters:**

- `p_54598_` (`ServerPlayer`)
- `p_335591_` (`ResourceKey<LootTable>`)

**Returns:** `public void`

### lootTableUsed

```java
public static Criterion<LootTableTrigger.TriggerInstance> lootTableUsed(ResourceKey<LootTable> p_335395_)
```

**Parameters:**

- `p_335395_` (`ResourceKey<LootTable>`)

**Returns:** `public static Criterion<LootTableTrigger.TriggerInstance>`

### matches

```java
public boolean matches(ResourceKey<LootTable> p_335509_)
```

**Parameters:**

- `p_335509_` (`ResourceKey<LootTable>`)

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TriggerInstance` | record |  |
