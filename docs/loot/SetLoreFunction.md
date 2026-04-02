# SetLoreFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetLoreFunction>` |  |

## Methods

### SetLoreFunction

```java
public SetLoreFunction(List<LootItemCondition> p_81085_, List<Component> p_298633_, ListOperation p_335651_, Optional<LootContext.EntityTarget> p_298623_)
```

**Parameters:**

- `p_81085_` (`List<LootItemCondition>`)
- `p_298633_` (`List<Component>`)
- `p_335651_` (`ListOperation`)
- `p_298623_` (`Optional<LootContext.EntityTarget>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<SetLoreFunction> getType()
```

**Returns:** `LootItemFunctionType<SetLoreFunction>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_81089_, LootContext p_81090_)
```

**Parameters:**

- `p_81089_` (`ItemStack`)
- `p_81090_` (`LootContext`)

**Returns:** `ItemStack`

### updateLore

```java
private List<Component> updateLore(ItemLore p_330567_, LootContext p_331214_)
```

**Parameters:**

- `p_330567_` (`ItemLore`)
- `p_331214_` (`LootContext`)

**Returns:** `private List<Component>`

### setLore

```java
public static SetLoreFunction.Builder setLore()
```

**Returns:** `public static SetLoreFunction.Builder`

### setMode

```java
public SetLoreFunction.Builder setMode(ListOperation p_335681_)
```

**Parameters:**

- `p_335681_` (`ListOperation`)

**Returns:** `public SetLoreFunction.Builder`

### setResolutionContext

```java
public SetLoreFunction.Builder setResolutionContext(LootContext.EntityTarget p_165450_)
```

**Parameters:**

- `p_165450_` (`LootContext.EntityTarget`)

**Returns:** `public SetLoreFunction.Builder`

### addLine

```java
public SetLoreFunction.Builder addLine(Component p_165452_)
```

**Parameters:**

- `p_165452_` (`Component`)

**Returns:** `public SetLoreFunction.Builder`

### getThis

```java
protected SetLoreFunction.Builder getThis()
```

**Returns:** `protected SetLoreFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
