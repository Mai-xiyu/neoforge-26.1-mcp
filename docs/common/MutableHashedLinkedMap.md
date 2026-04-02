# MutableHashedLinkedMap

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class<K, V> implements Iterable<Map.Entry<K, V>>

## Description

A mutable linked map with a hashing strategy and a merge function.
@param <K> the type of keys
@param <V> the type of mapped values

## Methods

### MutableHashedLinkedMap

```java
public public MutableHashedLinkedMap()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### MutableHashedLinkedMap

```java
public public MutableHashedLinkedMap(Strategy<? super K> strategy)
```

**Parameters:**

- `strategy` (`Strategy<? super K>`)

**Returns:** `public`

### MutableHashedLinkedMap

```java
public public MutableHashedLinkedMap(Strategy<? super K> strategy, MergeFunction<K, V> merge)
```

**Parameters:**

- `strategy` (`Strategy<? super K>`)
- `merge` (`MergeFunction<K, V>`)

**Returns:** `public`

### MutableHashedLinkedMap

```java
public public MutableHashedLinkedMap(Strategy<? super K> strategy, BiPredicate<K, V> insertTest)
```

**Parameters:**

- `strategy` (`Strategy<? super K>`)
- `insertTest` (`BiPredicate<K, V>`)

**Returns:** `public`

### MutableHashedLinkedMap

```java
public public MutableHashedLinkedMap(Strategy<? super K> strategy, MergeFunction<K, V> merge, BiPredicate<K, V> insertTest)
```

**Parameters:**

- `strategy` (`Strategy<? super K>`)
- `merge` (`MergeFunction<K, V>`)
- `insertTest` (`BiPredicate<K, V>`)

**Returns:** `public`

### put

```java
public V put(K key, V value)
```

**Parameters:**

- `key` (`K`)
- `value` (`V`)

**Returns:** `V`

### contains

```java
public boolean contains(K key)
```

**Parameters:**

- `key` (`K`)

**Returns:** `public boolean`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### remove

```java
public V remove(K key)
```

**Parameters:**

- `key` (`K`)

**Returns:** `V`

### remove

```java
 remove()
```

**Returns:** ``

### get

```java
public V get(K key)
```

**Parameters:**

- `key` (`K`)

**Returns:** `V`

### iterator

```java
public Iterator<Map.Entry<K, V>> iterator()
```

**Returns:** `Iterator<Map.Entry<K, V>>`

### hasNext

```java
public boolean hasNext()
```

**Returns:** `boolean`

### next

```java
public Map.Entry<K, V> next()
```

**Returns:** `Map.Entry<K, V>`

### ConcurrentModificationException

```java
throw new ConcurrentModificationException()
```

**Returns:** `throw new`

### NoSuchElementException

```java
throw new NoSuchElementException()
```

**Returns:** `throw new`

### remove

```java
public void remove()
```

### ConcurrentModificationException

```java
throw new ConcurrentModificationException()
```

**Returns:** `throw new`

### ConcurrentModificationException

```java
throw new ConcurrentModificationException()
```

**Returns:** `throw new`

### putFirst

```java
public V putFirst(K key, V value)
```

**Parameters:**

- `key` (`K`)
- `value` (`V`)

**Returns:** `V`

### put

```java
return put()
```

**Returns:** `return`

### putAfter

```java
public V putAfter(K after, K key, V value)
```

**Parameters:**

- `after` (`K`)
- `key` (`K`)
- `value` (`V`)

**Returns:** `V`

### put

```java
return put()
```

**Returns:** `return`

### remove

```java
 remove()
```

**Returns:** ``

### putBefore

```java
public V putBefore(K before, K key, V value)
```

**Parameters:**

- `before` (`K`)
- `key` (`K`)
- `value` (`V`)

**Returns:** `V`

### put

```java
return put()
```

**Returns:** `return`

### remove

```java
 remove()
```

**Returns:** ``

### remove

```java
private void remove(Entry e)
```

**Parameters:**

- `e` (`Entry`)

**Returns:** `private void`

### apply

```java
Value apply(Key key, Value left, Value right)
```

**Parameters:**

- `key` (`Key`)
- `left` (`Value`)
- `right` (`Value`)

**Returns:** `Value`

### Entry

```java
private Entry(K key, V value)
```

**Parameters:**

- `key` (`K`)
- `value` (`V`)

**Returns:** `private`

### getKey

```java
public K getKey()
```

**Returns:** `K`

### getValue

```java
public V getValue()
```

**Returns:** `V`

### setValue

```java
public V setValue(V value)
```

**Parameters:**

- `value` (`V`)

**Returns:** `V`

### toString

```java
public String toString()
```

**Returns:** `String`

### equals

```java
public boolean equals(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `MergeFunction` | interface |  |
