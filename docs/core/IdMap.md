# IdMap

**Package:** `net.minecraft.core`
**Type:** interface<T> extends Iterable<T>

## Methods

### getId

```java
int getId(T p_122652_)
```

**Parameters:**

- `p_122652_` (`T`)

**Returns:** `int`

### byId

```java
T byId(int p_122651_)
```

**Parameters:**

- `p_122651_` (`int`)

**Returns:** `T`

### byIdOrThrow

```java
default T byIdOrThrow(int p_200958_)
```

**Parameters:**

- `p_200958_` (`int`)

**Returns:** `default T`

### IllegalArgumentException

```java
throw new IllegalArgumentException("No value with id " + p_200958_)
```

**Parameters:**

- `p_200958_` (`"No value with id " +`)

**Returns:** `throw new`

### getIdOrThrow

```java
default int getIdOrThrow(T p_320059_)
```

**Parameters:**

- `p_320059_` (`T`)

**Returns:** `default int`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Can't find id for '" + p_320059_ + "' in map " + this)
```

**Parameters:**

- `this` (`"Can't find id for '" + p_320059_ + "' in map " +`)

**Returns:** `throw new`

### size

```java
int size()
```

**Returns:** `int`
