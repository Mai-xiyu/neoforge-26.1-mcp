# WorldOpenFlows

**Package:** `net.minecraft.client.gui.screens.worldselection`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### WorldOpenFlows

```java
public WorldOpenFlows(Minecraft p_233093_, LevelStorageSource p_233094_)
```

**Parameters:**

- `p_233093_` (`Minecraft`)
- `p_233094_` (`LevelStorageSource`)

**Returns:** `public`

### createFreshLevel

```java
public void createFreshLevel(String p_233158_, LevelSettings p_233159_, WorldOptions p_249243_, Function<RegistryAccess, WorldDimensions> p_249252_, Screen p_307305_)
```

**Parameters:**

- `p_233158_` (`String`)
- `p_233159_` (`LevelSettings`)
- `p_249243_` (`WorldOptions`)
- `p_249252_` (`Function<RegistryAccess, WorldDimensions>`)
- `p_307305_` (`Screen`)

**Returns:** `public void`

### createLevelFromExistingSettings

```java
public void createLevelFromExistingSettings(LevelStorageSource.LevelStorageAccess p_250919_, ReloadableServerResources p_248897_, LayeredRegistryAccess<RegistryLayer> p_250801_, WorldData p_251654_)
```

**Parameters:**

- `p_250919_` (`LevelStorageSource.LevelStorageAccess`)
- `p_248897_` (`ReloadableServerResources`)
- `p_250801_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_251654_` (`WorldData`)

**Returns:** `public void`

### loadWorldStem

```java
public WorldStem loadWorldStem(Dynamic<?> p_307491_, boolean p_233124_, PackRepository p_233125_)
```

**Parameters:**

- `p_307491_` (`Dynamic<?>`)
- `p_233124_` (`boolean`)
- `p_233125_` (`PackRepository`)

**Returns:** `public WorldStem`

### recreateWorldData

```java
public Pair<LevelSettings, WorldCreationContext> recreateWorldData(LevelStorageSource.LevelStorageAccess p_249540_)
```

**Parameters:**

- `p_249540_` (`LevelStorageSource.LevelStorageAccess`)

**Returns:** `public Pair<LevelSettings, WorldCreationContext>`

### Data

```java
record Data(LevelSettings levelSettings, WorldOptions options, Registry<LevelStem> existingDimensions)
```

**Parameters:**

- `levelSettings` (`LevelSettings`)
- `options` (`WorldOptions`)
- `existingDimensions` (`Registry<LevelStem>`)

**Returns:** `record`

### loadWorldDataBlocking

```java
<D, R> private <D, R> R loadWorldDataBlocking(WorldLoader.PackConfig p_250997_, WorldLoader.WorldDataSupplier<D> p_251759_, WorldLoader.ResultFactory<D, R> p_249635_)
```

**Parameters:**

- `p_250997_` (`WorldLoader.PackConfig`)
- `p_251759_` (`WorldLoader.WorldDataSupplier<D>`)
- `p_249635_` (`WorldLoader.ResultFactory<D, R>`)

**Returns:** `private <D, R> R`

### askForBackup

```java
private void askForBackup(LevelStorageSource.LevelStorageAccess p_307627_, boolean p_233143_, Runnable p_233144_, Runnable p_307323_)
```

**Parameters:**

- `p_307627_` (`LevelStorageSource.LevelStorageAccess`)
- `p_233143_` (`boolean`)
- `p_233144_` (`Runnable`)
- `p_307323_` (`Runnable`)

**Returns:** `private void`

### confirmWorldCreation

```java
public static void confirmWorldCreation(Minecraft p_270593_, CreateWorldScreen p_270733_, Lifecycle p_270539_, Runnable p_270158_, boolean p_270709_)
```

**Parameters:**

- `p_270593_` (`Minecraft`)
- `p_270733_` (`CreateWorldScreen`)
- `p_270539_` (`Lifecycle`)
- `p_270158_` (`Runnable`)
- `p_270709_` (`boolean`)

**Returns:** `public static void`

### openWorld

```java
public void openWorld(String p_330611_, Runnable p_331729_)
```

