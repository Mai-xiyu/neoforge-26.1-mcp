# Equipable

**Package:** `net.minecraft.world.item`
**Type:** interface

## Methods

### getEquipmentSlot

```java
EquipmentSlot getEquipmentSlot()
```

**Returns:** `EquipmentSlot`

### getEquipSound

```java
default Holder<SoundEvent> getEquipSound()
```

**Returns:** `default Holder<SoundEvent>`

### swapWithEquipmentSlot

```java
default InteractionResultHolder<ItemStack> swapWithEquipmentSlot(Item p_270453_, Level p_270395_, Player p_270300_, InteractionHand p_270262_)
```

**Parameters:**

- `p_270453_` (`Item`)
- `p_270395_` (`Level`)
- `p_270300_` (`Player`)
- `p_270262_` (`InteractionHand`)

**Returns:** `default InteractionResultHolder<ItemStack>`

### get

```java
static Equipable get(ItemStack p_270317_)
```

**Parameters:**

- `p_270317_` (`ItemStack`)

**Returns:** `Equipable`
