# SharedConstants

**Package:** `net.minecraft`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SNBT_NAG_VERSION` | `int` |  |
| `CRASH_EAGERLY` | `boolean` |  |
| `REPORT_FORMAT_VERSION` | `int` |  |
| `DATA_VERSION_TAG` | `String` |  |
| `FIX_TNT_DUPE` | `boolean` |  |
| `FIX_SAND_DUPE` | `boolean` |  |
| `USE_DEBUG_FEATURES` | `boolean` |  |
| `DEBUG_OPEN_INCOMPATIBLE_WORLDS` | `boolean` |  |
| `DEBUG_ALLOW_LOW_SIM_DISTANCE` | `boolean` |  |
| `DEBUG_HOTKEYS` | `boolean` |  |
| `DEBUG_UI_NARRATION` | `boolean` |  |
| `DEBUG_RENDER` | `boolean` |  |
| `DEBUG_PATHFINDING` | `boolean` |  |
| `DEBUG_WATER` | `boolean` |  |
| `DEBUG_HEIGHTMAP` | `boolean` |  |
| `DEBUG_COLLISION` | `boolean` |  |
| `DEBUG_SHOW_LOCAL_SERVER_ENTITY_HIT_BOXES` | `boolean` |  |
| `DEBUG_SUPPORT_BLOCKS` | `boolean` |  |
| `DEBUG_SHAPES` | `boolean` |  |
| `DEBUG_NEIGHBORSUPDATE` | `boolean` |  |
| `DEBUG_STRUCTURES` | `boolean` |  |
| `DEBUG_LIGHT` | `boolean` |  |
| `DEBUG_SKY_LIGHT_SECTIONS` | `boolean` |  |
| `DEBUG_WORLDGENATTEMPT` | `boolean` |  |
| `DEBUG_SOLID_FACE` | `boolean` |  |
| `DEBUG_CHUNKS` | `boolean` |  |
| `DEBUG_GAME_EVENT_LISTENERS` | `boolean` |  |
| `DEBUG_DUMP_TEXTURE_ATLAS` | `boolean` |  |
| `DEBUG_DUMP_INTERPOLATED_TEXTURE_FRAMES` | `boolean` |  |
| `DEBUG_STRUCTURE_EDIT_MODE` | `boolean` |  |
| `DEBUG_SAVE_STRUCTURES_AS_SNBT` | `boolean` |  |
| `DEBUG_SYNCHRONOUS_GL_LOGS` | `boolean` |  |
| `DEBUG_VERBOSE_SERVER_EVENTS` | `boolean` |  |
| `DEBUG_NAMED_RUNNABLES` | `boolean` |  |
| `DEBUG_GOAL_SELECTOR` | `boolean` |  |
| `DEBUG_VILLAGE_SECTIONS` | `boolean` |  |
| `DEBUG_BRAIN` | `boolean` |  |
| `DEBUG_BEES` | `boolean` |  |
| `DEBUG_RAIDS` | `boolean` |  |
| `DEBUG_BLOCK_BREAK` | `boolean` |  |
| `DEBUG_RESOURCE_LOAD_TIMES` | `boolean` |  |
| `DEBUG_MONITOR_TICK_TIMES` | `boolean` |  |
| `DEBUG_KEEP_JIGSAW_BLOCKS_DURING_STRUCTURE_GEN` | `boolean` |  |
| `DEBUG_DONT_SAVE_WORLD` | `boolean` |  |
| `DEBUG_LARGE_DRIPSTONE` | `boolean` |  |
| `DEBUG_CARVERS` | `boolean` |  |
| `DEBUG_ORE_VEINS` | `boolean` |  |
| `DEBUG_SCULK_CATALYST` | `boolean` |  |
| `DEBUG_BYPASS_REALMS_VERSION_CHECK` | `boolean` |  |
| `DEBUG_SOCIAL_INTERACTIONS` | `boolean` |  |
| `DEBUG_VALIDATE_RESOURCE_PATH_CASE` | `boolean` |  |
| `DEBUG_UNLOCK_ALL_TRADES` | `boolean` |  |
| `DEBUG_BREEZE_MOB` | `boolean` |  |
| `DEBUG_TRIAL_SPAWNER_DETECTS_SHEEP_AS_PLAYERS` | `boolean` |  |
| `DEBUG_VAULT_DETECTS_SHEEP_AS_PLAYERS` | `boolean` |  |
| `DEBUG_FORCE_ONBOARDING_SCREEN` | `boolean` |  |
| `DEBUG_IGNORE_LOCAL_MOB_CAP` | `boolean` |  |
| `DEBUG_DISABLE_LIQUID_SPREADING` | `boolean` |  |
| `DEBUG_AQUIFERS` | `boolean` |  |
| `DEBUG_JFR_PROFILING_ENABLE_LEVEL_LOADING` | `boolean` |  |
| `debugGenerateSquareTerrainWithoutNoise` | `boolean` |  |
| `debugGenerateStripedTerrainWithoutNoise` | `boolean` |  |
| `DEBUG_ONLY_GENERATE_HALF_THE_WORLD` | `boolean` |  |
| `DEBUG_DISABLE_FLUID_GENERATION` | `boolean` |  |
| `DEBUG_DISABLE_AQUIFERS` | `boolean` |  |

## Methods

### setVersion

```java
public static void setVersion(WorldVersion p_183706_)
```

**Parameters:**

- `p_183706_` (`WorldVersion`)

**Returns:** `public static void`

### IllegalStateException

```java
throw new IllegalStateException("Cannot override the current game version!")
```

**Parameters:**

- `version!"` (`"Cannot override the current game`)

**Returns:** `throw new`

### tryDetectVersion

```java
public static void tryDetectVersion()
```

**Returns:** `public static void`

### getCurrentVersion

```java
public static WorldVersion getCurrentVersion()
```

**Returns:** `public static WorldVersion`

### IllegalStateException

```java
throw new IllegalStateException("Game version not set")
```

**Parameters:**

- `set"` (`"Game version not`)

**Returns:** `throw new`

### getProtocolVersion

```java
public static int getProtocolVersion()
```

**Returns:** `public static int`

### debugVoidTerrain

```java
public static boolean debugVoidTerrain(ChunkPos p_183708_)
```

**Parameters:**

- `p_183708_` (`ChunkPos`)

**Returns:** `public static boolean`
