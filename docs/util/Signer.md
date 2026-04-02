# Signer

**Package:** `net.minecraft.util`
**Type:** interface

## Methods

### sign

```java
byte[] sign(SignatureUpdater p_216396_)
```

**Parameters:**

- `p_216396_` (`SignatureUpdater`)

**Returns:** `byte[]`

### sign

```java
default byte[] sign(byte[] p_216391_)
```

**Parameters:**

- `p_216391_` (`byte[]`)

**Returns:** `default byte[]`

### from

```java
static Signer from(PrivateKey p_216388_, String p_216389_)
```

**Parameters:**

- `p_216388_` (`PrivateKey`)
- `p_216389_` (`String`)

**Returns:** `static Signer`

### IllegalStateException

```java
throw new IllegalStateException("Failed to sign message")
```

**Parameters:**

- `message"` (`"Failed to sign`)

**Returns:** `throw new`
