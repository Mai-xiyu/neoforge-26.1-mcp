# PacketListener

**Package:** `net.minecraft.network`
**Type:** interface

## Methods

### flow

```java
PacketFlow flow()
```

**Returns:** `PacketFlow`

### protocol

```java
ConnectionProtocol protocol()
```

**Returns:** `ConnectionProtocol`

### onDisconnect

```java
void onDisconnect(DisconnectionDetails p_350287_)
```

**Parameters:**

- `p_350287_` (`DisconnectionDetails`)

### onPacketError

```java
default void onPacketError(Packet p_341593_, Exception p_341607_)
```

**Parameters:**

- `p_341593_` (`Packet`)
- `p_341607_` (`Exception`)

**Returns:** `default void`

### createDisconnectionInfo

```java
default DisconnectionDetails createDisconnectionInfo(Component p_350812_, Throwable p_351028_)
```

**Parameters:**

- `p_350812_` (`Component`)
- `p_351028_` (`Throwable`)

**Returns:** `default DisconnectionDetails`

### DisconnectionDetails

```java
return new DisconnectionDetails()
```

**Returns:** `return new`

### isAcceptingMessages

```java
boolean isAcceptingMessages()
```

**Returns:** `boolean`

### shouldHandleMessage

```java
default boolean shouldHandleMessage(Packet<?> p_295210_)
```

**Parameters:**

- `p_295210_` (`Packet<?>`)

**Returns:** `default boolean`

### fillCrashReport

```java
default void fillCrashReport(CrashReport p_314927_)
```

**Parameters:**

- `p_314927_` (`CrashReport`)

**Returns:** `default void`

### fillListenerSpecificCrashDetails

```java
default void fillListenerSpecificCrashDetails(CrashReport p_350278_, CrashReportCategory p_314965_)
```

**Parameters:**

- `p_350278_` (`CrashReport`)
- `p_314965_` (`CrashReportCategory`)

**Returns:** `default void`
