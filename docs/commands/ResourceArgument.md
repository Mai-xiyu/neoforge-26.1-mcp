# ResourceArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class<T> implements ArgumentType<Holder.Reference<T>>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_UNKNOWN_RESOURCE` | `Dynamic2CommandExceptionType` |  |
| `ERROR_INVALID_RESOURCE_TYPE` | `Dynamic3CommandExceptionType` |  |

## Methods

### ResourceArgument

```java
public ResourceArgument(CommandBuildContext p_248597_, ResourceKey<? extends Registry<T>> p_251778_)
```

**Parameters:**

- `p_248597_` (`CommandBuildContext`)
- `p_251778_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public`

### resource

```java
<T> public static <T> ResourceArgument<T> resource(CommandBuildContext p_249973_, ResourceKey<? extends Registry<T>> p_251405_)
```

**Parameters:**

- `p_249973_` (`CommandBuildContext`)
- `p_251405_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public static <T> ResourceArgument<T>`

### getResource

```java
<T> public static <T> Holder.Reference<T> getResource(CommandContext<CommandSourceStack> p_251788_, String p_251996_, ResourceKey<Registry<T>> p_250077_)
```

**Parameters:**

- `p_251788_` (`CommandContext<CommandSourceStack>`)
- `p_251996_` (`String`)
- `p_250077_` (`ResourceKey<Registry<T>>`)

**Returns:** `public static <T> Holder.Reference<T>`

### getAttribute

```java
public static Holder.Reference<Attribute> getAttribute(CommandContext<CommandSourceStack> p_248753_, String p_251157_)
```

**Parameters:**

- `p_248753_` (`CommandContext<CommandSourceStack>`)
- `p_251157_` (`String`)

**Returns:** `public static Holder.Reference<Attribute>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### getConfiguredFeature

```java
public static Holder.Reference<ConfiguredFeature<?, ?>> getConfiguredFeature(CommandContext<CommandSourceStack> p_250819_, String p_252256_)
```

**Parameters:**

- `p_250819_` (`CommandContext<CommandSourceStack>`)
- `p_252256_` (`String`)

**Returns:** `public static Holder.Reference<ConfiguredFeature<?, ?>>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### getStructure

```java
public static Holder.Reference<Structure> getStructure(CommandContext<CommandSourceStack> p_250288_, String p_250856_)
```

**Parameters:**

- `p_250288_` (`CommandContext<CommandSourceStack>`)
- `p_250856_` (`String`)

**Returns:** `public static Holder.Reference<Structure>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### getEntityType

```java
public static Holder.Reference<EntityType<?>> getEntityType(CommandContext<CommandSourceStack> p_251258_, String p_252322_)
```

**Parameters:**

- `p_251258_` (`CommandContext<CommandSourceStack>`)
- `p_252322_` (`String`)

**Returns:** `public static Holder.Reference<EntityType<?>>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### getSummonableEntityType

```java
public static Holder.Reference<EntityType<?>> getSummonableEntityType(CommandContext<CommandSourceStack> p_251880_, String p_250243_)
```

**Parameters:**

- `p_251880_` (`CommandContext<CommandSourceStack>`)
- `p_250243_` (`String`)

**Returns:** `public static Holder.Reference<EntityType<?>>`

### getMobEffect

```java
public static Holder.Reference<MobEffect> getMobEffect(CommandContext<CommandSourceStack> p_250521_, String p_249927_)
```

**Parameters:**

- `p_250521_` (`CommandContext<CommandSourceStack>`)
- `p_249927_` (`String`)

**Returns:** `public static Holder.Reference<MobEffect>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### getEnchantment

```java
public static Holder.Reference<Enchantment> getEnchantment(CommandContext<CommandSourceStack> p_248656_, String p_248713_)
```

**Parameters:**

- `p_248656_` (`CommandContext<CommandSourceStack>`)
- `p_248713_` (`String`)

**Returns:** `public static Holder.Reference<Enchantment>`

### getResource

```java
return getResource()
```

**Returns:** `return`

### parse

```java
public Holder.Reference<T> parse(StringReader p_250909_)
```

**Parameters:**

- `p_250909_` (`StringReader`)

**Returns:** `public Holder.Reference<T>`

### listSuggestions

```java
public <S> CompletableFuture<Suggestions> listSuggestions(CommandContext<S> p_249391_, SuggestionsBuilder p_251197_)
```

**Parameters:**

- `p_249391_` (`CommandContext<S>`)
- `p_251197_` (`SuggestionsBuilder`)

**Returns:** `CompletableFuture<Suggestions>`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### serializeToNetwork

```java
public void serializeToNetwork(ResourceArgument.Info<T>.Template p_250470_, FriendlyByteBuf p_248658_)
```

**Parameters:**

- `p_250470_` (`ResourceArgument.Info<T>.Template`)
- `p_248658_` (`FriendlyByteBuf`)

**Returns:** `public void`

### deserializeFromNetwork

```java
public ResourceArgument.Info<T>.Template deserializeFromNetwork(FriendlyByteBuf p_248958_)
```

**Parameters:**

- `p_248958_` (`FriendlyByteBuf`)

**Returns:** `public ResourceArgument.Info<T>.Template`

### serializeToJson

```java
public void serializeToJson(ResourceArgument.Info<T>.Template p_251267_, JsonObject p_250142_)
```

**Parameters:**

- `p_251267_` (`ResourceArgument.Info<T>.Template`)
- `p_250142_` (`JsonObject`)

**Returns:** `public void`

### unpack

```java
public ResourceArgument.Info<T>.Template unpack(ResourceArgument<T> p_250667_)
```

**Parameters:**

- `p_250667_` (`ResourceArgument<T>`)

**Returns:** `public ResourceArgument.Info<T>.Template`

### Template

```java
 Template(ResourceKey<? extends Registry<T>> p_250598_)
```

**Parameters:**

- `p_250598_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** ``

### instantiate

```java
public ResourceArgument<T> instantiate(CommandBuildContext p_251900_)
```

**Parameters:**

- `p_251900_` (`CommandBuildContext`)

**Returns:** `public ResourceArgument<T>`

### type

```java
public ArgumentTypeInfo<ResourceArgument<T>, ?> type()
```

**Returns:** `ArgumentTypeInfo<ResourceArgument<T>, ?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Info` | class |  |
| `Template` | class |  |
