# GetServerDetailsTask

**Package:** `com.mojang.realmsclient.util.task`
**Type:** class
**Extends:** `LongRunningTask`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### GetServerDetailsTask

```java
public GetServerDetailsTask(Screen p_90333_, RealmsServer p_90334_)
```

**Parameters:**

- `p_90333_` (`Screen`)
- `p_90334_` (`RealmsServer`)

**Returns:** `public`

### run

```java
public void run()
```

### setScreen

```java
 setScreen()
```

**Returns:** ``

### generatePackId

```java
private static UUID generatePackId(RealmsServer p_314978_)
```

**Parameters:**

- `p_314978_` (`RealmsServer`)

**Returns:** `private static UUID`

### getTitle

```java
public Component getTitle()
```

**Returns:** `Component`

### fetchServerAddress

```java
private RealmsServerAddress fetchServerAddress()
```

**Returns:** `private RealmsServerAddress`

### CancellationException

```java
throw new CancellationException()
```

**Returns:** `throw new`

### TimeoutException

```java
throw new TimeoutException()
```

**Returns:** `throw new`

### connectScreen

```java
public RealmsLongRunningMcoTaskScreen connectScreen(RealmsServerAddress p_167638_)
```

**Parameters:**

- `p_167638_` (`RealmsServerAddress`)

**Returns:** `public RealmsLongRunningMcoTaskScreen`

### resourcePackDownloadConfirmationScreen

```java
private PopupScreen resourcePackDownloadConfirmationScreen(RealmsServerAddress p_167640_, UUID p_315014_, Function<RealmsServerAddress, Screen> p_167641_)
```

**Parameters:**

- `p_167640_` (`RealmsServerAddress`)
- `p_315014_` (`UUID`)
- `p_167641_` (`Function<RealmsServerAddress, Screen>`)

**Returns:** `private PopupScreen`

### scheduleResourcePackDownload

```java
private CompletableFuture<?> scheduleResourcePackDownload(RealmsServerAddress p_167652_, UUID p_314972_)
```

**Parameters:**

- `p_167652_` (`RealmsServerAddress`)
- `p_314972_` (`UUID`)

**Returns:** `private CompletableFuture<?>`
