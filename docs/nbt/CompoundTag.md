# CompoundTag

**Package:** `net.minecraft.nbt`
**Type:** class
**Implements:** `Tag`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<CompoundTag>` |  |
| `TYPE` | `TagType<CompoundTag>` |  |

## Methods

### load

```java
public CompoundTag load(DataInput p_128485_, NbtAccounter p_128487_)
```

**Parameters:**

- `p_128485_` (`DataInput`)
- `p_128487_` (`NbtAccounter`)

**Returns:** `public CompoundTag`

### readNamedTagType

```java
private static byte readNamedTagType(DataInput p_302338_, NbtAccounter p_302362_)
```

**Parameters:**

- `p_302338_` (`DataInput`)
- `p_302362_` (`NbtAccounter`)

**Returns:** `private static byte`

### loadCompound

```java
private static CompoundTag loadCompound(DataInput p_302338_, NbtAccounter p_302362_)
```

**Parameters:**

- `p_302338_` (`DataInput`)
- `p_302362_` (`NbtAccounter`)

**Returns:** `private static CompoundTag`

### CompoundTag

```java
return new CompoundTag()
```

**Returns:** `return new`

### parse

```java
public StreamTagVisitor.ValueResult parse(DataInput p_197446_, StreamTagVisitor p_197447_, NbtAccounter p_302322_)
```

**Parameters:**

- `p_197446_` (`DataInput`)
- `p_197447_` (`StreamTagVisitor`)
- `p_302322_` (`NbtAccounter`)

**Returns:** `StreamTagVisitor.ValueResult`

### parseCompound

```java
private static StreamTagVisitor.ValueResult parseCompound(DataInput p_302325_, StreamTagVisitor p_302352_, NbtAccounter p_302355_)
```

**Parameters:**

- `p_302325_` (`DataInput`)
- `p_302352_` (`StreamTagVisitor`)
- `p_302355_` (`NbtAccounter`)

**Returns:** `private static StreamTagVisitor.ValueResult`

### readString

```java
private static String readString(DataInput p_302484_, NbtAccounter p_302494_)
```

**Parameters:**

- `p_302484_` (`DataInput`)
- `p_302494_` (`NbtAccounter`)

**Returns:** `private static String`

### skip

```java
public void skip(DataInput p_197444_, NbtAccounter p_302358_)
```

**Parameters:**

- `p_197444_` (`DataInput`)
- `p_302358_` (`NbtAccounter`)

### getName

```java
public String getName()
```

**Returns:** `String`

### getPrettyName

```java
public String getPrettyName()
```

**Returns:** `String`

### CompoundTag

```java
protected CompoundTag(Map<String, Tag> p_128333_)
```

**Parameters:**

- `p_128333_` (`Map<String, Tag>`)

**Returns:** `protected`

### CompoundTag

```java
public CompoundTag()
```

**Returns:** `public`

### write

```java
public void write(DataOutput p_128341_)
```

**Parameters:**

- `p_128341_` (`DataOutput`)

### writeNamedTag

```java
 writeNamedTag()
