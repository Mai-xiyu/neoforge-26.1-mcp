# BundleItem

**Package:** `net.minecraft.world.item`
**Type:** class
**Extends:** `Item`

## Methods

### BundleItem

```java
public BundleItem(Item.Properties p_150726_)
```

**Parameters:**

- `p_150726_` (`Item.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getFullnessDisplay

```java
public static float getFullnessDisplay(ItemStack p_150767_)
```

**Parameters:**

- `p_150767_` (`ItemStack`)

**Returns:** `public static float`

### overrideStackedOnOther

```java
public boolean overrideStackedOnOther(ItemStack p_150733_, Slot p_150734_, ClickAction p_150735_, Player p_150736_)
```

**Parameters:**

- `p_150733_` (`ItemStack`)
- `p_150734_` (`Slot`)
- `p_150735_` (`ClickAction`)
- `p_150736_` (`Player`)

**Returns:** `boolean`

### overrideOtherStackedOnMe

```java
public boolean overrideOtherStackedOnMe(ItemStack p_150742_, ItemStack p_150743_, Slot p_150744_, ClickAction p_150745_, Player p_150746_, SlotAccess p_150747_)
```

**Parameters:**

- `p_150742_` (`ItemStack`)
- `p_150743_` (`ItemStack`)
- `p_150744_` (`Slot`)
- `p_150745_` (`ClickAction`)
- `p_150746_` (`Player`)
- `p_150747_` (`SlotAccess`)

**Returns:** `boolean`

### use

```java
public InteractionResultHolder<ItemStack> use(Level p_150760_, Player p_150761_, InteractionHand p_150762_)
```

**Parameters:**

- `p_150760_` (`Level`)
- `p_150761_` (`Player`)
- `p_150762_` (`InteractionHand`)

**Returns:** `InteractionResultHolder<ItemStack>`

### isBarVisible

```java
public boolean isBarVisible(ItemStack p_150769_)
```

**Parameters:**

- `p_150769_` (`ItemStack`)

**Returns:** `boolean`

### getBarWidth

```java
public int getBarWidth(ItemStack p_150771_)
```

**Parameters:**

- `p_150771_` (`ItemStack`)

**Returns:** `int`

### getBarColor

```java
public int getBarColor(ItemStack p_150773_)
```

**Parameters:**

- `p_150773_` (`ItemStack`)

**Returns:** `int`

### dropContents

```java
private static boolean dropContents(ItemStack p_150730_, Player p_150731_)
```

**Parameters:**

- `p_150730_` (`ItemStack`)
- `p_150731_` (`Player`)

**Returns:** `private static boolean`

### getTooltipImage

```java
public Optional<TooltipComponent> getTooltipImage(ItemStack p_150775_)
```

**Parameters:**

- `p_150775_` (`ItemStack`)

**Returns:** `Optional<TooltipComponent>`

### appendHoverText

```java
public void appendHoverText(ItemStack p_150749_, Item.TooltipContext p_339687_, List<Component> p_150751_, TooltipFlag p_150752_)
```

**Parameters:**

- `p_150749_` (`ItemStack`)
- `p_339687_` (`Item.TooltipContext`)
- `p_150751_` (`List<Component>`)
- `p_150752_` (`TooltipFlag`)

### onDestroyed

```java
public void onDestroyed(ItemEntity p_150728_)
```

**Parameters:**

- `p_150728_` (`ItemEntity`)

### playRemoveOneSound

```java
private void playRemoveOneSound(Entity p_186343_)
```

**Parameters:**

- `p_186343_` (`Entity`)

**Returns:** `private void`

### playInsertSound

```java
private void playInsertSound(Entity p_186352_)
```

**Parameters:**

- `p_186352_` (`Entity`)

**Returns:** `private void`

### playDropContentsSound

```java
private void playDropContentsSound(Entity p_186354_)
```

**Parameters:**

- `p_186354_` (`Entity`)

**Returns:** `private void`
