# LootTable

**Package:** `net.minecraft.world.level.storage.loot`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `EMPTY` | `LootTable` |  |
| `DEFAULT_PARAM_SET` | `LootContextParamSet` |  |
| `RANDOMIZE_SEED` | `long` |  |
| `DIRECT_CODEC` | `Codec<LootTable>` |  |
| `CODEC` | `Codec<Holder<LootTable>>` |  |

## Methods

### LootTable

```java
 LootTable(LootContextParamSet p_287716_, Optional<ResourceLocation> p_299055_, List<LootPool> p_298390_, List<LootItemFunction> p_298775_)
```

**Parameters:**

- `p_287716_` (`LootContextParamSet`)
- `p_299055_` (`Optional<ResourceLocation>`)
- `p_298390_` (`List<LootPool>`)
- `p_298775_` (`List<LootItemFunction>`)

**Returns:** ``

### createStackSplitter

```java
public static Consumer<ItemStack> createStackSplitter(ServerLevel p_287765_, Consumer<ItemStack> p_251308_)
```

**Parameters:**

- `p_287765_` (`ServerLevel`)
- `p_251308_` (`Consumer<ItemStack>`)

**Returns:** `public static Consumer<ItemStack>`

### getRandomItemsRaw ⚠️ *Deprecated*

```java
, so that the Forge Global Loot Modifiers will be applied
    public void getRandomItemsRaw(LootParams p_287669_, Consumer<ItemStack> p_287781_)
```

**Parameters:**

- `p_287669_` (`LootParams`)
- `p_287781_` (`Consumer<ItemStack>`)

**Returns:** `, so that the Forge Global Loot Modifiers will be applied
    public void`

### getRandomItemsRaw ⚠️ *Deprecated*

```java
, so that the Forge Global Loot Modifiers will be applied
    public void getRandomItemsRaw(LootContext p_79132_, Consumer<ItemStack> p_79133_)
```

**Parameters:**

- `p_79132_` (`LootContext`)
- `p_79133_` (`Consumer<ItemStack>`)

**Returns:** `, so that the Forge Global Loot Modifiers will be applied
    public void`

### getRandomItems

```java
public void getRandomItems(LootParams p_287748_, long p_287729_, Consumer<ItemStack> p_287583_)
```

**Parameters:**

- `p_287748_` (`LootParams`)
- `p_287729_` (`long`)
- `p_287583_` (`Consumer<ItemStack>`)

**Returns:** `public void`

### getRandomItems

```java
public void getRandomItems(LootParams p_287704_, Consumer<ItemStack> p_287617_)
```

**Parameters:**

- `p_287704_` (`LootParams`)
- `p_287617_` (`Consumer<ItemStack>`)

**Returns:** `public void`

### getRandomItems

```java
public void getRandomItems(LootContext p_79149_, Consumer<ItemStack> p_79150_)
```

**Parameters:**

- `p_79149_` (`LootContext`)
- `p_79150_` (`Consumer<ItemStack>`)

**Returns:** `public void`

### getRandomItems

```java
public ObjectArrayList<ItemStack> getRandomItems(LootParams p_347545_, RandomSource p_347680_)
```

**Parameters:**

- `p_347545_` (`LootParams`)
- `p_347680_` (`RandomSource`)

**Returns:** `public ObjectArrayList<ItemStack>`

### getRandomItems

```java
public ObjectArrayList<ItemStack> getRandomItems(LootParams p_287574_, long p_287773_)
```

**Parameters:**

- `p_287574_` (`LootParams`)
- `p_287773_` (`long`)

**Returns:** `public ObjectArrayList<ItemStack>`

### getRandomItems

```java
public ObjectArrayList<ItemStack> getRandomItems(LootParams p_287616_)
```

**Parameters:**

- `p_287616_` (`LootParams`)

**Returns:** `public ObjectArrayList<ItemStack>`

### getRandomItems

```java
private ObjectArrayList<ItemStack> getRandomItems(LootContext p_230923_)
```

**Parameters:**

- `p_230923_` (`LootContext`)

**Returns:** `private ObjectArrayList<ItemStack>`

### getParamSet

