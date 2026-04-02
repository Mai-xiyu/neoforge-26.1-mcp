# MultiPlayerGameMode

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### MultiPlayerGameMode

```java
public MultiPlayerGameMode(Minecraft p_105203_, ClientPacketListener p_105204_)
```

**Parameters:**

- `p_105203_` (`Minecraft`)
- `p_105204_` (`ClientPacketListener`)

**Returns:** `public`

### adjustPlayer

```java
public void adjustPlayer(Player p_105222_)
```

**Parameters:**

- `p_105222_` (`Player`)

**Returns:** `public void`

### setLocalMode

```java
public void setLocalMode(GameType p_171806_, GameType p_171807_)
```

**Parameters:**

- `p_171806_` (`GameType`)
- `p_171807_` (`GameType`)

**Returns:** `public void`

### setLocalMode

```java
public void setLocalMode(GameType p_105280_)
```

**Parameters:**

- `p_105280_` (`GameType`)

**Returns:** `public void`

### canHurtPlayer

```java
public boolean canHurtPlayer()
```

**Returns:** `public boolean`

### destroyBlock

```java
public boolean destroyBlock(BlockPos p_105268_)
```

**Parameters:**

- `p_105268_` (`BlockPos`)

**Returns:** `public boolean`

### startDestroyBlock

```java
public boolean startDestroyBlock(BlockPos p_105270_, Direction p_105271_)
```

**Parameters:**

- `p_105270_` (`BlockPos`)
- `p_105271_` (`Direction`)

**Returns:** `public boolean`

### ServerboundPlayerActionPacket

```java
return new ServerboundPlayerActionPacket()
```

**Returns:** `return new`

### stopDestroyBlock

```java
public void stopDestroyBlock()
```

**Returns:** `public void`

### continueDestroyBlock

```java
public boolean continueDestroyBlock(BlockPos p_105284_, Direction p_105285_)
```

**Parameters:**

- `p_105284_` (`BlockPos`)
- `p_105285_` (`Direction`)

**Returns:** `public boolean`

### ServerboundPlayerActionPacket

```java
return new ServerboundPlayerActionPacket()
```

**Returns:** `return new`

### ServerboundPlayerActionPacket

```java
return new ServerboundPlayerActionPacket()
```

**Returns:** `return new`

### startPrediction

```java
private void startPrediction(ClientLevel p_233730_, PredictiveAction p_233731_)
```

**Parameters:**

- `p_233730_` (`ClientLevel`)
- `p_233731_` (`PredictiveAction`)

