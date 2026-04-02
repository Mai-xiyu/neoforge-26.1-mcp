# EnumProperty

**Package:** `net.minecraft.world.level.block.state.properties`
**Type:** class<T extends Enum<T> & StringRepresentable> extends Property<T>

## Methods

### EnumProperty

```java
protected EnumProperty(String p_61579_, Class<T> p_61580_, Collection<T> p_61581_)
```

**Parameters:**

- `p_61579_` (`String`)
- `p_61580_` (`Class<T>`)
- `p_61581_` (`Collection<T>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### IllegalArgumentException

```java
throw new IllegalArgumentException("Multiple values have the same name '" + s + "'")
```

**Parameters:**

- `"'"` (`"Multiple values have the same name '" + s +`)

**Returns:** `throw new`

### getPossibleValues

```java
public Collection<T> getPossibleValues()
```

**Returns:** `Collection<T>`

### getValue

```java
public Optional<T> getValue(String p_61604_)
```

**Parameters:**

- `p_61604_` (`String`)

**Returns:** `Optional<T>`

### getName

```java
public String getName(T p_61586_)
```

**Parameters:**

- `p_61586_` (`T`)

**Returns:** `public String`

### equals

```java
public boolean equals(Object p_61606_)
```

**Parameters:**

- `p_61606_` (`Object`)

**Returns:** `boolean`

### generateHashCode

```java
public int generateHashCode()
```

**Returns:** `int`

### create

```java
StringRepresentable> EnumProperty<T> create(String p_61588_, Class<T> p_61589_)
```

**Parameters:**

- `p_61588_` (`String`)
- `p_61589_` (`Class<T>`)

**Returns:** `StringRepresentable> EnumProperty<T>`

### create

```java
return create(p_187560_ -> true)
```

**Parameters:**

- `true` (`p_187560_ ->`)

**Returns:** `return`

### create

```java
StringRepresentable> EnumProperty<T> create(String p_61595_, Class<T> p_61596_, Predicate<T> p_61597_)
```

**Parameters:**

- `p_61595_` (`String`)
- `p_61596_` (`Class<T>`)
- `p_61597_` (`Predicate<T>`)

**Returns:** `StringRepresentable> EnumProperty<T>`

### create

```java
StringRepresentable> EnumProperty<T> create(String p_61599_, Class<T> p_61600_, T[]... p_61601_)
```

**Parameters:**

- `p_61599_` (`String`)
- `p_61600_` (`Class<T>`)
- `p_61601_` (`T[]...`)

**Returns:** `StringRepresentable> EnumProperty<T>`

### create

```java
StringRepresentable> EnumProperty<T> create(String p_61591_, Class<T> p_61592_, Collection<T> p_61593_)
```

**Parameters:**

- `p_61591_` (`String`)
- `p_61592_` (`Class<T>`)
- `p_61593_` (`Collection<T>`)

**Returns:** `StringRepresentable> EnumProperty<T>`
