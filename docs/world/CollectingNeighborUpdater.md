# CollectingNeighborUpdater

**Package:** `net.minecraft.world.level.redstone`
**Type:** class
**Implements:** `NeighborUpdater`

## Methods

### CollectingNeighborUpdater

```java
public CollectingNeighborUpdater(Level p_230643_, int p_230644_)
```

**Parameters:**

- `p_230643_` (`Level`)
- `p_230644_` (`int`)

**Returns:** `public`

### shapeUpdate

```java
public void shapeUpdate(Direction p_230664_, BlockState p_230665_, BlockPos p_230666_, BlockPos p_230667_, int p_230668_, int p_230669_)
```

**Parameters:**

- `p_230664_` (`Direction`)
- `p_230665_` (`BlockState`)
- `p_230666_` (`BlockPos`)
- `p_230667_` (`BlockPos`)
- `p_230668_` (`int`)
- `p_230669_` (`int`)

### neighborChanged

```java
public void neighborChanged(BlockPos p_230653_, Block p_230654_, BlockPos p_230655_)
```

**Parameters:**

- `p_230653_` (`BlockPos`)
- `p_230654_` (`Block`)
- `p_230655_` (`BlockPos`)

### neighborChanged

```java
public void neighborChanged(BlockState p_230647_, BlockPos p_230648_, Block p_230649_, BlockPos p_230650_, boolean p_230651_)
```

**Parameters:**

- `p_230647_` (`BlockState`)
- `p_230648_` (`BlockPos`)
- `p_230649_` (`Block`)
- `p_230650_` (`BlockPos`)
- `p_230651_` (`boolean`)

### updateNeighborsAtExceptFromFacing

```java
public void updateNeighborsAtExceptFromFacing(BlockPos p_230657_, Block p_230658_, Direction p_230659_)
```

**Parameters:**

- `p_230657_` (`BlockPos`)
- `p_230658_` (`Block`)
- `p_230659_` (`Direction`)

### addAndRun

```java
private void addAndRun(BlockPos p_230661_, CollectingNeighborUpdater.NeighborUpdates p_230662_)
```

**Parameters:**

- `p_230661_` (`BlockPos`)
- `p_230662_` (`CollectingNeighborUpdater.NeighborUpdates`)

**Returns:** `private void`

### runUpdates

```java
private void runUpdates()
```

**Returns:** `private void`

### runNext

```java
public boolean runNext(Level p_230683_)
```

**Parameters:**

- `p_230683_` (`Level`)

**Returns:** `boolean`

### MultiNeighborUpdate

```java
 MultiNeighborUpdate(BlockPos p_230697_, Block p_230698_, Direction p_230699_)
```

**Parameters:**

- `p_230697_` (`BlockPos`)
- `p_230698_` (`Block`)
- `p_230699_` (`Direction`)

**Returns:** ``

### runNext

```java
public boolean runNext(Level p_230701_)
```

**Parameters:**

- `p_230701_` (`Level`)

**Returns:** `boolean`

### runNext

```java
boolean runNext(Level p_230702_)
```

**Parameters:**

- `p_230702_` (`Level`)

**Returns:** `boolean`

### runNext

```java
public boolean runNext(Level p_230716_)
```

**Parameters:**

- `p_230716_` (`Level`)

**Returns:** `boolean`

### runNext

```java
public boolean runNext(Level p_230734_)
```

**Parameters:**

- `p_230734_` (`Level`)

**Returns:** `boolean`
