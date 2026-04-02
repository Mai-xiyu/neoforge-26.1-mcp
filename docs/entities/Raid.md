# Raid

**Package:** `net.minecraft.world.entity.raid`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `VILLAGE_RADIUS_BUFFER` | `int` |  |
| `MAX_NO_ACTION_TIME` | `int` |  |
| `MAX_CELEBRATION_TICKS` | `int` |  |
| `TICKS_PER_DAY` | `int` |  |
| `DEFAULT_MAX_RAID_OMEN_LEVEL` | `int` |  |
| `VALID_RAID_RADIUS_SQR` | `int` |  |
| `RAID_REMOVAL_THRESHOLD_SQR` | `int` |  |

## Methods

### Raid

```java
public Raid(int p_37692_, ServerLevel p_37693_, BlockPos p_37694_)
```

**Parameters:**

- `p_37692_` (`int`)
- `p_37693_` (`ServerLevel`)
- `p_37694_` (`BlockPos`)

**Returns:** `public`

### Raid

```java
public Raid(ServerLevel p_37696_, CompoundTag p_37697_)
```

**Parameters:**

- `p_37696_` (`ServerLevel`)
- `p_37697_` (`CompoundTag`)

**Returns:** `public`

### isOver

```java
public boolean isOver()
```

**Returns:** `public boolean`

### isBetweenWaves

```java
public boolean isBetweenWaves()
```

**Returns:** `public boolean`

### hasFirstWaveSpawned

```java
public boolean hasFirstWaveSpawned()
```

**Returns:** `public boolean`

### isStopped

```java
public boolean isStopped()
```

**Returns:** `public boolean`

### isVictory

```java
public boolean isVictory()
```

**Returns:** `public boolean`

### isLoss

```java
public boolean isLoss()
```

**Returns:** `public boolean`

### getTotalHealth

```java
public float getTotalHealth()
```

**Returns:** `public float`

### getAllRaiders

```java
public Set<Raider> getAllRaiders()
```

**Returns:** `public Set<Raider>`

### getLevel

```java
public Level getLevel()
```

**Returns:** `public Level`

### isStarted

```java
public boolean isStarted()
```

**Returns:** `public boolean`

### getGroupsSpawned

```java
public int getGroupsSpawned()
```

**Returns:** `public int`

### validPlayer

```java
private Predicate<ServerPlayer> validPlayer()
```

**Returns:** `private Predicate<ServerPlayer>`

### updatePlayers

```java
private void updatePlayers()
```

**Returns:** `private void`

### getMaxRaidOmenLevel

```java
public int getMaxRaidOmenLevel()
```

**Returns:** `public int`

### getRaidOmenLevel

```java
public int getRaidOmenLevel()
```

**Returns:** `public int`

### setRaidOmenLevel

```java
public void setRaidOmenLevel(int p_338727_)
```

**Parameters:**

- `p_338727_` (`int`)

**Returns:** `public void`

### absorbRaidOmen

```java
public boolean absorbRaidOmen(ServerPlayer p_338621_)
```

**Parameters:**

- `p_338621_` (`ServerPlayer`)

**Returns:** `public boolean`

### stop

```java
public void stop()
```

**Returns:** `public void`

### tick

```java
public void tick()
```

**Returns:** `public void`

### moveRaidCenterToNearbyVillageSection

```java
private void moveRaidCenterToNearbyVillageSection()
```

**Returns:** `private void`

### getValidSpawnPos

```java
private Optional<BlockPos> getValidSpawnPos(int p_37764_)
```

**Parameters:**

- `p_37764_` (`int`)

**Returns:** `private Optional<BlockPos>`

### hasMoreWaves

```java
private boolean hasMoreWaves()
```

**Returns:** `private boolean`

### isFinalWave

```java
private boolean isFinalWave()
```

**Returns:** `private boolean`

### hasBonusWave

```java
private boolean hasBonusWave()
```

**Returns:** `private boolean`

### hasSpawnedBonusWave

```java
private boolean hasSpawnedBonusWave()
```

**Returns:** `private boolean`

### shouldSpawnBonusGroup

```java
private boolean shouldSpawnBonusGroup()
```

**Returns:** `private boolean`

### updateRaiders

```java
private void updateRaiders()
```

**Returns:** `private void`

### playSound

```java
private void playSound(BlockPos p_37744_)
```

**Parameters:**

- `p_37744_` (`BlockPos`)

**Returns:** `private void`

### spawnGroup

```java
private void spawnGroup(BlockPos p_37756_)
```

**Parameters:**

- `p_37756_` (`BlockPos`)

**Returns:** `private void`

### joinRaid

```java
public void joinRaid(int p_37714_, Raider p_37715_, BlockPos p_37716_, boolean p_37717_)
```

**Parameters:**

- `p_37714_` (`int`)
- `p_37715_` (`Raider`)
- `p_37716_` (`BlockPos`)
- `p_37717_` (`boolean`)

**Returns:** `public void`

### updateBossbar

```java
public void updateBossbar()
```

**Returns:** `public void`

### getHealthOfLivingRaiders

```java
public float getHealthOfLivingRaiders()
```

