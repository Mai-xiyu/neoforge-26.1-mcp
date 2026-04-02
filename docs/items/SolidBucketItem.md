# SolidBucketItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `BlockItem`
**Implements:** `DispensibleContainerItem`

## Methods

### SolidBucketItem

```java
public SolidBucketItem(Block p_151187_, SoundEvent p_151188_, Item.Properties p_151189_)
```

**Parameters:**

- `p_151187_` (`Block`)
- `p_151188_` (`SoundEvent`)
- `p_151189_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_151197_)
```

**Parameters:**

- `p_151197_` (`UseOnContext`)

**Returns:** `InteractionResult`

### getDescriptionId

```java
public String getDescriptionId()
```

**Returns:** `String`

### getPlaceSound

```java
protected SoundEvent getPlaceSound(BlockState p_151199_)
```

**Parameters:**

- `p_151199_` (`BlockState`)

**Returns:** `SoundEvent`

### emptyContents

```java
public boolean emptyContents(Player p_151192_, Level p_151193_, BlockPos p_151194_, BlockHitResult p_151195_)
```

**Parameters:**

- `p_151192_` (`Player`)
- `p_151193_` (`Level`)
- `p_151194_` (`BlockPos`)
- `p_151195_` (`BlockHitResult`)

**Returns:** `boolean`
