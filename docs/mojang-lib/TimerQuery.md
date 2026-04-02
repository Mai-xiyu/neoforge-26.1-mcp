# TimerQuery

**Package:** `com.mojang.blaze3d.systems`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getInstance

```java
public static Optional<TimerQuery> getInstance()
```

**Returns:** `public static Optional<TimerQuery>`

### beginProfile

```java
public void beginProfile()
```

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Current profile not ended")
```

**Parameters:**

- `ended"` (`"Current profile not`)

**Returns:** `throw new`

### endProfile

```java
public TimerQuery.FrameProfile endProfile()
```

**Returns:** `public TimerQuery.FrameProfile`

### IllegalStateException

```java
throw new IllegalStateException("endProfile called before beginProfile")
```

**Parameters:**

- `beginProfile"` (`"endProfile called before`)

**Returns:** `throw new`

### FrameProfile

```java
 FrameProfile(int p_231148_)
```

**Parameters:**

- `p_231148_` (`int`)

**Returns:** ``

### cancel

```java
public void cancel()
```

**Returns:** `public void`

### isDone

```java
public boolean isDone()
```

**Returns:** `public boolean`

### get

```java
public long get()
```

**Returns:** `public long`

### TimerQueryLazyLoader

```java
private TimerQueryLazyLoader()
```

**Returns:** `private`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `FrameProfile` | class |  |
