# EnchantmentValueEffect

**Package:** `net.minecraft.world.item.enchantment.effects`
**Type:** interface

## Methods

### bootstrap

```java
static MapCodec<? extends EnchantmentValueEffect> bootstrap(Registry<MapCodec<? extends EnchantmentValueEffect>> p_345804_)
```

**Parameters:**

- `p_345804_` (`Registry<MapCodec<? extends EnchantmentValueEffect>>`)

**Returns:** `static MapCodec<? extends EnchantmentValueEffect>`

### process

```java
float process(int p_345946_, RandomSource p_345167_, float p_345777_)
```

**Parameters:**

- `p_345946_` (`int`)
- `p_345167_` (`RandomSource`)
- `p_345777_` (`float`)

**Returns:** `float`

### codec

```java
MapCodec<? extends EnchantmentValueEffect> codec()
```

**Returns:** `MapCodec<? extends EnchantmentValueEffect>`
