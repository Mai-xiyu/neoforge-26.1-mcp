# RootedDirtBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`
**Implements:** `BonemealableBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<RootedDirtBlock>` |  |

## Methods

### codec

```java
public MapCodec<RootedDirtBlock> codec()
```

**Returns:** `MapCodec<RootedDirtBlock>`

### RootedDirtBlock

```java
public RootedDirtBlock(BlockBehaviour.Properties p_154359_)
```

**Parameters:**

- `p_154359_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### isValidBonemealTarget

```java
public boolean isValidBonemealTarget(LevelReader p_256100_, BlockPos p_255943_, BlockState p_255655_)
```

**Parameters:**

- `p_256100_` (`LevelReader`)
- `p_255943_` (`BlockPos`)
- `p_255655_` (`BlockState`)

**Returns:** `boolean`

### isBonemealSuccess

```java
public boolean isBonemealSuccess(Level p_221979_, RandomSource p_221980_, BlockPos p_221981_, BlockState p_221982_)
```

**Parameters:**

- `p_221979_` (`Level`)
- `p_221980_` (`RandomSource`)
- `p_221981_` (`BlockPos`)
- `p_221982_` (`BlockState`)

**Returns:** `boolean`

### performBonemeal

```java
public void performBonemeal(ServerLevel p_221974_, RandomSource p_221975_, BlockPos p_221976_, BlockState p_221977_)
```

**Parameters:**

- `p_221974_` (`ServerLevel`)
- `p_221975_` (`RandomSource`)
- `p_221976_` (`BlockPos`)
- `p_221977_` (`BlockState`)

### getParticlePos

```java
public BlockPos getParticlePos(BlockPos p_316883_)
```

**Parameters:**

- `p_316883_` (`BlockPos`)

**Returns:** `BlockPos`
