# ServerPackManager

**Package:** `net.minecraft.client.resources.server`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ServerPackManager

```java
public ServerPackManager(PackDownloader p_314651_, PackLoadFeedback p_314441_, PackReloadConfig p_314471_, Runnable p_314453_, ServerPackManager.PackPromptStatus p_314476_)
```

**Parameters:**

- `p_314651_` (`PackDownloader`)
- `p_314441_` (`PackLoadFeedback`)
- `p_314471_` (`PackReloadConfig`)
- `p_314453_` (`Runnable`)
- `p_314476_` (`ServerPackManager.PackPromptStatus`)

**Returns:** `public`

### registerForUpdate

```java
void registerForUpdate()
```

### markExistingPacksAsRemoved

```java
private void markExistingPacksAsRemoved(UUID p_314529_)
```

**Parameters:**

- `p_314529_` (`UUID`)

**Returns:** `private void`

### pushPack

```java
public void pushPack(UUID p_314641_, URL p_314493_, HashCode p_314571_)
```

**Parameters:**

- `p_314641_` (`UUID`)
- `p_314493_` (`URL`)
- `p_314571_` (`HashCode`)

**Returns:** `public void`

### pushLocalPack

```java
public void pushLocalPack(UUID p_314448_, Path p_314520_)
```

**Parameters:**

- `p_314448_` (`UUID`)
- `p_314520_` (`Path`)

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Can't convert path to URL " + p_314520_)
```

**Parameters:**

- `p_314520_` (`"Can't convert path to URL " +`)

**Returns:** `throw new`

### pushNewPack

```java
private void pushNewPack(UUID p_314541_, ServerPackManager.ServerPackData p_314473_)
```

**Parameters:**

- `p_314541_` (`UUID`)
- `p_314473_` (`ServerPackManager.ServerPackData`)

**Returns:** `private void`

### acceptPack

```java
private void acceptPack(ServerPackManager.ServerPackData p_314599_)
```

**Parameters:**

- `p_314599_` (`ServerPackManager.ServerPackData`)

**Returns:** `private void`

### popPack

```java
public void popPack(UUID p_314547_)
```

**Parameters:**

- `p_314547_` (`UUID`)

**Returns:** `public void`

### popAll

```java
public void popAll()
```

**Returns:** `public void`

### allowServerPacks

```java
public void allowServerPacks()
```

**Returns:** `public void`

### rejectServerPacks

```java
public void rejectServerPacks()
```

**Returns:** `public void`

### resetPromptStatus

```java
public void resetPromptStatus()
```

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### cleanupRemovedPacks

```java
private void cleanupRemovedPacks()
```

**Returns:** `private void`

### onDownload

```java
private void onDownload(Collection<ServerPackManager.ServerPackData> p_314562_, DownloadQueue.BatchResult p_314549_)
```

**Parameters:**

- `p_314562_` (`Collection<ServerPackManager.ServerPackData>`)
- `p_314549_` (`DownloadQueue.BatchResult`)

**Returns:** `private void`

### updateDownloads

```java
private boolean updateDownloads()
```

**Returns:** `private boolean`

### triggerReloadIfNeeded

```java
private void triggerReloadIfNeeded()
```

**Returns:** `private void`

### onSuccess

```java
public void onSuccess()
```

### onFailure

```java
public void onFailure(boolean p_314558_)
```

**Parameters:**

- `p_314558_` (`boolean`)

### packsToLoad

```java
public List<PackReloadConfig.IdAndPath> packsToLoad()
```

**Returns:** `List<PackReloadConfig.IdAndPath>`

### SERVER_REPLACED

```java
, SERVER_REPLACED()
```

**Returns:** `,`

### RemovalReason

```java
private RemovalReason(PackLoadFeedback.FinalResult p_314987_)
```

**Parameters:**

- `p_314987_` (`PackLoadFeedback.FinalResult`)

**Returns:** `private`

### ServerPackData

```java
 ServerPackData(UUID p_314450_, URL p_314542_, HashCode p_314445_)
```

**Parameters:**

- `p_314450_` (`UUID`)
- `p_314542_` (`URL`)
- `p_314445_` (`HashCode`)

**Returns:** ``

### setRemovalReasonIfNotSet

```java
public void setRemovalReasonIfNotSet(ServerPackManager.RemovalReason p_314504_)
```

**Parameters:**

- `p_314504_` (`ServerPackManager.RemovalReason`)

**Returns:** `public void`

### isRemoved

```java
public boolean isRemoved()
```

**Returns:** `public boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `PackPromptStatus` | enum |  |
