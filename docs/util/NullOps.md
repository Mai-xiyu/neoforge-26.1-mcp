# NullOps

**Package:** `net.minecraft.util`
**Type:** class
**Implements:** `DynamicOps<Unit>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `NullOps` |  |

## Methods

### NullOps

```java
private NullOps()
```

**Returns:** `private`

### convertTo

```java
<U> public <U> U convertTo(DynamicOps<U> p_341193_, Unit p_340817_)
```

**Parameters:**

- `p_341193_` (`DynamicOps<U>`)
- `p_340817_` (`Unit`)

**Returns:** `public <U> U`

### empty

```java
public Unit empty()
```

**Returns:** `public Unit`

### emptyMap

```java
public Unit emptyMap()
```

**Returns:** `public Unit`

### emptyList

```java
public Unit emptyList()
```

**Returns:** `public Unit`

### createNumeric

```java
public Unit createNumeric(Number p_341390_)
```

**Parameters:**

- `p_341390_` (`Number`)

**Returns:** `public Unit`

### createByte

```java
public Unit createByte(byte p_341017_)
```

**Parameters:**

- `p_341017_` (`byte`)

**Returns:** `public Unit`

### createShort

```java
public Unit createShort(short p_340945_)
```

**Parameters:**

- `p_340945_` (`short`)

**Returns:** `public Unit`

### createInt

```java
public Unit createInt(int p_341029_)
```

**Parameters:**

- `p_341029_` (`int`)

**Returns:** `public Unit`

### createLong

```java
public Unit createLong(long p_341019_)
```

**Parameters:**

- `p_341019_` (`long`)

**Returns:** `public Unit`

### createFloat

```java
public Unit createFloat(float p_341123_)
```

**Parameters:**

- `p_341123_` (`float`)

**Returns:** `public Unit`

### createDouble

```java
public Unit createDouble(double p_341242_)
```

**Parameters:**

- `p_341242_` (`double`)

**Returns:** `public Unit`

### createBoolean

```java
public Unit createBoolean(boolean p_341283_)
```

**Parameters:**

- `p_341283_` (`boolean`)

**Returns:** `public Unit`

### createString

```java
public Unit createString(String p_341226_)
```

**Parameters:**

- `p_341226_` (`String`)

**Returns:** `public Unit`

### getNumberValue

```java
public DataResult<Number> getNumberValue(Unit p_340886_)
```

**Parameters:**

- `p_340886_` (`Unit`)

**Returns:** `public DataResult<Number>`

### getBooleanValue

```java
public DataResult<Boolean> getBooleanValue(Unit p_341106_)
```

**Parameters:**

- `p_341106_` (`Unit`)

**Returns:** `public DataResult<Boolean>`

### getStringValue

```java
public DataResult<String> getStringValue(Unit p_341344_)
```

**Parameters:**

- `p_341344_` (`Unit`)

**Returns:** `public DataResult<String>`

### mergeToList

```java
public DataResult<Unit> mergeToList(Unit p_340991_, Unit p_341154_)
```

**Parameters:**

- `p_340991_` (`Unit`)
- `p_341154_` (`Unit`)

**Returns:** `public DataResult<Unit>`

### mergeToList

```java
public DataResult<Unit> mergeToList(Unit p_340869_, List<Unit> p_340960_)
```

**Parameters:**

- `p_340869_` (`Unit`)
- `p_340960_` (`List<Unit>`)

**Returns:** `public DataResult<Unit>`

### mergeToMap

```java
public DataResult<Unit> mergeToMap(Unit p_340850_, Unit p_341356_, Unit p_341172_)
```

**Parameters:**

- `p_340850_` (`Unit`)
- `p_341356_` (`Unit`)
- `p_341172_` (`Unit`)

**Returns:** `public DataResult<Unit>`

### mergeToMap

```java
public DataResult<Unit> mergeToMap(Unit p_340821_, Map<Unit, Unit> p_341065_)
```

**Parameters:**

- `p_340821_` (`Unit`)
- `p_341065_` (`Map<Unit, Unit>`)

**Returns:** `public DataResult<Unit>`

### mergeToMap

```java
public DataResult<Unit> mergeToMap(Unit p_340862_, MapLike<Unit> p_341115_)
```

**Parameters:**

- `p_340862_` (`Unit`)
- `p_341115_` (`MapLike<Unit>`)

**Returns:** `public DataResult<Unit>`

### getMapValues

```java
public DataResult<Stream<Pair<Unit, Unit>>> getMapValues(Unit p_341031_)
```

**Parameters:**

- `p_341031_` (`Unit`)

**Returns:** `public DataResult<Stream<Pair<Unit, Unit>>>`

### getMapEntries

```java
public DataResult<Consumer<BiConsumer<Unit, Unit>>> getMapEntries(Unit p_340815_)
```

**Parameters:**

- `p_340815_` (`Unit`)

**Returns:** `public DataResult<Consumer<BiConsumer<Unit, Unit>>>`

### getMap

```java
public DataResult<MapLike<Unit>> getMap(Unit p_341149_)
```

**Parameters:**

- `p_341149_` (`Unit`)

**Returns:** `public DataResult<MapLike<Unit>>`

### getStream

```java
public DataResult<Stream<Unit>> getStream(Unit p_340835_)
```

**Parameters:**

- `p_340835_` (`Unit`)

**Returns:** `public DataResult<Stream<Unit>>`

### getList

```java
public DataResult<Consumer<Consumer<Unit>>> getList(Unit p_340931_)
```

**Parameters:**

- `p_340931_` (`Unit`)

**Returns:** `public DataResult<Consumer<Consumer<Unit>>>`

### getByteBuffer

```java
public DataResult<ByteBuffer> getByteBuffer(Unit p_341064_)
```

**Parameters:**

- `p_341064_` (`Unit`)

**Returns:** `public DataResult<ByteBuffer>`

### getIntStream

```java
public DataResult<IntStream> getIntStream(Unit p_341012_)
```

**Parameters:**

- `p_341012_` (`Unit`)

**Returns:** `public DataResult<IntStream>`

### getLongStream

```java
public DataResult<LongStream> getLongStream(Unit p_341130_)
```

**Parameters:**

- `p_341130_` (`Unit`)

**Returns:** `public DataResult<LongStream>`

### createMap

```java
public Unit createMap(Stream<Pair<Unit, Unit>> p_341095_)
```

**Parameters:**

- `p_341095_` (`Stream<Pair<Unit, Unit>>`)

**Returns:** `public Unit`

### createMap

```java
public Unit createMap(Map<Unit, Unit> p_341189_)
```

**Parameters:**

- `p_341189_` (`Map<Unit, Unit>`)

**Returns:** `public Unit`

### createList

```java
public Unit createList(Stream<Unit> p_341162_)
```

**Parameters:**

- `p_341162_` (`Stream<Unit>`)

**Returns:** `public Unit`

### createByteList

```java
public Unit createByteList(ByteBuffer p_340905_)
```

**Parameters:**

- `p_340905_` (`ByteBuffer`)

**Returns:** `public Unit`

### createIntList

```java
public Unit createIntList(IntStream p_341326_)
```

**Parameters:**

- `p_341326_` (`IntStream`)

**Returns:** `public Unit`

### createLongList

```java
public Unit createLongList(LongStream p_341025_)
```

**Parameters:**

- `p_341025_` (`LongStream`)

**Returns:** `public Unit`

### remove

```java
public Unit remove(Unit p_341250_, String p_340980_)
```

**Parameters:**

- `p_341250_` (`Unit`)
- `p_340980_` (`String`)

**Returns:** `public Unit`

### mapBuilder

```java
public RecordBuilder<Unit> mapBuilder()
```

**Returns:** `RecordBuilder<Unit>`

### toString

```java
public String toString()
```

**Returns:** `String`

### NullMapBuilder

```java
public NullMapBuilder(DynamicOps<Unit> p_340884_)
```

**Parameters:**

- `p_340884_` (`DynamicOps<Unit>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### initBuilder

```java
protected Unit initBuilder()
```

**Returns:** `protected Unit`

### append

```java
protected Unit append(Unit p_341121_, Unit p_341327_, Unit p_341036_)
```

**Parameters:**

- `p_341121_` (`Unit`)
- `p_341327_` (`Unit`)
- `p_341036_` (`Unit`)

**Returns:** `protected Unit`

### build

```java
protected DataResult<Unit> build(Unit p_341068_, Unit p_341207_)
```

**Parameters:**

- `p_341068_` (`Unit`)
- `p_341207_` (`Unit`)

**Returns:** `protected DataResult<Unit>`
