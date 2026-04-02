# DebugQueryHandler

**Package:** `net.minecraft.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### DebugQueryHandler

```java
public DebugQueryHandler(ClientPacketListener p_90701_)
```

**Parameters:**

- `p_90701_` (`ClientPacketListener`)

**Returns:** `public`

### handleResponse

```java
public boolean handleResponse(int p_90706_, CompoundTag p_90707_)
```

**Parameters:**

- `p_90706_` (`int`)
- `p_90707_` (`CompoundTag`)

**Returns:** `public boolean`

### startTransaction

```java
private int startTransaction(Consumer<CompoundTag> p_90712_)
```

**Parameters:**

- `p_90712_` (`Consumer<CompoundTag>`)

**Returns:** `private int`

### queryEntityTag

```java
public void queryEntityTag(int p_90703_, Consumer<CompoundTag> p_90704_)
```

**Parameters:**

- `p_90703_` (`int`)
- `p_90704_` (`Consumer<CompoundTag>`)

**Returns:** `public void`

### queryBlockEntityTag

```java
public void queryBlockEntityTag(BlockPos p_90709_, Consumer<CompoundTag> p_90710_)
```

**Parameters:**

- `p_90709_` (`BlockPos`)
- `p_90710_` (`Consumer<CompoundTag>`)

**Returns:** `public void`
