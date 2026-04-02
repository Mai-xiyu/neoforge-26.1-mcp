# BucketItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `DispensibleContainerItem`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `content` | `Fluid` |  |

## Methods

### BucketItem

```java
public BucketItem(Fluid p_40689_, Item.Properties p_40690_)
```

**Parameters:**

- `p_40689_` (`Fluid`)
- `p_40690_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_40703_, Player p_40704_, InteractionHand p_40705_)
```

**Parameters:**

- `p_40703_` (`Level`)
- `p_40704_` (`Player`)
- `p_40705_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### getEmptySuccessItem

```java
public static ItemStack getEmptySuccessItem(ItemStack p_40700_, Player p_40701_)
```

**Parameters:**

- `p_40700_` (`ItemStack`)
- `p_40701_` (`Player`)

**Returns:** `public static ItemStack`

### checkExtraContent

```java
public void checkExtraContent(Player p_150711_, Level p_150712_, ItemStack p_150713_, BlockPos p_150714_)
```

**Parameters:**

- `p_150711_` (`Player`)
- `p_150712_` (`Level`)
- `p_150713_` (`ItemStack`)
- `p_150714_` (`BlockPos`)

### emptyContents ⚠️ *Deprecated*

```java
use the ItemStack sensitive version
    public boolean emptyContents(Player p_150716_, Level p_150717_, BlockPos p_150718_, BlockHitResult p_150719_)
```

**Parameters:**

- `p_150716_` (`Player`)
- `p_150717_` (`Level`)
- `p_150718_` (`BlockPos`)
- `p_150719_` (`BlockHitResult`)

**Returns:** `use the ItemStack sensitive version
    public boolean`

### emptyContents

```java
public boolean emptyContents(Player p_150716_, Level p_150717_, BlockPos p_150718_, BlockHitResult p_150719_, ItemStack container)
```

**Parameters:**

- `p_150716_` (`Player`)
- `p_150717_` (`Level`)
- `p_150718_` (`BlockPos`)
- `p_150719_` (`BlockHitResult`)
- `container` (`ItemStack`)

**Returns:** `public boolean`

### playEmptySound

```java
protected void playEmptySound(Player p_40696_, LevelAccessor p_40697_, BlockPos p_40698_)
```

**Parameters:**

- `p_40696_` (`Player`)
- `p_40697_` (`LevelAccessor`)
- `p_40698_` (`BlockPos`)

**Returns:** `protected void`

### canBlockContainFluid

```java
protected boolean canBlockContainFluid(Player player, Level worldIn, BlockPos posIn, BlockState blockstate)
```

**Parameters:**

- `player` (`Player`)
- `worldIn` (`Level`)
- `posIn` (`BlockPos`)
- `blockstate` (`BlockState`)

**Returns:** `protected boolean`
