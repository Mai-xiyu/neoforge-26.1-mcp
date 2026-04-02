# ClampedItemPropertyFunction

**Package:** `net.minecraft.client.renderer.item`
**Type:** interface
**Extends:** `ItemPropertyFunction`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### call

```java
default float call(ItemStack p_174560_, ClientLevel p_174561_, LivingEntity p_174562_, int p_174563_)
```

**Parameters:**

- `p_174560_` (`ItemStack`)
- `p_174561_` (`ClientLevel`)
- `p_174562_` (`LivingEntity`)
- `p_174563_` (`int`)

**Returns:** `float`

### unclampedCall

```java
float unclampedCall(ItemStack p_174564_, ClientLevel p_174565_, LivingEntity p_174566_, int p_174567_)
```

**Parameters:**

- `p_174564_` (`ItemStack`)
- `p_174565_` (`ClientLevel`)
- `p_174566_` (`LivingEntity`)
- `p_174567_` (`int`)

**Returns:** `float`
