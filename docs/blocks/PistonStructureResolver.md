# PistonStructureResolver

**Package:** `net.minecraft.world.level.block.piston`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_PUSH_DEPTH` | `int` |  |

## Methods

### PistonStructureResolver

```java
public PistonStructureResolver(Level p_60418_, BlockPos p_60419_, Direction p_60420_, boolean p_60421_)
```

**Parameters:**

- `p_60418_` (`Level`)
- `p_60419_` (`BlockPos`)
- `p_60420_` (`Direction`)
- `p_60421_` (`boolean`)

**Returns:** `public`

### resolve

```java
public boolean resolve()
```

**Returns:** `public boolean`

### addBlockLine

```java
private boolean addBlockLine(BlockPos p_60434_, Direction p_60435_)
```

**Parameters:**

- `p_60434_` (`BlockPos`)
- `p_60435_` (`Direction`)

**Returns:** `private boolean`

### reorderListAtCollision

```java
private void reorderListAtCollision(int p_60424_, int p_60425_)
```

**Parameters:**

- `p_60424_` (`int`)
- `p_60425_` (`int`)

**Returns:** `private void`

### addBranchingBlocks

```java
private boolean addBranchingBlocks(BlockPos p_60432_)
```

**Parameters:**

- `p_60432_` (`BlockPos`)

**Returns:** `private boolean`

### getPushDirection

```java
public Direction getPushDirection()
```

**Returns:** `public Direction`

### getToPush

```java
public List<BlockPos> getToPush()
```

**Returns:** `public List<BlockPos>`

### getToDestroy

```java
public List<BlockPos> getToDestroy()
```

**Returns:** `public List<BlockPos>`
