# GameModeCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PERMISSION_LEVEL` | `int` |  |

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_137730_)
```

**Parameters:**

- `p_137730_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### logGamemodeChange

```java
private static void logGamemodeChange(CommandSourceStack p_137738_, ServerPlayer p_137739_, GameType p_137740_)
```

**Parameters:**

- `p_137738_` (`CommandSourceStack`)
- `p_137739_` (`ServerPlayer`)
- `p_137740_` (`GameType`)

**Returns:** `private static void`

### setMode

```java
private static int setMode(CommandContext<CommandSourceStack> p_137732_, Collection<ServerPlayer> p_137733_, GameType p_137734_)
```

**Parameters:**

- `p_137732_` (`CommandContext<CommandSourceStack>`)
- `p_137733_` (`Collection<ServerPlayer>`)
- `p_137734_` (`GameType`)

**Returns:** `private static int`
