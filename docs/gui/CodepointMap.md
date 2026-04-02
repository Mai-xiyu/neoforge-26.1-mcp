# CodepointMap

**Package:** `net.minecraft.client.gui.font`
**Type:** class<T>
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### CodepointMap

```java
public CodepointMap(IntFunction<T[]> p_285284_, IntFunction<T[][]> p_285275_)
```

**Parameters:**

- `p_285284_` (`IntFunction<T[]>`)
- `p_285275_` (`IntFunction<T[][]>`)

**Returns:** `public`

### clear

```java
public void clear()
```

**Returns:** `public void`

### get

```java
public T get(int p_285131_)
```

**Parameters:**

- `p_285131_` (`int`)

**Returns:** `T`

### put

```java
public T put(int p_285321_, T p_285073_)
```

**Parameters:**

- `p_285321_` (`int`)
- `p_285073_` (`T`)

**Returns:** `T`

### computeIfAbsent

```java
public T computeIfAbsent(int p_285365_, IntFunction<T> p_285147_)
```

**Parameters:**

- `p_285365_` (`int`)
- `p_285147_` (`IntFunction<T>`)

**Returns:** `public T`

### remove

```java
public T remove(int p_285488_)
```

**Parameters:**

- `p_285488_` (`int`)

**Returns:** `T`

### forEach

```java
public void forEach(CodepointMap.Output<T> p_285048_)
```

**Parameters:**

- `p_285048_` (`CodepointMap.Output<T>`)

**Returns:** `public void`

### keySet

```java
public IntSet keySet()
```

**Returns:** `public IntSet`

### accept

```java
void accept(int p_285163_, T p_285313_)
```

**Parameters:**

- `p_285163_` (`int`)
- `p_285313_` (`T`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Output` | interface |  |
