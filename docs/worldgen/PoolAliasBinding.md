# PoolAliasBinding

**Package:** `net.minecraft.world.level.levelgen.structure.pools.alias`
**Type:** interface

## Methods

### forEachResolved

```java
void forEachResolved(RandomSource p_307322_, BiConsumer<ResourceKey<StructureTemplatePool>, ResourceKey<StructureTemplatePool>> p_307269_)
```

**Parameters:**

- `p_307322_` (`RandomSource`)
- `p_307269_` (`BiConsumer<ResourceKey<StructureTemplatePool>, ResourceKey<StructureTemplatePool>>`)

### allTargets

```java
Stream<ResourceKey<StructureTemplatePool>> allTargets()
```

**Returns:** `Stream<ResourceKey<StructureTemplatePool>>`

### direct

```java
static Direct direct(String p_307227_, String p_307334_)
```

**Parameters:**

- `p_307227_` (`String`)
- `p_307334_` (`String`)

**Returns:** `static Direct`

### direct

```java
static Direct direct(ResourceKey<StructureTemplatePool> p_307379_, ResourceKey<StructureTemplatePool> p_307242_)
```

**Parameters:**

- `p_307379_` (`ResourceKey<StructureTemplatePool>`)
- `p_307242_` (`ResourceKey<StructureTemplatePool>`)

**Returns:** `static Direct`

### Direct

```java
return new Direct()
```

**Returns:** `return new`

### random

```java
static Random random(String p_307435_, SimpleWeightedRandomList<String> p_307653_)
```

**Parameters:**

- `p_307435_` (`String`)
- `p_307653_` (`SimpleWeightedRandomList<String>`)

**Returns:** `static Random`

### random

```java
static Random random(ResourceKey<StructureTemplatePool> p_307260_, SimpleWeightedRandomList<ResourceKey<StructureTemplatePool>> p_307665_)
```

**Parameters:**

- `p_307260_` (`ResourceKey<StructureTemplatePool>`)
- `p_307665_` (`SimpleWeightedRandomList<ResourceKey<StructureTemplatePool>>`)

**Returns:** `static Random`

### Random

```java
return new Random()
```

**Returns:** `return new`

### randomGroup

```java
static RandomGroup randomGroup(SimpleWeightedRandomList<List<PoolAliasBinding>> p_307498_)
```

**Parameters:**

- `p_307498_` (`SimpleWeightedRandomList<List<PoolAliasBinding>>`)

**Returns:** `static RandomGroup`

### RandomGroup

```java
return new RandomGroup()
```

**Returns:** `return new`

### codec

```java
MapCodec<? extends PoolAliasBinding> codec()
```

**Returns:** `MapCodec<? extends PoolAliasBinding>`
