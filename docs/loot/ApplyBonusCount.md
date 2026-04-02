# ApplyBonusCount

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<ApplyBonusCount>` |  |
| `TYPE` | `ApplyBonusCount.FormulaType` |  |

## Methods

### ApplyBonusCount

```java
private ApplyBonusCount(List<LootItemCondition> p_298532_, Holder<Enchantment> p_298797_, ApplyBonusCount.Formula p_79905_)
```

**Parameters:**

- `p_298532_` (`List<LootItemCondition>`)
- `p_298797_` (`Holder<Enchantment>`)
- `p_79905_` (`ApplyBonusCount.Formula`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public LootItemFunctionType<ApplyBonusCount> getType()
```

**Returns:** `LootItemFunctionType<ApplyBonusCount>`

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### run

```java
public ItemStack run(ItemStack p_79913_, LootContext p_79914_)
```

**Parameters:**

- `p_79913_` (`ItemStack`)
- `p_79914_` (`LootContext`)

**Returns:** `ItemStack`

### addBonusBinomialDistributionCount

```java
public static LootItemConditionalFunction.Builder<?> addBonusBinomialDistributionCount(Holder<Enchantment> p_345484_, float p_79919_, int p_79920_)
```

**Parameters:**

- `p_345484_` (`Holder<Enchantment>`)
- `p_79919_` (`float`)
- `p_79920_` (`int`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### addOreBonusCount

```java
public static LootItemConditionalFunction.Builder<?> addOreBonusCount(Holder<Enchantment> p_344867_)
```

**Parameters:**

- `p_344867_` (`Holder<Enchantment>`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### addUniformBonusCount

```java
public static LootItemConditionalFunction.Builder<?> addUniformBonusCount(Holder<Enchantment> p_345095_)
```

**Parameters:**

- `p_345095_` (`Holder<Enchantment>`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### addUniformBonusCount

```java
public static LootItemConditionalFunction.Builder<?> addUniformBonusCount(Holder<Enchantment> p_344758_, int p_79923_)
```

**Parameters:**

- `p_344758_` (`Holder<Enchantment>`)
- `p_79923_` (`int`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`

### calculateNewCount

```java
public int calculateNewCount(RandomSource p_230965_, int p_230966_, int p_230967_)
```

**Parameters:**

- `p_230965_` (`RandomSource`)
- `p_230966_` (`int`)
- `p_230967_` (`int`)

**Returns:** `int`

### getType

```java
public ApplyBonusCount.FormulaType getType()
```

**Returns:** `ApplyBonusCount.FormulaType`

### calculateNewCount

```java
int calculateNewCount(RandomSource p_230968_, int p_230969_, int p_230970_)
```

**Parameters:**

- `p_230968_` (`RandomSource`)
- `p_230969_` (`int`)
- `p_230970_` (`int`)

**Returns:** `int`

### getType

```java
ApplyBonusCount.FormulaType getType()
```

**Returns:** `ApplyBonusCount.FormulaType`

### FormulaType

```java
static record FormulaType(ResourceLocation id, Codec<? extends ApplyBonusCount.Formula> codec)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `codec` (`Codec<? extends ApplyBonusCount.Formula>`)

**Returns:** `static record`

### calculateNewCount

```java
public int calculateNewCount(RandomSource p_230972_, int p_230973_, int p_230974_)
```

**Parameters:**

- `p_230972_` (`RandomSource`)
- `p_230973_` (`int`)
- `p_230974_` (`int`)

**Returns:** `int`

### getType

```java
public ApplyBonusCount.FormulaType getType()
```

**Returns:** `ApplyBonusCount.FormulaType`

### calculateNewCount

```java
public int calculateNewCount(RandomSource p_230976_, int p_230977_, int p_230978_)
```

**Parameters:**

- `p_230976_` (`RandomSource`)
- `p_230977_` (`int`)
- `p_230978_` (`int`)

**Returns:** `int`

### getType

```java
public ApplyBonusCount.FormulaType getType()
```

**Returns:** `ApplyBonusCount.FormulaType`
