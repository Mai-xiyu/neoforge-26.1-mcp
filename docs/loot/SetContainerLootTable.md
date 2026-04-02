# SetContainerLootTable

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetContainerLootTable>` |  |

## Methods

### SetContainerLootTable

```java
private SetContainerLootTable(List<LootItemCondition> p_298290_, ResourceKey<LootTable> p_335525_, long p_193047_, Holder<BlockEntityType<?>> p_298416_)
```

**Parameters:**

- `p_298290_` (`List<LootItemCondition>`)
- `p_335525_` (`ResourceKey<LootTable>`)
- `p_193047_` (`long`)
- `p_298416_` (`Holder<BlockEntityType<?>>`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetContainerLootTable> getType()
```

**Returns:** `LootItemFunctionType<SetContainerLootTable>`

### run

```java
public ItemStack run(ItemStack p_80967_, LootContext p_80968_)
```

**Parameters:**

- `p_80967_` (`ItemStack`)
- `p_80968_` (`LootContext`)

**Returns:** `ItemStack`

### validate

```java
public void validate(ValidationContext p_80970_)
```

**Parameters:**

- `p_80970_` (`ValidationContext`)

### withLootTable

```java
public static LootItemConditionalFunction.Builder<?> withLootTable(BlockEntityType<?> p_193050_, ResourceKey<LootTable> p_335933_)
```

**Parameters:**

- `p_193050_` (`BlockEntityType<?>`)
- `p_335933_` (`ResourceKey<LootTable>`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### withLootTable

```java
public static LootItemConditionalFunction.Builder<?> withLootTable(BlockEntityType<?> p_193053_, ResourceKey<LootTable> p_335427_, long p_193055_)
```

**Parameters:**

- `p_193053_` (`BlockEntityType<?>`)
- `p_335427_` (`ResourceKey<LootTable>`)
- `p_193055_` (`long`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`
