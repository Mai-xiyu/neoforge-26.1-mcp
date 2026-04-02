# LastSeenMessagesTracker

**Package:** `net.minecraft.network.chat`
**Type:** class

## Methods

### LastSeenMessagesTracker

```java
public LastSeenMessagesTracker(int p_242388_)
```

**Parameters:**

- `p_242388_` (`int`)

**Returns:** `public`

### addPending

```java
public boolean addPending(MessageSignature p_248926_, boolean p_250312_)
```

**Parameters:**

- `p_248926_` (`MessageSignature`)
- `p_250312_` (`boolean`)

**Returns:** `public boolean`

### addEntry

```java
private void addEntry(LastSeenTrackedEntry p_250255_)
```

**Parameters:**

- `p_250255_` (`LastSeenTrackedEntry`)

**Returns:** `private void`

### ignorePending

```java
public void ignorePending(MessageSignature p_251020_)
```

**Parameters:**

- `p_251020_` (`MessageSignature`)

**Returns:** `public void`

### getAndClearOffset

```java
public int getAndClearOffset()
```

**Returns:** `public int`

### generateAndApplyUpdate

```java
public LastSeenMessagesTracker.Update generateAndApplyUpdate()
```

**Returns:** `public LastSeenMessagesTracker.Update`

### offset

```java
public int offset()
```

**Returns:** `public int`

### Update

```java
public static record Update(LastSeenMessages lastSeen, LastSeenMessages.Update update)
```

**Parameters:**

- `lastSeen` (`LastSeenMessages`)
- `update` (`LastSeenMessages.Update`)

**Returns:** `public static record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Update` | record |  |
