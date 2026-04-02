# IntegratedPlayerList

**Package:** `net.minecraft.client.server`
**Type:** class
**Extends:** `PlayerList`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### IntegratedPlayerList

```java
public IntegratedPlayerList(IntegratedServer p_251269_, LayeredRegistryAccess<RegistryLayer> p_250644_, PlayerDataStorage p_249022_)
```

**Parameters:**

- `p_251269_` (`IntegratedServer`)
- `p_250644_` (`LayeredRegistryAccess<RegistryLayer>`)
- `p_249022_` (`PlayerDataStorage`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### save

```java
protected void save(ServerPlayer p_120011_)
```

**Parameters:**

- `p_120011_` (`ServerPlayer`)

### canPlayerLogin

```java
public Component canPlayerLogin(SocketAddress p_120007_, GameProfile p_120008_)
```

**Parameters:**

- `p_120007_` (`SocketAddress`)
- `p_120008_` (`GameProfile`)

**Returns:** `Component`

### getServer

```java
public IntegratedServer getServer()
```

**Returns:** `public IntegratedServer`

### getSingleplayerData

```java
public CompoundTag getSingleplayerData()
```

**Returns:** `CompoundTag`
