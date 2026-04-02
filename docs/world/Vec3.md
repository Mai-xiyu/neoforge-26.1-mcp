# Vec3

**Package:** `net.minecraft.world.phys`
**Type:** class
**Implements:** `Position`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<Vec3>` |  |
| `ZERO` | `Vec3` |  |
| `x` | `double` |  |
| `y` | `double` |  |
| `z` | `double` |  |

## Methods

### fromRGB24

```java
public static Vec3 fromRGB24(int p_82502_)
```

**Parameters:**

- `p_82502_` (`int`)

**Returns:** `public static Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### atLowerCornerOf

```java
public static Vec3 atLowerCornerOf(Vec3i p_82529_)
```

**Parameters:**

- `p_82529_` (`Vec3i`)

**Returns:** `public static Vec3`

### atLowerCornerWithOffset

```java
public static Vec3 atLowerCornerWithOffset(Vec3i p_272866_, double p_273680_, double p_273668_, double p_273687_)
```

**Parameters:**

- `p_272866_` (`Vec3i`)
- `p_273680_` (`double`)
- `p_273668_` (`double`)
- `p_273687_` (`double`)

**Returns:** `public static Vec3`

### atCenterOf

```java
public static Vec3 atCenterOf(Vec3i p_82513_)
```

**Parameters:**

- `p_82513_` (`Vec3i`)

**Returns:** `public static Vec3`

### atLowerCornerWithOffset

```java
return atLowerCornerWithOffset()
```

**Returns:** `return`

### atBottomCenterOf

```java
public static Vec3 atBottomCenterOf(Vec3i p_82540_)
```

**Parameters:**

- `p_82540_` (`Vec3i`)

**Returns:** `public static Vec3`

### atLowerCornerWithOffset

```java
return atLowerCornerWithOffset()
```

**Returns:** `return`

### upFromBottomCenterOf

```java
public static Vec3 upFromBottomCenterOf(Vec3i p_82515_, double p_82516_)
```

**Parameters:**

- `p_82515_` (`Vec3i`)
- `p_82516_` (`double`)

**Returns:** `public static Vec3`

### atLowerCornerWithOffset

```java
return atLowerCornerWithOffset()
```

**Returns:** `return`

### Vec3

```java
public Vec3(double p_82484_, double p_82485_, double p_82486_)
```

**Parameters:**

- `p_82484_` (`double`)
- `p_82485_` (`double`)
- `p_82486_` (`double`)

**Returns:** `public`

### Vec3

```java
public Vec3(Vector3f p_253821_)
```

**Parameters:**

- `p_253821_` (`Vector3f`)

**Returns:** `public`

### vectorTo

```java
public Vec3 vectorTo(Vec3 p_82506_)
```

**Parameters:**

