# GameProfileCache

**Package:** `net.minecraft.server.players`
**Type:** class
**Side:** 🖧 Server

## Methods

### GameProfileCache

```java
public GameProfileCache(GameProfileRepository p_10974_, File p_10975_)
```

**Parameters:**

- `p_10974_` (`GameProfileRepository`)
- `p_10975_` (`File`)

**Returns:** `public`

### safeAdd

```java
private void safeAdd(GameProfileCache.GameProfileInfo p_10980_)
```

**Parameters:**

- `p_10980_` (`GameProfileCache.GameProfileInfo`)

**Returns:** `private void`

### lookupGameProfile

```java
private static Optional<GameProfile> lookupGameProfile(GameProfileRepository p_10994_, String p_10995_)
```

**Parameters:**

- `p_10994_` (`GameProfileRepository`)
- `p_10995_` (`String`)

**Returns:** `private static Optional<GameProfile>`

### createUnknownProfile

```java
return createUnknownProfile()
```

**Returns:** `return`

### onProfileLookupSucceeded

```java
public void onProfileLookupSucceeded(GameProfile p_11017_)
```

**Parameters:**

- `p_11017_` (`GameProfile`)

### onProfileLookupFailed

```java
public void onProfileLookupFailed(String p_294425_, Exception p_11015_)
```

**Parameters:**

- `p_294425_` (`String`)
- `p_11015_` (`Exception`)

### createUnknownProfile

```java
private static Optional<GameProfile> createUnknownProfile(String p_304714_)
```

**Parameters:**

- `p_304714_` (`String`)

**Returns:** `private static Optional<GameProfile>`

### setUsesAuthentication

```java
public static void setUsesAuthentication(boolean p_11005_)
```

**Parameters:**

- `p_11005_` (`boolean`)

**Returns:** `public static void`

### usesAuthentication

```java
private static boolean usesAuthentication()
```

**Returns:** `private static boolean`

### add

```java
public void add(GameProfile p_10992_)
```

**Parameters:**

- `p_10992_` (`GameProfile`)

**Returns:** `public void`

### getNextOperation

```java
private long getNextOperation()
```

**Returns:** `private long`

### get

```java
public Optional<GameProfile> get(String p_10997_)
```

**Parameters:**

- `p_10997_` (`String`)

**Returns:** `public Optional<GameProfile>`

### getAsync

```java
public CompletableFuture<Optional<GameProfile>> getAsync(String p_143968_)
```

**Parameters:**

- `p_143968_` (`String`)

**Returns:** `public CompletableFuture<Optional<GameProfile>>`

### IllegalStateException

```java
throw new IllegalStateException("No executor")
```

**Parameters:**

- `executor"` (`"No`)

**Returns:** `throw new`

### get

```java
public Optional<GameProfile> get(UUID p_11003_)
```

**Parameters:**

- `p_11003_` (`UUID`)

**Returns:** `public Optional<GameProfile>`

### setExecutor

```java
public void setExecutor(Executor p_143975_)
```

**Parameters:**

- `p_143975_` (`Executor`)

**Returns:** `public void`

### clearExecutor

```java
public void clearExecutor()
```

**Returns:** `public void`

### createDateFormat

```java
private static DateFormat createDateFormat()
```

**Returns:** `private static DateFormat`

### SimpleDateFormat

```java
return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss Z")
```

**Parameters:**

- `Z"` (`"yyyy-MM-dd HH:mm:ss`)

**Returns:** `return new`

### load

```java
public List<GameProfileCache.GameProfileInfo> load()
```

**Returns:** `public List<GameProfileCache.GameProfileInfo>`

### save

```java
public void save()
```

**Returns:** `public void`

### getTopMRUProfiles

```java
private Stream<GameProfileCache.GameProfileInfo> getTopMRUProfiles(int p_10978_)
```

**Parameters:**

- `p_10978_` (`int`)

**Returns:** `private Stream<GameProfileCache.GameProfileInfo>`

### writeGameProfile

```java
private static JsonElement writeGameProfile(GameProfileCache.GameProfileInfo p_10982_, DateFormat p_10983_)
```

**Parameters:**

- `p_10982_` (`GameProfileCache.GameProfileInfo`)
- `p_10983_` (`DateFormat`)

**Returns:** `private static JsonElement`

### readGameProfile

```java
private static Optional<GameProfileCache.GameProfileInfo> readGameProfile(JsonElement p_10989_, DateFormat p_10990_)
```

**Parameters:**

- `p_10989_` (`JsonElement`)
- `p_10990_` (`DateFormat`)

**Returns:** `private static Optional<GameProfileCache.GameProfileInfo>`

### GameProfileInfo

```java
 GameProfileInfo(GameProfile p_11022_, Date p_11023_)
```

**Parameters:**

- `p_11022_` (`GameProfile`)
- `p_11023_` (`Date`)

**Returns:** ``

### getProfile

```java
public GameProfile getProfile()
```

**Returns:** `public GameProfile`

### getExpirationDate

```java
public Date getExpirationDate()
```

**Returns:** `public Date`

### setLastAccess

```java
public void setLastAccess(long p_11030_)
```

**Parameters:**

- `p_11030_` (`long`)

**Returns:** `public void`

### getLastAccess

```java
public long getLastAccess()
```

**Returns:** `public long`
