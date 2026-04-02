# MessageSignatureCache

**Package:** `net.minecraft.network.chat`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NOT_FOUND` | `int` |  |

## Methods

### MessageSignatureCache

```java
public MessageSignatureCache(int p_250894_)
```

**Parameters:**

- `p_250894_` (`int`)

**Returns:** `public`

### createDefault

```java
public static MessageSignatureCache createDefault()
```

**Returns:** `public static MessageSignatureCache`

### MessageSignatureCache

```java
return new MessageSignatureCache()
```

**Returns:** `return new`

### pack

```java
public int pack(MessageSignature p_254157_)
```

**Parameters:**

- `p_254157_` (`MessageSignature`)

**Returns:** `public int`

### unpack

```java
public MessageSignature unpack(int p_253967_)
```

**Parameters:**

- `p_253967_` (`int`)

**Returns:** `MessageSignature`

### push

```java
public void push(SignedMessageBody p_314937_, MessageSignature p_314936_)
```

**Parameters:**

- `p_314937_` (`SignedMessageBody`)
- `p_314936_` (`MessageSignature`)

**Returns:** `public void`

### push

```java
void push(List<MessageSignature> p_248560_)
```

**Parameters:**

- `p_248560_` (`List<MessageSignature>`)

### push

```java
private void push(ArrayDeque<MessageSignature> p_251419_)
```

**Parameters:**

- `p_251419_` (`ArrayDeque<MessageSignature>`)

**Returns:** `private void`
