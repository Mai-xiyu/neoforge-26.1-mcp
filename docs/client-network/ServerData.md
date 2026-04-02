# ServerData

**Package:** `net.minecraft.client.multiplayer`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `name` | `String` |  |
| `ip` | `String` |  |
| `status` | `Component` |  |
| `motd` | `Component` |  |
| `ping` | `long` |  |
| `protocol` | `int` |  |
| `version` | `Component` |  |
| `playerList` | `List<Component>` |  |
| `neoForgeData` | `net.neoforged.neoforge.client.ExtendedServerListData` |  |

## Methods

### ServerData

```java
public ServerData(String p_105375_, String p_105376_, ServerData.Type p_295587_)
```

**Parameters:**

- `p_105375_` (`String`)
- `p_105376_` (`String`)
- `p_295587_` (`ServerData.Type`)

**Returns:** `public`

### write

```java
public CompoundTag write()
```

**Returns:** `public CompoundTag`

### getResourcePackStatus

```java
public ServerData.ServerPackStatus getResourcePackStatus()
```

**Returns:** `public ServerData.ServerPackStatus`

### setResourcePackStatus

```java
public void setResourcePackStatus(ServerData.ServerPackStatus p_105380_)
```

**Parameters:**

- `p_105380_` (`ServerData.ServerPackStatus`)

**Returns:** `public void`

### read

```java
public static ServerData read(CompoundTag p_105386_)
```

**Parameters:**

- `p_105386_` (`CompoundTag`)

**Returns:** `public static ServerData`

### getIconBytes

```java
public byte[] getIconBytes()
```

**Returns:** `byte[]`

### setIconBytes

```java
public void setIconBytes(byte[] p_272760_)
```

**Parameters:**

- `p_272760_` (`byte[]`)

**Returns:** `public void`

### isLan

```java
public boolean isLan()
```

**Returns:** `public boolean`

### isRealm

```java
public boolean isRealm()
```

**Returns:** `public boolean`

### type

```java
public ServerData.Type type()
```

**Returns:** `public ServerData.Type`

### copyNameIconFrom

```java
public void copyNameIconFrom(ServerData p_233804_)
```

**Parameters:**

- `p_233804_` (`ServerData`)

**Returns:** `public void`

### copyFrom

```java
public void copyFrom(ServerData p_105382_)
```

**Parameters:**

- `p_105382_` (`ServerData`)

**Returns:** `public void`

### state

```java
public ServerData.State state()
```

**Returns:** `public ServerData.State`

### setState

```java
public void setState(ServerData.State p_316214_)
```

**Parameters:**

- `p_316214_` (`ServerData.State`)

**Returns:** `public void`

### validateIcon

```java
public static byte[] validateIcon(byte[] p_302394_)
```

**Parameters:**

- `p_302394_` (`byte[]`)

**Returns:** `byte[]`

### PROMPT

```java
, PROMPT()
```

**Returns:** `,`

### ServerPackStatus

```java
private ServerPackStatus(String p_105399_)
```

**Parameters:**

- `p_105399_` (`String`)

**Returns:** `private`

### getName

```java
public Component getName()
```

**Returns:** `public Component`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `ServerPackStatus` | enum |  |
| `State` | enum |  |
| `Type` | enum |  |
