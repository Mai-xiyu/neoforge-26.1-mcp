# ConfigCommand

**Package:** `net.neoforged.neoforge.server.command`
**Type:** class
**Side:** 🖧 Server
**Annotations:** `@EventBusSubscriber(value = Dist.CLIENT, bus = EventBusSubscriber.Bus.GAME, modid = NeoForgeVersion.MOD_ID)`

## Methods

### onClientCommandsRegister

```java
public static void onClientCommandsRegister(RegisterClientCommandsEvent event)
```

**Parameters:**

- `event` (`RegisterClientCommandsEvent`)

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> dispatcher)
```

**Parameters:**

- `dispatcher` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### extension

```java
public String extension()
```

**Returns:** `public String`

### register

```java
static ArgumentBuilder<CommandSourceStack, ?> register()
```

**Returns:** `static ArgumentBuilder<CommandSourceStack, ?>`

### showFile

```java
private static int showFile(CommandContext<CommandSourceStack> context)
```

**Parameters:**

- `context` (`CommandContext<CommandSourceStack>`)

**Returns:** `private static int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ServerModConfigType` | enum |  |
| `ShowFile` | class |  |
