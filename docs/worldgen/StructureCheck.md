# StructureCheck

**Package:** `net.minecraft.world.level.levelgen.structure`
**Type:** class

## Methods

### StructureCheck

```java
public StructureCheck(ChunkScanAccess p_226712_, RegistryAccess p_226713_, StructureTemplateManager p_226714_, ResourceKey<Level> p_226715_, ChunkGenerator p_226716_, RandomState p_226717_, LevelHeightAccessor p_226718_, BiomeSource p_226719_, long p_226720_, DataFixer p_226721_)
```

**Parameters:**

- `p_226712_` (`ChunkScanAccess`)
- `p_226713_` (`RegistryAccess`)
- `p_226714_` (`StructureTemplateManager`)
- `p_226715_` (`ResourceKey<Level>`)
- `p_226716_` (`ChunkGenerator`)
- `p_226717_` (`RandomState`)
- `p_226718_` (`LevelHeightAccessor`)
- `p_226719_` (`BiomeSource`)
- `p_226720_` (`long`)
- `p_226721_` (`DataFixer`)

**Returns:** `public`

### checkStart

```java
public StructureCheckResult checkStart(ChunkPos p_226730_, Structure p_226731_, StructurePlacement p_321610_, boolean p_226732_)
```

**Parameters:**

- `p_226730_` (`ChunkPos`)
- `p_226731_` (`Structure`)
- `p_321610_` (`StructurePlacement`)
- `p_226732_` (`boolean`)

**Returns:** `public StructureCheckResult`

### canCreateStructure

```java
private boolean canCreateStructure(ChunkPos p_226756_, Structure p_226757_)
```

**Parameters:**

- `p_226756_` (`ChunkPos`)
- `p_226757_` (`Structure`)

**Returns:** `private boolean`

### deduplicateEmptyMap

```java
private static Object2IntMap<Structure> deduplicateEmptyMap(Object2IntMap<Structure> p_197299_)
```

**Parameters:**

- `p_197299_` (`Object2IntMap<Structure>`)

**Returns:** `private static Object2IntMap<Structure>`

### checkStructureInfo

```java
private StructureCheckResult checkStructureInfo(Object2IntMap<Structure> p_226752_, Structure p_226753_, boolean p_226754_)
```

**Parameters:**

- `p_226752_` (`Object2IntMap<Structure>`)
- `p_226753_` (`Structure`)
- `p_226754_` (`boolean`)

**Returns:** `private StructureCheckResult`

### onStructureLoad

```java
public void onStructureLoad(ChunkPos p_197283_, Map<Structure, StructureStart> p_197284_)
```

**Parameters:**

- `p_197283_` (`ChunkPos`)
- `p_197284_` (`Map<Structure, StructureStart>`)

**Returns:** `public void`

### storeFullResults

```java
private void storeFullResults(long p_197264_, Object2IntMap<Structure> p_197265_)
```

**Parameters:**

- `p_197264_` (`long`)
- `p_197265_` (`Object2IntMap<Structure>`)

**Returns:** `private void`

### incrementReference

```java
public void incrementReference(ChunkPos p_226723_, Structure p_226724_)
```

**Parameters:**

- `p_226723_` (`ChunkPos`)
- `p_226724_` (`Structure`)

**Returns:** `public void`
