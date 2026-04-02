# LootParams

**Package:** `net.minecraft.world.level.storage.loot`
**Type:** class

## Methods

### LootParams

```java
public LootParams(ServerLevel p_287766_, Map<LootContextParam<?>, Object> p_287705_, Map<ResourceLocation, LootParams.DynamicDrop> p_287642_, float p_287671_)
```

**Parameters:**

- `p_287766_` (`ServerLevel`)
- `p_287705_` (`Map<LootContextParam<?>, Object>`)
- `p_287642_` (`Map<ResourceLocation, LootParams.DynamicDrop>`)
- `p_287671_` (`float`)

**Returns:** `public`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `public ServerLevel`

### hasParam

```java
public boolean hasParam(LootContextParam<?> p_287749_)
```

**Parameters:**

- `p_287749_` (`LootContextParam<?>`)

**Returns:** `public boolean`

### getParameter

```java
<T> public <T> T getParameter(LootContextParam<T> p_287670_)
```

**Parameters:**

- `p_287670_` (`LootContextParam<T>`)

**Returns:** `public <T> T`

### getOptionalParameter

```java
public <T> T getOptionalParameter(LootContextParam<T> p_287644_)
```

**Parameters:**

- `p_287644_` (`LootContextParam<T>`)

**Returns:** `T`

### getParamOrNull

```java
public <T> T getParamOrNull(LootContextParam<T> p_287769_)
```

**Parameters:**

- `p_287769_` (`LootContextParam<T>`)

**Returns:** `T`

### addDynamicDrops

```java
public void addDynamicDrops(ResourceLocation p_287768_, Consumer<ItemStack> p_287711_)
```

**Parameters:**

- `p_287768_` (`ResourceLocation`)
- `p_287711_` (`Consumer<ItemStack>`)

**Returns:** `public void`

### getLuck

```java
public float getLuck()
```

**Returns:** `public float`

### Builder

```java
public Builder(ServerLevel p_287594_)
```

**Parameters:**

- `p_287594_` (`ServerLevel`)

**Returns:** `public`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `public ServerLevel`

### withParameter

```java
<T> public <T> LootParams.Builder withParameter(LootContextParam<T> p_287706_, T p_287606_)
```

**Parameters:**

- `p_287706_` (`LootContextParam<T>`)
- `p_287606_` (`T`)

**Returns:** `public <T> LootParams.Builder`

### withOptionalParameter

```java
<T> public <T> LootParams.Builder withOptionalParameter(LootContextParam<T> p_287680_, T p_287630_)
```

**Parameters:**

- `p_287680_` (`LootContextParam<T>`)
- `p_287630_` (`T`)

**Returns:** `public <T> LootParams.Builder`

### getParameter

```java
<T> public <T> T getParameter(LootContextParam<T> p_287646_)
```

**Parameters:**

- `p_287646_` (`LootContextParam<T>`)

**Returns:** `public <T> T`

### getOptionalParameter

```java
public <T> T getOptionalParameter(LootContextParam<T> p_287759_)
```

**Parameters:**

- `p_287759_` (`LootContextParam<T>`)

**Returns:** `T`

### withDynamicDrop

```java
public LootParams.Builder withDynamicDrop(ResourceLocation p_287734_, LootParams.DynamicDrop p_287724_)
```

**Parameters:**

- `p_287734_` (`ResourceLocation`)
- `p_287724_` (`LootParams.DynamicDrop`)

**Returns:** `public LootParams.Builder`

### IllegalStateException

```java
throw new IllegalStateException("Duplicated dynamic drop '" + this.dynamicDrops + "'")
```

**Parameters:**

- `"'"` (`"Duplicated dynamic drop '" + this.dynamicDrops +`)

**Returns:** `throw new`

### withLuck

```java
public LootParams.Builder withLuck(float p_287703_)
```

**Parameters:**

- `p_287703_` (`float`)

**Returns:** `public LootParams.Builder`

### create

```java
public LootParams create(LootContextParamSet p_287701_)
```

**Parameters:**

- `p_287701_` (`LootContextParamSet`)

**Returns:** `public LootParams`

### IllegalArgumentException

```java
to the loot context.
                throw new IllegalArgumentException("Parameters not allowed in this parameter set: " + set)
```

**Parameters:**

- `set` (`"Parameters not allowed in this parameter set: " +`)

**Returns:** `to the loot context.
                throw new`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Missing required parameters: " + set1)
```

**Parameters:**

- `set1` (`"Missing required parameters: " +`)

**Returns:** `throw new`

### LootParams

```java
return new LootParams()
```

**Returns:** `return new`

### add

```java
void add(Consumer<ItemStack> p_287584_)
```

**Parameters:**

- `p_287584_` (`Consumer<ItemStack>`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `DynamicDrop` | interface |  |
