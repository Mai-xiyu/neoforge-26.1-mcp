# SkullBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CHECKED_MAIN_THREAD_EXECUTOR` | `Executor` |  |

## Methods

### SkullBlockEntity

```java
public SkullBlockEntity(BlockPos p_155731_, BlockState p_155732_)
```

**Parameters:**

- `p_155731_` (`BlockPos`)
- `p_155732_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setup

```java
public static void setup(Services p_222886_, Executor p_222887_)
```

**Parameters:**

- `p_222886_` (`Services`)
- `p_222887_` (`Executor`)

**Returns:** `public static void`

### load

```java
public CompletableFuture<Optional<GameProfile>> load(String p_304652_)
```

**Parameters:**

- `p_304652_` (`String`)

**Returns:** `public CompletableFuture<Optional<GameProfile>>`

### load

```java
public CompletableFuture<Optional<GameProfile>> load(UUID p_339657_)
```

**Parameters:**

- `p_339657_` (`UUID`)

**Returns:** `public CompletableFuture<Optional<GameProfile>>`

### fetchProfileByName

```java
static CompletableFuture<Optional<GameProfile>> fetchProfileByName(String p_339683_, Services p_339592_)
```

**Parameters:**

- `p_339683_` (`String`)
- `p_339592_` (`Services`)

**Returns:** `static CompletableFuture<Optional<GameProfile>>`

### fetchProfileById

```java
static CompletableFuture<Optional<GameProfile>> fetchProfileById(UUID p_339663_, Services p_339676_, BooleanSupplier p_339631_)
```

**Parameters:**

- `p_339663_` (`UUID`)
- `p_339676_` (`Services`)
- `p_339631_` (`BooleanSupplier`)

**Returns:** `static CompletableFuture<Optional<GameProfile>>`

### clear

```java
public static void clear()
```

**Returns:** `public static void`

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187518_, HolderLookup.Provider p_324418_)
```

**Parameters:**

- `p_187518_` (`CompoundTag`)
- `p_324418_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155745_, HolderLookup.Provider p_323876_)
```

**Parameters:**

- `p_155745_` (`CompoundTag`)
- `p_323876_` (`HolderLookup.Provider`)

### animation

```java
public static void animation(Level p_261710_, BlockPos p_262153_, BlockState p_262021_, SkullBlockEntity p_261594_)
```

**Parameters:**

- `p_261710_` (`Level`)
- `p_262153_` (`BlockPos`)
- `p_262021_` (`BlockState`)
- `p_261594_` (`SkullBlockEntity`)

**Returns:** `public static void`

### getAnimation

```java
public float getAnimation(float p_262053_)
```

**Parameters:**

- `p_262053_` (`float`)

**Returns:** `public float`

### getOwnerProfile

```java
public ResolvableProfile getOwnerProfile()
```

**Returns:** `ResolvableProfile`

### getNoteBlockSound

```java
public ResourceLocation getNoteBlockSound()
```

**Returns:** `ResourceLocation`

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_323711_)
```

**Parameters:**

- `p_323711_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### setOwner

```java
public void setOwner(ResolvableProfile p_332738_)
```

**Parameters:**

- `p_332738_` (`ResolvableProfile`)

**Returns:** `public void`

### synchronized

```java
 synchronized()
```

**Returns:** ``

### updateOwnerProfile

```java
private void updateOwnerProfile()
```

**Returns:** `private void`

### fetchGameProfile

```java
public static CompletableFuture<Optional<GameProfile>> fetchGameProfile(String p_295932_)
```

**Parameters:**

- `p_295932_` (`String`)

**Returns:** `public static CompletableFuture<Optional<GameProfile>>`

### fetchGameProfile

```java
public static CompletableFuture<Optional<GameProfile>> fetchGameProfile(UUID p_339604_)
```

**Parameters:**

- `p_339604_` (`UUID`)

**Returns:** `public static CompletableFuture<Optional<GameProfile>>`

### applyImplicitComponents

```java
protected void applyImplicitComponents(BlockEntity.DataComponentInput p_338654_)
```

**Parameters:**

- `p_338654_` (`BlockEntity.DataComponentInput`)

### collectImplicitComponents

```java
protected void collectImplicitComponents(DataComponentMap.Builder p_338880_)
```

**Parameters:**

- `p_338880_` (`DataComponentMap.Builder`)

### removeComponentsFromTag

```java
public void removeComponentsFromTag(CompoundTag p_331773_)
```

**Parameters:**

- `p_331773_` (`CompoundTag`)
