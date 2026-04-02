# EntitySelectorOptions

**Package:** `net.minecraft.commands.arguments.selector.options`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ERROR_UNKNOWN_OPTION` | `DynamicCommandExceptionType` |  |
| `ERROR_INAPPLICABLE_OPTION` | `DynamicCommandExceptionType` |  |
| `ERROR_RANGE_NEGATIVE` | `SimpleCommandExceptionType` |  |
| `ERROR_LEVEL_NEGATIVE` | `SimpleCommandExceptionType` |  |
| `ERROR_LIMIT_TOO_SMALL` | `SimpleCommandExceptionType` |  |
| `ERROR_SORT_UNKNOWN` | `DynamicCommandExceptionType` |  |
| `ERROR_GAME_MODE_INVALID` | `DynamicCommandExceptionType` |  |
| `ERROR_ENTITY_TYPE_INVALID` | `DynamicCommandExceptionType` |  |

## Methods

### register

```java
public static void register(String p_121454_, EntitySelectorOptions.Modifier p_121455_, Predicate<EntitySelectorParser> p_121456_, Component p_121457_)
```

**Parameters:**

- `p_121454_` (`String`)
- `p_121455_` (`EntitySelectorOptions.Modifier`)
- `p_121456_` (`Predicate<EntitySelectorParser>`)
- `p_121457_` (`Component`)

**Returns:** `public static void`

### bootStrap

```java
public static void bootStrap()
```

**Returns:** `public static void`

### register

```java
 register(p_121413_ -> { p_121413_.setWorldLimited()
```

**Parameters:**

- `p_121413_.setWorldLimited(` (`p_121413_ -> {`)

**Returns:** ``

### register

```java
 register(p_121409_ -> { p_121409_.setWorldLimited()
```

**Parameters:**

- `p_121409_.setWorldLimited(` (`p_121409_ -> {`)

**Returns:** ``

### register

```java
 register(p_121405_ -> { p_121405_.setWorldLimited()
```

**Parameters:**

- `p_121405_.setWorldLimited(` (`p_121405_ -> {`)

**Returns:** ``

### register

```java
 register(p_121401_ -> { p_121401_.setWorldLimited()
```

**Parameters:**

- `p_121401_.setWorldLimited(` (`p_121401_ -> {`)

**Returns:** ``

### register

```java
 register(p_121397_ -> { p_121397_.setWorldLimited()
```

**Parameters:**

- `p_121397_.setWorldLimited(` (`p_121397_ -> {`)

**Returns:** ``

### register

```java
 register(p_121562_ -> { p_121562_.setWorldLimited()
```

**Parameters:**

- `p_121562_.setWorldLimited(` (`p_121562_ -> {`)

**Returns:** ``

### register

```java
 register(p_121538_ -> { boolean flag = p_121538_.shouldInvertValue()
```

**Parameters:**

- `p_121538_.shouldInvertValue(` (`p_121538_ -> { boolean flag =`)

**Returns:** ``

### register

```java
 register(p_121530_ -> { boolean flag = p_121530_.shouldInvertValue()
```

**Parameters:**

- `p_121530_.shouldInvertValue(` (`p_121530_ -> { boolean flag =`)

**Returns:** ``

### register

```java
 register(p_121526_ -> { boolean flag = p_121526_.shouldInvertValue()
```

**Parameters:**

- `p_121526_.shouldInvertValue(` (`p_121526_ -> { boolean flag =`)

**Returns:** ``

### register

```java
 register(p_121522_ -> { StringReader stringreader = p_121522_.getReader()
```

**Parameters:**

- `p_121522_.getReader(` (`p_121522_ -> { StringReader stringreader =`)

**Returns:** ``

### register

```java
 register(p_121514_ -> { StringReader stringreader = p_121514_.getReader()
```

**Parameters:**

- `p_121514_.getReader(` (`p_121514_ -> { StringReader stringreader =`)

**Returns:** ``

### register

```java
 register(p_335169_ -> { boolean flag = p_335169_.shouldInvertValue()
```

**Parameters:**

- `p_335169_.shouldInvertValue(` (`p_335169_ -> { boolean flag =`)

**Returns:** ``

### get

```java
public static EntitySelectorOptions.Modifier get(EntitySelectorParser p_121448_, String p_121449_, int p_121450_)
```

**Parameters:**

- `p_121448_` (`EntitySelectorParser`)
- `p_121449_` (`String`)
- `p_121450_` (`int`)

**Returns:** `public static EntitySelectorOptions.Modifier`

### suggestNames

```java
public static void suggestNames(EntitySelectorParser p_121441_, SuggestionsBuilder p_121442_)
```

**Parameters:**

- `p_121441_` (`EntitySelectorParser`)
- `p_121442_` (`SuggestionsBuilder`)

**Returns:** `public static void`

### handle

```java
void handle(EntitySelectorParser p_121564_)
```

**Parameters:**

- `p_121564_` (`EntitySelectorParser`)

### Option

```java
static record Option(EntitySelectorOptions.Modifier modifier, Predicate<EntitySelectorParser> canUse, Component description)
```

**Parameters:**

- `modifier` (`EntitySelectorOptions.Modifier`)
- `canUse` (`Predicate<EntitySelectorParser>`)
- `description` (`Component`)

**Returns:** `static record`
