# DynamicLoot

**Package:** `net.minecraft.world.level.storage.loot.entries`
**Type:** class
**Extends:** `LootPoolSingletonContainer`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DynamicLoot>` |  |

## Methods

### DynamicLoot

```java
private DynamicLoot(ResourceLocation p_79465_, int p_79466_, int p_79467_, List<LootItemCondition> p_299033_, List<LootItemFunction> p_298474_)
```

**Parameters:**

- `p_79465_` (`ResourceLocation`)
- `p_79466_` (`int`)
- `p_79467_` (`int`)
- `p_299033_` (`List<LootItemCondition>`)
- `p_298474_` (`List<LootItemFunction>`)

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
public void createItemStack(Consumer<ItemStack> p_79481_, LootContext p_79482_)
```

**Parameters:**

- `p_79481_` (`Consumer<ItemStack>`)
- `p_79482_` (`LootContext`)

### dynamicEntry

```java
public static LootPoolSingletonContainer.Builder<?> dynamicEntry(ResourceLocation p_79484_)
```

**Parameters:**

- `p_79484_` (`ResourceLocation`)

**Returns:** `public static LootPoolSingletonContainer.Builder<?>`
