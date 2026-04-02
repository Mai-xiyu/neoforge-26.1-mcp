# NonNullList

**Package:** `net.minecraft.core`
**Type:** class<E> extends AbstractList<E>

## Methods

### codecOf

```java
public static <E> com.mojang.serialization.Codec<NonNullList<E>> codecOf(com.mojang.serialization.Codec<E> entryCodec)
```

**Parameters:**

- `entryCodec` (`com.mojang.serialization.Codec<E>`)

**Returns:** `com.mojang.serialization.Codec<NonNullList<E>>`

### copyOf

```java
public static <E> NonNullList<E> copyOf(java.util.Collection<? extends E> entries)
```

**Parameters:**

- `entries` (`java.util.Collection<? extends E>`)

**Returns:** `NonNullList<E>`

### create

```java
<E> public static <E> NonNullList<E> create()
```

**Returns:** `public static <E> NonNullList<E>`

### createWithCapacity

```java
<E> public static <E> NonNullList<E> createWithCapacity(int p_182648_)
```

**Parameters:**

- `p_182648_` (`int`)

**Returns:** `public static <E> NonNullList<E>`

### withSize

```java
<E> public static <E> NonNullList<E> withSize(int p_122781_, E p_122782_)
```

**Parameters:**

- `p_122781_` (`int`)
- `p_122782_` (`E`)

**Returns:** `public static <E> NonNullList<E>`

### of

```java
public static <E> NonNullList<E> of(E p_122784_, E[]... p_122785_)
```

**Parameters:**

- `p_122784_` (`E`)
- `p_122785_` (`E[]...`)

**Returns:** `NonNullList<E>`

### NonNullList

```java
protected NonNullList(List<E> p_122777_, E p_122778_)
```

**Parameters:**

- `p_122777_` (`List<E>`)
- `p_122778_` (`E`)

**Returns:** `protected`

### get

```java
public E get(int p_122791_)
```

**Parameters:**

- `p_122791_` (`int`)

**Returns:** `E`

### set

```java
public E set(int p_122795_, E p_122796_)
```

**Parameters:**

- `p_122795_` (`int`)
- `p_122796_` (`E`)

**Returns:** `E`

### add

```java
public void add(int p_122787_, E p_122788_)
```

**Parameters:**

- `p_122787_` (`int`)
- `p_122788_` (`E`)

### remove

```java
public E remove(int p_122793_)
```

**Parameters:**

- `p_122793_` (`int`)

**Returns:** `E`

### size

```java
public int size()
```

**Returns:** `int`

### clear

```java
public void clear()
```
