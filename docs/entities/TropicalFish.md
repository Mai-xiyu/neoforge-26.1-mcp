# TropicalFish

**Package:** `net.minecraft.world.entity.animal`
**Type:** class
**Extends:** `AbstractSchoolingFish`
**Implements:** `VariantHolder<TropicalFish.Pattern>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BUCKET_VARIANT_TAG` | `String` |  |
| `COMMON_VARIANTS` | `List<TropicalFish.Variant>` |  |

## Methods

### TropicalFish

```java
public TropicalFish(EntityType<? extends TropicalFish> p_30015_, Level p_30016_)
```

**Parameters:**

- `p_30015_` (`EntityType<? extends TropicalFish>`)
- `p_30016_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getPredefinedName

```java
public static String getPredefinedName(int p_30031_)
```

**Parameters:**

- `p_30031_` (`int`)

**Returns:** `public static String`

### packVariant

```java
static int packVariant(TropicalFish.Pattern p_262598_, DyeColor p_262618_, DyeColor p_262683_)
```

**Parameters:**

- `p_262598_` (`TropicalFish.Pattern`)
- `p_262618_` (`DyeColor`)
- `p_262683_` (`DyeColor`)

**Returns:** `static int`

### getBaseColor

```java
public static DyeColor getBaseColor(int p_30051_)
```

**Parameters:**

- `p_30051_` (`int`)

**Returns:** `public static DyeColor`

### getPatternColor

```java
public static DyeColor getPatternColor(int p_30053_)
```

**Parameters:**

- `p_30053_` (`int`)

**Returns:** `public static DyeColor`

### getPattern

```java
public static TropicalFish.Pattern getPattern(int p_262604_)
```

**Parameters:**

- `p_262604_` (`int`)

**Returns:** `public static TropicalFish.Pattern`

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326026_)
```

**Parameters:**

- `p_326026_` (`SynchedEntityData.Builder`)

### addAdditionalSaveData

```java
public void addAdditionalSaveData(CompoundTag p_30033_)
```

**Parameters:**

- `p_30033_` (`CompoundTag`)

### readAdditionalSaveData

```java
public void readAdditionalSaveData(CompoundTag p_30029_)
```

**Parameters:**

- `p_30029_` (`CompoundTag`)

### setPackedVariant

```java
private void setPackedVariant(int p_30057_)
```

**Parameters:**

- `p_30057_` (`int`)

**Returns:** `private void`

### isMaxGroupSizeReached

```java
public boolean isMaxGroupSizeReached(int p_30035_)
```

**Parameters:**

- `p_30035_` (`int`)

**Returns:** `boolean`

### getPackedVariant

```java
private int getPackedVariant()
```

**Returns:** `private int`

### getBaseColor

```java
public DyeColor getBaseColor()
```

**Returns:** `public DyeColor`

### getPatternColor

```java
public DyeColor getPatternColor()
```

**Returns:** `public DyeColor`

### getVariant

```java
public TropicalFish.Pattern getVariant()
```

**Returns:** `public TropicalFish.Pattern`

### setVariant

```java
public void setVariant(TropicalFish.Pattern p_262594_)
```

**Parameters:**

- `p_262594_` (`TropicalFish.Pattern`)

**Returns:** `public void`

### saveToBucketTag

```java
public void saveToBucketTag(ItemStack p_30049_)
```

**Parameters:**

- `p_30049_` (`ItemStack`)

### getBucketItemStack

```java
public ItemStack getBucketItemStack()
```

**Returns:** `ItemStack`

### ItemStack

```java
return new ItemStack()
```

**Returns:** `return new`

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

### getHurtSound

```java
protected SoundEvent getHurtSound(DamageSource p_30039_)
```

**Parameters:**

- `p_30039_` (`DamageSource`)

**Returns:** `SoundEvent`

### getFlopSound

```java
protected SoundEvent getFlopSound()
```

**Returns:** `SoundEvent`

### loadFromBucketTag

```java
public void loadFromBucketTag(CompoundTag p_323573_)
```

**Parameters:**

- `p_323573_` (`CompoundTag`)

### finalizeSpawn

```java
public SpawnGroupData finalizeSpawn(ServerLevelAccessor p_30023_, DifficultyInstance p_30024_, MobSpawnType p_30025_, SpawnGroupData p_30026_)
```

**Parameters:**

- `p_30023_` (`ServerLevelAccessor`)
- `p_30024_` (`DifficultyInstance`)
- `p_30025_` (`MobSpawnType`)
- `p_30026_` (`SpawnGroupData`)

**Returns:** `SpawnGroupData`

### checkTropicalFishSpawnRules

```java
public static boolean checkTropicalFishSpawnRules(EntityType<TropicalFish> p_218267_, LevelAccessor p_218268_, MobSpawnType p_218269_, BlockPos p_218270_, RandomSource p_218271_)
```

**Parameters:**

- `p_218267_` (`EntityType<TropicalFish>`)
- `p_218268_` (`LevelAccessor`)
- `p_218269_` (`MobSpawnType`)
- `p_218270_` (`BlockPos`)
- `p_218271_` (`RandomSource`)

**Returns:** `public static boolean`

### LARGE

```java
, LARGE()
```

**Returns:** `,`

### Base

```java
private Base(int p_262648_)
```

**Parameters:**

- `p_262648_` (`int`)

**Returns:** `private`

### CLAYFISH

```java
, CLAYFISH()
```

**Returns:** `,`

### Pattern

```java
private Pattern(String p_262625_, TropicalFish.Base p_262680_, int p_262584_)
```

**Parameters:**

- `p_262625_` (`String`)
- `p_262680_` (`TropicalFish.Base`)
- `p_262584_` (`int`)

**Returns:** `private`

### byId

```java
public static TropicalFish.Pattern byId(int p_262653_)
```

**Parameters:**

- `p_262653_` (`int`)

**Returns:** `public static TropicalFish.Pattern`

### base

```java
public TropicalFish.Base base()
```

**Returns:** `public TropicalFish.Base`

### getPackedId

```java
public int getPackedId()
```

**Returns:** `public int`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### displayName

```java
public Component displayName()
```

**Returns:** `public Component`

### TropicalFishGroupData

```java
 TropicalFishGroupData(TropicalFish p_262626_, TropicalFish.Variant p_262579_)
```

**Parameters:**

- `p_262626_` (`TropicalFish`)
- `p_262579_` (`TropicalFish.Variant`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### Variant

```java
public static record Variant(TropicalFish.Pattern pattern, DyeColor baseColor, DyeColor patternColor)
```

**Parameters:**

- `pattern` (`TropicalFish.Pattern`)
- `baseColor` (`DyeColor`)
- `patternColor` (`DyeColor`)

**Returns:** `public static record`

### Variant

```java
public Variant(int p_331552_)
```

**Parameters:**

- `p_331552_` (`int`)

**Returns:** `public`

### getPackedId

```java
public int getPackedId()
```

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Base` | enum |  |
| `Pattern` | enum |  |
| `Variant` | record |  |
