# ConduitBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `tickCount` | `int` |  |

## Methods

### ConduitBlockEntity

```java
public ConduitBlockEntity(BlockPos p_155397_, BlockState p_155398_)
```

**Parameters:**

- `p_155397_` (`BlockPos`)
- `p_155398_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338591_, HolderLookup.Provider p_338280_)
```

**Parameters:**

- `p_338591_` (`CompoundTag`)
- `p_338280_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187495_, HolderLookup.Provider p_323702_)
```

**Parameters:**

- `p_187495_` (`CompoundTag`)
- `p_323702_` (`HolderLookup.Provider`)

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324390_)
```

**Parameters:**

- `p_324390_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### clientTick

```java
public static void clientTick(Level p_155404_, BlockPos p_155405_, BlockState p_155406_, ConduitBlockEntity p_155407_)
```

**Parameters:**

- `p_155404_` (`Level`)
- `p_155405_` (`BlockPos`)
- `p_155406_` (`BlockState`)
- `p_155407_` (`ConduitBlockEntity`)

**Returns:** `public static void`

### updateHunting

```java
 updateHunting()
```

**Returns:** ``

### updateClientTarget

```java
 updateClientTarget()
```

**Returns:** ``

### animationTick

```java
 animationTick()
```

**Returns:** ``

### serverTick

```java
public static void serverTick(Level p_155439_, BlockPos p_155440_, BlockState p_155441_, ConduitBlockEntity p_155442_)
```

**Parameters:**

- `p_155439_` (`Level`)
- `p_155440_` (`BlockPos`)
- `p_155441_` (`BlockState`)
- `p_155442_` (`ConduitBlockEntity`)

**Returns:** `public static void`

### updateHunting

```java
 updateHunting()
```

**Returns:** ``

### applyEffects

```java
 applyEffects()
```

**Returns:** ``

### updateDestroyTarget

```java
 updateDestroyTarget()
```

**Returns:** ``

### updateHunting

```java
private static void updateHunting(ConduitBlockEntity p_155429_, List<BlockPos> p_155430_)
```

**Parameters:**

- `p_155429_` (`ConduitBlockEntity`)
- `p_155430_` (`List<BlockPos>`)

**Returns:** `private static void`

### updateShape

```java
private static boolean updateShape(Level p_155415_, BlockPos p_155416_, List<BlockPos> p_155417_)
```

**Parameters:**

- `p_155415_` (`Level`)
- `p_155416_` (`BlockPos`)
- `p_155417_` (`List<BlockPos>`)

**Returns:** `private static boolean`

### applyEffects

```java
private static void applyEffects(Level p_155444_, BlockPos p_155445_, List<BlockPos> p_155446_)
```

**Parameters:**

- `p_155444_` (`Level`)
- `p_155445_` (`BlockPos`)
- `p_155446_` (`List<BlockPos>`)

**Returns:** `private static void`

### updateDestroyTarget

```java
private static void updateDestroyTarget(Level p_155409_, BlockPos p_155410_, BlockState p_155411_, List<BlockPos> p_155412_, ConduitBlockEntity p_155413_)
```

**Parameters:**

- `p_155409_` (`Level`)
- `p_155410_` (`BlockPos`)
- `p_155411_` (`BlockState`)
- `p_155412_` (`List<BlockPos>`)
- `p_155413_` (`ConduitBlockEntity`)

**Returns:** `private static void`

### updateClientTarget

```java
private static void updateClientTarget(Level p_155400_, BlockPos p_155401_, ConduitBlockEntity p_155402_)
```

**Parameters:**

- `p_155400_` (`Level`)
- `p_155401_` (`BlockPos`)
- `p_155402_` (`ConduitBlockEntity`)

**Returns:** `private static void`

### getDestroyRangeAABB

```java
private static AABB getDestroyRangeAABB(BlockPos p_155432_)
```

**Parameters:**

- `p_155432_` (`BlockPos`)

**Returns:** `private static AABB`

### animationTick

```java
private static void animationTick(Level p_155419_, BlockPos p_155420_, List<BlockPos> p_155421_, Entity p_155422_, int p_155423_)
```

**Parameters:**

- `p_155419_` (`Level`)
- `p_155420_` (`BlockPos`)
- `p_155421_` (`List<BlockPos>`)
- `p_155422_` (`Entity`)
- `p_155423_` (`int`)

**Returns:** `private static void`

### isActive

```java
public boolean isActive()
```

**Returns:** `public boolean`

### isHunting

```java
public boolean isHunting()
```

**Returns:** `public boolean`

### setHunting

```java
private void setHunting(boolean p_59215_)
```

**Parameters:**

- `p_59215_` (`boolean`)

**Returns:** `private void`

### getActiveRotation

```java
public float getActiveRotation(float p_59198_)
```

**Parameters:**

- `p_59198_` (`float`)

**Returns:** `public float`
