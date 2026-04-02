# TablePrinter

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class<T>

## Methods

### header

```java
public TablePrinter<T> header(String name, Function<T, String> supplier)
```

**Parameters:**

- `name` (`String`)
- `supplier` (`Function<T, String>`)

**Returns:** `public TablePrinter<T>`

### header

```java
return header()
```

**Returns:** `return`

### header

```java
public TablePrinter<T> header(String name, Function<T, String> supplier, boolean right)
```

**Parameters:**

- `name` (`String`)
- `supplier` (`Function<T, String>`)
- `right` (`boolean`)

**Returns:** `public TablePrinter<T>`

### clearRows

```java
public void clearRows()
```

**Returns:** `public void`

### add

```java
public TablePrinter<T> add(T row)
```

**Parameters:**

- `row` (`T`)

**Returns:** `public TablePrinter<T>`

### add

```java
public TablePrinter<T> add(T row, T[]... more)
```

**Parameters:**

- `row` (`T`)
- `more` (`T[]...`)

**Returns:** `TablePrinter<T>`

### add

```java
 add()
```

**Returns:** ``

### add

```java
 add()
```

**Returns:** ``

### add

```java
public TablePrinter<T> add(Collection<? extends T> rows)
```

**Parameters:**

- `rows` (`Collection<? extends T>`)

**Returns:** `public TablePrinter<T>`

### toString

```java
public String toString()
```

**Returns:** `String`

### build

```java
 build()
```

**Returns:** ``

### build

```java
public void build(StringBuilder buf)
```

**Parameters:**

- `buf` (`StringBuilder`)

**Returns:** `public void`

### line

```java
 line()
```

**Returns:** ``

### pad

```java
 pad()
```

**Returns:** ``

### pad

```java
 pad()
```

**Returns:** ``

### line

```java
 line()
```

**Returns:** ``

### pad

```java
 pad()
```

**Returns:** ``

### pad

```java
 pad()
```

**Returns:** ``

### line

```java
 line()
```

**Returns:** ``

### line

```java
private static void line(StringBuilder buf, int size)
```

**Parameters:**

- `buf` (`StringBuilder`)
- `size` (`int`)

**Returns:** `private static void`

### pad

```java
private static void pad(StringBuilder buf, int size)
```

**Parameters:**

- `buf` (`StringBuilder`)
- `size` (`int`)

**Returns:** `private static void`

### Header

```java
private Header(String name, Function<T, String> supplier, boolean right)
```

**Parameters:**

- `name` (`String`)
- `supplier` (`Function<T, String>`)
- `right` (`boolean`)

**Returns:** `private`
