# InventoryCarrier

**Package:** `net.minecraft.world.entity.npc`
**Type:** interface

## Methods

### getInventory

```java
SimpleContainer getInventory()
```

**Returns:** `SimpleContainer`

### pickUpItem

```java
static void pickUpItem(Mob p_219612_, InventoryCarrier p_219613_, ItemEntity p_219614_)
```

**Parameters:**

- `p_219612_` (`Mob`)
- `p_219613_` (`InventoryCarrier`)
- `p_219614_` (`ItemEntity`)

**Returns:** `static void`

### readInventoryFromTag

```java
default void readInventoryFromTag(CompoundTag p_253699_, HolderLookup.Provider p_330390_)
```

**Parameters:**

- `p_253699_` (`CompoundTag`)
- `p_330390_` (`HolderLookup.Provider`)

**Returns:** `default void`

### writeInventoryToTag

```java
default void writeInventoryToTag(CompoundTag p_254428_, HolderLookup.Provider p_331103_)
```

**Parameters:**

- `p_254428_` (`CompoundTag`)
- `p_331103_` (`HolderLookup.Provider`)

**Returns:** `default void`
