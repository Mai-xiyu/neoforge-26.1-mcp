# DynamicBlockStateModel

**Package:** `net.neoforged.neoforge.client.model`
**Type:** interface
**Extends:** `BlockStateModel`
**Side:** 🖥️ Client

## Description

Convenience interface for block state models that wish to support the NeoForge-added context
in `BlockStateModelExtension#collectParts(BlockAndTintGetter, BlockPos, BlockState, RandomSource, List)`.

## Methods

### collectParts

```java
default void collectParts(RandomSource random, List<BlockStateModelPart> parts)
```

**Parameters:**

- `random` (`RandomSource`)
- `parts` (`List<BlockStateModelPart>`)

### collectParts

```java
void collectParts(BlockAndTintGetter level, BlockPos pos, BlockState state, RandomSource random, List<BlockStateModelPart> parts)
```

**Parameters:**

- `level` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `random` (`RandomSource`)
- `parts` (`List<BlockStateModelPart>`)
