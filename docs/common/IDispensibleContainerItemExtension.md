# IDispensibleContainerItemExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private DispensibleContainerItem self()
```

**Returns:** `private DispensibleContainerItem`

### emptyContents

```java
default boolean emptyContents(Player player, Level level, BlockPos pos, BlockHitResult hitResult, ItemStack container)
```

**Parameters:**

- `player` (`Player`)
- `level` (`Level`)
- `pos` (`BlockPos`)
- `hitResult` (`BlockHitResult`)
- `container` (`ItemStack`)

**Returns:** `boolean`
