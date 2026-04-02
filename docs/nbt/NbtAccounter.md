# NbtAccounter

**Package:** `net.minecraft.nbt`
**Type:** class

## Methods

### NbtAccounter

```java
public NbtAccounter(long p_128922_, int p_302350_)
```

**Parameters:**

- `p_128922_` (`long`)
- `p_302350_` (`int`)

**Returns:** `public`

### create

```java
public static NbtAccounter create(long p_302395_)
```

**Parameters:**

- `p_302395_` (`long`)

**Returns:** `public static NbtAccounter`

### NbtAccounter

```java
return new NbtAccounter()
```

**Returns:** `return new`

### unlimitedHeap

```java
public static NbtAccounter unlimitedHeap()
```

**Returns:** `public static NbtAccounter`

### NbtAccounter

```java
return new NbtAccounter()
```

**Returns:** `return new`

### accountBytes

```java
public void accountBytes(long p_302490_, long p_302493_)
```

**Parameters:**

- `p_302490_` (`long`)
- `p_302493_` (`long`)

**Returns:** `public void`

### accountBytes

```java
public void accountBytes(long p_263515_)
```

**Parameters:**

- `p_263515_` (`long`)

**Returns:** `public void`

### NbtAccounterException

```java
throw new NbtAccounterException("Tried to read NBT tag that was too big; tried to allocate: " + this.usage + " + " + p_263515_ + " bytes where max allowed: " + this.quota)
```

**Parameters:**

- `this.quota` (`"Tried to read NBT tag that was too big; tried to allocate: " + this.usage + " + " + p_263515_ + " bytes where max allowed: " +`)

**Returns:** `throw new`

### pushDepth

```java
public void pushDepth()
```

**Returns:** `public void`

### NbtAccounterException

```java
throw new NbtAccounterException("Tried to read NBT tag with too high complexity, depth > " + this.maxDepth)
```

**Parameters:**

- `complexity` (`"Tried to read NBT tag with too high`)
- `this.maxDepth` (`depth > " +`)

**Returns:** `throw new`

### popDepth

```java
public void popDepth()
```

**Returns:** `public void`

### NbtAccounterException

```java
throw new NbtAccounterException("NBT-Accounter tried to pop stack-depth at top-level")
```

**Parameters:**

- `top-level"` (`"NBT-Accounter tried to pop stack-depth at`)

**Returns:** `throw new`

### readUTF

```java
public String readUTF(String data)
```

**Parameters:**

- `data` (`String`)

**Returns:** `public String`

### accountBytes

```java
 accountBytes()
```

**Returns:** ``

### accountBytes

```java
 accountBytes()
```

**Returns:** ``

### getUsage

```java
public long getUsage()
```

**Returns:** `long`

### getDepth

```java
public int getDepth()
```

**Returns:** `int`
