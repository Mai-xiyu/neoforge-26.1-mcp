# AddTableLootModifier

**Package:** `net.neoforged.neoforge.common.loot`
**Type:** class
**Extends:** `LootModifier`

## Description



Loot modifier that rolls one loot table (the "subtable" and adds the results to the loot being modified (the "target table").
Loot modifiers are not rolled for the subtable, as that could result in the subtables'
items being modified twice (by downstream loot modifiers modifying the target table).


 Json format:

{
"type": "neoforge:add_table",
"conditions": [], // conditions block to predicate target tables by
"table": "namespace:loot_table_id" // subtable to roll loot for to add to the target table(s)
}



## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AddTableLootModifier>` | <p>Loot modifier that rolls one loot table (the "subtable" and adds the results to the loot being modified (the "target table"). |

## Methods

### AddTableLootModifier

```java
public AddTableLootModifier(LootItemCondition[] conditionsIn, ResourceKey<LootTable> table)
```

**Parameters:**

- `conditionsIn` (`LootItemCondition[]`)
- `table` (`ResourceKey<LootTable>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### table

```java
public ResourceKey<LootTable> table()
```

**Returns:** `public ResourceKey<LootTable>`

### doApply

```java
protected ObjectArrayList<ItemStack> doApply(ObjectArrayList<ItemStack> generatedLoot, LootContext context)
```

**Parameters:**

- `generatedLoot` (`ObjectArrayList<ItemStack>`)
- `context` (`LootContext`)

**Returns:** `ObjectArrayList<ItemStack>`

### codec

```java
public MapCodec<? extends IGlobalLootModifier> codec()
```

**Returns:** `MapCodec<? extends IGlobalLootModifier>`
