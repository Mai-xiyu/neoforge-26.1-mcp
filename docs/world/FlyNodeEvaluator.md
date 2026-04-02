# FlyNodeEvaluator

**Package:** `net.minecraft.world.level.pathfinder`
**Type:** class
**Extends:** `WalkNodeEvaluator`

## Methods

### prepare

```java
public void prepare(PathNavigationRegion p_77261_, Mob p_77262_)
```

**Parameters:**

- `p_77261_` (`PathNavigationRegion`)
- `p_77262_` (`Mob`)

### done

```java
public void done()
```

### getStart

```java
public Node getStart()
```

**Returns:** `Node`

### canStartAt

```java
protected boolean canStartAt(BlockPos p_262645_)
```

**Parameters:**

- `p_262645_` (`BlockPos`)

**Returns:** `boolean`

### getTarget

```java
public Target getTarget(double p_326875_, double p_326936_, double p_326811_)
```

**Parameters:**

- `p_326875_` (`double`)
- `p_326936_` (`double`)
- `p_326811_` (`double`)

**Returns:** `Target`

### getNeighbors

```java
public int getNeighbors(Node[] p_77266_, Node p_77267_)
```

**Parameters:**

- `p_77266_` (`Node[]`)
- `p_77267_` (`Node`)

**Returns:** `int`

### hasMalus

```java
private boolean hasMalus(Node p_77264_)
```

**Parameters:**

- `p_77264_` (`Node`)

**Returns:** `private boolean`

### isOpen

```java
private boolean isOpen(Node p_77270_)
```

**Parameters:**

- `p_77270_` (`Node`)

**Returns:** `private boolean`

### findAcceptedNode

```java
protected Node findAcceptedNode(int p_262970_, int p_263018_, int p_262947_)
```

**Parameters:**

- `p_262970_` (`int`)
- `p_263018_` (`int`)
- `p_262947_` (`int`)

**Returns:** `Node`

### getCachedPathType

```java
protected PathType getCachedPathType(int p_326867_, int p_326833_, int p_326788_)
```

**Parameters:**

- `p_326867_` (`int`)
- `p_326833_` (`int`)
- `p_326788_` (`int`)

**Returns:** `PathType`

### getPathType

```java
public PathType getPathType(PathfindingContext p_331058_, int p_77246_, int p_77247_, int p_77248_)
```

**Parameters:**

- `p_331058_` (`PathfindingContext`)
- `p_77246_` (`int`)
- `p_77247_` (`int`)
- `p_77248_` (`int`)

**Returns:** `PathType`

### iteratePathfindingStartNodeCandidatePositions

```java
private Iterable<BlockPos> iteratePathfindingStartNodeCandidatePositions(Mob p_263108_)
```

**Parameters:**

- `p_263108_` (`Mob`)

**Returns:** `private Iterable<BlockPos>`
