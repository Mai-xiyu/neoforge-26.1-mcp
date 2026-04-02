# FishingHook

**Package:** `net.minecraft.world.entity.projectile`
**Type:** class
**Extends:** `Projectile`

## Methods

### FishingHook

```java
private FishingHook(EntityType<? extends FishingHook> p_150141_, Level p_150142_, int p_150143_, int p_150144_)
```

**Parameters:**

- `p_150141_` (`EntityType<? extends FishingHook>`)
- `p_150142_` (`Level`)
- `p_150143_` (`int`)
- `p_150144_` (`int`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### FishingHook

```java
public FishingHook(EntityType<? extends FishingHook> p_150138_, Level p_150139_)
```

**Parameters:**

- `p_150138_` (`EntityType<? extends FishingHook>`)
- `p_150139_` (`Level`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### FishingHook

```java
public FishingHook(Player p_37106_, Level p_37107_, int p_37108_, int p_37109_)
```

**Parameters:**

- `p_37106_` (`Player`)
- `p_37107_` (`Level`)
- `p_37108_` (`int`)
- `p_37109_` (`int`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326397_)
```

**Parameters:**

- `p_326397_` (`SynchedEntityData.Builder`)

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_37153_)
```

**Parameters:**

- `p_37153_` (`EntityDataAccessor<?>`)

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_37125_)
```

**Parameters:**

- `p_37125_` (`double`)

**Returns:** `boolean`

### lerpTo

```java
public void lerpTo(double p_37127_, double p_37128_, double p_37129_, float p_37130_, float p_37131_, int p_37132_)
```

**Parameters:**

- `p_37127_` (`double`)
- `p_37128_` (`double`)
- `p_37129_` (`double`)
- `p_37130_` (`float`)
- `p_37131_` (`float`)
- `p_37132_` (`int`)

### tick

```java
public void tick()
```

### shouldStopFishing

```java
private boolean shouldStopFishing(Player p_37137_)
```

**Parameters:**

- `p_37137_` (`Player`)

**Returns:** `private boolean`

### checkCollision

```java
private void checkCollision()
```

**Returns:** `private void`

### canHitEntity

```java
protected boolean canHitEntity(Entity p_37135_)
```

**Parameters:**

- `p_37135_` (`Entity`)

**Returns:** `boolean`

### onHitEntity

```java
protected void onHitEntity(EntityHitResult p_37144_)
```

**Parameters:**

- `p_37144_` (`EntityHitResult`)

### onHitBlock

```java
protected void onHitBlock(BlockHitResult p_37142_)
```

**Parameters:**

- `p_37142_` (`BlockHitResult`)

### setHookedEntity

```java
private void setHookedEntity(Entity p_150158_)
```

**Parameters:**

- `p_150158_` (`Entity`)

**Returns:** `private void`

### catchingFish

```java
private void catchingFish(BlockPos p_37146_)
```

**Parameters:**

- `p_37146_` (`BlockPos`)

**Returns:** `private void`

### calculateOpenWater

```java
private boolean calculateOpenWater(BlockPos p_37159_)
```

**Parameters:**

- `p_37159_` (`BlockPos`)

**Returns:** `private boolean`

### getOpenWaterTypeForArea

```java
private FishingHook.OpenWaterType getOpenWaterTypeForArea(BlockPos p_37148_, BlockPos p_37149_)
```

**Parameters:**

- `p_37148_` (`BlockPos`)
- `p_37149_` (`BlockPos`)

**Returns:** `private FishingHook.OpenWaterType`

### getOpenWaterTypeForBlock

```java
private FishingHook.OpenWaterType getOpenWaterTypeForBlock(BlockPos p_37164_)
```

**Parameters:**

- `p_37164_` (`BlockPos`)

**Returns:** `private FishingHook.OpenWaterType`

### isOpenWaterFishing

```java
public boolean isOpenWaterFishing()
```

**Returns:** `public boolean`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_37161_)
```

**Parameters:**

- `p_37161_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_37151_)
```

**Parameters:**

- `p_37151_` (`CompoundTag`)

### retrieve

```java
public int retrieve(ItemStack p_37157_)
```

**Parameters:**

- `p_37157_` (`ItemStack`)

**Returns:** `public int`

### handleEntityEvent

```java
public void handleEntityEvent(byte p_37123_)
```

**Parameters:**

- `p_37123_` (`byte`)

### pullEntity

```java
protected void pullEntity(Entity p_150156_)
```

**Parameters:**

- `p_150156_` (`Entity`)

**Returns:** `protected void`

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### remove

```java
public void remove(Entity.RemovalReason p_150146_)
```

**Parameters:**

- `p_150146_` (`Entity.RemovalReason`)

### onClientRemoval

```java
public void onClientRemoval()
```

### setOwner

```java
public void setOwner(Entity p_150154_)
```

**Parameters:**

- `p_150154_` (`Entity`)

### updateOwnerInfo

```java
private void updateOwnerInfo(FishingHook p_150148_)
```

**Parameters:**

- `p_150148_` (`FishingHook`)

**Returns:** `private void`

### getPlayerOwner

```java
public Player getPlayerOwner()
```

**Returns:** `Player`

### getHookedIn

```java
public Entity getHookedIn()
```

**Returns:** `Entity`

### canUsePortal

```java
public boolean canUsePortal(boolean p_352895_)
```

**Parameters:**

- `p_352895_` (`boolean`)

**Returns:** `boolean`

### getAddEntityPacket

```java
public Packet<ClientGamePacketListener> getAddEntityPacket(ServerEntity p_352092_)
```

**Parameters:**

- `p_352092_` (`ServerEntity`)

**Returns:** `Packet<ClientGamePacketListener>`

### recreateFromPacket

```java
public void recreateFromPacket(ClientboundAddEntityPacket p_150150_)
```

**Parameters:**

- `p_150150_` (`ClientboundAddEntityPacket`)
