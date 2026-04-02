# OutgoingChatMessage

**Package:** `net.minecraft.network.chat`
**Type:** interface

## Methods

### content

```java
Component content()
```

**Returns:** `Component`

### sendToPlayer

```java
void sendToPlayer(ServerPlayer p_250979_, boolean p_249307_, ChatType.Bound p_252281_)
```

**Parameters:**

- `p_250979_` (`ServerPlayer`)
- `p_249307_` (`boolean`)
- `p_252281_` (`ChatType.Bound`)

### create

```java
static OutgoingChatMessage create(PlayerChatMessage p_249173_)
```

**Parameters:**

- `p_249173_` (`PlayerChatMessage`)

**Returns:** `static OutgoingChatMessage`

### sendToPlayer

```java
public void sendToPlayer(ServerPlayer p_249237_, boolean p_249574_, ChatType.Bound p_250880_)
```

**Parameters:**

- `p_249237_` (`ServerPlayer`)
- `p_249574_` (`boolean`)
- `p_250880_` (`ChatType.Bound`)

### content

```java
public Component content()
```

**Returns:** `Component`

### sendToPlayer

```java
public void sendToPlayer(ServerPlayer p_249642_, boolean p_251123_, ChatType.Bound p_251482_)
```

**Parameters:**

- `p_249642_` (`ServerPlayer`)
- `p_251123_` (`boolean`)
- `p_251482_` (`ChatType.Bound`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Disguised` | record |  |
| `Player` | record |  |
