# InfestedBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `Block`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<InfestedBlock>` |  |

## Methods

### codec

```java
public MapCodec<? extends InfestedBlock> codec()
```

**Returns:** `MapCodec<? extends InfestedBlock>`

### InfestedBlock

```java
public InfestedBlock(Block p_54178_, BlockBehaviour.Properties p_54179_)
```

**Parameters:**

- `p_54178_` (`Block`)
- `p_54179_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### getHostBlock

```java
public Block getHostBlock()
```

**Returns:** `public Block`

### isCompatibleHostBlock

```java
public static boolean isCompatibleHostBlock(BlockState p_54196_)
```

**Parameters:**

- `p_54196_` (`BlockState`)

**Returns:** `public static boolean`

### spawnInfestation

```java
private void spawnInfestation(ServerLevel p_54181_, BlockPos p_54182_)
```

**Parameters:**

- `p_54181_` (`ServerLevel`)
- `p_54182_` (`BlockPos`)

**Returns:** `private void`

### spawnAfterBreak

```java
protected void spawnAfterBreak(BlockState p_221360_, ServerLevel p_221361_, BlockPos p_221362_, ItemStack p_221363_, boolean p_221364_)
```

**Parameters:**

- `p_221360_` (`BlockState`)
- `p_221361_` (`ServerLevel`)
- `p_221362_` (`BlockPos`)
- `p_221363_` (`ItemStack`)
- `p_221364_` (`boolean`)

### infestedStateByHost

```java
public static BlockState infestedStateByHost(BlockState p_153431_)
```

**Parameters:**

- `p_153431_` (`BlockState`)

**Returns:** `public static BlockState`

### hostStateByInfested

```java
public BlockState hostStateByInfested(BlockState p_153433_)
```

**Parameters:**

- `p_153433_` (`BlockState`)

**Returns:** `public BlockState`

### getNewStateWithProperties

```java
private static BlockState getNewStateWithProperties(Map<BlockState, BlockState> p_153424_, BlockState p_153425_, Supplier<BlockState> p_153426_)
```

**Parameters:**

- `p_153424_` (`Map<BlockState, BlockState>`)
- `p_153425_` (`BlockState`)
- `p_153426_` (`Supplier<BlockState>`)

**Returns:** `private static BlockState`
