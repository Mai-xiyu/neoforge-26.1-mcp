# PositionSourceType

**Package:** `net.minecraft.world.level.gameevent`
**Type:** interface<T extends PositionSource>

## Methods

### codec

```java
MapCodec<T> codec()
```

**Returns:** `MapCodec<T>`

### streamCodec

```java
StreamCodec<? super RegistryFriendlyByteBuf, T> streamCodec()
```

**Returns:** `StreamCodec<? super RegistryFriendlyByteBuf, T>`

### register

```java
static <S extends PositionSourceType<T>, T extends PositionSource> S register(String p_157878_, S p_157879_)
```

**Parameters:**

- `p_157878_` (`String`)
- `p_157879_` (`S`)

**Returns:** `static <S extends PositionSourceType<T>, T extends PositionSource> S`
