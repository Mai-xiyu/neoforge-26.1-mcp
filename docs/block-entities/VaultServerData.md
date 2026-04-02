# VaultServerData

**Package:** `net.minecraft.world.level.block.entity.vault`
**Type:** class

## Methods

### VaultServerData

```java
 VaultServerData(Set<UUID> p_324455_, long p_324396_, List<ItemStack> p_324515_, int p_324586_)
```

**Parameters:**

- `p_324455_` (`Set<UUID>`)
- `p_324396_` (`long`)
- `p_324515_` (`List<ItemStack>`)
- `p_324586_` (`int`)

**Returns:** ``

### VaultServerData

```java
 VaultServerData()
```

**Returns:** ``

### setLastInsertFailTimestamp

```java
void setLastInsertFailTimestamp(long p_324469_)
```

**Parameters:**

- `p_324469_` (`long`)

### getLastInsertFailTimestamp

```java
long getLastInsertFailTimestamp()
```

**Returns:** `long`

### getRewardedPlayers

```java
Set<UUID> getRewardedPlayers()
```

**Returns:** `Set<UUID>`

### hasRewardedPlayer

```java
boolean hasRewardedPlayer(Player p_324533_)
```

**Parameters:**

- `p_324533_` (`Player`)

**Returns:** `boolean`

### addToRewardedPlayers

```java
public void addToRewardedPlayers(Player p_323713_)
```

**Parameters:**

- `p_323713_` (`Player`)

### stateUpdatingResumesAt

```java
long stateUpdatingResumesAt()
```

**Returns:** `long`

### pauseStateUpdatingUntil

```java
void pauseStateUpdatingUntil(long p_323478_)
```

**Parameters:**

- `p_323478_` (`long`)

### getItemsToEject

```java
List<ItemStack> getItemsToEject()
```

**Returns:** `List<ItemStack>`

### markEjectionFinished

```java
void markEjectionFinished()
```

### setItemsToEject

```java
void setItemsToEject(List<ItemStack> p_324402_)
```

**Parameters:**

- `p_324402_` (`List<ItemStack>`)

### getNextItemToEject

```java
ItemStack getNextItemToEject()
```

**Returns:** `ItemStack`

### popNextItemToEject

```java
ItemStack popNextItemToEject()
```

**Returns:** `ItemStack`

### set

```java
void set(VaultServerData p_323643_)
```

**Parameters:**

- `p_323643_` (`VaultServerData`)

### markChanged

```java
private void markChanged()
```

**Returns:** `private void`

### ejectionProgress

```java
public float ejectionProgress()
```

**Returns:** `public float`
