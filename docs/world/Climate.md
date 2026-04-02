# Climate

**Package:** `net.minecraft.world.level.biome`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<Climate.Parameter>` |  |

## Methods

### target

```java
public static Climate.TargetPoint target(float p_186782_, float p_186783_, float p_186784_, float p_186785_, float p_186786_, float p_186787_)
```

**Parameters:**

- `p_186782_` (`float`)
- `p_186783_` (`float`)
- `p_186784_` (`float`)
- `p_186785_` (`float`)
- `p_186786_` (`float`)
- `p_186787_` (`float`)

**Returns:** `public static Climate.TargetPoint`

### parameters

```java
public static Climate.ParameterPoint parameters(float p_186789_, float p_186790_, float p_186791_, float p_186792_, float p_186793_, float p_186794_, float p_186795_)
```

**Parameters:**

- `p_186789_` (`float`)
- `p_186790_` (`float`)
- `p_186791_` (`float`)
- `p_186792_` (`float`)
- `p_186793_` (`float`)
- `p_186794_` (`float`)
- `p_186795_` (`float`)

**Returns:** `public static Climate.ParameterPoint`

### parameters

```java
public static Climate.ParameterPoint parameters(Climate.Parameter p_186799_, Climate.Parameter p_186800_, Climate.Parameter p_186801_, Climate.Parameter p_186802_, Climate.Parameter p_186803_, Climate.Parameter p_186804_, float p_186805_)
```

**Parameters:**

- `p_186799_` (`Climate.Parameter`)
- `p_186800_` (`Climate.Parameter`)
- `p_186801_` (`Climate.Parameter`)
- `p_186802_` (`Climate.Parameter`)
- `p_186803_` (`Climate.Parameter`)
- `p_186804_` (`Climate.Parameter`)
- `p_186805_` (`float`)

**Returns:** `public static Climate.ParameterPoint`

### quantizeCoord

```java
public static long quantizeCoord(float p_186780_)
```

**Parameters:**

- `p_186780_` (`float`)

**Returns:** `public static long`

### unquantizeCoord

```java
public static float unquantizeCoord(long p_186797_)
```

**Parameters:**

- `p_186797_` (`long`)

**Returns:** `public static float`

### empty

```java
public static Climate.Sampler empty()
```

**Returns:** `public static Climate.Sampler`

### findSpawnPosition

```java
public static BlockPos findSpawnPosition(List<Climate.ParameterPoint> p_207843_, Climate.Sampler p_207844_)
```

**Parameters:**

- `p_207843_` (`List<Climate.ParameterPoint>`)
- `p_207844_` (`Climate.Sampler`)

**Returns:** `public static BlockPos`

### distance

```java
long distance(Climate.RTree.Node<T> p_186810_, long[] p_186811_)
```

**Parameters:**

- `p_186810_` (`Climate.RTree.Node<T>`)
- `p_186811_` (`long[]`)

**Returns:** `long`

### Parameter

```java
public static record Parameter(long min, long max)
```

**Parameters:**

- `min` (`long`)
- `max` (`long`)

**Returns:** `public static record`

### point

```java
public static Climate.Parameter point(float p_186821_)
```

**Parameters:**

- `p_186821_` (`float`)

**Returns:** `public static Climate.Parameter`

### span

```java
return span()
```

**Returns:** `return`

### span

```java
public static Climate.Parameter span(float p_186823_, float p_186824_)
```

**Parameters:**

- `p_186823_` (`float`)
- `p_186824_` (`float`)

**Returns:** `public static Climate.Parameter`

### IllegalArgumentException

```java
throw new IllegalArgumentException("min > max: " + p_186823_ + " " + p_186824_)
```

**Parameters:**

- `p_186824_` (`"min > max: " + p_186823_ + " " +`)

**Returns:** `throw new`

### span

```java
public static Climate.Parameter span(Climate.Parameter p_186830_, Climate.Parameter p_186831_)
```

**Parameters:**

- `p_186830_` (`Climate.Parameter`)
- `p_186831_` (`Climate.Parameter`)

**Returns:** `public static Climate.Parameter`

### IllegalArgumentException

```java
throw new IllegalArgumentException("min > max: " + p_186830_ + " " + p_186831_)
```

**Parameters:**

- `p_186831_` (`"min > max: " + p_186830_ + " " +`)

**Returns:** `throw new`

### toString

```java
public String toString()
```

**Returns:** `String`

### distance

```java
public long distance(long p_186826_)
```

**Parameters:**

- `p_186826_` (`long`)

**Returns:** `public long`

### distance

```java
public long distance(Climate.Parameter p_186828_)
```

**Parameters:**

- `p_186828_` (`Climate.Parameter`)

**Returns:** `public long`

### span

```java
public Climate.Parameter span(Climate.Parameter p_186837_)
```

**Parameters:**

- `p_186837_` (`Climate.Parameter`)

**Returns:** `public Climate.Parameter`

### codec

```java
<T> public static <T> Codec<Climate.ParameterList<T>> codec(MapCodec<T> p_275523_)
```

**Parameters:**

- `p_275523_` (`MapCodec<T>`)

**Returns:** `public static <T> Codec<Climate.ParameterList<T>>`

### ParameterList

```java
public ParameterList(List<Pair<Climate.ParameterPoint, T>> p_186849_)
```

**Parameters:**

- `p_186849_` (`List<Pair<Climate.ParameterPoint, T>>`)

**Returns:** `public`

### values

```java
public List<Pair<Climate.ParameterPoint, T>> values()
```

**Returns:** `public List<Pair<Climate.ParameterPoint, T>>`

### findValue

```java
public T findValue(Climate.TargetPoint p_204253_)
```

**Parameters:**

- `p_204253_` (`Climate.TargetPoint`)

**Returns:** `public T`

### findValueBruteForce

```java
public T findValueBruteForce(Climate.TargetPoint p_204255_)
```

**Parameters:**

- `p_204255_` (`Climate.TargetPoint`)

**Returns:** `T`

### findValueIndex

```java
public T findValueIndex(Climate.TargetPoint p_186852_)
```

**Parameters:**

- `p_186852_` (`Climate.TargetPoint`)

**Returns:** `public T`

### findValueIndex

```java
protected T findValueIndex(Climate.TargetPoint p_186854_, Climate.DistanceMetric<T> p_186855_)
```

**Parameters:**

- `p_186854_` (`Climate.TargetPoint`)
- `p_186855_` (`Climate.DistanceMetric<T>`)

**Returns:** `protected T`

### ParameterPoint

```java
public static record ParameterPoint(Climate.Parameter temperature, Climate.Parameter humidity, Climate.Parameter continentalness, Climate.Parameter erosion, Climate.Parameter depth, Climate.Parameter weirdness, long offset)
```

**Parameters:**

- `temperature` (`Climate.Parameter`)
- `humidity` (`Climate.Parameter`)
- `continentalness` (`Climate.Parameter`)
- `erosion` (`Climate.Parameter`)
- `depth` (`Climate.Parameter`)
- `weirdness` (`Climate.Parameter`)
- `offset` (`long`)

**Returns:** `public static record`

### fitness

```java
long fitness(Climate.TargetPoint p_186883_)
```

**Parameters:**

- `p_186883_` (`Climate.TargetPoint`)

**Returns:** `long`

### parameterSpace

```java
protected List<Climate.Parameter> parameterSpace()
```

**Returns:** `protected List<Climate.Parameter>`

### RTree

```java
private RTree(Climate.RTree.Node<T> p_186913_)
```

**Parameters:**

- `p_186913_` (`Climate.RTree.Node<T>`)

**Returns:** `private`

### create

```java
<T> public static <T> Climate.RTree<T> create(List<Pair<Climate.ParameterPoint, T>> p_186936_)
```

**Parameters:**

- `p_186936_` (`List<Pair<Climate.ParameterPoint, T>>`)

**Returns:** `public static <T> Climate.RTree<T>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Need at least one value to build the search tree.")
```

**Parameters:**

- `tree."` (`"Need at least one value to build the search`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("Expecting parameter space to be 7, got " + i)
```

