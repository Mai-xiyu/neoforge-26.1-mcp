# GameRuleCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_137745_)
```

**Parameters:**

- `p_137745_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### visit

```java
public <T extends GameRules.Value<T>> void visit(GameRules.Key<T> p_137764_, GameRules.Type<T> p_137765_)
```

**Parameters:**

- `p_137764_` (`GameRules.Key<T>`)
- `p_137765_` (`GameRules.Type<T>`)

**Returns:** `<T extends GameRules.Value<T>> void`

### setRule

```java
static <T extends GameRules.Value<T>> int setRule(CommandContext<CommandSourceStack> p_137755_, GameRules.Key<T> p_137756_)
```

**Parameters:**

- `p_137755_` (`CommandContext<CommandSourceStack>`)
- `p_137756_` (`GameRules.Key<T>`)

**Returns:** `static <T extends GameRules.Value<T>> int`

### queryRule

```java
static <T extends GameRules.Value<T>> int queryRule(CommandSourceStack p_137758_, GameRules.Key<T> p_137759_)
```

**Parameters:**

- `p_137758_` (`CommandSourceStack`)
- `p_137759_` (`GameRules.Key<T>`)

**Returns:** `static <T extends GameRules.Value<T>> int`
