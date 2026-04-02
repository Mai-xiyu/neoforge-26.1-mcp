# LoggedChatEvent

**Package:** `net.minecraft.client.multiplayer.chat`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### type

```java
LoggedChatEvent.Type type()
```

**Returns:** `LoggedChatEvent.Type`

### Type

```java
private Type(String p_254335_, Supplier<MapCodec<? extends LoggedChatEvent>> p_254115_)
```

**Parameters:**

- `p_254335_` (`String`)
- `p_254115_` (`Supplier<MapCodec<? extends LoggedChatEvent>>`)

**Returns:** `private`

### codec

```java
private MapCodec<? extends LoggedChatEvent> codec()
```

**Returns:** `private MapCodec<? extends LoggedChatEvent>`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | enum |  |