```

**Returns:** ``

### sizeInBytes

```java
public int sizeInBytes()
```

**Returns:** `int`

### getAllKeys

```java
public Set<String> getAllKeys()
```

**Returns:** `public Set<String>`

### getId

```java
public byte getId()
```

**Returns:** `byte`

### getType

```java
public TagType<CompoundTag> getType()
```

**Returns:** `TagType<CompoundTag>`

### size

```java
public int size()
```

**Returns:** `public int`

### put

```java
public Tag put(String p_128366_, Tag p_128367_)
```

**Parameters:**

- `p_128366_` (`String`)
- `p_128367_` (`Tag`)

**Returns:** `Tag`

### IllegalArgumentException

```java
throw new IllegalArgumentException("Invalid null NBT value with key " + p_128366_)
```

**Parameters:**

- `p_128366_` (`"Invalid null NBT value with key " +`)

**Returns:** `throw new`

### putByte

```java
public void putByte(String p_128345_, byte p_128346_)
```

**Parameters:**

- `p_128345_` (`String`)
- `p_128346_` (`byte`)

**Returns:** `public void`

### putShort

```java
public void putShort(String p_128377_, short p_128378_)
```

**Parameters:**

- `p_128377_` (`String`)
- `p_128378_` (`short`)

**Returns:** `public void`

### putInt

```java
public void putInt(String p_128406_, int p_128407_)
```

**Parameters:**

- `p_128406_` (`String`)
- `p_128407_` (`int`)

**Returns:** `public void`

### putLong

```java
public void putLong(String p_128357_, long p_128358_)
```

**Parameters:**

- `p_128357_` (`String`)
- `p_128358_` (`long`)

**Returns:** `public void`

### putUUID

```java
public void putUUID(String p_128363_, UUID p_128364_)
```

**Parameters:**

- `p_128363_` (`String`)
- `p_128364_` (`UUID`)

**Returns:** `public void`

### getUUID

```java
public UUID getUUID(String p_128343_)
```

**Parameters:**

- `p_128343_` (`String`)

**Returns:** `public UUID`

### hasUUID

```java
public boolean hasUUID(String p_128404_)
```

**Parameters:**

- `p_128404_` (`String`)

**Returns:** `public boolean`

### putFloat

```java
public void putFloat(String p_128351_, float p_128352_)
```

**Parameters:**

- `p_128351_` (`String`)
- `p_128352_` (`float`)

**Returns:** `public void`

### putDouble

```java
public void putDouble(String p_128348_, double p_128349_)
```

**Parameters:**

- `p_128348_` (`String`)
- `p_128349_` (`double`)

**Returns:** `public void`

### putString

```java
public void putString(String p_128360_, String p_128361_)
```

**Parameters:**

- `p_128360_` (`String`)
- `p_128361_` (`String`)

**Returns:** `public void`

### putByteArray

```java
public void putByteArray(String p_128383_, byte[] p_128384_)
```

**Parameters:**

- `p_128383_` (`String`)
- `p_128384_` (`byte[]`)

**Returns:** `public void`

### putByteArray

```java
public void putByteArray(String p_177854_, List<Byte> p_177855_)
```

**Parameters:**

- `p_177854_` (`String`)
- `p_177855_` (`List<Byte>`)

**Returns:** `public void`

### putIntArray

```java
public void putIntArray(String p_128386_, int[] p_128387_)
```

**Parameters:**

- `p_128386_` (`String`)
- `p_128387_` (`int[]`)

**Returns:** `public void`

### putIntArray

```java
public void putIntArray(String p_128409_, List<Integer> p_128410_)
```

**Parameters:**

- `p_128409_` (`String`)
- `p_128410_` (`List<Integer>`)

**Returns:** `public void`

### putLongArray

```java
public void putLongArray(String p_128389_, long[] p_128390_)
```

**Parameters:**

- `p_128389_` (`String`)
- `p_128390_` (`long[]`)

**Returns:** `public void`

### putLongArray

```java
public void putLongArray(String p_128429_, List<Long> p_128430_)
```

**Parameters:**

- `p_128429_` (`String`)
- `p_128430_` (`List<Long>`)

**Returns:** `public void`

### putBoolean

```java
public void putBoolean(String p_128380_, boolean p_128381_)
```

**Parameters:**

- `p_128380_` (`String`)
- `p_128381_` (`boolean`)

**Returns:** `public void`

### get

```java
public Tag get(String p_128424_)
```

**Parameters:**

- `p_128424_` (`String`)

**Returns:** `Tag`

### getTagType

```java
public byte getTagType(String p_128436_)
```

**Parameters:**

- `p_128436_` (`String`)

**Returns:** `public byte`

### contains

```java
public boolean contains(String p_128442_)
```

**Parameters:**

- `p_128442_` (`String`)

**Returns:** `public boolean`

### contains

```java
public boolean contains(String p_128426_, int p_128427_)
```

**Parameters:**

- `p_128426_` (`String`)
- `p_128427_` (`int`)

**Returns:** `public boolean`

### getByte

```java
public byte getByte(String p_128446_)
```

**Parameters:**

- `p_128446_` (`String`)

**Returns:** `public byte`

### getShort

```java
public short getShort(String p_128449_)
```

**Parameters:**

- `p_128449_` (`String`)

**Returns:** `public short`

### getInt

```java
public int getInt(String p_128452_)
```

**Parameters:**

- `p_128452_` (`String`)

**Returns:** `public int`

### getLong

```java
public long getLong(String p_128455_)
```

**Parameters:**

- `p_128455_` (`String`)

**Returns:** `public long`

### getFloat

```java
public float getFloat(String p_128458_)
```

**Parameters:**

- `p_128458_` (`String`)

**Returns:** `public float`

### getDouble

```java
public double getDouble(String p_128460_)
```

**Parameters:**

- `p_128460_` (`String`)

**Returns:** `public double`

### getString

```java
public String getString(String p_128462_)
```

**Parameters:**

- `p_128462_` (`String`)

**Returns:** `public String`

### getByteArray

```java
public byte[] getByteArray(String p_128464_)
```

**Parameters:**

- `p_128464_` (`String`)

**Returns:** `public byte[]`

### getIntArray

```java
public int[] getIntArray(String p_128466_)
```

**Parameters:**

- `p_128466_` (`String`)

**Returns:** `public int[]`

### getLongArray

```java
public long[] getLongArray(String p_128468_)
```

**Parameters:**

- `p_128468_` (`String`)

**Returns:** `public long[]`

### getCompound

```java
public CompoundTag getCompound(String p_128470_)
```

**Parameters:**

- `p_128470_` (`String`)

**Returns:** `public CompoundTag`

### CompoundTag

```java
return new CompoundTag()
```

**Returns:** `return new`

### getList

```java
public ListTag getList(String p_128438_, int p_128439_)
```

**Parameters:**

- `p_128438_` (`String`)
- `p_128439_` (`int`)

**Returns:** `public ListTag`

### ListTag

```java
return new ListTag()
```

**Returns:** `return new`

### ListTag

```java
return new ListTag()
```

**Returns:** `return new`

### getBoolean

```java
public boolean getBoolean(String p_128472_)
```

**Parameters:**

- `p_128472_` (`String`)

**Returns:** `public boolean`

### remove

```java
public void remove(String p_128474_)
```

**Parameters:**

- `p_128474_` (`String`)

**Returns:** `public void`

### toString

```java
public String toString()
```

**Returns:** `String`

### isEmpty

```java
public boolean isEmpty()
```

**Returns:** `public boolean`

### createReport

```java
private CrashReport createReport(String p_128373_, TagType<?> p_128374_, ClassCastException p_128375_)
```

**Parameters:**

- `p_128373_` (`String`)
- `p_128374_` (`TagType<?>`)
- `p_128375_` (`ClassCastException`)

**Returns:** `private CrashReport`

### shallowCopy

```java
protected CompoundTag shallowCopy()
```

**Returns:** `protected CompoundTag`

### copy

```java
public CompoundTag copy()
```

**Returns:** `public CompoundTag`

### CompoundTag

```java
return new CompoundTag()
```

**Returns:** `return new`

### equals

```java
public boolean equals(Object p_128444_)
```

**Parameters:**

- `p_128444_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### writeNamedTag

