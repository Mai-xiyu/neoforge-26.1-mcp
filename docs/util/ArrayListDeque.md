# ArrayListDeque

**Package:** `net.minecraft.util`
**Type:** class<T> extends AbstractList<T> implements ListAndDeque<T>

## Methods

### ArrayListDeque

```java
public ArrayListDeque()
```

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ArrayListDeque

```java
public ArrayListDeque(int p_294771_)
```

**Parameters:**

- `p_294771_` (`int`)

**Returns:** `public`

### size

```java
public int size()
```

**Returns:** `int`

### capacity

```java
public int capacity()
```

**Returns:** `int`

### getIndex

```java
private int getIndex(int p_296293_)
```

**Parameters:**

- `p_296293_` (`int`)

**Returns:** `private int`

### get

```java
public T get(int p_296055_)
```

**Parameters:**

- `p_296055_` (`int`)

**Returns:** `T`

### verifyIndexInRange

```java
private static void verifyIndexInRange(int p_295367_, int p_294503_)
```

**Parameters:**

- `p_295367_` (`int`)
- `p_294503_` (`int`)

**Returns:** `private static void`

### IndexOutOfBoundsException

```java
throw new IndexOutOfBoundsException()
```

**Returns:** `throw new`

### verifyIndexInRange

```java
private void verifyIndexInRange(int p_296349_)
```

**Parameters:**

- `p_296349_` (`int`)

**Returns:** `private void`

### verifyIndexInRange

```java
 verifyIndexInRange()
```

**Returns:** ``

### getInner

```java
private T getInner(int p_295426_)
```

**Parameters:**

- `p_295426_` (`int`)

**Returns:** `private T`

### set

```java
public T set(int p_294350_, T p_296216_)
```

**Parameters:**

- `p_294350_` (`int`)
- `p_296216_` (`T`)

**Returns:** `T`

### add

```java
public void add(int p_294490_, T p_294693_)
```

**Parameters:**

- `p_294490_` (`int`)
- `p_294693_` (`T`)

### verifyIndexInRange

```java
 verifyIndexInRange(this.size + 1)
```

**Parameters:**

- `1` (`this.size +`)

**Returns:** ``

### grow

```java
private void grow()
```

**Returns:** `private void`

### remove

```java
public T remove(int p_295380_)
```

**Parameters:**

- `p_295380_` (`int`)

**Returns:** `T`

### removeIf

```java
public boolean removeIf(Predicate<? super T> p_296232_)
```

**Parameters:**

- `p_296232_` (`Predicate<? super T>`)

**Returns:** `boolean`

### copyCount

```java
private void copyCount(Object[] p_294388_, int p_294959_)
```

**Parameters:**

- `p_294388_` (`Object[]`)
- `p_294959_` (`int`)

**Returns:** `private void`

### replaceAll

```java
public void replaceAll(UnaryOperator<T> p_295123_)
```

**Parameters:**

- `p_295123_` (`UnaryOperator<T>`)

### forEach

```java
public void forEach(Consumer<? super T> p_296263_)
```

**Parameters:**

- `p_296263_` (`Consumer<? super T>`)

### addFirst

```java
public void addFirst(T p_296384_)
```

**Parameters:**

- `p_296384_` (`T`)

### addLast

```java
public void addLast(T p_295130_)
```

**Parameters:**

- `p_295130_` (`T`)

### offerFirst

```java
public boolean offerFirst(T p_295887_)
```

**Parameters:**

- `p_295887_` (`T`)

**Returns:** `boolean`

### offerLast

```java
public boolean offerLast(T p_296237_)
```

**Parameters:**

- `p_296237_` (`T`)

**Returns:** `boolean`

### removeFirst

```java
public T removeFirst()
```

**Returns:** `T`

### NoSuchElementException

```java
throw new NoSuchElementException()
```

**Returns:** `throw new`

### removeLast

```java
public T removeLast()
```

**Returns:** `T`

### NoSuchElementException

```java
throw new NoSuchElementException()
```

**Returns:** `throw new`

### reversed

```java
public ListAndDeque<T> reversed()
```

**Returns:** `ListAndDeque<T>`

### pollFirst

```java
public T pollFirst()
```

**Returns:** `T`

### pollLast

```java
public T pollLast()
```

**Returns:** `T`

### getFirst

```java
public T getFirst()
```

**Returns:** `T`

### NoSuchElementException

```java
throw new NoSuchElementException()
```

**Returns:** `throw new`

### getLast

```java
public T getLast()
```

**Returns:** `T`

