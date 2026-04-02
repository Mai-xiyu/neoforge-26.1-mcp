# ServerInterface

**Package:** `net.minecraft.server`
**Type:** interface
**Extends:** `ServerInfo`
**Side:** 🖧 Server

## Methods

### getProperties

```java
DedicatedServerProperties getProperties()
```

**Returns:** `DedicatedServerProperties`

### getServerIp

```java
String getServerIp()
```

**Returns:** `String`

### getServerPort

```java
int getServerPort()
```

**Returns:** `int`

### getServerName

```java
String getServerName()
```

**Returns:** `String`

### getPlayerNames

```java
String[] getPlayerNames()
```

**Returns:** `String[]`

### getLevelIdName

```java
String getLevelIdName()
```

**Returns:** `String`

### getPluginNames

```java
String getPluginNames()
```

**Returns:** `String`

### runCommand

```java
String runCommand(String p_136143_)
```

**Parameters:**

- `p_136143_` (`String`)

**Returns:** `String`
