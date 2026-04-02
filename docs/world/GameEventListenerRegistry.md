# GameEventListenerRegistry

**Package:** `net.minecraft.world.level.gameevent`
**Type:** interface

## Methods

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `boolean`

### register

```java
public void register(GameEventListener p_251092_)
```

**Parameters:**

- `p_251092_` (`GameEventListener`)

### unregister

```java
public void unregister(GameEventListener p_251937_)
```

**Parameters:**

- `p_251937_` (`GameEventListener`)

### visitInRangeListeners

```java
public boolean visitInRangeListeners(Holder<GameEvent> p_316158_, Vec3 p_249086_, GameEvent.Context p_249012_, GameEventListenerRegistry.ListenerVisitor p_252106_)
```

**Parameters:**

- `p_316158_` (`Holder<GameEvent>`)
- `p_249086_` (`Vec3`)
- `p_249012_` (`GameEvent.Context`)
- `p_252106_` (`GameEventListenerRegistry.ListenerVisitor`)

**Returns:** `boolean`

### isEmpty

```java
boolean isEmpty()
```

**Returns:** `boolean`

### register

```java
void register(GameEventListener p_249257_)
```

**Parameters:**

- `p_249257_` (`GameEventListener`)

### unregister

```java
void unregister(GameEventListener p_248758_)
```

**Parameters:**

- `p_248758_` (`GameEventListener`)

### visitInRangeListeners

```java
boolean visitInRangeListeners(Holder<GameEvent> p_316434_, Vec3 p_249144_, GameEvent.Context p_249328_, GameEventListenerRegistry.ListenerVisitor p_250123_)
```

**Parameters:**

- `p_316434_` (`Holder<GameEvent>`)
- `p_249144_` (`Vec3`)
- `p_249328_` (`GameEvent.Context`)
- `p_250123_` (`GameEventListenerRegistry.ListenerVisitor`)

**Returns:** `boolean`

### visit

```java
void visit(GameEventListener p_250787_, Vec3 p_251603_)
```

**Parameters:**

- `p_250787_` (`GameEventListener`)
- `p_251603_` (`Vec3`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ListenerVisitor` | interface |  |
