# IBlockEntityExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface

## Methods

### self

```java
private BlockEntity self()
```

**Returns:** `private BlockEntity`

### onDataPacket

```java
default void onDataPacket(Connection net, ClientboundBlockEntityDataPacket pkt, HolderLookup.Provider lookupProvider)
```

**Parameters:**

- `net` (`Connection`)
- `pkt` (`ClientboundBlockEntityDataPacket`)
- `lookupProvider` (`HolderLookup.Provider`)

### handleUpdateTag

```java
default void handleUpdateTag(CompoundTag tag, HolderLookup.Provider lookupProvider)
```

**Parameters:**

- `tag` (`CompoundTag`)
- `lookupProvider` (`HolderLookup.Provider`)

### getPersistentData

```java
CompoundTag getPersistentData()
```

**Returns:** `CompoundTag`

### onChunkUnloaded

```java
default void onChunkUnloaded()
```

**Returns:** `default void`

### onLoad

```java
default void onLoad()
```

### requestModelDataUpdate

```java
 requestModelDataUpdate()
```

**Returns:** ``

### requestModelDataUpdate

```java
default void requestModelDataUpdate()
```

### getModelData

```java
default ModelData getModelData()
```

**Returns:** `ModelData`

### hasCustomOutlineRendering

```java
default boolean hasCustomOutlineRendering(Player player)
```

**Parameters:**

- `player` (`Player`)

**Returns:** `boolean`

### invalidateCapabilities

```java
.NonExtendable
    default void invalidateCapabilities()
```

**Returns:** `.NonExtendable
    default void`
