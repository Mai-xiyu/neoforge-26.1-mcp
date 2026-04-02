# GroundPathNavigation

**Package:** `net.minecraft.world.entity.ai.navigation`
**Type:** class
**Extends:** `PathNavigation`

## Methods

### GroundPathNavigation

```java
public GroundPathNavigation(Mob p_26448_, Level p_26449_)
```

**Parameters:**

- `p_26448_` (`Mob`)
- `p_26449_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createPathFinder

```java
protected PathFinder createPathFinder(int p_26453_)
```

**Parameters:**

- `p_26453_` (`int`)

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

### createPath

```java
public Path createPath(BlockPos p_26475_, int p_26476_)
```

**Parameters:**

- `p_26475_` (`BlockPos`)
- `p_26476_` (`int`)

**Returns:** `Path`

### createPath

```java
public Path createPath(Entity p_26465_, int p_26466_)
```

**Parameters:**

- `p_26465_` (`Entity`)
- `p_26466_` (`int`)

**Returns:** `Path`

### getSurfaceY

```java
private int getSurfaceY()
```

**Returns:** `private int`

### trimPath

```java
protected void trimPath()
```

### hasValidPathType

```java
protected boolean hasValidPathType(PathType p_326937_)
```

**Parameters:**

- `p_326937_` (`PathType`)

**Returns:** `protected boolean`

### setCanOpenDoors

```java
public void setCanOpenDoors(boolean p_26478_)
```

**Parameters:**

- `p_26478_` (`boolean`)

**Returns:** `public void`

### canPassDoors

```java
public boolean canPassDoors()
```

**Returns:** `public boolean`

### setCanPassDoors

```java
public void setCanPassDoors(boolean p_148215_)
```

**Parameters:**

- `p_148215_` (`boolean`)

**Returns:** `public void`

### canOpenDoors

```java
public boolean canOpenDoors()
```

**Returns:** `public boolean`

### setAvoidSun

```java
public void setAvoidSun(boolean p_26491_)
```

**Parameters:**

- `p_26491_` (`boolean`)

**Returns:** `public void`

### setCanWalkOverFences

```java
public void setCanWalkOverFences(boolean p_255877_)
```

**Parameters:**

- `p_255877_` (`boolean`)

**Returns:** `public void`
