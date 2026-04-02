# Bucketable

**Package:** `net.minecraft.world.entity.animal`
**Type:** interface

## Methods

### fromBucket

```java
boolean fromBucket()
```

**Returns:** `boolean`

### setFromBucket

```java
void setFromBucket(boolean p_148834_)
```

**Parameters:**

- `p_148834_` (`boolean`)

### saveToBucketTag

```java
void saveToBucketTag(ItemStack p_148833_)
```

**Parameters:**

- `p_148833_` (`ItemStack`)

### loadFromBucketTag

```java
void loadFromBucketTag(CompoundTag p_148832_)
```

**Parameters:**

- `p_148832_` (`CompoundTag`)

### getBucketItemStack

```java
ItemStack getBucketItemStack()
```

**Returns:** `ItemStack`

### getPickupSound

```java
SoundEvent getPickupSound()
```

**Returns:** `SoundEvent`

### saveDefaultDataToBucketTag

```java
static void saveDefaultDataToBucketTag(Mob p_148823_, ItemStack p_148824_)
```

**Parameters:**

- `p_148823_` (`Mob`)
- `p_148824_` (`ItemStack`)

### loadDefaultDataFromBucketTag

```java
static void loadDefaultDataFromBucketTag(Mob p_148826_, CompoundTag p_148827_)
```

**Parameters:**

- `p_148826_` (`Mob`)
- `p_148827_` (`CompoundTag`)

### bucketMobPickup

```java
static <T extends LivingEntity & Bucketable> Optional<InteractionResult> bucketMobPickup(Player p_148829_, InteractionHand p_148830_, T p_148831_)
```

**Parameters:**

- `p_148829_` (`Player`)
- `p_148830_` (`InteractionHand`)
- `p_148831_` (`T`)

**Returns:** `Optional<InteractionResult>`
