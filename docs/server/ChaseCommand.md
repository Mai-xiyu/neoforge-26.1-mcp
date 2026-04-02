# ChaseCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DIMENSION_NAMES` | `BiMap<String, ResourceKey<Level>>` |  |

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_196078_)
```

**Parameters:**

- `p_196078_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### stop

```java
private static int stop(CommandSourceStack p_196082_)
```

**Parameters:**

- `p_196082_` (`CommandSourceStack`)

**Returns:** `private static int`

### alreadyRunning

```java
private static boolean alreadyRunning(CommandSourceStack p_196090_)
```

**Parameters:**

- `p_196090_` (`CommandSourceStack`)

**Returns:** `private static boolean`

### lead

```java
private static int lead(CommandSourceStack p_196084_, String p_196085_, int p_196086_)
```

**Parameters:**

- `p_196084_` (`CommandSourceStack`)
- `p_196085_` (`String`)
- `p_196086_` (`int`)

**Returns:** `private static int`

### follow

```java
private static int follow(CommandSourceStack p_196092_, String p_196093_, int p_196094_)
```

**Parameters:**

- `p_196092_` (`CommandSourceStack`)
- `p_196093_` (`String`)
- `p_196094_` (`int`)

**Returns:** `private static int`
