# SoundEvent

**Package:** `net.minecraft.sounds`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DIRECT_CODEC` | `Codec<SoundEvent>` |  |
| `CODEC` | `Codec<Holder<SoundEvent>>` |  |
| `DIRECT_STREAM_CODEC` | `StreamCodec<ByteBuf, SoundEvent>` |  |
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, Holder<SoundEvent>>` |  |

## Methods

### create

```java
private static SoundEvent create(ResourceLocation p_263406_, Optional<Float> p_263346_)
```

**Parameters:**

- `p_263406_` (`ResourceLocation`)
- `p_263346_` (`Optional<Float>`)

**Returns:** `private static SoundEvent`

### createVariableRangeEvent

```java
public static SoundEvent createVariableRangeEvent(ResourceLocation p_262973_)
```

**Parameters:**

- `p_262973_` (`ResourceLocation`)

**Returns:** `public static SoundEvent`

### SoundEvent

```java
return new SoundEvent()
```

**Returns:** `return new`

### createFixedRangeEvent

```java
public static SoundEvent createFixedRangeEvent(ResourceLocation p_263003_, float p_263029_)
```

**Parameters:**

- `p_263003_` (`ResourceLocation`)
- `p_263029_` (`float`)

**Returns:** `public static SoundEvent`

### SoundEvent

```java
return new SoundEvent()
```

**Returns:** `return new`

### SoundEvent

```java
private SoundEvent(ResourceLocation p_215665_, float p_215666_, boolean p_215667_)
```

**Parameters:**

- `p_215665_` (`ResourceLocation`)
- `p_215666_` (`float`)
- `p_215667_` (`boolean`)

**Returns:** `private`

### getLocation

```java
public ResourceLocation getLocation()
```

**Returns:** `public ResourceLocation`

### getRange

```java
public float getRange(float p_215669_)
```

**Parameters:**

- `p_215669_` (`float`)

**Returns:** `public float`

### fixedRange

```java
private Optional<Float> fixedRange()
```

**Returns:** `private Optional<Float>`
