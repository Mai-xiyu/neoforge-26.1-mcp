# PictureInPictureRendererPool

**Package:** `net.neoforged.neoforge.client.gui`
**Type:** class<T extends PictureInPictureRenderState>
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@ApiStatus`

## Description

Pools `PictureInPictureRenderer` for a single type of `PictureInPictureRenderState` and tries
to reuse renderers on subsequent frames.


Vanilla only ever uses one PIP renderer per PIP state type. This can lead to crashes or
visual artifacts, since the backing render target textures are stored within the renderer,
and if two or more of the same type of state are submitted in one frame, the states will
begin interfering with each other.


We solve this by using one renderer per distinct `PictureInPictureRenderState` state per frame,
and use this class to pool them for reuse in subsequent frames.

## Methods

### PictureInPictureRendererPool

```java
public PictureInPictureRendererPool(PictureInPictureRendererRegistration<T> factory, MultiBufferSource.BufferSource buffers)
```

**Parameters:**

- `factory` (`PictureInPictureRendererRegistration<T>`)
- `buffers` (`MultiBufferSource.BufferSource`)

**Returns:** `public`

### get

```java
public PictureInPictureRenderer<T> get(T state, int guiScale, boolean firstPass)
```

**Parameters:**

- `state` (`T`)
- `guiScale` (`int`)
- `firstPass` (`boolean`)

**Returns:** `PictureInPictureRenderer<T>`

### clearUnusedRenderers

```java
public void clearUnusedRenderers()
```

**Returns:** `public void`

### close

```java
public void close()
```

### createPools

```java
public static Map<Class<? extends PictureInPictureRenderState>, PictureInPictureRendererPool<?>> createPools(MultiBufferSource.BufferSource bufferSource, List<PictureInPictureRendererRegistration<?>> pipRendererFactories)
```

**Parameters:**

- `bufferSource` (`MultiBufferSource.BufferSource`)
- `pipRendererFactories` (`List<PictureInPictureRendererRegistration<?>>`)

**Returns:** `public static Map<Class<? extends PictureInPictureRenderState>, PictureInPictureRendererPool<?>>`
