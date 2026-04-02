# EndGatewayConfiguration

**Package:** `net.minecraft.world.level.levelgen.feature.configurations`
**Type:** class
**Implements:** `FeatureConfiguration`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<EndGatewayConfiguration>` |  |

## Methods

### EndGatewayConfiguration

```java
private EndGatewayConfiguration(Optional<BlockPos> p_67644_, boolean p_67645_)
```

**Parameters:**

- `p_67644_` (`Optional<BlockPos>`)
- `p_67645_` (`boolean`)

**Returns:** `private`

### knownExit

```java
public static EndGatewayConfiguration knownExit(BlockPos p_67651_, boolean p_67652_)
```

**Parameters:**

- `p_67651_` (`BlockPos`)
- `p_67652_` (`boolean`)

**Returns:** `public static EndGatewayConfiguration`

### delayedExitSearch

```java
public static EndGatewayConfiguration delayedExitSearch()
```

**Returns:** `public static EndGatewayConfiguration`

### getExit

```java
public Optional<BlockPos> getExit()
```

**Returns:** `public Optional<BlockPos>`

### isExitExact

```java
public boolean isExitExact()
```

**Returns:** `public boolean`
