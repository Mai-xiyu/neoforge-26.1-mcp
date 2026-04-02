# RandomizableContainer

**Package:** `net.minecraft.world`
**Type:** interface
**Extends:** `Container`

## Methods

### getLootTable

```java
ResourceKey<LootTable> getLootTable()
```

**Returns:** `ResourceKey<LootTable>`

### setLootTable

```java
void setLootTable(ResourceKey<LootTable> p_335578_)
```

**Parameters:**

- `p_335578_` (`ResourceKey<LootTable>`)

### setLootTable

```java
default void setLootTable(ResourceKey<LootTable> p_335762_, long p_335967_)
```

**Parameters:**

- `p_335762_` (`ResourceKey<LootTable>`)
- `p_335967_` (`long`)

**Returns:** `default void`

### getLootTableSeed

```java
long getLootTableSeed()
```

**Returns:** `long`

### setLootTableSeed

```java
void setLootTableSeed(long p_309559_)
```

**Parameters:**

- `p_309559_` (`long`)

### getBlockPos

```java
BlockPos getBlockPos()
```

**Returns:** `BlockPos`

### getLevel

```java
Level getLevel()
```

**Returns:** `Level`

### setBlockEntityLootTable

```java
static void setBlockEntityLootTable(BlockGetter p_309623_, RandomSource p_309643_, BlockPos p_309644_, ResourceKey<LootTable> p_335924_)
```

**Parameters:**

- `p_309623_` (`BlockGetter`)
- `p_309643_` (`RandomSource`)
- `p_309644_` (`BlockPos`)
- `p_335924_` (`ResourceKey<LootTable>`)

**Returns:** `static void`

### tryLoadLootTable

```java
default boolean tryLoadLootTable(CompoundTag p_309695_)
```

**Parameters:**

- `p_309695_` (`CompoundTag`)

**Returns:** `default boolean`

### trySaveLootTable

```java
default boolean trySaveLootTable(CompoundTag p_309634_)
```

**Parameters:**

- `p_309634_` (`CompoundTag`)

**Returns:** `default boolean`

### unpackLootTable

```java
default void unpackLootTable(Player p_309628_)
```

**Parameters:**

- `p_309628_` (`Player`)

**Returns:** `default void`
