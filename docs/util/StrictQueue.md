# StrictQueue

**Package:** `net.minecraft.util.thread`
**Type:** interface<T, F>

## Methods

### pop

```java
F pop()
```

**Returns:** `F`

### push

```java
boolean push(T p_18770_)
```

**Parameters:**

- `p_18770_` (`T`)

**Returns:** `boolean`

### isEmpty

```java
boolean isEmpty()
```

**Returns:** `boolean`

### size

```java
int size()
```

**Returns:** `int`

### FixedPriorityQueue

```java
public FixedPriorityQueue(int p_18773_)
```

**Parameters:**

- `p_18773_` (`int`)

**Returns:** `public`

### pop

```java
public Runnable pop()
```

**Returns:** `Runnable`

### push

```java
public boolean push(StrictQueue.IntRunnable p_18778_)
```

**Parameters:**

- `p_18778_` (`StrictQueue.IntRunnable`)

**Returns:** `public boolean`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### size

```java
public int size()
```

**Returns:** `int`

### IntRunnable

```java
public IntRunnable(int p_18786_, Runnable p_18787_)
```

**Parameters:**

- `p_18786_` (`int`)
- `p_18787_` (`Runnable`)

**Returns:** `public`

### run

```java
public void run()
```

### getPriority

```java
public int getPriority()
```

**Returns:** `public int`

### QueueStrictQueue

```java
public QueueStrictQueue(Queue<T> p_18792_)
```

**Parameters:**

- `p_18792_` (`Queue<T>`)

**Returns:** `public`

### pop

```java
public T pop()
```

**Returns:** `T`

### push

```java
public boolean push(T p_18795_)
```

**Parameters:**

- `p_18795_` (`T`)

**Returns:** `boolean`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### size

```java
public int size()
```

**Returns:** `int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FixedPriorityQueue` | class |  |
| `IntRunnable` | class |  |
| `QueueStrictQueue` | class |  |
