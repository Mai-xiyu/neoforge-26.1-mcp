# TrialSpawnerData

**Package:** `net.minecraft.world.level.block.entity.trialspawner`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TAG_SPAWN_DATA` | `String` |  |
| `MAP_CODEC` | `MapCodec<TrialSpawnerData>` |  |
| `detectedPlayers` | `Set<UUID>` |  |
| `currentMobs` | `Set<UUID>` |  |
| `cooldownEndsAt` | `long` |  |
| `nextMobSpawnsAt` | `long` |  |
| `totalMobsSpawned` | `int` |  |
| `nextSpawnData` | `Optional<SpawnData>` |  |
| `ejectingLootTable` | `Optional<ResourceKey<LootTable>>` |  |
| `spin` | `double` |  |
| `oSpin` | `double` |  |

## Methods

### TrialSpawnerData

```java
public TrialSpawnerData()
```

**Returns:** `public`

### TrialSpawnerData

```java
public TrialSpawnerData(Set<UUID> p_312283_, Set<UUID> p_312919_, long p_312537_, long p_311955_, int p_312227_, Optional<SpawnData> p_312562_, Optional<ResourceKey<LootTable>> p_312406_)
```

**Parameters:**

- `p_312283_` (`Set<UUID>`)
- `p_312919_` (`Set<UUID>`)
- `p_312537_` (`long`)
- `p_311955_` (`long`)
- `p_312227_` (`int`)
- `p_312562_` (`Optional<SpawnData>`)
- `p_312406_` (`Optional<ResourceKey<LootTable>>`)

**Returns:** `public`

### reset

```java
public void reset()
```

**Returns:** `public void`

### hasMobToSpawn

```java
public boolean hasMobToSpawn(TrialSpawner p_331432_, RandomSource p_330985_)
```

**Parameters:**

- `p_331432_` (`TrialSpawner`)
- `p_330985_` (`RandomSource`)

**Returns:** `public boolean`

### hasFinishedSpawningAllMobs

```java
public boolean hasFinishedSpawningAllMobs(TrialSpawnerConfig p_311805_, int p_312034_)
```

**Parameters:**

- `p_311805_` (`TrialSpawnerConfig`)
- `p_312034_` (`int`)

**Returns:** `public boolean`

### haveAllCurrentMobsDied

```java
public boolean haveAllCurrentMobsDied()
```

**Returns:** `public boolean`

### isReadyToSpawnNextMob

```java
public boolean isReadyToSpawnNextMob(ServerLevel p_311818_, TrialSpawnerConfig p_312100_, int p_312550_)
```

**Parameters:**

- `p_311818_` (`ServerLevel`)
- `p_312100_` (`TrialSpawnerConfig`)
- `p_312550_` (`int`)

**Returns:** `public boolean`

### countAdditionalPlayers

```java
public int countAdditionalPlayers(BlockPos p_312262_)
```

**Parameters:**

- `p_312262_` (`BlockPos`)

**Returns:** `public int`

### tryDetectPlayers

```java
public void tryDetectPlayers(ServerLevel p_311852_, BlockPos p_312503_, TrialSpawner p_338452_)
```

**Parameters:**

- `p_311852_` (`ServerLevel`)
- `p_312503_` (`BlockPos`)
- `p_338452_` (`TrialSpawner`)

**Returns:** `public void`

### transformBadOmenIntoTrialOmen

```java
 transformBadOmenIntoTrialOmen()
```

**Returns:** ``

### findPlayerWithOminousEffect

```java
private static Optional<Pair<Player, Holder<MobEffect>>> findPlayerWithOminousEffect(ServerLevel p_350655_, List<UUID> p_350735_)
```

**Parameters:**

- `p_350655_` (`ServerLevel`)
- `p_350735_` (`List<UUID>`)

**Returns:** `private static Optional<Pair<Player, Holder<MobEffect>>>`

### resetAfterBecomingOminous

```java
public void resetAfterBecomingOminous(TrialSpawner p_338478_, ServerLevel p_338185_)
```

**Parameters:**

- `p_338478_` (`TrialSpawner`)
- `p_338185_` (`ServerLevel`)

**Returns:** `public void`

### transformBadOmenIntoTrialOmen

```java
private static void transformBadOmenIntoTrialOmen(Player p_338616_)
```

**Parameters:**

- `p_338616_` (`Player`)

**Returns:** `private static void`

### isReadyToOpenShutter

```java
public boolean isReadyToOpenShutter(ServerLevel p_312291_, float p_312417_, int p_338634_)
```

**Parameters:**

- `p_312291_` (`ServerLevel`)
- `p_312417_` (`float`)
- `p_338634_` (`int`)

**Returns:** `public boolean`

### isReadyToEjectItems

```java
public boolean isReadyToEjectItems(ServerLevel p_312692_, float p_312374_, int p_338651_)
```

**Parameters:**

- `p_312692_` (`ServerLevel`)
- `p_312374_` (`float`)
- `p_338651_` (`int`)

**Returns:** `public boolean`

### isCooldownFinished

```java
public boolean isCooldownFinished(ServerLevel p_312743_)
```

**Parameters:**

- `p_312743_` (`ServerLevel`)

**Returns:** `public boolean`

### setEntityId

```java
public void setEntityId(TrialSpawner p_312044_, RandomSource p_312864_, EntityType<?> p_312415_)
```

**Parameters:**

- `p_312044_` (`TrialSpawner`)
- `p_312864_` (`RandomSource`)
- `p_312415_` (`EntityType<?>`)

**Returns:** `public void`

### getOrCreateNextSpawnData

```java
protected SpawnData getOrCreateNextSpawnData(TrialSpawner p_312745_, RandomSource p_312242_)
```

**Parameters:**

- `p_312745_` (`TrialSpawner`)
- `p_312242_` (`RandomSource`)

**Returns:** `protected SpawnData`

### getOrCreateDisplayEntity

```java
public Entity getOrCreateDisplayEntity(TrialSpawner p_312366_, Level p_312148_, TrialSpawnerState p_311790_)
```

**Parameters:**

- `p_312366_` (`TrialSpawner`)
- `p_312148_` (`Level`)
- `p_311790_` (`TrialSpawnerState`)

**Returns:** `Entity`

### getUpdateTag

```java
public CompoundTag getUpdateTag(TrialSpawnerState p_312104_)
```

**Parameters:**

- `p_312104_` (`TrialSpawnerState`)

**Returns:** `public CompoundTag`

### getSpin

```java
public double getSpin()
```

**Returns:** `public double`

### getOSpin

```java
public double getOSpin()
```

**Returns:** `public double`

### getDispensingItems

```java
SimpleWeightedRandomList<ItemStack> getDispensingItems(ServerLevel p_338857_, TrialSpawnerConfig p_338213_, BlockPos p_338577_)
```

**Parameters:**

- `p_338857_` (`ServerLevel`)
- `p_338213_` (`TrialSpawnerConfig`)
- `p_338577_` (`BlockPos`)

**Returns:** `SimpleWeightedRandomList<ItemStack>`

### lowResolutionPosition

```java
private static long lowResolutionPosition(ServerLevel p_338878_, BlockPos p_338542_)
```

**Parameters:**

- `p_338878_` (`ServerLevel`)
- `p_338542_` (`BlockPos`)

**Returns:** `private static long`
