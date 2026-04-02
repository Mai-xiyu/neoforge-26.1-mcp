# Fallable

**Package:** `net.minecraft.world.level.block`
**Type:** interface

## Methods

### onLand

```java
default void onLand(Level p_153220_, BlockPos p_153221_, BlockState p_153222_, BlockState p_153223_, FallingBlockEntity p_153224_)
```

**Parameters:**

- `p_153220_` (`Level`)
- `p_153221_` (`BlockPos`)
- `p_153222_` (`BlockState`)
- `p_153223_` (`BlockState`)
- `p_153224_` (`FallingBlockEntity`)

**Returns:** `default void`

### onBrokenAfterFall

```java
default void onBrokenAfterFall(Level p_153217_, BlockPos p_153218_, FallingBlockEntity p_153219_)
```

**Parameters:**

- `p_153217_` (`Level`)
- `p_153218_` (`BlockPos`)
- `p_153219_` (`FallingBlockEntity`)

**Returns:** `default void`

### getFallDamageSource

```java
default DamageSource getFallDamageSource(Entity p_253907_)
```

**Parameters:**

- `p_253907_` (`Entity`)

**Returns:** `default DamageSource`