**Parameters:**

- `7` (`"Expecting parameter space to be`)
- `i` (`got " +`)

**Returns:** `throw new`

### build

```java
<T> private static <T> Climate.RTree.Node<T> build(int p_186921_, List<? extends Climate.RTree.Node<T>> p_186922_)
```

**Parameters:**

- `p_186921_` (`int`)
- `p_186922_` (`List<? extends Climate.RTree.Node<T>>`)

**Returns:** `private static <T> Climate.RTree.Node<T>`

### IllegalStateException

```java
throw new IllegalStateException("Need at least one child to build a node")
```

**Parameters:**

- `node"` (`"Need at least one child to build a`)

**Returns:** `throw new`

### sort

```java
 sort()
```

**Returns:** ``

### sort

```java
 sort()
```

**Returns:** ``

### sort

```java
<T> private static <T> void sort(List<? extends Climate.RTree.Node<T>> p_186938_, int p_186939_, int p_186940_, boolean p_186941_)
```

**Parameters:**

- `p_186938_` (`List<? extends Climate.RTree.Node<T>>`)
- `p_186939_` (`int`)
- `p_186940_` (`int`)
- `p_186941_` (`boolean`)

**Returns:** `private static <T> void`

### comparator

```java
<T> private static <T> Comparator<Climate.RTree.Node<T>> comparator(int p_186924_, boolean p_186925_)
```

