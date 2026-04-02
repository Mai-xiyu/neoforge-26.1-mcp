# ExperienceCommand

**Package:** `net.minecraft.server.commands`
**Type:** class
**Side:** 🖧 Server

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_137307_)
```

**Parameters:**

- `p_137307_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### queryExperience

```java
private static int queryExperience(CommandSourceStack p_137313_, ServerPlayer p_137314_, ExperienceCommand.Type p_137315_)
```

**Parameters:**

- `p_137313_` (`CommandSourceStack`)
- `p_137314_` (`ServerPlayer`)
- `p_137315_` (`ExperienceCommand.Type`)

**Returns:** `private static int`

### addExperience

```java
private static int addExperience(CommandSourceStack p_137317_, Collection<? extends ServerPlayer> p_137318_, int p_137319_, ExperienceCommand.Type p_137320_)
```

**Parameters:**

- `p_137317_` (`CommandSourceStack`)
- `p_137318_` (`Collection<? extends ServerPlayer>`)
- `p_137319_` (`int`)
- `p_137320_` (`ExperienceCommand.Type`)

**Returns:** `private static int`

### setExperience

```java
private static int setExperience(CommandSourceStack p_137326_, Collection<? extends ServerPlayer> p_137327_, int p_137328_, ExperienceCommand.Type p_137329_)
```

**Parameters:**

- `p_137326_` (`CommandSourceStack`)
- `p_137327_` (`Collection<? extends ServerPlayer>`)
- `p_137328_` (`int`)
- `p_137329_` (`ExperienceCommand.Type`)

**Returns:** `private static int`

### Type

```java
private Type(String p_137353_, BiConsumer<ServerPlayer, Integer> p_137354_, BiPredicate<ServerPlayer, Integer> p_137355_, ToIntFunction<ServerPlayer> p_137356_)
```

**Parameters:**

- `p_137353_` (`String`)
- `p_137354_` (`BiConsumer<ServerPlayer, Integer>`)
- `p_137355_` (`BiPredicate<ServerPlayer, Integer>`)
- `p_137356_` (`ToIntFunction<ServerPlayer>`)

**Returns:** `private`
