# SectionOcclusionGraph

**Package:** `net.minecraft.client.renderer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### waitAndReset

```java
public void waitAndReset(ViewArea p_294431_)
```

**Parameters:**

- `p_294431_` (`ViewArea`)

**Returns:** `public void`

### invalidate

```java
public void invalidate()
```

**Returns:** `public void`

### addSectionsInFrustum

```java
public void addSectionsInFrustum(Frustum p_294180_, List<SectionRenderDispatcher.RenderSection> p_296160_)
```

**Parameters:**

- `p_294180_` (`Frustum`)
- `p_296160_` (`List<SectionRenderDispatcher.RenderSection>`)

**Returns:** `public void`

### consumeFrustumUpdate

```java
public boolean consumeFrustumUpdate()
```

**Returns:** `public boolean`

### onChunkLoaded

```java
public void onChunkLoaded(ChunkPos p_294122_)
```

**Parameters:**

- `p_294122_` (`ChunkPos`)

**Returns:** `public void`

### onSectionCompiled

```java
public void onSectionCompiled(SectionRenderDispatcher.RenderSection p_295414_)
```

**Parameters:**

- `p_295414_` (`SectionRenderDispatcher.RenderSection`)

**Returns:** `public void`

### update

```java
public void update(boolean p_294298_, Camera p_294529_, Frustum p_294426_, List<SectionRenderDispatcher.RenderSection> p_295280_)
```

**Parameters:**

- `p_294298_` (`boolean`)
- `p_294529_` (`Camera`)
- `p_294426_` (`Frustum`)
- `p_295280_` (`List<SectionRenderDispatcher.RenderSection>`)

**Returns:** `public void`

### scheduleFullUpdate

```java
private void scheduleFullUpdate(boolean p_294514_, Camera p_295663_, Vec3 p_295096_)
```

**Parameters:**

- `p_294514_` (`boolean`)
- `p_295663_` (`Camera`)
- `p_295096_` (`Vec3`)

**Returns:** `private void`

### runPartialUpdate

```java
private void runPartialUpdate(boolean p_294795_, Frustum p_294341_, List<SectionRenderDispatcher.RenderSection> p_294796_, Vec3 p_295915_)
```

**Parameters:**

- `p_294795_` (`boolean`)
- `p_294341_` (`Frustum`)
- `p_294796_` (`List<SectionRenderDispatcher.RenderSection>`)
- `p_295915_` (`Vec3`)

**Returns:** `private void`

### queueSectionsWithNewNeighbors

```java
private void queueSectionsWithNewNeighbors(SectionOcclusionGraph.GraphState p_296471_)
```

**Parameters:**

- `p_296471_` (`SectionOcclusionGraph.GraphState`)

**Returns:** `private void`

### addNeighbors

```java
private void addNeighbors(SectionOcclusionGraph.GraphEvents p_295866_, ChunkPos p_295968_)
```

**Parameters:**

- `p_295866_` (`SectionOcclusionGraph.GraphEvents`)
- `p_295968_` (`ChunkPos`)

**Returns:** `private void`

### initializeQueueForFullUpdate

```java
private void initializeQueueForFullUpdate(Camera p_295148_, Queue<SectionOcclusionGraph.Node> p_294801_)
```

**Parameters:**

- `p_295148_` (`Camera`)
- `p_294801_` (`Queue<SectionOcclusionGraph.Node>`)

**Returns:** `private void`

### runUpdates

```java
private void runUpdates(SectionOcclusionGraph.GraphStorage p_295507_, Vec3 p_294343_, Queue<SectionOcclusionGraph.Node> p_295598_, boolean p_295668_, Consumer<SectionRenderDispatcher.RenderSection> p_295393_)
```

**Parameters:**

- `p_295507_` (`SectionOcclusionGraph.GraphStorage`)
- `p_294343_` (`Vec3`)
- `p_295598_` (`Queue<SectionOcclusionGraph.Node>`)
- `p_295668_` (`boolean`)
- `p_295393_` (`Consumer<SectionRenderDispatcher.RenderSection>`)

**Returns:** `private void`

### isInViewDistance

```java
private boolean isInViewDistance(BlockPos p_295639_, BlockPos p_295511_)
```

**Parameters:**

- `p_295639_` (`BlockPos`)
- `p_295511_` (`BlockPos`)

**Returns:** `private boolean`

### getNode

```java
protected SectionOcclusionGraph.Node getNode(SectionRenderDispatcher.RenderSection p_296364_)
```

**Parameters:**

- `p_296364_` (`SectionRenderDispatcher.RenderSection`)

**Returns:** `SectionOcclusionGraph.Node`

### GraphEvents

```java
static record GraphEvents(LongSet chunksWhichReceivedNeighbors, BlockingQueue<SectionRenderDispatcher.RenderSection> sectionsToPropagateFrom)
```

**Parameters:**

- `chunksWhichReceivedNeighbors` (`LongSet`)
- `sectionsToPropagateFrom` (`BlockingQueue<SectionRenderDispatcher.RenderSection>`)

**Returns:** `record`

### GraphEvents

```java
public GraphEvents()
```

**Returns:** `public`

### GraphState

```java
static record GraphState(SectionOcclusionGraph.GraphStorage storage, SectionOcclusionGraph.GraphEvents events)
```

**Parameters:**

- `storage` (`SectionOcclusionGraph.GraphStorage`)
- `events` (`SectionOcclusionGraph.GraphEvents`)

**Returns:** `record`

### GraphState

```java
public GraphState(int p_295649_)
```

**Parameters:**

- `p_295649_` (`int`)

**Returns:** `public`

### GraphStorage

```java
public GraphStorage(int p_296094_)
```

**Parameters:**

- `p_296094_` (`int`)

**Returns:** `public`

### Node

```java
 Node(SectionRenderDispatcher.RenderSection p_295110_, Direction p_295920_, int p_295951_)
