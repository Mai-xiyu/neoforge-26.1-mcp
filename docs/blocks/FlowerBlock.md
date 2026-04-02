# FlowerBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `BushBlock`
**Implements:** `SuspiciousEffectHolder`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EFFECTS_FIELD` | `MapCodec<SuspiciousStewEffects>` |  |
| `CODEC` | `MapCodec<FlowerBlock>` |  |
| `AABB_OFFSET` | `float` |  |
| `SHAPE` | `VoxelShape` |  |

## Methods

### codec

```java
public MapCodec<? extends FlowerBlock> codec()
```

**Returns:** `MapCodec<? extends FlowerBlock>`

### FlowerBlock

```java
public FlowerBlock(Holder<MobEffect> p_316154_, float p_332744_, BlockBehaviour.Properties p_53514_)
```

**Parameters:**

- `p_316154_` (`Holder<MobEffect>`)
- `p_332744_` (`float`)
- `p_53514_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### FlowerBlock

```java
public FlowerBlock(SuspiciousStewEffects p_330645_, BlockBehaviour.Properties p_304822_)
```

**Parameters:**

- `p_330645_` (`SuspiciousStewEffects`)
- `p_304822_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### makeEffectList

```java
protected static SuspiciousStewEffects makeEffectList(Holder<MobEffect> p_316817_, float p_332817_)
```

**Parameters:**

- `p_316817_` (`Holder<MobEffect>`)
- `p_332817_` (`float`)

**Returns:** `protected static SuspiciousStewEffects`

### getShape

```java
protected VoxelShape getShape(BlockState p_53517_, BlockGetter p_53518_, BlockPos p_53519_, CollisionContext p_53520_)
```

**Parameters:**

- `p_53517_` (`BlockState`)
- `p_53518_` (`BlockGetter`)
- `p_53519_` (`BlockPos`)
- `p_53520_` (`CollisionContext`)

**Returns:** `VoxelShape`

### getSuspiciousEffects

```java
public SuspiciousStewEffects getSuspiciousEffects()
```

**Returns:** `SuspiciousStewEffects`
