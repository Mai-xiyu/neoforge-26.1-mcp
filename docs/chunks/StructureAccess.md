# StructureAccess

**Package:** `net.minecraft.world.level.chunk`
**Type:** interface

## Methods

### getStartForStructure

```java
StructureStart getStartForStructure(Structure p_223434_)
```

**Parameters:**

- `p_223434_` (`Structure`)

**Returns:** `StructureStart`

### setStartForStructure

```java
void setStartForStructure(Structure p_223437_, StructureStart p_223438_)
```

**Parameters:**

- `p_223437_` (`Structure`)
- `p_223438_` (`StructureStart`)

### getReferencesForStructure

```java
LongSet getReferencesForStructure(Structure p_223439_)
```

**Parameters:**

- `p_223439_` (`Structure`)

**Returns:** `LongSet`

### addReferenceForStructure

```java
void addReferenceForStructure(Structure p_223435_, long p_223436_)
```

**Parameters:**

- `p_223435_` (`Structure`)
- `p_223436_` (`long`)

### getAllReferences

```java
Map<Structure, LongSet> getAllReferences()
```

**Returns:** `Map<Structure, LongSet>`

### setAllReferences

```java
void setAllReferences(Map<Structure, LongSet> p_223440_)
```

**Parameters:**

- `p_223440_` (`Map<Structure, LongSet>`)
