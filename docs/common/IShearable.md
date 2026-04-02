# IShearable

**Package:** `net.neoforged.neoforge.common`
**Type:** interface

## Description

This interfaces allows shears (modded & vanilla) and Entity entities (modded & vanilla) to cooperate
without needing advance knowledge of each other.



In the future, this system may function for implementations on `Block`s as well.
TODO: Implement support for `Block` or remove default implementations from vanilla block classes.

## Methods

### isShearable

```java
default boolean isShearable(Player player, ItemStack item, Level level, BlockPos pos)
```

**Parameters:**

- `player` (`Player`)
- `item` (`ItemStack`)
- `level` (`Level`)
- `pos` (`BlockPos`)

**Returns:** `boolean`

### spawnShearedDrop

```java
void spawnShearedDrop(Level level, BlockPos pos, ItemStack drop)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `drop` (`ItemStack`)
