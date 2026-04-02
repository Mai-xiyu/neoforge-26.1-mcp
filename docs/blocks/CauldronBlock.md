# CauldronBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `AbstractCauldronBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<CauldronBlock>` |  |

## Methods

### codec

```java
public MapCodec<CauldronBlock> codec()
```

**Returns:** `MapCodec<CauldronBlock>`

### CauldronBlock

```java
public CauldronBlock(BlockBehaviour.Properties p_51403_)
```

**Parameters:**

- `p_51403_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isFull

```java
public boolean isFull(BlockState p_152947_)
```

**Parameters:**

- `p_152947_` (`BlockState`)

**Returns:** `boolean`

### shouldHandlePrecipitation

```java
protected static boolean shouldHandlePrecipitation(Level p_182451_, Biome.Precipitation p_182452_)
```

**Parameters:**

- `p_182451_` (`Level`)
- `p_182452_` (`Biome.Precipitation`)

**Returns:** `protected static boolean`

### handlePrecipitation

```java
public void handlePrecipitation(BlockState p_152935_, Level p_152936_, BlockPos p_152937_, Biome.Precipitation p_152938_)
```

**Parameters:**

- `p_152935_` (`BlockState`)
- `p_152936_` (`Level`)
- `p_152937_` (`BlockPos`)
- `p_152938_` (`Biome.Precipitation`)

### canReceiveStalactiteDrip

```java
protected boolean canReceiveStalactiteDrip(Fluid p_152945_)
```

**Parameters:**

- `p_152945_` (`Fluid`)

**Returns:** `boolean`

### receiveStalactiteDrip

```java
protected void receiveStalactiteDrip(BlockState p_152940_, Level p_152941_, BlockPos p_152942_, Fluid p_152943_)
```

**Parameters:**

- `p_152940_` (`BlockState`)
- `p_152941_` (`Level`)
- `p_152942_` (`BlockPos`)
- `p_152943_` (`Fluid`)
