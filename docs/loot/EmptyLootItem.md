# EmptyLootItem

**Package:** `net.minecraft.world.level.storage.loot.entries`
**Type:** class
**Extends:** `LootPoolSingletonContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EmptyLootItem>` |  |

## Methods

### EmptyLootItem

```java
private EmptyLootItem(int p_79519_, int p_79520_, List<LootItemCondition> p_298942_, List<LootItemFunction> p_298310_)
```

**Parameters:**

- `p_79519_` (`int`)
- `p_79520_` (`int`)
- `p_298942_` (`List<LootItemCondition>`)
- `p_298310_` (`List<LootItemFunction>`)

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
public void createItemStack(Consumer<ItemStack> p_79531_, LootContext p_79532_)
```

**Parameters:**

- `p_79531_` (`Consumer<ItemStack>`)
- `p_79532_` (`LootContext`)

### emptyItem

```java
public static LootPoolSingletonContainer.Builder<?> emptyItem()
```

**Returns:** `public static LootPoolSingletonContainer.Builder<?>`

### simpleBuilder

```java
return simpleBuilder()
```

**Returns:** `return`
