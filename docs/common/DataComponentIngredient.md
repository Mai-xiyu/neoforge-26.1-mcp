# DataComponentIngredient

**Package:** `net.neoforged.neoforge.common.crafting`
**Type:** class
**Implements:** `ICustomIngredient`

## Description

Ingredient that matches the given items, performing either a `DataComponentIngredient#isStrict() strict` or a partial NBT test.



Strict NBT ingredients will only match items that have exactly the provided tag, while partial ones will
match if the item's tags contain all of the elements of the provided one, while allowing for additional elements to exist.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DataComponentIngredient>` |  |

## Methods

### DataComponentIngredient

```java
public DataComponentIngredient(HolderSet<Item> items, DataComponentPredicate components, boolean strict)
```

**Parameters:**

- `items` (`HolderSet<Item>`)
- `components` (`DataComponentPredicate`)
- `strict` (`boolean`)

**Returns:** `public`

### test

```java
public boolean test(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

**Returns:** `boolean`

### getItems

```java
public Stream<ItemStack> getItems()
```

**Returns:** `Stream<ItemStack>`

### isSimple

```java
public boolean isSimple()
```

**Returns:** `boolean`

### getType

```java
public IngredientType<?> getType()
```

**Returns:** `IngredientType<?>`

### items

```java
public HolderSet<Item> items()
```

**Returns:** `public HolderSet<Item>`

### components

```java
public DataComponentPredicate components()
```

**Returns:** `public DataComponentPredicate`

### isStrict

```java
public boolean isStrict()
```

**Returns:** `public boolean`

### of

```java
public static Ingredient of(boolean strict, ItemStack stack)
```

**Parameters:**

- `strict` (`boolean`)
- `stack` (`ItemStack`)

**Returns:** `Ingredient`

### of

```java
public static <T> Ingredient of(boolean strict, DataComponentType<? super T> type, T value, ItemLike[]... items)
```

**Parameters:**

- `strict` (`boolean`)
- `type` (`DataComponentType<? super T>`)
- `value` (`T`)
- `items` (`ItemLike[]...`)

**Returns:** `Ingredient`

### of

```java
public static <T> Ingredient of(boolean strict, Supplier<? extends DataComponentType<? super T>> type, T value, ItemLike[]... items)
```

**Parameters:**

- `strict` (`boolean`)
- `type` (`Supplier<? extends DataComponentType<? super T>>`)
- `value` (`T`)
- `items` (`ItemLike[]...`)

**Returns:** `Ingredient`

### of

```java
public static Ingredient of(boolean strict, DataComponentMap map, ItemLike[]... items)
```

**Parameters:**

- `strict` (`boolean`)
- `map` (`DataComponentMap`)
- `items` (`ItemLike[]...`)

**Returns:** `Ingredient`

### of

```java
public static Ingredient of(boolean strict, DataComponentMap map, Holder<Item>[]... items)
```

**Parameters:**

- `strict` (`boolean`)
- `map` (`DataComponentMap`)
- `items` (`Holder<Item>[]...`)

**Returns:** `Ingredient`

### of

```java
public static Ingredient of(boolean strict, DataComponentMap map, HolderSet<Item> items)
```

**Parameters:**

- `strict` (`boolean`)
- `map` (`DataComponentMap`)
- `items` (`HolderSet<Item>`)

**Returns:** `Ingredient`

### of

```java
public static Ingredient of(boolean strict, DataComponentPredicate predicate, Holder<Item>[]... items)
```

**Parameters:**

- `strict` (`boolean`)
- `predicate` (`DataComponentPredicate`)
- `items` (`Holder<Item>[]...`)

**Returns:** `Ingredient`

### of

```java
public static Ingredient of(boolean strict, DataComponentPredicate predicate, ItemLike[]... items)
```

**Parameters:**

- `strict` (`boolean`)
- `predicate` (`DataComponentPredicate`)
- `items` (`ItemLike[]...`)

**Returns:** `Ingredient`

### of

```java
public static Ingredient of(boolean strict, DataComponentPredicate predicate, HolderSet<Item> items)
```

**Parameters:**

- `strict` (`boolean`)
- `predicate` (`DataComponentPredicate`)
- `items` (`HolderSet<Item>`)

**Returns:** `Ingredient`
