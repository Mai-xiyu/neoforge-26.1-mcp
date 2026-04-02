# Crypt

**Package:** `net.minecraft.util`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SIGNING_ALGORITHM` | `String` |  |
| `SIGNATURE_BYTES` | `int` |  |
| `RSA_PUBLIC_KEY_HEADER` | `String` |  |
| `MIME_LINE_SEPARATOR` | `String` |  |
| `MIME_ENCODER` | `Encoder` |  |
| `PUBLIC_KEY_CODEC` | `Codec<PublicKey>` |  |
| `PRIVATE_KEY_CODEC` | `Codec<PrivateKey>` |  |

## Methods

### generateSecretKey

```java
public static SecretKey generateSecretKey()
```

**Returns:** `public static SecretKey`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`

### generateKeyPair

```java
public static KeyPair generateKeyPair()
```

**Returns:** `public static KeyPair`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`

### digestData

```java
public static byte[] digestData(String p_13591_, PublicKey p_13592_, SecretKey p_13593_)
```

**Parameters:**

- `p_13591_` (`String`)
- `p_13592_` (`PublicKey`)
- `p_13593_` (`SecretKey`)

**Returns:** `public static byte[]`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`

### digestData

```java
private static byte[] digestData(byte[][]... p_13603_)
```

**Parameters:**

- `p_13603_` (`byte[][]...`)

**Returns:** `private static byte[]`

### rsaStringToKey

```java
<T extends Key> private static <T extends Key> T rsaStringToKey(String p_216072_, String p_216073_, String p_216074_, Crypt.ByteArrayToKeyFunction<T> p_216075_)
```

**Parameters:**

- `p_216072_` (`String`)
- `p_216073_` (`String`)
- `p_216074_` (`String`)
- `p_216075_` (`Crypt.ByteArrayToKeyFunction<T>`)

**Returns:** `private static <T extends Key> T`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`

### stringToPemRsaPrivateKey

```java
public static PrivateKey stringToPemRsaPrivateKey(String p_216070_)
```

**Parameters:**

- `p_216070_` (`String`)

**Returns:** `public static PrivateKey`

### rsaStringToKey

```java
return rsaStringToKey("-----BEGIN RSA PRIVATE KEY-----", "-----END RSA PRIVATE KEY-----")
```

**Parameters:**

- `KEY-----"` (`"-----BEGIN RSA PRIVATE`)
- `KEY-----"` (`"-----END RSA PRIVATE`)

**Returns:** `return`

### stringToRsaPublicKey

```java
public static PublicKey stringToRsaPublicKey(String p_216081_)
```

**Parameters:**

- `p_216081_` (`String`)

**Returns:** `public static PublicKey`

### rsaStringToKey

```java
return rsaStringToKey("-----BEGIN RSA PUBLIC KEY-----", "-----END RSA PUBLIC KEY-----")
```

**Parameters:**

- `KEY-----"` (`"-----BEGIN RSA PUBLIC`)
- `KEY-----"` (`"-----END RSA PUBLIC`)

**Returns:** `return`

### rsaPublicKeyToString

```java
public static String rsaPublicKeyToString(PublicKey p_216079_)
```

**Parameters:**

- `p_216079_` (`PublicKey`)

**Returns:** `public static String`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Public key must be RSA")
```

**Parameters:**

- `RSA"` (`"Public key must be`)

**Returns:** `throw new`

### pemRsaPrivateKeyToString

```java
public static String pemRsaPrivateKeyToString(PrivateKey p_216077_)
```

**Parameters:**

- `p_216077_` (`PrivateKey`)

**Returns:** `public static String`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Private key must be RSA")
```

**Parameters:**

- `RSA"` (`"Private key must be`)

**Returns:** `throw new`

### byteToPrivateKey

```java
private static PrivateKey byteToPrivateKey(byte[] p_216083_)
```

**Parameters:**

- `p_216083_` (`byte[]`)

**Returns:** `private static PrivateKey`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`

### byteToPublicKey

```java
public static PublicKey byteToPublicKey(byte[] p_13601_)
```

**Parameters:**

- `p_13601_` (`byte[]`)

**Returns:** `public static PublicKey`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`

### decryptByteToSecretKey

```java
public static SecretKey decryptByteToSecretKey(PrivateKey p_13598_, byte[] p_13599_)
```

**Parameters:**

- `p_13598_` (`PrivateKey`)
- `p_13599_` (`byte[]`)

**Returns:** `public static SecretKey`

### SecretKeySpec

```java
return new SecretKeySpec()
```

**Returns:** `return new`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`

### encryptUsingKey

```java
public static byte[] encryptUsingKey(Key p_13595_, byte[] p_13596_)
```

**Parameters:**

- `p_13595_` (`Key`)
- `p_13596_` (`byte[]`)

**Returns:** `public static byte[]`

### cipherData

```java
return cipherData()
```

**Returns:** `return`

### decryptUsingKey

```java
public static byte[] decryptUsingKey(Key p_13606_, byte[] p_13607_)
```

**Parameters:**

- `p_13606_` (`Key`)
- `p_13607_` (`byte[]`)

**Returns:** `public static byte[]`

### cipherData

```java
return cipherData()
```

**Returns:** `return`

### cipherData

```java
private static byte[] cipherData(int p_13587_, Key p_13588_, byte[] p_13589_)
```

**Parameters:**

- `p_13587_` (`int`)
- `p_13588_` (`Key`)
- `p_13589_` (`byte[]`)

**Returns:** `private static byte[]`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`

### setupCipher

```java
private static Cipher setupCipher(int p_13580_, String p_13581_, Key p_13582_)
```

**Parameters:**

- `p_13580_` (`int`)
- `p_13581_` (`String`)
- `p_13582_` (`Key`)

**Returns:** `private static Cipher`

### getCipher

```java
public static Cipher getCipher(int p_13584_, Key p_13585_)
```

**Parameters:**

- `p_13584_` (`int`)
- `p_13585_` (`Key`)

**Returns:** `public static Cipher`

### CryptException

```java
throw new CryptException()
```

**Returns:** `throw new`

### apply

```java
T apply(byte[] p_216089_)
```

**Parameters:**

- `p_216089_` (`byte[]`)

**Returns:** `T`

### SaltSignaturePair

```java
public static record SaltSignaturePair(long salt, byte[] signature)
```

**Parameters:**

- `salt` (`long`)
- `signature` (`byte[]`)

**Returns:** `public static record`

### SaltSignaturePair

```java
public SaltSignaturePair(FriendlyByteBuf p_216098_)
```

**Parameters:**

- `p_216098_` (`FriendlyByteBuf`)

**Returns:** `public`

### isValid

```java
public boolean isValid()
```

**Returns:** `public boolean`

### write

```java
public static void write(FriendlyByteBuf p_216101_, Crypt.SaltSignaturePair p_216102_)
```

**Parameters:**

- `p_216101_` (`FriendlyByteBuf`)
- `p_216102_` (`Crypt.SaltSignaturePair`)

**Returns:** `public static void`

### saltAsBytes

```java
public byte[] saltAsBytes()
```

**Returns:** `public byte[]`

### getLong

```java
public static long getLong()
```

**Returns:** `public static long`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SaltSignaturePair` | record |  |
| `SaltSupplier` | class |  |
