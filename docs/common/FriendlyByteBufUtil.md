# FriendlyByteBufUtil

**Package:** `net.neoforged.neoforge.common.util`
**Type:** class

## Description

Utility class for working with `FriendlyByteBuf`s.

## Methods

### FriendlyByteBufUtil

```java
private FriendlyByteBufUtil()
```

**Returns:** `private`

### IllegalStateException

```java
throw new IllegalStateException("Tried to create utility class!")
```

**Parameters:**

- `class!"` (`"Tried to create utility`)

**Returns:** `throw new`

### writeCustomData

```java
public static byte[] writeCustomData(Consumer<RegistryFriendlyByteBuf> dataWriter, RegistryAccess registryAccess)
```

**Parameters:**

- `dataWriter` (`Consumer<RegistryFriendlyByteBuf>`)
- `registryAccess` (`RegistryAccess`)

**Returns:** `byte[]`
