# TextFilterClient

**Package:** `net.minecraft.server.network`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖧 Server

## Methods

### TextFilterClient

```java
private TextFilterClient(URL p_215275_, TextFilterClient.MessageEncoder p_215276_, URL p_215277_, TextFilterClient.JoinOrLeaveEncoder p_215278_, URL p_215279_, TextFilterClient.JoinOrLeaveEncoder p_215280_, String p_215281_, TextFilterClient.IgnoreStrategy p_215282_, int p_215283_)
```

**Parameters:**

- `p_215275_` (`URL`)
- `p_215276_` (`TextFilterClient.MessageEncoder`)
- `p_215277_` (`URL`)
- `p_215278_` (`TextFilterClient.JoinOrLeaveEncoder`)
- `p_215279_` (`URL`)
- `p_215280_` (`TextFilterClient.JoinOrLeaveEncoder`)
- `p_215281_` (`String`)
- `p_215282_` (`TextFilterClient.IgnoreStrategy`)
- `p_215283_` (`int`)

**Returns:** `private`

### getEndpoint

```java
private static URL getEndpoint(URI p_212246_, JsonObject p_212247_, String p_212248_, String p_212249_)
```

**Parameters:**

- `p_212246_` (`URI`)
- `p_212247_` (`JsonObject`)
- `p_212248_` (`String`)
- `p_212249_` (`String`)

**Returns:** `private static URL`

### getEndpointFromConfig

```java
private static String getEndpointFromConfig(JsonObject p_215295_, String p_215296_, String p_215297_)
```

**Parameters:**

- `p_215295_` (`JsonObject`)
- `p_215296_` (`String`)
- `p_215297_` (`String`)

**Returns:** `private static String`

### createFromConfig

```java
public static TextFilterClient createFromConfig(String p_143737_)
```

**Parameters:**

- `p_143737_` (`String`)

**Returns:** `TextFilterClient`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Missing API key")
```

**Parameters:**

- `key"` (`"Missing API`)

**Returns:** `throw new`

### TextFilterClient

```java
return new TextFilterClient()
```

**Returns:** `return new`

### processJoinOrLeave

```java
void processJoinOrLeave(GameProfile p_215303_, URL p_215304_, TextFilterClient.JoinOrLeaveEncoder p_215305_, Executor p_215306_)
```

**Parameters:**

- `p_215303_` (`GameProfile`)
- `p_215304_` (`URL`)
- `p_215305_` (`TextFilterClient.JoinOrLeaveEncoder`)
- `p_215306_` (`Executor`)

### requestMessageProcessing

```java
CompletableFuture<FilteredText> requestMessageProcessing(GameProfile p_10137_, String p_10138_, TextFilterClient.IgnoreStrategy p_10139_, Executor p_10140_)
```

**Parameters:**

- `p_10137_` (`GameProfile`)
- `p_10138_` (`String`)
- `p_10139_` (`TextFilterClient.IgnoreStrategy`)
- `p_10140_` (`Executor`)

**Returns:** `CompletableFuture<FilteredText>`

### FilteredText

```java
return new FilteredText()
```

**Returns:** `return new`

### parseMask

```java
private FilterMask parseMask(String p_243283_, JsonArray p_243222_, TextFilterClient.IgnoreStrategy p_243237_)
```

**Parameters:**

- `p_243283_` (`String`)
- `p_243222_` (`JsonArray`)
- `p_243237_` (`TextFilterClient.IgnoreStrategy`)

**Returns:** `private FilterMask`

### close

```java
public void close()
```

### drainStream

```java
private void drainStream(InputStream p_10146_)
```

**Parameters:**

- `p_10146_` (`InputStream`)

**Returns:** `private void`

### processRequestResponse

```java
private JsonObject processRequestResponse(JsonObject p_10128_, URL p_10129_)
```

**Parameters:**

- `p_10128_` (`JsonObject`)
- `p_10129_` (`URL`)

**Returns:** `private JsonObject`

### JsonObject

```java
return new JsonObject()
```

**Returns:** `return new`

### processRequest

```java
private void processRequest(JsonObject p_10152_, URL p_10153_)
```

**Parameters:**

- `p_10152_` (`JsonObject`)
- `p_10153_` (`URL`)

**Returns:** `private void`

### makeRequest

```java
private HttpURLConnection makeRequest(JsonObject p_10157_, URL p_10158_)
```

**Parameters:**

- `p_10157_` (`JsonObject`)
- `p_10158_` (`URL`)

**Returns:** `private HttpURLConnection`

### createContext

```java
public TextFilter createContext(GameProfile p_10135_)
```

**Parameters:**

- `p_10135_` (`GameProfile`)

**Returns:** `public TextFilter`

### ignoreOverThreshold

```java
static TextFilterClient.IgnoreStrategy ignoreOverThreshold(int p_143739_)
```

**Parameters:**

- `p_143739_` (`int`)

**Returns:** `static TextFilterClient.IgnoreStrategy`

### select

```java
static TextFilterClient.IgnoreStrategy select(int p_143745_)
```

**Parameters:**

- `p_143745_` (`int`)

**Returns:** `static TextFilterClient.IgnoreStrategy`

### ignoreOverThreshold

```java
> ignoreOverThreshold()
```

**Returns:** `>`

### shouldIgnore

```java
boolean shouldIgnore(String p_10172_, int p_10173_)
```

**Parameters:**

- `p_10172_` (`String`)
- `p_10173_` (`int`)

**Returns:** `boolean`

### encode

```java
JsonObject encode(GameProfile p_215318_)
```

**Parameters:**

- `p_215318_` (`GameProfile`)

**Returns:** `JsonObject`

### encode

```java
JsonObject encode(GameProfile p_215320_, String p_215321_)
```

**Parameters:**

- `p_215320_` (`GameProfile`)
- `p_215321_` (`String`)

**Returns:** `JsonObject`

### PlayerContext

```java
 PlayerContext(GameProfile p_10179_)
```

**Parameters:**

- `p_10179_` (`GameProfile`)

**Returns:** ``

### join

```java
public void join()
```

### leave

```java
public void leave()
```

### processMessageBundle

```java
public CompletableFuture<List<FilteredText>> processMessageBundle(List<String> p_10190_)
```

**Parameters:**

- `p_10190_` (`List<String>`)

**Returns:** `CompletableFuture<List<FilteredText>>`

### processStreamMessage

```java
public CompletableFuture<FilteredText> processStreamMessage(String p_10186_)
```

**Parameters:**

- `p_10186_` (`String`)

**Returns:** `CompletableFuture<FilteredText>`

### RequestFailedException

```java
 RequestFailedException(String p_10199_)
```

**Parameters:**

- `p_10199_` (`String`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `IgnoreStrategy` | interface |  |
| `RequestFailedException` | class |  |
