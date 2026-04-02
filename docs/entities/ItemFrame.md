# ItemFrame

**Package:** `net.minecraft.world.entity.decoration`
**Type:** class
**Extends:** `HangingEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `NUM_ROTATIONS` | `int` |  |

## Methods

### ItemFrame

```java
public ItemFrame(EntityType<? extends ItemFrame> p_31761_, Level p_31762_)
```

**Parameters:**

- `p_31761_` (`EntityType<? extends ItemFrame>`)
- `p_31762_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### ItemFrame

```java
public ItemFrame(Level p_31764_, BlockPos p_31765_, Direction p_31766_)
```

**Parameters:**

- `p_31764_` (`Level`)
- `p_31765_` (`BlockPos`)
- `p_31766_` (`Direction`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### ItemFrame

```java
public ItemFrame(EntityType<? extends ItemFrame> p_149621_, Level p_149622_, BlockPos p_149623_, Direction p_149624_)
```

**Parameters:**

- `p_149621_` (`EntityType<? extends ItemFrame>`)
- `p_149622_` (`Level`)
- `p_149623_` (`BlockPos`)
- `p_149624_` (`Direction`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_325987_)
```

**Parameters:**

- `p_325987_` (`SynchedEntityData.Builder`)

### setDirection

```java
protected void setDirection(Direction p_31793_)
```

**Parameters:**

- `p_31793_` (`Direction`)

### calculateBoundingBox

```java
protected AABB calculateBoundingBox(BlockPos p_345363_, Direction p_344892_)
```

**Parameters:**

- `p_345363_` (`BlockPos`)
- `p_344892_` (`Direction`)

**Returns:** `AABB`

### survives

```java
public boolean survives()
```

**Returns:** `boolean`

### move

```java
public void move(MoverType p_31781_, Vec3 p_31782_)
```

**Parameters:**

- `p_31781_` (`MoverType`)
- `p_31782_` (`Vec3`)

### push

```java
public void push(double p_31817_, double p_31818_, double p_31819_)
```

**Parameters:**

- `p_31817_` (`double`)
- `p_31818_` (`double`)
- `p_31819_` (`double`)

### kill

```java
public void kill()
```

### hurt

```java
public boolean hurt(DamageSource p_31776_, float p_31777_)
```

**Parameters:**

- `p_31776_` (`DamageSource`)
- `p_31777_` (`float`)

**Returns:** `boolean`

### getRemoveItemSound

```java
public SoundEvent getRemoveItemSound()
```

**Returns:** `public SoundEvent`

### shouldRenderAtSqrDistance

```java
public boolean shouldRenderAtSqrDistance(double p_31769_)
```

**Parameters:**

- `p_31769_` (`double`)

**Returns:** `boolean`

### dropItem

```java
public void dropItem(Entity p_31779_)
```

**Parameters:**

- `p_31779_` (`Entity`)

### getBreakSound

```java
public SoundEvent getBreakSound()
```

**Returns:** `public SoundEvent`

### playPlacementSound

```java
public void playPlacementSound()
```

### getPlaceSound

```java
public SoundEvent getPlaceSound()
```

**Returns:** `public SoundEvent`

### dropItem

```java
private void dropItem(Entity p_31803_, boolean p_31804_)
```

**Parameters:**

- `p_31803_` (`Entity`)
- `p_31804_` (`boolean`)

**Returns:** `private void`

### removeFramedMap

```java
private void removeFramedMap(ItemStack p_31811_)
```

**Parameters:**

- `p_31811_` (`ItemStack`)

**Returns:** `private void`

### getItem

```java
public ItemStack getItem()
```

**Returns:** `public ItemStack`

### getFramedMapId

```java
public MapId getFramedMapId(ItemStack p_353029_)
```

**Parameters:**

- `p_353029_` (`ItemStack`)

**Returns:** `MapId`

### hasFramedMap

```java
public boolean hasFramedMap()
```

**Returns:** `public boolean`

### setItem

```java
public void setItem(ItemStack p_31806_)
```

**Parameters:**

- `p_31806_` (`ItemStack`)

**Returns:** `public void`

### setItem

```java
public void setItem(ItemStack p_31790_, boolean p_31791_)
```

**Parameters:**

- `p_31790_` (`ItemStack`)
- `p_31791_` (`boolean`)

**Returns:** `public void`

### getAddItemSound

```java
public SoundEvent getAddItemSound()
```

**Returns:** `public SoundEvent`

### getSlot

```java
public SlotAccess getSlot(int p_149629_)
```

**Parameters:**

- `p_149629_` (`int`)

**Returns:** `SlotAccess`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_31797_)
```

**Parameters:**

- `p_31797_` (`EntityDataAccessor<?>`)

### onItemChanged

```java
private void onItemChanged(ItemStack p_218866_)
```

**Parameters:**

- `p_218866_` (`ItemStack`)

**Returns:** `private void`

### getRotation

```java
public int getRotation()
```

**Returns:** `public int`

### setRotation

```java
public void setRotation(int p_31771_)
```

**Parameters:**

- `p_31771_` (`int`)

**Returns:** `public void`

### setRotation

```java
private void setRotation(int p_31773_, boolean p_31774_)
```

**Parameters:**

- `p_31773_` (`int`)
- `p_31774_` (`boolean`)

**Returns:** `private void`

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_31808_)
```

**Parameters:**

- `p_31808_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_31795_)
```

**Parameters:**

- `p_31795_` (`CompoundTag`)

### interact

```java
public InteractionResult interact(Player p_31787_, InteractionHand p_31788_)
```

**Parameters:**

- `p_31787_` (`Player`)
- `p_31788_` (`InteractionHand`)

**Returns:** `InteractionResult`

### getRotateItemSound

```java
public SoundEvent getRotateItemSound()
```

**Returns:** `public SoundEvent`

### getAnalogOutput

```java
public int getAnalogOutput()
```

**Returns:** `public int`

### getAddEntityPacket

```java
public Packet<ClientGamePacketListener> getAddEntityPacket(ServerEntity p_352300_)
```

**Parameters:**

- `p_352300_` (`ServerEntity`)

**Returns:** `Packet<ClientGamePacketListener>`

### recreateFromPacket

```java
public void recreateFromPacket(ClientboundAddEntityPacket p_149626_)
```

**Parameters:**

- `p_149626_` (`ClientboundAddEntityPacket`)

### getPickResult

```java
public ItemStack getPickResult()
```

**Returns:** `ItemStack`

### getFrameItemStack

```java
protected ItemStack getFrameItemStack()
```

**Returns:** `protected ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

### getVisualRotationYInDegrees

```java
public float getVisualRotationYInDegrees()
```

**Returns:** `float`
