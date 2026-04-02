# BlockAndTintGetter

**Package:** `net.minecraft.world.level`
**Type:** interface
**Extends:** `BlockGetter, net.neoforged.neoforge.common.extensions.IBlockAndTintGetterExtension`

## Methods

### getShade

```java
float getShade(Direction p_45522_, boolean p_45523_)
```

**Parameters:**

- `p_45522_` (`Direction`)
- `p_45523_` (`boolean`)

**Returns:** `float`

### getLightEngine

```java
LevelLightEngine getLightEngine()
```

**Returns:** `LevelLightEngine`

### getBlockTint

```java
int getBlockTint(BlockPos p_45520_, ColorResolver p_45521_)
```

**Parameters:**

- `p_45520_` (`BlockPos`)
- `p_45521_` (`ColorResolver`)

**Returns:** `int`

### getBrightness

```java
default int getBrightness(LightLayer p_45518_, BlockPos p_45519_)
```

**Parameters:**

- `p_45518_` (`LightLayer`)
- `p_45519_` (`BlockPos`)

**Returns:** `default int`

### getRawBrightness

```java
default int getRawBrightness(BlockPos p_45525_, int p_45526_)
```

**Parameters:**

- `p_45525_` (`BlockPos`)
- `p_45526_` (`int`)

**Returns:** `default int`

### canSeeSky

```java
default boolean canSeeSky(BlockPos p_45528_)
```

**Parameters:**

- `p_45528_` (`BlockPos`)

**Returns:** `default boolean`
