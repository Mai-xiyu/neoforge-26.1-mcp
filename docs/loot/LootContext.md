# LootContext

**Package:** `net.minecraft.world.level.storage.loot`
**Type:** class

## Methods

### LootContext

```java
 LootContext(LootParams p_287722_, RandomSource p_287702_, HolderGetter.Provider p_335850_)
```

**Parameters:**

- `p_287722_` (`LootParams`)
- `p_287702_` (`RandomSource`)
- `p_335850_` (`HolderGetter.Provider`)

**Returns:** ``

### hasParam

```java
public boolean hasParam(LootContextParam<?> p_78937_)
```

**Parameters:**

- `p_78937_` (`LootContextParam<?>`)

**Returns:** `public boolean`

### getParam

```java
<T> public <T> T getParam(LootContextParam<T> p_165125_)
```

**Parameters:**

- `p_165125_` (`LootContextParam<T>`)

**Returns:** `public <T> T`

### addDynamicDrops

```java
public void addDynamicDrops(ResourceLocation p_78943_, Consumer<ItemStack> p_78944_)
```

**Parameters:**

- `p_78943_` (`ResourceLocation`)
- `p_78944_` (`Consumer<ItemStack>`)

**Returns:** `public void`

### getParamOrNull

```java
public <T> T getParamOrNull(LootContextParam<T> p_78954_)
```

**Parameters:**

- `p_78954_` (`LootContextParam<T>`)

**Returns:** `T`

### hasVisitedElement

```java
public boolean hasVisitedElement(LootContext.VisitedEntry<?> p_279182_)
```

**Parameters:**

- `p_279182_` (`LootContext.VisitedEntry<?>`)

**Returns:** `public boolean`

### pushVisitedElement

```java
public boolean pushVisitedElement(LootContext.VisitedEntry<?> p_279152_)
```

**Parameters:**

- `p_279152_` (`LootContext.VisitedEntry<?>`)

**Returns:** `public boolean`

### popVisitedElement

```java
public void popVisitedElement(LootContext.VisitedEntry<?> p_279198_)
```

**Parameters:**

- `p_279198_` (`LootContext.VisitedEntry<?>`)

**Returns:** `public void`

### getResolver

```java
public HolderGetter.Provider getResolver()
```

**Returns:** `public HolderGetter.Provider`

### getRandom

```java
public RandomSource getRandom()
```

**Returns:** `public RandomSource`

### getLuck

```java
public float getLuck()
```

**Returns:** `public float`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `public ServerLevel`

### createVisitedEntry

```java
public static LootContext.VisitedEntry<LootTable> createVisitedEntry(LootTable p_279327_)
```

**Parameters:**

- `p_279327_` (`LootTable`)

**Returns:** `public static LootContext.VisitedEntry<LootTable>`

### createVisitedEntry

```java
public static LootContext.VisitedEntry<LootItemCondition> createVisitedEntry(LootItemCondition p_279250_)
```

**Parameters:**

- `p_279250_` (`LootItemCondition`)

**Returns:** `public static LootContext.VisitedEntry<LootItemCondition>`

### createVisitedEntry

```java
public static LootContext.VisitedEntry<LootItemFunction> createVisitedEntry(LootItemFunction p_279163_)
```

**Parameters:**

- `p_279163_` (`LootItemFunction`)

**Returns:** `public static LootContext.VisitedEntry<LootItemFunction>`

### LootContext

```java
private LootContext(LootParams p_287722_, RandomSource p_287702_, HolderGetter.Provider p_287619_, ResourceLocation queriedLootTableId)
```

**Parameters:**

- `p_287722_` (`LootParams`)
- `p_287702_` (`RandomSource`)
- `p_287619_` (`HolderGetter.Provider`)
- `queriedLootTableId` (`ResourceLocation`)

**Returns:** `private`

### this

```java
 this()
```

**Returns:** ``

### setQueriedLootTableId

```java
public void setQueriedLootTableId(.jetbrains.annotations.Nullable ResourceLocation queriedLootTableId)
```

**Parameters:**

- `queriedLootTableId` (`.jetbrains.annotations.Nullable ResourceLocation`)

**Returns:** `public void`

### getQueriedLootTableId

```java
public ResourceLocation getQueriedLootTableId()
```

**Returns:** `public ResourceLocation`

### Builder

```java
correctly pass around loot table ID with copy constructor

        public Builder(LootParams p_287628_)
```

**Parameters:**

- `p_287628_` (`LootParams`)

**Returns:** `correctly pass around loot table ID with copy constructor

        public`

### Builder

```java
public Builder(LootContext context)
```

**Parameters:**

- `context` (`LootContext`)

**Returns:** `public`

### withOptionalRandomSeed

```java
public LootContext.Builder withOptionalRandomSeed(long p_78966_)
```

**Parameters:**

- `p_78966_` (`long`)

**Returns:** `public LootContext.Builder`

### withOptionalRandomSource

```java
public LootContext.Builder withOptionalRandomSource(RandomSource p_347445_)
```

**Parameters:**

- `p_347445_` (`RandomSource`)

**Returns:** `public LootContext.Builder`

### withQueriedLootTableId

```java
public LootContext.Builder withQueriedLootTableId(ResourceLocation queriedLootTableId)
```

**Parameters:**

- `queriedLootTableId` (`ResourceLocation`)

**Returns:** `public LootContext.Builder`

### getLevel

```java
public ServerLevel getLevel()
```

**Returns:** `public ServerLevel`

### create

```java
public LootContext create(Optional<ResourceLocation> p_298622_)
```

**Parameters:**

- `p_298622_` (`Optional<ResourceLocation>`)

**Returns:** `public LootContext`

### ATTACKING_PLAYER

```java
, ATTACKING_PLAYER()
```

**Returns:** `,`

### EntityTarget

```java
private EntityTarget(String p_79001_, LootContextParam<? extends Entity> p_79002_)
```

**Parameters:**

- `p_79001_` (`String`)
- `p_79002_` (`LootContextParam<? extends Entity>`)

**Returns:** `private`

### getParam

```java
public LootContextParam<? extends Entity> getParam()
```

**Returns:** `public LootContextParam<? extends Entity>`

### getName

```java
forEntity serializes it properly
        public String getName()
```

**Returns:** `forEntity serializes it properly
        public String`

### getByName

```java
public static LootContext.EntityTarget getByName(String p_79007_)
```

**Parameters:**

- `p_79007_` (`String`)

**Returns:** `public static LootContext.EntityTarget`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid entity target " + p_79007_)
```

**Parameters:**

- `p_79007_` (`"Invalid entity target " +`)

**Returns:** `throw new`

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
| `EntityTarget` | enum |  |
| `VisitedEntry` | record |  |
