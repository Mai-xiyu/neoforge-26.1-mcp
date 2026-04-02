# Painting

**Package:** `net.minecraft.world.entity.decoration`
**Type:** class
**Extends:** `HangingEntity`
**Implements:** `VariantHolder<Holder<PaintingVariant>>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `VARIANT_MAP_CODEC` | `MapCodec<Holder<PaintingVariant>>` |  |
| `VARIANT_CODEC` | `Codec<Holder<PaintingVariant>>` |  |
| `DEPTH` | `float` |  |

## Methods

### Painting

```java
public Painting(EntityType<? extends Painting> p_31904_, Level p_31905_)
```

**Parameters:**

- `p_31904_` (`EntityType<? extends Painting>`)
- `p_31905_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326078_)
```

**Parameters:**

- `p_326078_` (`SynchedEntityData.Builder`)

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_218896_)
```

**Parameters:**

- `p_218896_` (`EntityDataAccessor<?>`)

### setVariant

```java
public void setVariant(Holder<PaintingVariant> p_218892_)
```

**Parameters:**

- `p_218892_` (`Holder<PaintingVariant>`)

**Returns:** `public void`

### getVariant

```java
public Holder<PaintingVariant> getVariant()
```

**Returns:** `public Holder<PaintingVariant>`

### create

```java
public static Optional<Painting> create(Level p_218888_, BlockPos p_218889_, Direction p_218890_)
```

**Parameters:**

- `p_218888_` (`Level`)
- `p_218889_` (`BlockPos`)
- `p_218890_` (`Direction`)

**Returns:** `public static Optional<Painting>`

### variantArea

```java
private static int variantArea(Holder<PaintingVariant> p_218899_)
```

**Parameters:**

- `p_218899_` (`Holder<PaintingVariant>`)

**Returns:** `private static int`

### Painting

```java
private Painting(Level p_218874_, BlockPos p_218875_)
```

**Parameters:**

- `p_218874_` (`Level`)
- `p_218875_` (`BlockPos`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### Painting

```java
public Painting(Level p_218877_, BlockPos p_218878_, Direction p_218879_, Holder<PaintingVariant> p_218880_)
```

**Parameters:**

- `p_218877_` (`Level`)
- `p_218878_` (`BlockPos`)
- `p_218879_` (`Direction`)
- `p_218880_` (`Holder<PaintingVariant>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_31935_)
```

**Parameters:**

- `p_31935_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_31927_)
```

**Parameters:**

- `p_31927_` (`CompoundTag`)

### calculateBoundingBox

```java
protected AABB calculateBoundingBox(BlockPos p_344831_, Direction p_345917_)
```

**Parameters:**

- `p_344831_` (`BlockPos`)
- `p_345917_` (`Direction`)

**Returns:** `AABB`

### offsetForPaintingSize

```java
private double offsetForPaintingSize(int p_345028_)
```

**Parameters:**

- `p_345028_` (`int`)

**Returns:** `private double`

### dropItem

```java
public void dropItem(Entity p_31925_)
```

**Parameters:**

- `p_31925_` (`Entity`)

### playPlacementSound

```java
public void playPlacementSound()
```

### moveTo

```java
public void moveTo(double p_31929_, double p_31930_, double p_31931_, float p_31932_, float p_31933_)
```

**Parameters:**

- `p_31929_` (`double`)
- `p_31930_` (`double`)
- `p_31931_` (`double`)
- `p_31932_` (`float`)
- `p_31933_` (`float`)

### lerpTo

```java
public void lerpTo(double p_31917_, double p_31918_, double p_31919_, float p_31920_, float p_31921_, int p_31922_)
```

**Parameters:**

- `p_31917_` (`double`)
- `p_31918_` (`double`)
- `p_31919_` (`double`)
- `p_31920_` (`float`)
- `p_31921_` (`float`)
- `p_31922_` (`int`)

### trackingPosition

```java
public Vec3 trackingPosition()
```

**Returns:** `Vec3`

### getAddEntityPacket

```java
public Packet<ClientGamePacketListener> getAddEntityPacket(ServerEntity p_352062_)
```

**Parameters:**

- `p_352062_` (`ServerEntity`)

**Returns:** `Packet<ClientGamePacketListener>`

### recreateFromPacket

```java
public void recreateFromPacket(ClientboundAddEntityPacket p_218894_)
```

**Parameters:**

- `p_218894_` (`ClientboundAddEntityPacket`)

### getPickResult

```java
public ItemStack getPickResult()
```

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`
