# FileUpload

**Package:** `com.mojang.realmsclient.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### FileUpload

```java
public FileUpload(File p_87071_, long p_87072_, int p_87073_, UploadInfo p_87074_, User p_87075_, String p_87076_, String p_325917_, UploadStatus p_87077_)
```

**Parameters:**

- `p_87071_` (`File`)
- `p_87072_` (`long`)
- `p_87073_` (`int`)
- `p_87074_` (`UploadInfo`)
- `p_87075_` (`User`)
- `p_87076_` (`String`)
- `p_325917_` (`String`)
- `p_87077_` (`UploadStatus`)

**Returns:** `public`

### upload

```java
public void upload(Consumer<UploadResult> p_87085_)
```

**Parameters:**

- `p_87085_` (`Consumer<UploadResult>`)

**Returns:** `public void`

### cancel

```java
public void cancel()
```

**Returns:** `public void`

### requestUpload

```java
private UploadResult requestUpload(int p_87080_)
```

**Parameters:**

- `p_87080_` (`int`)

**Returns:** `private UploadResult`

### cleanup

```java
private void cleanup(HttpPost p_87094_, CloseableHttpClient p_87095_)
```

**Parameters:**

- `p_87094_` (`HttpPost`)
- `p_87095_` (`CloseableHttpClient`)

**Returns:** `private void`

### setupRequest

```java
private void setupRequest(HttpPost p_87092_)
```

**Parameters:**

- `p_87092_` (`HttpPost`)

**Returns:** `private void`

### handleResponse

```java
private void handleResponse(HttpResponse p_87089_, UploadResult.Builder p_87090_)
```

**Parameters:**

- `p_87089_` (`HttpResponse`)
- `p_87090_` (`UploadResult.Builder`)

**Returns:** `private void`

### shouldRetry

```java
private boolean shouldRetry(long p_87082_, int p_87083_)
```

**Parameters:**

- `p_87082_` (`long`)
- `p_87083_` (`int`)

**Returns:** `private boolean`

### retryUploadAfter

```java
private UploadResult retryUploadAfter(long p_87098_, int p_87099_)
```

**Parameters:**

- `p_87098_` (`long`)
- `p_87099_` (`int`)

**Returns:** `private UploadResult`

### getRetryDelaySeconds

```java
private long getRetryDelaySeconds(HttpResponse p_87087_)
```

**Parameters:**

- `p_87087_` (`HttpResponse`)

**Returns:** `private long`

### isFinished

```java
public boolean isFinished()
```

**Returns:** `public boolean`

### CustomInputStreamEntity

```java
public CustomInputStreamEntity(InputStream p_87105_, long p_87106_, UploadStatus p_87107_)
```

**Parameters:**

- `p_87105_` (`InputStream`)
- `p_87106_` (`long`)
- `p_87107_` (`UploadStatus`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### writeTo

```java
public void writeTo(OutputStream p_87109_)
```

**Parameters:**

- `p_87109_` (`OutputStream`)