- `p_82506_` (`Vec3`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3(p_82506_.x - this.x, p_82506_.y - this.y, p_82506_.z - this.z)
```

**Parameters:**

- `this.x` (`p_82506_.x -`)
- `this.y` (`p_82506_.y -`)
- `this.z` (`p_82506_.z -`)

**Returns:** `return new`

### normalize

```java
public Vec3 normalize()
```

**Returns:** `public Vec3`

### dot

```java
public double dot(Vec3 p_82527_)
```

**Parameters:**

- `p_82527_` (`Vec3`)

**Returns:** `public double`

### cross

```java
public Vec3 cross(Vec3 p_82538_)
```

**Parameters:**

- `p_82538_` (`Vec3`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3(this.y * p_82538_.z - this.z * p_82538_.y, this.z * p_82538_.x - this.x * p_82538_.z, this.x * p_82538_.y - this.y * p_82538_.x)
```

**Parameters:**

- `p_82538_.y` (`this.y * p_82538_.z - this.z *`)
- `p_82538_.z` (`this.z * p_82538_.x - this.x *`)
- `p_82538_.x` (`this.x * p_82538_.y - this.y *`)

**Returns:** `return new`

### subtract

```java
public Vec3 subtract(Vec3 p_82547_)
```

**Parameters:**

- `p_82547_` (`Vec3`)

**Returns:** `public Vec3`

### subtract

```java
public Vec3 subtract(double p_82493_, double p_82494_, double p_82495_)
```

**Parameters:**

- `p_82493_` (`double`)
- `p_82494_` (`double`)
- `p_82495_` (`double`)

**Returns:** `public Vec3`

### add

```java
public Vec3 add(Vec3 p_82550_)
```

**Parameters:**

- `p_82550_` (`Vec3`)

**Returns:** `public Vec3`

### add

```java
public Vec3 add(double p_82521_, double p_82522_, double p_82523_)
```

**Parameters:**

- `p_82521_` (`double`)
- `p_82522_` (`double`)
- `p_82523_` (`double`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3(this.x + p_82521_, this.y + p_82522_, this.z + p_82523_)
```

**Parameters:**

- `p_82521_` (`this.x +`)
- `p_82522_` (`this.y +`)
- `p_82523_` (`this.z +`)

**Returns:** `return new`

### closerThan

```java
public boolean closerThan(Position p_82510_, double p_82511_)
```

**Parameters:**

- `p_82510_` (`Position`)
- `p_82511_` (`double`)

**Returns:** `public boolean`

### distanceTo

```java
public double distanceTo(Vec3 p_82555_)
```

**Parameters:**

- `p_82555_` (`Vec3`)

**Returns:** `public double`

### distanceToSqr

```java
public double distanceToSqr(Vec3 p_82558_)
```

**Parameters:**

- `p_82558_` (`Vec3`)

**Returns:** `public double`

### distanceToSqr

```java
public double distanceToSqr(double p_82532_, double p_82533_, double p_82534_)
```

**Parameters:**

- `p_82532_` (`double`)
- `p_82533_` (`double`)
- `p_82534_` (`double`)

**Returns:** `public double`

### closerThan

```java
public boolean closerThan(Vec3 p_312866_, double p_312928_, double p_312788_)
```

**Parameters:**

- `p_312866_` (`Vec3`)
- `p_312928_` (`double`)
- `p_312788_` (`double`)

**Returns:** `public boolean`

### scale

```java
public Vec3 scale(double p_82491_)
```

**Parameters:**

- `p_82491_` (`double`)

**Returns:** `public Vec3`

### reverse

```java
public Vec3 reverse()
```

**Returns:** `public Vec3`

### multiply

```java
public Vec3 multiply(Vec3 p_82560_)
```

**Parameters:**

- `p_82560_` (`Vec3`)

**Returns:** `public Vec3`

### multiply

```java
public Vec3 multiply(double p_82543_, double p_82544_, double p_82545_)
```

**Parameters:**

- `p_82543_` (`double`)
- `p_82544_` (`double`)
- `p_82545_` (`double`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3(this.x * p_82543_, this.y * p_82544_, this.z * p_82545_)
```

**Parameters:**

- `p_82543_` (`this.x *`)
- `p_82544_` (`this.y *`)
- `p_82545_` (`this.z *`)

**Returns:** `return new`

### offsetRandom

```java
public Vec3 offsetRandom(RandomSource p_272810_, float p_273473_)
```

**Parameters:**

- `p_272810_` (`RandomSource`)
- `p_273473_` (`float`)

**Returns:** `public Vec3`

### length

```java
public double length()
```

**Returns:** `public double`

### lengthSqr

```java
public double lengthSqr()
```

**Returns:** `public double`

### horizontalDistance

```java
public double horizontalDistance()
```

**Returns:** `public double`

### horizontalDistanceSqr

```java
public double horizontalDistanceSqr()
```

**Returns:** `public double`

### equals

```java
public boolean equals(Object p_82552_)
```

**Parameters:**

- `p_82552_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### lerp

```java
public Vec3 lerp(Vec3 p_165922_, double p_165923_)
```

**Parameters:**

- `p_165922_` (`Vec3`)
- `p_165923_` (`double`)

**Returns:** `public Vec3`

### xRot

```java
public Vec3 xRot(float p_82497_)
```

**Parameters:**

- `p_82497_` (`float`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### yRot

```java
public Vec3 yRot(float p_82525_)
```

**Parameters:**

- `p_82525_` (`float`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### zRot

```java
public Vec3 zRot(float p_82536_)
```

**Parameters:**

- `p_82536_` (`float`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### directionFromRotation

```java
public static Vec3 directionFromRotation(Vec2 p_82504_)
```

**Parameters:**

- `p_82504_` (`Vec2`)

**Returns:** `public static Vec3`

### directionFromRotation

```java
return directionFromRotation()
```

**Returns:** `return`

### directionFromRotation

```java
public static Vec3 directionFromRotation(float p_82499_, float p_82500_)
```

**Parameters:**

- `p_82499_` (`float`)
- `p_82500_` (`float`)

**Returns:** `public static Vec3`

### align

```java
public Vec3 align(EnumSet<Direction.Axis> p_82518_)
```

**Parameters:**

- `p_82518_` (`EnumSet<Direction.Axis>`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### get

```java
public double get(Direction.Axis p_82508_)
```

**Parameters:**

- `p_82508_` (`Direction.Axis`)

**Returns:** `public double`

### with

```java
public Vec3 with(Direction.Axis p_193104_, double p_193105_)
```

**Parameters:**

- `p_193104_` (`Direction.Axis`)
- `p_193105_` (`double`)

**Returns:** `public Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### relative

```java
public Vec3 relative(Direction p_231076_, double p_231077_)
```

**Parameters:**

- `p_231076_` (`Direction`)
- `p_231077_` (`double`)

**Returns:** `public Vec3`

### x

```java
public final double x()
```

**Returns:** `double`

### y

```java
public final double y()
```

**Returns:** `double`

### z

```java
public final double z()
```

**Returns:** `double`

### toVector3f

```java
public Vector3f toVector3f()
```

**Returns:** `public Vector3f`
