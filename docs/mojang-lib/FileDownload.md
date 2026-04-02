# FileDownload

**Package:** `com.mojang.realmsclient.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### contentLength

```java
public long contentLength(String p_86990_)
```

**Parameters:**

- `p_86990_` (`String`)

**Returns:** `public long`

### download

```java
public void download(WorldDownload p_86983_, String p_86984_, RealmsDownloadLatestWorldScreen.DownloadStatus p_86985_, LevelStorageSource p_86986_)
```

**Parameters:**

- `p_86983_` (`WorldDownload`)
- `p_86984_` (`String`)
- `p_86985_` (`RealmsDownloadLatestWorldScreen.DownloadStatus`)
- `p_86986_` (`LevelStorageSource`)

**Returns:** `public void`

### cancel

```java
public void cancel()
```

**Returns:** `public void`

### isFinished

```java
public boolean isFinished()
```

**Returns:** `public boolean`

### isError

```java
public boolean isError()
```

**Returns:** `public boolean`

### isExtracting

```java
public boolean isExtracting()
```

**Returns:** `public boolean`

### findAvailableFolderName

```java
public static String findAvailableFolderName(String p_87002_)
```

**Parameters:**

- `p_87002_` (`String`)

**Returns:** `public static String`

### untarGzipArchive

```java
void untarGzipArchive(String p_86992_, File p_86993_, LevelStorageSource p_86994_)
```

**Parameters:**

- `p_86992_` (`String`)
- `p_86993_` (`File`)
- `p_86994_` (`LevelStorageSource`)

### DownloadCountingOutputStream

```java
public DownloadCountingOutputStream(OutputStream p_193509_)
```

**Parameters:**

- `p_193509_` (`OutputStream`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setListener

```java
public void setListener(ActionListener p_87017_)
```

**Parameters:**

- `p_87017_` (`ActionListener`)

**Returns:** `public void`

### afterWrite

```java
protected void afterWrite(int p_87019_)
```

**Parameters:**

- `p_87019_` (`int`)

### ProgressListener

```java
 ProgressListener(String p_87027_, File p_87028_, LevelStorageSource p_87029_, RealmsDownloadLatestWorldScreen.DownloadStatus p_87030_)
```

**Parameters:**

- `p_87027_` (`String`)
- `p_87028_` (`File`)
- `p_87029_` (`LevelStorageSource`)
- `p_87030_` (`RealmsDownloadLatestWorldScreen.DownloadStatus`)

**Returns:** ``

### actionPerformed

```java
public void actionPerformed(ActionEvent p_87039_)
```

**Parameters:**

- `p_87039_` (`ActionEvent`)

### ResourcePackProgressListener

```java
 ResourcePackProgressListener(File p_87046_, RealmsDownloadLatestWorldScreen.DownloadStatus p_87047_, WorldDownload p_87048_)
```

**Parameters:**

- `p_87046_` (`File`)
- `p_87047_` (`RealmsDownloadLatestWorldScreen.DownloadStatus`)
- `p_87048_` (`WorldDownload`)

**Returns:** ``

### actionPerformed

```java
public void actionPerformed(ActionEvent p_87056_)
```

**Parameters:**

- `p_87056_` (`ActionEvent`)
