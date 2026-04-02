# ResourceKeyArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class<T> implements ArgumentType<ResourceKey<T>>

## Methods

### ResourceKeyArgument

```java
public ResourceKeyArgument(ResourceKey<? extends Registry<T>> p_212367_)
```

**Parameters:**

- `p_212367_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public`

### key

```java
<T> public static <T> ResourceKeyArgument<T> key(ResourceKey<? extends Registry<T>> p_212387_)
```

**Parameters:**

- `p_212387_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public static <T> ResourceKeyArgument<T>`

### getRegistryKey

```java
<T> private static <T> ResourceKey<T> getRegistryKey(CommandContext<CommandSourceStack> p_212374_, String p_212375_, ResourceKey<Registry<T>> p_212376_, DynamicCommandExceptionType p_212377_)
```

**Parameters:**

- `p_212374_` (`CommandContext<CommandSourceStack>`)
- `p_212375_` (`String`)
- `p_212376_` (`ResourceKey<Registry<T>>`)
- `p_212377_` (`DynamicCommandExceptionType`)

**Returns:** `private static <T> ResourceKey<T>`

### getRegistry

```java
<T> private static <T> Registry<T> getRegistry(CommandContext<CommandSourceStack> p_212379_, ResourceKey<? extends Registry<T>> p_212380_)
```

**Parameters:**

- `p_212379_` (`CommandContext<CommandSourceStack>`)
- `p_212380_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `private static <T> Registry<T>`

### resolveKey

```java
<T> private static <T> Holder.Reference<T> resolveKey(CommandContext<CommandSourceStack> p_248662_, String p_252172_, ResourceKey<Registry<T>> p_249701_, DynamicCommandExceptionType p_249790_)
```

**Parameters:**

- `p_248662_` (`CommandContext<CommandSourceStack>`)
- `p_252172_` (`String`)
- `p_249701_` (`ResourceKey<Registry<T>>`)
- `p_249790_` (`DynamicCommandExceptionType`)

**Returns:** `private static <T> Holder.Reference<T>`

### getConfiguredFeature

```java
public static Holder.Reference<ConfiguredFeature<?, ?>> getConfiguredFeature(CommandContext<CommandSourceStack> p_249310_, String p_250729_)
```

**Parameters:**

- `p_249310_` (`CommandContext<CommandSourceStack>`)
- `p_250729_` (`String`)

**Returns:** `public static Holder.Reference<ConfiguredFeature<?, ?>>`

### resolveKey

```java
return resolveKey()
```

**Returns:** `return`

### getStructure

```java
public static Holder.Reference<Structure> getStructure(CommandContext<CommandSourceStack> p_248804_, String p_251331_)
```

**Parameters:**

- `p_248804_` (`CommandContext<CommandSourceStack>`)
- `p_251331_` (`String`)

**Returns:** `public static Holder.Reference<Structure>`

### resolveKey

```java
return resolveKey()
```

**Returns:** `return`

### getStructureTemplatePool

```java
public static Holder.Reference<StructureTemplatePool> getStructureTemplatePool(CommandContext<CommandSourceStack> p_252203_, String p_250407_)
```

**Parameters:**

- `p_252203_` (`CommandContext<CommandSourceStack>`)
- `p_250407_` (`String`)

**Returns:** `public static Holder.Reference<StructureTemplatePool>`

### resolveKey

```java
return resolveKey()
```

**Returns:** `return`

### parse

```java
public ResourceKey<T> parse(StringReader p_212369_)
```

**Parameters:**

- `p_212369_` (`StringReader`)

**Returns:** `public ResourceKey<T>`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_212399_, SuggestionsBuilder p_212400_)
```

**Parameters:**

- `p_212399_` (`CommandContext<S>`)
- `p_212400_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### serializeToNetwork

```java
public void serializeToNetwork(ResourceKeyArgument.Info<T>.Template p_233278_, FriendlyByteBuf p_233279_)
```

**Parameters:**

- `p_233278_` (`ResourceKeyArgument.Info<T>.Template`)
- `p_233279_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public ResourceKeyArgument.Info<T>.Template deserializeFromNetwork(FriendlyByteBuf p_233289_)
```

**Parameters:**

- `p_233289_` (`FriendlyByteBuf`)

**Returns:** `public ResourceKeyArgument.Info<T>.Template`

### serializeToJson

```java
public void serializeToJson(ResourceKeyArgument.Info<T>.Template p_233275_, JsonObject p_233276_)
```

**Parameters:**

- `p_233275_` (`ResourceKeyArgument.Info<T>.Template`)
- `p_233276_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public ResourceKeyArgument.Info<T>.Template unpack(ResourceKeyArgument<T> p_233281_)
```

**Parameters:**

- `p_233281_` (`ResourceKeyArgument<T>`)

**Returns:** `public ResourceKeyArgument.Info<T>.Template`

### Template

```java
 Template(ResourceKey<? extends Registry<T>> p_233296_)
```

**Parameters:**

- `p_233296_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** ``

### instantiate

```java
public ResourceKeyArgument<T> instantiate(CommandBuildContext p_233299_)
```

**Parameters:**

- `p_233299_` (`CommandBuildContext`)

**Returns:** `public ResourceKeyArgument<T>`

### type

```java
public ArgumentTypeInfo<ResourceKeyArgument<T>, ?> type()
```

**Returns:** `ArgumentTypeInfo<ResourceKeyArgument<T>, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Info` | class |  |
| `Template` | class |  |
