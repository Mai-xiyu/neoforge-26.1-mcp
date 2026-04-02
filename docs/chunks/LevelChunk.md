# LevelChunk

**Package:** `net.minecraft.world.level.chunk`
**Type:** class
**Extends:** `ChunkAccess`
**Implements:** `net.neoforged.neoforge.attachment.IAttachmentHolder`

## Methods

### tick

```java
public void tick()
```

### isRemoved

```java
public boolean isRemoved()
```

**Returns:** `boolean`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `BlockPos`

### getType

```java
public String getType()
```

**Returns:** `String`

### LevelChunk

```java
public LevelChunk(Level p_187945_, ChunkPos p_187946_)
```

**Parameters:**

- `p_187945_` (`Level`)
- `p_187946_` (`ChunkPos`)

**Returns:** `public`

### LevelChunk

```java
public LevelChunk(Level p_196854_, ChunkPos p_196855_, UpgradeData p_196856_, LevelChunkTicks<Block> p_196857_, LevelChunkTicks<Fluid> p_196858_, long p_196859_, LevelChunkSection[] p_196860_, LevelChunk.PostLoadProcessor p_196861_, BlendingData p_196862_)
```

**Parameters:**

- `p_196854_` (`Level`)
- `p_196855_` (`ChunkPos`)
- `p_196856_` (`UpgradeData`)
- `p_196857_` (`LevelChunkTicks<Block>`)
- `p_196858_` (`LevelChunkTicks<Fluid>`)
- `p_196859_` (`long`)
- `p_196860_` (`LevelChunkSection[]`)
- `p_196861_` (`LevelChunk.PostLoadProcessor`)
- `p_196862_` (`BlendingData`)

**Returns:** `public`

### LevelChunk

```java
public LevelChunk(ServerLevel p_196850_, ProtoChunk p_196851_, LevelChunk.PostLoadProcessor p_196852_)
```

**Parameters:**

- `p_196850_` (`ServerLevel`)
- `p_196851_` (`ProtoChunk`)
- `p_196852_` (`LevelChunk.PostLoadProcessor`)

**Returns:** `public`

### getBlockTicks

```java
public TickContainerAccess<Block> getBlockTicks()
```

**Returns:** `TickContainerAccess<Block>`

### getFluidTicks

```java
public TickContainerAccess<Fluid> getFluidTicks()
```

**Returns:** `TickContainerAccess<Fluid>`

### getTicksForSerialization

```java
public ChunkAccess.TicksToSave getTicksForSerialization()
```

**Returns:** `ChunkAccess.TicksToSave`

### getListenerRegistry

```java
public GameEventListenerRegistry getListenerRegistry(int p_251193_)
```

**Parameters:**

- `p_251193_` (`int`)

**Returns:** `GameEventListenerRegistry`

### getBlockState

```java
public BlockState getBlockState(BlockPos p_62923_)
```

**Parameters:**

- `p_62923_` (`BlockPos`)

**Returns:** `BlockState`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### getFluidState

```java
public FluidState getFluidState(BlockPos p_62895_)
```

**Parameters:**

- `p_62895_` (`BlockPos`)

**Returns:** `FluidState`

### getFluidState

```java
public FluidState getFluidState(int p_62815_, int p_62816_, int p_62817_)
```

**Parameters:**

- `p_62815_` (`int`)
- `p_62816_` (`int`)
- `p_62817_` (`int`)

**Returns:** `public FluidState`

### ReportedException

```java
throw new ReportedException()
```

**Returns:** `throw new`

### setBlockState

```java
public BlockState setBlockState(BlockPos p_62865_, BlockState p_62866_, boolean p_62867_)
```

**Parameters:**

- `p_62865_` (`BlockPos`)
- `p_62866_` (`BlockState`)
- `p_62867_` (`boolean`)

**Returns:** `BlockState`

### addEntity

```java
public void addEntity(Entity p_62826_)
```

