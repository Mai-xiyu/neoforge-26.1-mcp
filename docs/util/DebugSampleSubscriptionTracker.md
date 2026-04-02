# DebugSampleSubscriptionTracker

**Package:** `net.minecraft.util.debugchart`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STOP_SENDING_AFTER_TICKS` | `int` |  |
| `STOP_SENDING_AFTER_MS` | `int` |  |

## Methods

### DebugSampleSubscriptionTracker

```java
public DebugSampleSubscriptionTracker(PlayerList p_323956_)
```

**Parameters:**

- `p_323956_` (`PlayerList`)

**Returns:** `public`

### shouldLogSamples

```java
public boolean shouldLogSamples(RemoteDebugSampleType p_324431_)
```

**Parameters:**

- `p_324431_` (`RemoteDebugSampleType`)

**Returns:** `public boolean`

### broadcast

```java
public void broadcast(ClientboundDebugSamplePacket p_324398_)
```

**Parameters:**

- `p_324398_` (`ClientboundDebugSamplePacket`)

**Returns:** `public void`

### subscribe

```java
public void subscribe(ServerPlayer p_324211_, RemoteDebugSampleType p_324355_)
```

**Parameters:**

- `p_324211_` (`ServerPlayer`)
- `p_324355_` (`RemoteDebugSampleType`)

**Returns:** `public void`

### tick

```java
public void tick(int p_323889_)
```

**Parameters:**

- `p_323889_` (`int`)

**Returns:** `public void`

### handleSubscriptions

```java
private void handleSubscriptions(long p_324350_, int p_323574_)
```

**Parameters:**

- `p_324350_` (`long`)
- `p_323574_` (`int`)

**Returns:** `private void`

### handleUnsubscriptions

```java
private void handleUnsubscriptions(long p_323971_, int p_324253_)
```

**Parameters:**

- `p_323971_` (`long`)
- `p_324253_` (`int`)

**Returns:** `private void`

### SubscriptionRequest

```java
static record SubscriptionRequest(ServerPlayer player, RemoteDebugSampleType sampleType)
```

**Parameters:**

- `player` (`ServerPlayer`)
- `sampleType` (`RemoteDebugSampleType`)

**Returns:** `static record`

### SubscriptionStartedAt

```java
static record SubscriptionStartedAt(long millis, int tick)
```

**Parameters:**

- `millis` (`long`)
- `tick` (`int`)

**Returns:** `static record`
