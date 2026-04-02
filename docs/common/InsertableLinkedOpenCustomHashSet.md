# InsertableLinkedOpenCustomHashSet

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class<T> extends ObjectLinkedOpenCustomHashSet<T>

## Description

Special linked hash set that allow changing the order of its entries and is strict to throw if attempting to add an entry that already exists.
Requires a strategy for the hashing behavior. Use `BasicStrategy#BASIC` or `IdentityStrategy#IDENTITY` if no special hashing needed.

## Methods

### super

```java
 super()
```

**Returns:** ``

### InsertableLinkedOpenCustomHashSet

```java
public public InsertableLinkedOpenCustomHashSet(Hash.Strategy<? super T> strategy)
```

**Parameters:**

- `strategy` (`Hash.Strategy<? super T>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### addAfter

```java
public boolean addAfter(T insertAfter, T element)
```

**Parameters:**

- `insertAfter` (`T`)
- `element` (`T`)

**Returns:** `boolean`

### add

```java
return add()
```

**Returns:** `return`

### addBefore

```java
public boolean addBefore(T insertBefore, T element)
```

**Parameters:**

- `insertBefore` (`T`)
- `element` (`T`)

**Returns:** `boolean`

### addAndMoveToFirst

```java
return addAndMoveToFirst()
```

**Returns:** `return`

### add

```java
return add()
```

**Returns:** `return`

### addFirst

```java
public void addFirst(T element)
```

**Parameters:**

- `element` (`T`)

### addAndMoveToFirst

```java
 addAndMoveToFirst()
```

**Returns:** ``

### addLast

```java
public void addLast(T element)
```

**Parameters:**

- `element` (`T`)

### addAndMoveToLast

```java
 addAndMoveToLast()
```

**Returns:** ``
