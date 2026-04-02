# EquipmentUser

**Package:** `net.minecraft.world.entity`
**Type:** interface

## Methods

### setItemSlot

```java
void setItemSlot(EquipmentSlot p_338576_, ItemStack p_338519_)
```

**Parameters:**

- `p_338576_` (`EquipmentSlot`)
- `p_338519_` (`ItemStack`)

### getItemBySlot

```java
ItemStack getItemBySlot(EquipmentSlot p_338597_)
```

**Parameters:**

- `p_338597_` (`EquipmentSlot`)

**Returns:** `ItemStack`

### setDropChance

```java
void setDropChance(EquipmentSlot p_338643_, float p_338569_)
```

**Parameters:**

- `p_338643_` (`EquipmentSlot`)
- `p_338569_` (`float`)

### equip

```java
default void equip(EquipmentTable p_340994_, LootParams p_338408_)
```

**Parameters:**

- `p_340994_` (`EquipmentTable`)
- `p_338408_` (`LootParams`)

**Returns:** `default void`

### equip

```java
default void equip(ResourceKey<LootTable> p_341330_, LootParams p_340863_, Map<EquipmentSlot, Float> p_341011_)
```

**Parameters:**

- `p_341330_` (`ResourceKey<LootTable>`)
- `p_340863_` (`LootParams`)
- `p_341011_` (`Map<EquipmentSlot, Float>`)

**Returns:** `default void`

### equip

```java
default void equip(ResourceKey<LootTable> p_340873_, LootParams p_338202_, long p_341024_, Map<EquipmentSlot, Float> p_341367_)
```

**Parameters:**

- `p_340873_` (`ResourceKey<LootTable>`)
- `p_338202_` (`LootParams`)
- `p_341024_` (`long`)
- `p_341367_` (`Map<EquipmentSlot, Float>`)

**Returns:** `default void`

### resolveSlot

```java
default EquipmentSlot resolveSlot(ItemStack p_338225_, List<EquipmentSlot> p_338547_)
```

**Parameters:**

- `p_338225_` (`ItemStack`)
- `p_338547_` (`List<EquipmentSlot>`)

**Returns:** `EquipmentSlot`
