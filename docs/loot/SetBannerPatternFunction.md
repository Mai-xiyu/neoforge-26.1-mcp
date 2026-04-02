# SetBannerPatternFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetBannerPatternFunction>` |  |

## Methods

### SetBannerPatternFunction

```java
 SetBannerPatternFunction(List<LootItemCondition> p_165276_, BannerPatternLayers p_331947_, boolean p_165277_)
```

**Parameters:**

- `p_165276_` (`List<LootItemCondition>`)
- `p_331947_` (`BannerPatternLayers`)
- `p_165277_` (`boolean`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### run

```java
protected ItemStack run(ItemStack p_165280_, LootContext p_165281_)
```

**Parameters:**

- `p_165280_` (`ItemStack`)
- `p_165281_` (`LootContext`)

**Returns:** `ItemStack`

### getType

```java
public LootItemFunctionType<SetBannerPatternFunction> getType()
```

**Returns:** `LootItemFunctionType<SetBannerPatternFunction>`

### setBannerPattern

```java
public static SetBannerPatternFunction.Builder setBannerPattern(boolean p_165283_)
```

**Parameters:**

- `p_165283_` (`boolean`)

**Returns:** `public static SetBannerPatternFunction.Builder`

### Builder

```java
 Builder(boolean p_165287_)
```

**Parameters:**

- `p_165287_` (`boolean`)

**Returns:** ``

### getThis

```java
protected SetBannerPatternFunction.Builder getThis()
```

**Returns:** `protected SetBannerPatternFunction.Builder`

### build

```java
public LootItemFunction build()
```

**Returns:** `LootItemFunction`

### addPattern

```java
public SetBannerPatternFunction.Builder addPattern(Holder<BannerPattern> p_230999_, DyeColor p_231000_)
```

**Parameters:**

- `p_230999_` (`Holder<BannerPattern>`)
- `p_231000_` (`DyeColor`)

**Returns:** `public SetBannerPatternFunction.Builder`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
