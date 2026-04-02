# RealmsClient

**Package:** `com.mojang.realmsclient.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ENVIRONMENT` | `RealmsClient.Environment` |  |

## Methods

### create

```java
public static RealmsClient create()
```

**Returns:** `public static RealmsClient`

### create

```java
return create()
```

**Returns:** `return`

### create

```java
public static RealmsClient create(Minecraft p_239152_)
```

**Parameters:**

- `p_239152_` (`Minecraft`)

**Returns:** `public static RealmsClient`

### RealmsClient

```java
return new RealmsClient()
```

**Returns:** `return new`

### RealmsClient

```java
public RealmsClient(String p_87166_, String p_87167_, Minecraft p_87168_)
```

**Parameters:**

- `p_87166_` (`String`)
- `p_87167_` (`String`)
- `p_87168_` (`Minecraft`)

**Returns:** `public`

### listRealms

```java
public RealmsServerList listRealms()
```

**Returns:** `public RealmsServerList`

### listSnapshotEligibleRealms

```java
public List<RealmsServer> listSnapshotEligibleRealms()
```

**Returns:** `public List<RealmsServer>`

### createSnapshotRealm

```java
public RealmsServer createSnapshotRealm(Long p_306020_)
```

**Parameters:**

- `p_306020_` (`Long`)

**Returns:** `public RealmsServer`

### getNotifications

```java
public List<RealmsNotification> getNotifications()
```

**Returns:** `public List<RealmsNotification>`

### uuidListToJsonArray

```java
private static JsonArray uuidListToJsonArray(List<UUID> p_275393_)
```

**Parameters:**

- `p_275393_` (`List<UUID>`)

**Returns:** `private static JsonArray`

### notificationsSeen

```java
public void notificationsSeen(List<UUID> p_275212_)
```

**Parameters:**

- `p_275212_` (`List<UUID>`)

**Returns:** `public void`

### notificationsDismiss

```java
public void notificationsDismiss(List<UUID> p_275407_)
```

**Parameters:**

- `p_275407_` (`List<UUID>`)

**Returns:** `public void`

### getOwnRealm

```java
public RealmsServer getOwnRealm(long p_87175_)
```

**Parameters:**

- `p_87175_` (`long`)

**Returns:** `public RealmsServer`

### getActivity

```java
public ServerActivityList getActivity(long p_167279_)
```

**Parameters:**

- `p_167279_` (`long`)

**Returns:** `public ServerActivityList`

### getLiveStats

```java
public RealmsServerPlayerLists getLiveStats()
```

**Returns:** `public RealmsServerPlayerLists`

### join

```java
public RealmsServerAddress join(long p_87208_)
```

**Parameters:**

- `p_87208_` (`long`)

**Returns:** `public RealmsServerAddress`

### initializeRealm

```java
public void initializeRealm(long p_87192_, String p_87193_, String p_87194_)
```

**Parameters:**

- `p_87192_` (`long`)
- `p_87193_` (`String`)
- `p_87194_` (`String`)

**Returns:** `public void`

### hasParentalConsent

```java
public boolean hasParentalConsent()
```

**Returns:** `public boolean`

### clientCompatible

```java
public RealmsClient.CompatibleVersionResponse clientCompatible()
```

**Returns:** `public RealmsClient.CompatibleVersionResponse`

### uninvite

```java
public void uninvite(long p_87184_, UUID p_295611_)
```

**Parameters:**

- `p_87184_` (`long`)
- `p_295611_` (`UUID`)

**Returns:** `public void`

### uninviteMyselfFrom

```java
public void uninviteMyselfFrom(long p_87223_)
```

**Parameters:**

- `p_87223_` (`long`)

**Returns:** `public void`

### invite

```java
public RealmsServer invite(long p_87213_, String p_87214_)
```

**Parameters:**

- `p_87213_` (`long`)
- `p_87214_` (`String`)

**Returns:** `public RealmsServer`

### backupsFor

```java
public BackupList backupsFor(long p_87231_)
```

**Parameters:**

- `p_87231_` (`long`)

**Returns:** `public BackupList`

### update

```java
public void update(long p_87216_, String p_87217_, String p_87218_)
```

**Parameters:**

- `p_87216_` (`long`)
- `p_87217_` (`String`)
- `p_87218_` (`String`)

**Returns:** `public void`

### updateSlot

```java
public void updateSlot(long p_87180_, int p_87181_, RealmsWorldOptions p_87182_)
```

**Parameters:**

- `p_87180_` (`long`)
- `p_87181_` (`int`)
- `p_87182_` (`RealmsWorldOptions`)

**Returns:** `public void`

### switchSlot

```java
public boolean switchSlot(long p_87177_, int p_87178_)
```

**Parameters:**

- `p_87177_` (`long`)
- `p_87178_` (`int`)

**Returns:** `public boolean`

### restoreWorld

```java
public void restoreWorld(long p_87225_, String p_87226_)
```

**Parameters:**

- `p_87225_` (`long`)
- `p_87226_` (`String`)

**Returns:** `public void`

### fetchWorldTemplates

