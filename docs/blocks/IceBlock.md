# IceBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HalfTransparentBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<IceBlock>` |  |

## Methods

### codec

```java
public MapCodec<? extends IceBlock> codec()
```

**Returns:** `MapCodec<? extends IceBlock>`

### IceBlock

```java
public IceBlock(BlockBehaviour.Properties p_54155_)
```

**Parameters:**

- `p_54155_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### meltsInto

```java
public static BlockState meltsInto()
```

**Returns:** `public static BlockState`

### playerDestroy

```java
public void playerDestroy(Level p_54157_, Player p_54158_, BlockPos p_54159_, BlockState p_54160_, BlockEntity p_54161_, ItemStack p_54162_)
```

**Parameters:**

- `p_54157_` (`Level`)
- `p_54158_` (`Player`)
- `p_54159_` (`BlockPos`)
- `p_54160_` (`BlockState`)
- `p_54161_` (`BlockEntity`)
- `p_54162_` (`ItemStack`)

### randomTick

```java
protected void randomTick(BlockState p_221355_, ServerLevel p_221356_, BlockPos p_221357_, RandomSource p_221358_)
```

**Parameters:**

- `p_221355_` (`BlockState`)
- `p_221356_` (`ServerLevel`)
- `p_221357_` (`BlockPos`)
- `p_221358_` (`RandomSource`)

### melt

```java
protected void melt(BlockState p_54169_, Level p_54170_, BlockPos p_54171_)
```

**Parameters:**

- `p_54169_` (`BlockState`)
- `p_54170_` (`Level`)
- `p_54171_` (`BlockPos`)

**Returns:** `protected void`
