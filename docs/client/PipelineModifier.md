# PipelineModifier

**Package:** `net.neoforged.neoforge.client.pipeline`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@FunctionalInterface`

## Description

Functional interface for modifying or replacing `RenderPipeline`s in arbitrary render paths on the fly.



All implementations of this interface must be idempotent and have to return the exact same result for the given
input. The result of invoking `#apply(RenderPipeline, Identifier)` will be cached.
@see RegisterPipelineModifiersEvent
@see RenderSystem#pushPipelineModifier(ResourceKey)
@see RenderSystem#popPipelineModifier()
@see RenderSystem#renderWithPipelineModifier(ResourceKey, Runnable)

## Methods

### apply

```java
RenderPipeline apply(RenderPipeline pipeline, Identifier name)
```

**Parameters:**

- `pipeline` (`RenderPipeline`)
- `name` (`Identifier`)

**Returns:** `RenderPipeline`
