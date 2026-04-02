# ModelLayers

**Package:** `net.minecraft.client.model.geom`
**Type:** class
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ALLAY` | `ModelLayerLocation` |  |
| `ARMADILLO` | `ModelLayerLocation` |  |
| `ARMOR_STAND` | `ModelLayerLocation` |  |
| `ARMOR_STAND_INNER_ARMOR` | `ModelLayerLocation` |  |
| `ARMOR_STAND_OUTER_ARMOR` | `ModelLayerLocation` |  |
| `AXOLOTL` | `ModelLayerLocation` |  |
| `BANNER` | `ModelLayerLocation` |  |
| `BAT` | `ModelLayerLocation` |  |
| `BED_FOOT` | `ModelLayerLocation` |  |
| `BED_HEAD` | `ModelLayerLocation` |  |
| `BEE` | `ModelLayerLocation` |  |
| `BELL` | `ModelLayerLocation` |  |
| `BLAZE` | `ModelLayerLocation` |  |
| `BOGGED` | `ModelLayerLocation` |  |
| `BOGGED_INNER_ARMOR` | `ModelLayerLocation` |  |
| `BOGGED_OUTER_ARMOR` | `ModelLayerLocation` |  |
| `BOGGED_OUTER_LAYER` | `ModelLayerLocation` |  |
| `BOOK` | `ModelLayerLocation` |  |
| `BREEZE` | `ModelLayerLocation` |  |
| `BREEZE_WIND` | `ModelLayerLocation` |  |
| `CAT` | `ModelLayerLocation` |  |
| `CAT_COLLAR` | `ModelLayerLocation` |  |
| `CAMEL` | `ModelLayerLocation` |  |
| `CAVE_SPIDER` | `ModelLayerLocation` |  |
| `CHEST` | `ModelLayerLocation` |  |
| `CHEST_MINECART` | `ModelLayerLocation` |  |
| `CHICKEN` | `ModelLayerLocation` |  |
| `COD` | `ModelLayerLocation` |  |
| `COMMAND_BLOCK_MINECART` | `ModelLayerLocation` |  |
| `CONDUIT_CAGE` | `ModelLayerLocation` |  |
| `CONDUIT_EYE` | `ModelLayerLocation` |  |
| `CONDUIT_SHELL` | `ModelLayerLocation` |  |
| `CONDUIT_WIND` | `ModelLayerLocation` |  |
| `COW` | `ModelLayerLocation` |  |
| `CREEPER` | `ModelLayerLocation` |  |
| `CREEPER_ARMOR` | `ModelLayerLocation` |  |
| `CREEPER_HEAD` | `ModelLayerLocation` |  |
| `DECORATED_POT_BASE` | `ModelLayerLocation` |  |
| `DECORATED_POT_SIDES` | `ModelLayerLocation` |  |
| `DOLPHIN` | `ModelLayerLocation` |  |
| `DONKEY` | `ModelLayerLocation` |  |
| `DOUBLE_CHEST_LEFT` | `ModelLayerLocation` |  |
| `DOUBLE_CHEST_RIGHT` | `ModelLayerLocation` |  |
| `DRAGON_SKULL` | `ModelLayerLocation` |  |
| `DROWNED` | `ModelLayerLocation` |  |
| `DROWNED_INNER_ARMOR` | `ModelLayerLocation` |  |
| `DROWNED_OUTER_ARMOR` | `ModelLayerLocation` |  |
| `DROWNED_OUTER_LAYER` | `ModelLayerLocation` |  |
| `ELDER_GUARDIAN` | `ModelLayerLocation` |  |
| `ELYTRA` | `ModelLayerLocation` |  |
| `ENDERMAN` | `ModelLayerLocation` |  |
| `ENDERMITE` | `ModelLayerLocation` |  |
| `ENDER_DRAGON` | `ModelLayerLocation` |  |
| `END_CRYSTAL` | `ModelLayerLocation` |  |
| `EVOKER` | `ModelLayerLocation` |  |
| `EVOKER_FANGS` | `ModelLayerLocation` |  |
| `FOX` | `ModelLayerLocation` |  |
| `FROG` | `ModelLayerLocation` |  |
| `FURNACE_MINECART` | `ModelLayerLocation` |  |

## Methods

### register

```java
private static ModelLayerLocation register(String p_171294_)
```

**Parameters:**

- `p_171294_` (`String`)

**Returns:** `private static ModelLayerLocation`

### register

```java
return register()
```

**Returns:** `return`

### register

```java
private static ModelLayerLocation register(String p_171296_, String p_171297_)
```

**Parameters:**

- `p_171296_` (`String`)
- `p_171297_` (`String`)

**Returns:** `private static ModelLayerLocation`

### IllegalStateException

```java
throw new IllegalStateException("Duplicate registration for " + modellayerlocation)
```

**Parameters:**

- `modellayerlocation` (`"Duplicate registration for " +`)

**Returns:** `throw new`

### createLocation

```java
private static ModelLayerLocation createLocation(String p_171301_, String p_171302_)
```

**Parameters:**

- `p_171301_` (`String`)
- `p_171302_` (`String`)

**Returns:** `private static ModelLayerLocation`

### registerInnerArmor

```java
private static ModelLayerLocation registerInnerArmor(String p_171299_)
```

**Parameters:**

- `p_171299_` (`String`)

**Returns:** `private static ModelLayerLocation`

### register

```java
return register()
```

**Returns:** `return`

### registerOuterArmor

```java
private static ModelLayerLocation registerOuterArmor(String p_171304_)
```

**Parameters:**

- `p_171304_` (`String`)

**Returns:** `private static ModelLayerLocation`

### register

```java
return register()
```

**Returns:** `return`

### createRaftModelName

```java
public static ModelLayerLocation createRaftModelName(Boat.Type p_252002_)
```

**Parameters:**

- `p_252002_` (`Boat.Type`)

**Returns:** `public static ModelLayerLocation`

### createChestRaftModelName

```java
public static ModelLayerLocation createChestRaftModelName(Boat.Type p_248520_)
```

**Parameters:**

- `p_248520_` (`Boat.Type`)

**Returns:** `public static ModelLayerLocation`

### createBoatModelName

```java
public static ModelLayerLocation createBoatModelName(Boat.Type p_171290_)
```

**Parameters:**

- `p_171290_` (`Boat.Type`)

**Returns:** `public static ModelLayerLocation`

### createChestBoatModelName

```java
public static ModelLayerLocation createChestBoatModelName(Boat.Type p_233551_)
```

**Parameters:**

- `p_233551_` (`Boat.Type`)

**Returns:** `public static ModelLayerLocation`

### createSignModelName

```java
public static ModelLayerLocation createSignModelName(WoodType p_171292_)
```

**Parameters:**

- `p_171292_` (`WoodType`)

**Returns:** `public static ModelLayerLocation`

### createHangingSignModelName

```java
public static ModelLayerLocation createHangingSignModelName(WoodType p_252225_)
```

**Parameters:**

- `p_252225_` (`WoodType`)

**Returns:** `public static ModelLayerLocation`

### getKnownLocations

```java
public static Stream<ModelLayerLocation> getKnownLocations()
```

**Returns:** `public static Stream<ModelLayerLocation>`
