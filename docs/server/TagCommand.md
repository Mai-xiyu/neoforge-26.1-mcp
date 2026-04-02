# TagCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_138837_)
```

**Parameters:**

- `p_138837_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### getTags

```java
private static Collection<String> getTags(Collection<? extends Entity> p_138853_)
```

**Parameters:**

- `p_138853_` (`Collection<? extends Entity>`)

**Returns:** `private static Collection<String>`

### addTag

```java
private static int addTag(CommandSourceStack p_138849_, Collection<? extends Entity> p_138850_, String p_138851_)
```

**Parameters:**

- `p_138849_` (`CommandSourceStack`)
- `p_138850_` (`Collection<? extends Entity>`)
- `p_138851_` (`String`)

**Returns:** `private static int`

### removeTag

```java
private static int removeTag(CommandSourceStack p_138857_, Collection<? extends Entity> p_138858_, String p_138859_)
```

**Parameters:**

- `p_138857_` (`CommandSourceStack`)
- `p_138858_` (`Collection<? extends Entity>`)
- `p_138859_` (`String`)

**Returns:** `private static int`

### listTags

```java
private static int listTags(CommandSourceStack p_138846_, Collection<? extends Entity> p_138847_)
```

**Parameters:**

- `p_138846_` (`CommandSourceStack`)
- `p_138847_` (`Collection<? extends Entity>`)

**Returns:** `private static int`
