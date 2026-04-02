# ChatComponent

**Package:** `net.minecraft.client.gui.components`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ChatComponent

```java
public ChatComponent(Minecraft p_93768_)
```

**Parameters:**

- `p_93768_` (`Minecraft`)

**Returns:** `public`

### tick

```java
public void tick()
```

**Returns:** `public void`

### render

```java
public void render(GuiGraphics p_282077_, int p_283491_, int p_282406_, int p_283111_, boolean p_316855_)
```

**Parameters:**

- `p_282077_` (`GuiGraphics`)
- `p_283491_` (`int`)
- `p_282406_` (`int`)
- `p_283111_` (`int`)
- `p_316855_` (`boolean`)

**Returns:** `public void`

### drawTagIcon

```java
private void drawTagIcon(GuiGraphics p_283206_, int p_281677_, int p_281878_, GuiMessageTag.Icon p_282783_)
```

**Parameters:**

- `p_283206_` (`GuiGraphics`)
- `p_281677_` (`int`)
- `p_281878_` (`int`)
- `p_282783_` (`GuiMessageTag.Icon`)

**Returns:** `private void`

### getTagIconLeft

```java
private int getTagIconLeft(GuiMessage.Line p_240622_)
```

**Parameters:**

- `p_240622_` (`GuiMessage.Line`)

**Returns:** `private int`

### isChatHidden

```java
private boolean isChatHidden()
```

**Returns:** `private boolean`

### getTimeFactor

```java
private static double getTimeFactor(int p_93776_)
```

**Parameters:**

- `p_93776_` (`int`)

**Returns:** `private static double`

### clearMessages

```java
public void clearMessages(boolean p_93796_)
```

**Parameters:**

- `p_93796_` (`boolean`)

**Returns:** `public void`

### addMessage

```java
public void addMessage(Component p_93786_)
```

**Parameters:**

- `p_93786_` (`Component`)

**Returns:** `public void`

### addMessage

```java
public void addMessage(Component p_241484_, MessageSignature p_241323_, GuiMessageTag p_241297_)
```

**Parameters:**

- `p_241484_` (`Component`)
- `p_241323_` (`MessageSignature`)
- `p_241297_` (`GuiMessageTag`)

**Returns:** `public void`

### logChatMessage

```java
private void logChatMessage(GuiMessage p_338237_)
```

**Parameters:**

- `p_338237_` (`GuiMessage`)

**Returns:** `private void`

### addMessageToDisplayQueue

```java
private void addMessageToDisplayQueue(GuiMessage p_338816_)
```

**Parameters:**

- `p_338816_` (`GuiMessage`)

**Returns:** `private void`

### addMessageToQueue

```java
private void addMessageToQueue(GuiMessage p_338828_)
```

**Parameters:**

- `p_338828_` (`GuiMessage`)

**Returns:** `private void`

### processMessageDeletionQueue

```java
private void processMessageDeletionQueue()
```

**Returns:** `private void`

### deleteMessage

```java
public void deleteMessage(MessageSignature p_241324_)
```

**Parameters:**

- `p_241324_` (`MessageSignature`)

**Returns:** `public void`

### createDeletedMarker

```java
private GuiMessage createDeletedMarker(GuiMessage p_249789_)
```

**Parameters:**

- `p_249789_` (`GuiMessage`)

**Returns:** `private GuiMessage`

### rescaleChat

```java
public void rescaleChat()
```

**Returns:** `public void`

### refreshTrimmedMessages

```java
private void refreshTrimmedMessages()
```

**Returns:** `private void`

### getRecentChat

```java
public ArrayListDeque<String> getRecentChat()
```

**Returns:** `public ArrayListDeque<String>`

### addRecentChat

```java
public void addRecentChat(String p_93784_)
```

**Parameters:**

- `p_93784_` (`String`)

**Returns:** `public void`

### resetChatScroll

```java
public void resetChatScroll()
```

**Returns:** `public void`

