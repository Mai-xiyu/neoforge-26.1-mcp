# BeehiveBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `MAX_OCCUPANTS` | `int` |  |
| `MIN_OCCUPATION_TICKS_NECTARLESS` | `int` |  |

## Methods

### BeehiveBlockEntity

```java
public BeehiveBlockEntity(BlockPos p_155134_, BlockState p_155135_)
```

**Parameters:**

- `p_155134_` (`BlockPos`)
- `p_155135_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setChanged

```java
public void setChanged()
```

### isFireNearby

```java
public boolean isFireNearby()
```

**Returns:** `public boolean`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### isFull

```java
public boolean isFull()
```

**Returns:** `public boolean`

### emptyAllLivingFromHive

```java
public void emptyAllLivingFromHive(Player p_58749_, BlockState p_58750_, BeehiveBlockEntity.BeeReleaseStatus p_58751_)
```

**Parameters:**

- `p_58749_` (`Player`)
- `p_58750_` (`BlockState`)
- `p_58751_` (`BeehiveBlockEntity.BeeReleaseStatus`)

**Returns:** `public void`

### releaseAllOccupants

```java
private List<Entity> releaseAllOccupants(BlockState p_58760_, BeehiveBlockEntity.BeeReleaseStatus p_58761_)
```

**Parameters:**

- `p_58760_` (`BlockState`)
- `p_58761_` (`BeehiveBlockEntity.BeeReleaseStatus`)

**Returns:** `private List<Entity>`

### getOccupantCount

```java
public int getOccupantCount()
```

**Returns:** `int`

### getHoneyLevel

```java
public static int getHoneyLevel(BlockState p_58753_)
```

**Parameters:**

- `p_58753_` (`BlockState`)

**Returns:** `public static int`

### isSedated

```java
public boolean isSedated()
```

**Returns:** `boolean`

### addOccupant

```java
public void addOccupant(Entity p_58742_)
```

**Parameters:**

- `p_58742_` (`Entity`)

**Returns:** `public void`

### storeBee

```java
public void storeBee(BeehiveBlockEntity.Occupant p_330820_)
```

**Parameters:**

- `p_330820_` (`BeehiveBlockEntity.Occupant`)

**Returns:** `public void`

### releaseOccupant

```java
private static boolean releaseOccupant(Level p_155137_, BlockPos p_155138_, BlockState p_155139_, BeehiveBlockEntity.Occupant p_332184_, List<Entity> p_155141_, BeehiveBlockEntity.BeeReleaseStatus p_155142_, BlockPos p_155143_)
```

**Parameters:**

- `p_155137_` (`Level`)
- `p_155138_` (`BlockPos`)
- `p_155139_` (`BlockState`)
- `p_332184_` (`BeehiveBlockEntity.Occupant`)
- `p_155141_` (`List<Entity>`)
- `p_155142_` (`BeehiveBlockEntity.BeeReleaseStatus`)
- `p_155143_` (`BlockPos`)

**Returns:** `private static boolean`

### hasSavedFlowerPos

```java
private boolean hasSavedFlowerPos()
```

**Returns:** `private boolean`

### tickOccupants

```java
private static void tickOccupants(Level p_155150_, BlockPos p_155151_, BlockState p_155152_, List<BeehiveBlockEntity.BeeData> p_155153_, BlockPos p_155154_)
```

**Parameters:**

- `p_155150_` (`Level`)
- `p_155151_` (`BlockPos`)
- `p_155152_` (`BlockState`)
- `p_155153_` (`List<BeehiveBlockEntity.BeeData>`)
- `p_155154_` (`BlockPos`)

**Returns:** `private static void`

### setChanged

```java
 setChanged()
```

**Returns:** ``

### serverTick

```java
public static void serverTick(Level p_155145_, BlockPos p_155146_, BlockState p_155147_, BeehiveBlockEntity p_155148_)
```

**Parameters:**

- `p_155145_` (`Level`)
- `p_155146_` (`BlockPos`)
- `p_155147_` (`BlockState`)
- `p_155148_` (`BeehiveBlockEntity`)

**Returns:** `public static void`

### tickOccupants

```java
 tickOccupants()
```

**Returns:** ``

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338675_, HolderLookup.Provider p_338666_)
```

**Parameters:**

- `p_338675_` (`CompoundTag`)
- `p_338666_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187467_, HolderLookup.Provider p_324426_)
```

**Parameters:**

- `p_187467_` (`CompoundTag`)
- `p_324426_` (`HolderLookup.Provider`)

### applyImplicitComponents

```java
protected void applyImplicitComponents(BlockEntity.DataComponentInput p_338335_)
```

**Parameters:**

- `p_338335_` (`BlockEntity.DataComponentInput`)

### collectImplicitComponents

```java
protected void collectImplicitComponents(DataComponentMap.Builder p_338773_)
```

**Parameters:**

- `p_338773_` (`DataComponentMap.Builder`)

### removeComponentsFromTag

```java
public void removeComponentsFromTag(CompoundTag p_331127_)
```

**Parameters:**

- `p_331127_` (`CompoundTag`)

### getBees

```java
private List<BeehiveBlockEntity.Occupant> getBees()
```

**Returns:** `private List<BeehiveBlockEntity.Occupant>`

### BeeData

```java
 BeeData(BeehiveBlockEntity.Occupant p_331832_)
```

**Parameters:**

- `p_331832_` (`BeehiveBlockEntity.Occupant`)

**Returns:** ``

### tick

```java
public boolean tick()
```

**Returns:** `public boolean`

### toOccupant

```java
public BeehiveBlockEntity.Occupant toOccupant()
```

**Returns:** `public BeehiveBlockEntity.Occupant`

### hasNectar

```java
public boolean hasNectar()
```

**Returns:** `public boolean`

### Occupant

```java
public static record Occupant(CustomData entityData, int ticksInHive, int minTicksInHive)
```

**Parameters:**

- `entityData` (`CustomData`)
- `ticksInHive` (`int`)
- `minTicksInHive` (`int`)

**Returns:** `public static record`

### of

```java
public static BeehiveBlockEntity.Occupant of(Entity p_331485_)
```

**Parameters:**

- `p_331485_` (`Entity`)

**Returns:** `public static BeehiveBlockEntity.Occupant`

### create

```java
public static BeehiveBlockEntity.Occupant create(int p_331115_)
```

**Parameters:**

- `p_331115_` (`int`)

**Returns:** `public static BeehiveBlockEntity.Occupant`

### createEntity

```java
public Entity createEntity(Level p_331790_, BlockPos p_330712_)
```

**Parameters:**

- `p_331790_` (`Level`)
- `p_330712_` (`BlockPos`)

**Returns:** `Entity`

### setBeeReleaseData

```java
 setBeeReleaseData()
```

**Returns:** ``

### setBeeReleaseData

```java
private static void setBeeReleaseData(int p_331728_, Bee p_331988_)
```

**Parameters:**

- `p_331728_` (`int`)
- `p_331988_` (`Bee`)

**Returns:** `private static void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BeeReleaseStatus` | enum |  |
| `Occupant` | record |  |
