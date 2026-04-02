# BeaconBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `MenuProvider`, `Nameable`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BEACON_EFFECTS` | `List<List<Holder<MobEffect>>>` |  |
| `DATA_LEVELS` | `int` |  |
| `DATA_PRIMARY` | `int` |  |
| `DATA_SECONDARY` | `int` |  |
| `NUM_DATA_VALUES` | `int` |  |

## Methods

### get

```java
public int get(int p_58711_)
```

**Parameters:**

- `p_58711_` (`int`)

**Returns:** `int`

### set

```java
public void set(int p_58713_, int p_58714_)
```

**Parameters:**

- `p_58713_` (`int`)
- `p_58714_` (`int`)

### getCount

```java
public int getCount()
```

**Returns:** `int`

### filterEffect

```java
static Holder<MobEffect> filterEffect(Holder<MobEffect> p_316372_)
```

**Parameters:**

- `p_316372_` (`Holder<MobEffect>`)

**Returns:** `Holder<MobEffect>`

### BeaconBlockEntity

```java
public BeaconBlockEntity(BlockPos p_155088_, BlockState p_155089_)
```

**Parameters:**

- `p_155088_` (`BlockPos`)
- `p_155089_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### tick

```java
public static void tick(Level p_155108_, BlockPos p_155109_, BlockState p_155110_, BeaconBlockEntity p_155111_)
```

**Parameters:**

- `p_155108_` (`Level`)
- `p_155109_` (`BlockPos`)
- `p_155110_` (`BlockState`)
- `p_155111_` (`BeaconBlockEntity`)

**Returns:** `public static void`

### applyEffects

```java
 applyEffects()
```

**Returns:** ``

### playSound

```java
 playSound()
```

**Returns:** ``

### playSound

```java
 playSound()
```

**Returns:** ``

### playSound

```java
 playSound()
```

**Returns:** ``

### updateBase

```java
private static int updateBase(Level p_155093_, int p_155094_, int p_155095_, int p_155096_)
```

**Parameters:**

- `p_155093_` (`Level`)
- `p_155094_` (`int`)
- `p_155095_` (`int`)
- `p_155096_` (`int`)

**Returns:** `private static int`

### setRemoved

```java
public void setRemoved()
```

### playSound

```java
 playSound()
```

**Returns:** ``

### applyEffects

```java
private static void applyEffects(Level p_155098_, BlockPos p_155099_, int p_155100_, Holder<MobEffect> p_316599_, Holder<MobEffect> p_316343_)
```

**Parameters:**

- `p_155098_` (`Level`)
- `p_155099_` (`BlockPos`)
- `p_155100_` (`int`)
- `p_316599_` (`Holder<MobEffect>`)
- `p_316343_` (`Holder<MobEffect>`)

**Returns:** `private static void`

### playSound

```java
public static void playSound(Level p_155104_, BlockPos p_155105_, SoundEvent p_155106_)
```

**Parameters:**

- `p_155104_` (`Level`)
- `p_155105_` (`BlockPos`)
- `p_155106_` (`SoundEvent`)

**Returns:** `public static void`

### getBeamSections

```java
public List<BeaconBlockEntity.BeaconBeamSection> getBeamSections()
```

**Returns:** `public List<BeaconBlockEntity.BeaconBeamSection>`

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324570_)
```

**Parameters:**

- `p_324570_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### storeEffect

```java
private static void storeEffect(CompoundTag p_298214_, String p_298983_, Holder<MobEffect> p_316689_)
```

**Parameters:**

- `p_298214_` (`CompoundTag`)
- `p_298983_` (`String`)
- `p_316689_` (`Holder<MobEffect>`)

**Returns:** `private static void`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338669_, HolderLookup.Provider p_338291_)
```

**Parameters:**

- `p_338669_` (`CompoundTag`)
- `p_338291_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187463_, HolderLookup.Provider p_324268_)
```

**Parameters:**

- `p_187463_` (`CompoundTag`)
- `p_324268_` (`HolderLookup.Provider`)

### storeEffect

```java
 storeEffect()
```

**Returns:** ``

### storeEffect

```java
 storeEffect()
```

**Returns:** ``

### setCustomName

```java
public void setCustomName(Component p_58682_)
```

**Parameters:**

- `p_58682_` (`Component`)

**Returns:** `public void`

### getCustomName

```java
public Component getCustomName()
```

**Returns:** `Component`

### createMenu

```java
public AbstractContainerMenu createMenu(int p_58696_, Inventory p_58697_, Player p_58698_)
```

**Parameters:**

- `p_58696_` (`int`)
- `p_58697_` (`Inventory`)
- `p_58698_` (`Player`)

**Returns:** `AbstractContainerMenu`

### getDisplayName

```java
public Component getDisplayName()
```

**Returns:** `Component`

### getName

```java
public Component getName()
```

**Returns:** `Component`

### applyImplicitComponents

```java
protected void applyImplicitComponents(BlockEntity.DataComponentInput p_338364_)
```

**Parameters:**

- `p_338364_` (`BlockEntity.DataComponentInput`)

### collectImplicitComponents

```java
protected void collectImplicitComponents(DataComponentMap.Builder p_338239_)
```

**Parameters:**

- `p_338239_` (`DataComponentMap.Builder`)

### removeComponentsFromTag

```java
public void removeComponentsFromTag(CompoundTag p_331401_)
```

**Parameters:**

- `p_331401_` (`CompoundTag`)

### setLevel

```java
public void setLevel(Level p_155091_)
```

**Parameters:**

- `p_155091_` (`Level`)

### BeaconBeamSection

```java
public BeaconBeamSection(int p_350966_)
```

**Parameters:**

- `p_350966_` (`int`)

**Returns:** `public`

### increaseHeight

```java
protected void increaseHeight()
```

**Returns:** `protected void`

### getColor

```java
public int getColor()
```

**Returns:** `public int`

### getHeight

```java
public int getHeight()
```

**Returns:** `public int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `BeaconBeamSection` | class |  |
