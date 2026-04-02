# PortalForcer

**Package:** `net.minecraft.world.level.portal`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TICKET_RADIUS` | `int` |  |
| `level` | `ServerLevel` |  |

## Methods

### PortalForcer

```java
public PortalForcer(ServerLevel p_77650_)
```

**Parameters:**

- `p_77650_` (`ServerLevel`)

**Returns:** `public`

### findClosestPortalPosition

```java
public Optional<BlockPos> findClosestPortalPosition(BlockPos p_352378_, boolean p_352309_, WorldBorder p_352374_)
```

**Parameters:**

- `p_352378_` (`BlockPos`)
- `p_352309_` (`boolean`)
- `p_352374_` (`WorldBorder`)

**Returns:** `public Optional<BlockPos>`

### createPortal

```java
public Optional<BlockUtil.FoundRectangle> createPortal(BlockPos p_77667_, Direction.Axis p_77668_)
```

**Parameters:**

- `p_77667_` (`BlockPos`)
- `p_77668_` (`Direction.Axis`)

**Returns:** `public Optional<BlockUtil.FoundRectangle>`

### canPortalReplaceBlock

```java
private boolean canPortalReplaceBlock(BlockPos.MutableBlockPos p_248971_)
```

**Parameters:**

- `p_248971_` (`BlockPos.MutableBlockPos`)

**Returns:** `private boolean`

### canHostFrame

```java
private boolean canHostFrame(BlockPos p_77662_, BlockPos.MutableBlockPos p_77663_, Direction p_77664_, int p_77665_)
```

**Parameters:**

- `p_77662_` (`BlockPos`)
- `p_77663_` (`BlockPos.MutableBlockPos`)
- `p_77664_` (`Direction`)
- `p_77665_` (`int`)

**Returns:** `private boolean`
