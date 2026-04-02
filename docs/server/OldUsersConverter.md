# OldUsersConverter

**Package:** `net.minecraft.server.players`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `OLD_IPBANLIST` | `File` |  |
| `OLD_USERBANLIST` | `File` |  |
| `OLD_OPLIST` | `File` |  |
| `OLD_WHITELIST` | `File` |  |

## Methods

### readOldListFormat

```java
static List<String> readOldListFormat(File p_11074_, Map<String, String[]> p_11075_)
```

**Parameters:**

- `p_11074_` (`File`)
- `p_11075_` (`Map<String, String[]>`)

**Returns:** `static List<String>`

### lookupPlayers

```java
private static void lookupPlayers(MinecraftServer p_11087_, Collection<String> p_11088_, ProfileLookupCallback p_11089_)
```

**Parameters:**

- `p_11087_` (`MinecraftServer`)
- `p_11088_` (`Collection<String>`)
- `p_11089_` (`ProfileLookupCallback`)

**Returns:** `private static void`

### convertUserBanlist

```java
public static boolean convertUserBanlist(MinecraftServer p_11082_)
```

**Parameters:**

- `p_11082_` (`MinecraftServer`)

**Returns:** `public static boolean`

### readOldListFormat

```java
 readOldListFormat()
```

**Returns:** ``

### onProfileLookupSucceeded

```java
public void onProfileLookupSucceeded(GameProfile p_11123_)
```

**Parameters:**

- `p_11123_` (`GameProfile`)

### onProfileLookupFailed

```java
public void onProfileLookupFailed(String p_295249_, Exception p_11121_)
```

**Parameters:**

- `p_295249_` (`String`)
- `p_11121_` (`Exception`)

### renameOldFile

```java
 renameOldFile()
```

**Returns:** ``

### convertIpBanlist

```java
public static boolean convertIpBanlist(MinecraftServer p_11099_)
```

**Parameters:**

- `p_11099_` (`MinecraftServer`)

**Returns:** `public static boolean`

### readOldListFormat

```java
 readOldListFormat()
```

**Returns:** ``

### renameOldFile

```java
 renameOldFile()
```

**Returns:** ``

### convertOpsList

```java
public static boolean convertOpsList(MinecraftServer p_11103_)
```

**Parameters:**

- `p_11103_` (`MinecraftServer`)

**Returns:** `public static boolean`

### onProfileLookupSucceeded

```java
public void onProfileLookupSucceeded(GameProfile p_11133_)
```

**Parameters:**

- `p_11133_` (`GameProfile`)

### onProfileLookupFailed

```java
public void onProfileLookupFailed(String p_296013_, Exception p_11131_)
```

**Parameters:**

- `p_296013_` (`String`)
- `p_11131_` (`Exception`)

### lookupPlayers

```java
 lookupPlayers()
```

**Returns:** ``

### renameOldFile

```java
 renameOldFile()
```

**Returns:** ``

### convertWhiteList

```java
public static boolean convertWhiteList(MinecraftServer p_11105_)
```

**Parameters:**

- `p_11105_` (`MinecraftServer`)

**Returns:** `public static boolean`

### onProfileLookupSucceeded

```java
public void onProfileLookupSucceeded(GameProfile p_11143_)
```

**Parameters:**

- `p_11143_` (`GameProfile`)

### onProfileLookupFailed

```java
public void onProfileLookupFailed(String p_294222_, Exception p_11141_)
```

**Parameters:**

- `p_294222_` (`String`)
- `p_11141_` (`Exception`)

### lookupPlayers

```java
 lookupPlayers()
```

**Returns:** ``

### renameOldFile

```java
 renameOldFile()
```

**Returns:** ``

### convertMobOwnerIfNecessary

```java
public static UUID convertMobOwnerIfNecessary(MinecraftServer p_11084_, String p_11085_)
```

**Parameters:**

- `p_11084_` (`MinecraftServer`)
- `p_11085_` (`String`)

**Returns:** `UUID`

### onProfileLookupSucceeded

```java
public void onProfileLookupSucceeded(GameProfile p_11153_)
```

**Parameters:**

- `p_11153_` (`GameProfile`)

### onProfileLookupFailed

```java
public void onProfileLookupFailed(String p_296282_, Exception p_11151_)
```

**Parameters:**

- `p_296282_` (`String`)
- `p_11151_` (`Exception`)

### convertPlayers

```java
public static boolean convertPlayers(DedicatedServer p_11091_)
```

**Parameters:**

- `p_11091_` (`DedicatedServer`)

**Returns:** `public static boolean`

### onProfileLookupSucceeded

```java
public void onProfileLookupSucceeded(GameProfile p_11175_)
```

**Parameters:**

- `p_11175_` (`GameProfile`)

### onProfileLookupFailed

```java
public void onProfileLookupFailed(String p_294543_, Exception p_11173_)
```

**Parameters:**

- `p_294543_` (`String`)
- `p_11173_` (`Exception`)

### movePlayerFile

```java
private void movePlayerFile(File p_11168_, String p_11169_, String p_11170_)
```

**Parameters:**

- `p_11168_` (`File`)
- `p_11169_` (`String`)
- `p_11170_` (`String`)

**Returns:** `private void`

### getFileNameForProfile

```java
private String getFileNameForProfile(String p_296396_)
```

**Parameters:**

- `p_296396_` (`String`)

**Returns:** `private String`

### ensureDirectoryExists

```java
static void ensureDirectoryExists(File p_11094_)
```

**Parameters:**

- `p_11094_` (`File`)

**Returns:** `static void`

### serverReadyAfterUserconversion

```java
public static boolean serverReadyAfterUserconversion(MinecraftServer p_11107_)
```

**Parameters:**

- `p_11107_` (`MinecraftServer`)

**Returns:** `public static boolean`

### areOldUserlistsRemoved

```java
private static boolean areOldUserlistsRemoved()
```

**Returns:** `private static boolean`

### areOldPlayersConverted

```java
private static boolean areOldPlayersConverted(MinecraftServer p_11109_)
```

**Parameters:**

- `p_11109_` (`MinecraftServer`)

**Returns:** `private static boolean`

### getWorldPlayersDirectory

```java
private static File getWorldPlayersDirectory(MinecraftServer p_11111_)
```

**Parameters:**

- `p_11111_` (`MinecraftServer`)

**Returns:** `private static File`

### renameOldFile

```java
private static void renameOldFile(File p_11101_)
```

**Parameters:**

- `p_11101_` (`File`)

**Returns:** `private static void`

### parseDate

```java
static Date parseDate(String p_11096_, Date p_11097_)
```

**Parameters:**

- `p_11096_` (`String`)
- `p_11097_` (`Date`)

**Returns:** `static Date`

### ConversionError

```java
 ConversionError(String p_11182_, Throwable p_11183_)
```

**Parameters:**

- `p_11182_` (`String`)
- `p_11183_` (`Throwable`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### ConversionError

```java
 ConversionError(String p_11177_)
```

**Parameters:**

- `p_11177_` (`String`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``
