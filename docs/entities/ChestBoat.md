# ChestBoat

**Package:** `net.minecraft.world.entity.vehicle`
**Type:** class
**Extends:** `Boat`
**Implements:** `HasCustomInventoryScreen`, `ContainerEntity`

## Methods

### ChestBoat

```java
public ChestBoat(EntityType<? extends Boat> p_219869_, Level p_219870_)
```

**Parameters:**

- `p_219869_` (`EntityType<? extends Boat>`)
- `p_219870_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ChestBoat

```java
public ChestBoat(Level p_219872_, double p_219873_, double p_219874_, double p_219875_)
```

**Parameters:**

- `p_219872_` (`Level`)
- `p_219873_` (`double`)
- `p_219874_` (`double`)
- `p_219875_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getSinglePassengerXOffset

```java
protected float getSinglePassengerXOffset()
```

**Returns:** `float`

### getMaxPassengers

```java
protected int getMaxPassengers()
```

**Returns:** `int`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_219908_)
```

**Parameters:**

- `p_219908_` (`CompoundTag`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_219901_)
```

**Parameters:**

- `p_219901_` (`CompoundTag`)

### destroy

```java
public void destroy(DamageSource p_219892_)
```

**Parameters:**

- `p_219892_` (`DamageSource`)

### remove

```java
public void remove(Entity.RemovalReason p_219894_)
```

**Parameters:**

- `p_219894_` (`Entity.RemovalReason`)

### interact

```java
public InteractionResult interact(Player p_219898_, InteractionHand p_219899_)
```

**Parameters:**

- `p_219898_` (`Player`)
- `p_219899_` (`InteractionHand`)

**Returns:** `InteractionResult`

### openCustomInventoryScreen

```java
public void openCustomInventoryScreen(Player p_219906_)
```

**Parameters:**

- `p_219906_` (`Player`)

### getDropItem

```java
public Item getDropItem()
```

**Returns:** `Item`

### clearContent

```java
public void clearContent()
```

### getContainerSize

```java
public int getContainerSize()
```

**Returns:** `int`

### getItem

```java
public ItemStack getItem(int p_219880_)
```

**Parameters:**

- `p_219880_` (`int`)

**Returns:** `ItemStack`

### removeItem

```java
public ItemStack removeItem(int p_219882_, int p_219883_)
```

**Parameters:**

- `p_219882_` (`int`)
- `p_219883_` (`int`)

**Returns:** `ItemStack`

### removeItemNoUpdate

```java
public ItemStack removeItemNoUpdate(int p_219904_)
```

**Parameters:**

- `p_219904_` (`int`)

**Returns:** `ItemStack`

### setItem

```java
public void setItem(int p_219885_, ItemStack p_219886_)
```

**Parameters:**

- `p_219885_` (`int`)
- `p_219886_` (`ItemStack`)

### getSlot

```java
public SlotAccess getSlot(int p_219918_)
```

**Parameters:**

- `p_219918_` (`int`)

**Returns:** `SlotAccess`

### setChanged

```java
public void setChanged()
```

### stillValid

```java
public boolean stillValid(Player p_219896_)
```

**Parameters:**

- `p_219896_` (`Player`)

**Returns:** `boolean`

### createMenu

```java
public AbstractContainerMenu createMenu(int p_219910_, Inventory p_219911_, Player p_219912_)
```

**Parameters:**

- `p_219910_` (`int`)
- `p_219911_` (`Inventory`)
- `p_219912_` (`Player`)

**Returns:** `AbstractContainerMenu`

### unpackLootTable

```java
public void unpackLootTable(Player p_219914_)
```

**Parameters:**

- `p_219914_` (`Player`)

**Returns:** `public void`

### getLootTable

```java
public ResourceKey<LootTable> getLootTable()
```

**Returns:** `ResourceKey<LootTable>`

### setLootTable

```java
public void setLootTable(ResourceKey<LootTable> p_335715_)
```

**Parameters:**

- `p_335715_` (`ResourceKey<LootTable>`)

### getLootTableSeed

```java
public long getLootTableSeed()
```

**Returns:** `long`

### setLootTableSeed

```java
public void setLootTableSeed(long p_219888_)
```

**Parameters:**

- `p_219888_` (`long`)

### getItemStacks

```java
public NonNullList<ItemStack> getItemStacks()
```

**Returns:** `NonNullList<ItemStack>`

### clearItemStacks

```java
public void clearItemStacks()
```

### stopOpen

```java
public void stopOpen(Player p_270286_)
```

**Parameters:**

- `p_270286_` (`Player`)
