# VibrationSelector

**Package:** `net.minecraft.world.level.gameevent.vibrations`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<VibrationSelector>` |  |

## Methods

### VibrationSelector

```java
public VibrationSelector(Optional<VibrationInfo> p_251736_, long p_251649_)
```

**Parameters:**

- `p_251736_` (`Optional<VibrationInfo>`)
- `p_251649_` (`long`)

**Returns:** `public`

### VibrationSelector

```java
public VibrationSelector()
```

**Returns:** `public`

### addCandidate

```java
public void addCandidate(VibrationInfo p_250149_, long p_249749_)
```

**Parameters:**

- `p_250149_` (`VibrationInfo`)
- `p_249749_` (`long`)

**Returns:** `public void`

### shouldReplaceVibration

```java
private boolean shouldReplaceVibration(VibrationInfo p_248697_, long p_249040_)
```

**Parameters:**

- `p_248697_` (`VibrationInfo`)
- `p_249040_` (`long`)

**Returns:** `private boolean`

### chosenCandidate

```java
public Optional<VibrationInfo> chosenCandidate(long p_250251_)
```

**Parameters:**

- `p_250251_` (`long`)

**Returns:** `public Optional<VibrationInfo>`

### startOver

```java
public void startOver()
```

**Returns:** `public void`
