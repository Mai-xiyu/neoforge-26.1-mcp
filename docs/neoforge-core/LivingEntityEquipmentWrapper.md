# LivingEntityEquipmentWrapper

**Package:** `net.neoforged.neoforge.transfer.item`
**Type:** class

## Description

Exposes the armor or hands inventory of an `LivingEntity` as a `ResourceHandler<ItemResource>`
using `LivingEntity#getItemBySlot(EquipmentSlot)` and `LivingEntity#setItemSlot(EquipmentSlot, ItemStack)`.
@see PlayerInventoryWrapper

## Methods

### IllegalArgumentException

```java
> throw new IllegalArgumentException("Wrapping the equipment type " + equipmentType + " of a player is not supported.")
```

**Parameters:**

- `supported."` (`"Wrapping the equipment type " + equipmentType + " of a player is not`)

**Returns:** `> throw new`

### internalOf

```java
Only expose a ResourceHandler in this method.
        return internalOf()
```

**Returns:** `Only expose a ResourceHandler in this method.
        return`

### of

```java
public static ResourceHandler<ItemResource> of(LivingEntity entity, EquipmentSlot equipmentSlot)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `equipmentSlot` (`EquipmentSlot`)

**Returns:** `ResourceHandler<ItemResource>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Wrapping the equipment slot " + equipmentSlot + " of a player is not supported.")
```

**Parameters:**

- `supported."` (`"Wrapping the equipment slot " + equipmentSlot + " of a player is not`)

**Returns:** `throw new`

### internalOf

```java
private static EquipmentTypeWrapper internalOf(LivingEntity entity, EquipmentSlot.Type equipmentType)
```

**Parameters:**

- `entity` (`LivingEntity`)
- `equipmentType` (`EquipmentSlot.Type`)

**Returns:** `private static EquipmentTypeWrapper`

### LivingEntityEquipmentWrapper

```java
private LivingEntityEquipmentWrapper(LivingEntity entity)
```

**Parameters:**

- `entity` (`LivingEntity`)

**Returns:** `private`

### EquipmentTypeWrapper

```java
 EquipmentTypeWrapper(SlotWrapper[]... handlers)
```

**Parameters:**

- `handlers` (`SlotWrapper[]...`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### getSlotWrapper

```java
SlotWrapper getSlotWrapper(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `SlotWrapper`

### SlotWrapper

```java
private SlotWrapper(EquipmentSlot slot)
```

**Parameters:**

- `slot` (`EquipmentSlot`)

**Returns:** `private`

### getStack

```java
protected ItemStack getStack()
```

**Returns:** `ItemStack`

### setStack

```java
protected void setStack(ItemStack stack)
```

**Parameters:**

- `stack` (`ItemStack`)

### isValid

```java
protected boolean isValid(ItemResource resource)
```

**Parameters:**

- `resource` (`ItemResource`)

**Returns:** `boolean`

### getCapacity

```java
protected int getCapacity(ItemResource resource)
```

**Parameters:**

- `resource` (`ItemResource`)

**Returns:** `int`

### onRootCommit

```java
protected void onRootCommit(ItemStack originalState)
```

**Parameters:**

- `originalState` (`ItemStack`)

### toString

```java
public String toString()
```

**Returns:** `String`