**Parameters:**

- `p_186924_` (`int`)
- `p_186925_` (`boolean`)

**Returns:** `private static <T> Comparator<Climate.RTree.Node<T>>`

### bucketize

```java
<T> private static <T> List<Climate.RTree.SubTree<T>> bucketize(List<? extends Climate.RTree.Node<T>> p_186945_)
```

**Parameters:**

- `p_186945_` (`List<? extends Climate.RTree.Node<T>>`)

**Returns:** `private static <T> List<Climate.RTree.SubTree<T>>`

### cost

```java
private static long cost(Climate.Parameter[] p_186943_)
```

**Parameters:**

- `p_186943_` (`Climate.Parameter[]`)

**Returns:** `private static long`

### buildParameterSpace

```java
<T> static <T> List<Climate.Parameter> buildParameterSpace(List<? extends Climate.RTree.Node<T>> p_186947_)
```

**Parameters:**

- `p_186947_` (`List<? extends Climate.RTree.Node<T>>`)

**Returns:** `static <T> List<Climate.Parameter>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("SubTree needs at least one child")
```

**Parameters:**

- `child"` (`"SubTree needs at least one`)

**Returns:** `throw new`

### search

```java
public T search(Climate.TargetPoint p_186931_, Climate.DistanceMetric<T> p_186932_)
```

**Parameters:**

- `p_186931_` (`Climate.TargetPoint`)
- `p_186932_` (`Climate.DistanceMetric<T>`)

**Returns:** `public T`

### Leaf

```java
 Leaf(Climate.ParameterPoint p_186950_, T p_186951_)
```

**Parameters:**

- `p_186950_` (`Climate.ParameterPoint`)
- `p_186951_` (`T`)

**Returns:** ``

### search

```java
protected Climate.RTree.Leaf<T> search(long[] p_186953_, Climate.RTree.Leaf<T> p_186954_, Climate.DistanceMetric<T> p_186955_)
```

**Parameters:**

- `p_186953_` (`long[]`)
- `p_186954_` (`Climate.RTree.Leaf<T>`)
- `p_186955_` (`Climate.DistanceMetric<T>`)

**Returns:** `Climate.RTree.Leaf<T>`

### Node

```java
protected Node(List<Climate.Parameter> p_186958_)
```

**Parameters:**

- `p_186958_` (`List<Climate.Parameter>`)

**Returns:** `protected`

### search

```java
protected abstract Climate.RTree.Leaf<T> search(long[] p_186961_, Climate.RTree.Leaf<T> p_186962_, Climate.DistanceMetric<T> p_186963_)
```

**Parameters:**

- `p_186961_` (`long[]`)
- `p_186962_` (`Climate.RTree.Leaf<T>`)
- `p_186963_` (`Climate.DistanceMetric<T>`)

**Returns:** `protected abstract Climate.RTree.Leaf<T>`

### distance

```java
protected long distance(long[] p_186960_)
```

**Parameters:**

- `p_186960_` (`long[]`)

**Returns:** `protected long`

### toString

