# SkyLightSectionStorage

**Package:** `net.minecraft.world.level.lighting`
**Type:** class
**Extends:** `LayerLightSectionStorage<SkyLightSectionStorage.SkyDataLayerStorageMap>`

## Methods

### SkyLightSectionStorage

```java
protected SkyLightSectionStorage(LightChunkGetter p_75868_)
```

**Parameters:**

- `p_75868_` (`LightChunkGetter`)

**Returns:** `protected`

### getLightValue

```java
protected int getLightValue(long p_75880_)
```

**Parameters:**

- `p_75880_` (`long`)

**Returns:** `int`

### getLightValue

```java
protected int getLightValue(long p_164458_, boolean p_164459_)
```

**Parameters:**

- `p_164458_` (`long`)
- `p_164459_` (`boolean`)

**Returns:** `protected int`

### onNodeAdded

```java
protected void onNodeAdded(long p_75885_)
```

**Parameters:**

- `p_75885_` (`long`)

### onNodeRemoved

```java
protected void onNodeRemoved(long p_75887_)
```

**Parameters:**

- `p_75887_` (`long`)

### createDataLayer

```java
protected DataLayer createDataLayer(long p_75883_)
```

**Parameters:**

- `p_75883_` (`long`)

**Returns:** `DataLayer`

### repeatFirstLayer

```java
return repeatFirstLayer()
```

**Returns:** `return`

### repeatFirstLayer

```java
private static DataLayer repeatFirstLayer(DataLayer p_182513_)
```

**Parameters:**

- `p_182513_` (`DataLayer`)

**Returns:** `private static DataLayer`

### DataLayer

```java
return new DataLayer()
```

**Returns:** `return new`

### hasLightDataAtOrBelow

```java
protected boolean hasLightDataAtOrBelow(int p_278270_)
```

**Parameters:**

- `p_278270_` (`int`)

**Returns:** `protected boolean`

### isAboveData

```java
protected boolean isAboveData(long p_75891_)
```

**Parameters:**

- `p_75891_` (`long`)

**Returns:** `protected boolean`

### getTopSectionY

```java
protected int getTopSectionY(long p_285094_)
```

**Parameters:**

- `p_285094_` (`long`)

**Returns:** `protected int`

### getBottomSectionY

```java
protected int getBottomSectionY()
```

**Returns:** `protected int`

### SkyDataLayerStorageMap

```java
public SkyDataLayerStorageMap(Long2ObjectOpenHashMap<DataLayer> p_75903_, Long2IntOpenHashMap p_75904_, int p_75905_)
```

**Parameters:**

- `p_75903_` (`Long2ObjectOpenHashMap<DataLayer>`)
- `p_75904_` (`Long2IntOpenHashMap`)
- `p_75905_` (`int`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### copy

```java
public SkyLightSectionStorage.SkyDataLayerStorageMap copy()
```

**Returns:** `public SkyLightSectionStorage.SkyDataLayerStorageMap`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `SkyDataLayerStorageMap` | class |  |
