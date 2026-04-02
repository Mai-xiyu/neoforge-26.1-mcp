# Camera

**Package:** `net.minecraft.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FOG_DISTANCE_SCALE` | `float` |  |

## Methods

### setup

```java
public void setup(BlockGetter p_90576_, Entity p_90577_, boolean p_90578_, boolean p_90579_, float p_90580_)
```

**Parameters:**

- `p_90576_` (`BlockGetter`)
- `p_90577_` (`Entity`)
- `p_90578_` (`boolean`)
- `p_90579_` (`boolean`)
- `p_90580_` (`float`)

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### getMaxZoom

```java
private float getMaxZoom(float p_350335_)
```

**Parameters:**

- `p_350335_` (`float`)

**Returns:** `private float`

### move

```java
protected void move(float p_351037_, float p_351008_, float p_350869_)
```

**Parameters:**

- `p_351037_` (`float`)
- `p_351008_` (`float`)
- `p_350869_` (`float`)

**Returns:** `protected void`

### setRotation

```java
protected void setRotation(float p_90573_, float p_90574_)
```

**Parameters:**

- `p_90573_` (`float`)
- `p_90574_` (`float`)

### setRotation

```java
 setRotation()
```

**Returns:** ``

### setRotation

```java
protected void setRotation(float p_90573_, float p_90574_, float roll)
```

**Parameters:**

- `p_90573_` (`float`)
- `p_90574_` (`float`)
- `roll` (`float`)

**Returns:** `protected void`

### setPosition

```java
protected void setPosition(double p_90585_, double p_90586_, double p_90587_)
```

**Parameters:**

- `p_90585_` (`double`)
- `p_90586_` (`double`)
- `p_90587_` (`double`)

**Returns:** `protected void`

### setPosition

```java
protected void setPosition(Vec3 p_90582_)
```

**Parameters:**

- `p_90582_` (`Vec3`)

**Returns:** `protected void`

### getPosition

```java
public Vec3 getPosition()
```

**Returns:** `public Vec3`

### getBlockPosition

```java
public BlockPos getBlockPosition()
```

**Returns:** `public BlockPos`

### getXRot

```java
public float getXRot()
```

**Returns:** `public float`

### getYRot

```java
public float getYRot()
```

**Returns:** `public float`

### rotation

```java
public Quaternionf rotation()
```

**Returns:** `public Quaternionf`

### getEntity

```java
public Entity getEntity()
```

**Returns:** `public Entity`

### isInitialized

```java
public boolean isInitialized()
```

**Returns:** `public boolean`

### isDetached

```java
public boolean isDetached()
```

**Returns:** `public boolean`

### getNearPlane

```java
public Camera.NearPlane getNearPlane()
```

**Returns:** `public Camera.NearPlane`

### getFluidInCamera

```java
public FogType getFluidInCamera()
```

**Returns:** `public FogType`

### getLookVector

```java
public final Vector3f getLookVector()
```

**Returns:** `public final Vector3f`

### getUpVector

```java
public final Vector3f getUpVector()
```

**Returns:** `public final Vector3f`

### getLeftVector

```java
public final Vector3f getLeftVector()
```

**Returns:** `public final Vector3f`

### reset

```java
public void reset()
```

**Returns:** `public void`

### getPartialTickTime

```java
public float getPartialTickTime()
```

**Returns:** `public float`

### getRoll

```java
public float getRoll()
```

**Returns:** `public float`

### getBlockAtCamera

```java
public net.minecraft.world.level.block.state.BlockState getBlockAtCamera()
```

**Returns:** `public net.minecraft.world.level.block.state.BlockState`

### NearPlane

```java
 NearPlane(Vec3 p_167691_, Vec3 p_167692_, Vec3 p_167693_)
```

**Parameters:**

- `p_167691_` (`Vec3`)
- `p_167692_` (`Vec3`)
- `p_167693_` (`Vec3`)

**Returns:** ``

### getTopLeft

```java
public Vec3 getTopLeft()
```

**Returns:** `public Vec3`

### getTopRight

```java
public Vec3 getTopRight()
```

**Returns:** `public Vec3`

### getBottomLeft

```java
public Vec3 getBottomLeft()
```

**Returns:** `public Vec3`

### getBottomRight

```java
public Vec3 getBottomRight()
```

**Returns:** `public Vec3`

### getPointOnPlane

```java
public Vec3 getPointOnPlane(float p_167696_, float p_167697_)
```

**Parameters:**

- `p_167696_` (`float`)
- `p_167697_` (`float`)

**Returns:** `public Vec3`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `NearPlane` | class |  |
