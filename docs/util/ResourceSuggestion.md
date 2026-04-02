# ResourceSuggestion

**Package:** `net.minecraft.util.parsing.packrat.commands`
**Type:** interface
**Extends:** `SuggestionSupplier<StringReader>`

## Methods

### possibleResources

```java
Stream<ResourceLocation> possibleResources()
```

**Returns:** `Stream<ResourceLocation>`

### possibleValues

```java
default Stream<String> possibleValues(ParseState<StringReader> p_335480_)
```

**Parameters:**

- `p_335480_` (`ParseState<StringReader>`)

**Returns:** `Stream<String>`
