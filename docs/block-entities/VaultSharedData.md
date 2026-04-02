# VaultSharedData

**Package:** `net.minecraft.world.level.block.entity.vault`
**Type:** class

## Methods

### VaultSharedData

```java
 VaultSharedData(ItemStack p_324245_, Set<UUID> p_324007_, double p_324069_)
```

**Parameters:**

- `p_324245_` (`ItemStack`)
- `p_324007_` (`Set<UUID>`)
- `p_324069_` (`double`)

**Returns:** ``

### VaultSharedData

```java
 VaultSharedData()
```

**Returns:** ``

### getDisplayItem

```java
public ItemStack getDisplayItem()
```

**Returns:** `public ItemStack`

### hasDisplayItem

```java
public boolean hasDisplayItem()
```

**Returns:** `public boolean`

### setDisplayItem

```java
public void setDisplayItem(ItemStack p_324243_)
```

**Parameters:**

- `p_324243_` (`ItemStack`)

**Returns:** `public void`

### hasConnectedPlayers

```java
boolean hasConnectedPlayers()
```

**Returns:** `boolean`

### getConnectedPlayers

```java
Set<UUID> getConnectedPlayers()
```

**Returns:** `Set<UUID>`

### connectedParticlesRange

```java
double connectedParticlesRange()
```

**Returns:** `double`

### updateConnectedPlayersWithinRange

```java
void updateConnectedPlayersWithinRange(ServerLevel p_324193_, BlockPos p_324358_, VaultServerData p_324348_, VaultConfig p_324058_, double p_324450_)
```

**Parameters:**

- `p_324193_` (`ServerLevel`)
- `p_324358_` (`BlockPos`)
- `p_324348_` (`VaultServerData`)
- `p_324058_` (`VaultConfig`)
- `p_324450_` (`double`)

### markDirty

```java
private void markDirty()
```

**Returns:** `private void`

### set

```java
void set(VaultSharedData p_324621_)
```

**Parameters:**

- `p_324621_` (`VaultSharedData`)
