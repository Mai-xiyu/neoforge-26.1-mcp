# ResourceOrTagArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class<T> implements ArgumentType<ResourceOrTagArgument.Result<T>>

## Methods

### ResourceOrTagArgument

```java
public ResourceOrTagArgument(CommandBuildContext p_249382_, ResourceKey<? extends Registry<T>> p_251209_)
```

**Parameters:**

- `p_249382_` (`CommandBuildContext`)
- `p_251209_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public`

### resourceOrTag

```java
<T> public static <T> ResourceOrTagArgument<T> resourceOrTag(CommandBuildContext p_251101_, ResourceKey<? extends Registry<T>> p_248888_)
```

**Parameters:**

- `p_251101_` (`CommandBuildContext`)
- `p_248888_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public static <T> ResourceOrTagArgument<T>`

### getResourceOrTag

```java
<T> public static <T> ResourceOrTagArgument.Result<T> getResourceOrTag(CommandContext<CommandSourceStack> p_249001_, String p_251520_, ResourceKey<Registry<T>> p_250370_)
```

**Parameters:**

- `p_249001_` (`CommandContext<CommandSourceStack>`)
- `p_251520_` (`String`)
- `p_250370_` (`ResourceKey<Registry<T>>`)

**Returns:** `public static <T> ResourceOrTagArgument.Result<T>`

### parse

```java
public ResourceOrTagArgument.Result<T> parse(StringReader p_250860_)
```

**Parameters:**

- `p_250860_` (`StringReader`)

**Returns:** `public ResourceOrTagArgument.Result<T>`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_250223_, SuggestionsBuilder p_252354_)
```

**Parameters:**

- `p_250223_` (`CommandContext<S>`)
- `p_252354_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### serializeToNetwork

```java
public void serializeToNetwork(ResourceOrTagArgument.Info<T>.Template p_250419_, FriendlyByteBuf p_249726_)
```

**Parameters:**

- `p_250419_` (`ResourceOrTagArgument.Info<T>.Template`)
- `p_249726_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public ResourceOrTagArgument.Info<T>.Template deserializeFromNetwork(FriendlyByteBuf p_250205_)
```

**Parameters:**

- `p_250205_` (`FriendlyByteBuf`)

**Returns:** `public ResourceOrTagArgument.Info<T>.Template`

### serializeToJson

```java
public void serializeToJson(ResourceOrTagArgument.Info<T>.Template p_251957_, JsonObject p_249067_)
```

**Parameters:**

- `p_251957_` (`ResourceOrTagArgument.Info<T>.Template`)
- `p_249067_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public ResourceOrTagArgument.Info<T>.Template unpack(ResourceOrTagArgument<T> p_252206_)
```

**Parameters:**

- `p_252206_` (`ResourceOrTagArgument<T>`)

**Returns:** `public ResourceOrTagArgument.Info<T>.Template`

### Template

```java
 Template(ResourceKey<? extends Registry<T>> p_250107_)
```

**Parameters:**

- `p_250107_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** ``

### instantiate

```java
public ResourceOrTagArgument<T> instantiate(CommandBuildContext p_251386_)
```

**Parameters:**

- `p_251386_` (`CommandBuildContext`)

**Returns:** `public ResourceOrTagArgument<T>`

### type

```java
public ArgumentTypeInfo<ResourceOrTagArgument<T>, ?> type()
```

**Returns:** `ArgumentTypeInfo<ResourceOrTagArgument<T>, ?>`

### unwrap

```java
public Either<Holder.Reference<T>, HolderSet.Named<T>> unwrap()
```

**Returns:** `Either<Holder.Reference<T>, HolderSet.Named<T>>`

### cast

```java
public <E> Optional<ResourceOrTagArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_250007_)
```

**Parameters:**

- `p_250007_` (`ResourceKey<? extends Registry<E>>`)

**Returns:** `Optional<ResourceOrTagArgument.Result<E>>`

### test

```java
public boolean test(Holder<T> p_249230_)
```

**Parameters:**

- `p_249230_` (`Holder<T>`)

**Returns:** `public boolean`

### asPrintable

```java
public String asPrintable()
```

**Returns:** `String`

### unwrap

```java
Either<Holder.Reference<T>, HolderSet.Named<T>> unwrap()
```

**Returns:** `Either<Holder.Reference<T>, HolderSet.Named<T>>`

### cast

```java
<E> <E> Optional<ResourceOrTagArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_249572_)
```

**Parameters:**

- `p_249572_` (`ResourceKey<? extends Registry<E>>`)

**Returns:** `<E> Optional<ResourceOrTagArgument.Result<E>>`

### asPrintable

```java
String asPrintable()
```

**Returns:** `String`

### unwrap

```java
public Either<Holder.Reference<T>, HolderSet.Named<T>> unwrap()
```

**Returns:** `Either<Holder.Reference<T>, HolderSet.Named<T>>`

### cast

```java
public <E> Optional<ResourceOrTagArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_250945_)
```

**Parameters:**

- `p_250945_` (`ResourceKey<? extends Registry<E>>`)

**Returns:** `Optional<ResourceOrTagArgument.Result<E>>`

### test

```java
public boolean test(Holder<T> p_252187_)
```

**Parameters:**

- `p_252187_` (`Holder<T>`)

**Returns:** `public boolean`

### asPrintable

```java
public String asPrintable()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Info` | class |  |
| `Template` | class |  |
| `Result` | interface |  |
