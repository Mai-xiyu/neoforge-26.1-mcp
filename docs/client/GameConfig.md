# GameConfig

**Package:** `net.minecraft.client.main`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `user` | `GameConfig.UserData` |  |
| `display` | `DisplayData` |  |
| `location` | `GameConfig.FolderData` |  |
| `game` | `GameConfig.GameData` |  |
| `quickPlay` | `GameConfig.QuickPlayData` |  |
| `gameDirectory` | `File` |  |
| `resourcePackDirectory` | `File` |  |
| `assetDirectory` | `File` |  |
| `demo` | `boolean` |  |
| `launchVersion` | `String` |  |
| `versionType` | `String` |  |
| `disableMultiplayer` | `boolean` |  |
| `disableChat` | `boolean` |  |
| `user` | `User` |  |
| `userProperties` | `PropertyMap` |  |
| `profileProperties` | `PropertyMap` |  |
| `proxy` | `Proxy` |  |

## Methods

### GameConfig

```java
public GameConfig(GameConfig.UserData p_279448_, DisplayData p_279368_, GameConfig.FolderData p_279174_, GameConfig.GameData p_279138_, GameConfig.QuickPlayData p_279425_)
```

**Parameters:**

- `p_279448_` (`GameConfig.UserData`)
- `p_279368_` (`DisplayData`)
- `p_279174_` (`GameConfig.FolderData`)
- `p_279138_` (`GameConfig.GameData`)
- `p_279425_` (`GameConfig.QuickPlayData`)

**Returns:** `public`

### FolderData

```java
public FolderData(File p_101921_, File p_101922_, File p_101923_, String p_101924_)
```

**Parameters:**

- `p_101921_` (`File`)
- `p_101922_` (`File`)
- `p_101923_` (`File`)
- `p_101924_` (`String`)

**Returns:** `public`

### getExternalAssetSource

```java
public Path getExternalAssetSource()
```

**Returns:** `public Path`

### GameData

```java
public GameData(boolean p_101932_, String p_101933_, String p_101934_, boolean p_101935_, boolean p_101936_)
```

**Parameters:**

- `p_101932_` (`boolean`)
- `p_101933_` (`String`)
- `p_101934_` (`String`)
- `p_101935_` (`boolean`)
- `p_101936_` (`boolean`)

**Returns:** `public`

### QuickPlayData

```java
public static record QuickPlayData(String path, String singleplayer, String multiplayer, String realms)
```

**Parameters:**

- `path` (`String`)
- `singleplayer` (`String`)
- `multiplayer` (`String`)
- `realms` (`String`)

**Returns:** `record`

### isEnabled

```java
public boolean isEnabled()
```

**Returns:** `public boolean`

### UserData

```java
public UserData(User p_101947_, PropertyMap p_101948_, PropertyMap p_101949_, Proxy p_101950_)
```

**Parameters:**

- `p_101947_` (`User`)
- `p_101948_` (`PropertyMap`)
- `p_101949_` (`PropertyMap`)
- `p_101950_` (`Proxy`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FolderData` | class |  |
| `GameData` | class |  |
| `QuickPlayData` | record |  |
| `UserData` | class |  |
