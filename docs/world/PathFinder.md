# PathFinder

**Package:** `net.minecraft.world.level.pathfinder`
**Type:** class

## Methods

### PathFinder

```java
public PathFinder(NodeEvaluator p_77425_, int p_77426_)
```

**Parameters:**

- `p_77425_` (`NodeEvaluator`)
- `p_77426_` (`int`)

**Returns:** `public`

### findPath

```java
public Path findPath(PathNavigationRegion p_77428_, Mob p_77429_, Set<BlockPos> p_77430_, float p_77431_, int p_77432_, float p_77433_)
```

**Parameters:**

- `p_77428_` (`PathNavigationRegion`)
- `p_77429_` (`Mob`)
- `p_77430_` (`Set<BlockPos>`)
- `p_77431_` (`float`)
- `p_77432_` (`int`)
- `p_77433_` (`float`)

**Returns:** `Path`

### distance

```java
protected float distance(Node p_230617_, Node p_230618_)
```

**Parameters:**

- `p_230617_` (`Node`)
- `p_230618_` (`Node`)

**Returns:** `protected float`

### getBestH

```java
private float getBestH(Node p_77445_, Set<Target> p_77446_)
```

**Parameters:**

- `p_77445_` (`Node`)
- `p_77446_` (`Set<Target>`)

**Returns:** `private float`

### reconstructPath

```java
private Path reconstructPath(Node p_77435_, BlockPos p_77436_, boolean p_77437_)
```

**Parameters:**

- `p_77435_` (`Node`)
- `p_77436_` (`BlockPos`)
- `p_77437_` (`boolean`)

**Returns:** `private Path`

### Path

```java
return new Path()
```

**Returns:** `return new`
