# IpBanList

**Package:** `net.minecraft.server.players`
**Type:** class
**Extends:** `StoredUserList<String, IpBanListEntry>`
**Side:** 🖧 Server

## Methods

### IpBanList

```java
public IpBanList(File p_11036_)
```

**Parameters:**

- `p_11036_` (`File`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### createEntry

```java
protected StoredUserEntry<String> createEntry(JsonObject p_11038_)
```

**Parameters:**

- `p_11038_` (`JsonObject`)

**Returns:** `StoredUserEntry<String>`

### IpBanListEntry

```java
return new IpBanListEntry()
```

**Returns:** `return new`

### isBanned

```java
public boolean isBanned(SocketAddress p_11042_)
```

**Parameters:**

- `p_11042_` (`SocketAddress`)

**Returns:** `public boolean`

### isBanned

```java
public boolean isBanned(String p_11040_)
```

**Parameters:**

- `p_11040_` (`String`)

**Returns:** `public boolean`

### get

```java
public IpBanListEntry get(SocketAddress p_11044_)
```

**Parameters:**

- `p_11044_` (`SocketAddress`)

**Returns:** `IpBanListEntry`

### getIpFromAddress

```java
private String getIpFromAddress(SocketAddress p_11046_)
```

**Parameters:**

- `p_11046_` (`SocketAddress`)

**Returns:** `private String`
