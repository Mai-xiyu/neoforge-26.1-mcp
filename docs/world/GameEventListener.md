# GameEventListener

**Package:** `net.minecraft.world.level.gameevent`
**Type:** interface

## Methods

### getListenerSource

```java
PositionSource getListenerSource()
```

**Returns:** `PositionSource`

### getListenerRadius

```java
int getListenerRadius()
```

**Returns:** `int`

### handleGameEvent

```java
boolean handleGameEvent(ServerLevel p_223757_, Holder<GameEvent> p_316739_, GameEvent.Context p_249681_, Vec3 p_251048_)
```

**Parameters:**

- `p_223757_` (`ServerLevel`)
- `p_316739_` (`Holder<GameEvent>`)
- `p_249681_` (`GameEvent.Context`)
- `p_251048_` (`Vec3`)

**Returns:** `boolean`

### getDeliveryMode

```java
default GameEventListener.DeliveryMode getDeliveryMode()
```

**Returns:** `default GameEventListener.DeliveryMode`

### getListener

```java
T getListener()
```

**Returns:** `T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DeliveryMode` | enum |  |
| `Provider` | interface |  |