```

**Parameters:**

- `p_295110_` (`SectionRenderDispatcher.RenderSection`)
- `p_295920_` (`Direction`)
- `p_295951_` (`int`)

**Returns:** ``

### setDirections

```java
void setDirections(byte p_295029_, Direction p_296033_)
```

**Parameters:**

- `p_295029_` (`byte`)
- `p_296033_` (`Direction`)

### hasDirection

```java
boolean hasDirection(Direction p_294996_)
```

**Parameters:**

- `p_294996_` (`Direction`)

**Returns:** `boolean`

### addSourceDirection

```java
void addSourceDirection(Direction p_295444_)
```

**Parameters:**

- `p_295444_` (`Direction`)

### hasSourceDirection

```java
protected boolean hasSourceDirection(int p_294302_)
```

**Parameters:**

- `p_294302_` (`int`)

**Returns:** `boolean`

### hasSourceDirections

```java
boolean hasSourceDirections()
```

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### equals

```java
public boolean equals(Object p_295498_)
```

**Parameters:**

- `p_295498_` (`Object`)

**Returns:** `boolean`

### SectionToNodeMap

```java
 SectionToNodeMap(int p_296136_)
```

**Parameters:**

- `p_296136_` (`int`)

**Returns:** ``

### put

```java
public void put(SectionRenderDispatcher.RenderSection p_295644_, SectionOcclusionGraph.Node p_295953_)
```

**Parameters:**

- `p_295644_` (`SectionRenderDispatcher.RenderSection`)
- `p_295953_` (`SectionOcclusionGraph.Node`)

**Returns:** `public void`

### get

```java
public SectionOcclusionGraph.Node get(SectionRenderDispatcher.RenderSection p_295721_)
```

**Parameters:**

- `p_295721_` (`SectionRenderDispatcher.RenderSection`)

**Returns:** `SectionOcclusionGraph.Node`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Node` | class |  |