### NoSuchElementException

```java
throw new NoSuchElementException()
```

**Returns:** `throw new`

### peekFirst

```java
public T peekFirst()
```

**Returns:** `T`

### peekLast

```java
public T peekLast()
```

**Returns:** `T`

### removeFirstOccurrence

```java
public boolean removeFirstOccurrence(Object p_294109_)
```

**Parameters:**

- `p_294109_` (`Object`)

**Returns:** `boolean`

### removeLastOccurrence

```java
public boolean removeLastOccurrence(Object p_295642_)
```

**Parameters:**

- `p_295642_` (`Object`)

**Returns:** `boolean`

### descendingIterator

```java
public Iterator<T> descendingIterator()
```

**Returns:** `Iterator<T>`

### DescendingIterator

```java
public DescendingIterator()
```

**Returns:** `public`

### hasNext

```java
public boolean hasNext()
```

**Returns:** `boolean`

### next

```java
public T next()
```

**Returns:** `T`

### remove

```java
public void remove()
```

### ReversedView

```java
public ReversedView(ArrayListDeque<T> p_339677_)
```

**Parameters:**

- `p_339677_` (`ArrayListDeque<T>`)

**Returns:** `public`

### reversed

```java
public ListAndDeque<T> reversed()
```

**Returns:** `ListAndDeque<T>`

### getFirst

```java
public T getFirst()
```

**Returns:** `T`

### getLast

```java
public T getLast()
```

**Returns:** `T`

### addFirst

```java
public void addFirst(T p_339593_)
```

**Parameters:**

- `p_339593_` (`T`)

### addLast

```java
public void addLast(T p_339649_)
```

**Parameters:**

- `p_339649_` (`T`)

### offerFirst

```java
public boolean offerFirst(T p_339654_)
```

**Parameters:**

- `p_339654_` (`T`)

**Returns:** `boolean`

### offerLast

```java
public boolean offerLast(T p_339690_)
```

**Parameters:**

- `p_339690_` (`T`)

**Returns:** `boolean`

### pollFirst

```java
public T pollFirst()
```

**Returns:** `T`

### pollLast

```java
public T pollLast()
```

**Returns:** `T`

### peekFirst

```java
public T peekFirst()
```

**Returns:** `T`

### peekLast

```java
public T peekLast()
```

**Returns:** `T`

### removeFirst

```java
public T removeFirst()
```

**Returns:** `T`

### removeLast

```java
public T removeLast()
```

**Returns:** `T`

### removeFirstOccurrence

```java
public boolean removeFirstOccurrence(Object p_339684_)
```

**Parameters:**

- `p_339684_` (`Object`)

**Returns:** `boolean`

### removeLastOccurrence

```java
public boolean removeLastOccurrence(Object p_339678_)
```

**Parameters:**

- `p_339678_` (`Object`)

**Returns:** `boolean`

### descendingIterator

```java
public Iterator<T> descendingIterator()
```

**Returns:** `Iterator<T>`

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
public boolean contains(Object p_339624_)
```

**Parameters:**

- `p_339624_` (`Object`)

**Returns:** `boolean`

### get

```java
public T get(int p_339634_)
```

**Parameters:**

- `p_339634_` (`int`)

**Returns:** `T`

### set

```java
public T set(int p_339669_, T p_339609_)
```

**Parameters:**

- `p_339669_` (`int`)
- `p_339609_` (`T`)

**Returns:** `T`

### add

```java
public void add(int p_339646_, T p_339625_)
```

**Parameters:**

- `p_339646_` (`int`)
- `p_339625_` (`T`)

### remove

```java
public T remove(int p_339650_)
```

**Parameters:**

- `p_339650_` (`int`)

**Returns:** `T`

### indexOf

```java
public int indexOf(Object p_339682_)
```

**Parameters:**

- `p_339682_` (`Object`)

**Returns:** `int`

### lastIndexOf

```java
public int lastIndexOf(Object p_339602_)
```

**Parameters:**

- `p_339602_` (`Object`)

**Returns:** `int`

### subList

```java
public List<T> subList(int p_339640_, int p_339642_)
```

**Parameters:**

- `p_339640_` (`int`)
- `p_339642_` (`int`)

**Returns:** `List<T>`

### iterator

```java
public Iterator<T> iterator()
```

**Returns:** `Iterator<T>`

### clear

```java
public void clear()
```

### reverseIndex

```java
private int reverseIndex(int p_339612_)
```

**Parameters:**

- `p_339612_` (`int`)

**Returns:** `private int`
