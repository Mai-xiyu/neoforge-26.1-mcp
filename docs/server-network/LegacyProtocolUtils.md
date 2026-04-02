# LegacyProtocolUtils

**Package:** `net.minecraft.server.network`
**Type:** class
**Side:** 🖧 Server

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CUSTOM_PAYLOAD_PACKET_ID` | `int` |  |
| `CUSTOM_PAYLOAD_PACKET_PING_CHANNEL` | `String` |  |
| `GET_INFO_PACKET_ID` | `int` |  |
| `GET_INFO_PACKET_VERSION_1` | `int` |  |
| `DISCONNECT_PACKET_ID` | `int` |  |
| `FAKE_PROTOCOL_VERSION` | `int` |  |

## Methods

### writeLegacyString

```java
public static void writeLegacyString(ByteBuf p_295942_, String p_294348_)
```

**Parameters:**

- `p_295942_` (`ByteBuf`)
- `p_294348_` (`String`)

**Returns:** `public static void`

### readLegacyString

```java
public static String readLegacyString(ByteBuf p_295603_)
```

**Parameters:**

- `p_295603_` (`ByteBuf`)

**Returns:** `public static String`
