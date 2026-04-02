# SignedMessageChain

**Package:** `net.minecraft.network.chat`
**Type:** class

## Methods

### SignedMessageChain

```java
public SignedMessageChain(UUID p_250050_, UUID p_249127_)
```

**Parameters:**

- `p_250050_` (`UUID`)
- `p_249127_` (`UUID`)

**Returns:** `public`

### encoder

```java
public SignedMessageChain.Encoder encoder(Signer p_248636_)
```

**Parameters:**

- `p_248636_` (`Signer`)

**Returns:** `public SignedMessageChain.Encoder`

### decoder

```java
public SignedMessageChain.Decoder decoder(ProfilePublicKey p_249122_)
```

**Parameters:**

- `p_249122_` (`ProfilePublicKey`)

**Returns:** `public SignedMessageChain.Decoder`

### unpack

```java
public PlayerChatMessage unpack(MessageSignature p_338553_, SignedMessageBody p_338592_)
```

**Parameters:**

- `p_338553_` (`MessageSignature`)
- `p_338592_` (`SignedMessageBody`)

**Returns:** `PlayerChatMessage`

### setChainBroken

```java
public void setChainBroken()
```

### DecodeException

```java
public DecodeException(Component p_249149_)
```

**Parameters:**

- `p_249149_` (`Component`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### unsigned

```java
static SignedMessageChain.Decoder unsigned(UUID p_251747_, BooleanSupplier p_315009_)
```

**Parameters:**

- `p_251747_` (`UUID`)
- `p_315009_` (`BooleanSupplier`)

**Returns:** `static SignedMessageChain.Decoder`

### unpack

```java
PlayerChatMessage unpack(MessageSignature p_249082_, SignedMessageBody p_250981_)
```

**Parameters:**

- `p_249082_` (`MessageSignature`)
- `p_250981_` (`SignedMessageBody`)

**Returns:** `PlayerChatMessage`

### setChainBroken

```java
default void setChainBroken()
```

**Returns:** `default void`

### pack

```java
MessageSignature pack(SignedMessageBody p_250628_)
```

**Parameters:**

- `p_250628_` (`SignedMessageBody`)

**Returns:** `MessageSignature`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DecodeException` | class |  |
| `Decoder` | interface |  |
| `Encoder` | interface |  |
