# CustomPacketPayload

**Package:** `net.minecraft.network.protocol.common.custom`
**Type:** interface

## Methods

### type

```java
CustomPacketPayload.Type<? extends CustomPacketPayload> type()
```

**Returns:** `CustomPacketPayload.Type<? extends CustomPacketPayload>`

### codec

```java
<B extends ByteBuf, T extends CustomPacketPayload> static <B extends ByteBuf, T extends CustomPacketPayload> StreamCodec<B, T> codec(StreamMemberEncoder<B, T> p_319960_, StreamDecoder<B, T> p_320047_)
```

**Parameters:**

- `p_319960_` (`StreamMemberEncoder<B, T>`)
- `p_320047_` (`StreamDecoder<B, T>`)

**Returns:** `static <B extends ByteBuf, T extends CustomPacketPayload> StreamCodec<B, T>`

### createType

```java
<T extends CustomPacketPayload> static <T extends CustomPacketPayload> CustomPacketPayload.Type<T> createType(String p_319908_)
```

**Parameters:**

- `p_319908_` (`String`)

**Returns:** `static <T extends CustomPacketPayload> CustomPacketPayload.Type<T>`

### codec

```java
<B extends FriendlyByteBuf> static <B extends FriendlyByteBuf> StreamCodec<B, CustomPacketPayload> codec(CustomPacketPayload.FallbackProvider<B> p_319839_, List<CustomPacketPayload.TypeAndCodec<? super B, ?>> p_320495_, net.minecraft.network.ConnectionProtocol protocol, net.minecraft.network.protocol.PacketFlow packetFlow)
```

**Parameters:**

- `p_319839_` (`CustomPacketPayload.FallbackProvider<B>`)
- `p_320495_` (`List<CustomPacketPayload.TypeAndCodec<? super B, ?>>`)
- `protocol` (`net.minecraft.network.ConnectionProtocol`)
- `packetFlow` (`net.minecraft.network.protocol.PacketFlow`)

**Returns:** `static <B extends FriendlyByteBuf> StreamCodec<B, CustomPacketPayload>`

### findCodec

```java
private StreamCodec<? super B, ? extends CustomPacketPayload> findCodec(ResourceLocation p_320938_)
```

**Parameters:**

- `p_320938_` (`ResourceLocation`)

**Returns:** `private StreamCodec<? super B, ? extends CustomPacketPayload>`

### writeCap

```java
<T extends CustomPacketPayload> private <T extends CustomPacketPayload> void writeCap(B p_320565_, CustomPacketPayload.Type<T> p_320917_, CustomPacketPayload p_320112_)
```

**Parameters:**

- `p_320565_` (`B`)
- `p_320917_` (`CustomPacketPayload.Type<T>`)
- `p_320112_` (`CustomPacketPayload`)

**Returns:** `private <T extends CustomPacketPayload> void`

### encode

```java
public void encode(B p_320490_, CustomPacketPayload p_319776_)
```

**Parameters:**

- `p_320490_` (`B`)
- `p_319776_` (`CustomPacketPayload`)

**Returns:** `public void`

### decode

```java
public CustomPacketPayload decode(B p_320227_)
```

**Parameters:**

- `p_320227_` (`B`)

**Returns:** `public CustomPacketPayload`

### RuntimeException

```java
throw new RuntimeException("Failed decoding custom payload " + resourcelocation + ": " + e)
```

**Parameters:**

- `e` (`"Failed decoding custom payload " + resourcelocation + ": " +`)

**Returns:** `throw new`

### toVanillaClientbound

```java
default net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket toVanillaClientbound()
```

**Returns:** `net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket`

### toVanillaServerbound

```java
default net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket toVanillaServerbound()
```

**Returns:** `net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket`

### create

```java
StreamCodec<B, ? extends CustomPacketPayload> create(ResourceLocation p_320236_)
```

**Parameters:**

- `p_320236_` (`ResourceLocation`)

**Returns:** `StreamCodec<B, ? extends CustomPacketPayload>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FallbackProvider` | interface |  |
| `Type` | record |  |
| `TypeAndCodec` | record |  |
