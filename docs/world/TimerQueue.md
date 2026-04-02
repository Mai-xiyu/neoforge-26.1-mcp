# TimerQueue

**Package:** `net.minecraft.world.level.timers`
**Type:** class<T>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `triggerTime` | `long` |  |
| `sequentialId` | `UnsignedLong` |  |
| `id` | `String` |  |
| `callback` | `TimerCallback<T>` |  |

## Methods

### createComparator

```java
<T> private static <T> Comparator<TimerQueue.Event<T>> createComparator()
```

**Returns:** `private static <T> Comparator<TimerQueue.Event<T>>`

### TimerQueue

```java
public TimerQueue(TimerCallbacks<T> p_82249_, Stream<? extends Dynamic<?>> p_82250_)
```

**Parameters:**

- `p_82249_` (`TimerCallbacks<T>`)
- `p_82250_` (`Stream<? extends Dynamic<?>>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### TimerQueue

```java
public TimerQueue(TimerCallbacks<T> p_82247_)
```

**Parameters:**

- `p_82247_` (`TimerCallbacks<T>`)

**Returns:** `public`

### tick

```java
public void tick(T p_82257_, long p_82258_)
```

**Parameters:**

- `p_82257_` (`T`)
- `p_82258_` (`long`)

**Returns:** `public void`

### schedule

```java
public void schedule(String p_82262_, long p_82263_, TimerCallback<T> p_82264_)
```

**Parameters:**

- `p_82262_` (`String`)
- `p_82263_` (`long`)
- `p_82264_` (`TimerCallback<T>`)

**Returns:** `public void`

### remove

```java
public int remove(String p_82260_)
```

**Parameters:**

- `p_82260_` (`String`)

**Returns:** `public int`

### getEventsIds

```java
public Set<String> getEventsIds()
```

**Returns:** `public Set<String>`

### loadEvent

```java
private void loadEvent(CompoundTag p_82266_)
```

**Parameters:**

- `p_82266_` (`CompoundTag`)

**Returns:** `private void`

### storeEvent

```java
private CompoundTag storeEvent(TimerQueue.Event<T> p_82255_)
```

**Parameters:**

- `p_82255_` (`TimerQueue.Event<T>`)

**Returns:** `private CompoundTag`

### store

```java
public ListTag store()
```

**Returns:** `public ListTag`

### Event

```java
 Event(long p_82278_, UnsignedLong p_82279_, String p_82280_, TimerCallback<T> p_82281_)
```

**Parameters:**

- `p_82278_` (`long`)
- `p_82279_` (`UnsignedLong`)
- `p_82280_` (`String`)
- `p_82281_` (`TimerCallback<T>`)

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Event` | class |  |
