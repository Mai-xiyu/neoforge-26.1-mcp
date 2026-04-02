# WanderingTraderSpawner

**Package:** `net.minecraft.world.entity.npc`
**Type:** class
**Implements:** `CustomSpawner`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_SPAWN_DELAY` | `int` |  |

## Methods

### WanderingTraderSpawner

```java
public WanderingTraderSpawner(ServerLevelData p_35914_)
```

**Parameters:**

- `p_35914_` (`ServerLevelData`)

**Returns:** `public`

### tick

```java
public int tick(ServerLevel p_35922_, boolean p_35923_, boolean p_35924_)
```

**Parameters:**

- `p_35922_` (`ServerLevel`)
- `p_35923_` (`boolean`)
- `p_35924_` (`boolean`)

**Returns:** `int`

### spawn

```java
private boolean spawn(ServerLevel p_35916_)
```

**Parameters:**

- `p_35916_` (`ServerLevel`)

**Returns:** `private boolean`

### tryToSpawnLlamaFor

```java
private void tryToSpawnLlamaFor(ServerLevel p_35918_, WanderingTrader p_35919_, int p_35920_)
```

**Parameters:**

- `p_35918_` (`ServerLevel`)
- `p_35919_` (`WanderingTrader`)
- `p_35920_` (`int`)

**Returns:** `private void`

### hasEnoughSpace

```java
private boolean hasEnoughSpace(BlockGetter p_35926_, BlockPos p_35927_)
```

**Parameters:**

- `p_35926_` (`BlockGetter`)
- `p_35927_` (`BlockPos`)

**Returns:** `private boolean`
