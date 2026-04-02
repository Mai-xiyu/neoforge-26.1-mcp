# LootTableIdCondition

**Package:** `net.neoforged.neoforge.common.loot`
**Type:** class
**Implements:** `LootItemCondition`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LootTableIdCondition>` |  |
| `LOOT_TABLE_ID` | `LootItemConditionType` |  |
| `UNKNOWN_LOOT_TABLE` | `ResourceLocation` |  |

## Methods

### LootTableIdCondition

```java
private LootTableIdCondition(ResourceLocation targetLootTableId)
```

**Parameters:**

- `targetLootTableId` (`ResourceLocation`)

**Returns:** `private`

### getType

```java
public LootItemConditionType getType()
```

**Returns:** `LootItemConditionType`

### test

```java
public boolean test(LootContext lootContext)
```

**Parameters:**

- `lootContext` (`LootContext`)

**Returns:** `boolean`

### builder

```java
public static Builder builder(ResourceLocation targetLootTableId)
```

**Parameters:**

- `targetLootTableId` (`ResourceLocation`)

**Returns:** `public static Builder`

### Builder

```java
return new Builder()
```

**Returns:** `return new`

### Builder

```java
public Builder(ResourceLocation targetLootTableId)
```

**Parameters:**

- `targetLootTableId` (`ResourceLocation`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Target loot table must not be null")
```

**Parameters:**

- `null"` (`"Target loot table must not be`)

**Returns:** `throw new`

### build

```java
public LootItemCondition build()
```

**Returns:** `LootItemCondition`

### LootTableIdCondition

```java
return new LootTableIdCondition()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
