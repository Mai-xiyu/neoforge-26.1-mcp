# SubmitNodeStorageExtension

**Package:** `net.neoforged.neoforge.client.extensions`
**Type:** interface
**Extends:** `SubmitNodeCollector`
**Side:** 🖥️ Client

## Methods

### self

```java
private SubmitNodeStorage self()
```

**Returns:** `private SubmitNodeStorage`

### submitMultiLayerBlockModel

```java
default void submitMultiLayerBlockModel(PoseStack poseStack, List<BlockStateModelPart> modelParts, boolean translucent, int[] tintLayers, int lightCoords, int overlayCoords, int outlineColor)
```

**Parameters:**

- `poseStack` (`PoseStack`)
- `modelParts` (`List<BlockStateModelPart>`)
- `translucent` (`boolean`)
- `tintLayers` (`int[]`)
- `lightCoords` (`int`)
- `overlayCoords` (`int`)
- `outlineColor` (`int`)

### MultiLayerBlockModelSubmit

```java
record MultiLayerBlockModelSubmit(PoseStack.Pose pose, List<BlockStateModelPart> modelParts, boolean translucent, int[] tintLayers, int lightCoords, int overlayCoords, int outlineColor)
```

**Parameters:**

- `pose` (`PoseStack.Pose`)
- `modelParts` (`List<BlockStateModelPart>`)
- `translucent` (`boolean`)
- `tintLayers` (`int[]`)
- `lightCoords` (`int`)
- `overlayCoords` (`int`)
- `outlineColor` (`int`)

**Returns:** `record`
