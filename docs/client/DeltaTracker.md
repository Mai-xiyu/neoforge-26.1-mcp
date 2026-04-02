# DeltaTracker

**Package:** `net.minecraft.client`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### getGameTimeDeltaTicks

```java
float getGameTimeDeltaTicks()
```

**Returns:** `float`

### getGameTimeDeltaPartialTick

```java
float getGameTimeDeltaPartialTick(boolean p_348668_)
```

**Parameters:**

- `p_348668_` (`boolean`)

**Returns:** `float`

### getRealtimeDeltaTicks

```java
float getRealtimeDeltaTicks()
```

**Returns:** `float`

### DefaultValue

```java
 DefaultValue(float p_348484_)
```

**Parameters:**

- `p_348484_` (`float`)

**Returns:** ``

### getGameTimeDeltaTicks

```java
public float getGameTimeDeltaTicks()
```

**Returns:** `float`

### getGameTimeDeltaPartialTick

```java
public float getGameTimeDeltaPartialTick(boolean p_348527_)
```

**Parameters:**

- `p_348527_` (`boolean`)

**Returns:** `float`

### getRealtimeDeltaTicks

```java
public float getRealtimeDeltaTicks()
```

**Returns:** `float`

### Timer

```java
public Timer(float p_348629_, long p_348537_, FloatUnaryOperator p_348550_)
```

**Parameters:**

- `p_348629_` (`float`)
- `p_348537_` (`long`)
- `p_348550_` (`FloatUnaryOperator`)

**Returns:** `public`

### advanceTime

```java
public int advanceTime(long p_348462_, boolean p_348492_)
```

**Parameters:**

- `p_348462_` (`long`)
- `p_348492_` (`boolean`)

**Returns:** `public int`

### advanceGameTime

```java
private int advanceGameTime(long p_348532_)
```

**Parameters:**

- `p_348532_` (`long`)

**Returns:** `private int`

### advanceRealTime

```java
private void advanceRealTime(long p_348534_)
```

**Parameters:**

- `p_348534_` (`long`)

**Returns:** `private void`

### updatePauseState

```java
public void updatePauseState(boolean p_348523_)
```

**Parameters:**

- `p_348523_` (`boolean`)

**Returns:** `public void`

### pause

```java
private void pause()
```

**Returns:** `private void`

### unPause

```java
private void unPause()
```

**Returns:** `private void`

### updateFrozenState

```java
public void updateFrozenState(boolean p_348502_)
```

**Parameters:**

- `p_348502_` (`boolean`)

**Returns:** `public void`

### getGameTimeDeltaTicks

```java
public float getGameTimeDeltaTicks()
```

**Returns:** `float`

### getGameTimeDeltaPartialTick

```java
public float getGameTimeDeltaPartialTick(boolean p_348526_)
```

**Parameters:**

- `p_348526_` (`boolean`)

**Returns:** `float`

### getRealtimeDeltaTicks

```java
public float getRealtimeDeltaTicks()
```

**Returns:** `float`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DefaultValue` | class |  |
| `Timer` | class |  |
