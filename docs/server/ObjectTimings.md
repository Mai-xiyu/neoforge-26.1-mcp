# ObjectTimings

**Package:** `net.neoforged.neoforge.server.timings`
**Type:** class<T>
**Side:** 🖧 Server

## Description

ObjectTimings aggregates timings data collected by `TimeTracker` for an Object
and performs operations for interpretation of the data.
@param <T>

## Methods

### ObjectTimings

```java
public ObjectTimings(T object, int[] rawTimingData)
```

**Parameters:**

- `object` (`T`)
- `rawTimingData` (`int[]`)

**Returns:** `public`

### getObject

```java
public WeakReference<T> getObject()
```

**Returns:** `WeakReference<T>`

### getAverageTimings

```java
public double getAverageTimings()
```

**Returns:** `double`
