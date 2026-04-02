# DataPackCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_136809_)
```

**Parameters:**

- `p_136809_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### enablePack

```java
private static int enablePack(CommandSourceStack p_136829_, Pack p_136830_, DataPackCommand.Inserter p_136831_)
```

**Parameters:**

- `p_136829_` (`CommandSourceStack`)
- `p_136830_` (`Pack`)
- `p_136831_` (`DataPackCommand.Inserter`)

**Returns:** `private static int`

### disablePack

```java
private static int disablePack(CommandSourceStack p_136826_, Pack p_136827_)
```

**Parameters:**

- `p_136826_` (`CommandSourceStack`)
- `p_136827_` (`Pack`)

**Returns:** `private static int`

### listPacks

```java
private static int listPacks(CommandSourceStack p_136824_)
```

**Parameters:**

- `p_136824_` (`CommandSourceStack`)

**Returns:** `private static int`

### listAvailablePacks

```java
private static int listAvailablePacks(CommandSourceStack p_136855_)
```

**Parameters:**

- `p_136855_` (`CommandSourceStack`)

**Returns:** `private static int`

### listEnabledPacks

```java
private static int listEnabledPacks(CommandSourceStack p_136866_)
```

**Parameters:**

- `p_136866_` (`CommandSourceStack`)

**Returns:** `private static int`

### getPack

```java
private static Pack getPack(CommandContext<CommandSourceStack> p_136816_, String p_136817_, boolean p_136818_)
```

**Parameters:**

- `p_136816_` (`CommandContext<CommandSourceStack>`)
- `p_136817_` (`String`)
- `p_136818_` (`boolean`)

**Returns:** `private static Pack`

### apply

```java
void apply(List<Pack> p_136884_, Pack p_136885_)
```

**Parameters:**

- `p_136884_` (`List<Pack>`)
- `p_136885_` (`Pack`)
