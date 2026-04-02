# EnchantmentEntityEffect

**Package:** `net.minecraft.world.item.enchantment.effects`
**Type:** interface
**Extends:** `EnchantmentLocationBasedEffect`

## Methods

### bootstrap

```java
static MapCodec<? extends EnchantmentEntityEffect> bootstrap(Registry<MapCodec<? extends EnchantmentEntityEffect>> p_345205_)
```

**Parameters:**

- `p_345205_` (`Registry<MapCodec<? extends EnchantmentEntityEffect>>`)

**Returns:** `static MapCodec<? extends EnchantmentEntityEffect>`

### apply

```java
void apply(ServerLevel p_345106_, int p_346004_, EnchantedItemInUse p_344966_, Entity p_346140_, Vec3 p_345890_)
```

**Parameters:**

- `p_345106_` (`ServerLevel`)
- `p_346004_` (`int`)
- `p_344966_` (`EnchantedItemInUse`)
- `p_346140_` (`Entity`)
- `p_345890_` (`Vec3`)

### onChangedBlock

```java
default void onChangedBlock(ServerLevel p_345419_, int p_345173_, EnchantedItemInUse p_344724_, Entity p_346126_, Vec3 p_345614_, boolean p_346410_)
```

**Parameters:**

- `p_345419_` (`ServerLevel`)
- `p_345173_` (`int`)
- `p_344724_` (`EnchantedItemInUse`)
- `p_346126_` (`Entity`)
- `p_345614_` (`Vec3`)
- `p_346410_` (`boolean`)

### codec

```java
MapCodec<? extends EnchantmentEntityEffect> codec()
```

**Returns:** `MapCodec<? extends EnchantmentEntityEffect>`
