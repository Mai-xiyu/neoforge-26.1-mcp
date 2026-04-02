# PackReloadConfig

**Package:** `net.minecraft.client.resources.server`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### scheduleReload

```java
void scheduleReload(PackReloadConfig.Callbacks p_314413_)
```

**Parameters:**

- `p_314413_` (`PackReloadConfig.Callbacks`)

### onSuccess

```java
void onSuccess()
```

### onFailure

```java
void onFailure(boolean p_314498_)
```

**Parameters:**

- `p_314498_` (`boolean`)

### packsToLoad

```java
List<PackReloadConfig.IdAndPath> packsToLoad()
```

**Returns:** `List<PackReloadConfig.IdAndPath>`

### IdAndPath

```java
public static record IdAndPath(UUID id, Path path)
```

**Parameters:**

- `id` (`UUID`)
- `path` (`Path`)

**Returns:** `record`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Callbacks` | interface |  |
| `IdAndPath` | record |  |
