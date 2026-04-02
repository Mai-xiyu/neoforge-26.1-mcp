# PacketUtils

**Package:** `net.minecraft.network.protocol`
**Type:** class

## Methods

### ensureRunningOnSameThread

```java
<T extends PacketListener> public static <T extends PacketListener> void ensureRunningOnSameThread(Packet<T> p_131360_, T p_131361_, ServerLevel p_131362_)
```

**Parameters:**

- `p_131360_` (`Packet<T>`)
- `p_131361_` (`T`)
- `p_131362_` (`ServerLevel`)

**Returns:** `public static <T extends PacketListener> void`

### ensureRunningOnSameThread

```java
<T extends PacketListener> public static <T extends PacketListener> void ensureRunningOnSameThread(Packet<T> p_131364_, T p_131365_, BlockableEventLoop<?> p_131366_)
```

**Parameters:**

- `p_131364_` (`Packet<T>`)
- `p_131365_` (`T`)
- `p_131366_` (`BlockableEventLoop<?>`)

**Returns:** `public static <T extends PacketListener> void`

### makeReportedException

```java
throw makeReportedException()
```

**Returns:** `throw`

### makeReportedException

```java
<T extends PacketListener> public static <T extends PacketListener> ReportedException makeReportedException(Exception p_341646_, Packet<T> p_341629_, T p_341619_)
```

**Parameters:**

- `p_341646_` (`Exception`)
- `p_341629_` (`Packet<T>`)
- `p_341619_` (`T`)

**Returns:** `public static <T extends PacketListener> ReportedException`

### fillCrashReport

```java
 fillCrashReport()
```

**Returns:** ``

### ReportedException

```java
return new ReportedException()
```

**Returns:** `return new`

### fillCrashReport

```java
<T extends PacketListener> public static <T extends PacketListener> void fillCrashReport(CrashReport p_340891_, T p_340866_, Packet<T> p_340900_)
```

**Parameters:**

- `p_340891_` (`CrashReport`)
- `p_340866_` (`T`)
- `p_340900_` (`Packet<T>`)

**Returns:** `public static <T extends PacketListener> void`
