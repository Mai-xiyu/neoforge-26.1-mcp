# SlimeBlock

**Package:** `net.minecraft.world.level.block`
**Type:** class
**Extends:** `HalfTransparentBlock`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SlimeBlock>` |  |

## Methods

### codec

```java
public MapCodec<SlimeBlock> codec()
```

**Returns:** `MapCodec<SlimeBlock>`

### SlimeBlock

```java
public SlimeBlock(BlockBehaviour.Properties p_56402_)
```

**Parameters:**

- `p_56402_` (`BlockBehaviour.Properties`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### fallOn

```java
public void fallOn(Level p_154567_, BlockState p_154568_, BlockPos p_154569_, Entity p_154570_, float p_154571_)
```

**Parameters:**

- `p_154567_` (`Level`)
- `p_154568_` (`BlockState`)
- `p_154569_` (`BlockPos`)
- `p_154570_` (`Entity`)
- `p_154571_` (`float`)

### updateEntityAfterFallOn

```java
public void updateEntityAfterFallOn(BlockGetter p_56406_, Entity p_56407_)
```

**Parameters:**

- `p_56406_` (`BlockGetter`)
- `p_56407_` (`Entity`)

### bounceUp

```java
private void bounceUp(Entity p_56404_)
```

**Parameters:**

- `p_56404_` (`Entity`)

**Returns:** `private void`

### stepOn

```java
public void stepOn(Level p_154573_, BlockPos p_154574_, BlockState p_154575_, Entity p_154576_)
```

**Parameters:**

- `p_154573_` (`Level`)
- `p_154574_` (`BlockPos`)
- `p_154575_` (`BlockState`)
- `p_154576_` (`Entity`)
