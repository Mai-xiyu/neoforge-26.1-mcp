# PortalShape

**Package:** `net.minecraft.world.level.portal`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_WIDTH` | `int` |  |
| `MAX_HEIGHT` | `int` |  |

## Methods

### findEmptyPortalShape

```java
public static Optional<PortalShape> findEmptyPortalShape(LevelAccessor p_77709_, BlockPos p_77710_, Direction.Axis p_77711_)
```

**Parameters:**

- `p_77709_` (`LevelAccessor`)
- `p_77710_` (`BlockPos`)
- `p_77711_` (`Direction.Axis`)

**Returns:** `public static Optional<PortalShape>`

### findPortalShape

```java
public static Optional<PortalShape> findPortalShape(LevelAccessor p_77713_, BlockPos p_77714_, Predicate<PortalShape> p_77715_, Direction.Axis p_77716_)
```

**Parameters:**

- `p_77713_` (`LevelAccessor`)
- `p_77714_` (`BlockPos`)
- `p_77715_` (`Predicate<PortalShape>`)
- `p_77716_` (`Direction.Axis`)

**Returns:** `public static Optional<PortalShape>`

### PortalShape

```java
public PortalShape(LevelAccessor p_77695_, BlockPos p_77696_, Direction.Axis p_77697_)
```

**Parameters:**

- `p_77695_` (`LevelAccessor`)
- `p_77696_` (`BlockPos`)
- `p_77697_` (`Direction.Axis`)

**Returns:** `public`

### calculateWidth

```java
private int calculateWidth()
```

**Returns:** `private int`

### getDistanceUntilEdgeAboveFrame

```java
private int getDistanceUntilEdgeAboveFrame(BlockPos p_77736_, Direction p_77737_)
```

**Parameters:**

- `p_77736_` (`BlockPos`)
- `p_77737_` (`Direction`)

**Returns:** `private int`

### calculateHeight

```java
private int calculateHeight()
```

**Returns:** `private int`

### hasTopFrame

```java
private boolean hasTopFrame(BlockPos.MutableBlockPos p_77731_, int p_77732_)
```

**Parameters:**

- `p_77731_` (`BlockPos.MutableBlockPos`)
- `p_77732_` (`int`)

**Returns:** `private boolean`

### getDistanceUntilTop

```java
private int getDistanceUntilTop(BlockPos.MutableBlockPos p_77729_)
```

**Parameters:**

- `p_77729_` (`BlockPos.MutableBlockPos`)

**Returns:** `private int`

### isEmpty

```java
private static boolean isEmpty(BlockState p_77718_)
```

**Parameters:**

- `p_77718_` (`BlockState`)

**Returns:** `private static boolean`

### isValid

```java
public boolean isValid()
```

**Returns:** `public boolean`

### createPortalBlocks

```java
public void createPortalBlocks()
```

**Returns:** `public void`

### isComplete

```java
public boolean isComplete()
```

**Returns:** `public boolean`

### getRelativePosition

```java
public static Vec3 getRelativePosition(BlockUtil.FoundRectangle p_77739_, Direction.Axis p_77740_, Vec3 p_77741_, EntityDimensions p_77742_)
```

**Parameters:**

- `p_77739_` (`BlockUtil.FoundRectangle`)
- `p_77740_` (`Direction.Axis`)
- `p_77741_` (`Vec3`)
- `p_77742_` (`EntityDimensions`)

**Returns:** `public static Vec3`

### Vec3

```java
return new Vec3()
```

**Returns:** `return new`

### findCollisionFreePosition

```java
public static Vec3 findCollisionFreePosition(Vec3 p_260315_, ServerLevel p_259704_, Entity p_259626_, EntityDimensions p_259816_)
```

**Parameters:**

- `p_260315_` (`Vec3`)
- `p_259704_` (`ServerLevel`)
- `p_259626_` (`Entity`)
- `p_259816_` (`EntityDimensions`)

**Returns:** `public static Vec3`
