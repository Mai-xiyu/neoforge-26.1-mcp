# IBlockCapabilityProvider

**Package:** `net.neoforged.neoforge.capabilities`
**Type:** interface<T, C extends @Nullable Object>
**Annotations:** `@FunctionalInterface`

## Methods

### getCapability

```java
T getCapability(Level level, BlockPos pos, BlockState state, BlockEntity blockEntity, C context)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `blockEntity` (`BlockEntity`)
- `context` (`C`)

**Returns:** `T`
