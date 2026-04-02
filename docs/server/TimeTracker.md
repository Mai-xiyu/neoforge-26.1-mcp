# TimeTracker

**Package:** `net.neoforged.neoforge.server.timings`
**Type:** class<T>
**Side:** 🖧 Server

## Description

A class to assist in the collection of data to measure the update times of ticking objects {currently Tile Entities and Entities}
@param <T>

## Methods

### getTimingData

```java
public static final ImmutableList<ObjectTimings<T>> getTimingData()
```

**Returns:** `ImmutableList<ObjectTimings<T>>`

### reset

```java
public void reset()
```

### trackEnd

```java
public void trackEnd(T tracking)
```

**Parameters:**

- `tracking` (`T`)

### enable

```java
public void enable(int duration)
```

**Parameters:**

- `duration` (`int`)

### trackStart

```java
public void trackStart(T toTrack)
```

**Parameters:**

- `toTrack` (`T`)

### trackEnd

```java
private void trackEnd(T object, long nanoTime)
```

**Parameters:**

- `object` (`T`)
- `nanoTime` (`long`)

**Returns:** `private void`

### trackStart

```java
private void trackStart(T toTrack, long nanoTime)
```

**Parameters:**

- `toTrack` (`T`)
- `nanoTime` (`long`)

**Returns:** `private void`
