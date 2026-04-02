# NeoForgeEventHandler

**Package:** `net.neoforged.neoforge.common`
**Type:** class
**Annotations:** `@ApiStatus`

## Methods

### onEntityJoinWorld

```java
public void onEntityJoinWorld(EntityJoinLevelEvent event)
```

**Parameters:**

- `event` (`EntityJoinLevelEvent`)

### onDimensionUnload

```java
public void onDimensionUnload(LevelEvent.Unload event)
```

**Parameters:**

- `event` (`LevelEvent.Unload`)

### preServerTick

```java
public void preServerTick(ServerTickEvent.Pre event)
```

**Parameters:**

- `event` (`ServerTickEvent.Pre`)

### postServerTick

```java
public void postServerTick(ServerTickEvent.Post event)
```

**Parameters:**

- `event` (`ServerTickEvent.Post`)

### onChunkUnload

```java
public void onChunkUnload(ChunkEvent.Unload event)
```

**Parameters:**

- `event` (`ChunkEvent.Unload`)

### playerChangeDimension

```java
public void playerChangeDimension(PlayerEvent.PlayerChangedDimensionEvent event)
```

**Parameters:**

- `event` (`PlayerEvent.PlayerChangedDimensionEvent`)

### playerLogin

```java
public void playerLogin(PlayerEvent.PlayerLoggedInEvent event)
```

**Parameters:**

- `event` (`PlayerEvent.PlayerLoggedInEvent`)

### tagsUpdated

```java
public void tagsUpdated(TagsUpdatedEvent event)
```

**Parameters:**

- `event` (`TagsUpdatedEvent`)

### onDpSync

```java
public void onDpSync(OnDatapackSyncEvent event)
```

**Parameters:**

- `event` (`OnDatapackSyncEvent`)

### handleSync

```java
<T> private <T> void handleSync(ServerPlayer player, Registry<T> registry, Collection<ResourceLocation> attachments)
```

**Parameters:**

- `player` (`ServerPlayer`)
- `registry` (`Registry<T>`)
- `attachments` (`Collection<ResourceLocation>`)

**Returns:** `private <T> void`

### onCommandsRegister

```java
public void onCommandsRegister(RegisterCommandsEvent event)
```

**Parameters:**

- `event` (`RegisterCommandsEvent`)

### onResourceReload

```java
public void onResourceReload(AddReloadListenerEvent event)
```

**Parameters:**

- `event` (`AddReloadListenerEvent`)

### getLootModifierManager

```java
static LootModifierManager getLootModifierManager()
```

**Returns:** `static LootModifierManager`

### IllegalStateException

```java
throw new IllegalStateException("Can not retrieve LootModifierManager until resources have loaded once.")
```

**Parameters:**

- `once."` (`"Can not retrieve LootModifierManager until resources have loaded`)

**Returns:** `throw new`

### resourceReloadListeners

```java
public void resourceReloadListeners(AddReloadListenerEvent event)
```

**Parameters:**

- `event` (`AddReloadListenerEvent`)

### builtinMobSpawnBlocker

```java
public void builtinMobSpawnBlocker(EntityJoinLevelEvent event)
```

**Parameters:**

- `event` (`EntityJoinLevelEvent`)
