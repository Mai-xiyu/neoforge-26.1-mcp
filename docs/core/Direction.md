# Direction

**Package:** `net.minecraft.core`
**Type:** enum
**Implements:** `StringRepresentable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `StringRepresentable.EnumCodec<Direction>` |  |
| `VERTICAL_CODEC` | `Codec<Direction>` |  |
| `BY_ID` | `IntFunction<Direction>` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, Direction>` |  |

## Methods

### Direction

```java
private Direction(int p_122356_, int p_122357_, int p_122358_, String p_122359_, Direction.AxisDirection p_122360_, Direction.Axis p_122361_, Vec3i p_122362_)
```

**Parameters:**

- `p_122356_` (`int`)
- `p_122357_` (`int`)
- `p_122358_` (`int`)
- `p_122359_` (`String`)
- `p_122360_` (`Direction.AxisDirection`)
- `p_122361_` (`Direction.Axis`)
- `p_122362_` (`Vec3i`)

**Returns:** `private`

### orderedByNearest

```java
public static Direction[] orderedByNearest(Entity p_122383_)
```

**Parameters:**

- `p_122383_` (`Entity`)

**Returns:** `public static Direction[]`

### makeDirectionArray

```java
return makeDirectionArray()
```

**Returns:** `return`

### makeDirectionArray

```java
return makeDirectionArray()
```

**Returns:** `return`

### makeDirectionArray

```java
private static Direction[] makeDirectionArray(Direction p_122399_, Direction p_122400_, Direction p_122401_)
```

**Parameters:**

- `p_122399_` (`Direction`)
- `p_122400_` (`Direction`)
- `p_122401_` (`Direction`)

**Returns:** `private static Direction[]`

### rotate

```java
public static Direction rotate(Matrix4f p_254393_, Direction p_254252_)
```

**Parameters:**

- `p_254393_` (`Matrix4f`)
- `p_254252_` (`Direction`)

**Returns:** `public static Direction`

### allShuffled

```java
public static Collection<Direction> allShuffled(RandomSource p_235668_)
```

**Parameters:**

- `p_235668_` (`RandomSource`)

**Returns:** `public static Collection<Direction>`

### stream

```java
public static Stream<Direction> stream()
```

**Returns:** `public static Stream<Direction>`

### getRotation

```java
public Quaternionf getRotation()
```

**Returns:** `public Quaternionf`

### Quaternionf

```java
> new Quaternionf()
```

**Returns:** `> new`

### get3DDataValue

```java
public int get3DDataValue()
```

**Returns:** `public int`

### get2DDataValue

```java
public int get2DDataValue()
```

**Returns:** `public int`

### getAxisDirection

```java
public Direction.AxisDirection getAxisDirection()
```

**Returns:** `public Direction.AxisDirection`

### getFacingAxis

```java
public static Direction getFacingAxis(Entity p_175358_, Direction.Axis p_175359_)
```

**Parameters:**

- `p_175358_` (`Entity`)
- `p_175359_` (`Direction.Axis`)

**Returns:** `public static Direction`

### getOpposite

```java
public Direction getOpposite()
```

**Returns:** `public Direction`

### from3DDataValue

```java
return from3DDataValue()
```

**Returns:** `return`

### getClockWise

```java
public Direction getClockWise(Direction.Axis p_175363_)
```

**Parameters:**

- `p_175363_` (`Direction.Axis`)

**Returns:** `public Direction`

### getCounterClockWise

```java
public Direction getCounterClockWise(Direction.Axis p_175365_)
```

**Parameters:**

- `p_175365_` (`Direction.Axis`)

**Returns:** `public Direction`

### getClockWise

```java
public Direction getClockWise()
```

**Returns:** `public Direction`

### IllegalStateException

```java
> throw new IllegalStateException("Unable to get Y-rotated facing of " + this)
```

**Parameters:**

- `this` (`"Unable to get Y-rotated facing of " +`)

**Returns:** `> throw new`

### getClockWiseX

```java
private Direction getClockWiseX()
```

**Returns:** `private Direction`

### IllegalStateException

```java
> throw new IllegalStateException("Unable to get X-rotated facing of " + this)
```

**Parameters:**

- `this` (`"Unable to get X-rotated facing of " +`)

**Returns:** `> throw new`

### getCounterClockWiseX

```java
private Direction getCounterClockWiseX()
```

**Returns:** `private Direction`

### IllegalStateException

```java
> throw new IllegalStateException("Unable to get X-rotated facing of " + this)
```

**Parameters:**

- `this` (`"Unable to get X-rotated facing of " +`)

**Returns:** `> throw new`

### getClockWiseZ

```java
private Direction getClockWiseZ()
```

**Returns:** `private Direction`

### IllegalStateException

```java
> throw new IllegalStateException("Unable to get Z-rotated facing of " + this)
```

**Parameters:**

- `this` (`"Unable to get Z-rotated facing of " +`)

**Returns:** `> throw new`

### getCounterClockWiseZ