**Parameters:**

- `p_62826_` (`Entity`)

### getBlockEntity

```java
public BlockEntity getBlockEntity(BlockPos p_62912_)
```

**Parameters:**

- `p_62912_` (`BlockPos`)

**Returns:** `BlockEntity`

### getBlockEntity

```java
public BlockEntity getBlockEntity(BlockPos p_62868_, LevelChunk.EntityCreationType p_62869_)
```

**Parameters:**

- `p_62868_` (`BlockPos`)
- `p_62869_` (`LevelChunk.EntityCreationType`)

**Returns:** `BlockEntity`

### addAndRegisterBlockEntity

```java
public void addAndRegisterBlockEntity(BlockEntity p_156391_)
```

**Parameters:**

- `p_156391_` (`BlockEntity`)

**Returns:** `public void`

### isInLevel

```java
private boolean isInLevel()
```

**Returns:** `private boolean`

### isTicking

```java
boolean isTicking(BlockPos p_156411_)
```

**Parameters:**

- `p_156411_` (`BlockPos`)

**Returns:** `boolean`

### setBlockEntity

```java
public void setBlockEntity(BlockEntity p_156374_)
```

**Parameters:**

- `p_156374_` (`BlockEntity`)

### getBlockEntityNbtForSaving

```java
public CompoundTag getBlockEntityNbtForSaving(BlockPos p_62932_, HolderLookup.Provider p_323699_)
```

**Parameters:**