**Returns:** `public float`

### shouldSpawnGroup

```java
private boolean shouldSpawnGroup()
```

**Returns:** `private boolean`

### getTotalRaidersAlive

```java
public int getTotalRaidersAlive()
```

**Returns:** `public int`

### removeFromRaid

```java
public void removeFromRaid(Raider p_37741_, boolean p_37742_)
```

**Parameters:**

- `p_37741_` (`Raider`)
- `p_37742_` (`boolean`)

**Returns:** `public void`

### setDirty

```java
private void setDirty()
```

**Returns:** `private void`

### getLeaderBannerInstance

```java
public static ItemStack getLeaderBannerInstance(HolderGetter<BannerPattern> p_332748_)
```

**Parameters:**

- `p_332748_` (`HolderGetter<BannerPattern>`)

**Returns:** `public static ItemStack`

### getLeader

```java
public Raider getLeader(int p_37751_)
```

**Parameters:**

- `p_37751_` (`int`)

**Returns:** `Raider`

### addWaveMob

```java
private boolean addWaveMob(int p_37753_, Raider p_37754_)
```

**Parameters:**

- `p_37753_` (`int`)
- `p_37754_` (`Raider`)

**Returns:** `private boolean`

### addWaveMob

```java
public boolean addWaveMob(int p_37719_, Raider p_37720_, boolean p_37721_)
```

**Parameters:**

- `p_37719_` (`int`)
- `p_37720_` (`Raider`)
- `p_37721_` (`boolean`)

**Returns:** `public boolean`

### setLeader

```java
public void setLeader(int p_37711_, Raider p_37712_)
```

**Parameters:**

- `p_37711_` (`int`)
- `p_37712_` (`Raider`)

**Returns:** `public void`

### removeLeader

```java
public void removeLeader(int p_37759_)
```

**Parameters:**

- `p_37759_` (`int`)

**Returns:** `public void`

### getCenter

```java
public BlockPos getCenter()
```

**Returns:** `public BlockPos`

### setCenter

```java
private void setCenter(BlockPos p_37761_)
```

**Parameters:**

- `p_37761_` (`BlockPos`)

**Returns:** `private void`

### getId

```java
public int getId()
```

**Returns:** `public int`

### getDefaultNumSpawns

```java
private int getDefaultNumSpawns(Raid.RaiderType p_37731_, int p_37732_, boolean p_37733_)
```

**Parameters:**

- `p_37731_` (`Raid.RaiderType`)
- `p_37732_` (`int`)
- `p_37733_` (`boolean`)

**Returns:** `private int`

### getPotentialBonusSpawns

```java
private int getPotentialBonusSpawns(Raid.RaiderType p_219829_, RandomSource p_219830_, int p_219831_, DifficultyInstance p_219832_, boolean p_219833_)
```

**Parameters:**

- `p_219829_` (`Raid.RaiderType`)
- `p_219830_` (`RandomSource`)
- `p_219831_` (`int`)
- `p_219832_` (`DifficultyInstance`)
- `p_219833_` (`boolean`)

**Returns:** `private int`

### isActive

```java
public boolean isActive()
```

**Returns:** `public boolean`

### save

```java
public CompoundTag save(CompoundTag p_37748_)
```

**Parameters:**

- `p_37748_` (`CompoundTag`)

**Returns:** `public CompoundTag`

### getNumGroups

```java
public int getNumGroups(Difficulty p_37725_)
```

**Parameters:**

- `p_37725_` (`Difficulty`)

**Returns:** `public int`

### getEnchantOdds

```java
public float getEnchantOdds()
```

**Returns:** `public float`

### addHeroOfTheVillage

```java
public void addHeroOfTheVillage(Entity p_37727_)
```

**Parameters:**

- `p_37727_` (`Entity`)

**Returns:** `public void`

### getByName

```java
static Raid.RaidStatus getByName(String p_37804_)
```

**Parameters:**

- `p_37804_` (`String`)

**Returns:** `static Raid.RaidStatus`

### getName

```java
public String getName()
```

**Returns:** `public String`

### RAVAGER

```java
, RAVAGER(new int[]{0)
```

**Parameters:**

- `int[]{0` (`new`)

**Returns:** `,`

### RaiderType

```java
.neoforged.fml.common.asm.enumextension.ReservedConstructor
        private RaiderType(EntityType<? extends Raider> p_37821_, int[] p_37822_)
```

**Parameters:**

- `p_37821_` (`EntityType<? extends Raider>`)
- `p_37822_` (`int[]`)

**Returns:** `.neoforged.fml.common.asm.enumextension.ReservedConstructor
        private`

### RaiderType

```java
private RaiderType(java.util.function.Supplier<EntityType<? extends Raider>> entityTypeSupplier, int[] spawnsPerWave)
```

**Parameters:**

- `entityTypeSupplier` (`java.util.function.Supplier<EntityType<? extends Raider>>`)
- `spawnsPerWave` (`int[]`)

**Returns:** `private`

### getExtensionInfo

```java
public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo getExtensionInfo()
```

**Returns:** `public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `RaiderType` | enum |  |