```java
public String toString()
```

**Returns:** `String`

### SubTree

```java
protected SubTree(List<? extends Climate.RTree.Node<T>> p_186967_)
```

**Parameters:**

- `p_186967_` (`List<? extends Climate.RTree.Node<T>>`)

**Returns:** `protected`

### SubTree

```java
protected SubTree(List<Climate.Parameter> p_186969_, List<? extends Climate.RTree.Node<T>> p_186970_)
```

**Parameters:**

- `p_186969_` (`List<Climate.Parameter>`)
- `p_186970_` (`List<? extends Climate.RTree.Node<T>>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### search

```java
protected Climate.RTree.Leaf<T> search(long[] p_186972_, Climate.RTree.Leaf<T> p_186973_, Climate.DistanceMetric<T> p_186974_)
```

**Parameters:**

- `p_186972_` (`long[]`)
- `p_186973_` (`Climate.RTree.Leaf<T>`)
- `p_186974_` (`Climate.DistanceMetric<T>`)

**Returns:** `Climate.RTree.Leaf<T>`

### Sampler

```java
public static record Sampler(DensityFunction temperature, DensityFunction humidity, DensityFunction continentalness, DensityFunction erosion, DensityFunction depth, DensityFunction weirdness, List<Climate.ParameterPoint> spawnTarget)
```

**Parameters:**

- `temperature` (`DensityFunction`)
- `humidity` (`DensityFunction`)
- `continentalness` (`DensityFunction`)
- `erosion` (`DensityFunction`)
- `depth` (`DensityFunction`)
- `weirdness` (`DensityFunction`)
- `spawnTarget` (`List<Climate.ParameterPoint>`)

**Returns:** `public static record`

### sample

```java
public Climate.TargetPoint sample(int p_186975_, int p_186976_, int p_186977_)
```

**Parameters:**

- `p_186975_` (`int`)
- `p_186976_` (`int`)
- `p_186977_` (`int`)

**Returns:** `public Climate.TargetPoint`

### findSpawnPosition

```java
public BlockPos findSpawnPosition()
```

**Returns:** `public BlockPos`

### SpawnFinder

```java
 SpawnFinder(List<Climate.ParameterPoint> p_207872_, Climate.Sampler p_207873_)
```

**Parameters:**

- `p_207872_` (`List<Climate.ParameterPoint>`)
- `p_207873_` (`Climate.Sampler`)

**Returns:** ``

### radialSearch

```java
private void radialSearch(List<Climate.ParameterPoint> p_207875_, Climate.Sampler p_207876_, float p_207877_, float p_207878_)
```

**Parameters:**

- `p_207875_` (`List<Climate.ParameterPoint>`)
- `p_207876_` (`Climate.Sampler`)
- `p_207877_` (`float`)
- `p_207878_` (`float`)

**Returns:** `private void`

### getSpawnPositionAndFitness

```java
private static Climate.SpawnFinder.Result getSpawnPositionAndFitness(List<Climate.ParameterPoint> p_207880_, Climate.Sampler p_207881_, int p_207882_, int p_207883_)
```

**Parameters:**

- `p_207880_` (`List<Climate.ParameterPoint>`)
- `p_207881_` (`Climate.Sampler`)
- `p_207882_` (`int`)
- `p_207883_` (`int`)

**Returns:** `private static Climate.SpawnFinder.Result`

### Result

```java
static record Result(BlockPos location, long fitness)
```

**Parameters:**

- `location` (`BlockPos`)
- `fitness` (`long`)

**Returns:** `static record`

### TargetPoint

```java
public static record TargetPoint(long temperature, long humidity, long continentalness, long erosion, long depth, long weirdness)
```

**Parameters:**

- `temperature` (`long`)
- `humidity` (`long`)
- `continentalness` (`long`)
- `erosion` (`long`)
- `depth` (`long`)
- `weirdness` (`long`)

**Returns:** `public static record`

### toParameterArray

```java
protected long[] toParameterArray()
```

**Returns:** `long[]`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Parameter` | record |  |
| `ParameterList` | class |  |
| `ParameterPoint` | record |  |
| `RTree` | class |  |
| `Sampler` | record |  |
| `TargetPoint` | record |  |
