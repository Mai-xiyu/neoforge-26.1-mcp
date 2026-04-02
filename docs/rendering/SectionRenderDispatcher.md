# SectionRenderDispatcher

**Package:** `net.minecraft.client.renderer.chunk`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SectionRenderDispatcher

```java
public SectionRenderDispatcher(ClientLevel p_295274_, LevelRenderer p_295323_, Executor p_295234_, RenderBuffers p_307511_, BlockRenderDispatcher p_350514_, BlockEntityRenderDispatcher p_350550_)
```

**Parameters:**

- `p_295274_` (`ClientLevel`)
- `p_295323_` (`LevelRenderer`)
- `p_295234_` (`Executor`)
- `p_307511_` (`RenderBuffers`)
- `p_350514_` (`BlockRenderDispatcher`)
- `p_350550_` (`BlockEntityRenderDispatcher`)

**Returns:** `public`

### setLevel

```java
public void setLevel(ClientLevel p_295112_)
```

**Parameters:**

- `p_295112_` (`ClientLevel`)

**Returns:** `public void`

### runTask

```java
private void runTask()
```

**Returns:** `private void`

### getStats

```java
public String getStats()
```

**Returns:** `public String`

### getToBatchCount

```java
public int getToBatchCount()
```

**Returns:** `public int`

### getToUpload

```java
public int getToUpload()
```

**Returns:** `public int`

### getFreeBufferCount

```java
public int getFreeBufferCount()
```

**Returns:** `public int`

### setCamera

```java
public void setCamera(Vec3 p_296331_)
```

**Parameters:**

- `p_296331_` (`Vec3`)

**Returns:** `public void`

### getCameraPosition

```java
public Vec3 getCameraPosition()
```

**Returns:** `public Vec3`

### uploadAllPendingUploads

```java
public void uploadAllPendingUploads()
```

**Returns:** `public void`

### rebuildSectionSync

```java
public void rebuildSectionSync(SectionRenderDispatcher.RenderSection p_296309_, RenderRegionCache p_294139_)
```

**Parameters:**

- `p_296309_` (`SectionRenderDispatcher.RenderSection`)
- `p_294139_` (`RenderRegionCache`)

**Returns:** `public void`

### blockUntilClear

```java
public void blockUntilClear()
```

**Returns:** `public void`

### schedule

```java
public void schedule(SectionRenderDispatcher.RenderSection.CompileTask p_295825_)
```

**Parameters:**

- `p_295825_` (`SectionRenderDispatcher.RenderSection.CompileTask`)

**Returns:** `public void`

### uploadSectionLayer

```java
public CompletableFuture<Void> uploadSectionLayer(MeshData p_350732_, VertexBuffer p_294163_)
```

**Parameters:**

- `p_350732_` (`MeshData`)
- `p_294163_` (`VertexBuffer`)

**Returns:** `public CompletableFuture<Void>`

### uploadSectionIndexBuffer

```java
public CompletableFuture<Void> uploadSectionIndexBuffer(ByteBufferBuilder.Result p_350933_, VertexBuffer p_350643_)
```

**Parameters:**

- `p_350933_` (`ByteBufferBuilder.Result`)
- `p_350643_` (`VertexBuffer`)

**Returns:** `public CompletableFuture<Void>`

### clearBatchQueue

```java
private void clearBatchQueue()
```

**Returns:** `private void`

### isQueueEmpty

```java
public boolean isQueueEmpty()
```

**Returns:** `public boolean`

### dispose

```java
public void dispose()
```

**Returns:** `public void`

### facesCanSeeEachother

```java
public boolean facesCanSeeEachother(Direction p_296238_, Direction p_294727_)
```

**Parameters:**

- `p_296238_` (`Direction`)
- `p_294727_` (`Direction`)

**Returns:** `boolean`

### facesCanSeeEachother

```java
public boolean facesCanSeeEachother(Direction p_351039_, Direction p_350415_)
```

**Parameters:**

- `p_351039_` (`Direction`)
- `p_350415_` (`Direction`)

**Returns:** `boolean`

### hasNoRenderableLayers

