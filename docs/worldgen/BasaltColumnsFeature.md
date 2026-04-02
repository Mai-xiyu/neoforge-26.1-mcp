# BasaltColumnsFeature

**Package:** `net.minecraft.world.level.levelgen.feature`
**Type:** class
**Extends:** `Feature<ColumnFeatureConfiguration>`

## Methods

### BasaltColumnsFeature

```java
public BasaltColumnsFeature(Codec<ColumnFeatureConfiguration> p_65153_)
```

**Parameters:**

- `p_65153_` (`Codec<ColumnFeatureConfiguration>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### place

```java
public boolean place(FeaturePlaceContext<ColumnFeatureConfiguration> p_159444_)
```

**Parameters:**

- `p_159444_` (`FeaturePlaceContext<ColumnFeatureConfiguration>`)

**Returns:** `boolean`

### placeColumn

```java
private boolean placeColumn(LevelAccessor p_65168_, int p_65169_, BlockPos p_65170_, int p_65171_, int p_65172_)
```

**Parameters:**

- `p_65168_` (`LevelAccessor`)
- `p_65169_` (`int`)
- `p_65170_` (`BlockPos`)
- `p_65171_` (`int`)
- `p_65172_` (`int`)

**Returns:** `private boolean`

### canPlaceAt

```java
private static boolean canPlaceAt(LevelAccessor p_65155_, int p_65156_, BlockPos.MutableBlockPos p_65157_)
```

**Parameters:**

- `p_65155_` (`LevelAccessor`)
- `p_65156_` (`int`)
- `p_65157_` (`BlockPos.MutableBlockPos`)

**Returns:** `private static boolean`

### isAirOrLavaOcean

```java
private static boolean isAirOrLavaOcean(LevelAccessor p_65164_, int p_65165_, BlockPos p_65166_)
```

**Parameters:**

- `p_65164_` (`LevelAccessor`)
- `p_65165_` (`int`)
- `p_65166_` (`BlockPos`)

**Returns:** `private static boolean`
