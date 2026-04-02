# GameEventListenerRenderer

**Package:** `net.minecraft.client.renderer.debug`
**Type:** class
**Implements:** `DebugRenderer.SimpleDebugRenderer`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### GameEventListenerRenderer

```java
public GameEventListenerRenderer(Minecraft p_173822_)
```

**Parameters:**

- `p_173822_` (`Minecraft`)

**Returns:** `public`

### render

```java
public void render(PoseStack p_173846_, MultiBufferSource p_173847_, double p_173848_, double p_173849_, double p_173850_)
```

**Parameters:**

- `p_173846_` (`PoseStack`)
- `p_173847_` (`MultiBufferSource`)
- `p_173848_` (`double`)
- `p_173849_` (`double`)
- `p_173850_` (`double`)

### renderFilledBox

```java
private static void renderFilledBox(PoseStack p_270351_, MultiBufferSource p_270763_, AABB p_270205_, float p_270707_, float p_270538_, float p_270314_, float p_270966_)
```

**Parameters:**

- `p_270351_` (`PoseStack`)
- `p_270763_` (`MultiBufferSource`)
- `p_270205_` (`AABB`)
- `p_270707_` (`float`)
- `p_270538_` (`float`)
- `p_270314_` (`float`)
- `p_270966_` (`float`)

**Returns:** `private static void`

### trackGameEvent

```java
public void trackGameEvent(ResourceKey<GameEvent> p_294637_, Vec3 p_234515_)
```

**Parameters:**

- `p_294637_` (`ResourceKey<GameEvent>`)
- `p_234515_` (`Vec3`)

**Returns:** `public void`

### trackListener

```java
public void trackListener(PositionSource p_173831_, int p_173832_)
```

**Parameters:**

- `p_173831_` (`PositionSource`)
- `p_173832_` (`int`)

**Returns:** `public void`

### TrackedGameEvent

```java
static record TrackedGameEvent(long timeStamp, ResourceKey<GameEvent> gameEvent, Vec3 position)
```

**Parameters:**

- `timeStamp` (`long`)
- `gameEvent` (`ResourceKey<GameEvent>`)
- `position` (`Vec3`)

**Returns:** `record`

### isExpired

```java
public boolean isExpired()
```

**Returns:** `public boolean`

### TrackedListener

```java
public TrackedListener(PositionSource p_173872_, int p_173873_)
```

**Parameters:**

- `p_173872_` (`PositionSource`)
- `p_173873_` (`int`)

**Returns:** `public`

### isExpired

```java
public boolean isExpired(Level p_234543_, Vec3 p_234544_)
```

**Parameters:**

- `p_234543_` (`Level`)
- `p_234544_` (`Vec3`)

**Returns:** `public boolean`

### getPosition

```java
public Optional<Vec3> getPosition(Level p_173876_)
```

**Parameters:**

- `p_173876_` (`Level`)

**Returns:** `public Optional<Vec3>`

### getListenerSource

```java
public PositionSource getListenerSource()
```

**Returns:** `PositionSource`

### getListenerRadius

```java
public int getListenerRadius()
```

**Returns:** `int`

### handleGameEvent

```java
public boolean handleGameEvent(ServerLevel p_234540_, Holder<GameEvent> p_316503_, GameEvent.Context p_250285_, Vec3 p_250758_)
```

**Parameters:**

- `p_234540_` (`ServerLevel`)
- `p_316503_` (`Holder<GameEvent>`)
- `p_250285_` (`GameEvent.Context`)
- `p_250758_` (`Vec3`)

**Returns:** `boolean`
