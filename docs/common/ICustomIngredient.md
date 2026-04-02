# ICustomIngredient

**Package:** `net.neoforged.neoforge.common.crafting`
**Type:** interface

## Description

Interface that modders can implement to create new behaviors for `Ingredient`s.


This is not directly implemented on vanilla `Ingredient`s, but conversions are possible:

`#toVanilla()` converts a custom ingredient to a vanilla `Ingredient`.
`Ingredient#getCustomIngredient()` retrieves the custom ingredient inside a vanilla `Ingredient`.



Implementations of this interface must implement `Object#equals` and `Object#hashCode`
to ensure that the ingredient also supports them.

## Methods

### test

```java
boolean test(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getItems

```java
Stream<ItemStack> getItems()
```

**Returns:** `Stream<ItemStack>`

### isSimple

```java
boolean isSimple()
```

**Returns:** `boolean`

### getType

```java
IngredientType<?> getType()
```

**Returns:** `IngredientType<?>`

### toVanilla

```java
.NonExtendable
    default Ingredient toVanilla()
```

**Returns:** `.NonExtendable
    default Ingredient`

### Ingredient

```java
return new Ingredient()
```

**Returns:** `return new`
