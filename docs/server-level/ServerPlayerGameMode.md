# ServerPlayerGameMode

**Package:** `net.minecraft.server.level`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `level` | `ServerLevel` |  |
| `player` | `ServerPlayer` |  |

## Methods

### ServerPlayerGameMode

```java
public ServerPlayerGameMode(ServerPlayer p_143472_)
```

**Parameters:**

- `p_143472_` (`ServerPlayer`)

**Returns:** `public`

### changeGameModeForPlayer

```java
public boolean changeGameModeForPlayer(GameType p_143474_)
```

**Parameters:**

- `p_143474_` (`GameType`)

**Returns:** `public boolean`

### setGameModeForPlayer

```java
protected void setGameModeForPlayer(GameType p_9274_, GameType p_9275_)
```

**Parameters:**

- `p_9274_` (`GameType`)
- `p_9275_` (`GameType`)

**Returns:** `protected void`

### getGameModeForPlayer

```java
public GameType getGameModeForPlayer()
```

**Returns:** `public GameType`

### getPreviousGameModeForPlayer

```java
public GameType getPreviousGameModeForPlayer()
```

**Returns:** `GameType`

### isSurvival

```java
public boolean isSurvival()
```

**Returns:** `public boolean`

### isCreative

```java
public boolean isCreative()
```

**Returns:** `public boolean`

### tick

```java
public void tick()
```

**Returns:** `public void`

### incrementDestroyProgress

```java
private float incrementDestroyProgress(BlockState p_9277_, BlockPos p_9278_, int p_9279_)
```

**Parameters:**

- `p_9277_` (`BlockState`)
- `p_9278_` (`BlockPos`)
- `p_9279_` (`int`)

**Returns:** `private float`

### debugLogging

```java
private void debugLogging(BlockPos p_215126_, boolean p_215127_, int p_215128_, String p_215129_)
```

**Parameters:**

- `p_215126_` (`BlockPos`)
- `p_215127_` (`boolean`)
- `p_215128_` (`int`)
- `p_215129_` (`String`)

**Returns:** `private void`

### handleBlockBreakAction

```java
public void handleBlockBreakAction(BlockPos p_215120_, ServerboundPlayerActionPacket.Action p_215121_, Direction p_215122_, int p_215123_, int p_215124_)
```

**Parameters:**

- `p_215120_` (`BlockPos`)
- `p_215121_` (`ServerboundPlayerActionPacket.Action`)
- `p_215122_` (`Direction`)
- `p_215123_` (`int`)
- `p_215124_` (`int`)

**Returns:** `public void`

### destroyAndAck

```java
public void destroyAndAck(BlockPos p_215117_, int p_215118_, String p_215119_)
```

**Parameters:**

- `p_215117_` (`BlockPos`)
- `p_215118_` (`int`)
- `p_215119_` (`String`)

**Returns:** `public void`

### destroyBlock

```java
public boolean destroyBlock(BlockPos p_9281_)
```

**Parameters:**

- `p_9281_` (`BlockPos`)

**Returns:** `public boolean`

### removeBlock

```java
 removeBlock()
```

**Returns:** ``

### useItem

```java
public InteractionResult useItem(ServerPlayer p_9262_, Level p_9263_, ItemStack p_9264_, InteractionHand p_9265_)
```

**Parameters:**

- `p_9262_` (`ServerPlayer`)
- `p_9263_` (`Level`)
- `p_9264_` (`ItemStack`)
- `p_9265_` (`InteractionHand`)

**Returns:** `public InteractionResult`

### useItemOn

```java
public InteractionResult useItemOn(ServerPlayer p_9266_, Level p_9267_, ItemStack p_9268_, InteractionHand p_9269_, BlockHitResult p_9270_)
```

**Parameters:**

- `p_9266_` (`ServerPlayer`)
- `p_9267_` (`Level`)
- `p_9268_` (`ItemStack`)
- `p_9269_` (`InteractionHand`)
- `p_9270_` (`BlockHitResult`)

**Returns:** `public InteractionResult`

### setLevel

```java
public void setLevel(ServerLevel p_9261_)
```

**Parameters:**

- `p_9261_` (`ServerLevel`)

**Returns:** `public void`
