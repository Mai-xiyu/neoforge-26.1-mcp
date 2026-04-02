# StringReaderTerms

**Package:** `net.minecraft.util.parsing.packrat.commands`
**Type:** interface

## Methods

### word

```java
static Term<StringReader> word(String p_335707_)
```

**Parameters:**

- `p_335707_` (`String`)

**Returns:** `static Term<StringReader>`

### character

```java
static Term<StringReader> character(char p_336175_)
```

**Parameters:**

- `p_336175_` (`char`)

**Returns:** `static Term<StringReader>`

### parse

```java
public boolean parse(ParseState<StringReader> p_335747_, Scope p_336031_, Control p_336041_)
```

**Parameters:**

- `p_335747_` (`ParseState<StringReader>`)
- `p_336031_` (`Scope`)
- `p_336041_` (`Control`)

**Returns:** `boolean`

### parse

```java
public boolean parse(ParseState<StringReader> p_335419_, Scope p_335724_, Control p_335868_)
```

**Parameters:**

- `p_335419_` (`ParseState<StringReader>`)
- `p_335724_` (`Scope`)
- `p_335868_` (`Control`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `TerminalCharacter` | record |  |
| `TerminalWord` | record |  |
