# TrialSpawnerState

**Package:** `net.minecraft.world.level.block.entity.trialspawner`
**Type:** enum
**Implements:** `StringRepresentable`

## Methods

### COOLDOWN

```java
, COOLDOWN()
```

**Returns:** `,`

### TrialSpawnerState

```java
private TrialSpawnerState(String p_312098_, int p_312873_, TrialSpawnerState.ParticleEmission p_312259_, double p_312005_, boolean p_312451_)
```

**Parameters:**

- `p_312098_` (`String`)
- `p_312873_` (`int`)
- `p_312259_` (`TrialSpawnerState.ParticleEmission`)
- `p_312005_` (`double`)
- `p_312451_` (`boolean`)

**Returns:** `private`

### tickAndGetNext

```java
TrialSpawnerState tickAndGetNext(BlockPos p_312221_, TrialSpawner p_311912_, ServerLevel p_311974_)
```

**Parameters:**

- `p_312221_` (`BlockPos`)
- `p_311912_` (`TrialSpawner`)
- `p_311974_` (`ServerLevel`)

**Returns:** `TrialSpawnerState`

### spawnOminousOminousItemSpawner

```java
private void spawnOminousOminousItemSpawner(ServerLevel p_338483_, BlockPos p_338824_, TrialSpawner p_338767_)
```

**Parameters:**

- `p_338483_` (`ServerLevel`)
- `p_338824_` (`BlockPos`)
- `p_338767_` (`TrialSpawner`)

**Returns:** `private void`

### calculatePositionToSpawnSpawner

```java
private static Optional<Vec3> calculatePositionToSpawnSpawner(ServerLevel p_338436_, BlockPos p_338583_, TrialSpawner p_338226_, TrialSpawnerData p_338461_)
```

**Parameters:**

- `p_338436_` (`ServerLevel`)
- `p_338583_` (`BlockPos`)
- `p_338226_` (`TrialSpawner`)
- `p_338461_` (`TrialSpawnerData`)

**Returns:** `private static Optional<Vec3>`

### calculatePositionAbove

```java
private static Optional<Vec3> calculatePositionAbove(Entity p_338791_, ServerLevel p_338807_)
```

**Parameters:**

- `p_338791_` (`Entity`)
- `p_338807_` (`ServerLevel`)

**Returns:** `private static Optional<Vec3>`

### timeToSpawnItemSpawner

```java
private boolean timeToSpawnItemSpawner(ServerLevel p_338741_, TrialSpawnerData p_338296_)
```

**Parameters:**

- `p_338741_` (`ServerLevel`)
- `p_338296_` (`TrialSpawnerData`)

**Returns:** `private boolean`

### lightLevel

```java
public int lightLevel()
```

**Returns:** `public int`

### spinningMobSpeed

```java
public double spinningMobSpeed()
```

**Returns:** `public double`

### hasSpinningMob

```java
public boolean hasSpinningMob()
```

**Returns:** `public boolean`

### isCapableOfSpawning

```java
public boolean isCapableOfSpawning()
```

**Returns:** `public boolean`

### emitParticles

```java
public void emitParticles(Level p_312507_, BlockPos p_312610_, boolean p_338615_)
```

**Parameters:**

- `p_312507_` (`Level`)
- `p_312610_` (`BlockPos`)
- `p_338615_` (`boolean`)

**Returns:** `public void`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### LightLevel

```java
private LightLevel()
```

**Returns:** `private`

### addParticle

```java
 addParticle(p_338072_ ? ParticleTypes.SOUL_FIRE_FLAME : ParticleTypes.SMALL_FLAME)
```

**Parameters:**

- `ParticleTypes.SMALL_FLAME` (`p_338072_ ? ParticleTypes.SOUL_FIRE_FLAME :`)

**Returns:** ``

### addParticle

```java
 addParticle()
```

**Returns:** ``

### addParticle

```java
 addParticle(p_338068_ ? ParticleTypes.SOUL_FIRE_FLAME : ParticleTypes.FLAME)
```

**Parameters:**

- `ParticleTypes.FLAME` (`p_338068_ ? ParticleTypes.SOUL_FIRE_FLAME :`)

**Returns:** ``

### addParticle

```java
 addParticle()
```

**Returns:** ``

### addParticle

```java
 addParticle()
```

**Returns:** ``

### addParticle

```java
private static void addParticle(SimpleParticleType p_312519_, Vec3 p_312023_, Level p_311937_)
```

**Parameters:**

- `p_312519_` (`SimpleParticleType`)
- `p_312023_` (`Vec3`)
- `p_311937_` (`Level`)

**Returns:** `private static void`

### emit

```java
void emit(Level p_312730_, RandomSource p_312474_, BlockPos p_312127_, boolean p_338742_)
```

**Parameters:**

- `p_312730_` (`Level`)
- `p_312474_` (`RandomSource`)
- `p_312127_` (`BlockPos`)
- `p_338742_` (`boolean`)

### SpinningMob

```java
private SpinningMob()
```

**Returns:** `private`
