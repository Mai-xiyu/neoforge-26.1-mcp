# BlockPos

**Package:** `net.minecraft.core`
**Type:** class
**Extends:** `Vec3i`
**Annotations:** `@Immutable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<BlockPos>` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, BlockPos>` |  |
| `ZERO` | `BlockPos` |  |
| `PACKED_Y_LENGTH` | `int` |  |

## Methods

### decode

```java
public BlockPos decode(ByteBuf p_320431_)
```

**Parameters:**

- `p_320431_` (`ByteBuf`)

**Returns:** `public BlockPos`

### encode

```java
public void encode(ByteBuf p_320258_, BlockPos p_320532_)
```

**Parameters:**

- `p_320258_` (`ByteBuf`)
- `p_320532_` (`BlockPos`)

**Returns:** `public void`

### BlockPos

```java
public BlockPos(int p_121869_, int p_121870_, int p_121871_)
```

**Parameters:**

- `p_121869_` (`int`)
- `p_121870_` (`int`)
- `p_121871_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### BlockPos

```java
public BlockPos(Vec3i p_121877_)
```

**Parameters:**

- `p_121877_` (`Vec3i`)

**Returns:** `public`

### offset

```java
public static long offset(long p_121916_, Direction p_121917_)
```

**Parameters:**

- `p_121916_` (`long`)
- `p_121917_` (`Direction`)

**Returns:** `public static long`

### offset

```java
public static long offset(long p_121911_, int p_121912_, int p_121913_, int p_121914_)
```

**Parameters:**

- `p_121911_` (`long`)
- `p_121912_` (`int`)
- `p_121913_` (`int`)
- `p_121914_` (`int`)

**Returns:** `public static long`

### getX

```java
public static int getX(long p_121984_)
```

**Parameters:**

- `p_121984_` (`long`)

**Returns:** `public static int`

### getY

```java
public static int getY(long p_122009_)
```

**Parameters:**

- `p_122009_` (`long`)

**Returns:** `public static int`

### getZ

```java
public static int getZ(long p_122016_)
```

**Parameters:**

- `p_122016_` (`long`)

**Returns:** `public static int`

### of

```java
public static BlockPos of(long p_122023_)
```

**Parameters:**

- `p_122023_` (`long`)

**Returns:** `public static BlockPos`

### containing

```java
public static BlockPos containing(double p_275310_, double p_275414_, double p_275737_)
```

**Parameters:**

- `p_275310_` (`double`)
- `p_275414_` (`double`)
- `p_275737_` (`double`)

**Returns:** `public static BlockPos`

### containing

```java
public static BlockPos containing(Position p_275443_)
```

**Parameters:**

- `p_275443_` (`Position`)

**Returns:** `public static BlockPos`

### min

```java
public static BlockPos min(BlockPos p_333745_, BlockPos p_333943_)
```

**Parameters:**

- `p_333745_` (`BlockPos`)
- `p_333943_` (`BlockPos`)

**Returns:** `public static BlockPos`

### max

```java
public static BlockPos max(BlockPos p_334008_, BlockPos p_333743_)
```

**Parameters:**

- `p_334008_` (`BlockPos`)
- `p_333743_` (`BlockPos`)

**Returns:** `public static BlockPos`

### asLong

```java
public long asLong()
```

**Returns:** `public long`

### asLong

```java
public static long asLong(int p_121883_, int p_121884_, int p_121885_)
```

**Parameters:**

- `p_121883_` (`int`)
- `p_121884_` (`int`)
- `p_121885_` (`int`)

**Returns:** `public static long`

### getFlatIndex

```java
public static long getFlatIndex(long p_122028_)
```

**Parameters:**

- `p_122028_` (`long`)

**Returns:** `public static long`

### offset

```java
public BlockPos offset(int p_121973_, int p_121974_, int p_121975_)
```

**Parameters:**

- `p_121973_` (`int`)
- `p_121974_` (`int`)
- `p_121975_` (`int`)

**Returns:** `public BlockPos`

### getCenter

```java
public Vec3 getCenter()
```

