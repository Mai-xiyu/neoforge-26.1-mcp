# BrushableBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`

## Methods

### BrushableBlockEntity

```java
public BrushableBlockEntity(BlockPos p_277558_, BlockState p_278093_)
```

**Parameters:**

- `p_277558_` (`BlockPos`)
- `p_278093_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### brush

```java
public boolean brush(long p_277786_, Player p_277520_, Direction p_277424_)
```

**Parameters:**

- `p_277786_` (`long`)
- `p_277520_` (`Player`)
- `p_277424_` (`Direction`)

**Returns:** `public boolean`

### unpackLootTable

```java
public void unpackLootTable(Player p_277940_)
```

**Parameters:**

- `p_277940_` (`Player`)

**Returns:** `public void`

### brushingCompleted

```java
private void brushingCompleted(Player p_277549_)
```

**Parameters:**

- `p_277549_` (`Player`)

**Returns:** `private void`

### dropContent

```java
private void dropContent(Player p_278006_)
```

**Parameters:**

- `p_278006_` (`Player`)

**Returns:** `private void`

### checkReset

```java
public void checkReset()
```

**Returns:** `public void`

### tryLoadLootTable

```java
private boolean tryLoadLootTable(CompoundTag p_277740_)
```

**Parameters:**

- `p_277740_` (`CompoundTag`)

**Returns:** `private boolean`

### trySaveLootTable

```java
private boolean trySaveLootTable(CompoundTag p_277591_)
```

**Parameters:**

- `p_277591_` (`CompoundTag`)

**Returns:** `private boolean`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_323531_)
```

**Parameters:**

- `p_323531_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338786_, HolderLookup.Provider p_338480_)
```

**Parameters:**

- `p_338786_` (`CompoundTag`)
- `p_338480_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_277339_, HolderLookup.Provider p_323885_)
```

**Parameters:**

- `p_277339_` (`CompoundTag`)
- `p_323885_` (`HolderLookup.Provider`)

### setLootTable

```java
public void setLootTable(ResourceKey<LootTable> p_335433_, long p_277991_)
```

**Parameters:**

- `p_335433_` (`ResourceKey<LootTable>`)
- `p_277991_` (`long`)

**Returns:** `public void`

### getCompletionState

```java
private int getCompletionState()
```

**Returns:** `private int`

### getHitDirection

```java
public Direction getHitDirection()
```

**Returns:** `Direction`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `public ItemStack`
