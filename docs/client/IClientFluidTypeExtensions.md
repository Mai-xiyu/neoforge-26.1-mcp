# IClientFluidTypeExtensions

**Package:** `net.neoforged.neoforge.client.extensions.common`
**Type:** interface
**Side:** 🖥️ Client

## Description

LogicalSide#CLIENT Client-only extensions to `FluidType`.
@see FluidType#initializeClient(Consumer)

## Methods

### of

```java
static IClientFluidTypeExtensions of(FluidState state)
```

**Parameters:**

- `state` (`FluidState`)

**Returns:** `static IClientFluidTypeExtensions`

### of

```java
static IClientFluidTypeExtensions of(Fluid fluid)
```

**Parameters:**

- `fluid` (`Fluid`)

**Returns:** `static IClientFluidTypeExtensions`

### of

```java
static IClientFluidTypeExtensions of(FluidType type)
```

**Parameters:**

- `type` (`FluidType`)

**Returns:** `static IClientFluidTypeExtensions`

### getTintColor

```java
default int getTintColor()
```

**Returns:** `int`

LogicalSide#CLIENT Client-only extensions to `FluidType`.
**See:** FluidType#initializeClient(Consumer)
/
public interface IClientFluidTypeExtensions {
IClientFluidTypeExtensions DEFAULT = new IClientFluidTypeExtensions() {};
static IClientFluidTypeExtensions of(FluidState state) {
return of(state.getFluidType());
}
static IClientFluidTypeExtensions of(Fluid fluid) {
return of(fluid.getFluidType());
}
static IClientFluidTypeExtensions of(FluidType type) {
return ClientExtensionsManager.FLUID_TYPE_EXTENSIONS.getOrDefault(type, DEFAULT);
}
/* Default Accessors

### getStillTexture

```java
default ResourceLocation getStillTexture()
```

**Returns:** `ResourceLocation`

### getFlowingTexture

```java
default ResourceLocation getFlowingTexture()
```

**Returns:** `ResourceLocation`

### getOverlayTexture

```java
default ResourceLocation getOverlayTexture()
```

**Returns:** `ResourceLocation`

### getRenderOverlayTexture

```java
ResourceLocation getRenderOverlayTexture(Minecraft mc)
```

**Parameters:**

- `mc` (`Minecraft`)

**Returns:** `ResourceLocation`

### renderOverlay

```java
default void renderOverlay(Minecraft mc, PoseStack poseStack)
```

**Parameters:**

- `mc` (`Minecraft`)
- `poseStack` (`PoseStack`)

### modifyFogColor

```java
default Vector3f modifyFogColor(Camera camera, float partialTick, ClientLevel level, int renderDistance, float darkenWorldAmount, Vector3f fluidFogColor)
```

**Parameters:**

- `camera` (`Camera`)
- `partialTick` (`float`)
- `level` (`ClientLevel`)
- `renderDistance` (`int`)
- `darkenWorldAmount` (`float`)
- `fluidFogColor` (`Vector3f`)

**Returns:** `Vector3f`

### modifyFogRender

```java
default void modifyFogRender(Camera camera, FogRenderer.FogMode mode, float renderDistance, float partialTick, float nearDistance, float farDistance, FogShape shape)
```

**Parameters:**

- `camera` (`Camera`)
- `mode` (`FogRenderer.FogMode`)
- `renderDistance` (`float`)
- `partialTick` (`float`)
- `nearDistance` (`float`)
- `farDistance` (`float`)
- `shape` (`FogShape`)

### getStillTexture

```java
default ResourceLocation getStillTexture(FluidState state, BlockAndTintGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `ResourceLocation`

LogicalSide#CLIENT Client-only extensions to `FluidType`.
**See:** FluidType#initializeClient(Consumer)
/
public interface IClientFluidTypeExtensions {
IClientFluidTypeExtensions DEFAULT = new IClientFluidTypeExtensions() {};
static IClientFluidTypeExtensions of(FluidState state) {
return of(state.getFluidType());
}
static IClientFluidTypeExtensions of(Fluid fluid) {
return of(fluid.getFluidType());
}
static IClientFluidTypeExtensions of(FluidType type) {
return ClientExtensionsManager.FLUID_TYPE_EXTENSIONS.getOrDefault(type, DEFAULT);
}
/* Default Accessors */
/**
Returns the tint applied to the fluid's textures.


The result represents a 32-bit integer where each 8-bits represent
the alpha, red, green, and blue channel respectively.
**Returns:** the tint applied to the fluid's textures in ARGB format
/
default int getTintColor() {
return 0xFFFFFFFF;
}
/**
Returns the reference of the texture to apply to a source fluid.


This should return a reference to the texture and not the actual
texture itself (e.g. `minecraft:block/water_still` will point to
`assets/minecraft/textures/block/water_still.png`).


Important: This method should only return `null` for `Fluids#EMPTY`.
All other implementations must define this property.
**Returns:** the reference of the texture to apply to a source fluid
/
default ResourceLocation getStillTexture() {
return null;
}
/**
Returns the reference of the texture to apply to a flowing fluid.


This should return a reference to the texture and not the actual
texture itself (e.g. `minecraft:block/water_flow` will point to
`assets/minecraft/textures/block/water_flow.png`).


Important: This method should only return `null` for `Fluids#EMPTY`.
All other implementations must define this property.
**Returns:** the reference of the texture to apply to a flowing fluid
/
default ResourceLocation getFlowingTexture() {
return null;
}
/**
Returns the reference of the texture to apply to a fluid directly touching
a non-opaque block other than air. If no reference is specified, either
`#getStillTexture` or `#getFlowingTexture` will be applied
instead.


This should return a reference to the texture and not the actual
texture itself (e.g. `minecraft:block/water_overlay` will point to
`assets/minecraft/textures/block/water_overlay.png`).
**Returns:** the reference of the texture to apply to a fluid directly touching
a non-opaque block
/
@Nullable
default ResourceLocation getOverlayTexture() {
return null;
}
// Add entries to assets/minecraft/atlases/blocks.json if your texture location is not already covered by the default atlas search locations.
// /**
//  * Returns a stream of textures applied to a fluid.
//  *
//  * 

This is used by the `net.minecraft.client.resources.model.ModelBakery` to load in all textures that
//  * can be applied on reload.
//  *
//  * **Returns:** a stream of textures applied to a fluid
//  */
// default Stream<ResourceLocation> getTextures()
// {
//     return Stream.of(this.getStillTexture(), this.getFlowingTexture(), this.getOverlayTexture())
//                  .filter(Objects::nonNull);
// }
/**
Returns the location of the texture to apply to the camera when it is
within the fluid. If no location is specified, no overlay will be applied.


This should return a location to the texture and not a reference
(e.g. `minecraft:textures/misc/underwater.png` will use the texture
at `assets/minecraft/textures/misc/underwater.png`).
**mc**: the client instance
**Returns:** the location of the texture to apply to the camera when it is
within the fluid
/
@Nullable
default ResourceLocation getRenderOverlayTexture(Minecraft mc) {
return null;
}
/**
Renders `#getRenderOverlayTexture` onto the camera when within
the fluid.
**mc**: the client instance
**poseStack**: the transformations representing the current rendering position
/
default void renderOverlay(Minecraft mc, PoseStack poseStack) {
ResourceLocation texture = this.getRenderOverlayTexture(mc);
if (texture != null)
ScreenEffectRenderer.renderFluid(mc, poseStack, texture);
}
/**
Modifies the color of the fog when the camera is within the fluid.


The result expects a three float vector representing the red, green,
and blue channels respectively. Each channel should be between [0,1].
**camera**: the camera instance
**partialTick**: the delta time of where the current frame is within a tick
**level**: the level the camera is located in
**renderDistance**: the render distance of the client
**darkenWorldAmount**: the amount to darken the world by
**fluidFogColor**: the current color of the fog
**Returns:** the color of the fog
/
default Vector3f modifyFogColor(Camera camera, float partialTick, ClientLevel level, int renderDistance, float darkenWorldAmount, Vector3f fluidFogColor) {
return fluidFogColor;
}
/**
Modifies how the fog is currently being rendered when the camera is
within a fluid.
**camera**: the camera instance
**mode**: the type of fog being rendered
**renderDistance**: the render distance of the client
**partialTick**: the delta time of where the current frame is within a tick
**nearDistance**: the near plane of where the fog starts to render
**farDistance**: the far plane of where the fog ends rendering
**shape**: the shape of the fog being rendered
/
default void modifyFogRender(Camera camera, FogRenderer.FogMode mode, float renderDistance, float partialTick, float nearDistance, float farDistance, FogShape shape) {}
/* Level-Based Accessors

### getFlowingTexture

```java
default ResourceLocation getFlowingTexture(FluidState state, BlockAndTintGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `ResourceLocation`

### getOverlayTexture

```java
default ResourceLocation getOverlayTexture(FluidState state, BlockAndTintGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `ResourceLocation`

### getTintColor

```java
default int getTintColor(FluidState state, BlockAndTintGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `int`

### getTintColor

```java
default int getTintColor(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `int`

LogicalSide#CLIENT Client-only extensions to `FluidType`.
**See:** FluidType#initializeClient(Consumer)
/
public interface IClientFluidTypeExtensions {
IClientFluidTypeExtensions DEFAULT = new IClientFluidTypeExtensions() {};
static IClientFluidTypeExtensions of(FluidState state) {
return of(state.getFluidType());
}
static IClientFluidTypeExtensions of(Fluid fluid) {
return of(fluid.getFluidType());
}
static IClientFluidTypeExtensions of(FluidType type) {
return ClientExtensionsManager.FLUID_TYPE_EXTENSIONS.getOrDefault(type, DEFAULT);
}
/* Default Accessors */
/**
Returns the tint applied to the fluid's textures.


The result represents a 32-bit integer where each 8-bits represent
the alpha, red, green, and blue channel respectively.
**Returns:** the tint applied to the fluid's textures in ARGB format
/
default int getTintColor() {
return 0xFFFFFFFF;
}
/**
Returns the reference of the texture to apply to a source fluid.


This should return a reference to the texture and not the actual
texture itself (e.g. `minecraft:block/water_still` will point to
`assets/minecraft/textures/block/water_still.png`).


Important: This method should only return `null` for `Fluids#EMPTY`.
All other implementations must define this property.
**Returns:** the reference of the texture to apply to a source fluid
/
default ResourceLocation getStillTexture() {
return null;
}
/**
Returns the reference of the texture to apply to a flowing fluid.


This should return a reference to the texture and not the actual
texture itself (e.g. `minecraft:block/water_flow` will point to
`assets/minecraft/textures/block/water_flow.png`).


Important: This method should only return `null` for `Fluids#EMPTY`.
All other implementations must define this property.
**Returns:** the reference of the texture to apply to a flowing fluid
/
default ResourceLocation getFlowingTexture() {
return null;
}
/**
Returns the reference of the texture to apply to a fluid directly touching
a non-opaque block other than air. If no reference is specified, either
`#getStillTexture` or `#getFlowingTexture` will be applied
instead.


This should return a reference to the texture and not the actual
texture itself (e.g. `minecraft:block/water_overlay` will point to
`assets/minecraft/textures/block/water_overlay.png`).
**Returns:** the reference of the texture to apply to a fluid directly touching
a non-opaque block
/
@Nullable
default ResourceLocation getOverlayTexture() {
return null;
}
// Add entries to assets/minecraft/atlases/blocks.json if your texture location is not already covered by the default atlas search locations.
// /**
//  * Returns a stream of textures applied to a fluid.
//  *
//  * 

This is used by the `net.minecraft.client.resources.model.ModelBakery` to load in all textures that
//  * can be applied on reload.
//  *
//  * **Returns:** a stream of textures applied to a fluid
//  */
// default Stream<ResourceLocation> getTextures()
// {
//     return Stream.of(this.getStillTexture(), this.getFlowingTexture(), this.getOverlayTexture())
//                  .filter(Objects::nonNull);
// }
/**
Returns the location of the texture to apply to the camera when it is
within the fluid. If no location is specified, no overlay will be applied.


This should return a location to the texture and not a reference
(e.g. `minecraft:textures/misc/underwater.png` will use the texture
at `assets/minecraft/textures/misc/underwater.png`).
**mc**: the client instance
**Returns:** the location of the texture to apply to the camera when it is
within the fluid
/
@Nullable
default ResourceLocation getRenderOverlayTexture(Minecraft mc) {
return null;
}
/**
Renders `#getRenderOverlayTexture` onto the camera when within
the fluid.
**mc**: the client instance
**poseStack**: the transformations representing the current rendering position
/
default void renderOverlay(Minecraft mc, PoseStack poseStack) {
ResourceLocation texture = this.getRenderOverlayTexture(mc);
if (texture != null)
ScreenEffectRenderer.renderFluid(mc, poseStack, texture);
}
/**
Modifies the color of the fog when the camera is within the fluid.


The result expects a three float vector representing the red, green,
and blue channels respectively. Each channel should be between [0,1].
**camera**: the camera instance
**partialTick**: the delta time of where the current frame is within a tick
**level**: the level the camera is located in
**renderDistance**: the render distance of the client
**darkenWorldAmount**: the amount to darken the world by
**fluidFogColor**: the current color of the fog
**Returns:** the color of the fog
/
default Vector3f modifyFogColor(Camera camera, float partialTick, ClientLevel level, int renderDistance, float darkenWorldAmount, Vector3f fluidFogColor) {
return fluidFogColor;
}
/**
Modifies how the fog is currently being rendered when the camera is
within a fluid.
**camera**: the camera instance
**mode**: the type of fog being rendered
**renderDistance**: the render distance of the client
**partialTick**: the delta time of where the current frame is within a tick
**nearDistance**: the near plane of where the fog starts to render
**farDistance**: the far plane of where the fog ends rendering
**shape**: the shape of the fog being rendered
/
default void modifyFogRender(Camera camera, FogRenderer.FogMode mode, float renderDistance, float partialTick, float nearDistance, float farDistance, FogShape shape) {}
/* Level-Based Accessors */
/**
Returns the reference of the texture to apply to a source fluid.


This should return a reference to the texture and not the actual
texture itself (e.g. `minecraft:block/water_still` will point to
`assets/minecraft/textures/block/water_still.png`).


Important: This method should only return `null` for `Fluids#EMPTY`.
All other implementations must define this property.
**state**: the state of the fluid
**getter**: the getter the fluid can be obtained from
**pos**: the position of the fluid
**Returns:** the reference of the texture to apply to a source fluid
/
default ResourceLocation getStillTexture(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getStillTexture();
}
/**
Returns the reference of the texture to apply to a flowing fluid.


This should return a reference to the texture and not the actual
texture itself (e.g. `minecraft:block/water_flow` will point to
`assets/minecraft/textures/block/water_flow.png`).


Important: This method should only return `null` for `Fluids#EMPTY`.
All other implementations must define this property.
**state**: the state of the fluid
**getter**: the getter the fluid can be obtained from
**pos**: the position of the fluid
**Returns:** the reference of the texture to apply to a flowing fluid
/
default ResourceLocation getFlowingTexture(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getFlowingTexture();
}
/**
Returns the reference of the texture to apply to a fluid directly touching
a non-opaque block other than air. If no reference is specified, either
`#getStillTexture` or `#getFlowingTexture` will be applied
instead.


This should return a reference to the texture and not the actual
texture itself (e.g. `minecraft:block/water_overlay` will point to
`assets/minecraft/textures/block/water_overlay.png`).
**state**: the state of the fluid
**getter**: the getter the fluid can be obtained from
**pos**: the position of the fluid
**Returns:** the reference of the texture to apply to a fluid directly touching
a non-opaque block
/
default ResourceLocation getOverlayTexture(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getOverlayTexture();
}
/**
Returns the tint applied to the fluid's textures.


The result represents a 32-bit integer where each 8-bits represent
the alpha, red, green, and blue channel respectively.
**state**: the state of the fluid
**getter**: the getter the fluid can be obtained from
**pos**: the position of the fluid
**Returns:** the tint applied to the fluid's textures in ARGB format
/
default int getTintColor(FluidState state, BlockAndTintGetter getter, BlockPos pos) {
return this.getTintColor();
}
/* Stack-Based Accessors

### getStillTexture

```java
default ResourceLocation getStillTexture(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `ResourceLocation`

### getFlowingTexture

```java
default ResourceLocation getFlowingTexture(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `ResourceLocation`

### getOverlayTexture

```java
default ResourceLocation getOverlayTexture(FluidStack stack)
```

**Parameters:**

- `stack` (`FluidStack`)

**Returns:** `ResourceLocation`

### renderFluid

```java
default boolean renderFluid(FluidState fluidState, BlockAndTintGetter getter, BlockPos pos, VertexConsumer vertexConsumer, BlockState blockState)
```

**Parameters:**

- `fluidState` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `vertexConsumer` (`VertexConsumer`)
- `blockState` (`BlockState`)

**Returns:** `boolean`
