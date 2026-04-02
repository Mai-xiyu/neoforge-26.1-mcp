# ClientPackSource

**Package:** `net.minecraft.client.resources`
**Type:** class
**Extends:** `BuiltInPackSource`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `HIGH_CONTRAST_PACK` | `String` |  |

## Methods

### ClientPackSource

```java
public ClientPackSource(Path p_249324_, DirectoryValidator p_295556_)
```

**Parameters:**

- `p_249324_` (`Path`)
- `p_295556_` (`DirectoryValidator`)

**Returns:** `public`

### createBuiltInPackLocation

```java
private static PackLocationInfo createBuiltInPackLocation(String p_326492_, Component p_326472_)
```

**Parameters:**

- `p_326492_` (`String`)
- `p_326472_` (`Component`)

**Returns:** `private static PackLocationInfo`

### createVanillaPackSource

```java
public static VanillaPackResources createVanillaPackSource(Path p_250749_)
```

**Parameters:**

- `p_250749_` (`Path`)

**Returns:** `public static VanillaPackResources`

### getPackTitle

```java
protected Component getPackTitle(String p_250421_)
```

**Parameters:**

- `p_250421_` (`String`)

**Returns:** `Component`

### createVanillaPack

```java
protected Pack createVanillaPack(PackResources p_250048_)
```

**Parameters:**

- `p_250048_` (`PackResources`)

**Returns:** `Pack`

### createBuiltinPack

```java
protected Pack createBuiltinPack(String p_250992_, Pack.ResourcesSupplier p_250814_, Component p_249835_)
```

**Parameters:**

- `p_250992_` (`String`)
- `p_250814_` (`Pack.ResourcesSupplier`)
- `p_249835_` (`Component`)

**Returns:** `Pack`

### populatePackList

```java
protected void populatePackList(BiConsumer<String, Function<String, Pack>> p_249851_)
```

**Parameters:**

- `p_249851_` (`BiConsumer<String, Function<String, Pack>>`)
