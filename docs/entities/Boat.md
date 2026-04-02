# Boat

**Package:** `net.minecraft.world.entity.vehicle`
**Type:** class
**Extends:** `VehicleEntity`
**Implements:** `Leashable`, `VariantHolder<Boat.Type>`, `net.neoforged.neoforge.common.extensions.IBoatExtension`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `PADDLE_LEFT` | `int` |  |
| `PADDLE_RIGHT` | `int` |  |
| `PADDLE_SOUND_TIME` | `double` |  |
| `BUBBLE_TIME` | `int` |  |

## Methods

### Boat

```java
public Boat(EntityType<? extends Boat> p_38290_, Level p_38291_)
```

**Parameters:**

- `p_38290_` (`EntityType<? extends Boat>`)
- `p_38291_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### Boat

```java
public Boat(Level p_38293_, double p_38294_, double p_38295_, double p_38296_)
```

**Parameters:**

- `p_38293_` (`Level`)
- `p_38294_` (`double`)
- `p_38295_` (`double`)
- `p_38296_` (`double`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### getMovementEmission

```java
protected Entity.MovementEmission getMovementEmission()
```

**Returns:** `Entity.MovementEmission`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326198_)
```

**Parameters:**

- `p_326198_` (`SynchedEntityData.Builder`)

### canCollideWith

```java
public boolean canCollideWith(Entity p_38376_)
```

**Parameters:**

- `p_38376_` (`Entity`)

**Returns:** `boolean`

### canVehicleCollide

```java
return canVehicleCollide()
```

**Returns:** `return`

### canVehicleCollide

```java
public static boolean canVehicleCollide(Entity p_38324_, Entity p_38325_)
```

**Parameters:**

- `p_38324_` (`Entity`)
- `p_38325_` (`Entity`)

**Returns:** `public static boolean`

### canBeCollidedWith

```java
public boolean canBeCollidedWith()
```

**Returns:** `boolean`

### isPushable

```java
public boolean isPushable()
```

**Returns:** `boolean`

### getRelativePortalPosition

```java
public Vec3 getRelativePortalPosition(Direction.Axis p_38335_, BlockUtil.FoundRectangle p_38336_)
```

**Parameters:**

- `p_38335_` (`Direction.Axis`)
- `p_38336_` (`BlockUtil.FoundRectangle`)

**Returns:** `Vec3`

### getPassengerAttachmentPoint

```java
protected Vec3 getPassengerAttachmentPoint(Entity p_294665_, EntityDimensions p_295933_, float p_295585_)
```

**Parameters:**

- `p_294665_` (`Entity`)
- `p_295933_` (`EntityDimensions`)
- `p_295585_` (`float`)

**Returns:** `Vec3`

### onAboveBubbleCol

```java
public void onAboveBubbleCol(boolean p_38381_)
```

**Parameters:**

- `p_38381_` (`boolean`)

### push

```java
public void push(Entity p_38373_)
```

**Parameters:**

- `p_38373_` (`Entity`)

### getDropItem

```java
public Item getDropItem()
```

**Returns:** `Item`

### animateHurt

```java
public void animateHurt(float p_265761_)
```

**Parameters:**

- `p_265761_` (`float`)

### isPickable

```java
public boolean isPickable()
```

**Returns:** `boolean`

### lerpTo

```java
public void lerpTo(double p_38299_, double p_38300_, double p_38301_, float p_38302_, float p_38303_, int p_38304_)
```

**Parameters:**

- `p_38299_` (`double`)
- `p_38300_` (`double`)
- `p_38301_` (`double`)
- `p_38302_` (`float`)
- `p_38303_` (`float`)
- `p_38304_` (`int`)

### lerpTargetX

```java
public double lerpTargetX()
```

**Returns:** `double`

### lerpTargetY

```java
public double lerpTargetY()
```

**Returns:** `double`

### lerpTargetZ

```java
public double lerpTargetZ()
```

**Returns:** `double`

### lerpTargetXRot

```java
public float lerpTargetXRot()
```

**Returns:** `float`

### lerpTargetYRot

```java
public float lerpTargetYRot()
```

**Returns:** `float`

### getMotionDirection

```java
public Direction getMotionDirection()
```

**Returns:** `Direction`

### tick

```java
public void tick()
```

### tickBubbleColumn

```java
private void tickBubbleColumn()
```

**Returns:** `private void`

### getPaddleSound

```java
protected SoundEvent getPaddleSound()
```

**Returns:** `SoundEvent`

### tickLerp

```java
private void tickLerp()
```

**Returns:** `private void`

### setPaddleState

```java
public void setPaddleState(boolean p_38340_, boolean p_38341_)
```

**Parameters:**

- `p_38340_` (`boolean`)
- `p_38341_` (`boolean`)

**Returns:** `public void`

### getRowingTime

```java
public float getRowingTime(int p_38316_, float p_38317_)
```

**Parameters:**

- `p_38316_` (`int`)
- `p_38317_` (`float`)

**Returns:** `public float`

### getLeashData

```java
public Leashable.LeashData getLeashData()
```

**Returns:** `Leashable.LeashData`

### setLeashData

```java
public void setLeashData(Leashable.LeashData p_352187_)
```

**Parameters:**

- `p_352187_` (`Leashable.LeashData`)

### getLeashOffset

```java
public Vec3 getLeashOffset()
```

**Returns:** `Vec3`

### elasticRangeLeashBehaviour

```java
public void elasticRangeLeashBehaviour(Entity p_353067_, float p_353071_)
```

**Parameters:**

- `p_353067_` (`Entity`)
- `p_353071_` (`float`)