```java
public LootContextParamSet getParamSet()
```

**Returns:** `public LootContextParamSet`

### validate

```java
public void validate(ValidationContext p_79137_)
```

**Parameters:**

- `p_79137_` (`ValidationContext`)

**Returns:** `public void`

### fill

```java
public void fill(Container p_287662_, LootParams p_287743_, long p_287585_)
```

**Parameters:**

- `p_287662_` (`Container`)
- `p_287743_` (`LootParams`)
- `p_287585_` (`long`)

**Returns:** `public void`

### shuffleAndSplitItems

```java
private void shuffleAndSplitItems(ObjectArrayList<ItemStack> p_230925_, int p_230926_, RandomSource p_230927_)
```

**Parameters:**

- `p_230925_` (`ObjectArrayList<ItemStack>`)
- `p_230926_` (`int`)
- `p_230927_` (`RandomSource`)

**Returns:** `private void`

### getAvailableSlots

```java
private List<Integer> getAvailableSlots(Container p_230920_, RandomSource p_230921_)
```

**Parameters:**

- `p_230920_` (`Container`)
- `p_230921_` (`RandomSource`)

**Returns:** `private List<Integer>`

### lootTable

```java
public static LootTable.Builder lootTable()
```

**Returns:** `public static LootTable.Builder`

### freeze

```java
public void freeze()
```

**Returns:** `public void`

### isFrozen

```java
public boolean isFrozen()
```

**Returns:** `public boolean`

### checkFrozen

```java
private void checkFrozen()
```

**Returns:** `private void`

### RuntimeException

```java
throw new RuntimeException("Attempted to modify LootTable after being finalized!")
```

**Parameters:**

- `finalized!"` (`"Attempted to modify LootTable after being`)

**Returns:** `throw new`

### setLootTableId

```java
public void setLootTableId(ResourceLocation id)
```

**Parameters:**

- `id` (`ResourceLocation`)

**Returns:** `public void`

### IllegalStateException

```java
throw new IllegalStateException("Attempted to rename loot table from '" + this.lootTableId + "' to '" + id + "': this is not supported")
```

**Parameters:**

- `supported"` (`"Attempted to rename loot table from '" + this.lootTableId + "' to '" + id + "': this is not`)

**Returns:** `throw new`

### getLootTableId

```java
public ResourceLocation getLootTableId()
```

**Returns:** `public ResourceLocation`

### getPool

```java
.jetbrains.annotations.Nullable
    public LootPool getPool(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `.jetbrains.annotations.Nullable
    public LootPool`

### removePool

```java
.jetbrains.annotations.Nullable
    public LootPool removePool(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `.jetbrains.annotations.Nullable
    public LootPool`

### checkFrozen

```java
 checkFrozen()
```

**Returns:** ``

### addPool

```java
Allow adding new pools to LootTable
    public void addPool(LootPool pool)
```

**Parameters:**

- `pool` (`LootPool`)

**Returns:** `Allow adding new pools to LootTable
    public void`

### checkFrozen

```java
 checkFrozen()
```

**Returns:** ``

### withPool

```java
public LootTable.Builder withPool(LootPool.Builder p_79162_)
```

**Parameters:**

- `p_79162_` (`LootPool.Builder`)

**Returns:** `public LootTable.Builder`

### setParamSet

```java
public LootTable.Builder setParamSet(LootContextParamSet p_79166_)
```

**Parameters:**

- `p_79166_` (`LootContextParamSet`)

**Returns:** `public LootTable.Builder`

### setRandomSequence

```java
public LootTable.Builder setRandomSequence(ResourceLocation p_287667_)
```

**Parameters:**

- `p_287667_` (`ResourceLocation`)

**Returns:** `public LootTable.Builder`

### apply

```java
public LootTable.Builder apply(LootItemFunction.Builder p_79164_)
```

**Parameters:**

- `p_79164_` (`LootItemFunction.Builder`)

**Returns:** `public LootTable.Builder`

### unwrap

```java
public LootTable.Builder unwrap()
```

**Returns:** `public LootTable.Builder`

### build

```java
public LootTable build()
```

**Returns:** `public LootTable`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
