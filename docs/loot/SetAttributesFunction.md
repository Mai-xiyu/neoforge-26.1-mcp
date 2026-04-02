# SetAttributesFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetAttributesFunction>` |  |

## Methods

### SetAttributesFunction

```java
 SetAttributesFunction(List<LootItemCondition> p_80834_, List<SetAttributesFunction.Modifier> p_298646_, boolean p_339689_)
```

**Parameters:**

- `p_80834_` (`List<LootItemCondition>`)
- `p_298646_` (`List<SetAttributesFunction.Modifier>`)
- `p_339689_` (`boolean`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetAttributesFunction> getType()
```

**Returns:** `LootItemFunctionType<SetAttributesFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_80840_, LootContext p_80841_)
```

**Parameters:**

- `p_80840_` (`ItemStack`)
- `p_80841_` (`LootContext`)

**Returns:** `ItemStack`

### updateModifiers

```java
private ItemAttributeModifiers updateModifiers(LootContext p_339627_, ItemAttributeModifiers p_339590_)
```

**Parameters:**

- `p_339627_` (`LootContext`)
- `p_339590_` (`ItemAttributeModifiers`)

**Returns:** `private ItemAttributeModifiers`

### modifier

```java
public static SetAttributesFunction.ModifierBuilder modifier(ResourceLocation p_350454_, Holder<Attribute> p_298306_, AttributeModifier.Operation p_165238_, NumberProvider p_165239_)
```

**Parameters:**

- `p_350454_` (`ResourceLocation`)
- `p_298306_` (`Holder<Attribute>`)
- `p_165238_` (`AttributeModifier.Operation`)
- `p_165239_` (`NumberProvider`)

**Returns:** `public static SetAttributesFunction.ModifierBuilder`

### setAttributes

```java
public static SetAttributesFunction.Builder setAttributes()
```

**Returns:** `public static SetAttributesFunction.Builder`

### Builder

```java
public Builder(boolean p_339611_)
```

**Parameters:**

- `p_339611_` (`boolean`)

**Returns:** `public`

### Builder

```java
public Builder()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getThis

```java
protected SetAttributesFunction.Builder getThis()
```

**Returns:** `protected SetAttributesFunction.Builder`

### withModifier

```java
public SetAttributesFunction.Builder withModifier(SetAttributesFunction.ModifierBuilder p_165246_)
```

**Parameters:**

- `p_165246_` (`SetAttributesFunction.ModifierBuilder`)

**Returns:** `public SetAttributesFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

### Modifier

```java
static record Modifier(ResourceLocation id, Holder<Attribute> attribute, AttributeModifier.Operation operation, NumberProvider amount, List<EquipmentSlotGroup> slots)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `attribute` (`Holder<Attribute>`)
- `operation` (`AttributeModifier.Operation`)
- `amount` (`NumberProvider`)
- `slots` (`List<EquipmentSlotGroup>`)

**Returns:** `static record`

### ModifierBuilder

```java
public ModifierBuilder(ResourceLocation p_350927_, Holder<Attribute> p_298853_, AttributeModifier.Operation p_165265_, NumberProvider p_165266_)
```

**Parameters:**

- `p_350927_` (`ResourceLocation`)
- `p_298853_` (`Holder<Attribute>`)
- `p_165265_` (`AttributeModifier.Operation`)
- `p_165266_` (`NumberProvider`)

**Returns:** `public`

### forSlot

```java
public SetAttributesFunction.ModifierBuilder forSlot(EquipmentSlotGroup p_332133_)
```

**Parameters:**

- `p_332133_` (`EquipmentSlotGroup`)

**Returns:** `public SetAttributesFunction.ModifierBuilder`

### build

```java
public SetAttributesFunction.Modifier build()
```

**Returns:** `public SetAttributesFunction.Modifier`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `ModifierBuilder` | class |  |
