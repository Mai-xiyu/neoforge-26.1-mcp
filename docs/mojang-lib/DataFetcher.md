# DataFetcher

**Package:** `com.mojang.realmsclient.gui.task`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### DataFetcher

```java
public DataFetcher(Executor p_239381_, TimeUnit p_239382_, TimeSource p_239383_)
```

**Parameters:**

- `p_239381_` (`Executor`)
- `p_239382_` (`TimeUnit`)
- `p_239383_` (`TimeSource`)

**Returns:** `public`

### createTask

```java
<T> public <T> DataFetcher.Task<T> createTask(String p_239623_, Callable<T> p_239624_, Duration p_239625_, RepeatedDelayStrategy p_239626_)
```

**Parameters:**

- `p_239623_` (`String`)
- `p_239624_` (`Callable<T>`)
- `p_239625_` (`Duration`)
- `p_239626_` (`RepeatedDelayStrategy`)

**Returns:** `public <T> DataFetcher.Task<T>`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Period of " + p_239625_ + " too short for selected resolution of " + this.resolution)
```

**Parameters:**

- `this.resolution` (`"Period of " + p_239625_ + " too short for selected resolution of " +`)

**Returns:** `throw new`

### createSubscription

```java
public DataFetcher.Subscription createSubscription()
```

**Returns:** `public DataFetcher.Subscription`

### SubscribedTask

```java
 SubscribedTask(DataFetcher.Task<T> p_239959_, Consumer<T> p_239960_)
```

**Parameters:**

- `p_239959_` (`DataFetcher.Task<T>`)
- `p_239960_` (`Consumer<T>`)

**Returns:** ``

### update

```java
void update(long p_239226_)
```

**Parameters:**

- `p_239226_` (`long`)

### runCallbackIfNeeded

```java
void runCallbackIfNeeded()
```

### runCallback

```java
void runCallback()
```

### reset

```java
void reset()
```

### subscribe

```java
<T> public <T> void subscribe(DataFetcher.Task<T> p_239442_, Consumer<T> p_239443_)
```

**Parameters:**

- `p_239442_` (`DataFetcher.Task<T>`)
- `p_239443_` (`Consumer<T>`)

**Returns:** `public <T> void`

### forceUpdate

```java
public void forceUpdate()
```

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### reset

```java
public void reset()
```

**Returns:** `public void`

### Task

```java
 Task(String p_239074_, Callable<T> p_239075_, long p_239076_, RepeatedDelayStrategy p_239077_)
```

**Parameters:**

- `p_239074_` (`String`)
- `p_239075_` (`Callable<T>`)
- `p_239076_` (`long`)
- `p_239077_` (`RepeatedDelayStrategy`)

**Returns:** ``

### updateIfNeeded

```java
void updateIfNeeded(long p_239710_)
```

**Parameters:**

- `p_239710_` (`long`)

### reset

```java
public void reset()
```

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Subscription` | class |  |
| `Task` | class |  |
