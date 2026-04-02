# VarInt

**Package:** `net.minecraft.network`
**Type:** class

## Methods

### getByteSize

```java
public static int getByteSize(int p_295994_)
```

**Parameters:**

- `p_295994_` (`int`)

**Returns:** `public static int`

### hasContinuationBit

```java
public static boolean hasContinuationBit(byte p_294861_)
```

**Parameters:**

- `p_294861_` (`byte`)

**Returns:** `public static boolean`

### read

```java
public static int read(ByteBuf p_296169_)
```

**Parameters:**

- `p_296169_` (`ByteBuf`)

**Returns:** `public static int`

### RuntimeException

```java
throw new RuntimeException("VarInt too big")
```

**Parameters:**

- `big"` (`"VarInt too`)

**Returns:** `throw new`

### write

```java
public static ByteBuf write(ByteBuf p_295539_, int p_294256_)
```

**Parameters:**

- `p_295539_` (`ByteBuf`)
- `p_294256_` (`int`)

**Returns:** `public static ByteBuf`
