# MobSpawnSettingsBuilder

**Package:** `net.neoforged.neoforge.common.world`
**Type:** class
**Extends:** `MobSpawnSettings.Builder`

## Methods

### MobSpawnSettingsBuilder

```java
public MobSpawnSettingsBuilder(MobSpawnSettings orig)
```

**Parameters:**

- `orig` (`MobSpawnSettings`)

**Returns:** `public`

### getSpawnerTypes

```java
public Set<MobCategory> getSpawnerTypes()
```

**Returns:** `public Set<MobCategory>`

### getSpawner

```java
public List<MobSpawnSettings.SpawnerData> getSpawner(MobCategory type)
```

**Parameters:**

- `type` (`MobCategory`)

**Returns:** `public List<MobSpawnSettings.SpawnerData>`

### getEntityTypes

```java
public Set<EntityType<?>> getEntityTypes()
```

**Returns:** `public Set<EntityType<?>>`

### getCost

```java
public MobSpawnSettings.MobSpawnCost getCost(EntityType<?> type)
```

**Parameters:**

- `type` (`EntityType<?>`)

**Returns:** `MobSpawnSettings.MobSpawnCost`

### getProbability

```java
public float getProbability()
```

**Returns:** `public float`

### disablePlayerSpawn

```java
public MobSpawnSettingsBuilder disablePlayerSpawn()
```

**Returns:** `public MobSpawnSettingsBuilder`

### removeSpawnCost

```java
public MobSpawnSettingsBuilder removeSpawnCost(EntityType<?>[]... entityTypes)
```

**Parameters:**

- `entityTypes` (`EntityType<?>[]...`)

**Returns:** `public MobSpawnSettingsBuilder`