**Returns:** `public Vec3`

### getBottomCenter

```java
public Vec3 getBottomCenter()
```

**Returns:** `public Vec3`

### offset

```java
public BlockPos offset(Vec3i p_121956_)
```

**Parameters:**

- `p_121956_` (`Vec3i`)

**Returns:** `public BlockPos`

### subtract

```java
public BlockPos subtract(Vec3i p_121997_)
```

**Parameters:**

- `p_121997_` (`Vec3i`)

**Returns:** `public BlockPos`

### multiply

```java
public BlockPos multiply(int p_175263_)
```

**Parameters:**

- `p_175263_` (`int`)

**Returns:** `public BlockPos`

### above

```java
public BlockPos above()
```

**Returns:** `public BlockPos`

### above

```java
public BlockPos above(int p_121972_)
```

**Parameters:**

- `p_121972_` (`int`)

**Returns:** `public BlockPos`

### below

```java
public BlockPos below()
```

**Returns:** `public BlockPos`

### below

```java
public BlockPos below(int p_122000_)
```

**Parameters:**

- `p_122000_` (`int`)

**Returns:** `public BlockPos`

### north

```java
public BlockPos north()
```

**Returns:** `public BlockPos`

### north

```java
public BlockPos north(int p_122014_)
```

**Parameters:**

- `p_122014_` (`int`)

**Returns:** `public BlockPos`

### south

```java
public BlockPos south()
```

**Returns:** `public BlockPos`

### south

```java
public BlockPos south(int p_122021_)
```

**Parameters:**

- `p_122021_` (`int`)

**Returns:** `public BlockPos`

### west

```java
public BlockPos west()
```

**Returns:** `public BlockPos`

### west

```java
public BlockPos west(int p_122026_)
```

**Parameters:**

- `p_122026_` (`int`)

**Returns:** `public BlockPos`

### east

```java
public BlockPos east()
```

**Returns:** `public BlockPos`

### east

```java
public BlockPos east(int p_122031_)
```

**Parameters:**

- `p_122031_` (`int`)

**Returns:** `public BlockPos`

### relative

```java
public BlockPos relative(Direction p_121946_)
```

**Parameters:**

- `p_121946_` (`Direction`)

**Returns:** `public BlockPos`

### relative

```java
public BlockPos relative(Direction p_121948_, int p_121949_)
```

**Parameters:**

- `p_121948_` (`Direction`)
- `p_121949_` (`int`)

**Returns:** `public BlockPos`

### relative

```java
public BlockPos relative(Direction.Axis p_121943_, int p_121944_)
```

**Parameters:**

- `p_121943_` (`Direction.Axis`)
- `p_121944_` (`int`)

**Returns:** `public BlockPos`

### rotate

```java
public BlockPos rotate(Rotation p_121918_)
```

**Parameters:**

- `p_121918_` (`Rotation`)

**Returns:** `public BlockPos`

### cross

```java
public BlockPos cross(Vec3i p_122011_)
```

**Parameters:**

- `p_122011_` (`Vec3i`)

**Returns:** `public BlockPos`

### atY

```java
public BlockPos atY(int p_175289_)
```

**Parameters:**

- `p_175289_` (`int`)

**Returns:** `public BlockPos`

### immutable

```java
public BlockPos immutable()
```

**Returns:** `public BlockPos`

### mutable

```java
public BlockPos.MutableBlockPos mutable()
```

**Returns:** `public BlockPos.MutableBlockPos`

### clampLocationWithin

```java
public Vec3 clampLocationWithin(Vec3 p_350293_)
```

**Parameters:**

- `p_350293_` (`Vec3`)

**Returns:** `public Vec3`

### randomInCube

```java
public static Iterable<BlockPos> randomInCube(RandomSource p_235651_, int p_235652_, BlockPos p_235653_, int p_235654_)
```

**Parameters:**

- `p_235651_` (`RandomSource`)
- `p_235652_` (`int`)
- `p_235653_` (`BlockPos`)
- `p_235654_` (`int`)

