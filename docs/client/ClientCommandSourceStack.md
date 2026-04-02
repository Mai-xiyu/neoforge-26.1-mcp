# ClientCommandSourceStack

**Package:** `net.neoforged.neoforge.client`
**Type:** class
**Extends:** `CommandSourceStack`
**Side:** 🖥️ Client

## Description

overrides for `CommandSourceStack` so that the methods will run successfully client side

## Methods

### ClientCommandSourceStack

```java
public ClientCommandSourceStack(CommandSource source, Vec3 position, Vec2 rotation, int permission, String plainTextName, Component displayName, Entity executing)
```

**Parameters:**

- `source` (`CommandSource`)
- `position` (`Vec3`)
- `rotation` (`Vec2`)
- `permission` (`int`)
- `plainTextName` (`String`)
- `displayName` (`Component`)
- `executing` (`Entity`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### sendSuccess

```java
public void sendSuccess(Supplier<Component> message, boolean sendToAdmins)
```

**Parameters:**

- `message` (`Supplier<Component>`)
- `sendToAdmins` (`boolean`)

### getAllTeams

```java
public Collection<String> getAllTeams()
```

**Returns:** `Collection<String>`

### getOnlinePlayerNames

```java
public Collection<String> getOnlinePlayerNames()
```

**Returns:** `Collection<String>`

### getRecipeNames

```java
public Stream<ResourceLocation> getRecipeNames()
```

**Returns:** `Stream<ResourceLocation>`

### levels

```java
public Set<ResourceKey<Level>> levels()
```

**Returns:** `Set<ResourceKey<Level>>`

### registryAccess

```java
public RegistryAccess registryAccess()
```

**Returns:** `RegistryAccess`

### getScoreboard

```java
public Scoreboard getScoreboard()
```

**Returns:** `Scoreboard`

### getAdvancement

```java
public AdvancementHolder getAdvancement(ResourceLocation id)
```

**Parameters:**

- `id` (`ResourceLocation`)

**Returns:** `AdvancementHolder`

### getRecipeManager

```java
public RecipeManager getRecipeManager()
```

**Returns:** `RecipeManager`

### getUnsidedLevel

```java
public Level getUnsidedLevel()
```

**Returns:** `Level`

### getServer

```java
public MinecraftServer getServer()
```

**Returns:** `MinecraftServer`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Attempted to get server in client command")
```

**Parameters:**

- `command"` (`"Attempted to get server in client`)

**Returns:** `throw new`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `ServerLevel`

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Attempted to get server level in client command")
```

**Parameters:**

- `command"` (`"Attempted to get server level in client`)

**Returns:** `throw new`
