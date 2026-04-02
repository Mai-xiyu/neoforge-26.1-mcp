# ParticleTypes

**Package:** `net.minecraft.core.particles`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ANGRY_VILLAGER` | `SimpleParticleType` |  |
| `BLOCK` | `ParticleType<BlockParticleOption>` |  |
| `BLOCK_MARKER` | `ParticleType<BlockParticleOption>` |  |
| `BUBBLE` | `SimpleParticleType` |  |
| `CLOUD` | `SimpleParticleType` |  |
| `CRIT` | `SimpleParticleType` |  |
| `DAMAGE_INDICATOR` | `SimpleParticleType` |  |
| `DRAGON_BREATH` | `SimpleParticleType` |  |
| `DRIPPING_LAVA` | `SimpleParticleType` |  |
| `FALLING_LAVA` | `SimpleParticleType` |  |
| `LANDING_LAVA` | `SimpleParticleType` |  |
| `DRIPPING_WATER` | `SimpleParticleType` |  |
| `FALLING_WATER` | `SimpleParticleType` |  |
| `DUST` | `ParticleType<DustParticleOptions>` |  |
| `DUST_COLOR_TRANSITION` | `ParticleType<DustColorTransitionOptions>` |  |
| `EFFECT` | `SimpleParticleType` |  |
| `ELDER_GUARDIAN` | `SimpleParticleType` |  |
| `ENCHANTED_HIT` | `SimpleParticleType` |  |
| `ENCHANT` | `SimpleParticleType` |  |
| `END_ROD` | `SimpleParticleType` |  |
| `ENTITY_EFFECT` | `ParticleType<ColorParticleOption>` |  |
| `EXPLOSION_EMITTER` | `SimpleParticleType` |  |
| `EXPLOSION` | `SimpleParticleType` |  |
| `GUST` | `SimpleParticleType` |  |
| `SMALL_GUST` | `SimpleParticleType` |  |
| `GUST_EMITTER_LARGE` | `SimpleParticleType` |  |
| `GUST_EMITTER_SMALL` | `SimpleParticleType` |  |
| `SONIC_BOOM` | `SimpleParticleType` |  |
| `FALLING_DUST` | `ParticleType<BlockParticleOption>` |  |
| `FIREWORK` | `SimpleParticleType` |  |
| `FISHING` | `SimpleParticleType` |  |
| `FLAME` | `SimpleParticleType` |  |
| `INFESTED` | `SimpleParticleType` |  |
| `CHERRY_LEAVES` | `SimpleParticleType` |  |
| `SCULK_SOUL` | `SimpleParticleType` |  |
| `SCULK_CHARGE` | `ParticleType<SculkChargeParticleOptions>` |  |
| `SCULK_CHARGE_POP` | `SimpleParticleType` |  |
| `SOUL_FIRE_FLAME` | `SimpleParticleType` |  |
| `SOUL` | `SimpleParticleType` |  |
| `FLASH` | `SimpleParticleType` |  |
| `HAPPY_VILLAGER` | `SimpleParticleType` |  |
| `COMPOSTER` | `SimpleParticleType` |  |
| `HEART` | `SimpleParticleType` |  |
| `INSTANT_EFFECT` | `SimpleParticleType` |  |
| `ITEM` | `ParticleType<ItemParticleOption>` |  |
| `VIBRATION` | `ParticleType<VibrationParticleOption>` |  |

## Methods

### register

```java
private static SimpleParticleType register(String p_123825_, boolean p_123826_)
```

**Parameters:**

- `p_123825_` (`String`)
- `p_123826_` (`boolean`)

**Returns:** `private static SimpleParticleType`

### register

```java
<T extends ParticleOptions> private static <T extends ParticleOptions> ParticleType<T> register(String p_235906_, boolean p_235907_, Function<ParticleType<T>, MapCodec<T>> p_235909_, Function<ParticleType<T>, StreamCodec<? super RegistryFriendlyByteBuf, T>> p_320791_)
```

**Parameters:**

- `p_235906_` (`String`)
- `p_235907_` (`boolean`)
- `p_235909_` (`Function<ParticleType<T>, MapCodec<T>>`)
- `p_320791_` (`Function<ParticleType<T>, StreamCodec<? super RegistryFriendlyByteBuf, T>>`)

**Returns:** `private static <T extends ParticleOptions> ParticleType<T>`

### codec

```java
public MapCodec<T> codec()
```

**Returns:** `MapCodec<T>`

### streamCodec

```java
public StreamCodec<? super RegistryFriendlyByteBuf, T> streamCodec()
```

**Returns:** `StreamCodec<? super RegistryFriendlyByteBuf, T>`
