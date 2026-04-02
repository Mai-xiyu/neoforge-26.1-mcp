# ConcatenatedListView

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class<T> implements List<T>

## Description

A list that concatenates multiple other lists for efficient iteration.
You may use this in place of creating a new list and calling `List#addAll(Collection)`
for each of your collections.
This list does not support modification operations, but the underlying lists may be mutated safely externally.

## Methods

### of

```java
public static <T> ConcatenatedListView<T> of(List<T>[]... lists)
```

**Parameters:**

- `lists` (`List<T>[]...`)

**Returns:** `ConcatenatedListView<T>`

### of

```java
<T> public static <T> List<T> of(List<? extends List<? extends T>> members)
```

**Parameters:**

- `members` (`List<? extends List<? extends T>>`)

**Returns:** `public static <T> List<T>`

### ConcatenatedListView

```java
private ConcatenatedListView(List<? extends List<? extends T>> lists)
```

**Parameters:**

- `lists` (`List<? extends List<? extends T>>`)

**Returns:** `private`

### size

```java
public int size()
```

**Returns:** `int`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### contains

```java
public boolean contains(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `boolean`

### get

```java
public T get(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `T`

### IndexOutOfBoundsException

```java
throw new IndexOutOfBoundsException()
```

**Returns:** `throw new`

### indexOf

```java
public int indexOf(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `int`

### lastIndexOf

```java
public int lastIndexOf(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `int`

### iterator

```java
public Iterator<T> iterator()
```

**Returns:** `Iterator<T>`

### spliterator

```java
public Spliterator<T> spliterator()
```

**Returns:** `Spliterator<T>`

### concatenate

```java
Delegate to a concatenated collection
    private <C extends Collection<T>> C concatenate(Supplier<C> collectionFactory)
```

**Parameters:**

- `collectionFactory` (`Supplier<C>`)

**Returns:** `Delegate to a concatenated collection
    private <C extends Collection<T>> C`

### toArray

```java
public Object[] toArray()
```

**Returns:** `Object[]`

### toArray

```java
public <T1> T1[] toArray(T1[] a)
```

**Parameters:**

- `a` (`T1[]`)

**Returns:** `T1[]`

### containsAll

```java
public boolean containsAll(Collection<?> c)
```

**Parameters:**

- `c` (`Collection<?>`)

**Returns:** `boolean`

### add

```java
public boolean add(T t)
```

**Parameters:**

- `t` (`T`)

**Returns:** `boolean`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### add

```java
public void add(int index, T element)
```

**Parameters:**

- `index` (`int`)
- `element` (`T`)

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### set

```java
public T set(int index, T element)
```

**Parameters:**

- `index` (`int`)
- `element` (`T`)

**Returns:** `T`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### addAll

```java
public boolean addAll(Collection<? extends T> c)
```

**Parameters:**

- `c` (`Collection<? extends T>`)

**Returns:** `boolean`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### addAll

```java
public boolean addAll(int index, Collection<? extends T> c)
```

**Parameters:**

- `index` (`int`)
- `c` (`Collection<? extends T>`)

**Returns:** `boolean`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### remove

```java
public boolean remove(Object o)
```

**Parameters:**

- `o` (`Object`)

**Returns:** `boolean`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### remove

```java
public T remove(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `T`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### removeAll

```java
public boolean removeAll(Collection<?> c)
```

**Parameters:**

- `c` (`Collection<?>`)

**Returns:** `boolean`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### retainAll

```java
public boolean retainAll(Collection<?> c)
```

**Parameters:**

- `c` (`Collection<?>`)

**Returns:** `boolean`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### clear

```java
public void clear()
```

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### listIterator

```java
public ListIterator<T> listIterator()
```

**Returns:** `ListIterator<T>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### listIterator

```java
public ListIterator<T> listIterator(int index)
```

**Parameters:**

- `index` (`int`)

**Returns:** `ListIterator<T>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`

### subList

```java
public List<T> subList(int fromIndex, int toIndex)
```

**Parameters:**

- `fromIndex` (`int`)
- `toIndex` (`int`)

**Returns:** `List<T>`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException()
```

**Returns:** `throw new`
