# ResourceOrTagKeyArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class<T> implements ArgumentType<ResourceOrTagKeyArgument.Result<T>>

## Methods

### ResourceOrTagKeyArgument

```java
public ResourceOrTagKeyArgument(ResourceKey<? extends Registry<T>> p_248579_)
```

**Parameters:**

- `p_248579_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public`

### resourceOrTagKey

```java
<T> public static <T> ResourceOrTagKeyArgument<T> resourceOrTagKey(ResourceKey<? extends Registry<T>> p_249175_)
```

**Parameters:**

- `p_249175_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public static <T> ResourceOrTagKeyArgument<T>`

### getResourceOrTagKey

```java
<T> public static <T> ResourceOrTagKeyArgument.Result<T> getResourceOrTagKey(CommandContext<CommandSourceStack> p_252162_, String p_248628_, ResourceKey<Registry<T>> p_249008_, DynamicCommandExceptionType p_251387_)
```

**Parameters:**

- `p_252162_` (`CommandContext<CommandSourceStack>`)
- `p_248628_` (`String`)
- `p_249008_` (`ResourceKey<Registry<T>>`)
- `p_251387_` (`DynamicCommandExceptionType`)

**Returns:** `public static <T> ResourceOrTagKeyArgument.Result<T>`

### parse

```java
public ResourceOrTagKeyArgument.Result<T> parse(StringReader p_250307_)
```

**Parameters:**

- `p_250307_` (`StringReader`)

**Returns:** `public ResourceOrTagKeyArgument.Result<T>`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_251659_, SuggestionsBuilder p_251141_)
```

**Parameters:**

- `p_251659_` (`CommandContext<S>`)
- `p_251141_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### serializeToNetwork

```java
public void serializeToNetwork(ResourceOrTagKeyArgument.Info<T>.Template p_252211_, FriendlyByteBuf p_248784_)
```

**Parameters:**

- `p_252211_` (`ResourceOrTagKeyArgument.Info<T>.Template`)
- `p_248784_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public ResourceOrTagKeyArgument.Info<T>.Template deserializeFromNetwork(FriendlyByteBuf p_250656_)
```

**Parameters:**

- `p_250656_` (`FriendlyByteBuf`)

**Returns:** `public ResourceOrTagKeyArgument.Info<T>.Template`

### serializeToJson

```java
public void serializeToJson(ResourceOrTagKeyArgument.Info<T>.Template p_250715_, JsonObject p_249208_)
```

**Parameters:**

- `p_250715_` (`ResourceOrTagKeyArgument.Info<T>.Template`)
- `p_249208_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public ResourceOrTagKeyArgument.Info<T>.Template unpack(ResourceOrTagKeyArgument<T> p_250422_)
```

**Parameters:**

- `p_250422_` (`ResourceOrTagKeyArgument<T>`)

**Returns:** `public ResourceOrTagKeyArgument.Info<T>.Template`

### Template

```java
 Template(ResourceKey<? extends Registry<T>> p_251992_)
```

**Parameters:**

- `p_251992_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** ``

### instantiate

```java
public ResourceOrTagKeyArgument<T> instantiate(CommandBuildContext p_251559_)
```

**Parameters:**

- `p_251559_` (`CommandBuildContext`)

**Returns:** `public ResourceOrTagKeyArgument<T>`

### type

```java
public ArgumentTypeInfo<ResourceOrTagKeyArgument<T>, ?> type()
```

**Returns:** `ArgumentTypeInfo<ResourceOrTagKeyArgument<T>, ?>`

### unwrap

```java
public Either<ResourceKey<T>, TagKey<T>> unwrap()
```

**Returns:** `Either<ResourceKey<T>, TagKey<T>>`

### cast

```java
public <E> Optional<ResourceOrTagKeyArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_251369_)
```

**Parameters:**

- `p_251369_` (`ResourceKey<? extends Registry<E>>`)

**Returns:** `Optional<ResourceOrTagKeyArgument.Result<E>>`

### test

```java
public boolean test(Holder<T> p_250257_)
```

**Parameters:**

- `p_250257_` (`Holder<T>`)

**Returns:** `public boolean`

### asPrintable

```java
public String asPrintable()
```

**Returns:** `String`

### unwrap

```java
Either<ResourceKey<T>, TagKey<T>> unwrap()
```

**Returns:** `Either<ResourceKey<T>, TagKey<T>>`

### cast

```java
<E> <E> Optional<ResourceOrTagKeyArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_251612_)
```

**Parameters:**

- `p_251612_` (`ResourceKey<? extends Registry<E>>`)

**Returns:** `<E> Optional<ResourceOrTagKeyArgument.Result<E>>`

### asPrintable

```java
String asPrintable()
```

**Returns:** `String`

### unwrap

```java
public Either<ResourceKey<T>, TagKey<T>> unwrap()
```

**Returns:** `Either<ResourceKey<T>, TagKey<T>>`

### cast

```java
public <E> Optional<ResourceOrTagKeyArgument.Result<E>> cast(ResourceKey<? extends Registry<E>> p_251833_)
```

**Parameters:**

- `p_251833_` (`ResourceKey<? extends Registry<E>>`)

**Returns:** `Optional<ResourceOrTagKeyArgument.Result<E>>`

### test

```java
public boolean test(Holder<T> p_252238_)
```

**Parameters:**

- `p_252238_` (`Holder<T>`)

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
