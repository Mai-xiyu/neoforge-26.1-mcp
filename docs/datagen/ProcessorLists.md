# ProcessorLists

**Package:** `net.minecraft.data.worldgen`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `ZOMBIE_PLAINS` | `ResourceKey<StructureProcessorList>` |  |
| `ZOMBIE_SAVANNA` | `ResourceKey<StructureProcessorList>` |  |
| `ZOMBIE_SNOWY` | `ResourceKey<StructureProcessorList>` |  |
| `ZOMBIE_TAIGA` | `ResourceKey<StructureProcessorList>` |  |
| `ZOMBIE_DESERT` | `ResourceKey<StructureProcessorList>` |  |
| `MOSSIFY_10_PERCENT` | `ResourceKey<StructureProcessorList>` |  |
| `MOSSIFY_20_PERCENT` | `ResourceKey<StructureProcessorList>` |  |
| `MOSSIFY_70_PERCENT` | `ResourceKey<StructureProcessorList>` |  |
| `STREET_PLAINS` | `ResourceKey<StructureProcessorList>` |  |
| `STREET_SAVANNA` | `ResourceKey<StructureProcessorList>` |  |
| `STREET_SNOWY_OR_TAIGA` | `ResourceKey<StructureProcessorList>` |  |
| `FARM_PLAINS` | `ResourceKey<StructureProcessorList>` |  |
| `FARM_SAVANNA` | `ResourceKey<StructureProcessorList>` |  |
| `FARM_SNOWY` | `ResourceKey<StructureProcessorList>` |  |
| `FARM_TAIGA` | `ResourceKey<StructureProcessorList>` |  |
| `FARM_DESERT` | `ResourceKey<StructureProcessorList>` |  |
| `OUTPOST_ROT` | `ResourceKey<StructureProcessorList>` |  |
| `BOTTOM_RAMPART` | `ResourceKey<StructureProcessorList>` |  |
| `TREASURE_ROOMS` | `ResourceKey<StructureProcessorList>` |  |
| `HOUSING` | `ResourceKey<StructureProcessorList>` |  |
| `SIDE_WALL_DEGRADATION` | `ResourceKey<StructureProcessorList>` |  |
| `STABLE_DEGRADATION` | `ResourceKey<StructureProcessorList>` |  |
| `BASTION_GENERIC_DEGRADATION` | `ResourceKey<StructureProcessorList>` |  |
| `RAMPART_DEGRADATION` | `ResourceKey<StructureProcessorList>` |  |
| `ENTRANCE_REPLACEMENT` | `ResourceKey<StructureProcessorList>` |  |
| `BRIDGE` | `ResourceKey<StructureProcessorList>` |  |
| `ROOF` | `ResourceKey<StructureProcessorList>` |  |
| `HIGH_WALL` | `ResourceKey<StructureProcessorList>` |  |
| `HIGH_RAMPART` | `ResourceKey<StructureProcessorList>` |  |
| `FOSSIL_ROT` | `ResourceKey<StructureProcessorList>` |  |
| `FOSSIL_COAL` | `ResourceKey<StructureProcessorList>` |  |
| `FOSSIL_DIAMONDS` | `ResourceKey<StructureProcessorList>` |  |
| `ANCIENT_CITY_START_DEGRADATION` | `ResourceKey<StructureProcessorList>` |  |
| `ANCIENT_CITY_GENERIC_DEGRADATION` | `ResourceKey<StructureProcessorList>` |  |
| `ANCIENT_CITY_WALLS_DEGRADATION` | `ResourceKey<StructureProcessorList>` |  |
| `TRAIL_RUINS_HOUSES_ARCHAEOLOGY` | `ResourceKey<StructureProcessorList>` |  |
| `TRAIL_RUINS_ROADS_ARCHAEOLOGY` | `ResourceKey<StructureProcessorList>` |  |
| `TRAIL_RUINS_TOWER_TOP_ARCHAEOLOGY` | `ResourceKey<StructureProcessorList>` |  |
| `TRIAL_CHAMBERS_COPPER_BULB_DEGRADATION` | `ResourceKey<StructureProcessorList>` |  |

## Methods

### createKey

```java
private static ResourceKey<StructureProcessorList> createKey(String p_256151_)
```

**Parameters:**

- `p_256151_` (`String`)

**Returns:** `private static ResourceKey<StructureProcessorList>`

### register

```java
private static void register(BootstrapContext<StructureProcessorList> p_321548_, ResourceKey<StructureProcessorList> p_256192_, List<StructureProcessor> p_255805_)
```

**Parameters:**

- `p_321548_` (`BootstrapContext<StructureProcessorList>`)
- `p_256192_` (`ResourceKey<StructureProcessorList>`)
- `p_255805_` (`List<StructureProcessor>`)

**Returns:** `private static void`

### bootstrap

```java
public static void bootstrap(BootstrapContext<StructureProcessorList> p_321829_)
```

**Parameters:**

- `p_321829_` (`BootstrapContext<StructureProcessorList>`)

**Returns:** `public static void`

### trailsArchyLootProcessor

```java
private static CappedProcessor trailsArchyLootProcessor(ResourceKey<LootTable> p_335512_, int p_281868_)
```

**Parameters:**

- `p_335512_` (`ResourceKey<LootTable>`)
- `p_281868_` (`int`)

**Returns:** `private static CappedProcessor`
