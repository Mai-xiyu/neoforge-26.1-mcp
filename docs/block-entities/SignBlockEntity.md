# SignBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`

## Methods

### SignBlockEntity

```java
public SignBlockEntity(BlockPos p_155700_, BlockState p_155701_)
```

**Parameters:**

- `p_155700_` (`BlockPos`)
- `p_155701_` (`BlockState`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### SignBlockEntity

```java
public SignBlockEntity(BlockEntityType p_249609_, BlockPos p_248914_, BlockState p_249550_)
```

**Parameters:**

- `p_249609_` (`BlockEntityType`)
- `p_248914_` (`BlockPos`)
- `p_249550_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createDefaultSignText

```java
protected SignText createDefaultSignText()
```

**Returns:** `protected SignText`

### SignText

```java
return new SignText()
```

**Returns:** `return new`

### isFacingFrontText

```java
public boolean isFacingFrontText(Player p_277382_)
```

**Parameters:**

- `p_277382_` (`Player`)

**Returns:** `public boolean`

### getText

```java
public SignText getText(boolean p_277918_)
```

**Parameters:**

- `p_277918_` (`boolean`)

**Returns:** `public SignText`

### getFrontText

```java
public SignText getFrontText()
```

**Returns:** `public SignText`

### getBackText

```java
public SignText getBackText()
```

**Returns:** `public SignText`

### getTextLineHeight

```java
public int getTextLineHeight()
```

**Returns:** `public int`

### getMaxTextLineWidth

```java
public int getMaxTextLineWidth()
```

**Returns:** `public int`

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187515_, HolderLookup.Provider p_324471_)
```

**Parameters:**

- `p_187515_` (`CompoundTag`)
- `p_324471_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155716_, HolderLookup.Provider p_324351_)
```

**Parameters:**

- `p_155716_` (`CompoundTag`)
- `p_324351_` (`HolderLookup.Provider`)

### loadLines

```java
private SignText loadLines(SignText p_278305_)
```

**Parameters:**

- `p_278305_` (`SignText`)

**Returns:** `private SignText`

### loadLine

```java
private Component loadLine(Component p_278307_)
```

**Parameters:**

- `p_278307_` (`Component`)

**Returns:** `private Component`

### updateSignText

```java
public void updateSignText(Player p_278048_, boolean p_278103_, List<FilteredText> p_277990_)
```

**Parameters:**

- `p_278048_` (`Player`)
- `p_278103_` (`boolean`)
- `p_277990_` (`List<FilteredText>`)

**Returns:** `public void`

### updateText

```java
public boolean updateText(UnaryOperator<SignText> p_277877_, boolean p_277426_)
```

**Parameters:**

- `p_277877_` (`UnaryOperator<SignText>`)
- `p_277426_` (`boolean`)

**Returns:** `public boolean`

### setMessages

```java
private SignText setMessages(Player p_277396_, List<FilteredText> p_277744_, SignText p_277359_)
```

**Parameters:**

- `p_277396_` (`Player`)
- `p_277744_` (`List<FilteredText>`)
- `p_277359_` (`SignText`)

**Returns:** `private SignText`

### setText

```java
public boolean setText(SignText p_277733_, boolean p_277720_)
```

**Parameters:**

- `p_277733_` (`SignText`)
- `p_277720_` (`boolean`)

**Returns:** `public boolean`

### setBackText

```java
private boolean setBackText(SignText p_277777_)
```

**Parameters:**

- `p_277777_` (`SignText`)

**Returns:** `private boolean`

### setFrontText

```java
private boolean setFrontText(SignText p_278038_)
```

**Parameters:**

- `p_278038_` (`SignText`)

**Returns:** `private boolean`

### canExecuteClickCommands

```java
public boolean canExecuteClickCommands(boolean p_278276_, Player p_278240_)
```

**Parameters:**

- `p_278276_` (`boolean`)
- `p_278240_` (`Player`)

**Returns:** `public boolean`

### executeClickCommandsIfPresent

```java
public boolean executeClickCommandsIfPresent(Player p_279304_, Level p_279201_, BlockPos p_278282_, boolean p_278254_)
```

**Parameters:**

- `p_279304_` (`Player`)
- `p_279201_` (`Level`)
- `p_278282_` (`BlockPos`)
- `p_278254_` (`boolean`)

**Returns:** `public boolean`

### createCommandSourceStack

```java
private static CommandSourceStack createCommandSourceStack(Player p_279428_, Level p_279359_, BlockPos p_279430_)
```

**Parameters:**

- `p_279428_` (`Player`)
- `p_279359_` (`Level`)
- `p_279430_` (`BlockPos`)

**Returns:** `private static CommandSourceStack`

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324439_)
```

**Parameters:**

- `p_324439_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### onlyOpCanSetNbt

```java
public boolean onlyOpCanSetNbt()
```

**Returns:** `boolean`

### setAllowedPlayerEditor

```java
public void setAllowedPlayerEditor(UUID p_155714_)
```

**Parameters:**

- `p_155714_` (`UUID`)

**Returns:** `public void`

### getPlayerWhoMayEdit

```java
public UUID getPlayerWhoMayEdit()
```

**Returns:** `UUID`

### markUpdated

```java
private void markUpdated()
```

**Returns:** `private void`

### isWaxed

```java
public boolean isWaxed()
```

**Returns:** `public boolean`

### setWaxed

```java
public boolean setWaxed(boolean p_277344_)
```

**Parameters:**

- `p_277344_` (`boolean`)

**Returns:** `public boolean`

### playerIsTooFarAwayToEdit

```java
public boolean playerIsTooFarAwayToEdit(UUID p_277978_)
```

**Parameters:**

- `p_277978_` (`UUID`)

**Returns:** `public boolean`

### tick

```java
public static void tick(Level p_277662_, BlockPos p_278050_, BlockState p_277927_, SignBlockEntity p_277928_)
```

**Parameters:**

- `p_277662_` (`Level`)
- `p_278050_` (`BlockPos`)
- `p_277927_` (`BlockState`)
- `p_277928_` (`SignBlockEntity`)

**Returns:** `public static void`

### clearInvalidPlayerWhoMayEdit

```java
private void clearInvalidPlayerWhoMayEdit(SignBlockEntity p_277656_, Level p_277853_, UUID p_277849_)
```

**Parameters:**

- `p_277656_` (`SignBlockEntity`)
- `p_277853_` (`Level`)
- `p_277849_` (`UUID`)

**Returns:** `private void`

### getSignInteractionFailedSoundEvent

```java
public SoundEvent getSignInteractionFailedSoundEvent()
```

**Returns:** `public SoundEvent`
