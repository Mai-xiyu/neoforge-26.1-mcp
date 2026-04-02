# TagEntry

**Package:** `net.minecraft.world.level.storage.loot.entries`
**Type:** class
**Extends:** `LootPoolSingletonContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<TagEntry>` |  |

## Methods

### TagEntry

```java
private TagEntry(TagKey<Item> p_205078_, boolean p_205079_, int p_205080_, int p_205081_, List<LootItemCondition> p_298985_, List<LootItemFunction> p_299088_)
```

**Parameters:**

- `p_205078_` (`TagKey<Item>`)
- `p_205079_` (`boolean`)
- `p_205080_` (`int`)
- `p_205081_` (`int`)
- `p_298985_` (`List<LootItemCondition>`)
- `p_299088_` (`List<LootItemFunction>`)

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
public void createItemStack(Consumer<ItemStack> p_79854_, LootContext p_79855_)
```

**Parameters:**

- `p_79854_` (`Consumer<ItemStack>`)
- `p_79855_` (`LootContext`)

### expandTag

```java
private boolean expandTag(LootContext p_79846_, Consumer<LootPoolEntry> p_79847_)
```

**Parameters:**

- `p_79846_` (`LootContext`)
- `p_79847_` (`Consumer<LootPoolEntry>`)

**Returns:** `private boolean`

### createItemStack

```java
public void createItemStack(Consumer<ItemStack> p_79869_, LootContext p_79870_)
```

**Parameters:**

- `p_79869_` (`Consumer<ItemStack>`)
- `p_79870_` (`LootContext`)

### expand

```java
public boolean expand(LootContext p_79861_, Consumer<LootPoolEntry> p_79862_)
```

**Parameters:**

- `p_79861_` (`LootContext`)
- `p_79862_` (`Consumer<LootPoolEntry>`)

**Returns:** `boolean`

### tagContents

```java
public static LootPoolSingletonContainer.Builder<?> tagContents(TagKey<Item> p_205085_)
```

**Parameters:**

- `p_205085_` (`TagKey<Item>`)

**Returns:** `public static LootPoolSingletonContainer.Builder<?>`

### expandTag

```java
public static LootPoolSingletonContainer.Builder<?> expandTag(TagKey<Item> p_205096_)
```

**Parameters:**

- `p_205096_` (`TagKey<Item>`)

**Returns:** `public static LootPoolSingletonContainer.Builder<?>`
