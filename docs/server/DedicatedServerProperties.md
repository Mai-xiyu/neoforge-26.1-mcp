# DedicatedServerProperties

**Package:** `net.minecraft.server.dedicated`
**Type:** class
**Extends:** `Settings<DedicatedServerProperties>`
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `onlineMode` | `boolean` |  |
| `preventProxyConnections` | `boolean` |  |
| `serverIp` | `String` |  |
| `spawnAnimals` | `boolean` |  |
| `spawnNpcs` | `boolean` |  |
| `pvp` | `boolean` |  |
| `allowFlight` | `boolean` |  |
| `motd` | `String` |  |
| `bugReportLink` | `String` |  |
| `forceGameMode` | `boolean` |  |
| `enforceWhitelist` | `boolean` |  |
| `difficulty` | `Difficulty` |  |
| `gamemode` | `GameType` |  |
| `levelName` | `String` |  |
| `serverPort` | `int` |  |
| `enableQuery` | `boolean` |  |
| `queryPort` | `int` |  |
| `enableRcon` | `boolean` |  |
| `rconPort` | `int` |  |
| `rconPassword` | `String` |  |
| `hardcore` | `boolean` |  |
| `allowNether` | `boolean` |  |
| `spawnMonsters` | `boolean` |  |
| `useNativeTransport` | `boolean` |  |
| `enableCommandBlock` | `boolean` |  |
| `spawnProtection` | `int` |  |
| `opPermissionLevel` | `int` |  |
| `functionPermissionLevel` | `int` |  |
| `maxTickTime` | `long` |  |
| `maxChainedNeighborUpdates` | `int` |  |
| `rateLimitPacketsPerSecond` | `int` |  |
| `viewDistance` | `int` |  |
| `simulationDistance` | `int` |  |
| `maxPlayers` | `int` |  |
| `networkCompressionThreshold` | `int` |  |
| `broadcastRconToOps` | `boolean` |  |
| `broadcastConsoleToOps` | `boolean` |  |
| `maxWorldSize` | `int` |  |
| `syncChunkWrites` | `boolean` |  |
| `regionFileComression` | `String` |  |
| `enableJmxMonitoring` | `boolean` |  |
| `enableStatus` | `boolean` |  |
| `hideOnlinePlayers` | `boolean` |  |
| `entityBroadcastRangePercentage` | `int` |  |
| `textFilteringConfig` | `String` |  |
| `serverResourcePackInfo` | `Optional<MinecraftServer.ServerResourcePackInfo>` |  |
| `initialDataPackConfiguration` | `DataPackConfig` |  |
| `playerIdleTimeout` | `Settings<DedicatedServerProperties>.MutableValue<Integer>` |  |
| `whiteList` | `Settings<DedicatedServerProperties>.MutableValue<Boolean>` |  |
| `enforceSecureProfile` | `boolean` |  |
| `logIPs` | `boolean` |  |
| `worldOptions` | `WorldOptions` |  |
| `acceptsTransfers` | `boolean` |  |

## Methods

### DedicatedServerProperties

```java
public DedicatedServerProperties(Properties p_180926_)
```

**Parameters:**

- `p_180926_` (`Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### fromFile

```java
public static DedicatedServerProperties fromFile(Path p_180930_)
```

**Parameters:**

- `p_180930_` (`Path`)

**Returns:** `public static DedicatedServerProperties`

### reload

```java
protected DedicatedServerProperties reload(RegistryAccess p_139761_, Properties p_139762_)
```

**Parameters:**

- `p_139761_` (`RegistryAccess`)
- `p_139762_` (`Properties`)

**Returns:** `protected DedicatedServerProperties`

### DedicatedServerProperties

```java
return new DedicatedServerProperties()
```

**Returns:** `return new`

### getServerPackInfo

```java
private static Optional<MinecraftServer.ServerResourcePackInfo> getServerPackInfo(String p_214809_, String p_214810_, String p_214811_, String p_214813_, boolean p_214812_, String p_314598_)
```

**Parameters:**

- `p_214809_` (`String`)
- `p_214810_` (`String`)
- `p_214811_` (`String`)
- `p_214813_` (`String`)
- `p_214812_` (`boolean`)
- `p_314598_` (`String`)

**Returns:** `private static Optional<MinecraftServer.ServerResourcePackInfo>`

### getDatapackConfig

```java
private static DataPackConfig getDatapackConfig(String p_251757_, String p_249979_)
```

**Parameters:**

- `p_251757_` (`String`)
- `p_249979_` (`String`)

**Returns:** `private static DataPackConfig`

### DataPackConfig

```java
return new DataPackConfig()
```

**Returns:** `return new`

### createDimensions

```java
public WorldDimensions createDimensions(RegistryAccess p_250466_)
```

**Parameters:**

- `p_250466_` (`RegistryAccess`)

**Returns:** `public WorldDimensions`

### WorldDimensionData

```java
static record WorldDimensionData(JsonObject generatorSettings, String levelType)
```

**Parameters:**

- `generatorSettings` (`JsonObject`)
- `levelType` (`String`)

**Returns:** `static record`

### create

```java
public WorldDimensions create(RegistryAccess p_248812_)
```

**Parameters:**

- `p_248812_` (`RegistryAccess`)

**Returns:** `public WorldDimensions`
