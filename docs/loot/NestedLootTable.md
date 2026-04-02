# NestedLootTable

**Package:** `net.minecraft.world.level.storage.loot.entries`
**Type:** class
**Extends:** `LootPoolSingletonContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<NestedLootTable>` |  |

## Methods

### NestedLootTable

```java
private NestedLootTable(Either<ResourceKey<LootTable>, LootTable> p_330816_, int p_330486_, int p_331616_, List<LootItemCondition> p_330391_, List<LootItemFunction> p_332076_)
```

**Parameters:**

- `p_330816_` (`Either<ResourceKey<LootTable>, LootTable>`)
- `p_330486_` (`int`)
- `p_331616_` (`int`)
- `p_330391_` (`List<LootItemCondition>`)
- `p_332076_` (`List<LootItemFunction>`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootPoolEntryType getType()
```

**Returns:** `LootPoolEntryType`

### createItemStack

```java
public void createItemStack(Consumer<ItemStack> p_331038_, LootContext p_331648_)
```

**Parameters:**

- `p_331038_` (`Consumer<ItemStack>`)
- `p_331648_` (`LootContext`)

### validate

```java
public void validate(ValidationContext p_330583_)
```

**Parameters:**

- `p_330583_` (`ValidationContext`)

### lootTableReference

```java
public static LootPoolSingletonContainer.Builder<?> lootTableReference(ResourceKey<LootTable> p_335392_)
```

**Parameters:**

- `p_335392_` (`ResourceKey<LootTable>`)

**Returns:** `public static LootPoolSingletonContainer.Builder<?>`

### inlineLootTable

```java
public static LootPoolSingletonContainer.Builder<?> inlineLootTable(LootTable p_330235_)
```

**Parameters:**

- `p_330235_` (`LootTable`)

**Returns:** `public static LootPoolSingletonContainer.Builder<?>`
