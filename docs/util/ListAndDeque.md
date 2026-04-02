# ListAndDeque

**Package:** `net.minecraft.util`
**Type:** interface<T>
**Extends:** `Serializable, Cloneable, Deque<T>, List<T>, RandomAccess`

## Methods

### reversed

```java
ListAndDeque<T> reversed()
```

**Returns:** `ListAndDeque<T>`

### getFirst

```java
T getFirst()
```

**Returns:** `T`

### getLast

```java
T getLast()
```

**Returns:** `T`

### addFirst

```java
void addFirst(T p_339667_)
```

**Parameters:**

- `p_339667_` (`T`)

### addLast

```java
void addLast(T p_339629_)
```

**Parameters:**

- `p_339629_` (`T`)

### removeFirst

```java
T removeFirst()
```

**Returns:** `T`

### removeLast

```java
T removeLast()
```

**Returns:** `T`

### offer

```java
default boolean offer(T p_339589_)
```

**Parameters:**

- `p_339589_` (`T`)

**Returns:** `boolean`

### remove

```java
default T remove()
```

**Returns:** `T`

### poll

```java
default T poll()
```

**Returns:** `T`

### element

```java
default T element()
```

**Returns:** `T`

### peek

```java
default T peek()
```

**Returns:** `T`

### push

```java
default void push(T p_339595_)
```

**Parameters:**

- `p_339595_` (`T`)

### pop

```java
default T pop()
```

**Returns:** `T`
