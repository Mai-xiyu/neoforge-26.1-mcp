# LongJumpToPreferredBlock

**Package:** `net.minecraft.world.entity.ai.behavior`
**Type:** class<E extends Mob> extends LongJumpToRandomPos<E>

## Methods

### LongJumpToPreferredBlock

```java
public LongJumpToPreferredBlock(UniformInt p_250024_, int p_249524_, int p_250434_, float p_252307_, Function<E, SoundEvent> p_248661_, TagKey<Block> p_251760_, float p_249002_, BiPredicate<E, BlockPos> p_251818_)
```

**Parameters:**

- `p_250024_` (`UniformInt`)
- `p_249524_` (`int`)
- `p_250434_` (`int`)
- `p_252307_` (`float`)
- `p_248661_` (`Function<E, SoundEvent>`)
- `p_251760_` (`TagKey<Block>`)
- `p_249002_` (`float`)
- `p_251818_` (`BiPredicate<E, BlockPos>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### start

```java
protected void start(ServerLevel p_217279_, E p_217280_, long p_217281_)
```

**Parameters:**

- `p_217279_` (`ServerLevel`)
- `p_217280_` (`E`)
- `p_217281_` (`long`)

### getJumpCandidate

```java
protected Optional<LongJumpToRandomPos.PossibleJump> getJumpCandidate(ServerLevel p_217273_)
```

**Parameters:**

- `p_217273_` (`ServerLevel`)

**Returns:** `Optional<LongJumpToRandomPos.PossibleJump>`