**Returns:** `public static Iterable<BlockPos>`

### squareOutSouthEast

```java
public static Stream<BlockPos> squareOutSouthEast(BlockPos p_284978_)
```

**Parameters:**

- `p_284978_` (`BlockPos`)

**Returns:** `Stream<BlockPos>`

### randomBetweenClosed

```java
public static Iterable<BlockPos> randomBetweenClosed(RandomSource p_235642_, int p_235643_, int p_235644_, int p_235645_, int p_235646_, int p_235647_, int p_235648_, int p_235649_)
```

**Parameters:**

- `p_235642_` (`RandomSource`)
- `p_235643_` (`int`)
- `p_235644_` (`int`)
- `p_235645_` (`int`)
- `p_235646_` (`int`)
- `p_235647_` (`int`)
- `p_235648_` (`int`)
- `p_235649_` (`int`)

**Returns:** `public static Iterable<BlockPos>`

### computeNext

```java
protected BlockPos computeNext()
```

**Returns:** `protected BlockPos`

### withinManhattan

```java
public static Iterable<BlockPos> withinManhattan(BlockPos p_121926_, int p_121927_, int p_121928_, int p_121929_)
```

**Parameters:**

- `p_121926_` (`BlockPos`)
- `p_121927_` (`int`)
- `p_121928_` (`int`)
- `p_121929_` (`int`)

**Returns:** `public static Iterable<BlockPos>`

### computeNext

```java
protected BlockPos computeNext()
```

**Returns:** `protected BlockPos`

### findClosestMatch

```java
public static Optional<BlockPos> findClosestMatch(BlockPos p_121931_, int p_121932_, int p_121933_, Predicate<BlockPos> p_121934_)
```

**Parameters:**

- `p_121931_` (`BlockPos`)
- `p_121932_` (`int`)
- `p_121933_` (`int`)
- `p_121934_` (`Predicate<BlockPos>`)

**Returns:** `public static Optional<BlockPos>`

### withinManhattanStream

```java
public static Stream<BlockPos> withinManhattanStream(BlockPos p_121986_, int p_121987_, int p_121988_, int p_121989_)
```

**Parameters:**

- `p_121986_` (`BlockPos`)
- `p_121987_` (`int`)
- `p_121988_` (`int`)
- `p_121989_` (`int`)

**Returns:** `public static Stream<BlockPos>`

### betweenClosed

```java
public static Iterable<BlockPos> betweenClosed(BlockPos p_121941_, BlockPos p_121942_)
```

**Parameters:**

- `p_121941_` (`BlockPos`)
- `p_121942_` (`BlockPos`)

**Returns:** `public static Iterable<BlockPos>`

### betweenClosedStream

```java
public static Stream<BlockPos> betweenClosedStream(BlockPos p_121991_, BlockPos p_121992_)
```

**Parameters:**

- `p_121991_` (`BlockPos`)
- `p_121992_` (`BlockPos`)

**Returns:** `public static Stream<BlockPos>`

### betweenClosedStream

```java
public static Stream<BlockPos> betweenClosedStream(BoundingBox p_121920_)
```

**Parameters:**

- `p_121920_` (`BoundingBox`)

**Returns:** `public static Stream<BlockPos>`

### betweenClosedStream

```java
public static Stream<BlockPos> betweenClosedStream(AABB p_121922_)
```

**Parameters:**

- `p_121922_` (`AABB`)

**Returns:** `public static Stream<BlockPos>`

### betweenClosedStream

```java
public static Stream<BlockPos> betweenClosedStream(int p_121887_, int p_121888_, int p_121889_, int p_121890_, int p_121891_, int p_121892_)
```

**Parameters:**

- `p_121887_` (`int`)
- `p_121888_` (`int`)
- `p_121889_` (`int`)
- `p_121890_` (`int`)
- `p_121891_` (`int`)
- `p_121892_` (`int`)

**Returns:** `public static Stream<BlockPos>`

### betweenClosed

```java
public static Iterable<BlockPos> betweenClosed(int p_121977_, int p_121978_, int p_121979_, int p_121980_, int p_121981_, int p_121982_)
```

