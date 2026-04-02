# ChannelAccess

**Package:** `net.minecraft.client.sounds`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ChannelAccess

```java
public ChannelAccess(Library p_120125_, Executor p_120126_)
```

**Parameters:**

- `p_120125_` (`Library`)
- `p_120126_` (`Executor`)

**Returns:** `public`

### createHandle

```java
public CompletableFuture<ChannelAccess.ChannelHandle> createHandle(Library.Pool p_120129_)
```

**Parameters:**

- `p_120129_` (`Library.Pool`)

**Returns:** `public CompletableFuture<ChannelAccess.ChannelHandle>`

### executeOnChannels

```java
public void executeOnChannels(Consumer<Stream<Channel>> p_120138_)
```

**Parameters:**

- `p_120138_` (`Consumer<Stream<Channel>>`)

**Returns:** `public void`

### scheduleTick

```java
public void scheduleTick()
```

**Returns:** `public void`

### clear

```java
public void clear()
```

**Returns:** `public void`

### isStopped

```java
public boolean isStopped()
```

**Returns:** `public boolean`

### ChannelHandle

```java
public ChannelHandle(Channel p_120150_)
```

**Parameters:**

- `p_120150_` (`Channel`)

**Returns:** `public`

### execute

```java
public void execute(Consumer<Channel> p_120155_)
```

**Parameters:**

- `p_120155_` (`Consumer<Channel>`)

**Returns:** `public void`

### release

```java
public void release()
```

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ChannelHandle` | class |  |
