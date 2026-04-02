# ContainerEntity

**Package:** `net.minecraft.world.entity.vehicle`
**Type:** interface
**Extends:** `Container, MenuProvider`

## Methods

### position

```java
Vec3 position()
```

**Returns:** `Vec3`

### getBoundingBox

```java
AABB getBoundingBox()
```

**Returns:** `AABB`

### getLootTable

```java
ResourceKey<LootTable> getLootTable()
```

**Returns:** `ResourceKey<LootTable>`

### setLootTable

```java
void setLootTable(ResourceKey<LootTable> p_336019_)
```

**Parameters:**

- `p_336019_` (`ResourceKey<LootTable>`)

### getLootTableSeed

```java
long getLootTableSeed()
```

**Returns:** `long`

### setLootTableSeed

```java
void setLootTableSeed(long p_219925_)
```

**Parameters:**

- `p_219925_` (`long`)

### getItemStacks

```java
NonNullList<ItemStack> getItemStacks()
```

**Returns:** `NonNullList<ItemStack>`

### clearItemStacks

```java
void clearItemStacks()
```

### level

```java
Level level()
```

**Returns:** `Level`

### isRemoved

```java
boolean isRemoved()
```

**Returns:** `boolean`

### isEmpty

```java
default boolean isEmpty()
```

**Returns:** `boolean`

### addChestVehicleSaveData

```java
default void addChestVehicleSaveData(CompoundTag p_219944_, HolderLookup.Provider p_332101_)
```

**Parameters:**

- `p_219944_` (`CompoundTag`)
- `p_332101_` (`HolderLookup.Provider`)

**Returns:** `default void`

### readChestVehicleSaveData

```java
default void readChestVehicleSaveData(CompoundTag p_219935_, HolderLookup.Provider p_331073_)
```

**Parameters:**

- `p_219935_` (`CompoundTag`)
- `p_331073_` (`HolderLookup.Provider`)

**Returns:** `default void`

### chestVehicleDestroyed

```java
default void chestVehicleDestroyed(DamageSource p_219928_, Level p_219929_, Entity p_219930_)
```

**Parameters:**

- `p_219928_` (`DamageSource`)
- `p_219929_` (`Level`)
- `p_219930_` (`Entity`)

**Returns:** `default void`

### interactWithContainerVehicle

```java
default InteractionResult interactWithContainerVehicle(Player p_270068_)
```

**Parameters:**

- `p_270068_` (`Player`)

**Returns:** `default InteractionResult`

### unpackChestVehicleLootTable

```java
default void unpackChestVehicleLootTable(Player p_219950_)
```

**Parameters:**

- `p_219950_` (`Player`)

**Returns:** `default void`

### clearChestVehicleContent

```java
default void clearChestVehicleContent()
```

**Returns:** `default void`

### isChestVehicleEmpty

```java
default boolean isChestVehicleEmpty()
```

**Returns:** `default boolean`

### removeChestVehicleItemNoUpdate

```java
default ItemStack removeChestVehicleItemNoUpdate(int p_219946_)
```

**Parameters:**

- `p_219946_` (`int`)

**Returns:** `default ItemStack`

### getChestVehicleItem

```java
default ItemStack getChestVehicleItem(int p_219948_)
```

**Parameters:**

- `p_219948_` (`int`)

**Returns:** `default ItemStack`

### removeChestVehicleItem

```java
default ItemStack removeChestVehicleItem(int p_219937_, int p_219938_)
```

**Parameters:**

- `p_219937_` (`int`)
- `p_219938_` (`int`)

**Returns:** `default ItemStack`

### setChestVehicleItem

```java
default void setChestVehicleItem(int p_219941_, ItemStack p_219942_)
```

**Parameters:**

- `p_219941_` (`int`)
- `p_219942_` (`ItemStack`)

**Returns:** `default void`

### getChestVehicleSlot

```java
default SlotAccess getChestVehicleSlot(int p_219952_)
```

**Parameters:**

- `p_219952_` (`int`)

**Returns:** `default SlotAccess`

### SlotAccess

```java
? new SlotAccess()
```

**Returns:** `? new`

### get

```java
public ItemStack get()
```

**Returns:** `ItemStack`

### set

```java
public boolean set(ItemStack p_219964_)
```

**Parameters:**

- `p_219964_` (`ItemStack`)

**Returns:** `boolean`

### isChestVehicleStillValid

```java
default boolean isChestVehicleStillValid(Player p_219955_)
```

**Parameters:**

- `p_219955_` (`Player`)

**Returns:** `default boolean`