### getStatus

```java
private Boat.Status getStatus()
```

**Returns:** `private Boat.Status`

### getWaterLevelAbove

```java
public float getWaterLevelAbove()
```

**Returns:** `public float`

### getGroundFriction

```java
public float getGroundFriction()
```

**Returns:** `public float`

### checkInWater

```java
private boolean checkInWater()
```

**Returns:** `private boolean`

### getDefaultGravity

```java
protected double getDefaultGravity()
```

**Returns:** `double`

### floatBoat

```java
private void floatBoat()
```

**Returns:** `private void`

### controlBoat

```java
private void controlBoat()
```

**Returns:** `private void`

### getSinglePassengerXOffset

```java
protected float getSinglePassengerXOffset()
```

**Returns:** `protected float`

### hasEnoughSpaceFor

```java
public boolean hasEnoughSpaceFor(Entity p_273171_)
```

**Parameters:**

- `p_273171_` (`Entity`)

**Returns:** `public boolean`

### positionRider

```java
protected void positionRider(Entity p_289552_, Entity.MoveFunction p_289571_)
```

**Parameters:**

- `p_289552_` (`Entity`)
- `p_289571_` (`Entity.MoveFunction`)

### getDismountLocationForPassenger

```java
public Vec3 getDismountLocationForPassenger(LivingEntity p_38357_)
```

**Parameters:**

- `p_38357_` (`LivingEntity`)

**Returns:** `Vec3`

### clampRotation

```java
protected void clampRotation(Entity p_38322_)
```

**Parameters:**

- `p_38322_` (`Entity`)

**Returns:** `protected void`

### onPassengerTurned

```java
public void onPassengerTurned(Entity p_38383_)
```

**Parameters:**

- `p_38383_` (`Entity`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_38359_)
```

**Parameters:**

- `p_38359_` (`CompoundTag`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_38338_)
```

**Parameters:**

- `p_38338_` (`CompoundTag`)

### interact

```java
public InteractionResult interact(Player p_38330_, InteractionHand p_38331_)
```

**Parameters:**

- `p_38330_` (`Player`)
- `p_38331_` (`InteractionHand`)

**Returns:** `InteractionResult`

### remove

```java
public void remove(Entity.RemovalReason p_352927_)
```

**Parameters:**

- `p_352927_` (`Entity.RemovalReason`)

### checkFallDamage

```java
protected void checkFallDamage(double p_38307_, boolean p_38308_, BlockState p_38309_, BlockPos p_38310_)
```

**Parameters:**

- `p_38307_` (`double`)
- `p_38308_` (`boolean`)
- `p_38309_` (`BlockState`)
- `p_38310_` (`BlockPos`)

### getPaddleState

```java
public boolean getPaddleState(int p_38314_)
```

**Parameters:**

- `p_38314_` (`int`)

**Returns:** `public boolean`

### setBubbleTime

```java
private void setBubbleTime(int p_38367_)
```

**Parameters:**

- `p_38367_` (`int`)

**Returns:** `private void`

### getBubbleTime

```java
private int getBubbleTime()
```

**Returns:** `private int`

### getBubbleAngle

```java
public float getBubbleAngle(float p_38353_)
```

**Parameters:**

- `p_38353_` (`float`)

**Returns:** `public float`

### setVariant

```java
public void setVariant(Boat.Type p_38333_)
```

**Parameters:**

- `p_38333_` (`Boat.Type`)

**Returns:** `public void`

### getVariant

```java
public Boat.Type getVariant()
```

**Returns:** `public Boat.Type`

### canAddPassenger

```java
protected boolean canAddPassenger(Entity p_38390_)
```

**Parameters:**

- `p_38390_` (`Entity`)

**Returns:** `boolean`

### getMaxPassengers

```java
protected int getMaxPassengers()
```

**Returns:** `protected int`

### getControllingPassenger

```java
public LivingEntity getControllingPassenger()
```

**Returns:** `LivingEntity`

### setInput

```java
public void setInput(boolean p_38343_, boolean p_38344_, boolean p_38345_, boolean p_38346_)
```

**Parameters:**

- `p_38343_` (`boolean`)
- `p_38344_` (`boolean`)
- `p_38345_` (`boolean`)
- `p_38346_` (`boolean`)

**Returns:** `public void`

### getTypeName

```java
protected Component getTypeName()
```

**Returns:** `Component`

### isUnderWater

```java
public boolean isUnderWater()
```

**Returns:** `boolean`

### getPickResult

```java
public ItemStack getPickResult()
```

**Returns:** `ItemStack`

### BAMBOO

```java
, BAMBOO()
```

**Returns:** `,`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### getName

```java
public String getName()
```

**Returns:** `public String`

### getPlanks

```java
public Block getPlanks()
```

**Returns:** `public Block`

### getSticks

```java
public Item getSticks()
```

**Returns:** `public Item`

### isRaft

```java
public boolean isRaft()
```

**Returns:** `public boolean`

### toString

```java
public String toString()
```

**Returns:** `String`

### byId

```java
public static Boat.Type byId(int p_38431_)
```

**Parameters:**

- `p_38431_` (`int`)

**Returns:** `public static Boat.Type`

### byName

```java
public static Boat.Type byName(String p_38433_)
```

**Parameters:**

- `p_38433_` (`String`)

**Returns:** `public static Boat.Type`

### getExtensionInfo

```java
public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo getExtensionInfo()
```

**Returns:** `public static net.neoforged.fml.common.asm.enumextension.ExtensionInfo`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Status` | enum |  |
| `Type` | enum |  |
