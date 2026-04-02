# JigsawBlockEntity

**Package:** `net.minecraft.world.level.block.entity`
**Type:** class
**Extends:** `BlockEntity`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TARGET` | `String` |  |
| `POOL` | `String` |  |
| `JOINT` | `String` |  |
| `PLACEMENT_PRIORITY` | `String` |  |
| `SELECTION_PRIORITY` | `String` |  |
| `NAME` | `String` |  |
| `FINAL_STATE` | `String` |  |

## Methods

### JigsawBlockEntity

```java
public JigsawBlockEntity(BlockPos p_155605_, BlockState p_155606_)
```

**Parameters:**

- `p_155605_` (`BlockPos`)
- `p_155606_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getName

```java
public ResourceLocation getName()
```

**Returns:** `public ResourceLocation`

### getTarget

```java
public ResourceLocation getTarget()
```

**Returns:** `public ResourceLocation`

### getPool

```java
public ResourceKey<StructureTemplatePool> getPool()
```

**Returns:** `public ResourceKey<StructureTemplatePool>`

### getFinalState

```java
public String getFinalState()
```

**Returns:** `public String`

### getJoint

```java
public JigsawBlockEntity.JointType getJoint()
```

**Returns:** `public JigsawBlockEntity.JointType`

### getPlacementPriority

```java
public int getPlacementPriority()
```

**Returns:** `public int`

### getSelectionPriority

```java
public int getSelectionPriority()
```

**Returns:** `public int`

### setName

```java
public void setName(ResourceLocation p_59436_)
```

**Parameters:**

- `p_59436_` (`ResourceLocation`)

**Returns:** `public void`

### setTarget

```java
public void setTarget(ResourceLocation p_59439_)
```

**Parameters:**

- `p_59439_` (`ResourceLocation`)

**Returns:** `public void`

### setPool

```java
public void setPool(ResourceKey<StructureTemplatePool> p_222764_)
```

**Parameters:**

- `p_222764_` (`ResourceKey<StructureTemplatePool>`)

**Returns:** `public void`

### setFinalState

```java
public void setFinalState(String p_59432_)
```

**Parameters:**

- `p_59432_` (`String`)

**Returns:** `public void`

### setJoint

```java
public void setJoint(JigsawBlockEntity.JointType p_59425_)
```

**Parameters:**

- `p_59425_` (`JigsawBlockEntity.JointType`)

**Returns:** `public void`

### setPlacementPriority

```java
public void setPlacementPriority(int p_309107_)
```

**Parameters:**

- `p_309107_` (`int`)

**Returns:** `public void`

### setSelectionPriority

```java
public void setSelectionPriority(int p_309018_)
```

**Parameters:**

- `p_309018_` (`int`)

**Returns:** `public void`

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_187504_, HolderLookup.Provider p_323960_)
```

**Parameters:**

- `p_187504_` (`CompoundTag`)
- `p_323960_` (`HolderLookup.Provider`)

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_155608_, HolderLookup.Provider p_324139_)
```

**Parameters:**

- `p_155608_` (`CompoundTag`)
- `p_324139_` (`HolderLookup.Provider`)

### getUpdatePacket

```java
public ClientboundBlockEntityDataPacket getUpdatePacket()
```

**Returns:** `public ClientboundBlockEntityDataPacket`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_323882_)
```

**Parameters:**

- `p_323882_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### generate

```java
public void generate(ServerLevel p_59421_, int p_59422_, boolean p_59423_)
```

**Parameters:**

- `p_59421_` (`ServerLevel`)
- `p_59422_` (`int`)
- `p_59423_` (`boolean`)

**Returns:** `public void`

### ALIGNED

```java
, ALIGNED()
```

**Returns:** `,`

### JointType

```java
private JointType(String p_59455_)
```

**Parameters:**

- `p_59455_` (`String`)

**Returns:** `private`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### byName

```java
public static Optional<JigsawBlockEntity.JointType> byName(String p_59458_)
```

**Parameters:**

- `p_59458_` (`String`)

**Returns:** `public static Optional<JigsawBlockEntity.JointType>`

### getTranslatedName

```java
public Component getTranslatedName()
```

**Returns:** `public Component`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `JointType` | enum |  |
