# MinecartTNT

**Package:** `net.minecraft.world.entity.vehicle`
**Type:** class
**Extends:** `AbstractMinecart`

## Methods

### MinecartTNT

```java
public MinecartTNT(EntityType<? extends MinecartTNT> p_38649_, Level p_38650_)
```

**Parameters:**

- `p_38649_` (`EntityType<? extends MinecartTNT>`)
- `p_38650_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### MinecartTNT

```java
public MinecartTNT(Level p_38652_, double p_38653_, double p_38654_, double p_38655_)
```

**Parameters:**

- `p_38652_` (`Level`)
- `p_38653_` (`double`)
- `p_38654_` (`double`)
- `p_38655_` (`double`)

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

### getDefaultDisplayBlockState

```java
public BlockState getDefaultDisplayBlockState()
```

**Returns:** `BlockState`

### tick

```java
public void tick()
```

### hurt

```java
public boolean hurt(DamageSource p_38666_, float p_38667_)
```

**Parameters:**

- `p_38666_` (`DamageSource`)
- `p_38667_` (`float`)

**Returns:** `boolean`

### destroy

```java
public void destroy(DamageSource p_38664_)
```

**Parameters:**

- `p_38664_` (`DamageSource`)

### getDropItem

```java
protected Item getDropItem()
```

**Returns:** `Item`

### explode

```java
protected void explode(double p_38689_)
```

**Parameters:**

- `p_38689_` (`double`)

**Returns:** `protected void`

### explode

```java
protected void explode(DamageSource p_259539_, double p_260287_)
```

**Parameters:**

- `p_259539_` (`DamageSource`)
- `p_260287_` (`double`)

**Returns:** `protected void`

### causeFallDamage

```java
public boolean causeFallDamage(float p_150347_, float p_150348_, DamageSource p_150349_)
```

**Parameters:**

- `p_150347_` (`float`)
- `p_150348_` (`float`)
- `p_150349_` (`DamageSource`)

**Returns:** `boolean`

### activateMinecart

```java
public void activateMinecart(int p_38659_, int p_38660_, int p_38661_, boolean p_38662_)
```

**Parameters:**

- `p_38659_` (`int`)
- `p_38660_` (`int`)
- `p_38661_` (`int`)
- `p_38662_` (`boolean`)

### handleEntityEvent

```java
public void handleEntityEvent(byte p_38657_)
```

**Parameters:**

- `p_38657_` (`byte`)

### primeFuse

```java
public void primeFuse()
```

**Returns:** `public void`

### getFuse

```java
public int getFuse()
```

**Returns:** `public int`

### isPrimed

```java
public boolean isPrimed()
```

**Returns:** `public boolean`

### getBlockExplosionResistance

```java
public float getBlockExplosionResistance(Explosion p_38675_, BlockGetter p_38676_, BlockPos p_38677_, BlockState p_38678_, FluidState p_38679_, float p_38680_)
```

**Parameters:**

- `p_38675_` (`Explosion`)
- `p_38676_` (`BlockGetter`)
- `p_38677_` (`BlockPos`)
- `p_38678_` (`BlockState`)
- `p_38679_` (`FluidState`)
- `p_38680_` (`float`)

**Returns:** `float`

### shouldBlockExplode

```java
public boolean shouldBlockExplode(Explosion p_38669_, BlockGetter p_38670_, BlockPos p_38671_, BlockState p_38672_, float p_38673_)
```

**Parameters:**

- `p_38669_` (`Explosion`)
- `p_38670_` (`BlockGetter`)
- `p_38671_` (`BlockPos`)
- `p_38672_` (`BlockState`)
- `p_38673_` (`float`)

**Returns:** `boolean`

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_38682_)
```

**Parameters:**

- `p_38682_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_38687_)
```

**Parameters:**

- `p_38687_` (`CompoundTag`)

### shouldSourceDestroy

```java
boolean shouldSourceDestroy(DamageSource p_312558_)
```

**Parameters:**

- `p_312558_` (`DamageSource`)

**Returns:** `boolean`

### damageSourceIgnitesTnt

```java
return damageSourceIgnitesTnt()
```

**Returns:** `return`

### damageSourceIgnitesTnt

```java
private static boolean damageSourceIgnitesTnt(DamageSource p_312109_)
```

**Parameters:**

- `p_312109_` (`DamageSource`)

**Returns:** `private static boolean`
