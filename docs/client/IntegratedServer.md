# IntegratedServer

**Package:** `net.minecraft.client.server`
**Type:** class
**Extends:** `MinecraftServer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### IntegratedServer

```java
public IntegratedServer(Thread p_235248_, Minecraft p_235249_, LevelStorageSource.LevelStorageAccess p_235250_, PackRepository p_235251_, WorldStem p_235252_, Services p_235253_, ChunkProgressListenerFactory p_235254_)
```

**Parameters:**

- `p_235248_` (`Thread`)
- `p_235249_` (`Minecraft`)
- `p_235250_` (`LevelStorageSource.LevelStorageAccess`)
- `p_235251_` (`PackRepository`)
- `p_235252_` (`WorldStem`)
- `p_235253_` (`Services`)
- `p_235254_` (`ChunkProgressListenerFactory`)

**Returns:** `public`

### initServer

```java
public boolean initServer()
```

**Returns:** `boolean`

### isPaused

```java
public boolean isPaused()
```

**Returns:** `boolean`

### tickServer

```java
public void tickServer(BooleanSupplier p_120049_)
```

**Parameters:**

- `p_120049_` (`BooleanSupplier`)

### getTickTimeLogger

```java
protected LocalSampleLogger getTickTimeLogger()
```

**Returns:** `protected LocalSampleLogger`

### isTickTimeLoggingEnabled

```java
public boolean isTickTimeLoggingEnabled()
```

**Returns:** `boolean`

### tickPaused

```java
private void tickPaused()
```

**Returns:** `private void`

### shouldRconBroadcast

```java
public boolean shouldRconBroadcast()
```

**Returns:** `boolean`

### shouldInformAdmins

```java
public boolean shouldInformAdmins()
```

**Returns:** `boolean`

### getServerDirectory

```java
public Path getServerDirectory()
```

**Returns:** `Path`

### isDedicatedServer

```java
public boolean isDedicatedServer()
```

**Returns:** `boolean`

### getRateLimitPacketsPerSecond

```java
public int getRateLimitPacketsPerSecond()
```

**Returns:** `int`

### isEpollEnabled

```java
public boolean isEpollEnabled()
```

**Returns:** `boolean`

### onServerCrash

```java
public void onServerCrash(CrashReport p_120051_)
```

**Parameters:**

- `p_120051_` (`CrashReport`)

### fillServerSystemReport

```java
public SystemReport fillServerSystemReport(SystemReport p_174970_)
```

**Parameters:**

- `p_174970_` (`SystemReport`)

**Returns:** `SystemReport`

### getModdedStatus

```java
public ModCheck getModdedStatus()
```

**Returns:** `ModCheck`

### publishServer

```java
public boolean publishServer(GameType p_120041_, boolean p_120042_, int p_120043_)
```

**Parameters:**

- `p_120041_` (`GameType`)
- `p_120042_` (`boolean`)
- `p_120043_` (`int`)

**Returns:** `boolean`

### stopServer

```java
public void stopServer()
```

### halt

```java
public void halt(boolean p_120053_)
```

**Parameters:**

- `p_120053_` (`boolean`)

### isPublished

```java
public boolean isPublished()
```

**Returns:** `boolean`

### getPort

```java
public int getPort()
```

**Returns:** `int`

### setDefaultGameType

```java
public void setDefaultGameType(GameType p_120039_)
```

**Parameters:**

- `p_120039_` (`GameType`)

### isCommandBlockEnabled

```java
public boolean isCommandBlockEnabled()
```

**Returns:** `boolean`

### getOperatorUserPermissionLevel

```java
public int getOperatorUserPermissionLevel()
```

**Returns:** `int`

### getFunctionCompilationLevel

```java
public int getFunctionCompilationLevel()
```

**Returns:** `int`

### setUUID

```java
public void setUUID(UUID p_120047_)
```

**Parameters:**

- `p_120047_` (`UUID`)

**Returns:** `public void`

### isSingleplayerOwner

```java
public boolean isSingleplayerOwner(GameProfile p_120045_)
```

**Parameters:**

- `p_120045_` (`GameProfile`)

**Returns:** `boolean`

### getScaledTrackingDistance

```java
public int getScaledTrackingDistance(int p_120056_)
```

**Parameters:**

- `p_120056_` (`int`)

**Returns:** `int`

### forceSynchronousWrites

```java
public boolean forceSynchronousWrites()
```

**Returns:** `boolean`

### getForcedGameType

```java
public GameType getForcedGameType()
```

**Returns:** `GameType`

### saveEverything

```java
public boolean saveEverything(boolean p_332035_, boolean p_331844_, boolean p_330847_)
```

**Parameters:**

- `p_332035_` (`boolean`)
- `p_331844_` (`boolean`)
- `p_330847_` (`boolean`)

**Returns:** `boolean`

### warnOnLowDiskSpace

```java
private void warnOnLowDiskSpace()
```

**Returns:** `private void`

### reportChunkLoadFailure

```java
public void reportChunkLoadFailure(Throwable p_352390_, RegionStorageInfo p_352401_, ChunkPos p_330829_)
```

**Parameters:**

- `p_352390_` (`Throwable`)
- `p_352401_` (`RegionStorageInfo`)
- `p_330829_` (`ChunkPos`)

### reportChunkSaveFailure

```java
public void reportChunkSaveFailure(Throwable p_352264_, RegionStorageInfo p_352355_, ChunkPos p_331440_)
```

**Parameters:**

- `p_352264_` (`Throwable`)
- `p_352355_` (`RegionStorageInfo`)
- `p_331440_` (`ChunkPos`)
