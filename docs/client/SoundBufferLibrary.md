# SoundBufferLibrary

**Package:** `net.minecraft.client.sounds`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SoundBufferLibrary

```java
public SoundBufferLibrary(ResourceProvider p_248900_)
```

**Parameters:**

- `p_248900_` (`ResourceProvider`)

**Returns:** `public`

### getCompleteBuffer

```java
public CompletableFuture<SoundBuffer> getCompleteBuffer(ResourceLocation p_120203_)
```

**Parameters:**

- `p_120203_` (`ResourceLocation`)

**Returns:** `public CompletableFuture<SoundBuffer>`

### try

```java
 try(InputStream inputstream = this.resourceManager.open(p_340614_)
```

**Parameters:**

- `this.resourceManager.open(p_340614_` (`InputStream inputstream =`)

**Returns:** ``

### CompletionException

```java
throw new CompletionException()
```

**Returns:** `throw new`

### getStream

```java
public CompletableFuture<AudioStream> getStream(ResourceLocation p_120205_, boolean p_120206_)
```

**Parameters:**

- `p_120205_` (`ResourceLocation`)
- `p_120206_` (`boolean`)

**Returns:** `public CompletableFuture<AudioStream>`

### CompletionException

```java
throw new CompletionException()
```

**Returns:** `throw new`

### clear

```java
public void clear()
```

**Returns:** `public void`

### preload

```java
public CompletableFuture<?> preload(Collection<Sound> p_120199_)
```

**Parameters:**

- `p_120199_` (`Collection<Sound>`)

**Returns:** `public CompletableFuture<?>`
