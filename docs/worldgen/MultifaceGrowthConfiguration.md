# MultifaceGrowthConfiguration

**Package:** `net.minecraft.world.level.levelgen.feature.configurations`
**Type:** class
**Implements:** `FeatureConfiguration`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<MultifaceGrowthConfiguration>` |  |
| `placeBlock` | `MultifaceBlock` |  |
| `searchRange` | `int` |  |
| `canPlaceOnFloor` | `boolean` |  |
| `canPlaceOnCeiling` | `boolean` |  |
| `canPlaceOnWall` | `boolean` |  |
| `chanceOfSpreading` | `float` |  |
| `canBePlacedOn` | `HolderSet<Block>` |  |

## Methods

### apply

```java
private static DataResult<MultifaceBlock> apply(Block p_225405_)
```

**Parameters:**

- `p_225405_` (`Block`)

**Returns:** `private static DataResult<MultifaceBlock>`

### MultifaceGrowthConfiguration

```java
public MultifaceGrowthConfiguration(MultifaceBlock p_225392_, int p_225393_, boolean p_225394_, boolean p_225395_, boolean p_225396_, float p_225397_, HolderSet<Block> p_225398_)
```

**Parameters:**

- `p_225392_` (`MultifaceBlock`)
- `p_225393_` (`int`)
- `p_225394_` (`boolean`)
- `p_225395_` (`boolean`)
- `p_225396_` (`boolean`)
- `p_225397_` (`float`)
- `p_225398_` (`HolderSet<Block>`)

**Returns:** `public`

### getShuffledDirectionsExcept

```java
public List<Direction> getShuffledDirectionsExcept(RandomSource p_225402_, Direction p_225403_)
```

**Parameters:**

- `p_225402_` (`RandomSource`)
- `p_225403_` (`Direction`)

**Returns:** `public List<Direction>`

### getShuffledDirections

```java
public List<Direction> getShuffledDirections(RandomSource p_225400_)
```

**Parameters:**

- `p_225400_` (`RandomSource`)

**Returns:** `public List<Direction>`
