# UnderwaterMagmaFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<UnderwaterMagmaConfiguration>`

## Methods

### UnderwaterMagmaFeature

```java
public UnderwaterMagmaFeature(Codec<UnderwaterMagmaConfiguration> p_160560_)
```

**Parameters:**

- `p_160560_` (`Codec<UnderwaterMagmaConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### place

```java
public boolean place(FeaturePlaceContext<UnderwaterMagmaConfiguration> p_160569_)
```

**Parameters:**

- `p_160569_` (`FeaturePlaceContext<UnderwaterMagmaConfiguration>`)

**Returns:** `boolean`

### getFloorY

```java
private static OptionalInt getFloorY(WorldGenLevel p_160565_, BlockPos p_160566_, UnderwaterMagmaConfiguration p_160567_)
```

**Parameters:**

- `p_160565_` (`WorldGenLevel`)
- `p_160566_` (`BlockPos`)
- `p_160567_` (`UnderwaterMagmaConfiguration`)

**Returns:** `private static OptionalInt`

### isValidPlacement

```java
private boolean isValidPlacement(WorldGenLevel p_160575_, BlockPos p_160576_)
```

**Parameters:**

- `p_160575_` (`WorldGenLevel`)
- `p_160576_` (`BlockPos`)

**Returns:** `private boolean`

### isWaterOrAir

```java
private boolean isWaterOrAir(LevelAccessor p_160562_, BlockPos p_160563_)
```

**Parameters:**

- `p_160562_` (`LevelAccessor`)
- `p_160563_` (`BlockPos`)

**Returns:** `private boolean`
