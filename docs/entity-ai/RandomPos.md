# RandomPos

**Package:** `net.minecraft.world.entity.ai.util`
**Type:** class

## Methods

### generateRandomDirection

```java
public static BlockPos generateRandomDirection(RandomSource p_217852_, int p_217853_, int p_217854_)
```

**Parameters:**

- `p_217852_` (`RandomSource`)
- `p_217853_` (`int`)
- `p_217854_` (`int`)

**Returns:** `public static BlockPos`

### BlockPos

```java
return new BlockPos()
```

**Returns:** `return new`

### generateRandomDirectionWithinRadians

```java
public static BlockPos generateRandomDirectionWithinRadians(RandomSource p_217856_, int p_217857_, int p_217858_, int p_217859_, double p_217860_, double p_217861_, double p_217862_)
```

**Parameters:**

- `p_217856_` (`RandomSource`)
- `p_217857_` (`int`)
- `p_217858_` (`int`)
- `p_217859_` (`int`)
- `p_217860_` (`double`)
- `p_217861_` (`double`)
- `p_217862_` (`double`)

**Returns:** `BlockPos`

### moveUpOutOfSolid

```java
public static BlockPos moveUpOutOfSolid(BlockPos p_148546_, int p_148547_, Predicate<BlockPos> p_148548_)
```

**Parameters:**

- `p_148546_` (`BlockPos`)
- `p_148547_` (`int`)
- `p_148548_` (`Predicate<BlockPos>`)

**Returns:** `BlockPos`

### moveUpToAboveSolid

```java
public static BlockPos moveUpToAboveSolid(BlockPos p_26948_, int p_26949_, int p_26950_, Predicate<BlockPos> p_26951_)
```

**Parameters:**

- `p_26948_` (`BlockPos`)
- `p_26949_` (`int`)
- `p_26950_` (`int`)
- `p_26951_` (`Predicate<BlockPos>`)

**Returns:** `BlockPos`

### IllegalArgumentException

```java
throw new IllegalArgumentException("aboveSolidAmount was " + p_26949_ + ", expected >= 0")
```

**Parameters:**

- `"` (`"aboveSolidAmount was " + p_26949_ +`)
- `0"` (`expected >=`)

**Returns:** `throw new`

### generateRandomPos

```java
public static Vec3 generateRandomPos(PathfinderMob p_148543_, Supplier<BlockPos> p_148544_)
```

**Parameters:**

- `p_148543_` (`PathfinderMob`)
- `p_148544_` (`Supplier<BlockPos>`)

**Returns:** `Vec3`

### generateRandomPos

```java
return generateRandomPos()
```

**Returns:** `return`

### generateRandomPos

```java
public static Vec3 generateRandomPos(Supplier<BlockPos> p_148562_, ToDoubleFunction<BlockPos> p_148563_)
```

**Parameters:**

- `p_148562_` (`Supplier<BlockPos>`)
- `p_148563_` (`ToDoubleFunction<BlockPos>`)

**Returns:** `Vec3`

### generateRandomPosTowardDirection

```java
public static BlockPos generateRandomPosTowardDirection(PathfinderMob p_217864_, int p_217865_, RandomSource p_217866_, BlockPos p_217867_)
```

**Parameters:**

- `p_217864_` (`PathfinderMob`)
- `p_217865_` (`int`)
- `p_217866_` (`RandomSource`)
- `p_217867_` (`BlockPos`)

**Returns:** `public static BlockPos`
