# InteractionResultHolder

**Package:** `net.minecraft.world`
**Type:** class<T>

## Methods

### InteractionResultHolder

```java
public InteractionResultHolder(InteractionResult p_19087_, T p_19088_)
```

**Parameters:**

- `p_19087_` (`InteractionResult`)
- `p_19088_` (`T`)

**Returns:** `public`

### getResult

```java
public InteractionResult getResult()
```

**Returns:** `public InteractionResult`

### getObject

```java
public T getObject()
```

**Returns:** `public T`

### success

```java
<T> public static <T> InteractionResultHolder<T> success(T p_19091_)
```

**Parameters:**

- `p_19091_` (`T`)

**Returns:** `public static <T> InteractionResultHolder<T>`

### consume

```java
<T> public static <T> InteractionResultHolder<T> consume(T p_19097_)
```

**Parameters:**

- `p_19097_` (`T`)

**Returns:** `public static <T> InteractionResultHolder<T>`

### pass

```java
<T> public static <T> InteractionResultHolder<T> pass(T p_19099_)
```

**Parameters:**

- `p_19099_` (`T`)

**Returns:** `public static <T> InteractionResultHolder<T>`

### fail

```java
<T> public static <T> InteractionResultHolder<T> fail(T p_19101_)
```

**Parameters:**

- `p_19101_` (`T`)

**Returns:** `public static <T> InteractionResultHolder<T>`

### sidedSuccess

```java
<T> public static <T> InteractionResultHolder<T> sidedSuccess(T p_19093_, boolean p_19094_)
```

**Parameters:**

- `p_19093_` (`T`)
- `p_19094_` (`boolean`)

**Returns:** `public static <T> InteractionResultHolder<T>`
