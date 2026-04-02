# SingleComponentItemPredicate

**Package:** `net.minecraft.advancements.critereon`
**Type:** interface<T>
**Extends:** `ItemSubPredicate`

## Methods

### matches

```java
default boolean matches(ItemStack p_333958_)
```

**Parameters:**

- `p_333958_` (`ItemStack`)

**Returns:** `boolean`

### componentType

```java
DataComponentType<T> componentType()
```

**Returns:** `DataComponentType<T>`

### matches

```java
boolean matches(ItemStack p_333980_, T p_334084_)
```

**Parameters:**

- `p_333980_` (`ItemStack`)
- `p_334084_` (`T`)

**Returns:** `boolean`
