# NbtOps

**Package:** `net.minecraft.nbt`
**Type:** class
**Implements:** `DynamicOps<Tag>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `INSTANCE` | `NbtOps` |  |

## Methods

### NbtOps

```java
protected NbtOps()
```

**Returns:** `protected`

### empty

```java
public Tag empty()
```

**Returns:** `public Tag`

### convertTo

```java
<U> public <U> U convertTo(DynamicOps<U> p_128980_, Tag p_128981_)
```

**Parameters:**

- `p_128980_` (`DynamicOps<U>`)
- `p_128981_` (`Tag`)

**Returns:** `public <U> U`

### IllegalStateException

```java
> throw new IllegalStateException("Unknown tag type: " + p_128981_)
```

**Parameters:**

- `p_128981_` (`"Unknown tag type: " +`)

**Returns:** `> throw new`

### getNumberValue

```java
public DataResult<Number> getNumberValue(Tag p_129030_)
```

**Parameters:**

- `p_129030_` (`Tag`)

**Returns:** `public DataResult<Number>`

### createNumeric

```java
public Tag createNumeric(Number p_128983_)
```

**Parameters:**

- `p_128983_` (`Number`)

**Returns:** `public Tag`

### createByte

```java
public Tag createByte(byte p_128963_)
```

**Parameters:**

- `p_128963_` (`byte`)

**Returns:** `public Tag`

### createShort

```java
public Tag createShort(short p_129048_)
```

**Parameters:**

- `p_129048_` (`short`)

**Returns:** `public Tag`

### createInt

```java
public Tag createInt(int p_128976_)
```

**Parameters:**

- `p_128976_` (`int`)

**Returns:** `public Tag`

### createLong

```java
public Tag createLong(long p_128978_)
```

**Parameters:**

- `p_128978_` (`long`)

**Returns:** `public Tag`

### createFloat

```java
public Tag createFloat(float p_128974_)
```

**Parameters:**

- `p_128974_` (`float`)

**Returns:** `public Tag`

### createDouble

```java
public Tag createDouble(double p_128972_)
```

**Parameters:**

- `p_128972_` (`double`)

**Returns:** `public Tag`

### createBoolean

```java
public Tag createBoolean(boolean p_129050_)
```

**Parameters:**

- `p_129050_` (`boolean`)

**Returns:** `public Tag`

### getStringValue

```java
public DataResult<String> getStringValue(Tag p_129061_)
```

**Parameters:**

- `p_129061_` (`Tag`)

**Returns:** `public DataResult<String>`

### createString

```java
public Tag createString(String p_128985_)
```

**Parameters:**

- `p_128985_` (`String`)

**Returns:** `public Tag`

### mergeToList

```java
public DataResult<Tag> mergeToList(Tag p_129041_, Tag p_129042_)
```

**Parameters:**

- `p_129041_` (`Tag`)
- `p_129042_` (`Tag`)

**Returns:** `public DataResult<Tag>`

### mergeToList

```java
public DataResult<Tag> mergeToList(Tag p_129038_, List<Tag> p_129039_)
```

**Parameters:**

- `p_129038_` (`Tag`)
- `p_129039_` (`List<Tag>`)

**Returns:** `public DataResult<Tag>`

### mergeToMap

```java
public DataResult<Tag> mergeToMap(Tag p_129044_, Tag p_129045_, Tag p_129046_)
```

**Parameters:**

- `p_129044_` (`Tag`)
- `p_129045_` (`Tag`)
- `p_129046_` (`Tag`)

**Returns:** `public DataResult<Tag>`

### mergeToMap

```java
public DataResult<Tag> mergeToMap(Tag p_129032_, MapLike<Tag> p_129033_)
```

**Parameters:**

- `p_129032_` (`Tag`)
- `p_129033_` (`MapLike<Tag>`)

**Returns:** `public DataResult<Tag>`

### mergeToMap

```java
public DataResult<Tag> mergeToMap(Tag p_341945_, Map<Tag, Tag> p_341920_)
```

**Parameters:**

- `p_341945_` (`Tag`)
- `p_341920_` (`Map<Tag, Tag>`)

**Returns:** `public DataResult<Tag>`

### getMapValues

```java
public DataResult<Stream<Pair<Tag, Tag>>> getMapValues(Tag p_129070_)
```

**Parameters:**

- `p_129070_` (`Tag`)

**Returns:** `public DataResult<Stream<Pair<Tag, Tag>>>`

### getMapEntries

```java
public DataResult<Consumer<BiConsumer<Tag, Tag>>> getMapEntries(Tag p_129103_)
```

**Parameters:**

- `p_129103_` (`Tag`)

**Returns:** `public DataResult<Consumer<BiConsumer<Tag, Tag>>>`

### getMap

```java
public DataResult<MapLike<Tag>> getMap(Tag p_129105_)
```

**Parameters:**

- `p_129105_` (`Tag`)

**Returns:** `public DataResult<MapLike<Tag>>`

### get

```java
public Tag get(Tag p_129174_)
```

**Parameters:**

- `p_129174_` (`Tag`)

**Returns:** `Tag`

### get

```java
public Tag get(String p_129169_)
```

**Parameters:**

- `p_129169_` (`String`)

**Returns:** `Tag`

### entries

```java
public Stream<Pair<Tag, Tag>> entries()
```

**Returns:** `Stream<Pair<Tag, Tag>>`

### toString

```java
public String toString()
```

**Returns:** `String`

### createMap

```java
public Tag createMap(Stream<Pair<Tag, Tag>> p_129004_)
```

**Parameters:**

- `p_129004_` (`Stream<Pair<Tag, Tag>>`)

**Returns:** `public Tag`

### tryUnwrap

```java
private static Tag tryUnwrap(CompoundTag p_251041_)
```

**Parameters:**

- `p_251041_` (`CompoundTag`)

**Returns:** `private static Tag`

### getStream

```java
public DataResult<Stream<Tag>> getStream(Tag p_129108_)
```

**Parameters:**

- `p_129108_` (`Tag`)

**Returns:** `public DataResult<Stream<Tag>>`

### getList

```java
public DataResult<Consumer<Consumer<Tag>>> getList(Tag p_129110_)
```

**Parameters:**

- `p_129110_` (`Tag`)

**Returns:** `public DataResult<Consumer<Consumer<Tag>>>`

### getByteBuffer

```java
public DataResult<ByteBuffer> getByteBuffer(Tag p_129132_)
```

**Parameters:**

- `p_129132_` (`Tag`)

**Returns:** `public DataResult<ByteBuffer>`

### createByteList

```java
public Tag createByteList(ByteBuffer p_128990_)
```

**Parameters:**

- `p_128990_` (`ByteBuffer`)

**Returns:** `public Tag`

### ByteArrayTag

```java
return new ByteArrayTag()
```

**Returns:** `return new`

### getIntStream

```java
public DataResult<IntStream> getIntStream(Tag p_129134_)
```

**Parameters:**

- `p_129134_` (`Tag`)

**Returns:** `public DataResult<IntStream>`

### createIntList

```java
public Tag createIntList(IntStream p_129000_)
```

**Parameters:**

- `p_129000_` (`IntStream`)

**Returns:** `public Tag`

### getLongStream

```java
public DataResult<LongStream> getLongStream(Tag p_129136_)
```

**Parameters:**

- `p_129136_` (`Tag`)

**Returns:** `public DataResult<LongStream>`

### createLongList

```java
public Tag createLongList(LongStream p_129002_)
```

**Parameters:**

- `p_129002_` (`LongStream`)

**Returns:** `public Tag`

### createList

```java
public Tag createList(Stream<Tag> p_129052_)
```

**Parameters:**

- `p_129052_` (`Stream<Tag>`)

**Returns:** `public Tag`

### remove

```java
public Tag remove(Tag p_129035_, String p_129036_)
```

**Parameters:**

- `p_129035_` (`Tag`)
- `p_129036_` (`String`)

**Returns:** `public Tag`

### toString

```java
public String toString()
```

**Returns:** `String`

### mapBuilder

```java
public RecordBuilder<Tag> mapBuilder()
```

**Returns:** `RecordBuilder<Tag>`

### createCollector

```java
private static Optional<NbtOps.ListCollector> createCollector(Tag p_249503_)
```

**Parameters:**

- `p_249503_` (`Tag`)

**Returns:** `private static Optional<NbtOps.ListCollector>`

### ByteListCollector

```java
public ByteListCollector(byte p_249905_)
```

**Parameters:**

- `p_249905_` (`byte`)

**Returns:** `public`

### ByteListCollector

```java
public ByteListCollector(byte[] p_250457_)
```

**Parameters:**

- `p_250457_` (`byte[]`)

**Returns:** `public`

### accept

```java
public NbtOps.ListCollector accept(Tag p_250723_)
```

**Parameters:**

- `p_250723_` (`Tag`)

**Returns:** `NbtOps.ListCollector`

### result

```java
public Tag result()
```

**Returns:** `Tag`

### HeterogenousListCollector

```java
public HeterogenousListCollector()
```

**Returns:** `public`

### HeterogenousListCollector

```java
public HeterogenousListCollector(Collection<Tag> p_249606_)
```

**Parameters:**

- `p_249606_` (`Collection<Tag>`)

**Returns:** `public`

### HeterogenousListCollector

```java
public HeterogenousListCollector(IntArrayList p_250270_)
```

**Parameters:**

- `p_250270_` (`IntArrayList`)

**Returns:** `public`

### HeterogenousListCollector

```java
public HeterogenousListCollector(ByteArrayList p_248575_)
```

**Parameters:**

- `p_248575_` (`ByteArrayList`)

**Returns:** `public`

### HeterogenousListCollector

```java
public HeterogenousListCollector(LongArrayList p_249410_)
```

**Parameters:**

- `p_249410_` (`LongArrayList`)

**Returns:** `public`

### isWrapper

```java
private static boolean isWrapper(CompoundTag p_252073_)
```

**Parameters:**

- `p_252073_` (`CompoundTag`)

**Returns:** `private static boolean`

### wrapIfNeeded

```java
private static Tag wrapIfNeeded(Tag p_252042_)
```

**Parameters:**

- `p_252042_` (`Tag`)

**Returns:** `private static Tag`

### wrapElement

```java
return wrapElement()
```

**Returns:** `return`

### wrapElement

```java
private static CompoundTag wrapElement(Tag p_251263_)
```

**Parameters:**

- `p_251263_` (`Tag`)

**Returns:** `private static CompoundTag`

### accept

```java
public NbtOps.ListCollector accept(Tag p_249045_)
```

**Parameters:**

- `p_249045_` (`Tag`)

**Returns:** `NbtOps.ListCollector`

### result

```java
public Tag result()
```

**Returns:** `Tag`

### HomogenousListCollector

```java
 HomogenousListCollector(Tag p_249247_)
