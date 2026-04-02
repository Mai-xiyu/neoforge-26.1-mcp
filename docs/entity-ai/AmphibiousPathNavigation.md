# AmphibiousPathNavigation

**Package:** `net.minecraft.world.entity.ai.navigation`
**Type:** class
**Extends:** `PathNavigation`

## Methods

### AmphibiousPathNavigation

```java
public AmphibiousPathNavigation(Mob p_217788_, Level p_217789_)
```

**Parameters:**

- `p_217788_` (`Mob`)
- `p_217789_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createPathFinder

```java
protected PathFinder createPathFinder(int p_217792_)
```

**Parameters:**

- `p_217792_` (`int`)

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
protected double getGroundY(Vec3 p_217794_)
```

**Parameters:**

- `p_217794_` (`Vec3`)

**Returns:** `double`

### canMoveDirectly

```java
protected boolean canMoveDirectly(Vec3 p_217796_, Vec3 p_217797_)
```

**Parameters:**

- `p_217796_` (`Vec3`)
- `p_217797_` (`Vec3`)

**Returns:** `boolean`

### isStableDestination

```java
public boolean isStableDestination(BlockPos p_217799_)
```

**Parameters:**

- `p_217799_` (`BlockPos`)

**Returns:** `boolean`

### setCanFloat

```java
public void setCanFloat(boolean p_217801_)
```

**Parameters:**

- `p_217801_` (`boolean`)
