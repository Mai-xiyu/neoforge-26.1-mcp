# DecoratedPotBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `RandomizableContainer`, `ContainerSingleItem.BlockContainerSingleItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TAG_SHERDS` | `String` |  |
| `TAG_ITEM` | `String` |  |
| `EVENT_POT_WOBBLES` | `int` |  |
| `wobbleStartedAtTick` | `long` |  |
| `lootTableSeed` | `long` |  |

## Methods

### DecoratedPotBlockEntity

```java
public DecoratedPotBlockEntity(BlockPos p_273660_, BlockState p_272831_)
```

**Parameters:**

- `p_273660_` (`BlockPos`)
- `p_272831_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_272957_, HolderLookup.Provider p_323719_)
```

**Parameters:**

- `p_272957_` (`CompoundTag`)
- `p_323719_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338486_, HolderLookup.Provider p_338310_)
```

**Parameters:**

- `p_338486_` (`CompoundTag`)
- `p_338310_` (`HolderLookup.Provider`)

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324359_)
```

**Parameters:**

- `p_324359_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### getDirection

```java
public Direction getDirection()
```

**Returns:** `public Direction`

### getDecorations

```java
public PotDecorations getDecorations()
```

**Returns:** `public PotDecorations`

### setFromItem

```java
public void setFromItem(ItemStack p_273109_)
```

**Parameters:**

- `p_273109_` (`ItemStack`)

**Returns:** `public void`

### getPotAsItem

```java
public ItemStack getPotAsItem()
```

**Returns:** `public ItemStack`

### createDecoratedPotItem

```java
public static ItemStack createDecoratedPotItem(PotDecorations p_330827_)
```

**Parameters:**

- `p_330827_` (`PotDecorations`)

**Returns:** `public static ItemStack`

### getLootTable

```java
public ResourceKey<LootTable> getLootTable()
```

**Returns:** `ResourceKey<LootTable>`

### setLootTable

```java
public void setLootTable(ResourceKey<LootTable> p_336080_)
```

**Parameters:**

- `p_336080_` (`ResourceKey<LootTable>`)

### getLootTableSeed

```java
public long getLootTableSeed()
```

**Returns:** `long`

### setLootTableSeed

```java
public void setLootTableSeed(long p_309580_)
```

**Parameters:**

- `p_309580_` (`long`)

### collectImplicitComponents

```java
protected void collectImplicitComponents(DataComponentMap.Builder p_338608_)
```

**Parameters:**

- `p_338608_` (`DataComponentMap.Builder`)

### applyImplicitComponents

```java
protected void applyImplicitComponents(BlockEntity.DataComponentInput p_338521_)
```

**Parameters:**

- `p_338521_` (`BlockEntity.DataComponentInput`)

### removeComponentsFromTag

```java
public void removeComponentsFromTag(CompoundTag p_330569_)
```

**Parameters:**

- `p_330569_` (`CompoundTag`)

### getTheItem

```java
public ItemStack getTheItem()
```

**Returns:** `ItemStack`

### splitTheItem

```java
public ItemStack splitTheItem(int p_305991_)
```

**Parameters:**

- `p_305991_` (`int`)

**Returns:** `ItemStack`

### setTheItem

```java
public void setTheItem(ItemStack p_305817_)
```

**Parameters:**

- `p_305817_` (`ItemStack`)

### getContainerBlockEntity

```java
public BlockEntity getContainerBlockEntity()
```

**Returns:** `BlockEntity`

### wobble

```java
public void wobble(DecoratedPotBlockEntity.WobbleStyle p_305984_)
```

**Parameters:**

- `p_305984_` (`DecoratedPotBlockEntity.WobbleStyle`)

**Returns:** `public void`

### triggerEvent

```java
public boolean triggerEvent(int p_306146_, int p_305858_)
```

**Parameters:**

- `p_306146_` (`int`)
- `p_305858_` (`int`)

**Returns:** `boolean`

### NEGATIVE

```java
, NEGATIVE()
```

**Returns:** `,`

### WobbleStyle

```java
private WobbleStyle(int p_305780_)
```

**Parameters:**

- `p_305780_` (`int`)

**Returns:** `private`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `WobbleStyle` | enum |  |
