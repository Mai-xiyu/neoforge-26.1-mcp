# Dictionary

**Package:** `net.minecraft.util.parsing.packrat`
**Type:** class<S>

## Methods

### put

```java
<T> public <T> void put(Atom<T> p_335994_, Rule<S, T> p_336190_)
```

**Parameters:**

- `p_335994_` (`Atom<T>`)
- `p_336190_` (`Rule<S, T>`)

**Returns:** `public <T> void`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Trying to override rule: " + p_335994_)
```

**Parameters:**

- `p_335994_` (`"Trying to override rule: " +`)

**Returns:** `throw new`

### put

```java
<T> public <T> void put(Atom<T> p_335571_, Term<S> p_336089_, Rule.RuleAction<S, T> p_336052_)
```

**Parameters:**

- `p_335571_` (`Atom<T>`)
- `p_336089_` (`Term<S>`)
- `p_336052_` (`Rule.RuleAction<S, T>`)

**Returns:** `public <T> void`

### put

```java
<T> public <T> void put(Atom<T> p_336163_, Term<S> p_335447_, Rule.SimpleRuleAction<T> p_335981_)
```

**Parameters:**

- `p_336163_` (`Atom<T>`)
- `p_335447_` (`Term<S>`)
- `p_335981_` (`Rule.SimpleRuleAction<T>`)

**Returns:** `public <T> void`

### get

```java
public <T> Rule<S, T> get(Atom<T> p_336153_)
```

**Parameters:**

- `p_336153_` (`Atom<T>`)

**Returns:** `Rule<S, T>`
