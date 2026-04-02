# SwordItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `TieredItem`

## Methods

### SwordItem

```java
public SwordItem(Tier p_43269_, Item.Properties p_43272_)
```

**Parameters:**

- `p_43269_` (`Tier`)
- `p_43272_` (`Item.Properties`)

**Returns:** `public`

### SwordItem

```java
public public SwordItem(Tier tier, Item.Properties properties, Tool toolComponentData)
```

**Parameters:**

- `tier` (`Tier`)
- `properties` (`Item.Properties`)
- `toolComponentData` (`Tool`)

**Returns:** `public`

### createToolProperties

```java
public static Tool createToolProperties()
```

**Returns:** `public static Tool`

### createAttributes

```java
public static ItemAttributeModifiers createAttributes(Tier p_330371_, int p_331976_, float p_332104_)
```

**Parameters:**

- `p_330371_` (`Tier`)
- `p_331976_` (`int`)
- `p_332104_` (`float`)

**Returns:** `public static ItemAttributeModifiers`

### createAttributes

```java
public static ItemAttributeModifiers createAttributes(Tier p_330371_, float p_331976_, float p_332104_)
```

**Parameters:**

- `p_330371_` (`Tier`)
- `p_331976_` (`float`)
- `p_332104_` (`float`)

**Returns:** `ItemAttributeModifiers`

### canAttackBlock

```java
public boolean canAttackBlock(BlockState p_43291_, Level p_43292_, BlockPos p_43293_, Player p_43294_)
```

**Parameters:**

- `p_43291_` (`BlockState`)
- `p_43292_` (`Level`)
- `p_43293_` (`BlockPos`)
- `p_43294_` (`Player`)

**Returns:** `boolean`

### hurtEnemy

```java
public boolean hurtEnemy(ItemStack p_43278_, LivingEntity p_43279_, LivingEntity p_43280_)
```

**Parameters:**

- `p_43278_` (`ItemStack`)
- `p_43279_` (`LivingEntity`)
- `p_43280_` (`LivingEntity`)

**Returns:** `boolean`

### postHurtEnemy

```java
public void postHurtEnemy(ItemStack p_345553_, LivingEntity p_345771_, LivingEntity p_346282_)
```

**Parameters:**

- `p_345553_` (`ItemStack`)
- `p_345771_` (`LivingEntity`)
- `p_346282_` (`LivingEntity`)

### canPerformAction

```java
public boolean canPerformAction(ItemStack stack, net.neoforged.neoforge.common.ItemAbility itemAbility)
```

**Parameters:**

- `stack` (`ItemStack`)
- `itemAbility` (`net.neoforged.neoforge.common.ItemAbility`)

**Returns:** `boolean`
