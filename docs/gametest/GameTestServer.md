# GameTestServer

**Package:** `net.minecraft.gametest.framework`
**Type:** class
**Extends:** `MinecraftServer`

## Methods

### create

```java
public static GameTestServer create(Thread p_206607_, LevelStorageSource.LevelStorageAccess p_206608_, PackRepository p_206609_, Collection<TestFunction> p_206610_, BlockPos p_206611_)
```

**Parameters:**

- `p_206607_` (`Thread`)
- `p_206608_` (`LevelStorageSource.LevelStorageAccess`)
- `p_206609_` (`PackRepository`)
- `p_206610_` (`Collection<TestFunction>`)
- `p_206611_` (`BlockPos`)

**Returns:** `public static GameTestServer`

### IllegalArgumentException

```java
throw new IllegalArgumentException("No test functions were given!")
```

**Parameters:**

- `given!"` (`"No test functions were`)

**Returns:** `throw new`

### GameTestServer

```java
return new GameTestServer()
```

**Returns:** `return new`

### IllegalStateException

```java
throw new IllegalStateException()
```

**Returns:** `throw new`

### GameTestServer

```java
private GameTestServer(Thread p_206597_, LevelStorageSource.LevelStorageAccess p_206598_, PackRepository p_206599_, WorldStem p_206600_, Collection<TestFunction> p_206601_, BlockPos p_206602_)
```

**Parameters:**

- `p_206597_` (`Thread`)
- `p_206598_` (`LevelStorageSource.LevelStorageAccess`)
- `p_206599_` (`PackRepository`)
- `p_206600_` (`WorldStem`)
- `p_206601_` (`Collection<TestFunction>`)
- `p_206602_` (`BlockPos`)

**Returns:** `private`

### initServer

```java
public boolean initServer()
```

**Returns:** `boolean`

### tickServer

```java
public void tickServer(BooleanSupplier p_177619_)
```

**Parameters:**

- `p_177619_` (`BooleanSupplier`)

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

### waitUntilNextTick

```java
public void waitUntilNextTick()
```

### fillServerSystemReport

```java
public SystemReport fillServerSystemReport(SystemReport p_177613_)
```

**Parameters:**

- `p_177613_` (`SystemReport`)

**Returns:** `SystemReport`

### onServerExit

```java
public void onServerExit()
```

### onServerCrash

```java
public void onServerCrash(CrashReport p_177623_)
```

**Parameters:**

- `p_177623_` (`CrashReport`)

### startTests

```java
private void startTests(ServerLevel p_177625_)
```

**Parameters:**

- `p_177625_` (`ServerLevel`)

**Returns:** `private void`

### haveTestsStarted

```java
private boolean haveTestsStarted()
```

**Returns:** `private boolean`

### isHardcore

```java
public boolean isHardcore()
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

### shouldRconBroadcast

```java
public boolean shouldRconBroadcast()
```

**Returns:** `boolean`

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

### isCommandBlockEnabled

```java
public boolean isCommandBlockEnabled()
```

**Returns:** `boolean`

### isPublished

```java
public boolean isPublished()
```

**Returns:** `boolean`

### shouldInformAdmins

```java
public boolean shouldInformAdmins()
```

**Returns:** `boolean`

### isSingleplayerOwner

```java
public boolean isSingleplayerOwner(GameProfile p_177617_)
```

**Parameters:**

- `p_177617_` (`GameProfile`)

**Returns:** `boolean`
