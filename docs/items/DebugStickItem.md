# DebugStickItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Methods

### DebugStickItem

```java
public DebugStickItem(Item.Properties p_40948_)
```

**Parameters:**

- `p_40948_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### canAttackBlock

```java
public boolean canAttackBlock(BlockState p_40962_, Level p_40963_, BlockPos p_40964_, Player p_40965_)
```

**Parameters:**

- `p_40962_` (`BlockState`)
- `p_40963_` (`Level`)
- `p_40964_` (`BlockPos`)
- `p_40965_` (`Player`)

**Returns:** `boolean`

### useOn

```java
public InteractionResult useOn(UseOnContext p_40960_)
```

**Parameters:**

- `p_40960_` (`UseOnContext`)

**Returns:** `InteractionResult`

### handleInteraction

```java
private boolean handleInteraction(Player p_150803_, BlockState p_150804_, LevelAccessor p_150805_, BlockPos p_150806_, boolean p_150807_, ItemStack p_150808_)
```

**Parameters:**

- `p_150803_` (`Player`)
- `p_150804_` (`BlockState`)
- `p_150805_` (`LevelAccessor`)
- `p_150806_` (`BlockPos`)
- `p_150807_` (`boolean`)
- `p_150808_` (`ItemStack`)

**Returns:** `private boolean`

### cycleState

```java
private static <T extends Comparable<T>> BlockState cycleState(BlockState p_40970_, Property<T> p_40971_, boolean p_40972_)
```

**Parameters:**

- `p_40970_` (`BlockState`)
- `p_40971_` (`Property<T>`)
- `p_40972_` (`boolean`)

**Returns:** `private static <T extends Comparable<T>> BlockState`

### getRelative

```java
<T> private static <T> T getRelative(Iterable<T> p_40974_, T p_40975_, boolean p_40976_)
```

**Parameters:**

- `p_40974_` (`Iterable<T>`)
- `p_40975_` (`T`)
- `p_40976_` (`boolean`)

**Returns:** `private static <T> T`

### message

```java
private static void message(Player p_40957_, Component p_40958_)
```

**Parameters:**

- `p_40957_` (`Player`)
- `p_40958_` (`Component`)

**Returns:** `private static void`

### getNameHelper

```java
private static <T extends Comparable<T>> String getNameHelper(BlockState p_40967_, Property<T> p_40968_)
```

**Parameters:**

- `p_40967_` (`BlockState`)
- `p_40968_` (`Property<T>`)

**Returns:** `private static <T extends Comparable<T>> String`
