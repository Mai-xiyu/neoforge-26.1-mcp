# PoiSection

**Package:** `net.minecraft.world.entity.ai.village.poi`
**Type:** class

## Methods

### codec

```java
public static Codec<PoiSection> codec(Runnable p_27296_)
```

**Parameters:**

- `p_27296_` (`Runnable`)

**Returns:** `public static Codec<PoiSection>`

### PoiSection

```java
public PoiSection(Runnable p_27267_)
```

**Parameters:**

- `p_27267_` (`Runnable`)

**Returns:** `public`

### PoiSection

```java
private PoiSection(Runnable p_27269_, boolean p_27270_, List<PoiRecord> p_27271_)
```

**Parameters:**

- `p_27269_` (`Runnable`)
- `p_27270_` (`boolean`)
- `p_27271_` (`List<PoiRecord>`)

**Returns:** `private`

### getRecords

```java
public Stream<PoiRecord> getRecords(Predicate<Holder<PoiType>> p_27305_, PoiManager.Occupancy p_27306_)
```

**Parameters:**

- `p_27305_` (`Predicate<Holder<PoiType>>`)
- `p_27306_` (`PoiManager.Occupancy`)

**Returns:** `public Stream<PoiRecord>`

### add

```java
public void add(BlockPos p_218022_, Holder<PoiType> p_218023_)
```

**Parameters:**

- `p_218022_` (`BlockPos`)
- `p_218023_` (`Holder<PoiType>`)

**Returns:** `public void`

### add

```java
private boolean add(PoiRecord p_27274_)
```

**Parameters:**

- `p_27274_` (`PoiRecord`)

**Returns:** `private boolean`

### remove

```java
public void remove(BlockPos p_27280_)
```

**Parameters:**

- `p_27280_` (`BlockPos`)

**Returns:** `public void`

### getFreeTickets

```java
public int getFreeTickets(BlockPos p_148683_)
```

**Parameters:**

- `p_148683_` (`BlockPos`)

**Returns:** `int`

### release

```java
public boolean release(BlockPos p_27318_)
```

**Parameters:**

- `p_27318_` (`BlockPos`)

**Returns:** `public boolean`

### exists

```java
public boolean exists(BlockPos p_27289_, Predicate<Holder<PoiType>> p_27290_)
```

**Parameters:**

- `p_27289_` (`BlockPos`)
- `p_27290_` (`Predicate<Holder<PoiType>>`)

**Returns:** `public boolean`

### getType

```java
public Optional<Holder<PoiType>> getType(BlockPos p_27320_)
```

**Parameters:**

- `p_27320_` (`BlockPos`)

**Returns:** `public Optional<Holder<PoiType>>`

### getPoiRecord

```java
private Optional<PoiRecord> getPoiRecord(BlockPos p_148685_)
```

**Parameters:**

- `p_148685_` (`BlockPos`)

**Returns:** `private Optional<PoiRecord>`

### refresh

```java
public void refresh(Consumer<BiConsumer<BlockPos, Holder<PoiType>>> p_27303_)
```

**Parameters:**

- `p_27303_` (`Consumer<BiConsumer<BlockPos, Holder<PoiType>>>`)

**Returns:** `public void`

### clear

```java
private void clear()
```

**Returns:** `private void`

### isValid

```java
boolean isValid()
```

**Returns:** `boolean`
