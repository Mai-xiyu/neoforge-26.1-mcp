# TreeDecoratorType

**Package:** `net.minecraft.world.level.levelgen.feature.treedecorators`
**Type:** class<P extends TreeDecorator>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TRUNK_VINE` | `TreeDecoratorType<TrunkVineDecorator>` |  |
| `LEAVE_VINE` | `TreeDecoratorType<LeaveVineDecorator>` |  |
| `COCOA` | `TreeDecoratorType<CocoaDecorator>` |  |
| `BEEHIVE` | `TreeDecoratorType<BeehiveDecorator>` |  |
| `ALTER_GROUND` | `TreeDecoratorType<AlterGroundDecorator>` |  |
| `ATTACHED_TO_LEAVES` | `TreeDecoratorType<AttachedToLeavesDecorator>` |  |

## Methods

### register

```java
<P extends TreeDecorator> private static <P extends TreeDecorator> TreeDecoratorType<P> register(String p_70053_, MapCodec<P> p_338285_)
```

**Parameters:**

- `p_70053_` (`String`)
- `p_338285_` (`MapCodec<P>`)

**Returns:** `private static <P extends TreeDecorator> TreeDecoratorType<P>`

### TreeDecoratorType

```java
public TreeDecoratorType(MapCodec<P> p_338862_)
```

**Parameters:**

- `p_338862_` (`MapCodec<P>`)

**Returns:** `public`

### codec

```java
public MapCodec<P> codec()
```

**Returns:** `public MapCodec<P>`
