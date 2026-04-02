# SetBlockCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_214731_, CommandBuildContext p_214732_)
```

**Parameters:**

- `p_214731_` (`CommandDispatcher<CommandSourceStack>`)
- `p_214732_` (`CommandBuildContext`)

**Returns:** `public static void`

### setBlock

```java
private static int setBlock(CommandSourceStack p_138608_, BlockPos p_138609_, BlockInput p_138610_, SetBlockCommand.Mode p_138611_, Predicate<BlockInWorld> p_138612_)
```

**Parameters:**

- `p_138608_` (`CommandSourceStack`)
- `p_138609_` (`BlockPos`)
- `p_138610_` (`BlockInput`)
- `p_138611_` (`SetBlockCommand.Mode`)
- `p_138612_` (`Predicate<BlockInWorld>`)

**Returns:** `private static int`

### filter

```java
BlockInput filter(BoundingBox p_138620_, BlockPos p_138621_, BlockInput p_138622_, ServerLevel p_138623_)
```

**Parameters:**

- `p_138620_` (`BoundingBox`)
- `p_138621_` (`BlockPos`)
- `p_138622_` (`BlockInput`)
- `p_138623_` (`ServerLevel`)

**Returns:** `BlockInput`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Filter` | interface |  |
| `Mode` | enum |  |
