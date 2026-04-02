# SimpleTier

**Package:** `net.neoforged.neoforge.common`
**Type:** class
**Implements:** `Tier`

## Description

Helper class to define a custom tier

## Methods

### SimpleTier

```java
public SimpleTier(TagKey<Block> incorrectBlocksForDrops, int uses, float speed, float attackDamageBonus, int enchantmentValue, Supplier<Ingredient> repairIngredient)
```

**Parameters:**

- `incorrectBlocksForDrops` (`TagKey<Block>`)
- `uses` (`int`)
- `speed` (`float`)
- `attackDamageBonus` (`float`)
- `enchantmentValue` (`int`)
- `repairIngredient` (`Supplier<Ingredient>`)

**Returns:** `public`

### getUses

```java
public int getUses()
```

**Returns:** `int`

### getSpeed

```java
public float getSpeed()
```

**Returns:** `float`

### getAttackDamageBonus

```java
public float getAttackDamageBonus()
```

**Returns:** `float`

### getIncorrectBlocksForDrops

```java
public TagKey<Block> getIncorrectBlocksForDrops()
```

**Returns:** `TagKey<Block>`

### getEnchantmentValue

```java
public int getEnchantmentValue()
```

**Returns:** `int`

### getRepairIngredient

```java
public Ingredient getRepairIngredient()
```

**Returns:** `Ingredient`

### toString

```java
public String toString()
```

**Returns:** `String`
