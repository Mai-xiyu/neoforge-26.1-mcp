# DynamicGameEventListener

**Package:** `net.minecraft.world.level.gameevent`
**Type:** class<T extends GameEventListener>

## Methods

### DynamicGameEventListener

```java
public DynamicGameEventListener(T p_223615_)
```

**Parameters:**

- `p_223615_` (`T`)

**Returns:** `public`

### add

```java
public void add(ServerLevel p_223618_)
```

**Parameters:**

- `p_223618_` (`ServerLevel`)

**Returns:** `public void`

### getListener

```java
public T getListener()
```

**Returns:** `public T`

### remove

```java
public void remove(ServerLevel p_223635_)
```

**Parameters:**

- `p_223635_` (`ServerLevel`)

**Returns:** `public void`

### move

```java
public void move(ServerLevel p_223642_)
```

**Parameters:**

- `p_223642_` (`ServerLevel`)

**Returns:** `public void`

### ifChunkExists

```java
private static void ifChunkExists(LevelReader p_223623_, SectionPos p_223624_, Consumer<GameEventListenerRegistry> p_223625_)
```

**Parameters:**

- `p_223623_` (`LevelReader`)
- `p_223624_` (`SectionPos`)
- `p_223625_` (`Consumer<GameEventListenerRegistry>`)

**Returns:** `private static void`
