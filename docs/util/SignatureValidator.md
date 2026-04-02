# SignatureValidator

**Package:** `net.minecraft.util`
**Type:** interface

## Methods

### validate

```java
boolean validate(SignatureUpdater p_216379_, byte[] p_216380_)
```

**Parameters:**

- `p_216379_` (`SignatureUpdater`)
- `p_216380_` (`byte[]`)

**Returns:** `boolean`

### validate

```java
default boolean validate(byte[] p_216376_, byte[] p_216377_)
```

**Parameters:**

- `p_216376_` (`byte[]`)
- `p_216377_` (`byte[]`)

**Returns:** `default boolean`

### verifySignature

```java
private static boolean verifySignature(SignatureUpdater p_216355_, byte[] p_216356_, Signature p_216357_)
```

**Parameters:**

- `p_216355_` (`SignatureUpdater`)
- `p_216356_` (`byte[]`)
- `p_216357_` (`Signature`)

**Returns:** `private static boolean`

### from

```java
static SignatureValidator from(PublicKey p_216370_, String p_216371_)
```

**Parameters:**

- `p_216370_` (`PublicKey`)
- `p_216371_` (`String`)

**Returns:** `static SignatureValidator`

### verifySignature

```java
return verifySignature()
```

**Returns:** `return`

### from

```java
static SignatureValidator from(ServicesKeySet p_285388_, ServicesKeyType p_285383_)
```

**Parameters:**

- `p_285388_` (`ServicesKeySet`)
- `p_285383_` (`ServicesKeyType`)

**Returns:** `SignatureValidator`

### verifySignature

```java
return verifySignature()
```

**Returns:** `return`
