# Rule

**Package:** `net.minecraft.util.parsing.packrat`
**Type:** interface<S, T>

## Methods

### parse

```java
Optional<T> parse(ParseState<S> p_335819_)
```

**Parameters:**

- `p_335819_` (`ParseState<S>`)

**Returns:** `Optional<T>`

### fromTerm

```java
<S, T> static <S, T> Rule<S, T> fromTerm(Term<S> p_335422_, Rule.RuleAction<S, T> p_335862_)
```

**Parameters:**

- `p_335422_` (`Term<S>`)
- `p_335862_` (`Rule.RuleAction<S, T>`)

**Returns:** `static <S, T> Rule<S, T>`

### fromTerm

```java
<S, T> static <S, T> Rule<S, T> fromTerm(Term<S> p_335465_, Rule.SimpleRuleAction<T> p_336053_)
```

**Parameters:**

- `p_335465_` (`Term<S>`)
- `p_336053_` (`Rule.SimpleRuleAction<T>`)

**Returns:** `static <S, T> Rule<S, T>`

### run

```java
Optional<T> run(ParseState<S> p_335839_, Scope p_335752_)
```

**Parameters:**

- `p_335839_` (`ParseState<S>`)
- `p_335752_` (`Scope`)

**Returns:** `Optional<T>`

### run

```java
T run(Scope p_336158_)
```

**Parameters:**

- `p_336158_` (`Scope`)

**Returns:** `T`

### parse

```java
public Optional<T> parse(ParseState<S> p_336049_)
```

**Parameters:**

- `p_336049_` (`ParseState<S>`)

**Returns:** `Optional<T>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RuleAction` | interface |  |
| `SimpleRuleAction` | interface |  |
| `WrappedTerm` | record |  |
