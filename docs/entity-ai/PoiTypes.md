# PoiTypes

**Package:** `net.minecraft.world.entity.ai.village.poi`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ARMORER` | `ResourceKey<PoiType>` |  |
| `BUTCHER` | `ResourceKey<PoiType>` |  |
| `CARTOGRAPHER` | `ResourceKey<PoiType>` |  |
| `CLERIC` | `ResourceKey<PoiType>` |  |
| `FARMER` | `ResourceKey<PoiType>` |  |
| `FISHERMAN` | `ResourceKey<PoiType>` |  |
| `FLETCHER` | `ResourceKey<PoiType>` |  |
| `LEATHERWORKER` | `ResourceKey<PoiType>` |  |
| `LIBRARIAN` | `ResourceKey<PoiType>` |  |
| `MASON` | `ResourceKey<PoiType>` |  |
| `SHEPHERD` | `ResourceKey<PoiType>` |  |
| `TOOLSMITH` | `ResourceKey<PoiType>` |  |
| `WEAPONSMITH` | `ResourceKey<PoiType>` |  |
| `HOME` | `ResourceKey<PoiType>` |  |
| `MEETING` | `ResourceKey<PoiType>` |  |
| `BEEHIVE` | `ResourceKey<PoiType>` |  |
| `BEE_NEST` | `ResourceKey<PoiType>` |  |
| `NETHER_PORTAL` | `ResourceKey<PoiType>` |  |
| `LODESTONE` | `ResourceKey<PoiType>` |  |
| `LIGHTNING_ROD` | `ResourceKey<PoiType>` |  |

## Methods

### getBlockStates

```java
private static Set<BlockState> getBlockStates(Block p_218074_)
```

**Parameters:**

- `p_218074_` (`Block`)

**Returns:** `private static Set<BlockState>`

### createKey

```java
private static ResourceKey<PoiType> createKey(String p_218091_)
```

**Parameters:**

- `p_218091_` (`String`)

**Returns:** `private static ResourceKey<PoiType>`

### register

```java
private static PoiType register(Registry<PoiType> p_218085_, ResourceKey<PoiType> p_218086_, Set<BlockState> p_218087_, int p_218088_, int p_218089_)
```

**Parameters:**

- `p_218085_` (`Registry<PoiType>`)
- `p_218086_` (`ResourceKey<PoiType>`)
- `p_218087_` (`Set<BlockState>`)
- `p_218088_` (`int`)
- `p_218089_` (`int`)

**Returns:** `private static PoiType`

### registerBlockStates

```java
private static void registerBlockStates(Holder<PoiType> p_250815_, Set<BlockState> p_250679_)
```

**Parameters:**

- `p_250815_` (`Holder<PoiType>`)
- `p_250679_` (`Set<BlockState>`)

**Returns:** `private static void`

### forState

```java
public static Optional<Holder<PoiType>> forState(BlockState p_218076_)
```

**Parameters:**

- `p_218076_` (`BlockState`)

**Returns:** `public static Optional<Holder<PoiType>>`

### hasPoi

```java
public static boolean hasPoi(BlockState p_254440_)
```

**Parameters:**

- `p_254440_` (`BlockState`)

**Returns:** `public static boolean`

### bootstrap

```java
public static PoiType bootstrap(Registry<PoiType> p_218083_)
```

**Parameters:**

- `p_218083_` (`Registry<PoiType>`)

**Returns:** `public static PoiType`

### register

```java
 register()
```

**Returns:** ``

### register

```java
 register()
```

**Returns:** ``
