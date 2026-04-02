# InstrumentItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Methods

### InstrumentItem

```java
public InstrumentItem(Item.Properties p_220099_, TagKey<Instrument> p_220100_)
```

**Parameters:**

- `p_220099_` (`Item.Properties`)
- `p_220100_` (`TagKey<Instrument>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### appendHoverText

```java
public void appendHoverText(ItemStack p_220115_, Item.TooltipContext p_339630_, List<Component> p_220117_, TooltipFlag p_220118_)
```

**Parameters:**

- `p_220115_` (`ItemStack`)
- `p_339630_` (`Item.TooltipContext`)
- `p_220117_` (`List<Component>`)
- `p_220118_` (`TooltipFlag`)

### create

```java
public static ItemStack create(Item p_220108_, Holder<Instrument> p_220109_)
```

**Parameters:**

- `p_220108_` (`Item`)
- `p_220109_` (`Holder<Instrument>`)

**Returns:** `public static ItemStack`

### setRandom

```java
public static void setRandom(ItemStack p_220111_, TagKey<Instrument> p_220112_, RandomSource p_220113_)
```

**Parameters:**

- `p_220111_` (`ItemStack`)
- `p_220112_` (`TagKey<Instrument>`)
- `p_220113_` (`RandomSource`)

**Returns:** `public static void`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_220123_, Player p_220124_, InteractionHand p_220125_)
```

**Parameters:**

- `p_220123_` (`Level`)
- `p_220124_` (`Player`)
- `p_220125_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### play

```java
 play()
```

**Returns:** ``

### getUseDuration

```java
public int getUseDuration(ItemStack p_220131_, LivingEntity p_345916_)
```

**Parameters:**

- `p_220131_` (`ItemStack`)
- `p_345916_` (`LivingEntity`)

**Returns:** `int`

### getInstrument

```java
private Optional<Holder<Instrument>> getInstrument(ItemStack p_220135_)
```

**Parameters:**

- `p_220135_` (`ItemStack`)

**Returns:** `private Optional<Holder<Instrument>>`

### getUseAnimation

```java
public UseAnim getUseAnimation(ItemStack p_220133_)
```

**Parameters:**

- `p_220133_` (`ItemStack`)

**Returns:** `UseAnim`

### play

```java
private static void play(Level p_220127_, Player p_220128_, Instrument p_220129_)
```

**Parameters:**

- `p_220127_` (`Level`)
- `p_220128_` (`Player`)
- `p_220129_` (`Instrument`)

**Returns:** `private static void`
