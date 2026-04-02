# PlayerDataStorage

**Package:** `net.minecraft.world.level.storage`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `fixerUpper` | `DataFixer` |  |

## Methods

### PlayerDataStorage

```java
public PlayerDataStorage(LevelStorageSource.LevelStorageAccess p_78430_, DataFixer p_78431_)
```

**Parameters:**

- `p_78430_` (`LevelStorageSource.LevelStorageAccess`)
- `p_78431_` (`DataFixer`)

**Returns:** `public`

### save

```java
public void save(Player p_78434_)
```

**Parameters:**

- `p_78434_` (`Player`)

**Returns:** `public void`

### backup

```java
private void backup(Player p_316529_, String p_316776_)
```

**Parameters:**

- `p_316529_` (`Player`)
- `p_316776_` (`String`)

**Returns:** `private void`

### load

```java
private Optional<CompoundTag> load(Player p_316534_, String p_316666_)
```

**Parameters:**

- `p_316534_` (`Player`)
- `p_316666_` (`String`)

**Returns:** `private Optional<CompoundTag>`

### load

```java
public Optional<CompoundTag> load(Player p_78436_)
```

**Parameters:**

- `p_78436_` (`Player`)

**Returns:** `public Optional<CompoundTag>`

### getPlayerDir

```java
public File getPlayerDir()
```

**Returns:** `public File`