```

**Parameters:**

- `p_249247_` (`Tag`)

**Returns:** ``

### HomogenousListCollector

```java
 HomogenousListCollector(ListTag p_249889_)
```

**Parameters:**

- `p_249889_` (`ListTag`)

**Returns:** ``

### accept

```java
public NbtOps.ListCollector accept(Tag p_248727_)
```

**Parameters:**

- `p_248727_` (`Tag`)

**Returns:** `NbtOps.ListCollector`

### result

```java
public Tag result()
```

**Returns:** `Tag`

### InitialListCollector

```java
private InitialListCollector()
```

**Returns:** `private`

### accept

```java
public NbtOps.ListCollector accept(Tag p_251635_)
```

**Parameters:**

- `p_251635_` (`Tag`)

**Returns:** `NbtOps.ListCollector`

### result

```java
public Tag result()
```

**Returns:** `Tag`

### ListTag

```java
return new ListTag()
```

**Returns:** `return new`

### IntListCollector

```java
public IntListCollector(int p_250274_)
```

**Parameters:**

- `p_250274_` (`int`)

**Returns:** `public`

### IntListCollector

```java
public IntListCollector(int[] p_249489_)
```

**Parameters:**

- `p_249489_` (`int[]`)

**Returns:** `public`

### accept

```java
public NbtOps.ListCollector accept(Tag p_251372_)
```

**Parameters:**

- `p_251372_` (`Tag`)

**Returns:** `NbtOps.ListCollector`

### result

```java
public Tag result()
```

**Returns:** `Tag`

### accept

```java
NbtOps.ListCollector accept(Tag p_249030_)
```

**Parameters:**

- `p_249030_` (`Tag`)

**Returns:** `NbtOps.ListCollector`

### acceptAll

```java
default NbtOps.ListCollector acceptAll(Iterable<Tag> p_249781_)
```

**Parameters:**

- `p_249781_` (`Iterable<Tag>`)

**Returns:** `default NbtOps.ListCollector`

### acceptAll

```java
default NbtOps.ListCollector acceptAll(Stream<Tag> p_249876_)
```

**Parameters:**

- `p_249876_` (`Stream<Tag>`)

**Returns:** `default NbtOps.ListCollector`

### result

```java
Tag result()
```

**Returns:** `Tag`

### LongListCollector

```java
public LongListCollector(long p_249842_)
```

**Parameters:**

- `p_249842_` (`long`)

**Returns:** `public`

### LongListCollector

```java
public LongListCollector(long[] p_251409_)
```

**Parameters:**

- `p_251409_` (`long[]`)

**Returns:** `public`

### accept

```java
public NbtOps.ListCollector accept(Tag p_252167_)
```

**Parameters:**

- `p_252167_` (`Tag`)

**Returns:** `NbtOps.ListCollector`

### result

```java
public Tag result()
```

**Returns:** `Tag`

### NbtRecordBuilder

```java
protected NbtRecordBuilder()
```

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### initBuilder

```java
protected CompoundTag initBuilder()
```

**Returns:** `protected CompoundTag`

### CompoundTag

```java
return new CompoundTag()
```

**Returns:** `return new`

### append

```java
protected CompoundTag append(String p_129186_, Tag p_129187_, CompoundTag p_129188_)
```

**Parameters:**

- `p_129186_` (`String`)
- `p_129187_` (`Tag`)
- `p_129188_` (`CompoundTag`)

**Returns:** `protected CompoundTag`

### build

```java
protected DataResult<Tag> build(CompoundTag p_129190_, Tag p_129191_)
```

**Parameters:**

- `p_129190_` (`CompoundTag`)
- `p_129191_` (`Tag`)

**Returns:** `protected DataResult<Tag>`
