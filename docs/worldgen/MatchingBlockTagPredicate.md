# MatchingBlockTagPredicate

**Package:** `net.minecraft.world.level.levelgen.blockpredicates`
**Type:** class
**Extends:** `StateTestingPredicate`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<MatchingBlockTagPredicate>` |  |

## Methods

### MatchingBlockTagPredicate

```java
protected MatchingBlockTagPredicate(Vec3i p_204683_, TagKey<Block> p_204684_)
```

**Parameters:**

- `p_204683_` (`Vec3i`)
- `p_204684_` (`TagKey<Block>`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### test

```java
protected boolean test(BlockState p_198343_)
```

**Parameters:**

- `p_198343_` (`BlockState`)

**Returns:** `boolean`

### type

```java
public BlockPredicateType<?> type()
```

**Returns:** `BlockPredicateType<?>`
