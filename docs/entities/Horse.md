# Horse

**Package:** `net.minecraft.world.entity.animal.horse`
**Type:** class
**Extends:** `AbstractHorse`
**Implements:** `VariantHolder<Variant>`

## Methods

### Horse

```java
public Horse(EntityType<? extends Horse> p_30689_, Level p_30690_)
```

**Parameters:**

- `p_30689_` (`EntityType<? extends Horse>`)
- `p_30690_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### randomizeAttributes

```java
protected void randomizeAttributes(RandomSource p_218815_)
```

**Parameters:**

- `p_218815_` (`RandomSource`)

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326175_)
```

**Parameters:**

- `p_326175_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_30716_)
```

**Parameters:**

- `p_30716_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_30711_)
```

**Parameters:**

- `p_30711_` (`CompoundTag`)

### setTypeVariant

```java
private void setTypeVariant(int p_30737_)
```

**Parameters:**

- `p_30737_` (`int`)

**Returns:** `private void`

### getTypeVariant

```java
private int getTypeVariant()
```

**Returns:** `private int`

### setVariantAndMarkings

```java
private void setVariantAndMarkings(Variant p_30700_, Markings p_30701_)
```

**Parameters:**

- `p_30700_` (`Variant`)
- `p_30701_` (`Markings`)

**Returns:** `private void`

### getVariant

```java
public Variant getVariant()
```

**Returns:** `public Variant`

### setVariant

```java
public void setVariant(Variant p_262684_)
```

**Parameters:**

- `p_262684_` (`Variant`)

**Returns:** `public void`

### getMarkings

```java
public Markings getMarkings()
```

**Returns:** `public Markings`

### containerChanged

```java
public void containerChanged(Container p_30696_)
```

**Parameters:**

- `p_30696_` (`Container`)

### playGallopSound

```java
protected void playGallopSound(SoundType p_30709_)
```

**Parameters:**

- `p_30709_` (`SoundType`)

### getAmbientSound

```java
protected SoundEvent getAmbientSound()
```

**Returns:** `SoundEvent`

### getDeathSound

```java
protected SoundEvent getDeathSound()
```

**Returns:** `SoundEvent`

### getEatingSound

```java
protected SoundEvent getEatingSound()
```

**Returns:** `SoundEvent`

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_30720_)
```

**Parameters:**

- `p_30720_` (`DamageSource`)

**Returns:** `SoundEvent`

### getAngrySound

```java
protected SoundEvent getAngrySound()
```

**Returns:** `SoundEvent`

### mobInteract

```java
public InteractionResult mobInteract(Player p_30713_, InteractionHand p_30714_)
```

**Parameters:**

- `p_30713_` (`Player`)
- `p_30714_` (`InteractionHand`)

**Returns:** `InteractionResult`

### canMate

```java
public boolean canMate(Animal p_30698_)
```

**Parameters:**

- `p_30698_` (`Animal`)

**Returns:** `boolean`

### getBreedOffspring

```java
public AgeableMob getBreedOffspring(ServerLevel p_149533_, AgeableMob p_149534_)
```

**Parameters:**

- `p_149533_` (`ServerLevel`)
- `p_149534_` (`AgeableMob`)

**Returns:** `AgeableMob`

### canUseSlot

```java
public boolean canUseSlot(EquipmentSlot p_348583_)
```

**Parameters:**

- `p_348583_` (`EquipmentSlot`)

**Returns:** `boolean`

### isBodyArmorItem

```java
public boolean isBodyArmorItem(ItemStack p_324434_)
```

**Parameters:**

- `p_324434_` (`ItemStack`)

**Returns:** `boolean`

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_30703_, DifficultyInstance p_30704_, MobSpawnType p_30705_, SpawnGroupData p_30706_)
```

**Parameters:**

- `p_30703_` (`ServerLevelAccessor`)
- `p_30704_` (`DifficultyInstance`)
- `p_30705_` (`MobSpawnType`)
- `p_30706_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### getDefaultDimensions

```java
public EntityDimensions getDefaultDimensions(Pose p_316325_)
```

**Parameters:**

- `p_316325_` (`Pose`)

**Returns:** `EntityDimensions`

### HorseGroupData

```java
public HorseGroupData(Variant p_30740_)
```

**Parameters:**

- `p_30740_` (`Variant`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `HorseGroupData` | class |  |
