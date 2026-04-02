# NeoForgeDataMapsProvider

**Package:** `net.neoforged.neoforge.common.data.internal`
**Type:** class
**Extends:** `DataMapProvider`

## Methods

### NeoForgeDataMapsProvider

```java
public NeoForgeDataMapsProvider(PackOutput packOutput, CompletableFuture<HolderLookup.Provider> lookupProvider)
```

**Parameters:**

- `packOutput` (`PackOutput`)
- `lookupProvider` (`CompletableFuture<HolderLookup.Provider>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### gather

```java
protected void gather(HolderLookup.Provider provider)
```

**Parameters:**

- `provider` (`HolderLookup.Provider`)

### StrippablesAccess

```java
private StrippablesAccess(ToolMaterial material, float attackDamage, float attackSpeed, Properties properties)
```

**Parameters:**

- `material` (`ToolMaterial`)
- `attackDamage` (`float`)
- `attackSpeed` (`float`)
- `properties` (`Properties`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getStrippables

```java
public static Map<Block, Block> getStrippables()
```

**Returns:** `public static Map<Block, Block>`

### FuelValuesDataMapBuilder

```java
public FuelValuesDataMapBuilder(HolderLookup.Provider lookupProvider, DataMapProvider.Builder<FurnaceFuel, Item> builder)
```

**Parameters:**

- `lookupProvider` (`HolderLookup.Provider`)
- `builder` (`DataMapProvider.Builder<FurnaceFuel, Item>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### add

```java
public FuelValuesDataMapBuilder add(TagKey<Item> tagKey, int burnTime)
```

**Parameters:**

- `tagKey` (`TagKey<Item>`)
- `burnTime` (`int`)

**Returns:** `FuelValuesDataMapBuilder`

### add

```java
public FuelValuesDataMapBuilder add(ItemLike item, int burnTime)
```

**Parameters:**

- `item` (`ItemLike`)
- `burnTime` (`int`)

**Returns:** `FuelValuesDataMapBuilder`

### remove

```java
public FuelValuesDataMapBuilder remove(TagKey<Item> tagKey)
```

**Parameters:**

- `tagKey` (`TagKey<Item>`)

**Returns:** `FuelValuesDataMapBuilder`
