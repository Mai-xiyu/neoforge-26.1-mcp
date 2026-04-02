# TrialSpawnerBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `Spawner`, `TrialSpawner.StateAccessor`

## Methods

### TrialSpawnerBlockEntity

```java
public TrialSpawnerBlockEntity(BlockPos p_312399_, BlockState p_312206_)
```

**Parameters:**

- `p_312399_` (`BlockPos`)
- `p_312206_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338752_, HolderLookup.Provider p_338872_)
```

**Parameters:**

- `p_338752_` (`CompoundTag`)
- `p_338872_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_311806_, HolderLookup.Provider p_324342_)
```

**Parameters:**

- `p_311806_` (`CompoundTag`)
- `p_324342_` (`HolderLookup.Provider`)

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_323524_)
```

**Parameters:**

- `p_323524_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### onlyOpCanSetNbt

```java
public boolean onlyOpCanSetNbt()
```

**Returns:** `boolean`

### setEntityId

```java
public void setEntityId(EntityType<?> p_311807_, RandomSource p_311976_)
```

**Parameters:**

- `p_311807_` (`EntityType<?>`)
- `p_311976_` (`RandomSource`)

### getTrialSpawner

```java
public TrialSpawner getTrialSpawner()
```

**Returns:** `public TrialSpawner`

### getState

```java
public TrialSpawnerState getState()
```

**Returns:** `TrialSpawnerState`

### setState

```java
public void setState(Level p_311786_, TrialSpawnerState p_312721_)
```

**Parameters:**

- `p_311786_` (`Level`)
- `p_312721_` (`TrialSpawnerState`)

### markUpdated

```java
public void markUpdated()
```