**Parameters:**

- `p_121977_` (`int`)
- `p_121978_` (`int`)
- `p_121979_` (`int`)
- `p_121980_` (`int`)
- `p_121981_` (`int`)
- `p_121982_` (`int`)

**Returns:** `public static Iterable<BlockPos>`

### computeNext

```java
protected BlockPos computeNext()
```

**Returns:** `protected BlockPos`

### spiralAround

```java
public static Iterable<BlockPos.MutableBlockPos> spiralAround(BlockPos p_121936_, int p_121937_, Direction p_121938_, Direction p_121939_)
```

**Parameters:**

- `p_121936_` (`BlockPos`)
- `p_121937_` (`int`)
- `p_121938_` (`Direction`)
- `p_121939_` (`Direction`)

**Returns:** `public static Iterable<BlockPos.MutableBlockPos>`

### computeNext

```java
protected BlockPos.MutableBlockPos computeNext()
```

**Returns:** `protected BlockPos.MutableBlockPos`

### breadthFirstTraversal

```java
public static int breadthFirstTraversal(BlockPos p_278078_, int p_277385_, int p_277666_, BiConsumer<BlockPos, Consumer<BlockPos>> p_277755_, Predicate<BlockPos> p_278094_)
```

**Parameters:**

- `p_278078_` (`BlockPos`)
- `p_277385_` (`int`)
- `p_277666_` (`int`)
- `p_277755_` (`BiConsumer<BlockPos, Consumer<BlockPos>>`)
- `p_278094_` (`Predicate<BlockPos>`)

**Returns:** `public static int`

### MutableBlockPos

```java
public MutableBlockPos()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MutableBlockPos

```java
public MutableBlockPos(int p_122130_, int p_122131_, int p_122132_)
```

**Parameters:**

- `p_122130_` (`int`)
- `p_122131_` (`int`)
- `p_122132_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### MutableBlockPos

```java
public MutableBlockPos(double p_122126_, double p_122127_, double p_122128_)
```

**Parameters:**

- `p_122126_` (`double`)
- `p_122127_` (`double`)
- `p_122128_` (`double`)

**Returns:** `public`

### offset

```java
public BlockPos offset(int p_122163_, int p_122164_, int p_122165_)
```

**Parameters:**

- `p_122163_` (`int`)
- `p_122164_` (`int`)
- `p_122165_` (`int`)

**Returns:** `BlockPos`

### multiply

```java
public BlockPos multiply(int p_175305_)
```

**Parameters:**

- `p_175305_` (`int`)

**Returns:** `BlockPos`

### relative

```java
public BlockPos relative(Direction p_122152_, int p_122153_)
```

**Parameters:**

- `p_122152_` (`Direction`)
- `p_122153_` (`int`)

**Returns:** `BlockPos`

### relative

```java
public BlockPos relative(Direction.Axis p_122145_, int p_122146_)
```

**Parameters:**

- `p_122145_` (`Direction.Axis`)
- `p_122146_` (`int`)

**Returns:** `BlockPos`

### rotate

```java
public BlockPos rotate(Rotation p_122138_)
```

**Parameters:**

- `p_122138_` (`Rotation`)

**Returns:** `BlockPos`

### set

```java
public BlockPos.MutableBlockPos set(int p_122179_, int p_122180_, int p_122181_)
```

**Parameters:**

- `p_122179_` (`int`)
- `p_122180_` (`int`)
- `p_122181_` (`int`)

**Returns:** `public BlockPos.MutableBlockPos`

### set

```java
public BlockPos.MutableBlockPos set(double p_122170_, double p_122171_, double p_122172_)
```

**Parameters:**

- `p_122170_` (`double`)
- `p_122171_` (`double`)
- `p_122172_` (`double`)

**Returns:** `public BlockPos.MutableBlockPos`

### set

```java
public BlockPos.MutableBlockPos set(Vec3i p_122191_)
```

**Parameters:**

- `p_122191_` (`Vec3i`)