### scrollChat

```java
public void scrollChat(int p_205361_)
```

**Parameters:**

- `p_205361_` (`int`)

**Returns:** `public void`

### handleChatQueueClicked

```java
public boolean handleChatQueueClicked(double p_93773_, double p_93774_)
```

**Parameters:**

- `p_93773_` (`double`)
- `p_93774_` (`double`)

**Returns:** `public boolean`

### getClickedComponentStyleAt

```java
public Style getClickedComponentStyleAt(double p_93801_, double p_93802_)
```

**Parameters:**

- `p_93801_` (`double`)
- `p_93802_` (`double`)

**Returns:** `Style`

### getMessageTagAt

```java
public GuiMessageTag getMessageTagAt(double p_240576_, double p_240554_)
```

**Parameters:**

- `p_240576_` (`double`)
- `p_240554_` (`double`)

**Returns:** `GuiMessageTag`

### hasSelectedMessageTag

```java
private boolean hasSelectedMessageTag(double p_240619_, GuiMessage.Line p_240547_, GuiMessageTag p_240637_)
```

**Parameters:**

- `p_240619_` (`double`)
- `p_240547_` (`GuiMessage.Line`)
- `p_240637_` (`GuiMessageTag`)

**Returns:** `private boolean`

### screenToChatX

```java
private double screenToChatX(double p_240580_)
```

**Parameters:**

- `p_240580_` (`double`)

**Returns:** `private double`

### screenToChatY

```java
private double screenToChatY(double p_240548_)
```

**Parameters:**

- `p_240548_` (`double`)

**Returns:** `private double`

### getMessageEndIndexAt

```java
private int getMessageEndIndexAt(double p_249245_, double p_252282_)
```

**Parameters:**

- `p_249245_` (`double`)
- `p_252282_` (`double`)

**Returns:** `private int`

### getMessageLineIndexAt

```java
private int getMessageLineIndexAt(double p_249099_, double p_250008_)
```

**Parameters:**

- `p_249099_` (`double`)
- `p_250008_` (`double`)

**Returns:** `private int`

### isChatFocused

```java
public boolean isChatFocused()
```

**Returns:** `public boolean`

### getWidth

```java
public int getWidth()
```

**Returns:** `public int`

### getHeight

```java
public int getHeight()
```

**Returns:** `public int`

### getScale

```java
public double getScale()
```

**Returns:** `public double`

### getWidth

```java
public static int getWidth(double p_93799_)
```

**Parameters:**

- `p_93799_` (`double`)

**Returns:** `public static int`

### getHeight

```java
public static int getHeight(double p_93812_)
```

**Parameters:**

- `p_93812_` (`double`)

**Returns:** `public static int`

### defaultUnfocusedPct

```java
public static double defaultUnfocusedPct()
```

**Returns:** `public static double`

### getLinesPerPage

```java
public int getLinesPerPage()
```

**Returns:** `public int`

### getLineHeight

```java
private int getLineHeight()
```

**Returns:** `private int`

### storeState

```java
public ChatComponent.State storeState()
```

**Returns:** `public ChatComponent.State`

### restoreState

```java
public void restoreState(ChatComponent.State p_338814_)
```

**Parameters:**

- `p_338814_` (`ChatComponent.State`)

**Returns:** `public void`

### DelayedMessageDeletion

```java
static record DelayedMessageDeletion(MessageSignature signature, int deletableAfter)
```

**Parameters:**

- `signature` (`MessageSignature`)
- `deletableAfter` (`int`)

**Returns:** `record`

### State

```java
public State(List<GuiMessage> p_338549_, List<String> p_338655_, List<ChatComponent.DelayedMessageDeletion> p_338701_)
```

**Parameters:**

- `p_338549_` (`List<GuiMessage>`)
- `p_338655_` (`List<String>`)
- `p_338701_` (`List<ChatComponent.DelayedMessageDeletion>`)

**Returns:** `public`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `State` | class |  |
