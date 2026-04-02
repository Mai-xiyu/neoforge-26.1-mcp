# Schedule

**Package:** `net.minecraft.world.entity.schedule`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `WORK_START_TIME` | `int` |  |
| `TOTAL_WORK_TIME` | `int` |  |
| `EMPTY` | `Schedule` |  |
| `SIMPLE` | `Schedule` |  |
| `VILLAGER_BABY` | `Schedule` |  |
| `VILLAGER_DEFAULT` | `Schedule` |  |

## Methods

### register

```java
protected static ScheduleBuilder register(String p_38030_)
```

**Parameters:**

- `p_38030_` (`String`)

**Returns:** `protected static ScheduleBuilder`

### ScheduleBuilder

```java
return new ScheduleBuilder()
```

**Returns:** `return new`

### ensureTimelineExistsFor

```java
protected void ensureTimelineExistsFor(Activity p_38025_)
```

**Parameters:**

- `p_38025_` (`Activity`)

**Returns:** `protected void`

### getTimelineFor

```java
protected Timeline getTimelineFor(Activity p_38032_)
```

**Parameters:**

- `p_38032_` (`Activity`)

**Returns:** `protected Timeline`

### getAllTimelinesExceptFor

```java
protected List<Timeline> getAllTimelinesExceptFor(Activity p_38034_)
```

**Parameters:**

- `p_38034_` (`Activity`)

**Returns:** `protected List<Timeline>`

### getActivityAt

```java
public Activity getActivityAt(int p_38020_)
```

**Parameters:**

- `p_38020_` (`int`)

**Returns:** `public Activity`