```java
private Direction getCounterClockWiseZ()
```

**Returns:** `private Direction`

### IllegalStateException

```java
> throw new IllegalStateException("Unable to get Z-rotated facing of " + this)
```

**Parameters:**

- `this` (`"Unable to get Z-rotated facing of " +`)

**Returns:** `> throw new`

### getCounterClockWise

```java
public Direction getCounterClockWise()
```

**Returns:** `public Direction`

### IllegalStateException

```java
> throw new IllegalStateException("Unable to get CCW facing of " + this)
```

**Parameters:**

- `this` (`"Unable to get CCW facing of " +`)

**Returns:** `> throw new`

### getStepX

```java
public int getStepX()
```

**Returns:** `public int`

### getStepY

```java
public int getStepY()
```

**Returns:** `public int`

### getStepZ

```java
public int getStepZ()
```

**Returns:** `public int`

### step

```java
public Vector3f step()
```

**Returns:** `public Vector3f`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getAxis

```java
public Direction.Axis getAxis()
```

**Returns:** `public Direction.Axis`

### byName

```java
public static Direction byName(String p_122403_)
```

**Parameters:**

- `p_122403_` (`String`)

**Returns:** `Direction`

### from3DDataValue

```java
public static Direction from3DDataValue(int p_122377_)
```

**Parameters:**

- `p_122377_` (`int`)

**Returns:** `public static Direction`

### from2DDataValue

```java
public static Direction from2DDataValue(int p_122408_)
```

**Parameters:**

- `p_122408_` (`int`)

**Returns:** `public static Direction`

### fromDelta

```java
public static Direction fromDelta(int p_278323_, int p_278296_, int p_278347_)
```

**Parameters:**

- `p_278323_` (`int`)
- `p_278296_` (`int`)
- `p_278347_` (`int`)

**Returns:** `Direction`

### fromYRot

```java
public static Direction fromYRot(double p_122365_)
```

**Parameters:**

- `p_122365_` (`double`)

**Returns:** `public static Direction`

### fromAxisAndDirection

```java
public static Direction fromAxisAndDirection(Direction.Axis p_122388_, Direction.AxisDirection p_122389_)
```

**Parameters:**

- `p_122388_` (`Direction.Axis`)
- `p_122389_` (`Direction.AxisDirection`)

**Returns:** `public static Direction`

### toYRot

```java
public float toYRot()
```

**Returns:** `public float`

### getRandom

```java
public static Direction getRandom(RandomSource p_235673_)
```

**Parameters:**

- `p_235673_` (`RandomSource`)

**Returns:** `public static Direction`

### getNearest

```java
public static Direction getNearest(double p_122367_, double p_122368_, double p_122369_)
```

**Parameters:**

- `p_122367_` (`double`)
- `p_122368_` (`double`)
- `p_122369_` (`double`)

**Returns:** `public static Direction`

### getNearest

```java
public static Direction getNearest(float p_122373_, float p_122374_, float p_122375_)
```

**Parameters:**

- `p_122373_` (`float`)
- `p_122374_` (`float`)
- `p_122375_` (`float`)

**Returns:** `public static Direction`

### getNearest

```java
public static Direction getNearest(Vec3 p_333951_)
```

**Parameters:**

- `p_333951_` (`Vec3`)

**Returns:** `public static Direction`

### getNearest

```java
return getNearest()
```

**Returns:** `return`

### toString

```java
public String toString()
```

**Returns:** `String`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### verifyVertical

```java
private static DataResult<Direction> verifyVertical(Direction p_194529_)
```

**Parameters:**

- `p_194529_` (`Direction`)

**Returns:** `private static DataResult<Direction>`

### get

```java
public static Direction get(Direction.AxisDirection p_122391_, Direction.Axis p_122392_)
```

**Parameters:**

- `p_122391_` (`Direction.AxisDirection`)
- `p_122392_` (`Direction.Axis`)

**Returns:** `public static Direction`

### IllegalArgumentException

```java
throw new IllegalArgumentException("No such direction: " + p_122391_ + " " + p_122392_)
```

**Parameters:**

- `p_122392_` (`"No such direction: " + p_122391_ + " " +`)

**Returns:** `throw new`

### getNormal

```java
public Vec3i getNormal()
```

**Returns:** `public Vec3i`

### isFacingAngle

```java
public boolean isFacingAngle(float p_122371_)
```

**Parameters:**

- `p_122371_` (`float`)

**Returns:** `public boolean`

### X

```java
 X()
```

**Returns:** ``

### choose

```java
public int choose(int p_122496_, int p_122497_, int p_122498_)
```

**Parameters:**

- `p_122496_` (`int`)
- `p_122497_` (`int`)
- `p_122498_` (`int`)

**Returns:** `int`

### choose

```java
public double choose(double p_122492_, double p_122493_, double p_122494_)
```

**Parameters:**

- `p_122492_` (`double`)
- `p_122493_` (`double`)
- `p_122494_` (`double`)

**Returns:** `double`

