# Term

**Package:** `net.minecraft.util.parsing.packrat`
**Type:** interface<S>

## Methods

### parse

```java
boolean parse(ParseState<S> p_335458_, Scope p_335411_, Control p_336015_)
```

**Parameters:**

- `p_335458_` (`ParseState<S>`)
- `p_335411_` (`Scope`)
- `p_336015_` (`Control`)

**Returns:** `boolean`

### named

```java
<S> static <S> Term<S> named(Atom<?> p_335922_)
```

**Parameters:**

- `p_335922_` (`Atom<?>`)

**Returns:** `static <S> Term<S>`

### marker

```java
<S, T> static <S, T> Term<S> marker(Atom<T> p_335833_, T p_335787_)
```

**Parameters:**

- `p_335833_` (`Atom<T>`)
- `p_335787_` (`T`)

**Returns:** `static <S, T> Term<S>`

### sequence

```java
static <S> Term<S> sequence(Term<S>[]... p_336132_)
```

**Parameters:**

- `p_336132_` (`Term<S>[]...`)

**Returns:** `Term<S>`

### alternative

```java
static <S> Term<S> alternative(Term<S>[]... p_335455_)
```

**Parameters:**

- `p_335455_` (`Term<S>[]...`)

**Returns:** `Term<S>`

### optional

```java
<S> static <S> Term<S> optional(Term<S> p_335471_)
```

**Parameters:**

- `p_335471_` (`Term<S>`)

**Returns:** `static <S> Term<S>`

### cut

```java
<S> static <S> Term<S> cut()
```

**Returns:** `static <S> Term<S>`

### parse

```java
public boolean parse(ParseState<S> p_335490_, Scope p_335377_, Control p_336074_)
```

**Parameters:**

- `p_335490_` (`ParseState<S>`)
- `p_335377_` (`Scope`)
- `p_336074_` (`Control`)

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### empty

```java
<S> static <S> Term<S> empty()
```

**Returns:** `static <S> Term<S>`

### parse

```java
public boolean parse(ParseState<S> p_335978_, Scope p_335744_, Control p_335881_)
```

**Parameters:**

- `p_335978_` (`ParseState<S>`)
- `p_335744_` (`Scope`)
- `p_335881_` (`Control`)

**Returns:** `boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### parse

```java
public boolean parse(ParseState<S> p_336147_, Scope p_335902_, Control p_335396_)
```

**Parameters:**

- `p_336147_` (`ParseState<S>`)
- `p_335902_` (`Scope`)
- `p_335396_` (`Control`)

**Returns:** `boolean`

### parse

```java
public boolean parse(ParseState<S> p_335600_, Scope p_335485_, Control p_335375_)
```

**Parameters:**

- `p_335600_` (`ParseState<S>`)
- `p_335485_` (`Scope`)
- `p_335375_` (`Control`)

**Returns:** `boolean`

### parse

```java
public boolean parse(ParseState<S> p_335415_, Scope p_335550_, Control p_336000_)
```

**Parameters:**

- `p_335415_` (`ParseState<S>`)
- `p_335550_` (`Scope`)
- `p_336000_` (`Control`)

**Returns:** `boolean`

### parse

```java
public boolean parse(ParseState<S> p_335637_, Scope p_336134_, Control p_336055_)
```

**Parameters:**

- `p_335637_` (`ParseState<S>`)
- `p_336134_` (`Scope`)
- `p_336055_` (`Control`)

**Returns:** `boolean`

### parse

```java
public boolean parse(ParseState<S> p_336111_, Scope p_335911_, Control p_336188_)
```

**Parameters:**

- `p_336111_` (`ParseState<S>`)
- `p_335911_` (`Scope`)
- `p_336188_` (`Control`)

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Alternative` | record |  |
| `Marker` | record |  |
| `Maybe` | record |  |
| `Reference` | record |  |
| `Sequence` | record |  |
