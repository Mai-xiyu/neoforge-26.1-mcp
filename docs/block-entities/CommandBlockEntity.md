# CommandBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`

## Methods

### setCommand

```java
public void setCommand(String p_59157_)
```

**Parameters:**

- `p_59157_` (`String`)

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

### CommandBlockEntity

```java
public CommandBlockEntity(BlockPos p_155380_, BlockState p_155381_)
```

**Parameters:**

- `p_155380_` (`BlockPos`)
- `p_155381_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187491_, HolderLookup.Provider p_324575_)
```

**Parameters:**

- `p_187491_` (`CompoundTag`)
- `p_324575_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_338502_, HolderLookup.Provider p_338638_)
```

**Parameters:**

- `p_338502_` (`CompoundTag`)
- `p_338638_` (`HolderLookup.Provider`)

### onlyOpCanSetNbt

```java
public boolean onlyOpCanSetNbt()
```

**Returns:** `boolean`

### getCommandBlock

```java
public BaseCommandBlock getCommandBlock()
```

**Returns:** `public BaseCommandBlock`

### setPowered

```java
public void setPowered(boolean p_59136_)
```

**Parameters:**

- `p_59136_` (`boolean`)

**Returns:** `public void`

### isPowered

```java
public boolean isPowered()
```

**Returns:** `public boolean`

### isAutomatic

```java
public boolean isAutomatic()
```

**Returns:** `public boolean`

### setAutomatic

```java
public void setAutomatic(boolean p_59138_)
```

**Parameters:**

- `p_59138_` (`boolean`)

**Returns:** `public void`

### onModeSwitch

```java
public void onModeSwitch()
```

**Returns:** `public void`

### scheduleTick

```java
private void scheduleTick()
```

**Returns:** `private void`

### wasConditionMet

```java
public boolean wasConditionMet()
```

**Returns:** `public boolean`

### markConditionMet

```java
public boolean markConditionMet()
```

**Returns:** `public boolean`

### getMode

```java
public CommandBlockEntity.Mode getMode()
```

**Returns:** `public CommandBlockEntity.Mode`

### isConditional

```java
public boolean isConditional()
```

**Returns:** `public boolean`

### applyImplicitComponents

```java
protected void applyImplicitComponents(BlockEntity.DataComponentInput p_338181_)
```

**Parameters:**

- `p_338181_` (`BlockEntity.DataComponentInput`)

### collectImplicitComponents

```java
protected void collectImplicitComponents(DataComponentMap.Builder p_338580_)
```

**Parameters:**

- `p_338580_` (`DataComponentMap.Builder`)

### removeComponentsFromTag

```java
public void removeComponentsFromTag(CompoundTag p_331967_)
```

**Parameters:**

- `p_331967_` (`CompoundTag`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Mode` | enum |  |
