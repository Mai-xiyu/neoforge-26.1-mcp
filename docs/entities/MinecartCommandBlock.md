# MinecartCommandBlock

**Package:** `net.minecraft.world.entity.vehicle`
**Type:** class
**Extends:** `AbstractMinecart`

## Methods

### MinecartCommandBlock

```java
public MinecartCommandBlock(EntityType<? extends MinecartCommandBlock> p_38509_, Level p_38510_)
```

**Parameters:**

- `p_38509_` (`EntityType<? extends MinecartCommandBlock>`)
- `p_38510_` (`Level`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### MinecartCommandBlock

```java
public MinecartCommandBlock(Level p_38512_, double p_38513_, double p_38514_, double p_38515_)
```

**Parameters:**

- `p_38512_` (`Level`)
- `p_38513_` (`double`)
- `p_38514_` (`double`)
- `p_38515_` (`double`)

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

### defineSynchedData

```java
protected void defineSynchedData(SynchedEntityData.Builder p_326494_)
```

**Parameters:**

- `p_326494_` (`SynchedEntityData.Builder`)

### readAdditionalSaveData

```java
protected void readAdditionalSaveData(CompoundTag p_38525_)
```

**Parameters:**

- `p_38525_` (`CompoundTag`)

### addAdditionalSaveData

```java
protected void addAdditionalSaveData(CompoundTag p_38529_)
```

**Parameters:**

- `p_38529_` (`CompoundTag`)

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

### getCommandBlock

```java
public BaseCommandBlock getCommandBlock()
```

**Returns:** `public BaseCommandBlock`

### activateMinecart

```java
public void activateMinecart(int p_38517_, int p_38518_, int p_38519_, boolean p_38520_)
```

**Parameters:**

- `p_38517_` (`int`)
- `p_38518_` (`int`)
- `p_38519_` (`int`)
- `p_38520_` (`boolean`)

### interact

```java
public InteractionResult interact(Player p_38522_, InteractionHand p_38523_)
```

**Parameters:**

- `p_38522_` (`Player`)
- `p_38523_` (`InteractionHand`)

**Returns:** `InteractionResult`

### onSyncedDataUpdated

```java
public void onSyncedDataUpdated(EntityDataAccessor<?> p_38527_)
```

**Parameters:**

- `p_38527_` (`EntityDataAccessor<?>`)

### onlyOpCanSetNbt

```java
public boolean onlyOpCanSetNbt()
```

**Returns:** `boolean`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `ServerLevel`

### onUpdated

```java
public void onUpdated()
```

### getPosition

```java
public Vec3 getPosition()
```

**Returns:** `Vec3`

### getMinecart

```java
public MinecartCommandBlock getMinecart()
```

**Returns:** `public MinecartCommandBlock`

### createCommandSourceStack

```java
public CommandSourceStack createCommandSourceStack()
```

**Returns:** `CommandSourceStack`

### isValid

```java
public boolean isValid()
```

**Returns:** `boolean`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `MinecartCommandBase` | class |  |
