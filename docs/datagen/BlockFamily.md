# BlockFamily

**Package:** `net.minecraft.data`
**Type:** class

## Methods

### BlockFamily

```java
 BlockFamily(Block p_175950_)
```

**Parameters:**

- `p_175950_` (`Block`)

**Returns:** ``

### getBaseBlock

```java
public Block getBaseBlock()
```

**Returns:** `public Block`

### getVariants

```java
public Map<BlockFamily.Variant, Block> getVariants()
```

**Returns:** `public Map<BlockFamily.Variant, Block>`

### get

```java
public Block get(BlockFamily.Variant p_175953_)
```

**Parameters:**

- `p_175953_` (`BlockFamily.Variant`)

**Returns:** `public Block`

### shouldGenerateModel

```java
public boolean shouldGenerateModel()
```

**Returns:** `public boolean`

### shouldGenerateRecipe

```java
public boolean shouldGenerateRecipe()
```

**Returns:** `public boolean`

### getRecipeGroupPrefix

```java
public Optional<String> getRecipeGroupPrefix()
```

**Returns:** `public Optional<String>`

### getRecipeUnlockedBy

```java
public Optional<String> getRecipeUnlockedBy()
```

**Returns:** `public Optional<String>`

### Builder

```java
public Builder(Block p_175961_)
```

**Parameters:**

- `p_175961_` (`Block`)

**Returns:** `public`

### getFamily

```java
public BlockFamily getFamily()
```

**Returns:** `public BlockFamily`

### button

```java
public BlockFamily.Builder button(Block p_175964_)
```

**Parameters:**

- `p_175964_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### chiseled

```java
public BlockFamily.Builder chiseled(Block p_175972_)
```

**Parameters:**

- `p_175972_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### mosaic

```java
public BlockFamily.Builder mosaic(Block p_251947_)
```

**Parameters:**

- `p_251947_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### cracked

```java
public BlockFamily.Builder cracked(Block p_175977_)
```

**Parameters:**

- `p_175977_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### cut

```java
public BlockFamily.Builder cut(Block p_175979_)
```

**Parameters:**

- `p_175979_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### door

```java
public BlockFamily.Builder door(Block p_175981_)
```

**Parameters:**

- `p_175981_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### customFence

```java
public BlockFamily.Builder customFence(Block p_248790_)
```

**Parameters:**

- `p_248790_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### fence

```java
public BlockFamily.Builder fence(Block p_175983_)
```

**Parameters:**

- `p_175983_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### customFenceGate

```java
public BlockFamily.Builder customFenceGate(Block p_251301_)
```

**Parameters:**

- `p_251301_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### fenceGate

```java
public BlockFamily.Builder fenceGate(Block p_175985_)
```

**Parameters:**

- `p_175985_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### sign

```java
public BlockFamily.Builder sign(Block p_175966_, Block p_175967_)
```

**Parameters:**

- `p_175966_` (`Block`)
- `p_175967_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### slab

```java
public BlockFamily.Builder slab(Block p_175987_)
```

**Parameters:**

- `p_175987_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### stairs

```java
public BlockFamily.Builder stairs(Block p_175989_)
```

**Parameters:**

- `p_175989_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### pressurePlate

```java
public BlockFamily.Builder pressurePlate(Block p_175991_)
```

**Parameters:**

- `p_175991_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### polished

```java
public BlockFamily.Builder polished(Block p_175993_)
```

**Parameters:**

- `p_175993_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### trapdoor

```java
public BlockFamily.Builder trapdoor(Block p_175995_)
```

**Parameters:**

- `p_175995_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### wall

```java
public BlockFamily.Builder wall(Block p_175997_)
```

**Parameters:**

- `p_175997_` (`Block`)

**Returns:** `public BlockFamily.Builder`

### dontGenerateModel

```java
public BlockFamily.Builder dontGenerateModel()
```

**Returns:** `public BlockFamily.Builder`

### dontGenerateRecipe

```java
public BlockFamily.Builder dontGenerateRecipe()
```

**Returns:** `public BlockFamily.Builder`

### recipeGroupPrefix

```java
public BlockFamily.Builder recipeGroupPrefix(String p_175969_)
```

**Parameters:**

- `p_175969_` (`String`)

**Returns:** `public BlockFamily.Builder`

### recipeUnlockedBy

```java
public BlockFamily.Builder recipeUnlockedBy(String p_175974_)
```

**Parameters:**

- `p_175974_` (`String`)

**Returns:** `public BlockFamily.Builder`

### WALL_SIGN

```java
, WALL_SIGN()
```

**Returns:** `,`

### Variant

```java
private Variant(String p_176019_)
```

**Parameters:**

- `p_176019_` (`String`)

**Returns:** `private`

### getRecipeGroup

```java
public String getRecipeGroup()
```

**Returns:** `public String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `Variant` | enum |  |