```java
public boolean hasNoRenderableLayers()
```

**Returns:** `public boolean`

### isEmpty

```java
public boolean isEmpty(RenderType p_296192_)
```

**Parameters:**

- `p_296192_` (`RenderType`)

**Returns:** `public boolean`

### getRenderableBlockEntities

```java
public List<BlockEntity> getRenderableBlockEntities()
```

**Returns:** `public List<BlockEntity>`

### facesCanSeeEachother

```java
public boolean facesCanSeeEachother(Direction p_295753_, Direction p_294424_)
```

**Parameters:**

- `p_295753_` (`Direction`)
- `p_294424_` (`Direction`)

**Returns:** `public boolean`

### RenderSection

```java
public RenderSection(int p_295197_, int p_295159_, int p_294506_, int p_294392_)
```

**Parameters:**

- `p_295197_` (`int`)
- `p_295159_` (`int`)
- `p_294506_` (`int`)
- `p_294392_` (`int`)

**Returns:** `public`

### doesChunkExistAt

```java
private boolean doesChunkExistAt(BlockPos p_295253_)
```

**Parameters:**

- `p_295253_` (`BlockPos`)

**Returns:** `private boolean`

### hasAllNeighbors

```java
public boolean hasAllNeighbors()
```

**Returns:** `public boolean`

### getBoundingBox

```java
public AABB getBoundingBox()
```

**Returns:** `public AABB`

### getBuffer

```java
public VertexBuffer getBuffer(RenderType p_294497_)
```

**Parameters:**

- `p_294497_` (`RenderType`)

**Returns:** `public VertexBuffer`

### setOrigin

```java
public void setOrigin(int p_294148_, int p_295137_, int p_295706_)
```

**Parameters:**

- `p_294148_` (`int`)
- `p_295137_` (`int`)
- `p_295706_` (`int`)

**Returns:** `public void`

### getDistToPlayerSqr

```java
protected double getDistToPlayerSqr()
```

**Returns:** `protected double`

### getCompiled

```java
public SectionRenderDispatcher.CompiledSection getCompiled()
```

**Returns:** `public SectionRenderDispatcher.CompiledSection`

### reset

```java
private void reset()
```

**Returns:** `private void`

### releaseBuffers

```java
public void releaseBuffers()
```

**Returns:** `public void`

### getOrigin

```java
public BlockPos getOrigin()
```

**Returns:** `public BlockPos`

### setDirty

```java
public void setDirty(boolean p_295417_)
```

**Parameters:**

- `p_295417_` (`boolean`)

**Returns:** `public void`

### setNotDirty

```java
public void setNotDirty()
```

**Returns:** `public void`

### isDirty

```java
public boolean isDirty()
```

**Returns:** `public boolean`

### isDirtyFromPlayer

```java
public boolean isDirtyFromPlayer()
```

**Returns:** `public boolean`

### getRelativeOrigin

```java
public BlockPos getRelativeOrigin(Direction p_296100_)
```

**Parameters:**

- `p_296100_` (`Direction`)

**Returns:** `public BlockPos`

### resortTransparency

```java
public boolean resortTransparency(RenderType p_295679_, SectionRenderDispatcher p_294363_)
```

**Parameters:**

- `p_295679_` (`RenderType`)
- `p_294363_` (`SectionRenderDispatcher`)

**Returns:** `public boolean`

### cancelTasks

```java
protected boolean cancelTasks()
```

**Returns:** `protected boolean`

### createCompileTask

```java
public SectionRenderDispatcher.RenderSection.CompileTask createCompileTask(RenderRegionCache p_295324_)
```

**Parameters:**

- `p_295324_` (`RenderRegionCache`)

**Returns:** `public SectionRenderDispatcher.RenderSection.CompileTask`

### rebuildSectionAsync

```java
public void rebuildSectionAsync(SectionRenderDispatcher p_295901_, RenderRegionCache p_294660_)
```

**Parameters:**

- `p_295901_` (`SectionRenderDispatcher`)
- `p_294660_` (`RenderRegionCache`)

**Returns:** `public void`

### updateGlobalBlockEntities

