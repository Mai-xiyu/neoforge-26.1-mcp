# CommandStorage

**Package:** `net.minecraft.world.level.storage`
**Type:** class

## Methods

### CommandStorage

```java
public CommandStorage(DimensionDataStorage p_78035_)
```

**Parameters:**

- `p_78035_` (`DimensionDataStorage`)

**Returns:** `public`

### newStorage

```java
private CommandStorage.Container newStorage(String p_164836_)
```

**Parameters:**

- `p_164836_` (`String`)

**Returns:** `private CommandStorage.Container`

### factory

```java
private SavedData.Factory<CommandStorage.Container> factory(String p_296143_)
```

**Parameters:**

- `p_296143_` (`String`)

**Returns:** `private SavedData.Factory<CommandStorage.Container>`

### get

```java
public CompoundTag get(ResourceLocation p_78045_)
```

**Parameters:**

- `p_78045_` (`ResourceLocation`)

**Returns:** `public CompoundTag`

### set

```java
public void set(ResourceLocation p_78047_, CompoundTag p_78048_)
```

**Parameters:**

- `p_78047_` (`ResourceLocation`)
- `p_78048_` (`CompoundTag`)

**Returns:** `public void`

### keys

```java
public Stream<ResourceLocation> keys()
```

**Returns:** `public Stream<ResourceLocation>`

### createId

```java
private static String createId(String p_78038_)
```

**Parameters:**

- `p_78038_` (`String`)

**Returns:** `private static String`

### load

```java
CommandStorage.Container load(CompoundTag p_164850_)
```

**Parameters:**

- `p_164850_` (`CompoundTag`)

**Returns:** `CommandStorage.Container`

### save

```java
public CompoundTag save(CompoundTag p_78075_, HolderLookup.Provider p_323504_)
```

**Parameters:**

- `p_78075_` (`CompoundTag`)
- `p_323504_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### get

```java
public CompoundTag get(String p_78059_)
```

**Parameters:**

- `p_78059_` (`String`)

**Returns:** `public CompoundTag`

### put

```java
public void put(String p_78064_, CompoundTag p_78065_)
```

**Parameters:**

- `p_78064_` (`String`)
- `p_78065_` (`CompoundTag`)

**Returns:** `public void`

### getKeys

```java
public Stream<ResourceLocation> getKeys(String p_78073_)
```

**Parameters:**

- `p_78073_` (`String`)

**Returns:** `public Stream<ResourceLocation>`
