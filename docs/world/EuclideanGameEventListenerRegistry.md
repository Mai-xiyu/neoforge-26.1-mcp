# EuclideanGameEventListenerRegistry

**Package:** `net.minecraft.world.level.gameevent`
**Type:** class
**Implements:** `GameEventListenerRegistry`

## Methods

### EuclideanGameEventListenerRegistry

```java
public EuclideanGameEventListenerRegistry(ServerLevel p_281505_, int p_283450_, EuclideanGameEventListenerRegistry.OnEmptyAction p_282325_)
```

**Parameters:**

- `p_281505_` (`ServerLevel`)
- `p_283450_` (`int`)
- `p_282325_` (`EuclideanGameEventListenerRegistry.OnEmptyAction`)

**Returns:** `public`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### register

```java
public void register(GameEventListener p_248767_)
```

**Parameters:**

- `p_248767_` (`GameEventListener`)

### unregister

```java
public void unregister(GameEventListener p_250006_)
```

**Parameters:**

- `p_250006_` (`GameEventListener`)

### visitInRangeListeners

```java
public boolean visitInRangeListeners(Holder<GameEvent> p_316862_, Vec3 p_251445_, GameEvent.Context p_252317_, GameEventListenerRegistry.ListenerVisitor p_251422_)
```

**Parameters:**

- `p_316862_` (`Holder<GameEvent>`)
- `p_251445_` (`Vec3`)
- `p_252317_` (`GameEvent.Context`)
- `p_251422_` (`GameEventListenerRegistry.ListenerVisitor`)

**Returns:** `boolean`

### getPostableListenerPosition

```java
private static Optional<Vec3> getPostableListenerPosition(ServerLevel p_249585_, Vec3 p_251333_, GameEventListener p_251051_)
```

**Parameters:**

- `p_249585_` (`ServerLevel`)
- `p_251333_` (`Vec3`)
- `p_251051_` (`GameEventListener`)

**Returns:** `private static Optional<Vec3>`

### apply

```java
void apply(int p_282867_)
```

**Parameters:**

- `p_282867_` (`int`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `OnEmptyAction` | interface |  |