```java
void updateGlobalBlockEntities(Collection<BlockEntity> p_296155_)
```

**Parameters:**

- `p_296155_` (`Collection<BlockEntity>`)

### synchronized

```java
 synchronized()
```

**Returns:** ``

### compileSync

```java
public void compileSync(RenderRegionCache p_296018_)
```

**Parameters:**

- `p_296018_` (`RenderRegionCache`)

**Returns:** `public void`

### isAxisAlignedWith

```java
public boolean isAxisAlignedWith(int p_295743_, int p_295344_, int p_295518_)
```

**Parameters:**

- `p_295743_` (`int`)
- `p_295344_` (`int`)
- `p_295518_` (`int`)

**Returns:** `public boolean`

### setCompiled

```java
void setCompiled(SectionRenderDispatcher.CompiledSection p_350692_)
```

**Parameters:**

- `p_350692_` (`SectionRenderDispatcher.CompiledSection`)

### createVertexSorting

```java
VertexSorting createVertexSorting()
```

**Returns:** `VertexSorting`

### CompileTask

```java
public CompileTask(double p_294428_, boolean p_295051_)
```

**Parameters:**

- `p_294428_` (`double`)
- `p_295051_` (`boolean`)

**Returns:** `public`

### doTask

```java
public abstract CompletableFuture<SectionRenderDispatcher.SectionTaskResult> doTask(SectionBufferBuilderPack p_294622_)
```

**Parameters:**

- `p_294622_` (`SectionBufferBuilderPack`)

**Returns:** `public abstract CompletableFuture<SectionRenderDispatcher.SectionTaskResult>`

### cancel

```java
public abstract void cancel()
```

**Returns:** `public abstract void`

### name

```java
protected abstract String name()
```

**Returns:** `protected abstract String`

### compareTo

```java
public int compareTo(SectionRenderDispatcher.RenderSection.CompileTask p_296186_)
```

**Parameters:**

- `p_296186_` (`SectionRenderDispatcher.RenderSection.CompileTask`)

**Returns:** `public int`

### RebuildTask

```java
public public RebuildTask(double p_294400_, RenderChunkRegion p_294382_, boolean p_295207_)
```

**Parameters:**

- `p_294400_` (`double`)
- `p_294382_` (`RenderChunkRegion`)
- `p_295207_` (`boolean`)

**Returns:** `public`

### RebuildTask

```java
public RebuildTask(double p_294400_, RenderChunkRegion p_294382_, boolean p_295207_, List<net.neoforged.neoforge.client.event.AddSectionGeometryEvent.AdditionalSectionRenderer> additionalRenderers)
```

**Parameters:**

- `p_294400_` (`double`)
- `p_294382_` (`RenderChunkRegion`)
- `p_295207_` (`boolean`)
- `additionalRenderers` (`List<net.neoforged.neoforge.client.event.AddSectionGeometryEvent.AdditionalSectionRenderer>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### name

```java
protected String name()
```

**Returns:** `String`

### doTask

```java
public CompletableFuture<SectionRenderDispatcher.SectionTaskResult> doTask(SectionBufferBuilderPack p_296138_)
```

**Parameters:**

- `p_296138_` (`SectionBufferBuilderPack`)

**Returns:** `CompletableFuture<SectionRenderDispatcher.SectionTaskResult>`

### cancel

```java
public void cancel()
```

### ResortTransparencyTask

```java
public ResortTransparencyTask(double p_294102_, SectionRenderDispatcher.CompiledSection p_294601_)
```

**Parameters:**

- `p_294102_` (`double`)
- `p_294601_` (`SectionRenderDispatcher.CompiledSection`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### name

```java
protected String name()
```

**Returns:** `String`

### doTask

```java
public CompletableFuture<SectionRenderDispatcher.SectionTaskResult> doTask(SectionBufferBuilderPack p_295160_)
```

**Parameters:**

- `p_295160_` (`SectionBufferBuilderPack`)

**Returns:** `CompletableFuture<SectionRenderDispatcher.SectionTaskResult>`

### cancel

```java
public void cancel()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CompiledSection` | class |  |
| `RenderSection` | class |  |
