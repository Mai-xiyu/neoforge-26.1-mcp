# Raids

**Package:** `net.minecraft.world.entity.raid`
**Type:** class
**Extends:** `SavedData`

## Methods

### factory

```java
public static SavedData.Factory<Raids> factory(ServerLevel p_295840_)
```

**Parameters:**

- `p_295840_` (`ServerLevel`)

**Returns:** `public static SavedData.Factory<Raids>`

### Raids

```java
public Raids(ServerLevel p_37956_)
```

**Parameters:**

- `p_37956_` (`ServerLevel`)

**Returns:** `public`

### get

```java
public Raid get(int p_37959_)
```

**Parameters:**

- `p_37959_` (`int`)

**Returns:** `public Raid`

### tick

```java
public void tick()
```

**Returns:** `public void`

### canJoinRaid

```java
public static boolean canJoinRaid(Raider p_37966_, Raid p_37967_)
```

**Parameters:**

- `p_37966_` (`Raider`)
- `p_37967_` (`Raid`)

**Returns:** `public static boolean`

### createOrExtendRaid

```java
public Raid createOrExtendRaid(ServerPlayer p_37964_, BlockPos p_338602_)
```

**Parameters:**

- `p_37964_` (`ServerPlayer`)
- `p_338602_` (`BlockPos`)

**Returns:** `Raid`

### getOrCreateRaid

```java
private Raid getOrCreateRaid(ServerLevel p_37961_, BlockPos p_37962_)
```

**Parameters:**

- `p_37961_` (`ServerLevel`)
- `p_37962_` (`BlockPos`)

**Returns:** `private Raid`

### load

```java
public static Raids load(ServerLevel p_150236_, CompoundTag p_150237_)
```

**Parameters:**

- `p_150236_` (`ServerLevel`)
- `p_150237_` (`CompoundTag`)

**Returns:** `public static Raids`

### save

```java
public CompoundTag save(CompoundTag p_37976_, HolderLookup.Provider p_323890_)
```

**Parameters:**

- `p_37976_` (`CompoundTag`)
- `p_323890_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### getFileId

```java
public static String getFileId(Holder<DimensionType> p_211597_)
```

**Parameters:**

- `p_211597_` (`Holder<DimensionType>`)

**Returns:** `public static String`

### getUniqueId

```java
private int getUniqueId()
```

**Returns:** `private int`

### getNearbyRaid

```java
public Raid getNearbyRaid(BlockPos p_37971_, int p_37972_)
```

**Parameters:**

- `p_37971_` (`BlockPos`)
- `p_37972_` (`int`)

**Returns:** `Raid`
