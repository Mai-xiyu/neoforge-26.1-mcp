# CrudeIncrementalIntIdentityHashBiMap

**Package:** `net.minecraft.util`
**Type:** class<K> implements IdMap<K>

## Methods

### CrudeIncrementalIntIdentityHashBiMap

```java
private CrudeIncrementalIntIdentityHashBiMap(int p_13553_)
```

**Parameters:**

- `p_13553_` (`int`)

**Returns:** `private`

### CrudeIncrementalIntIdentityHashBiMap

```java
private CrudeIncrementalIntIdentityHashBiMap(K[] p_199841_, int[] p_199842_, K[] p_199843_, int p_199844_, int p_199845_)
```

**Parameters:**

- `p_199841_` (`K[]`)
- `p_199842_` (`int[]`)
- `p_199843_` (`K[]`)
- `p_199844_` (`int`)
- `p_199845_` (`int`)

**Returns:** `private`

### create

```java
<A> public static <A> CrudeIncrementalIntIdentityHashBiMap<A> create(int p_184238_)
```

**Parameters:**

- `p_184238_` (`int`)

**Returns:** `public static <A> CrudeIncrementalIntIdentityHashBiMap<A>`

### getId

```java
public int getId(K p_13558_)
```

**Parameters:**

- `p_13558_` (`K`)

**Returns:** `int`

### byId

```java
public K byId(int p_13556_)
```

**Parameters:**

- `p_13556_` (`int`)

**Returns:** `K`

### getValue

```java
private int getValue(int p_13568_)
```

**Parameters:**

- `p_13568_` (`int`)

**Returns:** `private int`

### contains

```java
public boolean contains(K p_144610_)
```

**Parameters:**

- `p_144610_` (`K`)

**Returns:** `public boolean`

### contains

```java
public boolean contains(int p_144608_)
```

**Parameters:**

- `p_144608_` (`int`)

**Returns:** `public boolean`

### add

```java
public int add(K p_13570_)
```

**Parameters:**

- `p_13570_` (`K`)

**Returns:** `public int`

### nextId

```java
private int nextId()
```

**Returns:** `private int`

### grow

```java
private void grow(int p_13572_)
```

**Parameters:**

- `p_13572_` (`int`)

**Returns:** `private void`

### addMapping

```java
public void addMapping(K p_13560_, int p_13561_)
```

**Parameters:**

- `p_13560_` (`K`)
- `p_13561_` (`int`)

**Returns:** `public void`

### hash

```java
private int hash(K p_13574_)
```

**Parameters:**

- `p_13574_` (`K`)

**Returns:** `private int`

### indexOf

```java
private int indexOf(K p_13564_, int p_13565_)
```

**Parameters:**

- `p_13564_` (`K`)
- `p_13565_` (`int`)

**Returns:** `private int`

### findEmpty

```java
private int findEmpty(int p_13576_)
```

**Parameters:**

- `p_13576_` (`int`)

**Returns:** `private int`

### RuntimeException

```java
throw new RuntimeException("Overflowed :(")
```

**Parameters:**

- `:("` (`"Overflowed`)

**Returns:** `throw new`

### iterator

```java
public Iterator<K> iterator()
```

**Returns:** `Iterator<K>`

### clear

```java
public void clear()
```

**Returns:** `public void`

### size

```java
public int size()
```

**Returns:** `int`

### copy

```java
public CrudeIncrementalIntIdentityHashBiMap<K> copy()
```

**Returns:** `public CrudeIncrementalIntIdentityHashBiMap<K>`
