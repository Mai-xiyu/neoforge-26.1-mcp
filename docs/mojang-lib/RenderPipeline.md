# RenderPipeline

**Package:** `com.mojang.blaze3d.pipeline`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RenderPipeline

```java
public RenderPipeline()
```

**Returns:** `public`

### canBeginRecording

```java
public boolean canBeginRecording()
```

**Returns:** `public boolean`

### beginRecording

```java
public boolean beginRecording()
```

**Returns:** `public boolean`

### RuntimeException

```java
throw new RuntimeException("ALREADY RECORDING !!!")
```

**Parameters:**

- `!!!"` (`"ALREADY RECORDING`)

**Returns:** `throw new`

### recordRenderCall

```java
public void recordRenderCall(RenderCall p_166184_)
```

**Parameters:**

- `p_166184_` (`RenderCall`)

**Returns:** `public void`

### RuntimeException

```java
throw new RuntimeException("NOT RECORDING !!!")
```

**Parameters:**

- `!!!"` (`"NOT RECORDING`)

**Returns:** `throw new`

### endRecording

```java
public void endRecording()
```

**Returns:** `public void`

### RuntimeException

```java
throw new RuntimeException("NOT RECORDING !!!")
```

**Parameters:**

- `!!!"` (`"NOT RECORDING`)

**Returns:** `throw new`

### canBeginProcessing

```java
public boolean canBeginProcessing()
```

**Returns:** `public boolean`

### beginProcessing

```java
public boolean beginProcessing()
```

**Returns:** `public boolean`

### RuntimeException

```java
throw new RuntimeException("ALREADY PROCESSING !!!")
```

**Parameters:**

- `!!!"` (`"ALREADY PROCESSING`)

**Returns:** `throw new`

### processRecordedQueue

```java
public void processRecordedQueue()
```

**Returns:** `public void`

### RuntimeException

```java
throw new RuntimeException("NOT PROCESSING !!!")
```

**Parameters:**

- `!!!"` (`"NOT PROCESSING`)

**Returns:** `throw new`

### endProcessing

```java
public void endProcessing()
```

**Returns:** `public void`

### RuntimeException

```java
throw new RuntimeException("NOT PROCESSING !!!")
```

**Parameters:**

- `!!!"` (`"NOT PROCESSING`)

**Returns:** `throw new`

### startRendering

```java
public ConcurrentLinkedQueue<RenderCall> startRendering()
```

**Returns:** `public ConcurrentLinkedQueue<RenderCall>`

### getRecordingQueue

```java
public ConcurrentLinkedQueue<RenderCall> getRecordingQueue()
```

**Returns:** `public ConcurrentLinkedQueue<RenderCall>`

### getProcessedQueue

```java
public ConcurrentLinkedQueue<RenderCall> getProcessedQueue()
```

**Returns:** `public ConcurrentLinkedQueue<RenderCall>`
