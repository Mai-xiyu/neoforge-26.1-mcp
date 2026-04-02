# TextureManager

**Package:** `net.minecraft.client.renderer.texture`
**Type:** class
**Implements:** `PreparableReloadListener`, `Tickable`, `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INTENTIONAL_MISSING_TEXTURE` | `ResourceLocation` |  |

## Methods

### TextureManager

```java
public TextureManager(ResourceManager p_118474_)
```

**Parameters:**

- `p_118474_` (`ResourceManager`)

**Returns:** `public`

### bindForSetup

```java
public void bindForSetup(ResourceLocation p_174785_)
```

**Parameters:**

- `p_174785_` (`ResourceLocation`)

**Returns:** `public void`

### _bind

```java
private void _bind(ResourceLocation p_118520_)
```

**Parameters:**

- `p_118520_` (`ResourceLocation`)

**Returns:** `private void`

### register

```java
public void register(ResourceLocation p_118496_, AbstractTexture p_118497_)
```

**Parameters:**

- `p_118496_` (`ResourceLocation`)
- `p_118497_` (`AbstractTexture`)

**Returns:** `public void`

### safeClose

```java
private void safeClose(ResourceLocation p_118509_, AbstractTexture p_118510_)
```

**Parameters:**

- `p_118509_` (`ResourceLocation`)
- `p_118510_` (`AbstractTexture`)

**Returns:** `private void`

### loadTexture

```java
private AbstractTexture loadTexture(ResourceLocation p_118516_, AbstractTexture p_118517_)
```

**Parameters:**

- `p_118516_` (`ResourceLocation`)
- `p_118517_` (`AbstractTexture`)

**Returns:** `private AbstractTexture`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### getTexture

```java
public AbstractTexture getTexture(ResourceLocation p_118507_)
```

**Parameters:**

- `p_118507_` (`ResourceLocation`)

**Returns:** `public AbstractTexture`

### getTexture

```java
public AbstractTexture getTexture(ResourceLocation p_174787_, AbstractTexture p_174788_)
```

**Parameters:**

- `p_174787_` (`ResourceLocation`)
- `p_174788_` (`AbstractTexture`)

**Returns:** `public AbstractTexture`

### register

```java
public ResourceLocation register(String p_118491_, DynamicTexture p_118492_)
```

**Parameters:**

- `p_118491_` (`String`)
- `p_118492_` (`DynamicTexture`)

**Returns:** `public ResourceLocation`

### preload

```java
public CompletableFuture<Void> preload(ResourceLocation p_118502_, Executor p_118503_)
```

**Parameters:**

- `p_118502_` (`ResourceLocation`)
- `p_118503_` (`Executor`)

**Returns:** `public CompletableFuture<Void>`

### execute

```java
private static void execute(Runnable p_118489_)
```

**Parameters:**

- `p_118489_` (`Runnable`)

**Returns:** `private static void`

### tick

```java
public void tick()
```

### release

```java
public void release(ResourceLocation p_118514_)
```

**Parameters:**

- `p_118514_` (`ResourceLocation`)

**Returns:** `public void`

### close

```java
public void close()
```

### reload

```java
public CompletableFuture<Void> reload(PreparableReloadListener.PreparationBarrier p_118476_, ResourceManager p_118477_, ProfilerFiller p_118478_, ProfilerFiller p_118479_, Executor p_118480_, Executor p_118481_)
```

**Parameters:**

- `p_118476_` (`PreparableReloadListener.PreparationBarrier`)
- `p_118477_` (`ResourceManager`)
- `p_118478_` (`ProfilerFiller`)
- `p_118479_` (`ProfilerFiller`)
- `p_118480_` (`Executor`)
- `p_118481_` (`Executor`)

**Returns:** `CompletableFuture<Void>`

### dumpAllSheets

```java
public void dumpAllSheets(Path p_276129_)
```

**Parameters:**

- `p_276129_` (`Path`)

**Returns:** `public void`

### _dumpAllSheets

```java
private void _dumpAllSheets(Path p_276128_)
```

**Parameters:**

- `p_276128_` (`Path`)

**Returns:** `private void`
