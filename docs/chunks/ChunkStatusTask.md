# ChunkStatusTask

**Package:** `net.minecraft.world.level.chunk.status`
**Type:** interface
**Annotations:** `@FunctionalInterface`

## Methods

### doWork

```java
CompletableFuture<ChunkAccess> doWork(WorldGenContext p_347520_, ChunkStep p_347546_, StaticCache2D<GenerationChunkHolder> p_347485_, ChunkAccess p_347617_)
```

**Parameters:**

- `p_347520_` (`WorldGenContext`)
- `p_347546_` (`ChunkStep`)
- `p_347485_` (`StaticCache2D<GenerationChunkHolder>`)
- `p_347617_` (`ChunkAccess`)

**Returns:** `CompletableFuture<ChunkAccess>`
