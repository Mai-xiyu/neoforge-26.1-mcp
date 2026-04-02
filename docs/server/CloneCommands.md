# CloneCommands

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FILTER_AIR` | `Predicate<BlockInWorld>` |  |

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_214424_, CommandBuildContext p_214425_)
```

**Parameters:**

- `p_214424_` (`CommandDispatcher<CommandSourceStack>`)
- `p_214425_` (`CommandBuildContext`)

**Returns:** `public static void`

### beginEndDestinationAndModeSuffix

```java
private static ArgumentBuilder<CommandSourceStack, ?> beginEndDestinationAndModeSuffix(CommandBuildContext p_265681_, CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, ServerLevel> p_265514_)
```

**Parameters:**

- `p_265681_` (`CommandBuildContext`)
- `p_265514_` (`CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, ServerLevel>`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### getLoadedDimensionAndPosition

```java
private static CloneCommands.DimensionAndPosition getLoadedDimensionAndPosition(CommandContext<CommandSourceStack> p_265513_, ServerLevel p_265183_, String p_265511_)
```

**Parameters:**

- `p_265513_` (`CommandContext<CommandSourceStack>`)
- `p_265183_` (`ServerLevel`)
- `p_265511_` (`String`)

**Returns:** `private static CloneCommands.DimensionAndPosition`

### destinationAndModeSuffix

```java
private static ArgumentBuilder<CommandSourceStack, ?> destinationAndModeSuffix(CommandBuildContext p_265238_, CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, ServerLevel> p_265621_, CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, ServerLevel> p_265296_)
```

**Parameters:**

- `p_265238_` (`CommandBuildContext`)
- `p_265621_` (`CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, ServerLevel>`)
- `p_265296_` (`CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, ServerLevel>`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### wrapWithCloneMode

```java
private static ArgumentBuilder<CommandSourceStack, ?> wrapWithCloneMode(CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, CloneCommands.DimensionAndPosition> p_265374_, CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, CloneCommands.DimensionAndPosition> p_265134_, CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, CloneCommands.DimensionAndPosition> p_265546_, CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, Predicate<BlockInWorld>> p_265798_, ArgumentBuilder<CommandSourceStack, ?> p_265069_)
```

**Parameters:**

- `p_265374_` (`CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, CloneCommands.DimensionAndPosition>`)
- `p_265134_` (`CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, CloneCommands.DimensionAndPosition>`)
- `p_265546_` (`CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, CloneCommands.DimensionAndPosition>`)
- `p_265798_` (`CloneCommands.CommandFunction<CommandContext<CommandSourceStack>, Predicate<BlockInWorld>>`)
- `p_265069_` (`ArgumentBuilder<CommandSourceStack, ?>`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### clone

```java
private static int clone(CommandSourceStack p_265047_, CloneCommands.DimensionAndPosition p_265232_, CloneCommands.DimensionAndPosition p_265188_, CloneCommands.DimensionAndPosition p_265594_, Predicate<BlockInWorld> p_265585_, CloneCommands.Mode p_265530_)
```

**Parameters:**

- `p_265047_` (`CommandSourceStack`)
- `p_265232_` (`CloneCommands.DimensionAndPosition`)
- `p_265188_` (`CloneCommands.DimensionAndPosition`)
- `p_265594_` (`CloneCommands.DimensionAndPosition`)
- `p_265585_` (`Predicate<BlockInWorld>`)
- `p_265530_` (`CloneCommands.Mode`)

**Returns:** `private static int`

### CloneBlockEntityInfo

```java
static record CloneBlockEntityInfo(CompoundTag tag, DataComponentMap components)
```

**Parameters:**

- `tag` (`CompoundTag`)
- `components` (`DataComponentMap`)

**Returns:** `static record`

### CloneBlockInfo

```java
static record CloneBlockInfo(BlockPos pos, BlockState state, CloneCommands.CloneBlockEntityInfo blockEntityInfo)
```

**Parameters:**

- `pos` (`BlockPos`)
- `state` (`BlockState`)
- `blockEntityInfo` (`CloneCommands.CloneBlockEntityInfo`)

**Returns:** `static record`

### apply

```java
R apply(T p_265571_)
```

**Parameters:**

- `p_265571_` (`T`)

**Returns:** `R`

### DimensionAndPosition

```java
static record DimensionAndPosition(ServerLevel dimension, BlockPos position)
```

**Parameters:**

- `dimension` (`ServerLevel`)
- `position` (`BlockPos`)

**Returns:** `static record`

### NORMAL

```java
, NORMAL()
```

**Returns:** `,`

### Mode

```java
private Mode(boolean p_136795_)
```

**Parameters:**

- `p_136795_` (`boolean`)

**Returns:** `private`

### canOverlap

```java
public boolean canOverlap()
```

**Returns:** `public boolean`
