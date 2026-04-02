# AttachedToLeavesDecorator

**Package:** `net.minecraft.world.level.levelgen.feature.treedecorators`
**Type:** class
**Extends:** `TreeDecorator`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<AttachedToLeavesDecorator>` |  |
| `probability` | `float` |  |
| `exclusionRadiusXZ` | `int` |  |
| `exclusionRadiusY` | `int` |  |
| `blockProvider` | `BlockStateProvider` |  |
| `requiredEmptyBlocks` | `int` |  |
| `directions` | `List<Direction>` |  |

## Methods

### AttachedToLeavesDecorator

```java
public AttachedToLeavesDecorator(float p_225988_, int p_225989_, int p_225990_, BlockStateProvider p_225991_, int p_225992_, List<Direction> p_225993_)
```

**Parameters:**

- `p_225988_` (`float`)
- `p_225989_` (`int`)
- `p_225990_` (`int`)
- `p_225991_` (`BlockStateProvider`)
- `p_225992_` (`int`)
- `p_225993_` (`List<Direction>`)

**Returns:** `public`

### place

```java
public void place(TreeDecorator.Context p_226000_)
```

**Parameters:**

- `p_226000_` (`TreeDecorator.Context`)

### hasRequiredEmptyBlocks

```java
private boolean hasRequiredEmptyBlocks(TreeDecorator.Context p_226002_, BlockPos p_226003_, Direction p_226004_)
```

**Parameters:**

- `p_226002_` (`TreeDecorator.Context`)
- `p_226003_` (`BlockPos`)
- `p_226004_` (`Direction`)

**Returns:** `private boolean`

### type

```java
protected TreeDecoratorType<?> type()
```

**Returns:** `TreeDecoratorType<?>`
