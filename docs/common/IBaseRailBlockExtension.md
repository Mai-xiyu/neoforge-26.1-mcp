# IBaseRailBlockExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### isFlexibleRail

```java
boolean isFlexibleRail(BlockState state, BlockGetter level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### canMakeSlopes

```java
default boolean canMakeSlopes(BlockState state, BlockGetter level, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### getRailDirection

```java
RailShape getRailDirection(BlockState state, BlockGetter level, BlockPos pos, AbstractMinecart cart)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`BlockGetter`)
- `pos` (`BlockPos`)
- `cart` (`AbstractMinecart`)

**Returns:** `RailShape`

### getRailMaxSpeed

```java
default float getRailMaxSpeed(BlockState state, Level level, BlockPos pos, AbstractMinecart cart)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `cart` (`AbstractMinecart`)

**Returns:** `float`

### onMinecartPass

```java
default void onMinecartPass(BlockState state, Level level, BlockPos pos, AbstractMinecart cart)
```

**Parameters:**

- `state` (`BlockState`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `cart` (`AbstractMinecart`)

### isValidRailShape

```java
default boolean isValidRailShape(RailShape shape)
```

**Parameters:**

- `shape` (`RailShape`)

**Returns:** `boolean`
