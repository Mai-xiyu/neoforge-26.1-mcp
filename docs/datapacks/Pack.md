# Pack

**Package:** `net.minecraft.server.packs.repository`
**Type:** class
**Side:** 🖧 Server

## Methods

### readMetaAndCreate

```java
public static Pack readMetaAndCreate(PackLocationInfo p_326065_, Pack.ResourcesSupplier p_252210_, PackType p_250595_, PackSelectionConfig p_326429_)
```

**Parameters:**

- `p_326065_` (`PackLocationInfo`)
- `p_252210_` (`Pack.ResourcesSupplier`)
- `p_250595_` (`PackType`)
- `p_326429_` (`PackSelectionConfig`)

**Returns:** `Pack`

### Pack

```java
public Pack(PackLocationInfo p_326123_, Pack.ResourcesSupplier p_249377_, Pack.Metadata p_326375_, PackSelectionConfig p_326282_)
```

**Parameters:**

- `p_326123_` (`PackLocationInfo`)
- `p_249377_` (`Pack.ResourcesSupplier`)
- `p_326375_` (`Pack.Metadata`)
- `p_326282_` (`PackSelectionConfig`)

**Returns:** `public`

### Pack

```java
private Pack(PackLocationInfo p_326123_, Pack.ResourcesSupplier p_249377_, Pack.Metadata p_326375_, PackSelectionConfig p_326282_, List<Pack> children)
```

**Parameters:**

- `p_326123_` (`PackLocationInfo`)
- `p_249377_` (`Pack.ResourcesSupplier`)
- `p_326375_` (`Pack.Metadata`)
- `p_326282_` (`PackSelectionConfig`)
- `children` (`List<Pack>`)

**Returns:** `private`

### readPackMetadata

```java
public static Pack.Metadata readPackMetadata(PackLocationInfo p_326060_, Pack.ResourcesSupplier p_326166_, int p_326341_)
```

**Parameters:**

- `p_326060_` (`PackLocationInfo`)
- `p_326166_` (`Pack.ResourcesSupplier`)
- `p_326341_` (`int`)

**Returns:** `Pack.Metadata`

### getDeclaredPackVersions

```java
public static InclusiveRange<Integer> getDeclaredPackVersions(String p_295795_, PackMetadataSection p_294612_)
```

**Parameters:**

- `p_295795_` (`String`)
- `p_294612_` (`PackMetadataSection`)

**Returns:** `public static InclusiveRange<Integer>`

### location

```java
public PackLocationInfo location()
```

**Returns:** `public PackLocationInfo`

### getTitle

```java
public Component getTitle()
```

**Returns:** `public Component`

### getDescription

```java
public Component getDescription()
```

**Returns:** `public Component`

### getChatLink

```java
public Component getChatLink(boolean p_10438_)
```

**Parameters:**

- `p_10438_` (`boolean`)

**Returns:** `public Component`

### getCompatibility

```java
public PackCompatibility getCompatibility()
```

**Returns:** `public PackCompatibility`

### getRequestedFeatures

```java
public FeatureFlagSet getRequestedFeatures()
```

**Returns:** `public FeatureFlagSet`

### open

```java
public PackResources open()
```

**Returns:** `public PackResources`

### getId

```java
public String getId()
```

**Returns:** `public String`

### selectionConfig

```java
public PackSelectionConfig selectionConfig()
```

**Returns:** `public PackSelectionConfig`

### isRequired

```java
public boolean isRequired()
```

**Returns:** `public boolean`

### isFixedPosition

```java
public boolean isFixedPosition()
```

**Returns:** `public boolean`

### getDefaultPosition

```java
public Pack.Position getDefaultPosition()
```

**Returns:** `public Pack.Position`

### getPackSource

```java
public PackSource getPackSource()
```

**Returns:** `public PackSource`

### isHidden

```java
public boolean isHidden()
```

**Returns:** `public boolean`

### getChildren

```java
public List<Pack> getChildren()
```

**Returns:** `public List<Pack>`

### streamSelfAndChildren

```java
public java.util.stream.Stream<Pack> streamSelfAndChildren()
```

**Returns:** `public java.util.stream.Stream<Pack>`

### withChildren

```java
public Pack withChildren(List<Pack> children)
```

**Parameters:**

- `children` (`List<Pack>`)

**Returns:** `Pack`

### Pack

```java
return new Pack()
```

**Returns:** `return new`

### hidden

```java
public Pack hidden()
```

**Returns:** `Pack`

### equals

```java
public boolean equals(Object p_10448_)
```

**Parameters:**

- `p_10448_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### Metadata

```java
public static record Metadata(Component description, PackCompatibility compatibility, FeatureFlagSet requestedFeatures, List<String> overlays, boolean isHidden)
```

**Parameters:**

- `description` (`Component`)
- `compatibility` (`PackCompatibility`)
- `requestedFeatures` (`FeatureFlagSet`)
- `overlays` (`List<String>`)
- `isHidden` (`boolean`)

**Returns:** `public static record`

### Metadata

```java
public public Metadata(Component description, PackCompatibility compatibility, FeatureFlagSet requestedFeatures, List<String> overlays)
```

**Parameters:**

- `description` (`Component`)
- `compatibility` (`PackCompatibility`)
- `requestedFeatures` (`FeatureFlagSet`)
- `overlays` (`List<String>`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### insert

```java
<T> public <T> int insert(List<T> p_10471_, T p_10472_, Function<T, PackSelectionConfig> p_10473_, boolean p_10474_)
```

**Parameters:**

- `p_10471_` (`List<T>`)
- `p_10472_` (`T`)
- `p_10473_` (`Function<T, PackSelectionConfig>`)
- `p_10474_` (`boolean`)

**Returns:** `public <T> int`

### opposite

```java
public Pack.Position opposite()
```

**Returns:** `public Pack.Position`

### openPrimary

```java
PackResources openPrimary(PackLocationInfo p_326301_)
```

**Parameters:**

- `p_326301_` (`PackLocationInfo`)

**Returns:** `PackResources`

### openFull

```java
PackResources openFull(PackLocationInfo p_326241_, Pack.Metadata p_325959_)
```

**Parameters:**

- `p_326241_` (`PackLocationInfo`)
- `p_325959_` (`Pack.Metadata`)

**Returns:** `PackResources`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Metadata` | record |  |
| `Position` | enum |  |
| `ResourcesSupplier` | interface |  |