### Y

```java
, Y()
```

**Returns:** `,`

### choose

```java
public int choose(int p_122510_, int p_122511_, int p_122512_)
```

**Parameters:**

- `p_122510_` (`int`)
- `p_122511_` (`int`)
- `p_122512_` (`int`)

**Returns:** `int`

### choose

```java
public double choose(double p_122506_, double p_122507_, double p_122508_)
```

**Parameters:**

- `p_122506_` (`double`)
- `p_122507_` (`double`)
- `p_122508_` (`double`)

**Returns:** `double`

### Z

```java
, Z()
```

**Returns:** `,`

### choose

```java
public int choose(int p_122524_, int p_122525_, int p_122526_)
```

**Parameters:**

- `p_122524_` (`int`)
- `p_122525_` (`int`)
- `p_122526_` (`int`)

**Returns:** `int`

### choose

```java
public double choose(double p_122520_, double p_122521_, double p_122522_)
```

**Parameters:**

- `p_122520_` (`double`)
- `p_122521_` (`double`)
- `p_122522_` (`double`)

**Returns:** `double`

### Axis

```java
 Axis(String p_122456_)
```

**Parameters:**

- `p_122456_` (`String`)

**Returns:** ``

### byName

```java
public static Direction.Axis byName(String p_122474_)
```

**Parameters:**

- `p_122474_` (`String`)

**Returns:** `Direction.Axis`

### getName

```java
public String getName()
```

**Returns:** `public String`

### isVertical

```java
public boolean isVertical()
```

**Returns:** `public boolean`

### isHorizontal

```java
public boolean isHorizontal()
```

**Returns:** `public boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### getRandom

```java
public static Direction.Axis getRandom(RandomSource p_235689_)
```

**Parameters:**

- `p_235689_` (`RandomSource`)

**Returns:** `public static Direction.Axis`

### test

```java
public boolean test(Direction p_122472_)
```

**Parameters:**

- `p_122472_` (`Direction`)

**Returns:** `public boolean`

### getPlane

```java
public Direction.Plane getPlane()
```

**Returns:** `public Direction.Plane`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### choose

```java
public abstract int choose(int p_122466_, int p_122467_, int p_122468_)
```

**Parameters:**

- `p_122466_` (`int`)
- `p_122467_` (`int`)
- `p_122468_` (`int`)

**Returns:** `public abstract int`

### choose

```java
public abstract double choose(double p_122463_, double p_122464_, double p_122465_)
```

**Parameters:**

- `p_122463_` (`double`)
- `p_122464_` (`double`)
- `p_122465_` (`double`)

**Returns:** `public abstract double`

### NEGATIVE

```java
, NEGATIVE("Towards negative")
```

**Parameters:**

- `negative"` (`"Towards`)

**Returns:** `,`

### AxisDirection

```java
private AxisDirection(int p_122538_, String p_122539_)
```

**Parameters:**

- `p_122538_` (`int`)
- `p_122539_` (`String`)

**Returns:** `private`

### getStep

```java
public int getStep()
```

**Returns:** `public int`

### getName

```java
public String getName()
```

**Returns:** `public String`

### toString

```java
public String toString()
```

**Returns:** `String`

### opposite

```java
public Direction.AxisDirection opposite()
```

**Returns:** `public Direction.AxisDirection`

### VERTICAL

```java
, VERTICAL(new Direction[]{Direction.UP, new Direction.Axis[]{Direction.Axis.Y})
```

**Parameters:**

- `Direction[]{Direction.UP` (`new`)
- `Direction.Axis[]{Direction.Axis.Y}` (`new`)

**Returns:** `,`

### Plane

```java
private Plane(Direction[] p_122555_, Direction.Axis[] p_122556_)
```

**Parameters:**

- `p_122555_` (`Direction[]`)
- `p_122556_` (`Direction.Axis[]`)

**Returns:** `private`

### getRandomDirection

```java
public Direction getRandomDirection(RandomSource p_235691_)
```

**Parameters:**

- `p_235691_` (`RandomSource`)

**Returns:** `public Direction`

### getRandomAxis

```java
public Direction.Axis getRandomAxis(RandomSource p_235693_)
```

**Parameters:**

- `p_235693_` (`RandomSource`)

**Returns:** `public Direction.Axis`

### test

```java
public boolean test(Direction p_122559_)
```

**Parameters:**

- `p_122559_` (`Direction`)

**Returns:** `public boolean`

### iterator

```java
public Iterator<Direction> iterator()
```

**Returns:** `Iterator<Direction>`

### stream

```java
public Stream<Direction> stream()
```

**Returns:** `public Stream<Direction>`

### shuffledCopy

```java
public List<Direction> shuffledCopy(RandomSource p_235695_)
```

**Parameters:**

- `p_235695_` (`RandomSource`)

**Returns:** `public List<Direction>`

### length

```java
public int length()
```

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Axis` | enum |  |
| `AxisDirection` | enum |  |
| `Plane` | enum |  |
