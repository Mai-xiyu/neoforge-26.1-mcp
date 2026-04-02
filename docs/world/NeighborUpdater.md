# NeighborUpdater

**Package:** `net.minecraft.world.level.redstone`
**Type:** interface

## Methods

### shapeUpdate

```java
void shapeUpdate(Direction p_230791_, BlockState p_230792_, BlockPos p_230793_, BlockPos p_230794_, int p_230795_, int p_230796_)
```

**Parameters:**

- `p_230791_` (`Direction`)
- `p_230792_` (`BlockState`)
- `p_230793_` (`BlockPos`)
- `p_230794_` (`BlockPos`)
- `p_230795_` (`int`)
- `p_230796_` (`int`)

### neighborChanged

```java
void neighborChanged(BlockPos p_230785_, Block p_230786_, BlockPos p_230787_)
```

**Parameters:**

- `p_230785_` (`BlockPos`)
- `p_230786_` (`Block`)
- `p_230787_` (`BlockPos`)

### neighborChanged

```java
void neighborChanged(BlockState p_230780_, BlockPos p_230781_, Block p_230782_, BlockPos p_230783_, boolean p_230784_)
```

**Parameters:**

- `p_230780_` (`BlockState`)
- `p_230781_` (`BlockPos`)
- `p_230782_` (`Block`)
- `p_230783_` (`BlockPos`)
- `p_230784_` (`boolean`)

### updateNeighborsAtExceptFromFacing

```java
default void updateNeighborsAtExceptFromFacing(BlockPos p_230788_, Block p_230789_, Direction p_230790_)
```

**Parameters:**

- `p_230788_` (`BlockPos`)
- `p_230789_` (`Block`)
- `p_230790_` (`Direction`)

**Returns:** `default void`

### executeShapeUpdate

```java
static void executeShapeUpdate(LevelAccessor p_230771_, Direction p_230772_, BlockState p_230773_, BlockPos p_230774_, BlockPos p_230775_, int p_230776_, int p_230777_)
```

**Parameters:**

- `p_230771_` (`LevelAccessor`)
- `p_230772_` (`Direction`)
- `p_230773_` (`BlockState`)
- `p_230774_` (`BlockPos`)
- `p_230775_` (`BlockPos`)
- `p_230776_` (`int`)
- `p_230777_` (`int`)

**Returns:** `static void`

### executeUpdate

```java
static void executeUpdate(Level p_230764_, BlockState p_230765_, BlockPos p_230766_, Block p_230767_, BlockPos p_230768_, boolean p_230769_)
```

**Parameters:**

- `p_230764_` (`Level`)
- `p_230765_` (`BlockState`)
- `p_230766_` (`BlockPos`)
- `p_230767_` (`Block`)
- `p_230768_` (`BlockPos`)
- `p_230769_` (`boolean`)

**Returns:** `static void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`
