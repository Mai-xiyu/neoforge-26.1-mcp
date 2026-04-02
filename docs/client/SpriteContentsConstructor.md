# SpriteContentsConstructor

**Package:** `net.neoforged.neoforge.client.textures`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@FunctionalInterface`

## Description

Functional interface representing the signature of the SpriteContents constructor
but nullable to support skipping based on metadata.

## Methods

### create

```java
SpriteContents create(ResourceLocation id, FrameSize frameSize, NativeImage nativeImage, ResourceMetadata resourceMetadata)
```

**Parameters:**

- `id` (`ResourceLocation`)
- `frameSize` (`FrameSize`)
- `nativeImage` (`NativeImage`)
- `resourceMetadata` (`ResourceMetadata`)

**Returns:** `SpriteContents`