```java
public WorldTemplatePaginatedList fetchWorldTemplates(int p_87171_, int p_87172_, RealmsServer.WorldType p_87173_)
```

**Parameters:**

- `p_87171_` (`int`)
- `p_87172_` (`int`)
- `p_87173_` (`RealmsServer.WorldType`)

**Returns:** `public WorldTemplatePaginatedList`

### putIntoMinigameMode

```java
public Boolean putIntoMinigameMode(long p_87233_, String p_87234_)
```

**Parameters:**

- `p_87233_` (`long`)
- `p_87234_` (`String`)

**Returns:** `public Boolean`

### op

```java
public Ops op(long p_87239_, UUID p_295948_)
```

**Parameters:**

- `p_87239_` (`long`)
- `p_295948_` (`UUID`)

**Returns:** `public Ops`

### deop

```java
public Ops deop(long p_87245_, UUID p_294880_)
```

**Parameters:**

- `p_87245_` (`long`)
- `p_294880_` (`UUID`)

**Returns:** `public Ops`

### open

```java
public Boolean open(long p_87237_)
```

**Parameters:**

- `p_87237_` (`long`)

**Returns:** `public Boolean`

### close

```java
public Boolean close(long p_87243_)
```

**Parameters:**

- `p_87243_` (`long`)

**Returns:** `public Boolean`

### resetWorldWithSeed

```java
public Boolean resetWorldWithSeed(long p_167276_, WorldGenerationInfo p_167277_)
```

**Parameters:**

- `p_167276_` (`long`)
- `p_167277_` (`WorldGenerationInfo`)

**Returns:** `public Boolean`

### resetWorldWithTemplate

```java
public Boolean resetWorldWithTemplate(long p_87251_, String p_87252_)
```

**Parameters:**

- `p_87251_` (`long`)
- `p_87252_` (`String`)

**Returns:** `public Boolean`

### subscriptionFor

```java
public Subscription subscriptionFor(long p_87249_)
```

**Parameters:**

- `p_87249_` (`long`)

**Returns:** `public Subscription`

### pendingInvitesCount

```java
public int pendingInvitesCount()
```

**Returns:** `public int`

### pendingInvites

```java
public PendingInvitesList pendingInvites()
```

**Returns:** `public PendingInvitesList`

### isBlocked

```java
private boolean isBlocked(PendingInvite p_87198_)
```

**Parameters:**

- `p_87198_` (`PendingInvite`)

**Returns:** `private boolean`

### acceptInvitation

```java
public void acceptInvitation(String p_87202_)
```

**Parameters:**

- `p_87202_` (`String`)

**Returns:** `public void`

### requestDownloadInfo

```java
public WorldDownload requestDownloadInfo(long p_87210_, int p_87211_)
```

**Parameters:**

- `p_87210_` (`long`)
- `p_87211_` (`int`)

**Returns:** `public WorldDownload`

### requestUploadInfo

```java
public UploadInfo requestUploadInfo(long p_87257_, String p_87258_)
```

**Parameters:**

- `p_87257_` (`long`)
- `p_87258_` (`String`)

**Returns:** `UploadInfo`

### rejectInvitation

```java
public void rejectInvitation(String p_87220_)
```

**Parameters:**

- `p_87220_` (`String`)

**Returns:** `public void`

### agreeToTos

```java
public void agreeToTos()
```

**Returns:** `public void`

### getNews

```java
public RealmsNews getNews()
```

**Returns:** `public RealmsNews`

### sendPingResults

```java
public void sendPingResults(PingResult p_87200_)
```

**Parameters:**

- `p_87200_` (`PingResult`)

**Returns:** `public void`

### trialAvailable

```java
public Boolean trialAvailable()
```

**Returns:** `public Boolean`

### deleteRealm

```java
public void deleteRealm(long p_87255_)
```

**Parameters:**

- `p_87255_` (`long`)

**Returns:** `public void`

### url

```java
private String url(String p_87228_)
```

**Parameters:**

- `p_87228_` (`String`)

**Returns:** `private String`

### url

```java
private String url(String p_87204_, String p_87205_)
```

**Parameters:**

- `p_87204_` (`String`)
- `p_87205_` (`String`)

**Returns:** `private String`

### IllegalArgumentException

```java
throw new IllegalArgumentException()
```

**Returns:** `throw new`

### execute

```java
private String execute(Request<?> p_87196_)
```

**Parameters:**

- `p_87196_` (`Request<?>`)

**Returns:** `private String`

### RealmsServiceException

```java
throw new RealmsServiceException()
```

**Returns:** `throw new`

### RetryCallException

```java
throw new RetryCallException()
```

**Returns:** `throw new`

### LOCAL

```java
, LOCAL()
```

**Returns:** `,`

### Environment

```java
private Environment(String p_87286_, String p_87287_)
```

**Parameters:**

- `p_87286_` (`String`)
- `p_87287_` (`String`)

**Returns:** `private`

### byName

```java
public static Optional<RealmsClient.Environment> byName(String p_289688_)
```

**Parameters:**

- `p_289688_` (`String`)

**Returns:** `public static Optional<RealmsClient.Environment>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CompatibleVersionResponse` | enum |  |
| `Environment` | enum |  |
