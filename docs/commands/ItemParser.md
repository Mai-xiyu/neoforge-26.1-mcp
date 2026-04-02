# ItemParser

**Package:** `net.minecraft.commands.arguments.item`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SYNTAX_START_COMPONENTS` | `char` |  |
| `SYNTAX_END_COMPONENTS` | `char` |  |
| `SYNTAX_COMPONENT_SEPARATOR` | `char` |  |
| `SYNTAX_COMPONENT_ASSIGNMENT` | `char` |  |
| `SYNTAX_REMOVED_COMPONENT` | `char` |  |

## Methods

### ItemParser

```java
public ItemParser(HolderLookup.Provider p_324404_)
```

**Parameters:**

- `p_324404_` (`HolderLookup.Provider`)

**Returns:** `public`

### parse

```java
public ItemParser.ItemResult parse(StringReader p_324270_)
```

**Parameters:**

- `p_324270_` (`StringReader`)

**Returns:** `public ItemParser.ItemResult`

### visitItem

```java
public void visitItem(Holder<Item> p_324335_)
```

**Parameters:**

- `p_324335_` (`Holder<Item>`)

### visitComponent

```java
public <T> void visitComponent(DataComponentType<T> p_330699_, T p_330996_)
```

**Parameters:**

- `p_330699_` (`DataComponentType<T>`)
- `p_330996_` (`T`)

### visitRemovedComponent

```java
public <T> void visitRemovedComponent(DataComponentType<T> p_345362_)
```

**Parameters:**

- `p_345362_` (`DataComponentType<T>`)

### validateComponents

```java
 validateComponents()
```

**Returns:** ``

### validateComponents

```java
private static void validateComponents(StringReader p_341137_, Holder<Item> p_341139_, DataComponentPatch p_345848_)
```

**Parameters:**

- `p_341137_` (`StringReader`)
- `p_341139_` (`Holder<Item>`)
- `p_345848_` (`DataComponentPatch`)

**Returns:** `private static void`

### parse

```java
public void parse(StringReader p_336039_, ItemParser.Visitor p_335987_)
```

**Parameters:**

- `p_336039_` (`StringReader`)
- `p_335987_` (`ItemParser.Visitor`)

**Returns:** `public void`

### fillSuggestions

```java
public CompletableFuture<Suggestions> fillSuggestions(SuggestionsBuilder p_235310_)
```

**Parameters:**

- `p_235310_` (`SuggestionsBuilder`)

**Returns:** `public CompletableFuture<Suggestions>`

### ItemResult

```java
public static record ItemResult(Holder<Item> item, DataComponentPatch components)
```

**Parameters:**

- `item` (`Holder<Item>`)
- `components` (`DataComponentPatch`)

**Returns:** `public static record`

### State

```java
 State(StringReader p_335807_, ItemParser.Visitor p_336013_)
```

**Parameters:**

- `p_335807_` (`StringReader`)
- `p_336013_` (`ItemParser.Visitor`)

**Returns:** ``

### parse

```java
public void parse()
```

**Returns:** `public void`

### readItem

```java
private void readItem()
```

**Returns:** `private void`

### readComponents

```java
private void readComponents()
```

**Returns:** `private void`

### readComponentType

```java
public static DataComponentType<?> readComponentType(StringReader p_335663_)
```

**Parameters:**

- `p_335663_` (`StringReader`)

**Returns:** `public static DataComponentType<?>`

### readComponent

```java
<T> private <T> void readComponent(DataComponentType<T> p_335594_)
```

**Parameters:**

- `p_335594_` (`DataComponentType<T>`)

**Returns:** `private <T> void`

### suggestStartComponents

```java
private CompletableFuture<Suggestions> suggestStartComponents(SuggestionsBuilder p_335464_)
```

**Parameters:**

- `p_335464_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestNextOrEndComponents

```java
private CompletableFuture<Suggestions> suggestNextOrEndComponents(SuggestionsBuilder p_335894_)
```

**Parameters:**

- `p_335894_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestAssignment

```java
private CompletableFuture<Suggestions> suggestAssignment(SuggestionsBuilder p_335975_)
```

**Parameters:**

- `p_335975_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestItem

```java
private CompletableFuture<Suggestions> suggestItem(SuggestionsBuilder p_336095_)
```

**Parameters:**

- `p_336095_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestComponentAssignmentOrRemoval

```java
private CompletableFuture<Suggestions> suggestComponentAssignmentOrRemoval(SuggestionsBuilder p_345256_)
```

**Parameters:**

- `p_345256_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestComponent

```java
private CompletableFuture<Suggestions> suggestComponent(SuggestionsBuilder p_345045_)
```

**Parameters:**

- `p_345045_` (`SuggestionsBuilder`)

**Returns:** `private CompletableFuture<Suggestions>`

### suggestComponent

```java
private CompletableFuture<Suggestions> suggestComponent(SuggestionsBuilder p_346056_, String p_346259_)
```

**Parameters:**

- `p_346056_` (`SuggestionsBuilder`)
- `p_346259_` (`String`)

**Returns:** `private CompletableFuture<Suggestions>`

### visitSuggestions

```java
public void visitSuggestions(Function<SuggestionsBuilder, CompletableFuture<Suggestions>> p_335625_)
```

**Parameters:**

- `p_335625_` (`Function<SuggestionsBuilder, CompletableFuture<Suggestions>>`)

### resolveSuggestions

```java
public CompletableFuture<Suggestions> resolveSuggestions(SuggestionsBuilder p_336050_, StringReader p_335952_)
```

**Parameters:**

- `p_336050_` (`SuggestionsBuilder`)
- `p_335952_` (`StringReader`)

**Returns:** `public CompletableFuture<Suggestions>`

### visitItem

```java
default void visitItem(Holder<Item> p_336184_)
```

**Parameters:**

- `p_336184_` (`Holder<Item>`)

**Returns:** `default void`

### visitComponent

```java
<T> default <T> void visitComponent(DataComponentType<T> p_336083_, T p_335499_)
```

**Parameters:**

- `p_336083_` (`DataComponentType<T>`)
- `p_335499_` (`T`)

**Returns:** `default <T> void`

### visitRemovedComponent

```java
<T> default <T> void visitRemovedComponent(DataComponentType<T> p_344835_)
```

**Parameters:**

- `p_344835_` (`DataComponentType<T>`)

**Returns:** `default <T> void`

### visitSuggestions

```java
default void visitSuggestions(Function<SuggestionsBuilder, CompletableFuture<Suggestions>> p_335635_)
```

**Parameters:**

- `p_335635_` (`Function<SuggestionsBuilder, CompletableFuture<Suggestions>>`)

**Returns:** `default void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ItemResult` | record |  |
| `Visitor` | interface |  |
