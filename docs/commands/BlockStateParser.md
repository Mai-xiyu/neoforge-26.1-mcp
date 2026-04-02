# BlockStateParser

**Package:** `net.minecraft.commands.arguments.blocks`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_NO_TAGS_ALLOWED` | `SimpleCommandExceptionType` |  |
| `ERROR_UNKNOWN_BLOCK` | `DynamicCommandExceptionType` |  |
| `ERROR_UNKNOWN_PROPERTY` | `Dynamic2CommandExceptionType` |  |
| `ERROR_DUPLICATE_PROPERTY` | `Dynamic2CommandExceptionType` |  |
| `ERROR_INVALID_VALUE` | `Dynamic3CommandExceptionType` |  |
| `ERROR_EXPECTED_VALUE` | `Dynamic2CommandExceptionType` |  |
| `ERROR_EXPECTED_END_OF_PROPERTIES` | `SimpleCommandExceptionType` |  |
| `ERROR_UNKNOWN_TAG` | `DynamicCommandExceptionType` |  |

## Methods

### BlockStateParser

```java
private BlockStateParser(HolderLookup<Block> p_234673_, StringReader p_234674_, boolean p_234675_, boolean p_234676_)
```

**Parameters:**

- `p_234673_` (`HolderLookup<Block>`)
- `p_234674_` (`StringReader`)
- `p_234675_` (`boolean`)
- `p_234676_` (`boolean`)

**Returns:** `private`

### parseForBlock

```java
public static BlockStateParser.BlockResult parseForBlock(HolderLookup<Block> p_251394_, String p_248677_, boolean p_250430_)
```

**Parameters:**

- `p_251394_` (`HolderLookup<Block>`)
- `p_248677_` (`String`)
- `p_250430_` (`boolean`)

**Returns:** `public static BlockStateParser.BlockResult`

### parseForBlock

```java
public static BlockStateParser.BlockResult parseForBlock(HolderLookup<Block> p_234692_, StringReader p_234693_, boolean p_234694_)
```

**Parameters:**

- `p_234692_` (`HolderLookup<Block>`)
- `p_234693_` (`StringReader`)
- `p_234694_` (`boolean`)

**Returns:** `public static BlockStateParser.BlockResult`

### parseForTesting

```java
public static Either<BlockStateParser.BlockResult, BlockStateParser.TagResult> parseForTesting(HolderLookup<Block> p_252082_, String p_251830_, boolean p_249125_)
```

**Parameters:**

- `p_252082_` (`HolderLookup<Block>`)
- `p_251830_` (`String`)
- `p_249125_` (`boolean`)

**Returns:** `public static Either<BlockStateParser.BlockResult, BlockStateParser.TagResult>`

### parseForTesting

```java
public static Either<BlockStateParser.BlockResult, BlockStateParser.TagResult> parseForTesting(HolderLookup<Block> p_234717_, StringReader p_234718_, boolean p_234719_)
```

**Parameters:**

- `p_234717_` (`HolderLookup<Block>`)
- `p_234718_` (`StringReader`)
- `p_234719_` (`boolean`)

**Returns:** `public static Either<BlockStateParser.BlockResult, BlockStateParser.TagResult>`

### fillSuggestions

```java
public static CompletableFuture<Suggestions> fillSuggestions(HolderLookup<Block> p_234696_, SuggestionsBuilder p_234697_, boolean p_234698_, boolean p_234699_)
```

**Parameters:**

- `p_234696_` (`HolderLookup<Block>`)
- `p_234697_` (`SuggestionsBuilder`)
- `p_234698_` (`boolean`)
- `p_234699_` (`boolean`)

**Returns:** `public static CompletableFuture<Suggestions>`

### parse

```java
private void parse()
```

**Returns:** `private void`

### suggestPropertyNameOrEnd

```java
private CompletableFuture<Suggestions> suggestPropertyNameOrEnd(SuggestionsBuilder p_234684_)
```

**Parameters:**

- `p_234684_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestVaguePropertyNameOrEnd

```java
private CompletableFuture<Suggestions> suggestVaguePropertyNameOrEnd(SuggestionsBuilder p_234715_)
```

**Parameters:**

- `p_234715_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestPropertyName

```java
private CompletableFuture<Suggestions> suggestPropertyName(SuggestionsBuilder p_234729_)
```

**Parameters:**

- `p_234729_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestVaguePropertyName

```java
private CompletableFuture<Suggestions> suggestVaguePropertyName(SuggestionsBuilder p_234731_)
```

