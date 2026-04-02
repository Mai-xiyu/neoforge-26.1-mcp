# ModifyContainerContents

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ModifyContainerContents>` |  |

## Methods

### ModifyContainerContents

```java
public ModifyContainerContents(List<LootItemCondition> p_340981_, ContainerComponentManipulator<?> p_341205_, LootItemFunction p_341360_)
```

**Parameters:**

- `p_340981_` (`List<LootItemCondition>`)
- `p_341205_` (`ContainerComponentManipulator<?>`)
- `p_341360_` (`LootItemFunction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<ModifyContainerContents> getType()
```

**Returns:** `LootItemFunctionType<ModifyContainerContents>`

### run

```java
public ItemStack run(ItemStack p_341267_, LootContext p_341214_)
```

**Parameters:**

- `p_341267_` (`ItemStack`)
- `p_341214_` (`LootContext`)

**Returns:** `ItemStack`

### validate

```java
public void validate(ValidationContext p_341371_)
```

**Parameters:**

- `p_341371_` (`ValidationContext`)
