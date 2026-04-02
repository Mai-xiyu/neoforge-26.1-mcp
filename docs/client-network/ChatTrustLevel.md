# ChatTrustLevel

**Package:** `net.minecraft.client.multiplayer.chat`
**Type:** enum
**Implements:** `StringRepresentable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<ChatTrustLevel>` |  |

## Methods

### NOT_SECURE

```java
, NOT_SECURE()
```

**Returns:** `,`

### ChatTrustLevel

```java
private ChatTrustLevel(String p_254190_)
```

**Parameters:**

- `p_254190_` (`String`)

**Returns:** `private`

### evaluate

```java
public static ChatTrustLevel evaluate(PlayerChatMessage p_248663_, Component p_248544_, Instant p_252024_)
```

**Parameters:**

- `p_248663_` (`PlayerChatMessage`)
- `p_248544_` (`Component`)
- `p_252024_` (`Instant`)

**Returns:** `public static ChatTrustLevel`

### isModified

```java
private static boolean isModified(PlayerChatMessage p_252093_, Component p_250811_)
```

**Parameters:**

- `p_252093_` (`PlayerChatMessage`)
- `p_250811_` (`Component`)

**Returns:** `private static boolean`

### containsModifiedStyle

```java
private static boolean containsModifiedStyle(Component p_251011_)
```

**Parameters:**

- `p_251011_` (`Component`)

**Returns:** `private static boolean`

### isModifiedStyle

```java
private static boolean isModifiedStyle(Style p_251347_)
```

**Parameters:**

- `p_251347_` (`Style`)

**Returns:** `private static boolean`

### isNotSecure

```java
public boolean isNotSecure()
```

**Returns:** `public boolean`

### createTag

```java
public GuiMessageTag createTag(PlayerChatMessage p_240632_)
```

**Parameters:**

- `p_240632_` (`PlayerChatMessage`)

**Returns:** `GuiMessageTag`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`
