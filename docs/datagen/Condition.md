# Condition

**Package:** `net.minecraft.data.models.blockstates`
**Type:** interface
**Extends:** `Supplier<JsonElement>`

## Methods

### validate

```java
void validate(StateDefinition<?, ?> p_125136_)
```

**Parameters:**

- `p_125136_` (`StateDefinition<?, ?>`)

### condition

```java
static Condition.TerminalCondition condition()
```

**Returns:** `static Condition.TerminalCondition`

### and

```java
static Condition and(Condition[]... p_176294_)
```

**Parameters:**

- `p_176294_` (`Condition[]...`)

**Returns:** `static Condition`

### or

```java
static Condition or(Condition[]... p_125138_)
```

**Parameters:**

- `p_125138_` (`Condition[]...`)

**Returns:** `static Condition`

### CompositeCondition

```java
 CompositeCondition(Condition.Operation p_125142_, List<Condition> p_125143_)
```

**Parameters:**

- `p_125142_` (`Condition.Operation`)
- `p_125143_` (`List<Condition>`)

**Returns:** ``

### validate

```java
public void validate(StateDefinition<?, ?> p_125149_)
```

**Parameters:**

- `p_125149_` (`StateDefinition<?, ?>`)

### get

```java
public JsonElement get()
```

**Returns:** `public JsonElement`

### OR

```java
, OR()
```

**Returns:** `,`

### Operation

```java
private Operation(String p_125163_)
```

**Parameters:**

- `p_125163_` (`String`)

**Returns:** `private`

### joinValues

```java
private static <T extends Comparable<T>> String joinValues(Property<T> p_125187_, Stream<T> p_125188_)
```

**Parameters:**

- `p_125187_` (`Property<T>`)
- `p_125188_` (`Stream<T>`)

**Returns:** `private static <T extends Comparable<T>> String`

### getTerm

```java
private static <T extends Comparable<T>> String getTerm(Property<T> p_125195_, T p_125196_, T[] p_125197_)
```

**Parameters:**

- `p_125195_` (`Property<T>`)
- `p_125196_` (`T`)
- `p_125197_` (`T[]`)

**Returns:** `private static <T extends Comparable<T>> String`

### putValue

```java
private <T extends Comparable<T>> void putValue(Property<T> p_125184_, String p_125185_)
```

**Parameters:**

- `p_125184_` (`Property<T>`)
- `p_125185_` (`String`)

**Returns:** `private <T extends Comparable<T>> void`

### IllegalStateException

```java
throw new IllegalStateException("Tried to replace " + p_125184_ + " value from " + s + " to " + p_125185_)
```

**Parameters:**

- `p_125185_` (`"Tried to replace " + p_125184_ + " value from " + s + " to " +`)

**Returns:** `throw new`

### term

```java
public final <T extends Comparable<T>> Condition.TerminalCondition term(Property<T> p_125177_, T p_125178_)
```

**Parameters:**

- `p_125177_` (`Property<T>`)
- `p_125178_` (`T`)

**Returns:** `public final <T extends Comparable<T>> Condition.TerminalCondition`

### term

```java
public final <T extends Comparable<T>> Condition.TerminalCondition term(Property<T> p_125180_, T p_125181_, T[]... p_125182_)
```

**Parameters:**

- `p_125180_` (`Property<T>`)
- `p_125181_` (`T`)
- `p_125182_` (`T[]...`)

**Returns:** `<T extends Comparable<T>> Condition.TerminalCondition`

### negatedTerm

```java
public final <T extends Comparable<T>> Condition.TerminalCondition negatedTerm(Property<T> p_176297_, T p_176298_)
```

**Parameters:**

- `p_176297_` (`Property<T>`)
- `p_176298_` (`T`)

**Returns:** `public final <T extends Comparable<T>> Condition.TerminalCondition`

### negatedTerm

```java
public final <T extends Comparable<T>> Condition.TerminalCondition negatedTerm(Property<T> p_176300_, T p_176301_, T[]... p_176302_)
```

**Parameters:**

- `p_176300_` (`Property<T>`)
- `p_176301_` (`T`)
- `p_176302_` (`T[]...`)

**Returns:** `<T extends Comparable<T>> Condition.TerminalCondition`

### get

```java
public JsonElement get()
```

**Returns:** `public JsonElement`

### validate

```java
public void validate(StateDefinition<?, ?> p_125172_)
```

**Parameters:**

- `p_125172_` (`StateDefinition<?, ?>`)

### IllegalStateException

```java
throw new IllegalStateException("Properties " + list + " are missing from " + p_125172_)
```

**Parameters:**

- `p_125172_` (`"Properties " + list + " are missing from " +`)

**Returns:** `throw new`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CompositeCondition` | class |  |
| `Operation` | enum |  |
| `TerminalCondition` | class |  |
