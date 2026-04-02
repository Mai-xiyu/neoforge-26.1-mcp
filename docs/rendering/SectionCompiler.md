# SectionCompiler

**Package:** `net.minecraft.client.renderer.chunk`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### SectionCompiler

```java
public SectionCompiler(BlockRenderDispatcher p_350768_, BlockEntityRenderDispatcher p_350715_)
```

**Parameters:**

- `p_350768_` (`BlockRenderDispatcher`)
- `p_350715_` (`BlockEntityRenderDispatcher`)

**Returns:** `public`

### compile

```java
public SectionCompiler.Results compile(SectionPos p_350790_, RenderChunkRegion p_350782_, VertexSorting p_350635_, SectionBufferBuilderPack p_350612_)
```

**Parameters:**

- `p_350790_` (`SectionPos`)
- `p_350782_` (`RenderChunkRegion`)
- `p_350635_` (`VertexSorting`)
- `p_350612_` (`SectionBufferBuilderPack`)

**Returns:** `public SectionCompiler.Results`

### compile

```java
public SectionCompiler.Results compile(SectionPos p_350790_, RenderChunkRegion p_350782_, VertexSorting p_350635_, SectionBufferBuilderPack p_350612_, List<net.neoforged.neoforge.client.event.AddSectionGeometryEvent.AdditionalSectionRenderer> additionalRenderers)
```

**Parameters:**

- `p_350790_` (`SectionPos`)
- `p_350782_` (`RenderChunkRegion`)
- `p_350635_` (`VertexSorting`)
- `p_350612_` (`SectionBufferBuilderPack`)
- `additionalRenderers` (`List<net.neoforged.neoforge.client.event.AddSectionGeometryEvent.AdditionalSectionRenderer>`)

**Returns:** `public SectionCompiler.Results`

### getOrBeginLayer

```java
private BufferBuilder getOrBeginLayer(Map<RenderType, BufferBuilder> p_350651_, SectionBufferBuilderPack p_350965_, RenderType p_350494_)
```

**Parameters:**

- `p_350651_` (`Map<RenderType, BufferBuilder>`)
- `p_350965_` (`SectionBufferBuilderPack`)
- `p_350494_` (`RenderType`)

**Returns:** `private BufferBuilder`

### handleBlockEntity

```java
<E extends BlockEntity> private <E extends BlockEntity> void handleBlockEntity(SectionCompiler.Results p_350754_, E p_350386_)
```

**Parameters:**

- `p_350754_` (`SectionCompiler.Results`)
- `p_350386_` (`E`)

**Returns:** `private <E extends BlockEntity> void`

### release

```java
public void release()
```

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Results` | class |  |
