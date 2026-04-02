# SetContainerContents

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetContainerContents>` |  |

## Methods

### SetContainerContents

```java
 SetContainerContents(List<LootItemCondition> p_193035_, ContainerComponentManipulator<?> p_340836_, List<LootPoolEntryContainer> p_298300_)
```

**Parameters:**

- `p_193035_` (`List<LootItemCondition>`)
- `p_340836_` (`ContainerComponentManipulator<?>`)
- `p_298300_` (`List<LootPoolEntryContainer>`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetContainerContents> getType()
```

**Returns:** `LootItemFunctionType<SetContainerContents>`

### run

```java
public ItemStack run(ItemStack p_80911_, LootContext p_80912_)
```

**Parameters:**

- `p_80911_` (`ItemStack`)
- `p_80912_` (`LootContext`)

**Returns:** `ItemStack`

### validate

```java
public void validate(ValidationContext p_80918_)
```

**Parameters:**

- `p_80918_` (`ValidationContext`)

### setContents

```java
public static SetContainerContents.Builder setContents(ContainerComponentManipulator<?> p_341284_)
```

**Parameters:**

- `p_341284_` (`ContainerComponentManipulator<?>`)

**Returns:** `public static SetContainerContents.Builder`

### Builder

```java
public Builder(ContainerComponentManipulator<?> p_341204_)
```

**Parameters:**

- `p_341204_` (`ContainerComponentManipulator<?>`)

**Returns:** `public`

### getThis

```java
protected SetContainerContents.Builder getThis()
```

**Returns:** `protected SetContainerContents.Builder`

### withEntry

```java
public SetContainerContents.Builder withEntry(LootPoolEntryContainer.Builder<?> p_80931_)
```

**Parameters:**

- `p_80931_` (`LootPoolEntryContainer.Builder<?>`)

**Returns:** `public SetContainerContents.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
