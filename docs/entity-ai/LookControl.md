# LookControl

**Package:** `net.minecraft.world.entity.ai.control`
**Type:** class
**Implements:** `Control`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `mob` | `Mob` |  |
| `yMaxRotSpeed` | `float` |  |
| `xMaxRotAngle` | `float` |  |
| `lookAtCooldown` | `int` |  |
| `wantedX` | `double` |  |
| `wantedY` | `double` |  |
| `wantedZ` | `double` |  |

## Methods

### LookControl

```java
public LookControl(Mob p_24945_)
```

**Parameters:**

- `p_24945_` (`Mob`)

**Returns:** `public`

### setLookAt

```java
public void setLookAt(Vec3 p_24965_)
```

**Parameters:**

- `p_24965_` (`Vec3`)

**Returns:** `public void`

### setLookAt

```java
public void setLookAt(Entity p_148052_)
```

**Parameters:**

- `p_148052_` (`Entity`)

**Returns:** `public void`

### setLookAt

```java
public void setLookAt(Entity p_24961_, float p_24962_, float p_24963_)
```

**Parameters:**

- `p_24961_` (`Entity`)
- `p_24962_` (`float`)
- `p_24963_` (`float`)

**Returns:** `public void`

### setLookAt

```java
public void setLookAt(double p_24947_, double p_24948_, double p_24949_)
```

**Parameters:**

- `p_24947_` (`double`)
- `p_24948_` (`double`)
- `p_24949_` (`double`)

**Returns:** `public void`

### setLookAt

```java
public void setLookAt(double p_24951_, double p_24952_, double p_24953_, float p_24954_, float p_24955_)
```

**Parameters:**

- `p_24951_` (`double`)
- `p_24952_` (`double`)
- `p_24953_` (`double`)
- `p_24954_` (`float`)
- `p_24955_` (`float`)

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### clampHeadRotationToBody

```java
protected void clampHeadRotationToBody()
```

**Returns:** `protected void`

### resetXRotOnTick

```java
protected boolean resetXRotOnTick()
```

**Returns:** `protected boolean`

### isLookingAtTarget

```java
public boolean isLookingAtTarget()
```

**Returns:** `public boolean`

### getWantedX

```java
public double getWantedX()
```

**Returns:** `public double`

### getWantedY

```java
public double getWantedY()
```

**Returns:** `public double`

### getWantedZ

```java
public double getWantedZ()
```

**Returns:** `public double`

### getXRotD

```java
protected Optional<Float> getXRotD()
```

**Returns:** `protected Optional<Float>`

### getYRotD

```java
protected Optional<Float> getYRotD()
```

**Returns:** `protected Optional<Float>`

### rotateTowards

```java
protected float rotateTowards(float p_24957_, float p_24958_, float p_24959_)
```

**Parameters:**

- `p_24957_` (`float`)
- `p_24958_` (`float`)
- `p_24959_` (`float`)

**Returns:** `protected float`

### getWantedY

```java
private static double getWantedY(Entity p_24967_)
```

**Parameters:**

- `p_24967_` (`Entity`)

**Returns:** `private static double`
