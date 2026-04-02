# CampfireBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`
**Implements:** `Clearable`

## Methods

### CampfireBlockEntity

```java
public CampfireBlockEntity(BlockPos p_155301_, BlockState p_155302_)
```

**Parameters:**

- `p_155301_` (`BlockPos`)
- `p_155302_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### cookTick

```java
public static void cookTick(Level p_155307_, BlockPos p_155308_, BlockState p_155309_, CampfireBlockEntity p_155310_)
```

**Parameters:**

- `p_155307_` (`Level`)
- `p_155308_` (`BlockPos`)
- `p_155309_` (`BlockState`)
- `p_155310_` (`CampfireBlockEntity`)

**Returns:** `public static void`

### setChanged

```java
 setChanged()
```

**Returns:** ``

### cooldownTick

```java
public static void cooldownTick(Level p_155314_, BlockPos p_155315_, BlockState p_155316_, CampfireBlockEntity p_155317_)
```

**Parameters:**

- `p_155314_` (`Level`)
- `p_155315_` (`BlockPos`)
- `p_155316_` (`BlockState`)
- `p_155317_` (`CampfireBlockEntity`)

**Returns:** `public static void`

### setChanged

```java
 setChanged()
```

**Returns:** ``

### particleTick

```java
public static void particleTick(Level p_155319_, BlockPos p_155320_, BlockState p_155321_, CampfireBlockEntity p_155322_)
```

**Parameters:**

- `p_155319_` (`Level`)
- `p_155320_` (`BlockPos`)
- `p_155321_` (`BlockState`)
- `p_155322_` (`CampfireBlockEntity`)

**Returns:** `public static void`

### getItems

```java
public NonNullList<ItemStack> getItems()
```

**Returns:** `public NonNullList<ItemStack>`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155312_, HolderLookup.Provider p_323804_)
```

**Parameters:**

- `p_155312_` (`CompoundTag`)
- `p_323804_` (`HolderLookup.Provider`)

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187486_, HolderLookup.Provider p_324005_)
```

**Parameters:**

- `p_187486_` (`CompoundTag`)
- `p_324005_` (`HolderLookup.Provider`)

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324612_)
```

**Parameters:**

- `p_324612_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### getCookableRecipe

```java
public Optional<RecipeHolder<CampfireCookingRecipe>> getCookableRecipe(ItemStack p_59052_)
```

**Parameters:**

- `p_59052_` (`ItemStack`)

**Returns:** `public Optional<RecipeHolder<CampfireCookingRecipe>>`

### placeFood

```java
public boolean placeFood(LivingEntity p_347582_, ItemStack p_238286_, int p_238287_)
```

**Parameters:**

- `p_347582_` (`LivingEntity`)
- `p_238286_` (`ItemStack`)
- `p_238287_` (`int`)

**Returns:** `public boolean`

### markUpdated

```java
private void markUpdated()
```

**Returns:** `private void`

### clearContent

```java
public void clearContent()
```

### dowse

```java
public void dowse()
```

**Returns:** `public void`

### applyImplicitComponents

```java
protected void applyImplicitComponents(BlockEntity.DataComponentInput p_338534_)
```

**Parameters:**

- `p_338534_` (`BlockEntity.DataComponentInput`)

### collectImplicitComponents

```java
protected void collectImplicitComponents(DataComponentMap.Builder p_338620_)
```

**Parameters:**

- `p_338620_` (`DataComponentMap.Builder`)

### removeComponentsFromTag

```java
public void removeComponentsFromTag(CompoundTag p_332690_)
```

**Parameters:**

- `p_332690_` (`CompoundTag`)
