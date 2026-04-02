# ChatLog

**Package:** `net.minecraft.client.multiplayer.chat`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### codec

```java
public static Codec<ChatLog> codec(int p_253922_)
```

**Parameters:**

- `p_253922_` (`int`)

**Returns:** `public static Codec<ChatLog>`

### ChatLog

```java
public ChatLog(int p_251403_)
```

**Parameters:**

- `p_251403_` (`int`)

**Returns:** `public`

### ChatLog

```java
private ChatLog(int p_254212_, List<LoggedChatEvent> p_253624_)
```

**Parameters:**

- `p_254212_` (`int`)
- `p_253624_` (`List<LoggedChatEvent>`)

**Returns:** `private`

### loggedChatEvents

```java
private List<LoggedChatEvent> loggedChatEvents()
```

**Returns:** `private List<LoggedChatEvent>`

### push

```java
public void push(LoggedChatEvent p_242319_)
```

**Parameters:**

- `p_242319_` (`LoggedChatEvent`)

**Returns:** `public void`

### lookup

```java
public LoggedChatEvent lookup(int p_239050_)
```

**Parameters:**

- `p_239050_` (`int`)

**Returns:** `LoggedChatEvent`

### index

```java
private int index(int p_249044_)
```

**Parameters:**

- `p_249044_` (`int`)

**Returns:** `private int`

### start

```java
public int start()
```

**Returns:** `public int`

### end

```java
public int end()
```

**Returns:** `public int`

### size

```java
private int size()
```

**Returns:** `private int`
