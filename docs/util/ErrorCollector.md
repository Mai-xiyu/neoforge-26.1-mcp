# ErrorCollector

**Package:** `net.minecraft.util.parsing.packrat`
**Type:** interface<S>

## Methods

### store

```java
void store(int p_335897_, SuggestionSupplier<S> p_336077_, Object p_335991_)
```

**Parameters:**

- `p_335897_` (`int`)
- `p_336077_` (`SuggestionSupplier<S>`)
- `p_335991_` (`Object`)

### store

```java
default void store(int p_335680_, Object p_335827_)
```

**Parameters:**

- `p_335680_` (`int`)
- `p_335827_` (`Object`)

**Returns:** `default void`

### finish

```java
void finish(int p_335723_)
```

**Parameters:**

- `p_335723_` (`int`)

### discardErrorsFromShorterParse

```java
private void discardErrorsFromShorterParse(int p_335634_)
```

**Parameters:**

- `p_335634_` (`int`)

**Returns:** `private void`

### finish

```java
public void finish(int p_335534_)
```

**Parameters:**

- `p_335534_` (`int`)

### store

```java
public void store(int p_335763_, SuggestionSupplier<S> p_336144_, Object p_335736_)
```

**Parameters:**

- `p_335763_` (`int`)
- `p_336144_` (`SuggestionSupplier<S>`)
- `p_335736_` (`Object`)

### entries

```java
public List<ErrorEntry<S>> entries()
```

**Returns:** `public List<ErrorEntry<S>>`

### cursor

```java
public int cursor()
```

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `LongestOnly` | class |  |
