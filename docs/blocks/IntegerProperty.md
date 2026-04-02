# IntegerProperty

**Package:** `net.minecraft.world.level.block.state.properties`
**Type:** class
**Extends:** `Property<Integer>`

## Methods

### IntegerProperty

```java
protected IntegerProperty(String p_61623_, int p_61624_, int p_61625_)
```

**Parameters:**

- `p_61623_` (`String`)
- `p_61624_` (`int`)
- `p_61625_` (`int`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### IllegalArgumentException

```java
throw new IllegalArgumentException("Min value of " + p_61623_ + " must be 0 or greater")
```

**Parameters:**

- `greater"` (`"Min value of " + p_61623_ + " must be 0 or`)

**Returns:** `throw new`

### getPossibleValues

```java
public Collection<Integer> getPossibleValues()
```

**Returns:** `Collection<Integer>`

### equals

```java
public boolean equals(Object p_61639_)
```

**Parameters:**

- `p_61639_` (`Object`)

**Returns:** `boolean`

### generateHashCode

```java
public int generateHashCode()
```

**Returns:** `int`

### create

```java
public static IntegerProperty create(String p_61632_, int p_61633_, int p_61634_)
```

**Parameters:**

- `p_61632_` (`String`)
- `p_61633_` (`int`)
- `p_61634_` (`int`)

**Returns:** `public static IntegerProperty`

### IntegerProperty

```java
return new IntegerProperty()
```

**Returns:** `return new`

### getValue

```java
public Optional<Integer> getValue(String p_61637_)
```

**Parameters:**

- `p_61637_` (`String`)

**Returns:** `Optional<Integer>`

### getName

```java
public String getName(Integer p_61630_)
```

**Parameters:**

- `p_61630_` (`Integer`)

**Returns:** `public String`