**Parameters:**

- `p_234731_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestOpenNbt

```java
private CompletableFuture<Suggestions> suggestOpenNbt(SuggestionsBuilder p_234733_)
```

**Parameters:**

- `p_234733_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### hasBlockEntity

```java
private boolean hasBlockEntity()
```

**Returns:** `private boolean`

### suggestEquals

```java
private CompletableFuture<Suggestions> suggestEquals(SuggestionsBuilder p_234735_)
```

**Parameters:**

- `p_234735_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestNextPropertyOrEnd

```java
private CompletableFuture<Suggestions> suggestNextPropertyOrEnd(SuggestionsBuilder p_234737_)
```

**Parameters:**

- `p_234737_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### addSuggestions

```java
private static <T extends Comparable<T>> SuggestionsBuilder addSuggestions(SuggestionsBuilder p_116787_, Property<T> p_116788_)
```

**Parameters:**

- `p_116787_` (`SuggestionsBuilder`)
- `p_116788_` (`Property<T>`)

**Returns:** `private static <T extends Comparable<T>> SuggestionsBuilder`

### suggestVaguePropertyValue

```java
private CompletableFuture<Suggestions> suggestVaguePropertyValue(SuggestionsBuilder p_234686_, String p_234687_)
```

**Parameters:**

- `p_234686_` (`SuggestionsBuilder`)
- `p_234687_` (`String`)

**Returns:** `private CompletableFuture<Suggestions>`

### addSuggestions

```java
 addSuggestions()
```

**Returns:** ``

### suggestOpenVaguePropertiesOrNbt

```java
private CompletableFuture<Suggestions> suggestOpenVaguePropertiesOrNbt(SuggestionsBuilder p_234739_)
```

**Parameters:**

- `p_234739_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestOpenPropertiesOrNbt

```java
private CompletableFuture<Suggestions> suggestOpenPropertiesOrNbt(SuggestionsBuilder p_234741_)
```

**Parameters:**

- `p_234741_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestTag

```java
private CompletableFuture<Suggestions> suggestTag(SuggestionsBuilder p_234743_)
```

**Parameters:**

- `p_234743_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestItem

```java
private CompletableFuture<Suggestions> suggestItem(SuggestionsBuilder p_234745_)
```

**Parameters:**

- `p_234745_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestBlockIdOrTag

```java
private CompletableFuture<Suggestions> suggestBlockIdOrTag(SuggestionsBuilder p_234747_)
```

**Parameters:**

- `p_234747_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### readBlock

```java
private void readBlock()
```

**Returns:** `private void`

### readTag

```java
private void readTag()
```

**Returns:** `private void`

### readProperties

```java
private void readProperties()
```

**Returns:** `private void`

### readVagueProperties

```java
private void readVagueProperties()
```

**Returns:** `private void`

### readNbt

```java
private void readNbt()
```

**Returns:** `private void`

### setValue

```java
private <T extends Comparable<T>> void setValue(Property<T> p_116776_, String p_116777_, int p_116778_)
```

**Parameters:**

- `p_116776_` (`Property<T>`)
- `p_116777_` (`String`)
- `p_116778_` (`int`)

**Returns:** `private <T extends Comparable<T>> void`

### serialize

```java
public static String serialize(BlockState p_116770_)
```

**Parameters:**

- `p_116770_` (`BlockState`)

**Returns:** `public static String`

### appendProperty

```java
private static <T extends Comparable<T>> void appendProperty(StringBuilder p_116803_, Property<T> p_116804_, Comparable<?> p_116805_)
```

**Parameters:**

- `p_116803_` (`StringBuilder`)
- `p_116804_` (`Property<T>`)
- `p_116805_` (`Comparable<?>`)

**Returns:** `private static <T extends Comparable<T>> void`

### BlockResult

```java
public static record BlockResult(BlockState blockState, Map<Property<?>, Comparable<?>> properties, CompoundTag nbt)
```

**Parameters:**

- `blockState` (`BlockState`)
- `properties` (`Map<Property<?>, Comparable<?>>`)
- `nbt` (`CompoundTag`)

**Returns:** `public static record`

### TagResult

```java
public static record TagResult(HolderSet<Block> tag, Map<String, String> vagueProperties, CompoundTag nbt)
```

**Parameters:**

- `tag` (`HolderSet<Block>`)
- `vagueProperties` (`Map<String, String>`)
- `nbt` (`CompoundTag`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BlockResult` | record |  |
| `TagResult` | record |  |
