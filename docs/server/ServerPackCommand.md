# ServerPackCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_314567_)
```

**Parameters:**

- `p_314567_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### sendToAllConnections

```java
private static void sendToAllConnections(CommandSourceStack p_314494_, Packet<?> p_314523_)
```

**Parameters:**

- `p_314494_` (`CommandSourceStack`)
- `p_314523_` (`Packet<?>`)

**Returns:** `private static void`

### pushPack

```java
private static int pushPack(CommandSourceStack p_314575_, String p_314506_, Optional<UUID> p_314543_, Optional<String> p_314491_)
```

**Parameters:**

- `p_314575_` (`CommandSourceStack`)
- `p_314506_` (`String`)
- `p_314543_` (`Optional<UUID>`)
- `p_314491_` (`Optional<String>`)

**Returns:** `private static int`

### sendToAllConnections

```java
 sendToAllConnections()
```

**Returns:** ``

### popPack

```java
private static int popPack(CommandSourceStack p_314505_, UUID p_314433_)
```

**Parameters:**

- `p_314505_` (`CommandSourceStack`)
- `p_314433_` (`UUID`)

**Returns:** `private static int`

### sendToAllConnections

```java
 sendToAllConnections()
```

**Returns:** ``
