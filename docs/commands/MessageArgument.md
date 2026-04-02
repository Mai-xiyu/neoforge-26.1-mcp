# MessageArgument

**Package:** `net.minecraft.commands.arguments`
**Type:** class
**Implements:** `SignedArgument<MessageArgument.Message>`

## Methods

### message

```java
public static MessageArgument message()
```

**Returns:** `public static MessageArgument`

### MessageArgument

```java
return new MessageArgument()
```

**Returns:** `return new`

### getMessage

```java
public static Component getMessage(CommandContext<CommandSourceStack> p_96836_, String p_96837_)
```

**Parameters:**

- `p_96836_` (`CommandContext<CommandSourceStack>`)
- `p_96837_` (`String`)

**Returns:** `public static Component`

### resolveChatMessage

```java
public static void resolveChatMessage(CommandContext<CommandSourceStack> p_249433_, String p_248718_, Consumer<PlayerChatMessage> p_249460_)
```

**Parameters:**

- `p_249433_` (`CommandContext<CommandSourceStack>`)
- `p_248718_` (`String`)
- `p_249460_` (`Consumer<PlayerChatMessage>`)

**Returns:** `public static void`

### resolveSignedMessage

```java
private static void resolveSignedMessage(Consumer<PlayerChatMessage> p_250000_, CommandSourceStack p_252335_, PlayerChatMessage p_249420_)
```

**Parameters:**

- `p_250000_` (`Consumer<PlayerChatMessage>`)
- `p_252335_` (`CommandSourceStack`)
- `p_249420_` (`PlayerChatMessage`)

**Returns:** `private static void`

### resolveDisguisedMessage

```java
private static void resolveDisguisedMessage(Consumer<PlayerChatMessage> p_249162_, CommandSourceStack p_248759_, PlayerChatMessage p_252332_)
```

**Parameters:**

- `p_249162_` (`Consumer<PlayerChatMessage>`)
- `p_248759_` (`CommandSourceStack`)
- `p_252332_` (`PlayerChatMessage`)

**Returns:** `private static void`

### filterPlainText

```java
private static CompletableFuture<FilteredText> filterPlainText(CommandSourceStack p_252063_, PlayerChatMessage p_251184_)
```

**Parameters:**

- `p_252063_` (`CommandSourceStack`)
- `p_251184_` (`PlayerChatMessage`)

**Returns:** `private static CompletableFuture<FilteredText>`

### parse

```java
public MessageArgument.Message parse(StringReader p_96834_)
```

**Parameters:**

- `p_96834_` (`StringReader`)

**Returns:** `public MessageArgument.Message`

### parse

```java
<S> public <S> MessageArgument.Message parse(StringReader p_353137_, S p_353119_)
```

**Parameters:**

- `p_353137_` (`StringReader`)
- `p_353119_` (`S`)

**Returns:** `public <S> MessageArgument.Message`

### getExamples

```java
public Collection<String> getExamples()
```

**Returns:** `Collection<String>`

### Message

```java
public static record Message(String text, MessageArgument.Part[] parts)
```

**Parameters:**

- `text` (`String`)
- `parts` (`MessageArgument.Part[]`)

**Returns:** `public static record`

### resolveComponent

```java
Component resolveComponent(CommandSourceStack p_232197_)
```

**Parameters:**

- `p_232197_` (`CommandSourceStack`)

**Returns:** `Component`

### toComponent

```java
public Component toComponent(CommandSourceStack p_96850_, boolean p_96851_)
```

**Parameters:**

- `p_96850_` (`CommandSourceStack`)
- `p_96851_` (`boolean`)

**Returns:** `public Component`

### parseText

```java
public static MessageArgument.Message parseText(StringReader p_96847_, boolean p_96848_)
```

**Parameters:**

- `p_96847_` (`StringReader`)
- `p_96848_` (`boolean`)

**Returns:** `public static MessageArgument.Message`

### Part

```java
public static record Part(int start, int end, EntitySelector selector)
```

**Parameters:**

- `start` (`int`)
- `end` (`int`)
- `selector` (`EntitySelector`)

**Returns:** `public static record`

### toComponent

```java
public Component toComponent(CommandSourceStack p_96861_)
```

**Parameters:**

- `p_96861_` (`CommandSourceStack`)

**Returns:** `public Component`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Message` | record |  |
| `Part` | record |  |
