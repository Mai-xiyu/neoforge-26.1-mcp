# PacketSendListener

**Package:** `net.minecraft.network`
**Type:** interface

## Methods

### thenRun

```java
static PacketSendListener thenRun(Runnable p_243267_)
```

**Parameters:**

- `p_243267_` (`Runnable`)

**Returns:** `static PacketSendListener`

### PacketSendListener

```java
return new PacketSendListener()
```

**Returns:** `return new`

### onSuccess

```java
public void onSuccess()
```

### onFailure

```java
public Packet<?> onFailure()
```

**Returns:** `Packet<?>`

### exceptionallySend

```java
static PacketSendListener exceptionallySend(Supplier<Packet<?>> p_243289_)
```

**Parameters:**

- `p_243289_` (`Supplier<Packet<?>>`)

**Returns:** `static PacketSendListener`

### PacketSendListener

```java
return new PacketSendListener()
```

**Returns:** `return new`

### onFailure

```java
public Packet<?> onFailure()
```

**Returns:** `Packet<?>`

### onSuccess

```java
default void onSuccess()
```

**Returns:** `default void`

### onFailure

```java
default Packet<?> onFailure()
```

**Returns:** `Packet<?>`
