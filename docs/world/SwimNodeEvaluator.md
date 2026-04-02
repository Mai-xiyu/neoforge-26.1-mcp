# SwimNodeEvaluator

**Package:** `net.minecraft.world.level.pathfinder`
**Type:** class
**Extends:** `NodeEvaluator`

## Methods

### SwimNodeEvaluator

```java
public SwimNodeEvaluator(boolean p_77457_)
```

**Parameters:**

- `p_77457_` (`boolean`)

**Returns:** `public`

### prepare

```java
public void prepare(PathNavigationRegion p_192959_, Mob p_192960_)
```

**Parameters:**

- `p_192959_` (`PathNavigationRegion`)
- `p_192960_` (`Mob`)

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
public Target getTarget(double p_326917_, double p_326806_, double p_326896_)
```

**Parameters:**

- `p_326917_` (`double`)
- `p_326806_` (`double`)
- `p_326896_` (`double`)

**Returns:** `Target`

### getNeighbors

```java
public int getNeighbors(Node[] p_77483_, Node p_77484_)
```

**Parameters:**

- `p_77483_` (`Node[]`)
- `p_77484_` (`Node`)

**Returns:** `int`

### isNodeValid

```java
protected boolean isNodeValid(Node p_192962_)
```

**Parameters:**

- `p_192962_` (`Node`)

**Returns:** `protected boolean`

### hasMalus

```java
private static boolean hasMalus(Node p_326813_)
```

**Parameters:**

- `p_326813_` (`Node`)

**Returns:** `private static boolean`

### findAcceptedNode

```java
protected Node findAcceptedNode(int p_263032_, int p_263066_, int p_263105_)
```

**Parameters:**

- `p_263032_` (`int`)
- `p_263066_` (`int`)
- `p_263105_` (`int`)

**Returns:** `Node`

### getCachedBlockType

```java
protected PathType getCachedBlockType(int p_192968_, int p_192969_, int p_192970_)
```

**Parameters:**

- `p_192968_` (`int`)
- `p_192969_` (`int`)
- `p_192970_` (`int`)

**Returns:** `protected PathType`

### getPathType

```java
public PathType getPathType(PathfindingContext p_330490_, int p_326812_, int p_326835_, int p_326945_)
```

**Parameters:**

- `p_330490_` (`PathfindingContext`)
- `p_326812_` (`int`)
- `p_326835_` (`int`)
- `p_326945_` (`int`)

**Returns:** `PathType`

### getPathTypeOfMob

```java
public PathType getPathTypeOfMob(PathfindingContext p_330584_, int p_77473_, int p_77474_, int p_77475_, Mob p_77476_)
```

**Parameters:**

- `p_330584_` (`PathfindingContext`)
- `p_77473_` (`int`)
- `p_77474_` (`int`)
- `p_77475_` (`int`)
- `p_77476_` (`Mob`)

**Returns:** `PathType`
