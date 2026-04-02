# VanillaInventoryCodeHooks

**Package:** `net.neoforged.neoforge.items`
**Type:** class

## Methods

### extractHook

```java
public static Boolean extractHook(Level level, Hopper dest)
```

**Parameters:**

- `level` (`Level`)
- `dest` (`Hopper`)

**Returns:** `Boolean`

### dropperInsertHook

```java
public static boolean dropperInsertHook(Level level, BlockPos pos, DispenserBlockEntity dropper, int slot, ItemStack stack)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `dropper` (`DispenserBlockEntity`)
- `slot` (`int`)
- `stack` (`ItemStack`)

**Returns:** `boolean`

### insertHook

```java
public static boolean insertHook(HopperBlockEntity hopper)
```

**Parameters:**

- `hopper` (`HopperBlockEntity`)

**Returns:** `boolean`

### insertCrafterOutput

```java
public static ItemStack insertCrafterOutput(Level level, BlockPos pos, CrafterBlockEntity crafterBlockEntity, ItemStack stack)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `crafterBlockEntity` (`CrafterBlockEntity`)
- `stack` (`ItemStack`)

**Returns:** `ItemStack`

### putStackInInventoryAllSlots

```java
private static ItemStack putStackInInventoryAllSlots(BlockEntity source, Object destination, IItemHandler destInventory, ItemStack stack)
```

**Parameters:**

- `source` (`BlockEntity`)
- `destination` (`Object`)
- `destInventory` (`IItemHandler`)
- `stack` (`ItemStack`)

**Returns:** `private static ItemStack`

### isFull

```java
private static boolean isFull(IItemHandler itemHandler)
```

**Parameters:**

- `itemHandler` (`IItemHandler`)

**Returns:** `private static boolean`

### isEmpty

```java
private static boolean isEmpty(IItemHandler itemHandler)
```

**Parameters:**

- `itemHandler` (`IItemHandler`)

**Returns:** `private static boolean`

### getAttachedItemHandler

```java
private static Optional<Pair<IItemHandler, Object>> getAttachedItemHandler(Level level, BlockPos pos, Direction direction)
```

**Parameters:**

- `level` (`Level`)
- `pos` (`BlockPos`)
- `direction` (`Direction`)

**Returns:** `private static Optional<Pair<IItemHandler, Object>>`

### getSourceItemHandler

```java
private static Optional<Pair<IItemHandler, Object>> getSourceItemHandler(Level level, Hopper hopper)
```

**Parameters:**

- `level` (`Level`)
- `hopper` (`Hopper`)

**Returns:** `private static Optional<Pair<IItemHandler, Object>>`

### getItemHandlerAt

```java
private static Optional<Pair<IItemHandler, Object>> getItemHandlerAt(Level worldIn, double x, double y, double z, Direction side)
```

**Parameters:**

- `worldIn` (`Level`)
- `x` (`double`)
- `y` (`double`)
- `z` (`double`)
- `side` (`Direction`)

**Returns:** `private static Optional<Pair<IItemHandler, Object>>`
