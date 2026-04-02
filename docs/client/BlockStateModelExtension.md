# BlockStateModelExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Side:** 🖥️ Client

## Methods

### self

```java
private BlockStateModel self()
```

**Returns:** `private BlockStateModel`

### createGeometryKey

```java
default Object createGeometryKey(BlockAndTintGetter level, BlockPos pos, BlockState state, RandomSource random)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `random` (`RandomSource`)

**Returns:** `Object`

### collectParts

```java
default void collectParts(BlockAndTintGetter level, BlockPos pos, BlockState state, RandomSource random, List<BlockStateModelPart> parts)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `random` (`RandomSource`)
- `parts` (`List<BlockStateModelPart>`)

### particleMaterial

```java
default Material.Baked particleMaterial(BlockAndTintGetter level, BlockPos pos, BlockState state)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `Material.Baked`

### materialFlags

```java
.MaterialFlags
    default int materialFlags(BlockAndTintGetter level, BlockPos pos, BlockState state)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)

**Returns:** `.MaterialFlags
    default int`

### hasMaterialFlag

```java
.NonExtendable
    default boolean hasMaterialFlag(BlockAndTintGetter level, BlockPos pos, BlockState state, .MaterialFlags int flag)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `flag` (`.MaterialFlags int`)

**Returns:** `.NonExtendable
    default boolean`
