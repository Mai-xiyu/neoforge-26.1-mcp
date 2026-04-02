# ElytraItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `Equipable`

## Methods

### ElytraItem

```java
public ElytraItem(Item.Properties p_41132_)
```

**Parameters:**

- `p_41132_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isFlyEnabled

```java
public static boolean isFlyEnabled(ItemStack p_41141_)
```

**Parameters:**

- `p_41141_` (`ItemStack`)

**Returns:** `public static boolean`

### isValidRepairItem

```java
public boolean isValidRepairItem(ItemStack p_41134_, ItemStack p_41135_)
```

**Parameters:**

- `p_41134_` (`ItemStack`)
- `p_41135_` (`ItemStack`)

**Returns:** `boolean`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_41137_, Player p_41138_, InteractionHand p_41139_)
```

**Parameters:**

- `p_41137_` (`Level`)
- `p_41138_` (`Player`)
- `p_41139_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### canElytraFly

```java
public boolean canElytraFly(ItemStack stack, net.minecraft.world.entity.LivingEntity entity)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`net.minecraft.world.entity.LivingEntity`)

**Returns:** `boolean`

### elytraFlightTick

```java
public boolean elytraFlightTick(ItemStack stack, net.minecraft.world.entity.LivingEntity entity, int flightTicks)
```

**Parameters:**

- `stack` (`ItemStack`)
- `entity` (`net.minecraft.world.entity.LivingEntity`)
- `flightTicks` (`int`)

**Returns:** `boolean`

### getEquipSound

```java
public Holder<SoundEvent> getEquipSound()
```

**Returns:** `Holder<SoundEvent>`

### getEquipmentSlot

```java
public EquipmentSlot getEquipmentSlot()
```

**Returns:** `EquipmentSlot`
