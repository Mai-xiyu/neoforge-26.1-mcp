# SculkShriekerBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `GameEventListener.Provider<VibrationSystem.Listener>`, `VibrationSystem`

## Methods

### SculkShriekerBlockEntity

```java
public SculkShriekerBlockEntity(BlockPos p_222835_, BlockState p_222836_)
```

**Parameters:**

- `p_222835_` (`BlockPos`)
- `p_222836_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getVibrationData

```java
public VibrationSystem.Data getVibrationData()
```

**Returns:** `VibrationSystem.Data`

### getVibrationUser

```java
public VibrationSystem.User getVibrationUser()
```

**Returns:** `VibrationSystem.User`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_222868_, HolderLookup.Provider p_324354_)
```

**Parameters:**

- `p_222868_` (`CompoundTag`)
- `p_324354_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_222878_, HolderLookup.Provider p_324505_)
```

**Parameters:**

- `p_222878_` (`CompoundTag`)
- `p_324505_` (`HolderLookup.Provider`)

### tryGetPlayer

```java
public static ServerPlayer tryGetPlayer(Entity p_222862_)
```

**Parameters:**

- `p_222862_` (`Entity`)

**Returns:** `ServerPlayer`

### tryShriek

```java
public void tryShriek(ServerLevel p_222842_, ServerPlayer p_222843_)
```

**Parameters:**

- `p_222842_` (`ServerLevel`)
- `p_222843_` (`ServerPlayer`)

**Returns:** `public void`

### tryToWarn

```java
private boolean tryToWarn(ServerLevel p_222875_, ServerPlayer p_222876_)
```

**Parameters:**

- `p_222875_` (`ServerLevel`)
- `p_222876_` (`ServerPlayer`)

**Returns:** `private boolean`

### shriek

```java
private void shriek(ServerLevel p_222845_, Entity p_222846_)
```

**Parameters:**

- `p_222845_` (`ServerLevel`)
- `p_222846_` (`Entity`)

**Returns:** `private void`

### canRespond

```java
private boolean canRespond(ServerLevel p_222873_)
```

**Parameters:**

- `p_222873_` (`ServerLevel`)

**Returns:** `private boolean`

### tryRespond

```java
public void tryRespond(ServerLevel p_222840_)
```

**Parameters:**

- `p_222840_` (`ServerLevel`)

**Returns:** `public void`

### playWardenReplySound

```java
private void playWardenReplySound(Level p_281300_)
```

**Parameters:**

- `p_281300_` (`Level`)

**Returns:** `private void`

### trySummonWarden

```java
private boolean trySummonWarden(ServerLevel p_222881_)
```

**Parameters:**

- `p_222881_` (`ServerLevel`)

**Returns:** `private boolean`

### getListener

```java
public VibrationSystem.Listener getListener()
```

**Returns:** `public VibrationSystem.Listener`

### VibrationUser

```java
public VibrationUser()
```

**Returns:** `public`

### getListenerRadius

```java
public int getListenerRadius()
```

**Returns:** `int`

### getPositionSource

```java
public PositionSource getPositionSource()
```

**Returns:** `PositionSource`

### getListenableEvents

```java
public TagKey<GameEvent> getListenableEvents()
```

**Returns:** `TagKey<GameEvent>`

### canReceiveVibration

```java
public boolean canReceiveVibration(ServerLevel p_281256_, BlockPos p_281528_, Holder<GameEvent> p_316788_, GameEvent.Context p_282914_)
```

**Parameters:**

- `p_281256_` (`ServerLevel`)
- `p_281528_` (`BlockPos`)
- `p_316788_` (`Holder<GameEvent>`)
- `p_282914_` (`GameEvent.Context`)

**Returns:** `boolean`

### onReceiveVibration

```java
public void onReceiveVibration(ServerLevel p_283372_, BlockPos p_281679_, Holder<GameEvent> p_316155_, Entity p_282286_, Entity p_281384_, float p_283119_)
```

**Parameters:**

- `p_283372_` (`ServerLevel`)
- `p_281679_` (`BlockPos`)
- `p_316155_` (`Holder<GameEvent>`)
- `p_282286_` (`Entity`)
- `p_281384_` (`Entity`)
- `p_283119_` (`float`)

### onDataChanged

```java
public void onDataChanged()
```

### requiresAdjacentChunksToBeTicking

```java
public boolean requiresAdjacentChunksToBeTicking()
```

**Returns:** `boolean`
