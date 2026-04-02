# LanServerPinger

**Package:** `net.minecraft.client.server`
**Type:** class
**Extends:** `Thread`
**Side:** 🖥️ Client

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MULTICAST_GROUP` | `String` |  |
| `PING_PORT` | `int` |  |

## Methods

### LanServerPinger

```java
public LanServerPinger(String p_120109_, String p_120110_)
```

**Parameters:**

- `p_120109_` (`String`)
- `p_120110_` (`String`)

**Returns:** `public`

### run

```java
public void run()
```

### sleep

```java
 sleep()
```

**Returns:** ``

### interrupt

```java
public void interrupt()
```

### createPingString

```java
public static String createPingString(String p_120114_, String p_120115_)
```

**Parameters:**

- `p_120114_` (`String`)
- `p_120115_` (`String`)

**Returns:** `public static String`

### parseMotd

```java
public static String parseMotd(String p_120112_)
```

**Parameters:**

- `p_120112_` (`String`)

**Returns:** `public static String`

### parseAddress

```java
public static String parseAddress(String p_120117_)
```

**Parameters:**

- `p_120117_` (`String`)

**Returns:** `public static String`
