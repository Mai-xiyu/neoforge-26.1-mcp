# StructureFeatureIndexSavedData

**Package:** `net.minecraft.world.level.levelgen.structure`
**Type:** class
**Extends:** `SavedData`

## Methods

### factory

```java
public static SavedData.Factory<StructureFeatureIndexSavedData> factory()
```

**Returns:** `public static SavedData.Factory<StructureFeatureIndexSavedData>`

### StructureFeatureIndexSavedData

```java
private StructureFeatureIndexSavedData(LongSet p_163532_, LongSet p_163533_)
```

**Parameters:**

- `p_163532_` (`LongSet`)
- `p_163533_` (`LongSet`)

**Returns:** `private`

### StructureFeatureIndexSavedData

```java
public StructureFeatureIndexSavedData()
```

**Returns:** `public`

### load

```java
public static StructureFeatureIndexSavedData load(CompoundTag p_163535_, HolderLookup.Provider p_323754_)
```

**Parameters:**

- `p_163535_` (`CompoundTag`)
- `p_323754_` (`HolderLookup.Provider`)

**Returns:** `public static StructureFeatureIndexSavedData`

### save

```java
public CompoundTag save(CompoundTag p_73372_, HolderLookup.Provider p_323794_)
```

**Parameters:**

- `p_73372_` (`CompoundTag`)
- `p_323794_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### addIndex

```java
public void addIndex(long p_73366_)
```

**Parameters:**

- `p_73366_` (`long`)

**Returns:** `public void`

### hasStartIndex

```java
public boolean hasStartIndex(long p_73370_)
```

**Parameters:**

- `p_73370_` (`long`)

**Returns:** `public boolean`

### hasUnhandledIndex

```java
public boolean hasUnhandledIndex(long p_73374_)
```

**Parameters:**

- `p_73374_` (`long`)

**Returns:** `public boolean`

### removeIndex

```java
public void removeIndex(long p_73376_)
```

**Parameters:**

- `p_73376_` (`long`)

**Returns:** `public void`

### getAll

```java
public LongSet getAll()
```

**Returns:** `public LongSet`
