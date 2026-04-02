# ParticleArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `ArgumentType<ParticleOptions>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_UNKNOWN_PARTICLE` | `DynamicCommandExceptionType` |  |
| `ERROR_INVALID_OPTIONS` | `DynamicCommandExceptionType` |  |

## Methods

### ParticleArgument

```java
public ParticleArgument(CommandBuildContext p_249844_)
```

**Parameters:**

- `p_249844_` (`CommandBuildContext`)

**Returns:** `public`

### particle

```java
public static ParticleArgument particle(CommandBuildContext p_251304_)
```

**Parameters:**

- `p_251304_` (`CommandBuildContext`)

**Returns:** `public static ParticleArgument`

### ParticleArgument

```java
return new ParticleArgument()
```

**Returns:** `return new`

### getParticle

```java
public static ParticleOptions getParticle(CommandContext<CommandSourceStack> p_103938_, String p_103939_)
```

**Parameters:**

- `p_103938_` (`CommandContext<CommandSourceStack>`)
- `p_103939_` (`String`)

**Returns:** `public static ParticleOptions`

### parse

```java
public ParticleOptions parse(StringReader p_103933_)
```

**Parameters:**

- `p_103933_` (`StringReader`)

**Returns:** `public ParticleOptions`

### readParticle

```java
return readParticle()
```

**Returns:** `return`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### readParticle

```java
public static ParticleOptions readParticle(StringReader p_249275_, HolderLookup.Provider p_324619_)
```

**Parameters:**

- `p_249275_` (`StringReader`)
- `p_324619_` (`HolderLookup.Provider`)

**Returns:** `public static ParticleOptions`

### readParticleType

```java
private static ParticleType<?> readParticleType(StringReader p_249621_, HolderLookup<ParticleType<?>> p_248983_)
```

**Parameters:**

- `p_249621_` (`StringReader`)
- `p_248983_` (`HolderLookup<ParticleType<?>>`)

**Returns:** `private static ParticleType<?>`

### readParticle

```java
<T extends ParticleOptions> private static <T extends ParticleOptions> T readParticle(StringReader p_103935_, ParticleType<T> p_103936_, HolderLookup.Provider p_323668_)
```

**Parameters:**

- `p_103935_` (`StringReader`)
- `p_103936_` (`ParticleType<T>`)
- `p_323668_` (`HolderLookup.Provider`)

**Returns:** `private static <T extends ParticleOptions> T`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_103948_, SuggestionsBuilder p_103949_)
```

**Parameters:**

- `p_103948_` (`CommandContext<S>`)
- `p_103949_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`
