# ToggleTooltips

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ToggleTooltips>` |  |

## Methods

### ToggleTooltips

```java
public ToggleTooltips(List<LootItemCondition> p_335479_, Map<ToggleTooltips.ComponentToggle<?>, Boolean> p_336164_)
```

**Parameters:**

- `p_335479_` (`List<LootItemCondition>`)
- `p_336164_` (`Map<ToggleTooltips.ComponentToggle<?>, Boolean>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### run

```java
protected ItemStack run(ItemStack p_335844_, LootContext p_335764_)
```

**Parameters:**

- `p_335844_` (`ItemStack`)
- `p_335764_` (`LootContext`)

**Returns:** `ItemStack`

### getType

```java
public LootItemFunctionType<ToggleTooltips> getType()
```

**Returns:** `LootItemFunctionType<ToggleTooltips>`

### applyIfPresent

```java
public void applyIfPresent(ItemStack p_335390_, boolean p_335686_)
```

**Parameters:**

- `p_335390_` (`ItemStack`)
- `p_335686_` (`boolean`)

**Returns:** `public void`

### withTooltip

```java
T withTooltip(T p_335804_, boolean p_335957_)
```

**Parameters:**

- `p_335804_` (`T`)
- `p_335957_` (`boolean`)

**Returns:** `T`
