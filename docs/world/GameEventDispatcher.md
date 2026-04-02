# GameEventDispatcher

**Package:** `net.minecraft.world.level.gameevent`
**Type:** class

## Methods

### GameEventDispatcher

```java
public GameEventDispatcher(ServerLevel p_251921_)
```

**Parameters:**

- `p_251921_` (`ServerLevel`)

**Returns:** `public`

### post

```java
public void post(Holder<GameEvent> p_316151_, Vec3 p_250613_, GameEvent.Context p_251777_)
```

**Parameters:**

- `p_316151_` (`Holder<GameEvent>`)
- `p_250613_` (`Vec3`)
- `p_251777_` (`GameEvent.Context`)

**Returns:** `public void`

### handleGameEventMessagesInQueue

```java
private void handleGameEventMessagesInQueue(List<GameEvent.ListenerInfo> p_251433_)
```

**Parameters:**

- `p_251433_` (`List<GameEvent.ListenerInfo>`)

**Returns:** `private void`
