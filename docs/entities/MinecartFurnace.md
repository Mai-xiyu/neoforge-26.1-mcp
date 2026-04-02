# MinecartFurnace

**Package:** `net.minecraft.world.entity.vehicle`
**Type:** class
**Extends:** `AbstractMinecart`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `xPush` | `double` |  |
| `zPush` | `double` |  |

## Methods

### MinecartFurnace

```java
public MinecartFurnace(EntityType<? extends MinecartFurnace> p_38552_, Level p_38553_)
```

**Parameters:**

- `p_38552_` (`EntityType<? extends MinecartFurnace>`)
- `p_38553_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### MinecartFurnace

```java
public MinecartFurnace(Level p_38555_, double p_38556_, double p_38557_, double p_38558_)
```

**Parameters:**

- `p_38555_` (`Level`)
- `p_38556_` (`double`)
- `p_38557_` (`double`)
- `p_38558_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getMinecartType

```java
public AbstractMinecart.Type getMinecartType()
```

**Returns:** `AbstractMinecart.Type`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326389_)
```

**Parameters:**

- `p_326389_` (`SynchedEntityData.Builder`)

### tick

```java
public void tick()
```

### getMaxSpeed

```java
protected double getMaxSpeed()
```

**Returns:** `double`

### getDropItem

```java
protected Item getDropItem()
```

**Returns:** `Item`

### moveAlongTrack

```java
protected void moveAlongTrack(BlockPos p_38569_, BlockState p_38570_)
```

**Parameters:**

- `p_38569_` (`BlockPos`)
- `p_38570_` (`BlockState`)

### applyNaturalSlowdown

```java
protected void applyNaturalSlowdown()
```

### interact

```java
public InteractionResult interact(Player p_38562_, InteractionHand p_38563_)
```

**Parameters:**

- `p_38562_` (`Player`)
- `p_38563_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getMaxCartSpeedOnRail

```java
public float getMaxCartSpeedOnRail()
```

**Returns:** `float`

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_38567_)
```

**Parameters:**

- `p_38567_` (`CompoundTag`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_38565_)
```

**Parameters:**

- `p_38565_` (`CompoundTag`)

### hasFuel

```java
protected boolean hasFuel()
```

**Returns:** `protected boolean`

### setHasFuel

```java
protected void setHasFuel(boolean p_38577_)
```

**Parameters:**

- `p_38577_` (`boolean`)

**Returns:** `protected void`

### getDefaultDisplayBlockState

```java
public BlockState getDefaultDisplayBlockState()
```

**Returns:** `BlockState`
