# SpawnerBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `Spawner`

## Methods

### broadcastEvent

```java
public void broadcastEvent(Level p_155767_, BlockPos p_155768_, int p_155769_)
```

**Parameters:**

- `p_155767_` (`Level`)
- `p_155768_` (`BlockPos`)
- `p_155769_` (`int`)

### setNextSpawnData

```java
public void setNextSpawnData(Level p_155771_, BlockPos p_155772_, SpawnData p_155773_)
```

**Parameters:**

- `p_155771_` (`Level`)
- `p_155772_` (`BlockPos`)
- `p_155773_` (`SpawnData`)

### getOwner

```java
public com.mojang.datafixers.util.Either<net.minecraft.world.level.block.entity.BlockEntity, net.minecraft.world.entity.Entity> getOwner()
```

**Returns:** `com.mojang.datafixers.util.Either<net.minecraft.world.level.block.entity.BlockEntity, net.minecraft.world.entity.Entity>`

### SpawnerBlockEntity

```java
public SpawnerBlockEntity(BlockPos p_155752_, BlockState p_155753_)
```

**Parameters:**

- `p_155752_` (`BlockPos`)
- `p_155753_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338334_, HolderLookup.Provider p_338853_)
```

**Parameters:**

- `p_338334_` (`CompoundTag`)
- `p_338853_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187521_, HolderLookup.Provider p_324509_)
```

**Parameters:**

- `p_187521_` (`CompoundTag`)
- `p_324509_` (`HolderLookup.Provider`)

### clientTick

```java
public static void clientTick(Level p_155755_, BlockPos p_155756_, BlockState p_155757_, SpawnerBlockEntity p_155758_)
```

**Parameters:**

- `p_155755_` (`Level`)
- `p_155756_` (`BlockPos`)
- `p_155757_` (`BlockState`)
- `p_155758_` (`SpawnerBlockEntity`)

**Returns:** `public static void`

### serverTick

```java
public static void serverTick(Level p_155762_, BlockPos p_155763_, BlockState p_155764_, SpawnerBlockEntity p_155765_)
```

**Parameters:**

- `p_155762_` (`Level`)
- `p_155763_` (`BlockPos`)
- `p_155764_` (`BlockState`)
- `p_155765_` (`SpawnerBlockEntity`)

**Returns:** `public static void`

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324015_)
```

**Parameters:**

- `p_324015_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### triggerEvent

```java
public boolean triggerEvent(int p_59797_, int p_59798_)
```

**Parameters:**

- `p_59797_` (`int`)
- `p_59798_` (`int`)

**Returns:** `boolean`

### onlyOpCanSetNbt

```java
public boolean onlyOpCanSetNbt()
```

**Returns:** `boolean`

### setEntityId

```java
public void setEntityId(EntityType<?> p_254530_, RandomSource p_253719_)
```

**Parameters:**

- `p_254530_` (`EntityType<?>`)
- `p_253719_` (`RandomSource`)

### getSpawner

```java
public BaseSpawner getSpawner()
```

**Returns:** `public BaseSpawner`
