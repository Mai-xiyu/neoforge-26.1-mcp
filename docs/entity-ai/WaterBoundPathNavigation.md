# WaterBoundPathNavigation

**Package:** `net.minecraft.world.entity.ai.navigation`
**Type:** class
**Extends:** `PathNavigation`

## Methods

### WaterBoundPathNavigation

```java
public WaterBoundPathNavigation(Mob p_26594_, Level p_26595_)
```

**Parameters:**

- `p_26594_` (`Mob`)
- `p_26595_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createPathFinder

```java
protected PathFinder createPathFinder(int p_26598_)
```

**Parameters:**

- `p_26598_` (`int`)

**Returns:** `PathFinder`

### PathFinder

```java
return new PathFinder()
```

**Returns:** `return new`

### canUpdatePath

```java
protected boolean canUpdatePath()
```

**Returns:** `boolean`

### getTempMobPos

```java
protected Vec3 getTempMobPos()
```

**Returns:** `Vec3`

### getGroundY

```java
protected double getGroundY(Vec3 p_186136_)
```

**Parameters:**

- `p_186136_` (`Vec3`)

**Returns:** `double`

### canMoveDirectly

```java
protected boolean canMoveDirectly(Vec3 p_186138_, Vec3 p_186139_)
```

**Parameters:**

- `p_186138_` (`Vec3`)
- `p_186139_` (`Vec3`)

**Returns:** `boolean`

### isClearForMovementBetween

```java
return isClearForMovementBetween()
```

**Returns:** `return`

### isStableDestination

```java
public boolean isStableDestination(BlockPos p_26608_)
```

**Parameters:**

- `p_26608_` (`BlockPos`)

**Returns:** `boolean`

### setCanFloat

```java
public void setCanFloat(boolean p_26612_)
```

**Parameters:**

- `p_26612_` (`boolean`)
