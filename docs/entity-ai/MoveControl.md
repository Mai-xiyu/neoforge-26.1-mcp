# MoveControl

**Package:** `net.minecraft.world.entity.ai.control`
**Type:** class
**Implements:** `Control`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MIN_SPEED` | `float` |  |
| `MIN_SPEED_SQR` | `float` |  |
| `MAX_TURN` | `int` |  |
| `mob` | `Mob` |  |
| `wantedX` | `double` |  |
| `wantedY` | `double` |  |
| `wantedZ` | `double` |  |
| `speedModifier` | `double` |  |
| `strafeForwards` | `float` |  |
| `strafeRight` | `float` |  |
| `operation` | `MoveControl.Operation` |  |

## Methods

### MoveControl

```java
public MoveControl(Mob p_24983_)
```

**Parameters:**

- `p_24983_` (`Mob`)

**Returns:** `public`

### hasWanted

```java
public boolean hasWanted()
```

**Returns:** `public boolean`

### getSpeedModifier

```java
public double getSpeedModifier()
```

**Returns:** `public double`

### setWantedPosition

```java
public void setWantedPosition(double p_24984_, double p_24985_, double p_24986_, double p_24987_)
```

**Parameters:**

- `p_24984_` (`double`)
- `p_24985_` (`double`)
- `p_24986_` (`double`)
- `p_24987_` (`double`)

**Returns:** `public void`

### strafe

```java
public void strafe(float p_24989_, float p_24990_)
```

**Parameters:**

- `p_24989_` (`float`)
- `p_24990_` (`float`)

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### isWalkable

```java
private boolean isWalkable(float p_24997_, float p_24998_)
```

**Parameters:**

- `p_24997_` (`float`)
- `p_24998_` (`float`)

**Returns:** `private boolean`

### rotlerp

```java
protected float rotlerp(float p_24992_, float p_24993_, float p_24994_)
```

**Parameters:**

- `p_24992_` (`float`)
- `p_24993_` (`float`)
- `p_24994_` (`float`)

**Returns:** `protected float`

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

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Operation` | enum |  |
