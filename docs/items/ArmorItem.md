# ArmorItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `Equipable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DISPENSE_ITEM_BEHAVIOR` | `DispenseItemBehavior` |  |
| `type` | `ArmorItem.Type` |  |
| `material` | `Holder<ArmorMaterial>` |  |

## Methods

### execute

```java
protected ItemStack execute(BlockSource p_302434_, ItemStack p_40409_)
```

**Parameters:**

- `p_302434_` (`BlockSource`)
- `p_40409_` (`ItemStack`)

**Returns:** `ItemStack`

### dispenseArmor

```java
public static boolean dispenseArmor(BlockSource p_302421_, ItemStack p_40400_)
```

**Parameters:**

- `p_302421_` (`BlockSource`)
- `p_40400_` (`ItemStack`)

**Returns:** `public static boolean`

### ArmorItem

```java
public ArmorItem(Holder<ArmorMaterial> p_323783_, ArmorItem.Type p_266831_, Item.Properties p_40388_)
```

**Parameters:**

- `p_323783_` (`Holder<ArmorMaterial>`)
- `p_266831_` (`ArmorItem.Type`)
- `p_40388_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
public ArmorItem.Type getType()
```

**Returns:** `public ArmorItem.Type`

### getEnchantmentValue

```java
public int getEnchantmentValue()
```

**Returns:** `int`

### getMaterial

```java
public Holder<ArmorMaterial> getMaterial()
```

**Returns:** `public Holder<ArmorMaterial>`

### isValidRepairItem

```java
public boolean isValidRepairItem(ItemStack p_40392_, ItemStack p_40393_)
```

**Parameters:**

- `p_40392_` (`ItemStack`)
- `p_40393_` (`ItemStack`)

**Returns:** `boolean`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_40395_, Player p_40396_, InteractionHand p_40397_)
```

**Parameters:**

- `p_40395_` (`Level`)
- `p_40396_` (`Player`)
- `p_40397_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### getDefaultAttributeModifiers

```java
public ItemAttributeModifiers getDefaultAttributeModifiers()
```

**Returns:** `ItemAttributeModifiers`

### getDefense

```java
public int getDefense()
```

**Returns:** `public int`

### getToughness

```java
public float getToughness()
```

**Returns:** `public float`

### getEquipmentSlot

```java
public EquipmentSlot getEquipmentSlot()
```

**Returns:** `EquipmentSlot`

### getEquipSound

```java
public Holder<SoundEvent> getEquipSound()
```

**Returns:** `Holder<SoundEvent>`

### BODY

```java
, BODY()
```

**Returns:** `,`

### Type

```java
private Type(EquipmentSlot p_266754_, int p_332191_, String p_266886_)
```

**Parameters:**

- `p_266754_` (`EquipmentSlot`)
- `p_332191_` (`int`)
- `p_266886_` (`String`)

**Returns:** `private`

### getDurability

```java
public int getDurability(int p_323808_)
```

**Parameters:**

- `p_323808_` (`int`)

**Returns:** `public int`

### getSlot

```java
public EquipmentSlot getSlot()
```

**Returns:** `public EquipmentSlot`

### getName

```java
public String getName()
```

**Returns:** `public String`

### hasTrims

```java
public boolean hasTrims()
```

**Returns:** `public boolean`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
