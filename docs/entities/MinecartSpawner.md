# MinecartSpawner

**Package:** `net.minecraft.world.entity.vehicle`
**Type:** class
**Extends:** `AbstractMinecart`

## Methods

### broadcastEvent

```java
public void broadcastEvent(Level p_150342_, BlockPos p_150343_, int p_150344_)
```

**Parameters:**

- `p_150342_` (`Level`)
- `p_150343_` (`BlockPos`)
- `p_150344_` (`int`)

### getOwner

```java
public com.mojang.datafixers.util.Either<net.minecraft.world.level.block.entity.BlockEntity, net.minecraft.world.entity.Entity> getOwner()
```

**Returns:** `com.mojang.datafixers.util.Either<net.minecraft.world.level.block.entity.BlockEntity, net.minecraft.world.entity.Entity>`

### MinecartSpawner

```java
public MinecartSpawner(EntityType<? extends MinecartSpawner> p_38623_, Level p_38624_)
```

**Parameters:**

- `p_38623_` (`EntityType<? extends MinecartSpawner>`)
- `p_38624_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### MinecartSpawner

```java
public MinecartSpawner(Level p_38626_, double p_38627_, double p_38628_, double p_38629_)
```

**Parameters:**

- `p_38626_` (`Level`)
- `p_38627_` (`double`)
- `p_38628_` (`double`)
- `p_38629_` (`double`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDropItem

```java
protected Item getDropItem()
```

**Returns:** `Item`

### createTicker

```java
private Runnable createTicker(Level p_150335_)
```

**Parameters:**

- `p_150335_` (`Level`)

**Returns:** `private Runnable`

### getMinecartType

```java
public AbstractMinecart.Type getMinecartType()
```

**Returns:** `AbstractMinecart.Type`

### getDefaultDisplayBlockState

```java
public BlockState getDefaultDisplayBlockState()
```

**Returns:** `BlockState`

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_38633_)
```

**Parameters:**

- `p_38633_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_38635_)
```

**Parameters:**

- `p_38635_` (`CompoundTag`)

### handleEntityEvent

```java
public void handleEntityEvent(byte p_38631_)
```

**Parameters:**

- `p_38631_` (`byte`)

### tick

```java
public void tick()
```

### getSpawner

```java
public BaseSpawner getSpawner()
```

**Returns:** `public BaseSpawner`

### onlyOpCanSetNbt

```java
public boolean onlyOpCanSetNbt()
```

**Returns:** `boolean`
