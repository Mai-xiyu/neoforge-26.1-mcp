# DownloadedPackSource

**Package:** `net.minecraft.client.resources.server`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### reportUpdate

```java
public void reportUpdate(UUID p_314931_, PackLoadFeedback.Update p_314970_)
```

**Parameters:**

- `p_314931_` (`UUID`)
- `p_314970_` (`PackLoadFeedback.Update`)

### reportFinalResult

```java
public void reportFinalResult(UUID p_314962_, PackLoadFeedback.FinalResult p_314984_)
```

**Parameters:**

- `p_314962_` (`UUID`)
- `p_314984_` (`PackLoadFeedback.FinalResult`)

### DownloadedPackSource

```java
public DownloadedPackSource(Minecraft p_314574_, Path p_314635_, GameConfig.UserData p_314528_)
```

**Parameters:**

- `p_314574_` (`Minecraft`)
- `p_314635_` (`Path`)
- `p_314528_` (`GameConfig.UserData`)

**Returns:** `public`

### UncheckedIOException

```java
throw new UncheckedIOException("Failed to open download queue in directory " + p_314635_)
```

**Parameters:**

- `p_314635_` (`"Failed to open download queue in directory " +`)

**Returns:** `throw new`

### PackLoadFeedback

```java
, new PackLoadFeedback()
```

**Returns:** `, new`

### reportUpdate

```java
public void reportUpdate(UUID p_314952_, PackLoadFeedback.Update p_314938_)
```

**Parameters:**

- `p_314952_` (`UUID`)
- `p_314938_` (`PackLoadFeedback.Update`)

### reportFinalResult

```java
public void reportFinalResult(UUID p_314975_, PackLoadFeedback.FinalResult p_314925_)
```

**Parameters:**

- `p_314975_` (`UUID`)
- `p_314925_` (`PackLoadFeedback.FinalResult`)

### createDownloadNotifier

```java
HttpUtil.DownloadProgressListener createDownloadNotifier(int p_314632_)
```

**Parameters:**

- `p_314632_` (`int`)

**Returns:** `HttpUtil.DownloadProgressListener`

### updateToast

```java
private void updateToast()
```

**Returns:** `private void`

### updateProgress

```java
private void updateProgress(long p_314935_)
```

**Parameters:**

- `p_314935_` (`long`)

**Returns:** `private void`

### requestStart

```java
public void requestStart()
```

### downloadStart

```java
public void downloadStart(OptionalLong p_314989_)
```

**Parameters:**

- `p_314989_` (`OptionalLong`)

### downloadedBytes

```java
public void downloadedBytes(long p_314926_)
```

**Parameters:**

- `p_314926_` (`long`)

### requestFinished

```java
public void requestFinished(boolean p_314998_)
```

**Parameters:**

- `p_314998_` (`boolean`)

### createDownloader

```java
private PackDownloader createDownloader(DownloadQueue p_314570_, Executor p_314421_, User p_314576_, Proxy p_314551_)
```

**Parameters:**

- `p_314570_` (`DownloadQueue`)
- `p_314421_` (`Executor`)
- `p_314576_` (`User`)
- `p_314551_` (`Proxy`)

**Returns:** `private PackDownloader`

### PackDownloader

```java
return new PackDownloader()
```

**Returns:** `return new`

### createDownloadHeaders

```java
private Map<String, String> createDownloadHeaders()
```

**Returns:** `private Map<String, String>`

### download

```java
public void download(Map<UUID, DownloadQueue.DownloadRequest> p_314939_, Consumer<DownloadQueue.BatchResult> p_314982_)
```

**Parameters:**

- `p_314939_` (`Map<UUID, DownloadQueue.DownloadRequest>`)
- `p_314982_` (`Consumer<DownloadQueue.BatchResult>`)

### createUpdateScheduler

```java
private Runnable createUpdateScheduler(Executor p_314595_)
```

**Parameters:**

- `p_314595_` (`Executor`)

**Returns:** `private Runnable`

