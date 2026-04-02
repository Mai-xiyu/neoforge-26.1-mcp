# RealmsDataFetcher

**Package:** `com.mojang.realmsclient.gui`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `dataFetcher` | `DataFetcher` |  |
| `notificationsTask` | `DataFetcher.Task<List<RealmsNotification>>` |  |
| `serverListUpdateTask` | `DataFetcher.Task<RealmsDataFetcher.ServerListData>` |  |
| `pendingInvitesTask` | `DataFetcher.Task<Integer>` |  |
| `trialAvailabilityTask` | `DataFetcher.Task<Boolean>` |  |
| `newsTask` | `DataFetcher.Task<RealmsNews>` |  |
| `onlinePlayersTask` | `DataFetcher.Task<RealmsServerPlayerLists>` |  |
| `newsManager` | `RealmsNewsManager` |  |

## Methods

### RealmsDataFetcher

```java
public RealmsDataFetcher(RealmsClient p_238853_)
```

**Parameters:**

- `p_238853_` (`RealmsClient`)

**Returns:** `public`

### getTasks

```java
public List<DataFetcher.Task<?>> getTasks()
```

**Returns:** `public List<DataFetcher.Task<?>>`

### ServerListData

```java
public static record ServerListData(List<RealmsServer> serverList, List<RealmsServer> availableSnapshotServers)
```

**Parameters:**

- `serverList` (`List<RealmsServer>`)
- `availableSnapshotServers` (`List<RealmsServer>`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ServerListData` | record |  |
