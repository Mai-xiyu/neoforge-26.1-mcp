# ClassInstanceMultiMap

**Package:** `net.minecraft.util`
**Type:** class<T> extends AbstractCollection<T>

## Methods

### ClassInstanceMultiMap

```java
public ClassInstanceMultiMap(Class<T> p_13531_)
```

**Parameters:**

- `p_13531_` (`Class<T>`)

**Returns:** `public`

### add

```java
public boolean add(T p_13536_)
```

**Parameters:**

- `p_13536_` (`T`)

**Returns:** `boolean`

### remove

```java
public boolean remove(Object p_13543_)
```

**Parameters:**

- `p_13543_` (`Object`)

**Returns:** `boolean`

### contains

```java
public boolean contains(Object p_13540_)
```

**Parameters:**

- `p_13540_` (`Object`)

**Returns:** `boolean`

### find

```java
<S> public <S> Collection<S> find(Class<S> p_13534_)
```

**Parameters:**

- `p_13534_` (`Class<S>`)

**Returns:** `public <S> Collection<S>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Don't know how to search for " + p_13534_)
```

**Parameters:**

- `p_13534_` (`"Don't know how to search for " +`)

**Returns:** `throw new`

### iterator

```java
public Iterator<T> iterator()
```

**Returns:** `Iterator<T>`

### getAllInstances

```java
public List<T> getAllInstances()
```

**Returns:** `public List<T>`

### size

```java
public int size()
```

**Returns:** `int`
