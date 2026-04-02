# WalkNodeEvaluator

**Package:** `net.minecraft.world.level.pathfinder`
**Type:** class
**Extends:** `NodeEvaluator`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SPACE_BETWEEN_WALL_POSTS` | `double` |  |

## Methods

### prepare

```java
public void prepare(PathNavigationRegion p_77620_, Mob p_77621_)
```

**Parameters:**

- `p_77620_` (`PathNavigationRegion`)
- `p_77621_` (`Mob`)

### done

```java
public void done()
```

### getStart

```java
public Node getStart()
```

**Returns:** `Node`

### getStartNode

```java
protected Node getStartNode(BlockPos p_230632_)
```

**Parameters:**

- `p_230632_` (`BlockPos`)

**Returns:** `protected Node`

### canStartAt

```java
protected boolean canStartAt(BlockPos p_262596_)
```

**Parameters:**

- `p_262596_` (`BlockPos`)

**Returns:** `protected boolean`

### getTarget

```java
public Target getTarget(double p_326793_, double p_326919_, double p_326802_)
```

**Parameters:**

- `p_326793_` (`double`)
- `p_326919_` (`double`)
- `p_326802_` (`double`)

**Returns:** `Target`

### getNeighbors

```java
public int getNeighbors(Node[] p_77640_, Node p_77641_)
```

**Parameters:**

- `p_77640_` (`Node[]`)
- `p_77641_` (`Node`)

**Returns:** `int`

### isNeighborValid

```java
protected boolean isNeighborValid(Node p_77627_, Node p_77628_)
```

**Parameters:**

- `p_77627_` (`Node`)
- `p_77628_` (`Node`)

**Returns:** `protected boolean`

### isDiagonalValid

```java
protected boolean isDiagonalValid(Node p_326907_, Node p_326803_, Node p_326821_)
```

**Parameters:**

- `p_326907_` (`Node`)
- `p_326803_` (`Node`)
- `p_326821_` (`Node`)

**Returns:** `protected boolean`

### isDiagonalValid

```java
protected boolean isDiagonalValid(Node p_77630_)
```

**Parameters:**

- `p_77630_` (`Node`)

**Returns:** `protected boolean`

### doesBlockHavePartialCollision

```java
private static boolean doesBlockHavePartialCollision(PathType p_326827_)
```

**Parameters:**

- `p_326827_` (`PathType`)

**Returns:** `private static boolean`

### canReachWithoutCollision

```java
private boolean canReachWithoutCollision(Node p_77625_)
```

**Parameters:**

- `p_77625_` (`Node`)

**Returns:** `private boolean`

### getFloorLevel

```java
protected double getFloorLevel(BlockPos p_164733_)
```

**Parameters:**

- `p_164733_` (`BlockPos`)

**Returns:** `protected double`

### getFloorLevel

```java
public static double getFloorLevel(BlockGetter p_77612_, BlockPos p_77613_)
```

**Parameters:**

- `p_77612_` (`BlockGetter`)
- `p_77613_` (`BlockPos`)

**Returns:** `public static double`

### isAmphibious

```java
protected boolean isAmphibious()
```

**Returns:** `protected boolean`

### findAcceptedNode

```java
protected Node findAcceptedNode(int p_164726_, int p_164727_, int p_164728_, int p_164729_, double p_164730_, Direction p_164731_, PathType p_326873_)
```

**Parameters:**

- `p_164726_` (`int`)
- `p_164727_` (`int`)
- `p_164728_` (`int`)
- `p_164729_` (`int`)
- `p_164730_` (`double`)
- `p_164731_` (`Direction`)
- `p_326873_` (`PathType`)

**Returns:** `Node`

### getMobJumpHeight

```java
private double getMobJumpHeight()
```

**Returns:** `private double`

### getNodeAndUpdateCostToMax

```java
private Node getNodeAndUpdateCostToMax(int p_230620_, int p_230621_, int p_230622_, PathType p_326789_, float p_230624_)
```

**Parameters:**

- `p_230620_` (`int`)
- `p_230621_` (`int`)
- `p_230622_` (`int`)
- `p_326789_` (`PathType`)
- `p_230624_` (`float`)

**Returns:** `private Node`

### getBlockedNode

```java
private Node getBlockedNode(int p_230628_, int p_230629_, int p_230630_)
```

**Parameters:**

- `p_230628_` (`int`)
- `p_230629_` (`int`)
- `p_230630_` (`int`)

**Returns:** `private Node`

### getClosedNode

```java
private Node getClosedNode(int p_326935_, int p_326904_, int p_326845_, PathType p_326820_)
```

**Parameters:**

- `p_326935_` (`int`)
- `p_326904_` (`int`)
- `p_326845_` (`int`)
- `p_326820_` (`PathType`)

**Returns:** `private Node`

### tryFindFirstGroundNodeBelow

```java
private Node tryFindFirstGroundNodeBelow(int p_326892_, int p_326901_, int p_326809_)
```

**Parameters:**

- `p_326892_` (`int`)
- `p_326901_` (`int`)
- `p_326809_` (`int`)

**Returns:** `private Node`

### hasCollisions

```java
private boolean hasCollisions(AABB p_77635_)
```

**Parameters:**

- `p_77635_` (`AABB`)

**Returns:** `private boolean`

### getCachedPathType

```java
protected PathType getCachedPathType(int p_326926_, int p_326795_, int p_326824_)
```

**Parameters:**

- `p_326926_` (`int`)
- `p_326795_` (`int`)
- `p_326824_` (`int`)

**Returns:** `protected PathType`

### getPathTypeOfMob

```java
public PathType getPathTypeOfMob(PathfindingContext p_330551_, int p_326939_, int p_326943_, int p_326876_, Mob p_326786_)
```

**Parameters:**

- `p_330551_` (`PathfindingContext`)
- `p_326939_` (`int`)
- `p_326943_` (`int`)
- `p_326876_` (`int`)
- `p_326786_` (`Mob`)

**Returns:** `PathType`

### getPathTypeWithinMobBB

```java
public Set<PathType> getPathTypeWithinMobBB(PathfindingContext p_331617_, int p_326916_, int p_326906_, int p_326848_)
```

**Parameters:**

- `p_331617_` (`PathfindingContext`)
- `p_326916_` (`int`)
- `p_326906_` (`int`)
- `p_326848_` (`int`)

**Returns:** `public Set<PathType>`

### getPathType

```java
public PathType getPathType(PathfindingContext p_330217_, int p_326856_, int p_326857_, int p_326859_)
```

**Parameters:**

- `p_330217_` (`PathfindingContext`)
- `p_326856_` (`int`)
- `p_326857_` (`int`)
- `p_326859_` (`int`)

**Returns:** `PathType`

### getPathTypeStatic

```java
public static PathType getPathTypeStatic(Mob p_332010_, BlockPos p_330520_)
```

**Parameters:**

- `p_332010_` (`Mob`)
- `p_330520_` (`BlockPos`)

**Returns:** `public static PathType`

### getPathTypeStatic

```java
public static PathType getPathTypeStatic(PathfindingContext p_330755_, BlockPos.MutableBlockPos p_331020_)
```

**Parameters:**

- `p_330755_` (`PathfindingContext`)
- `p_331020_` (`BlockPos.MutableBlockPos`)

**Returns:** `public static PathType`

### checkNeighbourBlocks

```java
> checkNeighbourBlocks()
```

**Returns:** `>`

### checkNeighbourBlocks

```java
public static PathType checkNeighbourBlocks(PathfindingContext p_331893_, int p_332169_, int p_330433_, int p_331506_, PathType p_326944_)
```

**Parameters:**

- `p_331893_` (`PathfindingContext`)
- `p_332169_` (`int`)
- `p_330433_` (`int`)
- `p_331506_` (`int`)
- `p_326944_` (`PathType`)

**Returns:** `public static PathType`

### getPathTypeFromState

```java
protected static PathType getPathTypeFromState(BlockGetter p_77644_, BlockPos p_77645_)
```

**Parameters:**

- `p_77644_` (`BlockGetter`)
- `p_77645_` (`BlockPos`)

**Returns:** `protected static PathType`
