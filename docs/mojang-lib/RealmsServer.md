# RealmsServer

**Package:** `com.mojang.realmsclient.dto`
**Type:** class
**Extends:** `ValueObject`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `id` | `long` |  |
| `remoteSubscriptionId` | `String` |  |
| `name` | `String` |  |
| `motd` | `String` |  |
| `state` | `RealmsServer.State` |  |
| `owner` | `String` |  |
| `ownerUUID` | `UUID` |  |
| `players` | `List<PlayerInfo>` |  |
| `slots` | `Map<Integer, RealmsWorldOptions>` |  |
| `expired` | `boolean` |  |
| `expiredTrial` | `boolean` |  |
| `daysLeft` | `int` |  |
| `worldType` | `RealmsServer.WorldType` |  |
| `activeSlot` | `int` |  |
| `minigameId` | `int` |  |
| `minigameImage` | `String` |  |
| `parentRealmId` | `long` |  |
| `activeVersion` | `String` |  |
| `compatibility` | `RealmsServer.Compatibility` |  |

## Methods

### getDescription

```java
public String getDescription()
```

**Returns:** `public String`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getMinigameName

```java
public String getMinigameName()
```

**Returns:** `String`

### setName

```java
public void setName(String p_87509_)
```

**Parameters:**

- `p_87509_` (`String`)

**Returns:** `public void`

### setDescription

```java
public void setDescription(String p_87516_)
```

**Parameters:**

- `p_87516_` (`String`)

**Returns:** `public void`

### parse

```java
public static RealmsServer parse(JsonObject p_87500_)
```

**Parameters:**

- `p_87500_` (`JsonObject`)

**Returns:** `public static RealmsServer`

### sortInvited

```java
 sortInvited()
```

**Returns:** ``

### sortInvited

```java
private static void sortInvited(RealmsServer p_87505_)
```

**Parameters:**

- `p_87505_` (`RealmsServer`)

**Returns:** `private static void`

### parseInvited

```java
private static List<PlayerInfo> parseInvited(JsonArray p_87498_)
```

**Parameters:**

- `p_87498_` (`JsonArray`)

**Returns:** `private static List<PlayerInfo>`

### parseSlots

```java
private static Map<Integer, RealmsWorldOptions> parseSlots(JsonArray p_87514_)
```

**Parameters:**

- `p_87514_` (`JsonArray`)

**Returns:** `private static Map<Integer, RealmsWorldOptions>`

### createEmptySlots

```java
private static Map<Integer, RealmsWorldOptions> createEmptySlots()
```

**Returns:** `private static Map<Integer, RealmsWorldOptions>`

### parse

```java
public static RealmsServer parse(String p_87519_)
```

**Parameters:**

- `p_87519_` (`String`)

**Returns:** `public static RealmsServer`

### RealmsServer

```java
return new RealmsServer()
```

**Returns:** `return new`

### getState

```java
private static RealmsServer.State getState(String p_87526_)
```

**Parameters:**

- `p_87526_` (`String`)

**Returns:** `private static RealmsServer.State`

### getWorldType

```java
private static RealmsServer.WorldType getWorldType(String p_87530_)
```

**Parameters:**

- `p_87530_` (`String`)

**Returns:** `private static RealmsServer.WorldType`

### getCompatibility

```java
public static RealmsServer.Compatibility getCompatibility(String p_305806_)
```

**Parameters:**

- `p_305806_` (`String`)

**Returns:** `public static RealmsServer.Compatibility`

### isCompatible

```java
public boolean isCompatible()
```

**Returns:** `public boolean`

### needsUpgrade

```java
public boolean needsUpgrade()
```

**Returns:** `public boolean`

### needsDowngrade

```java
public boolean needsDowngrade()
```

**Returns:** `public boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### equals

```java
public boolean equals(Object p_87528_)
```

**Parameters:**

- `p_87528_` (`Object`)

**Returns:** `boolean`

### clone

```java
public RealmsServer clone()
```

**Returns:** `public RealmsServer`

### cloneSlots

```java
public Map<Integer, RealmsWorldOptions> cloneSlots(Map<Integer, RealmsWorldOptions> p_87511_)
```

**Parameters:**

- `p_87511_` (`Map<Integer, RealmsWorldOptions>`)

**Returns:** `public Map<Integer, RealmsWorldOptions>`

### isSnapshotRealm

```java
public boolean isSnapshotRealm()
```

**Returns:** `public boolean`

### isMinigameActive

```java
public boolean isMinigameActive()
```

**Returns:** `public boolean`

### getWorldName

```java
public String getWorldName(int p_87496_)
```

**Parameters:**

- `p_87496_` (`int`)

**Returns:** `public String`

### toServerData

```java
public ServerData toServerData(String p_87523_)
```

**Parameters:**

- `p_87523_` (`String`)

**Returns:** `public ServerData`

### ServerData

```java
return new ServerData()
```

**Returns:** `return new`

### isCompatible

```java
public boolean isCompatible()
```

**Returns:** `public boolean`

### needsUpgrade

```java
public boolean needsUpgrade()
```

**Returns:** `public boolean`

### needsDowngrade

```java
public boolean needsDowngrade()
```

**Returns:** `public boolean`

### McoServerComparator

```java
public McoServerComparator(String p_87534_)
```

**Parameters:**

- `p_87534_` (`String`)

**Returns:** `public`

### compare

```java
public int compare(RealmsServer p_87536_, RealmsServer p_87537_)
```

**Parameters:**

- `p_87536_` (`RealmsServer`)
- `p_87537_` (`RealmsServer`)

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Compatibility` | enum |  |
| `McoServerComparator` | class |  |
| `State` | enum |  |
| `WorldType` | enum |  |
