# ItemParticleOption

**Package:** `net.minecraft.core.particles`
**Type:** class
**Implements:** `ParticleOptions`

## Methods

### codec

```java
public static MapCodec<ItemParticleOption> codec(ParticleType<ItemParticleOption> p_123711_)
```

**Parameters:**

- `p_123711_` (`ParticleType<ItemParticleOption>`)

**Returns:** `public static MapCodec<ItemParticleOption>`

### streamCodec

```java
public static StreamCodec<? super RegistryFriendlyByteBuf, ItemParticleOption> streamCodec(ParticleType<ItemParticleOption> p_320881_)
```

**Parameters:**

- `p_320881_` (`ParticleType<ItemParticleOption>`)

**Returns:** `public static StreamCodec<? super RegistryFriendlyByteBuf, ItemParticleOption>`

### ItemParticleOption

```java
public ItemParticleOption(ParticleType<ItemParticleOption> p_123705_, ItemStack p_123706_)
```

**Parameters:**

- `p_123705_` (`ParticleType<ItemParticleOption>`)
- `p_123706_` (`ItemStack`)

**Returns:** `public`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Empty stacks are not allowed")
```

**Parameters:**

- `allowed"` (`"Empty stacks are not`)

**Returns:** `throw new`

### getType

```java
public ParticleType<ItemParticleOption> getType()
```

**Returns:** `ParticleType<ItemParticleOption>`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `public ItemStack`