**Returns:** `private void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### sameDestroyTarget

```java
private boolean sameDestroyTarget(BlockPos p_105282_)
```

**Parameters:**

- `p_105282_` (`BlockPos`)

**Returns:** `private boolean`

### ensureHasSentCarriedItem

```java
private void ensureHasSentCarriedItem()
```

**Returns:** `private void`

### useItemOn

```java
public InteractionResult useItemOn(LocalPlayer p_233733_, InteractionHand p_233734_, BlockHitResult p_233735_)
```

**Parameters:**

- `p_233733_` (`LocalPlayer`)
- `p_233734_` (`InteractionHand`)
- `p_233735_` (`BlockHitResult`)

**Returns:** `public InteractionResult`

### ServerboundUseItemOnPacket

```java
return new ServerboundUseItemOnPacket()
```

**Returns:** `return new`

### performUseItemOn

```java
private InteractionResult performUseItemOn(LocalPlayer p_233747_, InteractionHand p_233748_, BlockHitResult p_233749_)
```

**Parameters:**

- `p_233747_` (`LocalPlayer`)
- `p_233748_` (`InteractionHand`)
- `p_233749_` (`BlockHitResult`)

**Returns:** `private InteractionResult`

### useItem

```java
public InteractionResult useItem(Player p_233722_, InteractionHand p_233723_)
```

**Parameters:**

- `p_233722_` (`Player`)
- `p_233723_` (`InteractionHand`)

**Returns:** `public InteractionResult`

### createPlayer

```java
public LocalPlayer createPlayer(ClientLevel p_105247_, StatsCounter p_105248_, ClientRecipeBook p_105249_)
```

**Parameters:**

- `p_105247_` (`ClientLevel`)
- `p_105248_` (`StatsCounter`)
- `p_105249_` (`ClientRecipeBook`)

**Returns:** `public LocalPlayer`

### createPlayer

```java
public LocalPlayer createPlayer(ClientLevel p_105251_, StatsCounter p_105252_, ClientRecipeBook p_105253_, boolean p_105254_, boolean p_105255_)
```

**Parameters:**

- `p_105251_` (`ClientLevel`)
- `p_105252_` (`StatsCounter`)
- `p_105253_` (`ClientRecipeBook`)
- `p_105254_` (`boolean`)
- `p_105255_` (`boolean`)

**Returns:** `public LocalPlayer`

### LocalPlayer

```java
return new LocalPlayer()
```

**Returns:** `return new`

### attack

```java
public void attack(Player p_105224_, Entity p_105225_)
```

**Parameters:**

- `p_105224_` (`Player`)
- `p_105225_` (`Entity`)

**Returns:** `public void`

### interact

```java
public InteractionResult interact(Player p_105227_, Entity p_105228_, InteractionHand p_105229_)
```

**Parameters:**

- `p_105227_` (`Player`)
- `p_105228_` (`Entity`)
- `p_105229_` (`InteractionHand`)

**Returns:** `public InteractionResult`

### interactAt

```java
public InteractionResult interactAt(Player p_105231_, Entity p_105232_, EntityHitResult p_105233_, InteractionHand p_105234_)
```

**Parameters:**

- `p_105231_` (`Player`)
- `p_105232_` (`Entity`)
- `p_105233_` (`EntityHitResult`)
- `p_105234_` (`InteractionHand`)

**Returns:** `public InteractionResult`

### handleInventoryMouseClick

```java
public void handleInventoryMouseClick(int p_171800_, int p_171801_, int p_171802_, ClickType p_171803_, Player p_171804_)
```

**Parameters:**

- `p_171800_` (`int`)
- `p_171801_` (`int`)
- `p_171802_` (`int`)
- `p_171803_` (`ClickType`)
- `p_171804_` (`Player`)

**Returns:** `public void`

### handlePlaceRecipe

```java
public void handlePlaceRecipe(int p_105218_, RecipeHolder<?> p_301105_, boolean p_105220_)
```

**Parameters:**

- `p_105218_` (`int`)
- `p_301105_` (`RecipeHolder<?>`)
- `p_105220_` (`boolean`)

**Returns:** `public void`

### handleInventoryButtonClick

```java
public void handleInventoryButtonClick(int p_105209_, int p_105210_)
```

**Parameters:**

- `p_105209_` (`int`)
- `p_105210_` (`int`)

**Returns:** `public void`

### handleCreativeModeItemAdd

```java
public void handleCreativeModeItemAdd(ItemStack p_105242_, int p_105243_)
```

**Parameters:**

- `p_105242_` (`ItemStack`)
- `p_105243_` (`int`)

**Returns:** `public void`

### handleCreativeModeItemDrop

```java
public void handleCreativeModeItemDrop(ItemStack p_105240_)
```

**Parameters:**

- `p_105240_` (`ItemStack`)

**Returns:** `public void`

### releaseUsingItem

```java
public void releaseUsingItem(Player p_105278_)
```

**Parameters:**

- `p_105278_` (`Player`)

**Returns:** `public void`

### hasExperience

```java
public boolean hasExperience()
```

**Returns:** `public boolean`

### hasMissTime

```java
public boolean hasMissTime()
```

**Returns:** `public boolean`

### hasInfiniteItems

```java
public boolean hasInfiniteItems()
```

**Returns:** `public boolean`

### isServerControlledInventory

```java
public boolean isServerControlledInventory()
```

**Returns:** `public boolean`

### isAlwaysFlying

```java
public boolean isAlwaysFlying()
```

**Returns:** `public boolean`

### getPreviousPlayerMode

```java
public GameType getPreviousPlayerMode()
```

**Returns:** `GameType`

### getPlayerMode

```java
public GameType getPlayerMode()
```

**Returns:** `public GameType`

### isDestroying

```java
public boolean isDestroying()
```

**Returns:** `public boolean`

### getDestroyStage

```java
public int getDestroyStage()
```

**Returns:** `public int`

### handlePickItem

```java
public void handlePickItem(int p_105207_)
```

**Parameters:**

- `p_105207_` (`int`)

**Returns:** `public void`

### handleSlotStateChanged

```java
public void handleSlotStateChanged(int p_307527_, int p_307194_, boolean p_307559_)
```

**Parameters:**

- `p_307527_` (`int`)
- `p_307194_` (`int`)
- `p_307559_` (`boolean`)

**Returns:** `public void`
