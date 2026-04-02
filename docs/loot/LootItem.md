# LootItem

**Package:** `net.minecraft.world.level.storage.loot.entries`
**Type:** class
**Extends:** `LootPoolSingletonContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<LootItem>` |  |

## Methods

### LootItem

```java
private LootItem(Holder<Item> p_298423_, int p_79567_, int p_79568_, List<LootItemCondition> p_299249_, List<LootItemFunction> p_299128_)
```

**Parameters:**

- `p_298423_` (`Holder<Item>`)
- `p_79567_` (`int`)
- `p_79568_` (`int`)
- `p_299249_` (`List<LootItemCondition>`)
- `p_299128_` (`List<LootItemFunction>`)

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
public void createItemStack(Consumer<ItemStack> p_79590_, LootContext p_79591_)
```

**Parameters:**

- `p_79590_` (`Consumer<ItemStack>`)
- `p_79591_` (`LootContext`)

### lootTableItem

```java
public static LootPoolSingletonContainer.Builder<?> lootTableItem(ItemLike p_79580_)
```

**Parameters:**

- `p_79580_` (`ItemLike`)

**Returns:** `public static LootPoolSingletonContainer.Builder<?>`
