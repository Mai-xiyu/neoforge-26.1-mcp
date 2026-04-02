# GossipType

**Package:** `net.minecraft.world.entity.ai.gossip`
**Type:** enum
**Implements:** `StringRepresentable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `REPUTATION_CHANGE_PER_EVENT` | `int` |  |
| `REPUTATION_CHANGE_PER_EVERLASTING_MEMORY` | `int` |  |
| `REPUTATION_CHANGE_PER_TRADE` | `int` |  |
| `id` | `String` |  |
| `weight` | `int` |  |
| `max` | `int` |  |
| `decayPerDay` | `int` |  |
| `decayPerTransfer` | `int` |  |
| `CODEC` | `Codec<GossipType>` |  |

## Methods

### TRADING

```java
, TRADING()
```

**Returns:** `,`

### GossipType

```java
private GossipType(String p_26284_, int p_26285_, int p_26286_, int p_26287_, int p_26288_)
```

**Parameters:**

- `p_26284_` (`String`)
- `p_26285_` (`int`)
- `p_26286_` (`int`)
- `p_26287_` (`int`)
- `p_26288_` (`int`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`
