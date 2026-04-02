# DedicatedServer

**Package:** `net.minecraft.server.dedicated`
**Type:** class
**Extends:** `MinecraftServer`
**Implements:** `ServerInterface`
**Side:** 🖧 Server

## Methods

### DedicatedServer

```java
public DedicatedServer(Thread p_214789_, LevelStorageSource.LevelStorageAccess p_214790_, PackRepository p_214791_, WorldStem p_214792_, DedicatedServerSettings p_214793_, DataFixer p_214794_, Services p_214795_, ChunkProgressListenerFactory p_214796_)
```

**Parameters:**

- `p_214789_` (`Thread`)
- `p_214790_` (`LevelStorageSource.LevelStorageAccess`)
- `p_214791_` (`PackRepository`)
- `p_214792_` (`WorldStem`)
- `p_214793_` (`DedicatedServerSettings`)
- `p_214794_` (`DataFixer`)
- `p_214795_` (`Services`)
- `p_214796_` (`ChunkProgressListenerFactory`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### initServer

```java
public boolean initServer()
```

**Returns:** `boolean`

### run

```java
public void run()
```

### isSpawningAnimals

```java
public boolean isSpawningAnimals()
```

**Returns:** `boolean`

### isSpawningMonsters

```java
public boolean isSpawningMonsters()
```

**Returns:** `boolean`

### areNpcsEnabled

```java
public boolean areNpcsEnabled()
```

**Returns:** `boolean`

### getProperties

```java
public DedicatedServerProperties getProperties()
```

**Returns:** `DedicatedServerProperties`

### forceDifficulty

```java
public void forceDifficulty()
```

### isHardcore

```java
public boolean isHardcore()
```

**Returns:** `boolean`

### fillServerSystemReport

```java
public SystemReport fillServerSystemReport(SystemReport p_142870_)
```

**Parameters:**

- `p_142870_` (`SystemReport`)

**Returns:** `SystemReport`

### dumpServerProperties

```java
public void dumpServerProperties(Path p_142872_)
```

**Parameters:**

- `p_142872_` (`Path`)

### onServerExit

```java
public void onServerExit()
```

### tickChildren

```java
public void tickChildren(BooleanSupplier p_139661_)
```

**Parameters:**

- `p_139661_` (`BooleanSupplier`)

### isLevelEnabled

```java
public boolean isLevelEnabled(Level p_350654_)
```

**Parameters:**

- `p_350654_` (`Level`)

**Returns:** `boolean`

### handleConsoleInput

```java
public void handleConsoleInput(String p_139646_, CommandSourceStack p_139647_)
```

**Parameters:**

- `p_139646_` (`String`)
- `p_139647_` (`CommandSourceStack`)

**Returns:** `public void`

### handleConsoleInputs

```java
public void handleConsoleInputs()
```

**Returns:** `public void`

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

### getPlayerList

```java
public DedicatedPlayerList getPlayerList()
```

**Returns:** `public DedicatedPlayerList`

### isPublished

```java
public boolean isPublished()
```

**Returns:** `boolean`

### getServerIp

```java
public String getServerIp()
```

**Returns:** `String`

### getServerPort

```java
public int getServerPort()
```

**Returns:** `int`

### getServerName

```java
public String getServerName()
```

**Returns:** `String`

### showGui

```java
public void showGui()
```

**Returns:** `public void`

### hasGui

```java
public boolean hasGui()
```

**Returns:** `boolean`

### isCommandBlockEnabled

```java
public boolean isCommandBlockEnabled()
```

**Returns:** `boolean`

### getSpawnProtectionRadius

```java
public int getSpawnProtectionRadius()
```

**Returns:** `int`

### isUnderSpawnProtection

```java
public boolean isUnderSpawnProtection(ServerLevel p_139630_, BlockPos p_139631_, Player p_139632_)
```

**Parameters:**

- `p_139630_` (`ServerLevel`)
- `p_139631_` (`BlockPos`)
- `p_139632_` (`Player`)

**Returns:** `boolean`

### repliesToStatus

```java
public boolean repliesToStatus()
```

**Returns:** `boolean`

### hidesOnlinePlayers

```java
public boolean hidesOnlinePlayers()
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

### setPlayerIdleTimeout

```java
public void setPlayerIdleTimeout(int p_139676_)
```

**Parameters:**

- `p_139676_` (`int`)

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

### getAbsoluteMaxWorldSize

```java
public int getAbsoluteMaxWorldSize()
```

**Returns:** `int`

### getCompressionThreshold

```java
public int getCompressionThreshold()
```

**Returns:** `int`

### enforceSecureProfile

```java
public boolean enforceSecureProfile()
```

**Returns:** `boolean`

### logIPs

```java
public boolean logIPs()
```

**Returns:** `boolean`

### convertOldUsers

```java
protected boolean convertOldUsers()
```

**Returns:** `protected boolean`

### waitForRetry

```java
private void waitForRetry()
```

**Returns:** `private void`

### getMaxTickLength

```java
public long getMaxTickLength()
```

**Returns:** `public long`

### getMaxChainedNeighborUpdates

```java
public int getMaxChainedNeighborUpdates()
```

**Returns:** `int`

### getPluginNames

```java
public String getPluginNames()
```

**Returns:** `String`

### runCommand

```java
public String runCommand(String p_139644_)
```

**Parameters:**

- `p_139644_` (`String`)

**Returns:** `String`

### storeUsingWhiteList

```java
public void storeUsingWhiteList(boolean p_139689_)
```

**Parameters:**

- `p_139689_` (`boolean`)

**Returns:** `public void`

### stopServer

```java
public void stopServer()
```

### isSingleplayerOwner

```java
public boolean isSingleplayerOwner(GameProfile p_139642_)
```

**Parameters:**

- `p_139642_` (`GameProfile`)

**Returns:** `boolean`

### getScaledTrackingDistance

```java
public int getScaledTrackingDistance(int p_139659_)
```

**Parameters:**

- `p_139659_` (`int`)

**Returns:** `int`

### getLevelIdName

```java
public String getLevelIdName()
```

**Returns:** `String`

### forceSynchronousWrites

```java
public boolean forceSynchronousWrites()
```

**Returns:** `boolean`

### createTextFilterForPlayer

```java
public TextFilter createTextFilterForPlayer(ServerPlayer p_139634_)
```

**Parameters:**

- `p_139634_` (`ServerPlayer`)

**Returns:** `TextFilter`

### getForcedGameType

```java
public GameType getForcedGameType()
```

**Returns:** `GameType`

### getServerResourcePack

```java
public Optional<MinecraftServer.ServerResourcePackInfo> getServerResourcePack()
```

**Returns:** `Optional<MinecraftServer.ServerResourcePackInfo>`

### endMetricsRecordingTick

```java
public void endMetricsRecordingTick()
```

### getTickTimeLogger

```java
public SampleLogger getTickTimeLogger()
```

**Returns:** `SampleLogger`

### isTickTimeLoggingEnabled

```java
public boolean isTickTimeLoggingEnabled()
```

**Returns:** `boolean`

### subscribeToDebugSample

```java
public void subscribeToDebugSample(ServerPlayer p_324272_, RemoteDebugSampleType p_324213_)
```

**Parameters:**

- `p_324272_` (`ServerPlayer`)
- `p_324213_` (`RemoteDebugSampleType`)

### acceptsTransfers

```java
public boolean acceptsTransfers()
```

**Returns:** `boolean`

### serverLinks

```java
public ServerLinks serverLinks()
```

**Returns:** `ServerLinks`

### createServerLinks

```java
private static ServerLinks createServerLinks(DedicatedServerSettings p_352317_)
```

**Parameters:**

- `p_352317_` (`DedicatedServerSettings`)

**Returns:** `private static ServerLinks`

### parseBugReportLink

```java
private static Optional<URI> parseBugReportLink(DedicatedServerProperties p_352150_)
```

**Parameters:**

- `p_352150_` (`DedicatedServerProperties`)

**Returns:** `private static Optional<URI>`
