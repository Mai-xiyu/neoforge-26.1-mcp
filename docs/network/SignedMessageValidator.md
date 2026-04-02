# SignedMessageValidator

**Package:** `net.minecraft.network.chat`
**Type:** interface
**Annotations:** `@FunctionalInterface`

## Methods

### updateAndValidate

```java
PlayerChatMessage updateAndValidate(PlayerChatMessage p_251036_)
```

**Parameters:**

- `p_251036_` (`PlayerChatMessage`)

**Returns:** `PlayerChatMessage`

### KeyBased

```java
public KeyBased(SignatureValidator p_241517_, BooleanSupplier p_298457_)
```

**Parameters:**

- `p_241517_` (`SignatureValidator`)
- `p_298457_` (`BooleanSupplier`)

**Returns:** `public`

### validateChain

```java
private boolean validateChain(PlayerChatMessage p_250412_)
```

**Parameters:**

- `p_250412_` (`PlayerChatMessage`)

**Returns:** `private boolean`

### validate

```java
private boolean validate(PlayerChatMessage p_298939_)
```

**Parameters:**

- `p_298939_` (`PlayerChatMessage`)

**Returns:** `private boolean`

### updateAndValidate

```java
public PlayerChatMessage updateAndValidate(PlayerChatMessage p_251182_)
```

**Parameters:**

- `p_251182_` (`PlayerChatMessage`)

**Returns:** `PlayerChatMessage`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `KeyBased` | class |  |
