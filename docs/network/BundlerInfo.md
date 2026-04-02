# BundlerInfo

**Package:** `net.minecraft.network.protocol`
**Type:** interface

## Methods

### createForPacket

```java
static <T extends PacketListener, P extends BundlePacket<? super T>> BundlerInfo createForPacket(PacketType<P> p_320816_, Function<Iterable<Packet<? super T>>, P> p_265627_, BundleDelimiterPacket<? super T> p_265373_)
```

**Parameters:**

- `p_320816_` (`PacketType<P>`)
- `p_265627_` (`Function<Iterable<Packet<? super T>>, P>`)
- `p_265373_` (`BundleDelimiterPacket<? super T>`)

**Returns:** `static <T extends PacketListener, P extends BundlePacket<? super T>> BundlerInfo`

### BundlerInfo

```java
return new BundlerInfo()
```

**Returns:** `return new`

### unbundlePacket

```java
public void unbundlePacket(Packet<?> p_265538_, Consumer<Packet<?>> p_265064_)
```

**Parameters:**

- `p_265538_` (`Packet<?>`)
- `p_265064_` (`Consumer<Packet<?>>`)

### unbundlePacket

```java
public void unbundlePacket(Packet<?> bundlePacket, Consumer<Packet<?>> packetSender, io.netty.channel.ChannelHandlerContext context)
```

**Parameters:**

- `bundlePacket` (`Packet<?>`)
- `packetSender` (`Consumer<Packet<?>>`)
- `context` (`io.netty.channel.ChannelHandlerContext`)

### startPacketBundling

```java
public BundlerInfo.Bundler startPacketBundling(Packet<?> p_265749_)
```

**Parameters:**

- `p_265749_` (`Packet<?>`)

**Returns:** `BundlerInfo.Bundler`

### addPacket

```java
public Packet<?> addPacket(Packet<?> p_320276_)
```

**Parameters:**

- `p_320276_` (`Packet<?>`)

**Returns:** `Packet<?>`

### IllegalStateException

```java
throw new IllegalStateException("Too many packets in a bundle")
```

**Parameters:**

- `bundle"` (`"Too many packets in a`)

**Returns:** `throw new`

### unbundlePacket

```java
void unbundlePacket(Packet<?> p_265095_, Consumer<Packet<?>> p_265715_)
```

**Parameters:**

- `p_265095_` (`Packet<?>`)
- `p_265715_` (`Consumer<Packet<?>>`)

### unbundlePacket

```java
default void unbundlePacket(Packet<?> bundlePacket, Consumer<Packet<?>> packetSender, io.netty.channel.ChannelHandlerContext context)
```

**Parameters:**

- `bundlePacket` (`Packet<?>`)
- `packetSender` (`Consumer<Packet<?>>`)
- `context` (`io.netty.channel.ChannelHandlerContext`)

### unbundlePacket

```java
 unbundlePacket()
```

**Returns:** ``

### startPacketBundling

```java
BundlerInfo.Bundler startPacketBundling(Packet<?> p_265162_)
```

**Parameters:**

- `p_265162_` (`Packet<?>`)

**Returns:** `BundlerInfo.Bundler`

### addPacket

```java
Packet<?> addPacket(Packet<?> p_265601_)
```

**Parameters:**

- `p_265601_` (`Packet<?>`)

**Returns:** `Packet<?>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Bundler` | interface |  |
