# FlyingPathNavigation

**Package:** `net.minecraft.world.entity.ai.navigation`
**Type:** class
**Extends:** `PathNavigation`

## Methods

### FlyingPathNavigation

```java
public FlyingPathNavigation(Mob p_26424_, Level p_26425_)
```

**Parameters:**

- `p_26424_` (`Mob`)
- `p_26425_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createPathFinder

```java
protected PathFinder createPathFinder(int p_26428_)
```

**Parameters:**

- `p_26428_` (`int`)

**Returns:** `PathFinder`

### PathFinder

```java
return new PathFinder()
```

**Returns:** `return new`

### canMoveDirectly

```java
protected boolean canMoveDirectly(Vec3 p_262585_, Vec3 p_262682_)
```

**Parameters:**

- `p_262585_` (`Vec3`)
- `p_262682_` (`Vec3`)

**Returns:** `boolean`

### isClearForMovementBetween

```java
return isClearForMovementBetween()
```

**Returns:** `return`

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
public Path createPath(Entity p_26430_, int p_26431_)
```

**Parameters:**

- `p_26430_` (`Entity`)
- `p_26431_` (`int`)

**Returns:** `Path`

### tick

```java
public void tick()
```

### setCanOpenDoors

```java
public void setCanOpenDoors(boolean p_26441_)
```

**Parameters:**

- `p_26441_` (`boolean`)

**Returns:** `public void`

### canPassDoors

```java
public boolean canPassDoors()
```

**Returns:** `public boolean`

### setCanPassDoors

```java
public void setCanPassDoors(boolean p_26444_)
```

**Parameters:**

- `p_26444_` (`boolean`)

**Returns:** `public void`

### canOpenDoors

```java
public boolean canOpenDoors()
```

**Returns:** `public boolean`

### isStableDestination

```java
public boolean isStableDestination(BlockPos p_26439_)
```

**Parameters:**

- `p_26439_` (`BlockPos`)

**Returns:** `boolean`
