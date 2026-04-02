# DimensionDataStorage

**Package:** `net.minecraft.world.level.storage`
**Type:** class

## Methods

### DimensionDataStorage

```java
public DimensionDataStorage(File p_78149_, DataFixer p_78150_, HolderLookup.Provider p_324180_)
```

**Parameters:**

- `p_78149_` (`File`)
- `p_78150_` (`DataFixer`)
- `p_324180_` (`HolderLookup.Provider`)

**Returns:** `public`

### getDataFile

```java
private File getDataFile(String p_78157_)
```

**Parameters:**

- `p_78157_` (`String`)

**Returns:** `private File`

### File

```java
return new File(p_78157_ + ".dat")
```

**Parameters:**

- `".dat"` (`p_78157_ +`)

**Returns:** `return new`

### computeIfAbsent

```java
<T extends SavedData> public <T extends SavedData> T computeIfAbsent(SavedData.Factory<T> p_294124_, String p_164864_)
```

**Parameters:**

- `p_294124_` (`SavedData.Factory<T>`)
- `p_164864_` (`String`)

**Returns:** `public <T extends SavedData> T`

### get

```java
public <T extends SavedData> T get(SavedData.Factory<T> p_295091_, String p_164860_)
```

**Parameters:**

- `p_295091_` (`SavedData.Factory<T>`)
- `p_164860_` (`String`)

**Returns:** `T`

### set

```java
public void set(String p_164856_, SavedData p_164857_)
```

**Parameters:**

- `p_164856_` (`String`)
- `p_164857_` (`SavedData`)

**Returns:** `public void`

### readTagFromDisk

```java
public CompoundTag readTagFromDisk(String p_78159_, DataFixTypes p_295038_, int p_78160_)
```

**Parameters:**

- `p_78159_` (`String`)
- `p_295038_` (`DataFixTypes`)
- `p_78160_` (`int`)

**Returns:** `public CompoundTag`

### try

```java
 try(InputStream inputstream = new FileInputStream(file1)
```

**Parameters:**

- `FileInputStream(file1` (`InputStream inputstream = new`)

**Returns:** ``

### isGzip

```java
private boolean isGzip(PushbackInputStream p_78155_)
```

**Parameters:**

- `p_78155_` (`PushbackInputStream`)

**Returns:** `private boolean`

### save

```java
public void save()
```

**Returns:** `public void`