### Runnable

```java
return new Runnable()
```

**Returns:** `return new`

### run

```java
public void run()
```

### runAllUpdates

```java
private void runAllUpdates()
```

**Returns:** `private void`

### createReloadConfig

```java
private PackReloadConfig createReloadConfig()
```

**Returns:** `private PackReloadConfig`

### createRepositorySource

```java
public RepositorySource createRepositorySource()
```

**Returns:** `public RepositorySource`

### configureSource

```java
private static RepositorySource configureSource(List<Pack> p_314416_)
```

**Parameters:**

- `p_314416_` (`List<Pack>`)

**Returns:** `private static RepositorySource`

### startReload

```java
private void startReload(PackReloadConfig.Callbacks p_314628_)
```

**Parameters:**

- `p_314628_` (`PackReloadConfig.Callbacks`)

**Returns:** `private void`

### onRecovery

```java
public void onRecovery()
```

**Returns:** `public void`

### onRecoveryFailure

```java
public void onRecoveryFailure()
```

**Returns:** `public void`

### onReloadSuccess

```java
public void onReloadSuccess()
```

**Returns:** `public void`

### pushPack

```java
public void pushPack(UUID p_314526_, URL p_314648_, String p_314530_)
```

**Parameters:**

- `p_314526_` (`UUID`)
- `p_314648_` (`URL`)
- `p_314530_` (`String`)

**Returns:** `public void`

### pushLocalPack

```java
public void pushLocalPack(UUID p_314510_, Path p_314417_)
```

**Parameters:**

- `p_314510_` (`UUID`)
- `p_314417_` (`Path`)

**Returns:** `public void`

### popPack

```java
public void popPack(UUID p_314587_)
```

**Parameters:**

- `p_314587_` (`UUID`)

**Returns:** `public void`

### popAll

```java
public void popAll()
```

**Returns:** `public void`

### createPackResponseSender

```java
private static PackLoadFeedback createPackResponseSender(Connection p_314519_)
```

**Parameters:**

- `p_314519_` (`Connection`)

**Returns:** `private static PackLoadFeedback`

### PackLoadFeedback

```java
return new PackLoadFeedback()
```

**Returns:** `return new`

### reportUpdate

```java
public void reportUpdate(UUID p_314956_, PackLoadFeedback.Update p_314990_)
```

**Parameters:**

- `p_314956_` (`UUID`)
- `p_314990_` (`PackLoadFeedback.Update`)

### reportFinalResult

```java
public void reportFinalResult(UUID p_315010_, PackLoadFeedback.FinalResult p_314963_)
```

**Parameters:**

- `p_315010_` (`UUID`)
- `p_314963_` (`PackLoadFeedback.FinalResult`)

### configureForServerControl

```java
public void configureForServerControl(Connection p_314502_, ServerPackManager.PackPromptStatus p_314463_)
```

**Parameters:**

- `p_314502_` (`Connection`)
- `p_314463_` (`ServerPackManager.PackPromptStatus`)

**Returns:** `public void`

### configureForLocalWorld

```java
public void configureForLocalWorld()
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

### waitForPackFeedback

```java
public CompletableFuture<Void> waitForPackFeedback(UUID p_314539_)
```

**Parameters:**

- `p_314539_` (`UUID`)

**Returns:** `public CompletableFuture<Void>`

### reportUpdate

```java
public void reportUpdate(UUID p_314992_, PackLoadFeedback.Update p_314954_)
```

**Parameters:**

- `p_314992_` (`UUID`)
- `p_314954_` (`PackLoadFeedback.Update`)

### reportFinalResult

```java
public void reportFinalResult(UUID p_314964_, PackLoadFeedback.FinalResult p_314957_)
```

**Parameters:**

- `p_314964_` (`UUID`)
- `p_314957_` (`PackLoadFeedback.FinalResult`)

### cleanupAfterDisconnect

```java
public void cleanupAfterDisconnect()
```

**Returns:** `public void`

### close

```java
public void close()
```
