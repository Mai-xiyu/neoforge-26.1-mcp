# EntityPositionSource

**Package:** `net.minecraft.world.level.gameevent`
**Type:** class
**Implements:** `PositionSource`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<EntityPositionSource>` |  |
| `STREAM_CODEC` | `StreamCodec<ByteBuf, EntityPositionSource>` |  |

## Methods

### EntityPositionSource

```java
public EntityPositionSource(Entity p_223648_, float p_223649_)
```

**Parameters:**

- `p_223648_` (`Entity`)
- `p_223649_` (`float`)

**Returns:** `public`

### EntityPositionSource

```java
private EntityPositionSource(Either<Entity, Either<UUID, Integer>> p_223651_, float p_223652_)
```

**Parameters:**

- `p_223651_` (`Either<Entity, Either<UUID, Integer>>`)
- `p_223652_` (`float`)

**Returns:** `private`

### getPosition

```java
public Optional<Vec3> getPosition(Level p_157733_)
```

**Parameters:**

- `p_157733_` (`Level`)

**Returns:** `Optional<Vec3>`

### resolveEntity

```java
private void resolveEntity(Level p_223678_)
```

**Parameters:**

- `p_223678_` (`Level`)

**Returns:** `private void`

### getUuid

```java
private UUID getUuid()
```

**Returns:** `private UUID`

### RuntimeException

```java
throw new RuntimeException("Unable to get entityId from uuid")
```

**Parameters:**

- `uuid"` (`"Unable to get entityId from`)

**Returns:** `throw new`

### getId

```java
private int getId()
```

**Returns:** `private int`

### IllegalStateException

```java
throw new IllegalStateException("Unable to get entityId from uuid")
```

**Parameters:**

- `uuid"` (`"Unable to get entityId from`)

**Returns:** `throw new`

### getType

```java
public PositionSourceType<EntityPositionSource> getType()
```

**Returns:** `PositionSourceType<EntityPositionSource>`

### codec

```java
public MapCodec<EntityPositionSource> codec()
```

**Returns:** `MapCodec<EntityPositionSource>`

### streamCodec

```java
public StreamCodec<ByteBuf, EntityPositionSource> streamCodec()
```

**Returns:** `StreamCodec<ByteBuf, EntityPositionSource>`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Type` | class |  |
