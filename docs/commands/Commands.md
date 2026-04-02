# Commands

**Package:** `net.minecraft.commands`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LEVEL_ALL` | `int` |  |
| `LEVEL_MODERATORS` | `int` |  |
| `LEVEL_GAMEMASTERS` | `int` |  |
| `LEVEL_ADMINS` | `int` |  |
| `LEVEL_OWNERS` | `int` |  |

## Methods

### Commands

```java
public Commands(Commands.CommandSelection p_230943_, CommandBuildContext p_230944_)
```

**Parameters:**

- `p_230943_` (`Commands.CommandSelection`)
- `p_230944_` (`CommandBuildContext`)

**Returns:** `public`

### mapSource

```java
<S> public static <S> ParseResults<S> mapSource(ParseResults<S> p_242928_, UnaryOperator<S> p_242890_)
```

**Parameters:**

- `p_242928_` (`ParseResults<S>`)
- `p_242890_` (`UnaryOperator<S>`)

**Returns:** `public static <S> ParseResults<S>`

### performPrefixedCommand

```java
public void performPrefixedCommand(CommandSourceStack p_230958_, String p_230959_)
```

**Parameters:**

- `p_230958_` (`CommandSourceStack`)
- `p_230959_` (`String`)

**Returns:** `public void`

### performCommand

```java
public void performCommand(ParseResults<CommandSourceStack> p_242844_, String p_242841_)
```

**Parameters:**

- `p_242844_` (`ParseResults<CommandSourceStack>`)
- `p_242841_` (`String`)

**Returns:** `public void`

### validateParseResults

```java
 validateParseResults()
```

**Returns:** ``

### executeCommandInContext

```java
public static void executeCommandInContext(CommandSourceStack p_306118_, Consumer<ExecutionContext<CommandSourceStack>> p_306332_)
```

**Parameters:**

- `p_306118_` (`CommandSourceStack`)
- `p_306332_` (`Consumer<ExecutionContext<CommandSourceStack>>`)

**Returns:** `public static void`

### sendCommands

```java
public void sendCommands(ServerPlayer p_82096_)
```

**Parameters:**

- `p_82096_` (`ServerPlayer`)

**Returns:** `public void`

### fillUsableCommands

```java
private void fillUsableCommands(CommandNode<CommandSourceStack> p_82113_, CommandNode<SharedSuggestionProvider> p_82114_, CommandSourceStack p_82115_, Map<CommandNode<CommandSourceStack>, CommandNode<SharedSuggestionProvider>> p_82116_)
```

**Parameters:**

- `p_82113_` (`CommandNode<CommandSourceStack>`)
- `p_82114_` (`CommandNode<SharedSuggestionProvider>`)
- `p_82115_` (`CommandSourceStack`)
- `p_82116_` (`Map<CommandNode<CommandSourceStack>, CommandNode<SharedSuggestionProvider>>`)

**Returns:** `private void`

### literal

```java
public static LiteralArgumentBuilder<CommandSourceStack> literal(String p_82128_)
```

**Parameters:**

- `p_82128_` (`String`)

**Returns:** `public static LiteralArgumentBuilder<CommandSourceStack>`

### argument

```java
<T> public static <T> RequiredArgumentBuilder<CommandSourceStack, T> argument(String p_82130_, ArgumentType<T> p_82131_)
```

**Parameters:**

- `p_82130_` (`String`)
- `p_82131_` (`ArgumentType<T>`)

**Returns:** `public static <T> RequiredArgumentBuilder<CommandSourceStack, T>`

### createValidator

```java
public static Predicate<String> createValidator(Commands.ParseFunction p_82121_)
```

**Parameters:**

- `p_82121_` (`Commands.ParseFunction`)

**Returns:** `public static Predicate<String>`

### getDispatcher

```java
public CommandDispatcher<CommandSourceStack> getDispatcher()
```

**Returns:** `public CommandDispatcher<CommandSourceStack>`

### validateParseResults

```java
<S> public static <S> void validateParseResults(ParseResults<S> p_306093_)
```

**Parameters:**

- `p_306093_` (`ParseResults<S>`)

**Returns:** `public static <S> void`

### getParseException

```java
public static <S> CommandSyntaxException getParseException(ParseResults<S> p_82098_)
```

**Parameters:**

- `p_82098_` (`ParseResults<S>`)

**Returns:** `CommandSyntaxException`

### createValidationContext

```java
public static CommandBuildContext createValidationContext(HolderLookup.Provider p_256243_)
```

**Parameters:**

- `p_256243_` (`HolderLookup.Provider`)

**Returns:** `public static CommandBuildContext`

### CommandBuildContext

```java
return new CommandBuildContext()
```

**Returns:** `return new`

### listRegistries

```java
public Stream<ResourceKey<? extends Registry<?>>> listRegistries()
```

**Returns:** `Stream<ResourceKey<? extends Registry<?>>>`

### lookup

```java
public <T> Optional<HolderLookup.RegistryLookup<T>> lookup(ResourceKey<? extends Registry<? extends T>> p_323467_)
```

**Parameters:**

- `p_323467_` (`ResourceKey<? extends Registry<? extends T>>`)

**Returns:** `Optional<HolderLookup.RegistryLookup<T>>`

### createLookup

```java
<T> private <T> HolderLookup.RegistryLookup.Delegate<T> createLookup(HolderLookup.RegistryLookup<T> p_323830_)
```

**Parameters:**

- `p_323830_` (`HolderLookup.RegistryLookup<T>`)

**Returns:** `private <T> HolderLookup.RegistryLookup.Delegate<T>`

### parent

```java
public HolderLookup.RegistryLookup<T> parent()
```

**Returns:** `HolderLookup.RegistryLookup<T>`

### get

```java
public Optional<HolderSet.Named<T>> get(TagKey<T> p_255936_)
```

**Parameters:**

- `p_255936_` (`TagKey<T>`)

**Returns:** `Optional<HolderSet.Named<T>>`

### getOrThrow

```java
public HolderSet.Named<T> getOrThrow(TagKey<T> p_255953_)
```

**Parameters:**

- `p_255953_` (`TagKey<T>`)

**Returns:** `HolderSet.Named<T>`

### validate

```java
public static void validate()
```

**Returns:** `public static void`

### IllegalStateException

```java
throw new IllegalStateException("Unregistered argument types")
```

**Parameters:**

- `types"` (`"Unregistered argument`)

**Returns:** `throw new`

### INTEGRATED

```java
, INTEGRATED()
```

**Returns:** `,`

### CommandSelection

```java
private CommandSelection(boolean p_82151_, boolean p_82152_)
```

**Parameters:**

- `p_82151_` (`boolean`)
- `p_82152_` (`boolean`)

**Returns:** `private`

### parse

```java
void parse(StringReader p_82161_)
```

**Parameters:**

- `p_82161_` (`StringReader`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CommandSelection` | enum |  |
| `ParseFunction` | interface |  |
