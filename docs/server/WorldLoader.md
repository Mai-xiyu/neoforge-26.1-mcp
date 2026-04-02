# WorldLoader

**Package:** `net.minecraft.server`
**Type:** class
**Side:** 🖧 Server

## Methods

### load

```java
<D, R> public static <D, R> CompletableFuture<R> load(WorldLoader.InitConfig p_214363_, WorldLoader.WorldDataSupplier<D> p_214364_, WorldLoader.ResultFactory<D, R> p_214365_, Executor p_214366_, Executor p_214367_)
```

**Parameters:**

- `p_214363_` (`WorldLoader.InitConfig`)
- `p_214364_` (`WorldLoader.WorldDataSupplier<D>`)
- `p_214365_` (`WorldLoader.ResultFactory<D, R>`)
- `p_214366_` (`Executor`)
- `p_214367_` (`Executor`)

**Returns:** `public static <D, R> CompletableFuture<R>`

### loadLayer

```java
private static RegistryAccess.Frozen loadLayer(ResourceManager p_251529_, LayeredRegistryAccess<RegistryLayer> p_250737_, RegistryLayer p_250790_, List<RegistryDataLoader.RegistryData<?>> p_249516_)
```

**Parameters:**

- `p_251529_` (`ResourceManager`)
- `p_250737_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_250790_` (`RegistryLayer`)
- `p_249516_` (`List<RegistryDataLoader.RegistryData<?>>`)

**Returns:** `private static RegistryAccess.Frozen`

### loadAndReplaceLayer

```java
private static LayeredRegistryAccess<RegistryLayer> loadAndReplaceLayer(ResourceManager p_249913_, LayeredRegistryAccess<RegistryLayer> p_252077_, RegistryLayer p_250346_, List<RegistryDataLoader.RegistryData<?>> p_250589_)
```

**Parameters:**

- `p_249913_` (`ResourceManager`)
- `p_252077_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_250346_` (`RegistryLayer`)
- `p_250589_` (`List<RegistryDataLoader.RegistryData<?>>`)

**Returns:** `private static LayeredRegistryAccess<RegistryLayer>`

### DataLoadContext

```java
public static record DataLoadContext(ResourceManager resources, WorldDataConfiguration dataConfiguration, RegistryAccess.Frozen datapackWorldgen, RegistryAccess.Frozen datapackDimensions)
```

**Parameters:**

- `resources` (`ResourceManager`)
- `dataConfiguration` (`WorldDataConfiguration`)
- `datapackWorldgen` (`RegistryAccess.Frozen`)
- `datapackDimensions` (`RegistryAccess.Frozen`)

**Returns:** `public static record`

### InitConfig

```java
public static record InitConfig(WorldLoader.PackConfig packConfig, Commands.CommandSelection commandSelection, int functionCompilationLevel)
```

**Parameters:**

- `packConfig` (`WorldLoader.PackConfig`)
- `commandSelection` (`Commands.CommandSelection`)
- `functionCompilationLevel` (`int`)

**Returns:** `public static record`

### PackConfig

```java
public static record PackConfig(PackRepository packRepository, WorldDataConfiguration initialDataConfig, boolean safeMode, boolean initMode)
```

**Parameters:**

- `packRepository` (`PackRepository`)
- `initialDataConfig` (`WorldDataConfiguration`)
- `safeMode` (`boolean`)
- `initMode` (`boolean`)

**Returns:** `public static record`

### createResourceManager

```java
public Pair<WorldDataConfiguration, CloseableResourceManager> createResourceManager()
```

**Returns:** `public Pair<WorldDataConfiguration, CloseableResourceManager>`

### create

```java
R create(CloseableResourceManager p_214408_, ReloadableServerResources p_214409_, LayeredRegistryAccess<RegistryLayer> p_248844_, D p_214411_)
```

**Parameters:**

- `p_214408_` (`CloseableResourceManager`)
- `p_214409_` (`ReloadableServerResources`)
- `p_248844_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_214411_` (`D`)

**Returns:** `R`

### get

```java
WorldLoader.DataLoadOutput<D> get(WorldLoader.DataLoadContext p_251042_)
```

**Parameters:**

- `p_251042_` (`WorldLoader.DataLoadContext`)

**Returns:** `WorldLoader.DataLoadOutput<D>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DataLoadContext` | record |  |
| `DataLoadOutput` | record |  |
| `InitConfig` | record |  |
| `PackConfig` | record |  |
| `ResultFactory` | interface |  |
| `WorldDataSupplier` | interface |  |
