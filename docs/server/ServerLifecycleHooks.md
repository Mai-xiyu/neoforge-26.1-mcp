# ServerLifecycleHooks

**Package:** `net.neoforged.neoforge.server`
**Type:** class
**Side:** 🖧 Server

## Methods

### getServerConfigPath

```java
private static Path getServerConfigPath(MinecraftServer server)
```

**Parameters:**

- `server` (`MinecraftServer`)

**Returns:** `private static Path`

### RuntimeException

```java
throw new RuntimeException()
```

**Returns:** `throw new`

### RuntimeException

```java
throw new RuntimeException()
```

**Returns:** `throw new`

### handleServerAboutToStart

```java
public static void handleServerAboutToStart(MinecraftServer server)
```

**Parameters:**

- `server` (`MinecraftServer`)

**Returns:** `public static void`

### runModifiers

```java
 runModifiers()
```

**Returns:** ``

### handleServerStarting

```java
public static void handleServerStarting(MinecraftServer server)
```

**Parameters:**

- `server` (`MinecraftServer`)

**Returns:** `public static void`

### handleServerStarted

```java
public static void handleServerStarted(MinecraftServer server)
```

**Parameters:**

- `server` (`MinecraftServer`)

**Returns:** `public static void`

### handleServerStopping

```java
public static void handleServerStopping(MinecraftServer server)
```

**Parameters:**

- `server` (`MinecraftServer`)

**Returns:** `public static void`

### expectServerStopped

```java
public static void expectServerStopped()
```

**Returns:** `public static void`

### handleServerStopped

```java
public static void handleServerStopped(MinecraftServer server)
```

**Parameters:**

- `server` (`MinecraftServer`)

**Returns:** `public static void`

### getCurrentServer

```java
public static MinecraftServer getCurrentServer()
```

**Returns:** `MinecraftServer`

### handleExit

```java
public static void handleExit(int retVal)
```

**Parameters:**

- `retVal` (`int`)

**Returns:** `public static void`

### ensureProperSync

```java
<T> private static <T> void ensureProperSync(boolean modified, Holder.Reference<T> holder, Registry<T> registry)
```

**Parameters:**

- `modified` (`boolean`)
- `holder` (`Holder.Reference<T>`)
- `registry` (`Registry<T>`)

**Returns:** `private static <T> void`

### runModifiers

```java
private static void runModifiers(MinecraftServer server)
```

**Parameters:**

- `server` (`MinecraftServer`)

**Returns:** `private static void`
