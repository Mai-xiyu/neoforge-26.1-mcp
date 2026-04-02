# IdMapper

**Package:** `net.minecraft.core`
**Type:** class<T> implements IdMap<T>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `nextId` | `int` |  |
| `tToId` | `Reference2IntMap<T>` |  |
| `idToT` | `List<T>` |  |

## Methods

### IdMapper

```java
public IdMapper()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### IdMapper

```java
public IdMapper(int p_122658_)
```

**Parameters:**

- `p_122658_` (`int`)

**Returns:** `public`

### addMapping

```java
public void addMapping(T p_122665_, int p_122666_)
```

**Parameters:**

- `p_122665_` (`T`)
- `p_122666_` (`int`)

**Returns:** `public void`

### add

```java
public void add(T p_122668_)
```

**Parameters:**

- `p_122668_` (`T`)

**Returns:** `public void`

### getId

```java
public int getId(T p_122663_)
```

**Parameters:**

- `p_122663_` (`T`)

**Returns:** `int`

### byId

```java
public final T byId(int p_122661_)
```

**Parameters:**

- `p_122661_` (`int`)

**Returns:** `T`

### iterator

```java
public Iterator<T> iterator()
```

**Returns:** `Iterator<T>`

### contains

```java
public boolean contains(int p_175381_)
```

**Parameters:**

- `p_175381_` (`int`)

**Returns:** `public boolean`

### size

```java
public int size()
```

**Returns:** `int`
