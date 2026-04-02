# AmphibiousNodeEvaluator

**Package:** `net.minecraft.world.level.pathfinder`
**Type:** class
**Extends:** `WalkNodeEvaluator`

## Methods

### AmphibiousNodeEvaluator

```java
public AmphibiousNodeEvaluator(boolean p_164659_)
```

**Parameters:**

- `p_164659_` (`boolean`)

**Returns:** `public`

### prepare

```java
public void prepare(PathNavigationRegion p_164671_, Mob p_164672_)
```

**Parameters:**

- `p_164671_` (`PathNavigationRegion`)
- `p_164672_` (`Mob`)

### done

```java
public void done()
```

### getStart

```java
public Node getStart()
```

**Returns:** `Node`

### getTarget

```java
public Target getTarget(double p_326847_, double p_326890_, double p_326832_)
```

**Parameters:**

- `p_326847_` (`double`)
- `p_326890_` (`double`)
- `p_326832_` (`double`)

**Returns:** `Target`

### getNeighbors

```java
public int getNeighbors(Node[] p_164676_, Node p_164677_)
```

**Parameters:**

- `p_164676_` (`Node[]`)
- `p_164677_` (`Node`)

**Returns:** `int`

### isVerticalNeighborValid

```java
private boolean isVerticalNeighborValid(Node p_230611_, Node p_230612_)
```

**Parameters:**

- `p_230611_` (`Node`)
- `p_230612_` (`Node`)

**Returns:** `private boolean`

### isAmphibious

```java
protected boolean isAmphibious()
```

**Returns:** `boolean`

### getPathType

```java
public PathType getPathType(PathfindingContext p_330489_, int p_164667_, int p_164668_, int p_164669_)
```

**Parameters:**

- `p_330489_` (`PathfindingContext`)
- `p_164667_` (`int`)
- `p_164668_` (`int`)
- `p_164669_` (`int`)

**Returns:** `PathType`
