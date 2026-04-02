# TimerCallbacks

**Package:** `net.minecraft.world.level.timers`
**Type:** class<C>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SERVER_CALLBACKS` | `TimerCallbacks<MinecraftServer>` |  |

## Methods

### register

```java
public TimerCallbacks<C> register(TimerCallback.Serializer<C, ?> p_82233_)
```

**Parameters:**

- `p_82233_` (`TimerCallback.Serializer<C, ?>`)

**Returns:** `public TimerCallbacks<C>`

### getSerializer

```java
private <T extends TimerCallback<C>> TimerCallback.Serializer<C, T> getSerializer(Class<?> p_82237_)
```

**Parameters:**

- `p_82237_` (`Class<?>`)

**Returns:** `private <T extends TimerCallback<C>> TimerCallback.Serializer<C, T>`

### serialize

```java
public <T extends TimerCallback<C>> CompoundTag serialize(T p_82235_)
```

**Parameters:**

- `p_82235_` (`T`)

**Returns:** `public <T extends TimerCallback<C>> CompoundTag`

### deserialize

```java
public TimerCallback<C> deserialize(CompoundTag p_82239_)
```

**Parameters:**

- `p_82239_` (`CompoundTag`)

**Returns:** `TimerCallback<C>`
