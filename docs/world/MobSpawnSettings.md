# MobSpawnSettings

**Package:** `net.minecraft.world.level.biome`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY_MOB_LIST` | `WeightedRandomList<MobSpawnSettings.SpawnerData>` |  |
| `EMPTY` | `MobSpawnSettings` |  |
| `CODEC` | `MapCodec<MobSpawnSettings>` |  |
| `spawners` | `Map<MobCategory, List<MobSpawnSettings.SpawnerData>>` |  |
| `mobSpawnCosts` | `Map<EntityType<?>, MobSpawnSettings.MobSpawnCost>` |  |
| `creatureGenerationProbability` | `float` |  |

## Methods

### MobSpawnSettings

```java
 MobSpawnSettings(float p_196689_, Map<MobCategory, WeightedRandomList<MobSpawnSettings.SpawnerData>> p_196690_, Map<EntityType<?>, MobSpawnSettings.MobSpawnCost> p_196691_)
```

**Parameters:**

- `p_196689_` (`float`)
- `p_196690_` (`Map<MobCategory, WeightedRandomList<MobSpawnSettings.SpawnerData>>`)
- `p_196691_` (`Map<EntityType<?>, MobSpawnSettings.MobSpawnCost>`)

**Returns:** ``

### getMobs

```java
public WeightedRandomList<MobSpawnSettings.SpawnerData> getMobs(MobCategory p_151799_)
```

**Parameters:**

- `p_151799_` (`MobCategory`)

**Returns:** `public WeightedRandomList<MobSpawnSettings.SpawnerData>`

### getSpawnerTypes

```java
public java.util.Set<MobCategory> getSpawnerTypes()
```

**Returns:** `public java.util.Set<MobCategory>`

### getMobSpawnCost

```java
public MobSpawnSettings.MobSpawnCost getMobSpawnCost(EntityType<?> p_48346_)
```

**Parameters:**

- `p_48346_` (`EntityType<?>`)

**Returns:** `MobSpawnSettings.MobSpawnCost`

### getEntityTypes

```java
public java.util.Set<EntityType<?>> getEntityTypes()
```

**Returns:** `public java.util.Set<EntityType<?>>`

### getCreatureProbability

```java
public float getCreatureProbability()
```

**Returns:** `public float`

### addSpawn

```java
public MobSpawnSettings.Builder addSpawn(MobCategory p_48377_, MobSpawnSettings.SpawnerData p_48378_)
```

**Parameters:**

- `p_48377_` (`MobCategory`)
- `p_48378_` (`MobSpawnSettings.SpawnerData`)

**Returns:** `public MobSpawnSettings.Builder`

### addMobCharge

```java
public MobSpawnSettings.Builder addMobCharge(EntityType<?> p_48371_, double p_48372_, double p_48373_)
```

**Parameters:**

- `p_48371_` (`EntityType<?>`)
- `p_48372_` (`double`)
- `p_48373_` (`double`)

**Returns:** `public MobSpawnSettings.Builder`

### creatureGenerationProbability

```java
public MobSpawnSettings.Builder creatureGenerationProbability(float p_48369_)
```

**Parameters:**

- `p_48369_` (`float`)

**Returns:** `public MobSpawnSettings.Builder`

### build

```java
public MobSpawnSettings build()
```

**Returns:** `public MobSpawnSettings`

### MobSpawnCost

```java
public static record MobSpawnCost(double energyBudget, double charge)
```

**Parameters:**

- `energyBudget` (`double`)
- `charge` (`double`)

**Returns:** `public static record`

### SpawnerData

```java
public SpawnerData(EntityType<?> p_48409_, int p_48410_, int p_48411_, int p_48412_)
```

**Parameters:**

- `p_48409_` (`EntityType<?>`)
- `p_48410_` (`int`)
- `p_48411_` (`int`)
- `p_48412_` (`int`)

**Returns:** `public`

### SpawnerData

```java
public SpawnerData(EntityType<?> p_151815_, Weight p_151816_, int p_151817_, int p_151818_)
```

**Parameters:**

- `p_151815_` (`EntityType<?>`)
- `p_151816_` (`Weight`)
- `p_151817_` (`int`)
- `p_151818_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### toString

```java
public String toString()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `MobSpawnCost` | record |  |
| `SpawnerData` | class |  |
