# HoneycombItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`
**Implements:** `SignApplicator`

## Methods

### HoneycombItem

```java
public HoneycombItem(Item.Properties p_150867_)
```

**Parameters:**

- `p_150867_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### useOn

```java
public InteractionResult useOn(UseOnContext p_150869_)
```

**Parameters:**

- `p_150869_` (`UseOnContext`)

**Returns:** `InteractionResult`

### getWaxed

```java
public static Optional<BlockState> getWaxed(BlockState p_150879_)
```

**Parameters:**

- `p_150879_` (`BlockState`)

**Returns:** `public static Optional<BlockState>`

### tryApplyToSign

```java
public boolean tryApplyToSign(Level p_277838_, SignBlockEntity p_277988_, boolean p_277394_, Player p_277816_)
```

**Parameters:**

- `p_277838_` (`Level`)
- `p_277988_` (`SignBlockEntity`)
- `p_277394_` (`boolean`)
- `p_277816_` (`Player`)

**Returns:** `boolean`

### canApplyToSign

```java
public boolean canApplyToSign(SignText p_277550_, Player p_277640_)
```

**Parameters:**

- `p_277550_` (`SignText`)
- `p_277640_` (`Player`)

**Returns:** `boolean`
