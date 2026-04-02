# ChatSelectionLogFiller

**Package:** `net.minecraft.client.gui.screens.reporting`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ChatSelectionLogFiller

```java
public ChatSelectionLogFiller(ReportingContext p_251076_, Predicate<LoggedChatMessage.Player> p_250367_)
```

**Parameters:**

- `p_251076_` (`ReportingContext`)
- `p_250367_` (`Predicate<LoggedChatMessage.Player>`)

**Returns:** `public`

### fillNextPage

```java
public void fillNextPage(int p_239016_, ChatSelectionLogFiller.Output p_239017_)
```

**Parameters:**

- `p_239016_` (`int`)
- `p_239017_` (`ChatSelectionLogFiller.Output`)

**Returns:** `public void`

### acceptMessage

```java
private boolean acceptMessage(ChatSelectionLogFiller.Output p_254300_, LoggedChatMessage.Player p_253803_)
```

**Parameters:**

- `p_254300_` (`ChatSelectionLogFiller.Output`)
- `p_253803_` (`LoggedChatMessage.Player`)

**Returns:** `private boolean`

### acceptMessage

```java
void acceptMessage(int p_239762_, LoggedChatMessage.Player p_251438_)
```

**Parameters:**

- `p_239762_` (`int`)
- `p_251438_` (`LoggedChatMessage.Player`)

### acceptDivider

```java
void acceptDivider(Component p_239557_)
```

**Parameters:**

- `p_239557_` (`Component`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Output` | interface |  |
