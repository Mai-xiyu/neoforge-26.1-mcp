# GameData

**Package:** `net.neoforged.neoforge.registries`
**Type:** class
**Annotations:** `@ApiStatus`

## Methods

### getBlockItemMap

```java
public static Map<Block, Item> getBlockItemMap()
```

**Returns:** `public static Map<Block, Item>`

### getBlockStateIDMap

```java
public static IdMapper<BlockState> getBlockStateIDMap()
```

**Returns:** `public static IdMapper<BlockState>`

### getBlockStatePointOfInterestTypeMap

```java
public static Map<BlockState, Holder<PoiType>> getBlockStatePointOfInterestTypeMap()
```

**Returns:** `public static Map<BlockState, Holder<PoiType>>`

### vanillaSnapshot

```java
public static void vanillaSnapshot()
```

**Returns:** `public static void`

### unfreezeData

```java
public static void unfreezeData()
```

**Returns:** `public static void`

### freezeData

```java
public static void freezeData()
```

**Returns:** `public static void`

### postRegisterEvents

```java
public static void postRegisterEvents()
```

**Returns:** `public static void`

### fireRemapEvent

```java
static void fireRemapEvent(Map<ResourceLocation, Map<ResourceLocation, IdMappingEvent.IdRemapping>> remaps, boolean isFreezing)
```

**Parameters:**

- `remaps` (`Map<ResourceLocation, Map<ResourceLocation, IdMappingEvent.IdRemapping>>`)
- `isFreezing` (`boolean`)

**Returns:** `static void`

### getRegistrationOrder

```java
public static Set<ResourceLocation> getRegistrationOrder()
```

**Returns:** `Set<ResourceLocation>`
