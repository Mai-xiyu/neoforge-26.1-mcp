# IEntitySelectorType

**Package:** `net.neoforged.neoforge.common.command`
**Type:** interface

## Description

Implementations of this interface can be registered using `EntitySelectorManager#register`

## Methods

### build

```java
EntitySelector build(EntitySelectorParser parser)
```

**Parameters:**

- `parser` (`EntitySelectorParser`)

**Returns:** `EntitySelector`

### getSuggestionTooltip

```java
Component getSuggestionTooltip()
```

**Returns:** `Component`
