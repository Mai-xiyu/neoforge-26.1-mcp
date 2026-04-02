# EntitySelectorManager

**Package:** `net.neoforged.neoforge.common.command`
**Type:** class

## Description

Allows modders to register custom entity selectors by assigning an `IEntitySelectorType` to a String token. 
The token "test", for example, corresponds to @test[...] in a command.

## Methods

### register

```java
public static void register(String token, IEntitySelectorType type)
```

**Parameters:**

- `token` (`String`)
- `type` (`IEntitySelectorType`)

### IllegalArgumentException

```java
throw new IllegalArgumentException("Token must not be empty")
```

**Parameters:**

- `empty"` (`"Token must not be`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Token clashes with vanilla @" + token)
```

**Parameters:**

- `token` (`"Token clashes with vanilla @" +`)

**Returns:** `throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Token must only contain allowed characters")
```

**Parameters:**

- `characters"` (`"Token must only contain allowed`)

**Returns:** `throw new`

### parseSelector

```java
public static EntitySelector parseSelector(EntitySelectorParser parser)
```

**Parameters:**

- `parser` (`EntitySelectorParser`)

**Returns:** `EntitySelector`

### fillSelectorSuggestions

```java
public static void fillSelectorSuggestions(SuggestionsBuilder suggestionBuilder)
```

**Parameters:**

- `suggestionBuilder` (`SuggestionsBuilder`)
