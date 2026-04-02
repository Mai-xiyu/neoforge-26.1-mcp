# ScreenManager

**Package:** `com.mojang.blaze3d.platform`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### ScreenManager

```java
public ScreenManager(MonitorCreator p_85265_)
```

**Parameters:**

- `p_85265_` (`MonitorCreator`)

**Returns:** `public`

### onMonitorChange

```java
private void onMonitorChange(long p_85274_, int p_85275_)
```

**Parameters:**

- `p_85274_` (`long`)
- `p_85275_` (`int`)

**Returns:** `private void`

### getMonitor

```java
public Monitor getMonitor(long p_85272_)
```

**Parameters:**

- `p_85272_` (`long`)

**Returns:** `Monitor`

### findBestMonitor

```java
public Monitor findBestMonitor(Window p_85277_)
```

**Parameters:**

- `p_85277_` (`Window`)

**Returns:** `Monitor`

### clamp

```java
public static int clamp(int p_85268_, int p_85269_, int p_85270_)
```

**Parameters:**

- `p_85268_` (`int`)
- `p_85269_` (`int`)
- `p_85270_` (`int`)

**Returns:** `public static int`

### shutdown

```java
public void shutdown()
```

**Returns:** `public void`
