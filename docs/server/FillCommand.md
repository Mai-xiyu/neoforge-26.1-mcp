# FillCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_214443_, CommandBuildContext p_214444_)
```

**Parameters:**

- `p_214443_` (`CommandDispatcher<CommandSourceStack>`)
- `p_214444_` (`CommandBuildContext`)

**Returns:** `public static void`

### fillBlocks

```java
private static int fillBlocks(CommandSourceStack p_137386_, BoundingBox p_137387_, BlockInput p_137388_, FillCommand.Mode p_137389_, Predicate<BlockInWorld> p_137390_)
```

**Parameters:**

- `p_137386_` (`CommandSourceStack`)
- `p_137387_` (`BoundingBox`)
- `p_137388_` (`BlockInput`)
- `p_137389_` (`FillCommand.Mode`)
- `p_137390_` (`Predicate<BlockInWorld>`)

**Returns:** `private static int`

### Mode

```java
private Mode(SetBlockCommand.Filter p_137416_)
```

**Parameters:**

- `p_137416_` (`SetBlockCommand.Filter`)

**Returns:** `private`
