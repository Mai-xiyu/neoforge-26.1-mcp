# ServerPacksSource

**Package:** `net.minecraft.server.packs.repository`
**Type:** class
**Extends:** `BuiltInPackSource`
**Side:** 🖧 Server

## Methods

### ServerPacksSource

```java
public ServerPacksSource(DirectoryValidator p_294494_)
```

**Parameters:**

- `p_294494_` (`DirectoryValidator`)

**Returns:** `public`

### createBuiltInPackLocation

```java
private static PackLocationInfo createBuiltInPackLocation(String p_326487_, Component p_326454_)
```

**Parameters:**

- `p_326487_` (`String`)
- `p_326454_` (`Component`)

**Returns:** `private static PackLocationInfo`

### createVanillaPackSource

```java
public static VanillaPackResources createVanillaPackSource()
```

**Returns:** `VanillaPackResources`

### getPackTitle

```java
protected Component getPackTitle(String p_249692_)
```

**Parameters:**

- `p_249692_` (`String`)

**Returns:** `Component`

### createVanillaPack

```java
protected Pack createVanillaPack(PackResources p_250283_)
```

**Parameters:**

- `p_250283_` (`PackResources`)

**Returns:** `Pack`

### createBuiltinPack

```java
protected Pack createBuiltinPack(String p_250596_, Pack.ResourcesSupplier p_249625_, Component p_249043_)
```

**Parameters:**

- `p_250596_` (`String`)
- `p_249625_` (`Pack.ResourcesSupplier`)
- `p_249043_` (`Component`)

**Returns:** `Pack`

### createPackRepository

```java
public static PackRepository createPackRepository(Path p_251569_, DirectoryValidator p_295336_)
```

**Parameters:**

- `p_251569_` (`Path`)
- `p_295336_` (`DirectoryValidator`)

**Returns:** `public static PackRepository`

### createVanillaTrustedRepository

```java
public static PackRepository createVanillaTrustedRepository()
```

**Returns:** `public static PackRepository`

### createPackRepository

```java
public static PackRepository createPackRepository(LevelStorageSource.LevelStorageAccess p_250213_)
```

**Parameters:**

- `p_250213_` (`LevelStorageSource.LevelStorageAccess`)

**Returns:** `public static PackRepository`
