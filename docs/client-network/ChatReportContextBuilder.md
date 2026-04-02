# ChatReportContextBuilder

**Package:** `net.minecraft.client.multiplayer.chat.report`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ChatReportContextBuilder

```java
public ChatReportContextBuilder(int p_252198_)
```

**Parameters:**

- `p_252198_` (`int`)

**Returns:** `public`

### collectAllContext

```java
public void collectAllContext(ChatLog p_249467_, IntCollection p_250295_, ChatReportContextBuilder.Handler p_251946_)
```

**Parameters:**

- `p_249467_` (`ChatLog`)
- `p_250295_` (`IntCollection`)
- `p_251946_` (`ChatReportContextBuilder.Handler`)

**Returns:** `public void`

### trackContext

```java
public void trackContext(PlayerChatMessage p_252057_)
```

**Parameters:**

- `p_252057_` (`PlayerChatMessage`)

**Returns:** `public void`

### acceptContext

```java
public boolean acceptContext(PlayerChatMessage p_250059_)
```

**Parameters:**

- `p_250059_` (`PlayerChatMessage`)

**Returns:** `public boolean`

### isActive

```java
public boolean isActive()
```

**Returns:** `public boolean`

### Collector

```java
 Collector(PlayerChatMessage p_249708_)
```

**Parameters:**

- `p_249708_` (`PlayerChatMessage`)

**Returns:** ``

### accept

```java
boolean accept(PlayerChatMessage p_252313_)
```

**Parameters:**

- `p_252313_` (`PlayerChatMessage`)

**Returns:** `boolean`

### isComplete

```java
boolean isComplete()
```

**Returns:** `boolean`

### accept

```java
void accept(int p_248905_, LoggedChatMessage.Player p_249564_)
```

**Parameters:**

- `p_248905_` (`int`)
- `p_249564_` (`LoggedChatMessage.Player`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Handler` | interface |  |
