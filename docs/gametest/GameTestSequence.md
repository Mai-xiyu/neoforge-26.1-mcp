# GameTestSequence

**Package:** `net.minecraft.gametest.framework`
**Type:** class

## Methods

### GameTestSequence

```java
public GameTestSequence(GameTestInfo p_177542_)
```

**Parameters:**

- `p_177542_` (`GameTestInfo`)

**Returns:** `public`

### thenWaitUntil

```java
public GameTestSequence thenWaitUntil(Runnable p_177553_)
```

**Parameters:**

- `p_177553_` (`Runnable`)

**Returns:** `public GameTestSequence`

### thenWaitUntil

```java
public GameTestSequence thenWaitUntil(long p_177550_, Runnable p_177551_)
```

**Parameters:**

- `p_177550_` (`long`)
- `p_177551_` (`Runnable`)

**Returns:** `public GameTestSequence`

### thenIdle

```java
public GameTestSequence thenIdle(int p_177545_)
```

**Parameters:**

- `p_177545_` (`int`)

**Returns:** `public GameTestSequence`

### thenExecute

```java
public GameTestSequence thenExecute(Runnable p_177563_)
```

**Parameters:**

- `p_177563_` (`Runnable`)

**Returns:** `public GameTestSequence`

### thenExecuteAfter

```java
public GameTestSequence thenExecuteAfter(int p_177547_, Runnable p_177548_)
```

**Parameters:**

- `p_177547_` (`int`)
- `p_177548_` (`Runnable`)

**Returns:** `public GameTestSequence`

### GameTestAssertException

```java
throw new GameTestAssertException("Test timed out before sequence completed")
```

**Parameters:**

- `completed"` (`"Test timed out before sequence`)

**Returns:** `throw new`

### thenExecuteFor

```java
public GameTestSequence thenExecuteFor(int p_177560_, Runnable p_177561_)
```

**Parameters:**

- `p_177560_` (`int`)
- `p_177561_` (`Runnable`)

**Returns:** `public GameTestSequence`

### GameTestAssertException

```java
throw new GameTestAssertException("Test timed out before sequence completed")
```

**Parameters:**

- `completed"` (`"Test timed out before sequence`)

**Returns:** `throw new`

### thenSucceed

```java
public void thenSucceed()
```

**Returns:** `public void`

### thenFail

```java
public void thenFail(Supplier<Exception> p_177555_)
```

**Parameters:**

- `p_177555_` (`Supplier<Exception>`)

**Returns:** `public void`

### thenTrigger

```java
public GameTestSequence.Condition thenTrigger()
```

**Returns:** `public GameTestSequence.Condition`

### tickAndContinue

```java
public void tickAndContinue(long p_127778_)
```

**Parameters:**

- `p_127778_` (`long`)

**Returns:** `public void`

### tickAndFailIfNotComplete

```java
public void tickAndFailIfNotComplete(long p_127780_)
```

**Parameters:**

- `p_127780_` (`long`)

**Returns:** `public void`

### executeWithoutFail

```java
private void executeWithoutFail(Runnable p_177571_)
```

**Parameters:**

- `p_177571_` (`Runnable`)

**Returns:** `private void`

### tick

```java
private void tick(long p_127782_)
```

**Parameters:**

- `p_127782_` (`long`)

**Returns:** `private void`

### trigger

```java
void trigger(long p_177584_)
```

**Parameters:**

- `p_177584_` (`long`)

### IllegalStateException

```java
throw new IllegalStateException("Condition already triggered at " + this.triggerTime)
```

**Parameters:**

- `this.triggerTime` (`"Condition already triggered at " +`)

**Returns:** `throw new`

### assertTriggeredThisTick

```java
public void assertTriggeredThisTick()
```

**Returns:** `public void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Condition` | class |  |
