# DebugSampleSubscriber

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `REQUEST_INTERVAL_MS` | `int` |  |

## Methods

### DebugSampleSubscriber

```java
public DebugSampleSubscriber(ClientPacketListener p_324284_, DebugScreenOverlay p_324198_)
```

**Parameters:**

- `p_324284_` (`ClientPacketListener`)
- `p_324198_` (`DebugScreenOverlay`)

**Returns:** `public`

### tick

```java
public void tick()
```

**Returns:** `public void`

### sendSubscriptionRequestIfNeeded

```java
private void sendSubscriptionRequestIfNeeded(RemoteDebugSampleType p_324259_)
```

**Parameters:**

- `p_324259_` (`RemoteDebugSampleType`)

**Returns:** `private void`
