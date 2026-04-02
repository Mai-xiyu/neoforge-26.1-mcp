# EntityArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<EntitySelector>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_NOT_SINGLE_ENTITY` | `SimpleCommandExceptionType` |  |
| `ERROR_NOT_SINGLE_PLAYER` | `SimpleCommandExceptionType` |  |
| `ERROR_ONLY_PLAYERS_ALLOWED` | `SimpleCommandExceptionType` |  |
| `NO_ENTITIES_FOUND` | `SimpleCommandExceptionType` |  |
| `NO_PLAYERS_FOUND` | `SimpleCommandExceptionType` |  |
| `ERROR_SELECTORS_NOT_ALLOWED` | `SimpleCommandExceptionType` |  |

## Methods

### EntityArgument

```java
protected EntityArgument(boolean p_91447_, boolean p_91448_)
```

**Parameters:**

- `p_91447_` (`boolean`)
- `p_91448_` (`boolean`)

**Returns:** `protected`

### entity

```java
public static EntityArgument entity()
```

**Returns:** `public static EntityArgument`

### EntityArgument

```java
return new EntityArgument()
```

**Returns:** `return new`

### getEntity

```java
public static Entity getEntity(CommandContext<CommandSourceStack> p_91453_, String p_91454_)
```

**Parameters:**

- `p_91453_` (`CommandContext<CommandSourceStack>`)
- `p_91454_` (`String`)

**Returns:** `public static Entity`

### entities

```java
public static EntityArgument entities()
```

**Returns:** `public static EntityArgument`

### EntityArgument

```java
return new EntityArgument()
```

**Returns:** `return new`

### getEntities

```java
public static Collection<? extends Entity> getEntities(CommandContext<CommandSourceStack> p_91462_, String p_91463_)
```

**Parameters:**

- `p_91462_` (`CommandContext<CommandSourceStack>`)
- `p_91463_` (`String`)

**Returns:** `public static Collection<? extends Entity>`

### getOptionalEntities

```java
public static Collection<? extends Entity> getOptionalEntities(CommandContext<CommandSourceStack> p_91468_, String p_91469_)
```

**Parameters:**

- `p_91468_` (`CommandContext<CommandSourceStack>`)
- `p_91469_` (`String`)

**Returns:** `public static Collection<? extends Entity>`

### getOptionalPlayers

```java
public static Collection<ServerPlayer> getOptionalPlayers(CommandContext<CommandSourceStack> p_91472_, String p_91473_)
```

**Parameters:**

- `p_91472_` (`CommandContext<CommandSourceStack>`)
- `p_91473_` (`String`)

**Returns:** `public static Collection<ServerPlayer>`

### player

```java
public static EntityArgument player()
```

**Returns:** `public static EntityArgument`

### EntityArgument

```java
return new EntityArgument()
```

**Returns:** `return new`

### getPlayer

```java
public static ServerPlayer getPlayer(CommandContext<CommandSourceStack> p_91475_, String p_91476_)
```

**Parameters:**

- `p_91475_` (`CommandContext<CommandSourceStack>`)
- `p_91476_` (`String`)

**Returns:** `public static ServerPlayer`

### players

```java
public static EntityArgument players()
```

**Returns:** `public static EntityArgument`

### EntityArgument

```java
return new EntityArgument()
```

**Returns:** `return new`

### getPlayers

```java
public static Collection<ServerPlayer> getPlayers(CommandContext<CommandSourceStack> p_91478_, String p_91479_)
```

**Parameters:**

- `p_91478_` (`CommandContext<CommandSourceStack>`)
- `p_91479_` (`String`)

**Returns:** `public static Collection<ServerPlayer>`

### parse

```java
public EntitySelector parse(StringReader p_91451_)
```

**Parameters:**

- `p_91451_` (`StringReader`)

**Returns:** `public EntitySelector`

### parse

```java
<S> public <S> EntitySelector parse(StringReader p_353128_, S p_353120_)
```

**Parameters:**

- `p_353128_` (`StringReader`)
- `p_353120_` (`S`)

**Returns:** `public <S> EntitySelector`

### parse

```java
private EntitySelector parse(StringReader p_353134_, boolean p_353142_)
```

**Parameters:**

- `p_353134_` (`StringReader`)
- `p_353142_` (`boolean`)

**Returns:** `private EntitySelector`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_91482_, SuggestionsBuilder p_91483_)
```

**Parameters:**

- `p_91482_` (`CommandContext<S>`)
- `p_91483_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### serializeToNetwork

```java
public void serializeToNetwork(EntityArgument.Info.Template p_231271_, FriendlyByteBuf p_231272_)
```

**Parameters:**

- `p_231271_` (`EntityArgument.Info.Template`)
- `p_231272_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public EntityArgument.Info.Template deserializeFromNetwork(FriendlyByteBuf p_231282_)
```

**Parameters:**

- `p_231282_` (`FriendlyByteBuf`)

**Returns:** `public EntityArgument.Info.Template`

### serializeToJson

```java
public void serializeToJson(EntityArgument.Info.Template p_231268_, JsonObject p_231269_)
```

**Parameters:**

- `p_231268_` (`EntityArgument.Info.Template`)
- `p_231269_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public EntityArgument.Info.Template unpack(EntityArgument p_231274_)
```

**Parameters:**

- `p_231274_` (`EntityArgument`)

**Returns:** `public EntityArgument.Info.Template`

### Template

```java
 Template(boolean p_231290_, boolean p_231291_)
```

**Parameters:**

- `p_231290_` (`boolean`)
- `p_231291_` (`boolean`)

**Returns:** ``

### instantiate

```java
public EntityArgument instantiate(CommandBuildContext p_231294_)
```

**Parameters:**

- `p_231294_` (`CommandBuildContext`)

**Returns:** `public EntityArgument`

### EntityArgument

```java
return new EntityArgument()
```

**Returns:** `return new`

### type

```java
public ArgumentTypeInfo<EntityArgument, ?> type()
```

**Returns:** `ArgumentTypeInfo<EntityArgument, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Info` | class |  |
| `Template` | class |  |
