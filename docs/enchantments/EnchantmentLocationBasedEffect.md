# EnchantmentLocationBasedEffect

**Package:** `net.minecraft.world.item.enchantment.effects`
**Type:** interface

## Methods

### bootstrap

```java
static MapCodec<? extends EnchantmentLocationBasedEffect> bootstrap(Registry<MapCodec<? extends EnchantmentLocationBasedEffect>> p_344955_)
```

**Parameters:**

- `p_344955_` (`Registry<MapCodec<? extends EnchantmentLocationBasedEffect>>`)

**Returns:** `static MapCodec<? extends EnchantmentLocationBasedEffect>`

### onChangedBlock

```java
void onChangedBlock(ServerLevel p_345577_, int p_345675_, EnchantedItemInUse p_345807_, Entity p_345378_, Vec3 p_344844_, boolean p_345637_)
```

**Parameters:**

- `p_345577_` (`ServerLevel`)
- `p_345675_` (`int`)
- `p_345807_` (`EnchantedItemInUse`)
- `p_345378_` (`Entity`)
- `p_344844_` (`Vec3`)
- `p_345637_` (`boolean`)

### onDeactivated

```java
default void onDeactivated(EnchantedItemInUse p_346131_, Entity p_345920_, Vec3 p_345758_, int p_344750_)
```

**Parameters:**

- `p_346131_` (`EnchantedItemInUse`)
- `p_345920_` (`Entity`)
- `p_345758_` (`Vec3`)
- `p_344750_` (`int`)

**Returns:** `default void`

### codec

```java
MapCodec<? extends EnchantmentLocationBasedEffect> codec()
```

**Returns:** `MapCodec<? extends EnchantmentLocationBasedEffect>`
