# WorldWorkerManager

**Package:** `net.neoforged.neoforge.common`
**Type:** class

## Methods

### tick

```java
public static void tick(boolean start)
```

**Parameters:**

- `start` (`boolean`)

**Returns:** `public static void`

### remove

```java
 remove()
```

**Returns:** ``

### addWorker

```java
public static synchronized void addWorker(IWorker worker)
```

**Parameters:**

- `worker` (`IWorker`)

**Returns:** `public static synchronized void`

### getNext

```java
private static synchronized IWorker getNext()
```

**Returns:** `private static synchronized IWorker`

### remove

```java
private static synchronized void remove(IWorker worker)
```

**Parameters:**

- `worker` (`IWorker`)

**Returns:** `private static synchronized void`

### clear

```java
Internal only, used to clear everything when the server shuts down.
    public static synchronized void clear()
```

**Returns:** `Internal only, used to clear everything when the server shuts down.
    public static synchronized void`

### hasWork

```java
boolean hasWork()
```

**Returns:** `boolean`

### doWork

```java
boolean doWork()
```

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `IWorker` | interface |  |