**Returns:** `public BlockPos.MutableBlockPos`

### set

```java
public BlockPos.MutableBlockPos set(long p_122189_)
```

**Parameters:**

- `p_122189_` (`long`)

**Returns:** `public BlockPos.MutableBlockPos`

### set

```java
public BlockPos.MutableBlockPos set(AxisCycle p_122140_, int p_122141_, int p_122142_, int p_122143_)
```

**Parameters:**

- `p_122140_` (`AxisCycle`)
- `p_122141_` (`int`)
- `p_122142_` (`int`)
- `p_122143_` (`int`)

**Returns:** `public BlockPos.MutableBlockPos`

### setWithOffset

```java
public BlockPos.MutableBlockPos setWithOffset(Vec3i p_122160_, Direction p_122161_)
```

**Parameters:**

- `p_122160_` (`Vec3i`)
- `p_122161_` (`Direction`)

**Returns:** `public BlockPos.MutableBlockPos`

### setWithOffset

```java
public BlockPos.MutableBlockPos setWithOffset(Vec3i p_122155_, int p_122156_, int p_122157_, int p_122158_)
```

**Parameters:**

- `p_122155_` (`Vec3i`)
- `p_122156_` (`int`)
- `p_122157_` (`int`)
- `p_122158_` (`int`)

**Returns:** `public BlockPos.MutableBlockPos`

### setWithOffset

```java
public BlockPos.MutableBlockPos setWithOffset(Vec3i p_175307_, Vec3i p_175308_)
```

**Parameters:**

- `p_175307_` (`Vec3i`)
- `p_175308_` (`Vec3i`)

**Returns:** `public BlockPos.MutableBlockPos`

### move

```java
public BlockPos.MutableBlockPos move(Direction p_122174_)
```

**Parameters:**

- `p_122174_` (`Direction`)

**Returns:** `public BlockPos.MutableBlockPos`

### move

```java
public BlockPos.MutableBlockPos move(Direction p_122176_, int p_122177_)
```

**Parameters:**

- `p_122176_` (`Direction`)
- `p_122177_` (`int`)

**Returns:** `public BlockPos.MutableBlockPos`

### move

```java
public BlockPos.MutableBlockPos move(int p_122185_, int p_122186_, int p_122187_)
```

**Parameters:**

- `p_122185_` (`int`)
- `p_122186_` (`int`)
- `p_122187_` (`int`)

**Returns:** `public BlockPos.MutableBlockPos`

### move

```java
public BlockPos.MutableBlockPos move(Vec3i p_122194_)
```

**Parameters:**

- `p_122194_` (`Vec3i`)

**Returns:** `public BlockPos.MutableBlockPos`

### clamp

```java
public BlockPos.MutableBlockPos clamp(Direction.Axis p_122148_, int p_122149_, int p_122150_)
```

**Parameters:**

- `p_122148_` (`Direction.Axis`)
- `p_122149_` (`int`)
- `p_122150_` (`int`)

**Returns:** `public BlockPos.MutableBlockPos`

### IllegalStateException

```java
throw new IllegalStateException("Unable to clamp axis " + p_122148_)
```

**Parameters:**

- `p_122148_` (`"Unable to clamp axis " +`)

**Returns:** `throw new`

### setX

```java
public BlockPos.MutableBlockPos setX(int p_175341_)
```

**Parameters:**

- `p_175341_` (`int`)

**Returns:** `public BlockPos.MutableBlockPos`

### setY

```java
public BlockPos.MutableBlockPos setY(int p_175343_)
```

**Parameters:**

- `p_175343_` (`int`)

**Returns:** `public BlockPos.MutableBlockPos`

### setZ

```java
public BlockPos.MutableBlockPos setZ(int p_175345_)
```

**Parameters:**

- `p_175345_` (`int`)

**Returns:** `public BlockPos.MutableBlockPos`

### immutable

```java
public BlockPos immutable()
```

**Returns:** `BlockPos`

### BlockPos

```java
return new BlockPos()
```

**Returns:** `return new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `MutableBlockPos` | class |  |
