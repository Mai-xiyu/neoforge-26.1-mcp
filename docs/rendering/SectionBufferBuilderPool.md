# SectionBufferBuilderPool

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SectionBufferBuilderPool

```java
private SectionBufferBuilderPool(List<SectionBufferBuilderPack> p_307506_)
```

**Parameters:**

- `p_307506_` (`List<SectionBufferBuilderPack>`)

**Returns:** `private`

### allocate

```java
public static SectionBufferBuilderPool allocate(int p_307250_)
```

**Parameters:**

- `p_307250_` (`int`)

**Returns:** `public static SectionBufferBuilderPool`

### SectionBufferBuilderPool

```java
return new SectionBufferBuilderPool()
```

**Returns:** `return new`

### acquire

```java
public SectionBufferBuilderPack acquire()
```

**Returns:** `SectionBufferBuilderPack`

### release

```java
public void release(SectionBufferBuilderPack p_307626_)
```

**Parameters:**

- `p_307626_` (`SectionBufferBuilderPack`)

**Returns:** `public void`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### getFreeBufferCount

```java
public int getFreeBufferCount()
```

**Returns:** `public int`
