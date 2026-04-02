# DismountHelper

**Package:** `net.minecraft.world.entity.vehicle`
**Type:** class

## Methods

### offsetsForDirection

```java
public static int[][] offsetsForDirection(Direction p_38468_)
```

**Parameters:**

- `p_38468_` (`Direction`)

**Returns:** `public static int[][]`

### isBlockFloorValid

```java
public static boolean isBlockFloorValid(double p_38440_)
```

**Parameters:**

- `p_38440_` (`double`)

**Returns:** `public static boolean`

### canDismountTo

```java
public static boolean canDismountTo(CollisionGetter p_38457_, LivingEntity p_38458_, AABB p_38459_)
```

**Parameters:**

- `p_38457_` (`CollisionGetter`)
- `p_38458_` (`LivingEntity`)
- `p_38459_` (`AABB`)

**Returns:** `public static boolean`

### canDismountTo

```java
public static boolean canDismountTo(CollisionGetter p_150280_, Vec3 p_150281_, LivingEntity p_150282_, Pose p_150283_)
```

**Parameters:**

- `p_150280_` (`CollisionGetter`)
- `p_150281_` (`Vec3`)
- `p_150282_` (`LivingEntity`)
- `p_150283_` (`Pose`)

**Returns:** `public static boolean`

### nonClimbableShape

```java
public static VoxelShape nonClimbableShape(BlockGetter p_38447_, BlockPos p_38448_)
```

**Parameters:**

- `p_38447_` (`BlockGetter`)
- `p_38448_` (`BlockPos`)

**Returns:** `public static VoxelShape`

### findCeilingFrom

```java
public static double findCeilingFrom(BlockPos p_38464_, int p_38465_, Function<BlockPos, VoxelShape> p_38466_)
```

**Parameters:**

- `p_38464_` (`BlockPos`)
- `p_38465_` (`int`)
- `p_38466_` (`Function<BlockPos, VoxelShape>`)

**Returns:** `public static double`

### findSafeDismountLocation

```java
public static Vec3 findSafeDismountLocation(EntityType<?> p_38442_, CollisionGetter p_38443_, BlockPos p_38444_, boolean p_38445_)
```

**Parameters:**

- `p_38442_` (`EntityType<?>`)
- `p_38443_` (`CollisionGetter`)
- `p_38444_` (`BlockPos`)
- `p_38445_` (`boolean`)

**Returns:** `Vec3`
