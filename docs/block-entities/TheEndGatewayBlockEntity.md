# TheEndGatewayBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `TheEndPortalBlockEntity`

## Methods

### TheEndGatewayBlockEntity

```java
public TheEndGatewayBlockEntity(BlockPos p_155813_, BlockState p_155814_)
```

**Parameters:**

- `p_155813_` (`BlockPos`)
- `p_155814_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187527_, HolderLookup.Provider p_324553_)
```

**Parameters:**

- `p_187527_` (`CompoundTag`)
- `p_324553_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155840_, HolderLookup.Provider p_323480_)
```

**Parameters:**

- `p_155840_` (`CompoundTag`)
- `p_323480_` (`HolderLookup.Provider`)

### beamAnimationTick

```java
public static void beamAnimationTick(Level p_155835_, BlockPos p_155836_, BlockState p_155837_, TheEndGatewayBlockEntity p_155838_)
```

**Parameters:**

- `p_155835_` (`Level`)
- `p_155836_` (`BlockPos`)
- `p_155837_` (`BlockState`)
- `p_155838_` (`TheEndGatewayBlockEntity`)

**Returns:** `public static void`

### portalTick

```java
public static void portalTick(Level p_350841_, BlockPos p_350745_, BlockState p_350476_, TheEndGatewayBlockEntity p_350562_)
```

**Parameters:**

- `p_350841_` (`Level`)
- `p_350745_` (`BlockPos`)
- `p_350476_` (`BlockState`)
- `p_350562_` (`TheEndGatewayBlockEntity`)

**Returns:** `public static void`

### triggerCooldown

```java
 triggerCooldown()
```

**Returns:** ``

### setChanged

```java
 setChanged()
```

**Returns:** ``

### isSpawning

```java
public boolean isSpawning()
```

**Returns:** `public boolean`

### isCoolingDown

```java
public boolean isCoolingDown()
```

**Returns:** `public boolean`

### getSpawnPercent

```java
public float getSpawnPercent(float p_59934_)
```

**Parameters:**

- `p_59934_` (`float`)

**Returns:** `public float`

### getCooldownPercent

```java
public float getCooldownPercent(float p_59968_)
```

**Parameters:**

- `p_59968_` (`float`)

**Returns:** `public float`

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324313_)
```

**Parameters:**

- `p_324313_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### triggerCooldown

```java
public static void triggerCooldown(Level p_155850_, BlockPos p_155851_, BlockState p_155852_, TheEndGatewayBlockEntity p_155853_)
```

**Parameters:**

- `p_155850_` (`Level`)
- `p_155851_` (`BlockPos`)
- `p_155852_` (`BlockState`)
- `p_155853_` (`TheEndGatewayBlockEntity`)

**Returns:** `public static void`

### setChanged

```java
 setChanged()
```

**Returns:** ``

### triggerEvent

```java
public boolean triggerEvent(int p_59963_, int p_59964_)
```

**Parameters:**

- `p_59963_` (`int`)
- `p_59964_` (`int`)

**Returns:** `boolean`

### getPortalPosition

```java
public Vec3 getPortalPosition(ServerLevel p_350561_, BlockPos p_350271_)
```

**Parameters:**

- `p_350561_` (`ServerLevel`)
- `p_350271_` (`BlockPos`)

**Returns:** `Vec3`

### findExitPosition

```java
private static BlockPos findExitPosition(Level p_155826_, BlockPos p_155827_)
```

**Parameters:**

- `p_155826_` (`Level`)
- `p_155827_` (`BlockPos`)

**Returns:** `private static BlockPos`

### findOrCreateValidTeleportPos

```java
private static BlockPos findOrCreateValidTeleportPos(ServerLevel p_155819_, BlockPos p_155820_)
```

**Parameters:**

- `p_155819_` (`ServerLevel`)
- `p_155820_` (`BlockPos`)

**Returns:** `private static BlockPos`

### findTallestBlock

```java
return findTallestBlock()
```

**Returns:** `return`

### findExitPortalXZPosTentative

```java
private static Vec3 findExitPortalXZPosTentative(ServerLevel p_155842_, BlockPos p_155843_)
```

**Parameters:**

- `p_155842_` (`ServerLevel`)
- `p_155843_` (`BlockPos`)

**Returns:** `private static Vec3`

### isChunkEmpty

```java
private static boolean isChunkEmpty(ServerLevel p_155816_, Vec3 p_155817_)
```

**Parameters:**

- `p_155816_` (`ServerLevel`)
- `p_155817_` (`Vec3`)

**Returns:** `private static boolean`

### findTallestBlock

```java
private static BlockPos findTallestBlock(BlockGetter p_59943_, BlockPos p_59944_, int p_59945_, boolean p_59946_)
```

**Parameters:**

- `p_59943_` (`BlockGetter`)
- `p_59944_` (`BlockPos`)
- `p_59945_` (`int`)
- `p_59946_` (`boolean`)

**Returns:** `private static BlockPos`

### getChunk

```java
private static LevelChunk getChunk(Level p_59948_, Vec3 p_59949_)
```

**Parameters:**

- `p_59948_` (`Level`)
- `p_59949_` (`Vec3`)

**Returns:** `private static LevelChunk`

### spawnGatewayPortal

```java
private static void spawnGatewayPortal(ServerLevel p_155822_, BlockPos p_155823_, EndGatewayConfiguration p_155824_)
```

**Parameters:**

- `p_155822_` (`ServerLevel`)
- `p_155823_` (`BlockPos`)
- `p_155824_` (`EndGatewayConfiguration`)

**Returns:** `private static void`

### shouldRenderFace

```java
public boolean shouldRenderFace(Direction p_59959_)
```

**Parameters:**

- `p_59959_` (`Direction`)

**Returns:** `boolean`

### getParticleAmount

```java
public int getParticleAmount()
```

**Returns:** `public int`

### setExitPosition

```java
public void setExitPosition(BlockPos p_59956_, boolean p_59957_)
```

**Parameters:**

- `p_59956_` (`BlockPos`)
- `p_59957_` (`boolean`)

**Returns:** `public void`
