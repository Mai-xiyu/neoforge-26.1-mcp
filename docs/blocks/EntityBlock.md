# EntityBlock

**Package:** `net.minecraft.world.level.block`
**Type:** interface

## Methods

### newBlockEntity

```java
BlockEntity newBlockEntity(BlockPos p_153215_, BlockState p_153216_)
```

**Parameters:**

- `p_153215_` (`BlockPos`)
- `p_153216_` (`BlockState`)

**Returns:** `BlockEntity`

### getTicker

```java
default <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level p_153212_, BlockState p_153213_, BlockEntityType<T> p_153214_)
```

**Parameters:**

- `p_153212_` (`Level`)
- `p_153213_` (`BlockState`)
- `p_153214_` (`BlockEntityType<T>`)

**Returns:** `BlockEntityTicker<T>`

### getListener

```java
default <T extends BlockEntity> GameEventListener getListener(ServerLevel p_221121_, T p_221122_)
```

**Parameters:**

- `p_221121_` (`ServerLevel`)
- `p_221122_` (`T`)

**Returns:** `GameEventListener`
