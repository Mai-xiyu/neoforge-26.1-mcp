# EnderChestBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `LidBlockEntity`

## Methods

### onOpen

```java
protected void onOpen(Level p_155531_, BlockPos p_155532_, BlockState p_155533_)
```

**Parameters:**

- `p_155531_` (`Level`)
- `p_155532_` (`BlockPos`)
- `p_155533_` (`BlockState`)

### onClose

```java
protected void onClose(Level p_155541_, BlockPos p_155542_, BlockState p_155543_)
```

**Parameters:**

- `p_155541_` (`Level`)
- `p_155542_` (`BlockPos`)
- `p_155543_` (`BlockState`)

### openerCountChanged

```java
protected void openerCountChanged(Level p_155535_, BlockPos p_155536_, BlockState p_155537_, int p_155538_, int p_155539_)
```

**Parameters:**

- `p_155535_` (`Level`)
- `p_155536_` (`BlockPos`)
- `p_155537_` (`BlockState`)
- `p_155538_` (`int`)
- `p_155539_` (`int`)

### isOwnContainer

```java
protected boolean isOwnContainer(Player p_155529_)
```

**Parameters:**

- `p_155529_` (`Player`)

**Returns:** `boolean`

### EnderChestBlockEntity

```java
public EnderChestBlockEntity(BlockPos p_155513_, BlockState p_155514_)
```

**Parameters:**

- `p_155513_` (`BlockPos`)
- `p_155514_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### lidAnimateTick

```java
public static void lidAnimateTick(Level p_155518_, BlockPos p_155519_, BlockState p_155520_, EnderChestBlockEntity p_155521_)
```

**Parameters:**

- `p_155518_` (`Level`)
- `p_155519_` (`BlockPos`)
- `p_155520_` (`BlockState`)
- `p_155521_` (`EnderChestBlockEntity`)

**Returns:** `public static void`

### triggerEvent

```java
public boolean triggerEvent(int p_59285_, int p_59286_)
```

**Parameters:**

- `p_59285_` (`int`)
- `p_59286_` (`int`)

**Returns:** `boolean`

### startOpen

```java
public void startOpen(Player p_155516_)
```

**Parameters:**

- `p_155516_` (`Player`)

**Returns:** `public void`

### stopOpen

```java
public void stopOpen(Player p_155523_)
```

**Parameters:**

- `p_155523_` (`Player`)

**Returns:** `public void`

### stillValid

```java
public boolean stillValid(Player p_59283_)
```

**Parameters:**

- `p_59283_` (`Player`)

**Returns:** `public boolean`

### recheckOpen

```java
public void recheckOpen()
```

**Returns:** `public void`

### getOpenNess

```java
public float getOpenNess(float p_59281_)
```

**Parameters:**

- `p_59281_` (`float`)

**Returns:** `float`
