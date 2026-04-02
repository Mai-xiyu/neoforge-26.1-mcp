# DedicatedPlayerList

**Package:** `net.minecraft.server.dedicated`
**Type:** class
**Extends:** `PlayerList`
**Side:** 🖧 Server

## Methods

### DedicatedPlayerList

```java
public DedicatedPlayerList(DedicatedServer p_203709_, LayeredRegistryAccess<RegistryLayer> p_251851_, PlayerDataStorage p_203711_)
```

**Parameters:**

- `p_203709_` (`DedicatedServer`)
- `p_251851_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_203711_` (`PlayerDataStorage`)

**Returns:** `public`

### setUsingWhiteList

```java
public void setUsingWhiteList(boolean p_139584_)
```

**Parameters:**

- `p_139584_` (`boolean`)

### op

```java
public void op(GameProfile p_139582_)
```

**Parameters:**

- `p_139582_` (`GameProfile`)

### deop

```java
public void deop(GameProfile p_139587_)
```

**Parameters:**

- `p_139587_` (`GameProfile`)

### reloadWhiteList

```java
public void reloadWhiteList()
```

### saveIpBanList

```java
private void saveIpBanList()
```

**Returns:** `private void`

### saveUserBanList

```java
private void saveUserBanList()
```

**Returns:** `private void`

### loadIpBanList

```java
private void loadIpBanList()
```

**Returns:** `private void`

### loadUserBanList

```java
private void loadUserBanList()
```

**Returns:** `private void`

### loadOps

```java
private void loadOps()
```

**Returns:** `private void`

### saveOps

```java
private void saveOps()
```

**Returns:** `private void`

### loadWhiteList

```java
private void loadWhiteList()
```

**Returns:** `private void`

### saveWhiteList

```java
private void saveWhiteList()
```

**Returns:** `private void`

### isWhiteListed

```java
public boolean isWhiteListed(GameProfile p_139590_)
```

**Parameters:**

- `p_139590_` (`GameProfile`)

**Returns:** `boolean`

### getServer

```java
public DedicatedServer getServer()
```

**Returns:** `public DedicatedServer`

### canBypassPlayerLimit

```java
public boolean canBypassPlayerLimit(GameProfile p_139592_)
```

**Parameters:**

- `p_139592_` (`GameProfile`)

**Returns:** `boolean`
