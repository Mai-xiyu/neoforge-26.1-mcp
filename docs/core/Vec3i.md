# Vec3i

**Package:** `net.minecraft.core`
**Type:** class
**Implements:** `Comparable<Vec3i>`
**Annotations:** `@Immutable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<Vec3i>` |  |
| `ZERO` | `Vec3i` |  |

## Methods

### offsetCodec

```java
public static Codec<Vec3i> offsetCodec(int p_194651_)
```

**Parameters:**

- `p_194651_` (`int`)

**Returns:** `public static Codec<Vec3i>`

### Vec3i

```java
public Vec3i(int p_123296_, int p_123297_, int p_123298_)
```

**Parameters:**

- `p_123296_` (`int`)
- `p_123297_` (`int`)
- `p_123298_` (`int`)

**Returns:** `public`

### equals

```java
public boolean equals(Object p_123327_)
```

**Parameters:**

- `p_123327_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### compareTo

```java
public int compareTo(Vec3i p_123330_)
```

**Parameters:**

- `p_123330_` (`Vec3i`)

**Returns:** `public int`

### getX

```java
public int getX()
```

**Returns:** `public int`

### getY

```java
public int getY()
```

**Returns:** `public int`

### getZ

```java
public int getZ()
```

**Returns:** `public int`

### setX

```java
protected Vec3i setX(int p_175605_)
```

**Parameters:**

- `p_175605_` (`int`)

**Returns:** `protected Vec3i`

### setY

```java
protected Vec3i setY(int p_175604_)
```

**Parameters:**

- `p_175604_` (`int`)

**Returns:** `protected Vec3i`

### setZ

```java
protected Vec3i setZ(int p_175603_)
```

**Parameters:**

- `p_175603_` (`int`)

**Returns:** `protected Vec3i`

### offset

```java
public Vec3i offset(int p_175593_, int p_175594_, int p_175595_)
```

**Parameters:**

- `p_175593_` (`int`)
- `p_175594_` (`int`)
- `p_175595_` (`int`)

**Returns:** `public Vec3i`

### offset

```java
public Vec3i offset(Vec3i p_175597_)
```

**Parameters:**

- `p_175597_` (`Vec3i`)

**Returns:** `public Vec3i`

### subtract

```java
public Vec3i subtract(Vec3i p_175596_)
```

**Parameters:**

- `p_175596_` (`Vec3i`)

**Returns:** `public Vec3i`

### multiply

```java
public Vec3i multiply(int p_175602_)
```

**Parameters:**

- `p_175602_` (`int`)

**Returns:** `public Vec3i`

### above

```java
public Vec3i above()
```

**Returns:** `public Vec3i`

### above

```java
public Vec3i above(int p_123336_)
```

**Parameters:**

- `p_123336_` (`int`)

**Returns:** `public Vec3i`

### below

```java
public Vec3i below()
```

**Returns:** `public Vec3i`

### below

```java
public Vec3i below(int p_123335_)
```

**Parameters:**

- `p_123335_` (`int`)

**Returns:** `public Vec3i`

### north

```java
public Vec3i north()
```

**Returns:** `public Vec3i`

### north

```java
public Vec3i north(int p_175601_)
```

**Parameters:**

- `p_175601_` (`int`)

**Returns:** `public Vec3i`

### south

```java
public Vec3i south()
```

**Returns:** `public Vec3i`

### south

```java
public Vec3i south(int p_175600_)
```

**Parameters:**

- `p_175600_` (`int`)

**Returns:** `public Vec3i`

### west

```java
public Vec3i west()
```

**Returns:** `public Vec3i`

### west

```java
public Vec3i west(int p_175599_)
```

**Parameters:**

- `p_175599_` (`int`)

**Returns:** `public Vec3i`

### east

```java
public Vec3i east()
```

**Returns:** `public Vec3i`

### east

```java
public Vec3i east(int p_175598_)
```

**Parameters:**

- `p_175598_` (`int`)

**Returns:** `public Vec3i`

### relative

```java
public Vec3i relative(Direction p_175592_)
```

**Parameters:**

- `p_175592_` (`Direction`)

**Returns:** `public Vec3i`

### relative

```java
public Vec3i relative(Direction p_123321_, int p_123322_)
```

**Parameters:**

- `p_123321_` (`Direction`)
- `p_123322_` (`int`)

**Returns:** `public Vec3i`

### relative

```java
public Vec3i relative(Direction.Axis p_175590_, int p_175591_)
```

**Parameters:**

- `p_175590_` (`Direction.Axis`)
- `p_175591_` (`int`)

**Returns:** `public Vec3i`

### cross

```java
public Vec3i cross(Vec3i p_123325_)
```

**Parameters:**

- `p_123325_` (`Vec3i`)

**Returns:** `public Vec3i`

### closerThan

```java
public boolean closerThan(Vec3i p_123315_, double p_123316_)
```

**Parameters:**

- `p_123315_` (`Vec3i`)
- `p_123316_` (`double`)

**Returns:** `public boolean`

### closerToCenterThan

```java
public boolean closerToCenterThan(Position p_203196_, double p_203197_)
```

**Parameters:**

- `p_203196_` (`Position`)
- `p_203197_` (`double`)

**Returns:** `public boolean`

### distSqr

```java
public double distSqr(Vec3i p_123332_)
```

**Parameters:**

- `p_123332_` (`Vec3i`)

**Returns:** `public double`

### distToCenterSqr

```java
public double distToCenterSqr(Position p_203194_)
```

**Parameters:**

- `p_203194_` (`Position`)

**Returns:** `public double`

### distToCenterSqr

```java
public double distToCenterSqr(double p_203199_, double p_203200_, double p_203201_)
```

**Parameters:**

- `p_203199_` (`double`)
- `p_203200_` (`double`)
- `p_203201_` (`double`)

**Returns:** `public double`

### distToLowCornerSqr

```java
public double distToLowCornerSqr(double p_203203_, double p_203204_, double p_203205_)
```

**Parameters:**

- `p_203203_` (`double`)
- `p_203204_` (`double`)
- `p_203205_` (`double`)

**Returns:** `public double`

### distManhattan

```java
public int distManhattan(Vec3i p_123334_)
```

**Parameters:**

- `p_123334_` (`Vec3i`)

**Returns:** `public int`

### get

```java
public int get(Direction.Axis p_123305_)
```

**Parameters:**

- `p_123305_` (`Direction.Axis`)

**Returns:** `public int`

### toString

```java
public String toString()
```

**Returns:** `String`

### toShortString

```java
public String toShortString()
```

**Returns:** `public String`
