# ClientCommandHandler

**Package:** `net.neoforged.neoforge.client`
**Type:** class
**Side:** 🖥️ Client

## Methods

### init

```java
public static void init()
```

**Returns:** `public static void`

### handleClientPlayerLogin

```java
private static void handleClientPlayerLogin(ClientPlayerNetworkEvent.LoggingIn event)
```

**Parameters:**

- `event` (`ClientPlayerNetworkEvent.LoggingIn`)

**Returns:** `private static void`

### mergeServerCommands

```java
.Internal
    public static CommandDispatcher<SharedSuggestionProvider> mergeServerCommands(CommandDispatcher<SharedSuggestionProvider> serverCommands, CommandBuildContext buildContext)
```

**Parameters:**

- `serverCommands` (`CommandDispatcher<SharedSuggestionProvider>`)
- `buildContext` (`CommandBuildContext`)

**Returns:** `.Internal
    public static CommandDispatcher<SharedSuggestionProvider>`

### getDispatcher

```java
public static CommandDispatcher<CommandSourceStack> getDispatcher()
```

**Returns:** `CommandDispatcher<CommandSourceStack>`

### getSource

```java
public static ClientCommandSourceStack getSource()
```

**Returns:** `ClientCommandSourceStack`

### copy

```java
 copy()
```

**Returns:** ``

### runCommand

```java
public static boolean runCommand(String command)
```

**Parameters:**

- `command` (`String`)

**Returns:** `boolean`
