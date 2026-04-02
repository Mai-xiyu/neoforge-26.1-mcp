# Noises

**Package:** `net.minecraft.world.level.levelgen`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TEMPERATURE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `VEGETATION` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `CONTINENTALNESS` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `EROSION` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `TEMPERATURE_LARGE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `VEGETATION_LARGE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `CONTINENTALNESS_LARGE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `EROSION_LARGE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `RIDGE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SHIFT` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `AQUIFER_BARRIER` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `AQUIFER_FLUID_LEVEL_FLOODEDNESS` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `AQUIFER_LAVA` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `AQUIFER_FLUID_LEVEL_SPREAD` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `PILLAR` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `PILLAR_RARENESS` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `PILLAR_THICKNESS` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_2D` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_2D_ELEVATION` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_2D_MODULATOR` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_2D_THICKNESS` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_3D_1` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_3D_2` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_3D_RARITY` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_3D_THICKNESS` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_ROUGHNESS` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SPAGHETTI_ROUGHNESS_MODULATOR` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `CAVE_ENTRANCE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `CAVE_LAYER` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `CAVE_CHEESE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `ORE_VEININESS` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `ORE_VEIN_A` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `ORE_VEIN_B` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `ORE_GAP` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `NOODLE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `NOODLE_THICKNESS` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `NOODLE_RIDGE_A` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `NOODLE_RIDGE_B` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `JAGGED` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SURFACE` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `SURFACE_SECONDARY` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `CLAY_BANDS_OFFSET` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `BADLANDS_PILLAR` | `ResourceKey<NormalNoise.NoiseParameters>` |  |
| `BADLANDS_PILLAR_ROOF` | `ResourceKey<NormalNoise.NoiseParameters>` |  |

## Methods

### createKey

```java
private static ResourceKey<NormalNoise.NoiseParameters> createKey(String p_189310_)
```

**Parameters:**

- `p_189310_` (`String`)

**Returns:** `private static ResourceKey<NormalNoise.NoiseParameters>`

### instantiate

```java
public static NormalNoise instantiate(HolderGetter<NormalNoise.NoiseParameters> p_256362_, PositionalRandomFactory p_256306_, ResourceKey<NormalNoise.NoiseParameters> p_256639_)
```

**Parameters:**

- `p_256362_` (`HolderGetter<NormalNoise.NoiseParameters>`)
- `p_256306_` (`PositionalRandomFactory`)
- `p_256639_` (`ResourceKey<NormalNoise.NoiseParameters>`)

**Returns:** `public static NormalNoise`
