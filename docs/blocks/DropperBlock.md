# DropperBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `DispenserBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<DropperBlock>` |  |

## Methods

### codec

```java
public MapCodec<DropperBlock> codec()
```

**Returns:** `MapCodec<DropperBlock>`

### DropperBlock

```java
public DropperBlock(BlockBehaviour.Properties p_52942_)
```

**Parameters:**

- `p_52942_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getDispenseMethod

```java
protected DispenseItemBehavior getDispenseMethod(Level p_341227_, ItemStack p_52947_)
```

**Parameters:**

- `p_341227_` (`Level`)
- `p_52947_` (`ItemStack`)

**Returns:** `DispenseItemBehavior`

### newBlockEntity

```java
public BlockEntity newBlockEntity(BlockPos p_153179_, BlockState p_153180_)
```

**Parameters:**

- `p_153179_` (`BlockPos`)
- `p_153180_` (`BlockState`)

**Returns:** `BlockEntity`

### DropperBlockEntity

```java
return new DropperBlockEntity()
```

**Returns:** `return new`

### dispenseFrom

```java
protected void dispenseFrom(ServerLevel p_52944_, BlockState p_302455_, BlockPos p_52945_)
```

**Parameters:**

- `p_52944_` (`ServerLevel`)
- `p_302455_` (`BlockState`)
- `p_52945_` (`BlockPos`)