**Parameters:**

- `p_330611_` (`String`)
- `p_331729_` (`Runnable`)

**Returns:** `public void`

### openWorldLoadLevelData

```java
private void openWorldLoadLevelData(LevelStorageSource.LevelStorageAccess p_330608_, Runnable p_331368_)
```

**Parameters:**

- `p_330608_` (`LevelStorageSource.LevelStorageAccess`)
- `p_331368_` (`Runnable`)

**Returns:** `private void`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### openWorldCheckVersionCompatibility

```java
private void openWorldCheckVersionCompatibility(LevelStorageSource.LevelStorageAccess p_331650_, LevelSummary p_331090_, Dynamic<?> p_331358_, Runnable p_331242_)
```

**Parameters:**

- `p_331650_` (`LevelStorageSource.LevelStorageAccess`)
- `p_331090_` (`LevelSummary`)
- `p_331358_` (`Dynamic<?>`)
- `p_331242_` (`Runnable`)

**Returns:** `private void`

### openWorldLoadLevelStem

```java
private void openWorldLoadLevelStem(LevelStorageSource.LevelStorageAccess p_331886_, Dynamic<?> p_332037_, boolean p_330245_, Runnable p_330289_)
```

**Parameters:**

- `p_331886_` (`LevelStorageSource.LevelStorageAccess`)
- `p_332037_` (`Dynamic<?>`)
- `p_330245_` (`boolean`)
- `p_330289_` (`Runnable`)

**Returns:** `private void`

### openWorldCheckWorldStemCompatibility

```java
private void openWorldCheckWorldStemCompatibility(LevelStorageSource.LevelStorageAccess p_331469_, WorldStem p_330774_, PackRepository p_330989_, Runnable p_332128_)
```

**Parameters:**

- `p_331469_` (`LevelStorageSource.LevelStorageAccess`)
- `p_330774_` (`WorldStem`)
- `p_330989_` (`PackRepository`)
- `p_332128_` (`Runnable`)

**Returns:** `private void`

### openWorldLoadBundledResourcePack

```java
private void openWorldLoadBundledResourcePack(LevelStorageSource.LevelStorageAccess p_331323_, WorldStem p_330675_, PackRepository p_332043_, Runnable p_330403_)
```

**Parameters:**

- `p_331323_` (`LevelStorageSource.LevelStorageAccess`)
- `p_330675_` (`WorldStem`)
- `p_332043_` (`PackRepository`)
- `p_330403_` (`Runnable`)

**Returns:** `private void`

### openWorldCheckDiskSpace

```java
private void openWorldCheckDiskSpace(LevelStorageSource.LevelStorageAccess p_330894_, WorldStem p_331981_, DownloadedPackSource p_331902_, PackRepository p_330360_, Runnable p_330719_)
```

**Parameters:**

- `p_330894_` (`LevelStorageSource.LevelStorageAccess`)
- `p_331981_` (`WorldStem`)
- `p_331902_` (`DownloadedPackSource`)
- `p_330360_` (`PackRepository`)
- `p_330719_` (`Runnable`)

**Returns:** `private void`

### openWorldDoLoad

```java
private void openWorldDoLoad(LevelStorageSource.LevelStorageAccess p_330420_, WorldStem p_331123_, PackRepository p_331620_)
```

**Parameters:**

- `p_330420_` (`LevelStorageSource.LevelStorageAccess`)
- `p_331123_` (`WorldStem`)
- `p_331620_` (`PackRepository`)

**Returns:** `private void`

### loadBundledResourcePack

```java
private CompletableFuture<Void> loadBundledResourcePack(DownloadedPackSource p_314527_, LevelStorageSource.LevelStorageAccess p_314569_)
```

**Parameters:**

- `p_314527_` (`DownloadedPackSource`)
- `p_314569_` (`LevelStorageSource.LevelStorageAccess`)

**Returns:** `private CompletableFuture<Void>`

### promptBundledPackLoadFailure

```java
private CompletableFuture<Boolean> promptBundledPackLoadFailure()
```

**Returns:** `private CompletableFuture<Boolean>`
