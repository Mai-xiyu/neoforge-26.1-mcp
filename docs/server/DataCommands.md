# DataCommands

**Package:** `net.minecraft.server.commands.data`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ALL_PROVIDERS` | `List<Function<String, DataCommands.DataProvider>>` |  |
| `TARGET_PROVIDERS` | `List<DataCommands.DataProvider>` |  |
| `SOURCE_PROVIDERS` | `List<DataCommands.DataProvider>` |  |

## Methods

### register

```java
public static void register(CommandDispatcher<CommandSourceStack> p_139366_)
```

**Parameters:**

- `p_139366_` (`CommandDispatcher<CommandSourceStack>`)

**Returns:** `public static void`

### getAsText

```java
private static String getAsText(Tag p_265255_)
```

**Parameters:**

- `p_265255_` (`Tag`)

**Returns:** `private static String`

### stringifyTagList

```java
private static List<Tag> stringifyTagList(List<Tag> p_288980_, DataCommands.StringProcessor p_289012_)
```

**Parameters:**

- `p_288980_` (`List<Tag>`)
- `p_289012_` (`DataCommands.StringProcessor`)

**Returns:** `private static List<Tag>`

### decorateModification

```java
private static ArgumentBuilder<CommandSourceStack, ?> decorateModification(BiConsumer<ArgumentBuilder<CommandSourceStack, ?>, DataCommands.DataManipulatorDecorator> p_139404_)
```

**Parameters:**

- `p_139404_` (`BiConsumer<ArgumentBuilder<CommandSourceStack, ?>, DataCommands.DataManipulatorDecorator>`)

**Returns:** `private static ArgumentBuilder<CommandSourceStack, ?>`

### manipulateData

```java
return manipulateData()
```

**Returns:** `return`

### validatedSubstring

```java
private static String validatedSubstring(String p_288976_, int p_288968_, int p_289018_)
```

**Parameters:**

- `p_288976_` (`String`)
- `p_288968_` (`int`)
- `p_289018_` (`int`)

**Returns:** `private static String`

### substring

```java
private static String substring(String p_287625_, int p_287772_, int p_287598_)
```

**Parameters:**

- `p_287625_` (`String`)
- `p_287772_` (`int`)
- `p_287598_` (`int`)

**Returns:** `private static String`

### validatedSubstring

```java
return validatedSubstring()
```

**Returns:** `return`

### substring

```java
private static String substring(String p_287744_, int p_287741_)
```

**Parameters:**

- `p_287744_` (`String`)
- `p_287741_` (`int`)

**Returns:** `private static String`

### getOffset

```java
private static int getOffset(int p_287638_, int p_287600_)
```

**Parameters:**

- `p_287638_` (`int`)
- `p_287600_` (`int`)

**Returns:** `private static int`

### getSingletonSource

```java
private static List<Tag> getSingletonSource(CommandContext<CommandSourceStack> p_265108_, DataCommands.DataProvider p_265370_)
```

**Parameters:**

- `p_265108_` (`CommandContext<CommandSourceStack>`)
- `p_265370_` (`DataCommands.DataProvider`)

**Returns:** `private static List<Tag>`

### resolveSourcePath

```java
private static List<Tag> resolveSourcePath(CommandContext<CommandSourceStack> p_265468_, DataCommands.DataProvider p_265670_)
```

**Parameters:**

- `p_265468_` (`CommandContext<CommandSourceStack>`)
- `p_265670_` (`DataCommands.DataProvider`)

**Returns:** `private static List<Tag>`

### manipulateData

```java
private static int manipulateData(CommandContext<CommandSourceStack> p_139376_, DataCommands.DataProvider p_139377_, DataCommands.DataManipulator p_139378_, List<Tag> p_139379_)
```

**Parameters:**

- `p_139376_` (`CommandContext<CommandSourceStack>`)
- `p_139377_` (`DataCommands.DataProvider`)
- `p_139378_` (`DataCommands.DataManipulator`)
- `p_139379_` (`List<Tag>`)

**Returns:** `private static int`

### removeData

```java
private static int removeData(CommandSourceStack p_139386_, DataAccessor p_139387_, NbtPathArgument.NbtPath p_139388_)
```

**Parameters:**

- `p_139386_` (`CommandSourceStack`)
- `p_139387_` (`DataAccessor`)
- `p_139388_` (`NbtPathArgument.NbtPath`)

**Returns:** `private static int`

### getSingleTag

```java
public static Tag getSingleTag(NbtPathArgument.NbtPath p_139399_, DataAccessor p_139400_)
```

**Parameters:**

- `p_139399_` (`NbtPathArgument.NbtPath`)
- `p_139400_` (`DataAccessor`)

**Returns:** `public static Tag`

### getData

```java
private static int getData(CommandSourceStack p_139444_, DataAccessor p_139445_, NbtPathArgument.NbtPath p_139446_)
```

**Parameters:**

- `p_139444_` (`CommandSourceStack`)
- `p_139445_` (`DataAccessor`)
- `p_139446_` (`NbtPathArgument.NbtPath`)

**Returns:** `private static int`

### getNumeric

```java
private static int getNumeric(CommandSourceStack p_139390_, DataAccessor p_139391_, NbtPathArgument.NbtPath p_139392_, double p_139393_)
```

**Parameters:**

- `p_139390_` (`CommandSourceStack`)
- `p_139391_` (`DataAccessor`)
- `p_139392_` (`NbtPathArgument.NbtPath`)
- `p_139393_` (`double`)

**Returns:** `private static int`

### getData

```java
private static int getData(CommandSourceStack p_139383_, DataAccessor p_139384_)
```

**Parameters:**

- `p_139383_` (`CommandSourceStack`)
- `p_139384_` (`DataAccessor`)

**Returns:** `private static int`

### mergeData

```java
private static int mergeData(CommandSourceStack p_139395_, DataAccessor p_139396_, CompoundTag p_139397_)
```

**Parameters:**

- `p_139395_` (`CommandSourceStack`)
- `p_139396_` (`DataAccessor`)
- `p_139397_` (`CompoundTag`)

**Returns:** `private static int`

### modify

```java
int modify(CommandContext<CommandSourceStack> p_139496_, CompoundTag p_139497_, NbtPathArgument.NbtPath p_139498_, List<Tag> p_139499_)
```

**Parameters:**

- `p_139496_` (`CommandContext<CommandSourceStack>`)
- `p_139497_` (`CompoundTag`)
- `p_139498_` (`NbtPathArgument.NbtPath`)
- `p_139499_` (`List<Tag>`)

**Returns:** `int`

### create

```java
ArgumentBuilder<CommandSourceStack, ?> create(DataCommands.DataManipulator p_139501_)
```

**Parameters:**

- `p_139501_` (`DataCommands.DataManipulator`)

**Returns:** `ArgumentBuilder<CommandSourceStack, ?>`

### access

```java
DataAccessor access(CommandContext<CommandSourceStack> p_139504_)
```

**Parameters:**

- `p_139504_` (`CommandContext<CommandSourceStack>`)

**Returns:** `DataAccessor`

### wrap

```java
ArgumentBuilder<CommandSourceStack, ?> wrap(ArgumentBuilder<CommandSourceStack, ?> p_139502_, Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>> p_139503_)
```

**Parameters:**

- `p_139502_` (`ArgumentBuilder<CommandSourceStack, ?>`)
- `p_139503_` (`Function<ArgumentBuilder<CommandSourceStack, ?>, ArgumentBuilder<CommandSourceStack, ?>>`)

**Returns:** `ArgumentBuilder<CommandSourceStack, ?>`

### process

```java
String process(String p_289006_)
```

**Parameters:**

- `p_289006_` (`String`)

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DataProvider` | interface |  |