```java
private static void writeNamedTag(String p_128369_, Tag p_128370_, DataOutput p_128371_)
```

**Parameters:**

- `p_128369_` (`String`)
- `p_128370_` (`Tag`)
- `p_128371_` (`DataOutput`)

**Returns:** `private static void`

### readNamedTagData

```java
static Tag readNamedTagData(TagType<?> p_128414_, String p_128415_, DataInput p_128416_, NbtAccounter p_128418_)
```

**Parameters:**

- `p_128414_` (`TagType<?>`)
- `p_128415_` (`String`)
- `p_128416_` (`DataInput`)
- `p_128418_` (`NbtAccounter`)

**Returns:** `static Tag`

### ReportedNbtException

```java
throw new ReportedNbtException()
```

**Returns:** `throw new`

### merge

```java
public CompoundTag merge(CompoundTag p_128392_)
```

**Parameters:**

- `p_128392_` (`CompoundTag`)

**Returns:** `public CompoundTag`

### accept

```java
public void accept(TagVisitor p_177857_)
```

**Parameters:**

- `p_177857_` (`TagVisitor`)

### entrySet

```java
protected Set<Entry<String, Tag>> entrySet()
```

**Returns:** `protected Set<Entry<String, Tag>>`

### accept

```java
public StreamTagVisitor.ValueResult accept(StreamTagVisitor p_197442_)
```

**Parameters:**

- `p_197442_` (`StreamTagVisitor`)

**Returns:** `StreamTagVisitor.ValueResult`
