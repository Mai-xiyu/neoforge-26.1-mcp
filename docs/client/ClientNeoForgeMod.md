# ClientNeoForgeMod

**Package:** `net.neoforged.neoforge.client`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@Mod(value = "neoforge", dist = Dist.CLIENT)`, `@ApiStatus`

## Methods

### ClientNeoForgeMod

```java
public ClientNeoForgeMod(IEventBus modEventBus, ModContainer container)
```

**Parameters:**

- `modEventBus` (`IEventBus`)
- `container` (`ModContainer`)

**Returns:** `public`

### onRegisterGeometryLoaders

```java
static void onRegisterGeometryLoaders(ModelEvent.RegisterGeometryLoaders event)
```

**Parameters:**

- `event` (`ModelEvent.RegisterGeometryLoaders`)

### onRegisterReloadListeners

```java
static void onRegisterReloadListeners(RegisterClientReloadListenersEvent event)
```

**Parameters:**

- `event` (`RegisterClientReloadListenersEvent`)

### onRegisterNamedRenderTypes

```java
static void onRegisterNamedRenderTypes(RegisterNamedRenderTypesEvent event)
```

**Parameters:**

- `event` (`RegisterNamedRenderTypesEvent`)

### onRegisterSpriteSourceTypes

```java
static void onRegisterSpriteSourceTypes(RegisterSpriteSourceTypesEvent event)
```

**Parameters:**

- `event` (`RegisterSpriteSourceTypesEvent`)

### onRegisterClientExtensions

```java
static void onRegisterClientExtensions(RegisterClientExtensionsEvent event)
```

**Parameters:**

- `event` (`RegisterClientExtensionsEvent`)

### getStillTexture

```java
public ResourceLocation getStillTexture()
```

**Returns:** `ResourceLocation`

### getFlowingTexture

```java
public ResourceLocation getFlowingTexture()
```

**Returns:** `ResourceLocation`

### getOverlayTexture

```java
public ResourceLocation getOverlayTexture()
```

**Returns:** `ResourceLocation`

### getRenderOverlayTexture

```java
public ResourceLocation getRenderOverlayTexture(Minecraft mc)
```

**Parameters:**

- `mc` (`Minecraft`)

**Returns:** `ResourceLocation`

### getTintColor

```java
public int getTintColor()
```

**Returns:** `int`

### getTintColor

```java
public int getTintColor(FluidState state, BlockAndTintGetter getter, BlockPos pos)
```

**Parameters:**

- `state` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)

**Returns:** `int`

### getStillTexture

```java
public ResourceLocation getStillTexture()
```

**Returns:** `ResourceLocation`

### getFlowingTexture

```java
public ResourceLocation getFlowingTexture()
```

**Returns:** `ResourceLocation`

### getStillTexture

```java
public ResourceLocation getStillTexture()
```

**Returns:** `ResourceLocation`

### getFlowingTexture

```java
public ResourceLocation getFlowingTexture()
```

**Returns:** `ResourceLocation`
