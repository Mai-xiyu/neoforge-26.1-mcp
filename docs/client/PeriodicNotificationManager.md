# PeriodicNotificationManager

**Package:** `net.minecraft.client`
**Type:** class
**Extends:** `SimplePreparableReloadListener<Map<String, List<PeriodicNotificationManager.Notification>>>`
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### PeriodicNotificationManager

```java
public PeriodicNotificationManager(ResourceLocation p_205293_, Object2BooleanFunction<String> p_205294_)
```

**Parameters:**

- `p_205293_` (`ResourceLocation`)
- `p_205294_` (`Object2BooleanFunction<String>`)

**Returns:** `public`

### prepare

```java
protected Map<String, List<PeriodicNotificationManager.Notification>> prepare(ResourceManager p_205300_, ProfilerFiller p_205301_)
```

**Parameters:**

- `p_205300_` (`ResourceManager`)
- `p_205301_` (`ProfilerFiller`)

**Returns:** `protected Map<String, List<PeriodicNotificationManager.Notification>>`

### apply

```java
protected void apply(Map<String, List<PeriodicNotificationManager.Notification>> p_205318_, ResourceManager p_205319_, ProfilerFiller p_205320_)
```

**Parameters:**

- `p_205318_` (`Map<String, List<PeriodicNotificationManager.Notification>>`)
- `p_205319_` (`ResourceManager`)
- `p_205320_` (`ProfilerFiller`)

**Returns:** `protected void`

### close

```java
public void close()
```

### stopTimer

```java
private void stopTimer()
```

**Returns:** `private void`

### calculateOptimalPeriod

```java
private long calculateOptimalPeriod(List<PeriodicNotificationManager.Notification> p_205313_, long p_205314_)
```

**Parameters:**

- `p_205313_` (`List<PeriodicNotificationManager.Notification>`)
- `p_205314_` (`long`)

**Returns:** `private long`

### calculateInitialDelay

```java
private long calculateInitialDelay(List<PeriodicNotificationManager.Notification> p_205311_)
```

**Parameters:**

- `p_205311_` (`List<PeriodicNotificationManager.Notification>`)

**Returns:** `private long`

### Notification

```java
public static record Notification(long delay, long period, String title, String message)
```

**Parameters:**

- `delay` (`long`)
- `period` (`long`)
- `title` (`String`)
- `message` (`String`)

**Returns:** `record`

### Notification

```java
public Notification(long delay, long period, String title, String message)
```

**Parameters:**

- `delay` (`long`)
- `period` (`long`)
- `title` (`String`)
- `message` (`String`)

**Returns:** `public`

### NotificationTask

```java
public NotificationTask(List<PeriodicNotificationManager.Notification> p_205350_, long p_205351_, long p_205352_)
```

**Parameters:**

- `p_205350_` (`List<PeriodicNotificationManager.Notification>`)
- `p_205351_` (`long`)
- `p_205352_` (`long`)

**Returns:** `public`

### reset

```java
public PeriodicNotificationManager.NotificationTask reset(List<PeriodicNotificationManager.Notification> p_205357_, long p_205358_)
```

**Parameters:**

- `p_205357_` (`List<PeriodicNotificationManager.Notification>`)
- `p_205358_` (`long`)

**Returns:** `public PeriodicNotificationManager.NotificationTask`

### run

```java
public void run()
```

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Notification` | record |  |
