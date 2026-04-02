# SectionPos

**Package:** `net.minecraft.core`
**Type:** class
**Extends:** `Vec3i`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `SECTION_BITS` | `int` |  |
| `SECTION_SIZE` | `int` |  |
| `SECTION_MASK` | `int` |  |
| `SECTION_HALF_SIZE` | `int` |  |
| `SECTION_MAX_INDEX` | `int` |  |

## Methods

### SectionPos

```java
 SectionPos(int p_123162_, int p_123163_, int p_123164_)
```

**Parameters:**

- `p_123162_` (`int`)
- `p_123163_` (`int`)
- `p_123164_` (`int`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### of

```java
public static SectionPos of(int p_123174_, int p_123175_, int p_123176_)
```

**Parameters:**

- `p_123174_` (`int`)
- `p_123175_` (`int`)
- `p_123176_` (`int`)

**Returns:** `public static SectionPos`

### SectionPos

```java
return new SectionPos()
```

**Returns:** `return new`

### of

```java
public static SectionPos of(BlockPos p_123200_)
```

**Parameters:**

- `p_123200_` (`BlockPos`)

**Returns:** `public static SectionPos`

### of

```java
public static SectionPos of(ChunkPos p_123197_, int p_123198_)
```

**Parameters:**

- `p_123197_` (`ChunkPos`)
- `p_123198_` (`int`)

**Returns:** `public static SectionPos`

### SectionPos

```java
return new SectionPos()
```

**Returns:** `return new`

### of

```java
public static SectionPos of(EntityAccess p_235862_)
```

**Parameters:**

- `p_235862_` (`EntityAccess`)

**Returns:** `public static SectionPos`

### of

```java
public static SectionPos of(Position p_235864_)
```

**Parameters:**

- `p_235864_` (`Position`)

**Returns:** `public static SectionPos`

### of

```java
public static SectionPos of(long p_123185_)
```

**Parameters:**

- `p_123185_` (`long`)

**Returns:** `public static SectionPos`

### bottomOf

```java
public static SectionPos bottomOf(ChunkAccess p_175563_)
```

**Parameters:**

- `p_175563_` (`ChunkAccess`)

**Returns:** `public static SectionPos`

### offset

```java
public static long offset(long p_123192_, Direction p_123193_)
```

**Parameters:**

- `p_123192_` (`long`)
- `p_123193_` (`Direction`)

**Returns:** `public static long`

### offset

```java
public static long offset(long p_123187_, int p_123188_, int p_123189_, int p_123190_)
```

**Parameters:**

- `p_123187_` (`long`)
- `p_123188_` (`int`)
- `p_123189_` (`int`)
- `p_123190_` (`int`)

**Returns:** `public static long`

### posToSectionCoord

```java
public static int posToSectionCoord(double p_175553_)
```

**Parameters:**

- `p_175553_` (`double`)

**Returns:** `public static int`

### blockToSectionCoord

```java
public static int blockToSectionCoord(int p_123172_)
```

**Parameters:**

- `p_123172_` (`int`)

**Returns:** `public static int`

### blockToSectionCoord

```java
public static int blockToSectionCoord(double p_235866_)
```

**Parameters:**

- `p_235866_` (`double`)

**Returns:** `public static int`

### sectionRelative

```java
public static int sectionRelative(int p_123208_)
```

**Parameters:**

- `p_123208_` (`int`)

**Returns:** `public static int`

### sectionRelativePos

```java
public static short sectionRelativePos(BlockPos p_123219_)
```

**Parameters:**

- `p_123219_` (`BlockPos`)

**Returns:** `public static short`

### sectionRelativeX

```java
public static int sectionRelativeX(short p_123205_)
```

**Parameters:**

- `p_123205_` (`short`)

**Returns:** `public static int`

### sectionRelativeY

```java
public static int sectionRelativeY(short p_123221_)
```

**Parameters:**

- `p_123221_` (`short`)

**Returns:** `public static int`

### sectionRelativeZ

```java
public static int sectionRelativeZ(short p_123228_)
```

**Parameters:**

- `p_123228_` (`short`)

**Returns:** `public static int`

### relativeToBlockX

```java
public int relativeToBlockX(short p_123233_)
```

**Parameters:**

- `p_123233_` (`short`)

**Returns:** `public int`

### relativeToBlockY

```java
public int relativeToBlockY(short p_123238_)
```

**Parameters:**

- `p_123238_` (`short`)

**Returns:** `public int`

### relativeToBlockZ

```java
public int relativeToBlockZ(short p_123243_)
```

**Parameters:**

- `p_123243_` (`short`)

**Returns:** `public int`

### relativeToBlockPos

```java
public BlockPos relativeToBlockPos(short p_123246_)
```

**Parameters:**

- `p_123246_` (`short`)

**Returns:** `public BlockPos`

### sectionToBlockCoord

```java
public static int sectionToBlockCoord(int p_123224_)
```

**Parameters:**

- `p_123224_` (`int`)

**Returns:** `public static int`

### sectionToBlockCoord

```java
public static int sectionToBlockCoord(int p_175555_, int p_175556_)
```

**Parameters:**

- `p_175555_` (`int`)
- `p_175556_` (`int`)

**Returns:** `public static int`

### x

```java
public static int x(long p_123214_)
```

**Parameters:**

- `p_123214_` (`long`)

**Returns:** `public static int`

### y

```java
public static int y(long p_123226_)
```

**Parameters:**

- `p_123226_` (`long`)

**Returns:** `public static int`

### z

```java
public static int z(long p_123231_)
```

**Parameters:**

- `p_123231_` (`long`)

**Returns:** `public static int`

### x

```java
public int x()
```

**Returns:** `public int`

### y

```java
public int y()
```

**Returns:** `public int`

### z

```java
public int z()
```

**Returns:** `public int`

### minBlockX

```java
public int minBlockX()
```

**Returns:** `public int`

### minBlockY

```java
public int minBlockY()
```

**Returns:** `public int`

### minBlockZ

```java
public int minBlockZ()
```

**Returns:** `public int`

### maxBlockX

```java
public int maxBlockX()
```

**Returns:** `public int`

### maxBlockY

```java
public int maxBlockY()
```

**Returns:** `public int`

### maxBlockZ

```java
public int maxBlockZ()
```

**Returns:** `public int`

### blockToSection

```java
public static long blockToSection(long p_123236_)
```

**Parameters:**

- `p_123236_` (`long`)

**Returns:** `public static long`

### getZeroNode

```java
public static long getZeroNode(int p_285381_, int p_285068_)
```

**Parameters:**

- `p_285381_` (`int`)
- `p_285068_` (`int`)

**Returns:** `public static long`

### getZeroNode

```java
public static long getZeroNode(long p_123241_)
```

**Parameters:**

- `p_123241_` (`long`)

**Returns:** `public static long`

### origin

```java
public BlockPos origin()
```

**Returns:** `public BlockPos`

### center

```java
public BlockPos center()
```

**Returns:** `public BlockPos`

### chunk

```java
public ChunkPos chunk()
```

**Returns:** `public ChunkPos`

### asLong

```java
public static long asLong(BlockPos p_175569_)
```

**Parameters:**

- `p_175569_` (`BlockPos`)

**Returns:** `public static long`

### asLong

```java
public static long asLong(int p_123210_, int p_123211_, int p_123212_)
```

**Parameters:**

- `p_123210_` (`int`)
- `p_123211_` (`int`)
- `p_123212_` (`int`)

**Returns:** `public static long`

### asLong

```java
public long asLong()
```

**Returns:** `public long`

### offset

```java
public SectionPos offset(int p_175571_, int p_175572_, int p_175573_)
```

**Parameters:**

- `p_175571_` (`int`)
- `p_175572_` (`int`)
- `p_175573_` (`int`)

**Returns:** `public SectionPos`

### blocksInside

```java
public Stream<BlockPos> blocksInside()
```

**Returns:** `public Stream<BlockPos>`

### cube

```java
public static Stream<SectionPos> cube(SectionPos p_123202_, int p_123203_)
```

**Parameters:**

- `p_123202_` (`SectionPos`)
- `p_123203_` (`int`)

**Returns:** `public static Stream<SectionPos>`

### betweenClosedStream

```java
return betweenClosedStream(i - p_123203_, j - p_123203_, k - p_123203_, i + p_123203_, j + p_123203_, k + p_123203_)
```

**Parameters:**

- `p_123203_` (`i -`)
- `p_123203_` (`j -`)
- `p_123203_` (`k -`)
- `p_123203_` (`i +`)
- `p_123203_` (`j +`)
- `p_123203_` (`k +`)

**Returns:** `return`

### aroundChunk

```java
public static Stream<SectionPos> aroundChunk(ChunkPos p_175558_, int p_175559_, int p_175560_, int p_175561_)
```

**Parameters:**

- `p_175558_` (`ChunkPos`)
- `p_175559_` (`int`)
- `p_175560_` (`int`)
- `p_175561_` (`int`)

**Returns:** `public static Stream<SectionPos>`

### betweenClosedStream

```java
return betweenClosedStream(i - p_175559_, j - p_175559_, i + p_175559_, p_175561_ - 1, j + p_175559_)
```

**Parameters:**

- `p_175559_` (`i -`)
- `p_175559_` (`j -`)
- `p_175559_` (`i +`)
- `1` (`p_175561_ -`)
- `p_175559_` (`j +`)

**Returns:** `return`

### betweenClosedStream

```java
public static Stream<SectionPos> betweenClosedStream(int p_123178_, int p_123179_, int p_123180_, int p_123181_, int p_123182_, int p_123183_)
```

**Parameters:**

- `p_123178_` (`int`)
- `p_123179_` (`int`)
- `p_123180_` (`int`)
- `p_123181_` (`int`)
- `p_123182_` (`int`)
- `p_123183_` (`int`)

**Returns:** `public static Stream<SectionPos>`

### tryAdvance

```java
public boolean tryAdvance(Consumer<? super SectionPos> p_123271_)
```

**Parameters:**

- `p_123271_` (`Consumer<? super SectionPos>`)

**Returns:** `boolean`

### aroundAndAtBlockPos

```java
public static void aroundAndAtBlockPos(BlockPos p_194643_, LongConsumer p_194644_)
```

**Parameters:**

- `p_194643_` (`BlockPos`)
- `p_194644_` (`LongConsumer`)

**Returns:** `public static void`

### aroundAndAtBlockPos

```java
public static void aroundAndAtBlockPos(long p_194640_, LongConsumer p_194641_)
```

**Parameters:**

- `p_194640_` (`long`)
- `p_194641_` (`LongConsumer`)

**Returns:** `public static void`

### aroundAndAtBlockPos

```java
public static void aroundAndAtBlockPos(int p_194635_, int p_194636_, int p_194637_, LongConsumer p_194638_)
```

**Parameters:**

- `p_194635_` (`int`)
- `p_194636_` (`int`)
- `p_194637_` (`int`)
- `p_194638_` (`LongConsumer`)

**Returns:** `public static void`
