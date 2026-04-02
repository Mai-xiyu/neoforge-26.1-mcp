# Vec3Argument

**Package:** `net.minecraft.commands.arguments.coordinates`
**Type:** class
**Implements:** `ArgumentType<Coordinates>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_NOT_COMPLETE` | `SimpleCommandExceptionType` |  |
| `ERROR_MIXED_TYPE` | `SimpleCommandExceptionType` |  |

## Methods

### Vec3Argument

```java
public Vec3Argument(boolean p_120840_)
```

**Parameters:**

- `p_120840_` (`boolean`)

**Returns:** `public`

### vec3

```java
public static Vec3Argument vec3()
```

**Returns:** `public static Vec3Argument`

### Vec3Argument

```java
return new Vec3Argument()
```

**Returns:** `return new`

### vec3

```java
public static Vec3Argument vec3(boolean p_120848_)
```

**Parameters:**

- `p_120848_` (`boolean`)

**Returns:** `public static Vec3Argument`

### Vec3Argument

```java
return new Vec3Argument()
```

**Returns:** `return new`

### getVec3

```java
public static Vec3 getVec3(CommandContext<CommandSourceStack> p_120845_, String p_120846_)
```

**Parameters:**

- `p_120845_` (`CommandContext<CommandSourceStack>`)
- `p_120846_` (`String`)

**Returns:** `public static Vec3`

### getCoordinates

```java
public static Coordinates getCoordinates(CommandContext<CommandSourceStack> p_120850_, String p_120851_)
```

**Parameters:**

- `p_120850_` (`CommandContext<CommandSourceStack>`)
- `p_120851_` (`String`)

**Returns:** `public static Coordinates`

### parse

```java
public Coordinates parse(StringReader p_120843_)
```

**Parameters:**

- `p_120843_` (`StringReader`)

**Returns:** `public Coordinates`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_120854_, SuggestionsBuilder p_120855_)
```

**Parameters:**

- `p_120854_` (`CommandContext<S>`)
- `p_120855_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`
