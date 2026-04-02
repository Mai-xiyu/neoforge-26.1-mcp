# SlotAccess

**Package:** `net.minecraft.world.entity`
**Type:** interface

## Methods

### get

```java
public ItemStack get()
```

**Returns:** `ItemStack`

### set

```java
public boolean set(ItemStack p_147314_)
```

**Parameters:**

- `p_147314_` (`ItemStack`)

**Returns:** `boolean`

### of

```java
static SlotAccess of(Supplier<ItemStack> p_340997_, Consumer<ItemStack> p_341182_)
```

**Parameters:**

- `p_340997_` (`Supplier<ItemStack>`)
- `p_341182_` (`Consumer<ItemStack>`)

**Returns:** `static SlotAccess`

### SlotAccess

```java
return new SlotAccess()
```

**Returns:** `return new`

### get

```java
public ItemStack get()
```

**Returns:** `ItemStack`

### set

```java
public boolean set(ItemStack p_147324_)
```

**Parameters:**

- `p_147324_` (`ItemStack`)

**Returns:** `boolean`

### forContainer

```java
static SlotAccess forContainer(Container p_147296_, int p_147297_, Predicate<ItemStack> p_147298_)
```

**Parameters:**

- `p_147296_` (`Container`)
- `p_147297_` (`int`)
- `p_147298_` (`Predicate<ItemStack>`)

**Returns:** `static SlotAccess`

### SlotAccess

```java
return new SlotAccess()
```

**Returns:** `return new`

### get

```java
public ItemStack get()
```

**Returns:** `ItemStack`

### set

```java
public boolean set(ItemStack p_147334_)
```

**Parameters:**

- `p_147334_` (`ItemStack`)

**Returns:** `boolean`

### forContainer

```java
static SlotAccess forContainer(Container p_147293_, int p_147294_)
```

**Parameters:**

- `p_147293_` (`Container`)
- `p_147294_` (`int`)

**Returns:** `static SlotAccess`

### forContainer

```java
return forContainer(p_147310_ -> true)
```

**Parameters:**

- `true` (`p_147310_ ->`)

**Returns:** `return`

### forEquipmentSlot

```java
static SlotAccess forEquipmentSlot(LivingEntity p_147303_, EquipmentSlot p_147304_, Predicate<ItemStack> p_147305_)
```

**Parameters:**

- `p_147303_` (`LivingEntity`)
- `p_147304_` (`EquipmentSlot`)
- `p_147305_` (`Predicate<ItemStack>`)

**Returns:** `static SlotAccess`

### SlotAccess

```java
return new SlotAccess()
```

**Returns:** `return new`

### get

```java
public ItemStack get()
```

**Returns:** `ItemStack`

### set

```java
public boolean set(ItemStack p_341038_)
```

**Parameters:**

- `p_341038_` (`ItemStack`)

**Returns:** `boolean`

### forEquipmentSlot

```java
static SlotAccess forEquipmentSlot(LivingEntity p_147300_, EquipmentSlot p_147301_)
```

**Parameters:**

- `p_147300_` (`LivingEntity`)
- `p_147301_` (`EquipmentSlot`)

**Returns:** `static SlotAccess`

### forEquipmentSlot

```java
return forEquipmentSlot(p_147308_ -> true)
```

**Parameters:**

- `true` (`p_147308_ ->`)

**Returns:** `return`

### get

```java
ItemStack get()
```

**Returns:** `ItemStack`

### set

```java
boolean set(ItemStack p_147306_)
```

**Parameters:**

- `p_147306_` (`ItemStack`)

**Returns:** `boolean`
