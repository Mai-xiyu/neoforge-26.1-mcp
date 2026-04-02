# DemoMode

**Package:** `net.minecraft.server.level`
**Type:** class
**Extends:** `ServerPlayerGameMode`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEMO_DAYS` | `int` |  |
| `TOTAL_PLAY_TICKS` | `int` |  |

## Methods

### DemoMode

```java
public DemoMode(ServerPlayer p_143204_)
```

**Parameters:**

- `p_143204_` (`ServerPlayer`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
public void tick()
```

### outputDemoReminder

```java
private void outputDemoReminder()
```

**Returns:** `private void`

### handleBlockBreakAction

```java
public void handleBlockBreakAction(BlockPos p_214976_, ServerboundPlayerActionPacket.Action p_214977_, Direction p_214978_, int p_214979_, int p_214980_)
```

**Parameters:**

- `p_214976_` (`BlockPos`)
- `p_214977_` (`ServerboundPlayerActionPacket.Action`)
- `p_214978_` (`Direction`)
- `p_214979_` (`int`)
- `p_214980_` (`int`)

### useItem

```java
public InteractionResult useItem(ServerPlayer p_140742_, Level p_140743_, ItemStack p_140744_, InteractionHand p_140745_)
```

**Parameters:**

- `p_140742_` (`ServerPlayer`)
- `p_140743_` (`Level`)
- `p_140744_` (`ItemStack`)
- `p_140745_` (`InteractionHand`)

**Returns:** `InteractionResult`

### useItemOn

```java
public InteractionResult useItemOn(ServerPlayer p_140747_, Level p_140748_, ItemStack p_140749_, InteractionHand p_140750_, BlockHitResult p_140751_)
```

**Parameters:**

- `p_140747_` (`ServerPlayer`)
- `p_140748_` (`Level`)
- `p_140749_` (`ItemStack`)
- `p_140750_` (`InteractionHand`)
- `p_140751_` (`BlockHitResult`)

**Returns:** `InteractionResult`