- `p_62932_` (`BlockPos`)
- `p_323699_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### removeBlockEntity

```java
public void removeBlockEntity(BlockPos p_62919_)
```

**Parameters:**

- `p_62919_` (`BlockPos`)

### removeGameEventListener

```java
<T extends BlockEntity> private <T extends BlockEntity> void removeGameEventListener(T p_223413_, ServerLevel p_223414_)
```

**Parameters:**

- `p_223413_` (`T`)
- `p_223414_` (`ServerLevel`)

**Returns:** `private <T extends BlockEntity> void`

### removeGameEventListenerRegistry

```java
private void removeGameEventListenerRegistry(int p_283355_)
```

**Parameters:**

- `p_283355_` (`int`)

**Returns:** `private void`

### removeBlockEntityTicker

```java
private void removeBlockEntityTicker(BlockPos p_156413_)
```

**Parameters:**

- `p_156413_` (`BlockPos`)

**Returns:** `private void`

### runPostLoad

```java
public void runPostLoad()
```

**Returns:** `public void`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### replaceWithPacketData

```java
public void replaceWithPacketData(FriendlyByteBuf p_187972_, CompoundTag p_187973_, Consumer<ClientboundLevelChunkPacketData.BlockEntityTagOutput> p_187974_)
```

**Parameters:**

- `p_187972_` (`FriendlyByteBuf`)
- `p_187973_` (`CompoundTag`)
- `p_187974_` (`Consumer<ClientboundLevelChunkPacketData.BlockEntityTagOutput>`)

**Returns:** `public void`

### replaceBiomes

```java
public void replaceBiomes(FriendlyByteBuf p_275574_)
```

**Parameters:**

- `p_275574_` (`FriendlyByteBuf`)

**Returns:** `public void`

### setLoaded

```java
public void setLoaded(boolean p_62914_)
```

**Parameters:**

- `p_62914_` (`boolean`)

**Returns:** `public void`

### getLevel

```java
public Level getLevel()
```

**Returns:** `public Level`

### getBlockEntities

```java
public Map<BlockPos, BlockEntity> getBlockEntities()
```

**Returns:** `public Map<BlockPos, BlockEntity>`

### postProcessGeneration

```java
public void postProcessGeneration()
```

**Returns:** `public void`

### unpackTicks

```java
public void unpackTicks(long p_187986_)
```

**Parameters:**

- `p_187986_` (`long`)

**Returns:** `public void`

### registerTickContainerInLevel

```java
public void registerTickContainerInLevel(ServerLevel p_187959_)
```

**Parameters:**

- `p_187959_` (`ServerLevel`)

**Returns:** `public void`

### unregisterTickContainerFromLevel

```java
public void unregisterTickContainerFromLevel(ServerLevel p_187980_)
```

**Parameters:**

- `p_187980_` (`ServerLevel`)

**Returns:** `public void`

### getPersistedStatus

```java
public ChunkStatus getPersistedStatus()
```

**Returns:** `ChunkStatus`

### getFullStatus

```java
public FullChunkStatus getFullStatus()
```

**Returns:** `public FullChunkStatus`

### setFullStatus

```java
public void setFullStatus(Supplier<FullChunkStatus> p_62880_)
```

**Parameters:**

- `p_62880_` (`Supplier<FullChunkStatus>`)

**Returns:** `public void`

### clearAllBlockEntities

```java
public void clearAllBlockEntities()
```

**Returns:** `public void`

### registerAllBlockEntitiesAfterLevelLoad

```java
public void registerAllBlockEntitiesAfterLevelLoad()
```

**Returns:** `public void`

### addGameEventListener

```java
<T extends BlockEntity> private <T extends BlockEntity> void addGameEventListener(T p_223416_, ServerLevel p_223417_)
```

**Parameters:**

- `p_223416_` (`T`)
- `p_223417_` (`ServerLevel`)

**Returns:** `private <T extends BlockEntity> void`

### updateBlockEntityTicker

```java
<T extends BlockEntity> private <T extends BlockEntity> void updateBlockEntityTicker(T p_156407_)
```

**Parameters:**

- `p_156407_` (`T`)

**Returns:** `private <T extends BlockEntity> void`

### createTicker

```java
<T extends BlockEntity> private <T extends BlockEntity> TickingBlockEntity createTicker(T p_156376_, BlockEntityTicker<T> p_156377_)
```

**Parameters:**

- `p_156376_` (`T`)
- `p_156377_` (`BlockEntityTicker<T>`)

**Returns:** `private <T extends BlockEntity> TickingBlockEntity`

### getAuxLightManager

```java
public net.neoforged.neoforge.common.world.LevelChunkAuxiliaryLightManager getAuxLightManager(ChunkPos pos)
```

**Parameters:**

- `pos` (`ChunkPos`)

**Returns:** `net.neoforged.neoforge.common.world.LevelChunkAuxiliaryLightManager`

### BoundTickingBlockEntity

```java
 BoundTickingBlockEntity(T p_156433_, BlockEntityTicker<T> p_156434_)
```

**Parameters:**

- `p_156433_` (`T`)
- `p_156434_` (`BlockEntityTicker<T>`)

**Returns:** ``

### tick

```java
public void tick()
```

### ReportedException

```java
else
                        throw new ReportedException()
```

**Returns:** `else
                        throw new`

### isRemoved

```java
public boolean isRemoved()
```

**Returns:** `boolean`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `BlockPos`

### getType

```java
public String getType()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

### run

```java
void run(LevelChunk p_196867_)
```

**Parameters:**

- `p_196867_` (`LevelChunk`)

### RebindableTickingBlockEntityWrapper

```java
 RebindableTickingBlockEntityWrapper(TickingBlockEntity p_156447_)
```

**Parameters:**

- `p_156447_` (`TickingBlockEntity`)

**Returns:** ``

### rebind

```java
void rebind(TickingBlockEntity p_156450_)
```

**Parameters:**

- `p_156450_` (`TickingBlockEntity`)

### tick

```java
public void tick()
```

### isRemoved

```java
public boolean isRemoved()
```

**Returns:** `boolean`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `BlockPos`

### getType

```java
public String getType()
```

**Returns:** `String`

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `EntityCreationType` | enum |  |
| `PostLoadProcessor` | interface |  |
