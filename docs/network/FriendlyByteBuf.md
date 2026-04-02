# FriendlyByteBuf

**Package:** `net.minecraft.network`
**Type:** class
**Extends:** `ByteBuf`
**Implements:** `net.neoforged.neoforge.common.extensions.IFriendlyByteBufExtension`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `DEFAULT_NBT_QUOTA` | `int` |  |
| `MAX_STRING_LENGTH` | `short` |  |
| `MAX_COMPONENT_STRING_LENGTH` | `int` |  |

## Methods

### FriendlyByteBuf

```java
public FriendlyByteBuf(ByteBuf p_130051_)
```

**Parameters:**

- `p_130051_` (`ByteBuf`)

**Returns:** `public`

### readWithCodecTrusted

```java
public <T> T readWithCodecTrusted(DynamicOps<Tag> p_295347_, Codec<T> p_296304_)
```

**Parameters:**

- `p_295347_` (`DynamicOps<Tag>`)
- `p_296304_` (`Codec<T>`)

**Returns:** `T`

### readWithCodec

```java
public <T> T readWithCodec(DynamicOps<Tag> p_266903_, Codec<T> p_267107_, NbtAccounter p_295027_)
```

**Parameters:**

- `p_266903_` (`DynamicOps<Tag>`)
- `p_267107_` (`Codec<T>`)
- `p_295027_` (`NbtAccounter`)

**Returns:** `T`

### writeWithCodec

```java
public <T> FriendlyByteBuf writeWithCodec(DynamicOps<Tag> p_266702_, Codec<T> p_267245_, T p_266783_)
```

**Parameters:**

- `p_266702_` (`DynamicOps<Tag>`)
- `p_267245_` (`Codec<T>`)
- `p_266783_` (`T`)

**Returns:** `FriendlyByteBuf`

### readJsonWithCodec

```java
<T> public <T> T readJsonWithCodec(Codec<T> p_273318_)
```

**Parameters:**

- `p_273318_` (`Codec<T>`)

**Returns:** `public <T> T`

### writeJsonWithCodec

```java
<T> public <T> void writeJsonWithCodec(Codec<T> p_273285_, T p_272770_)
```

**Parameters:**

- `p_273285_` (`Codec<T>`)
- `p_272770_` (`T`)

**Returns:** `public <T> void`

### limitValue

```java
<T> public static <T> IntFunction<T> limitValue(IntFunction<T> p_182696_, int p_182697_)
```

**Parameters:**

- `p_182696_` (`IntFunction<T>`)
- `p_182697_` (`int`)

**Returns:** `public static <T> IntFunction<T>`

### DecoderException

```java
throw new DecoderException("Value " + p_182686_ + " is larger than limit " + p_182697_)
```

**Parameters:**

- `p_182697_` (`"Value " + p_182686_ + " is larger than limit " +`)

**Returns:** `throw new`

### readCollection

```java
public <T, C extends Collection<T>> C readCollection(IntFunction<C> p_236839_, StreamDecoder<? super FriendlyByteBuf, T> p_320606_)
```

**Parameters:**

- `p_236839_` (`IntFunction<C>`)
- `p_320606_` (`StreamDecoder<? super FriendlyByteBuf, T>`)

**Returns:** `public <T, C extends Collection<T>> C`

### writeCollection

```java
<T> public <T> void writeCollection(Collection<T> p_236829_, StreamEncoder<? super FriendlyByteBuf, T> p_319902_)
```

**Parameters:**

- `p_236829_` (`Collection<T>`)
- `p_319902_` (`StreamEncoder<? super FriendlyByteBuf, T>`)

**Returns:** `public <T> void`

### readList

```java
<T> public <T> List<T> readList(StreamDecoder<? super FriendlyByteBuf, T> p_320744_)
```

**Parameters:**

- `p_320744_` (`StreamDecoder<? super FriendlyByteBuf, T>`)

**Returns:** `public <T> List<T>`

### readIntIdList

```java
public IntList readIntIdList()
```

**Returns:** `public IntList`

### writeIntIdList

```java
public void writeIntIdList(IntList p_178346_)
```

**Parameters:**

- `p_178346_` (`IntList`)

**Returns:** `public void`

### readMap

```java
public <K, V, M extends Map<K, V>> M readMap(IntFunction<M> p_236842_, StreamDecoder<? super FriendlyByteBuf, K> p_320803_, StreamDecoder<? super FriendlyByteBuf, V> p_320748_)
```

**Parameters:**

- `p_236842_` (`IntFunction<M>`)
- `p_320803_` (`StreamDecoder<? super FriendlyByteBuf, K>`)
- `p_320748_` (`StreamDecoder<? super FriendlyByteBuf, V>`)

**Returns:** `public <K, V, M extends Map<K, V>> M`

### readMap

```java
<K, V> public <K, V> Map<K, V> readMap(StreamDecoder<? super FriendlyByteBuf, K> p_319851_, StreamDecoder<? super FriendlyByteBuf, V> p_320732_)
```

**Parameters:**

- `p_319851_` (`StreamDecoder<? super FriendlyByteBuf, K>`)
- `p_320732_` (`StreamDecoder<? super FriendlyByteBuf, V>`)

**Returns:** `public <K, V> Map<K, V>`

### writeMap

```java
<K, V> public <K, V> void writeMap(Map<K, V> p_236832_, StreamEncoder<? super FriendlyByteBuf, K> p_320909_, StreamEncoder<? super FriendlyByteBuf, V> p_320188_)
```

**Parameters:**

- `p_236832_` (`Map<K, V>`)
- `p_320909_` (`StreamEncoder<? super FriendlyByteBuf, K>`)
- `p_320188_` (`StreamEncoder<? super FriendlyByteBuf, V>`)

**Returns:** `public <K, V> void`

### readWithCount

```java
public void readWithCount(Consumer<FriendlyByteBuf> p_178365_)
```

**Parameters:**

- `p_178365_` (`Consumer<FriendlyByteBuf>`)

**Returns:** `public void`

### writeEnumSet

```java
public <E extends Enum<E>> void writeEnumSet(EnumSet<E> p_250400_, Class<E> p_250673_)
```

**Parameters:**

- `p_250400_` (`EnumSet<E>`)
- `p_250673_` (`Class<E>`)

**Returns:** `public <E extends Enum<E>> void`

### readEnumSet

```java
public <E extends Enum<E>> EnumSet<E> readEnumSet(Class<E> p_251289_)
```

**Parameters:**

- `p_251289_` (`Class<E>`)

**Returns:** `public <E extends Enum<E>> EnumSet<E>`

### writeOptional

```java
<T> public <T> void writeOptional(Optional<T> p_236836_, StreamEncoder<? super FriendlyByteBuf, T> p_320585_)
```

**Parameters:**

- `p_236836_` (`Optional<T>`)
- `p_320585_` (`StreamEncoder<? super FriendlyByteBuf, T>`)

**Returns:** `public <T> void`

### readOptional

```java
<T> public <T> Optional<T> readOptional(StreamDecoder<? super FriendlyByteBuf, T> p_320700_)
```

**Parameters:**

- `p_320700_` (`StreamDecoder<? super FriendlyByteBuf, T>`)

**Returns:** `public <T> Optional<T>`

### readNullable

```java
public <T> T readNullable(StreamDecoder<? super FriendlyByteBuf, T> p_320095_)
```

**Parameters:**

- `p_320095_` (`StreamDecoder<? super FriendlyByteBuf, T>`)

**Returns:** `T`

### readNullable

```java
return readNullable()
```

**Returns:** `return`

### readNullable

```java
public static <T, B extends ByteBuf> T readNullable(B p_324437_, StreamDecoder<? super B, T> p_324453_)
```

**Parameters:**

- `p_324437_` (`B`)
- `p_324453_` (`StreamDecoder<? super B, T>`)

**Returns:** `T`

### writeNullable

```java
<T> public <T> void writeNullable(T p_236822_, StreamEncoder<? super FriendlyByteBuf, T> p_320116_)
```

**Parameters:**

- `p_236822_` (`T`)
- `p_320116_` (`StreamEncoder<? super FriendlyByteBuf, T>`)

**Returns:** `public <T> void`

### writeNullable

```java
 writeNullable()
```

**Returns:** ``

### writeNullable

```java
<T, B extends ByteBuf> public static <T, B extends ByteBuf> void writeNullable(B p_324502_, T p_324536_, StreamEncoder<? super B, T> p_324547_)
```

**Parameters:**

- `p_324502_` (`B`)
- `p_324536_` (`T`)
- `p_324547_` (`StreamEncoder<? super B, T>`)

**Returns:** `public static <T, B extends ByteBuf> void`

### readByteArray

```java
public byte[] readByteArray()
```

**Returns:** `public byte[]`

### readByteArray

```java
return readByteArray()
```

**Returns:** `return`

### readByteArray

```java
public static byte[] readByteArray(ByteBuf p_324567_)
```

**Parameters:**

- `p_324567_` (`ByteBuf`)

**Returns:** `public static byte[]`

### writeByteArray

```java
public FriendlyByteBuf writeByteArray(byte[] p_130088_)
```

**Parameters:**

- `p_130088_` (`byte[]`)

**Returns:** `public FriendlyByteBuf`

### writeByteArray

```java
 writeByteArray()
```

**Returns:** ``

### writeByteArray

```java
public static void writeByteArray(ByteBuf p_324397_, byte[] p_324485_)
```

**Parameters:**

- `p_324397_` (`ByteBuf`)
- `p_324485_` (`byte[]`)

**Returns:** `public static void`

### readByteArray

```java
public byte[] readByteArray(int p_130102_)
```

**Parameters:**

- `p_130102_` (`int`)

**Returns:** `public byte[]`

### readByteArray

```java
return readByteArray()
```

**Returns:** `return`

### readByteArray

```java
public static byte[] readByteArray(ByteBuf p_323774_, int p_324044_)
```

**Parameters:**

- `p_323774_` (`ByteBuf`)
- `p_324044_` (`int`)

**Returns:** `public static byte[]`

### DecoderException

```java
throw new DecoderException("ByteArray with size " + i + " is bigger than allowed " + p_324044_)
```

**Parameters:**

- `p_324044_` (`"ByteArray with size " + i + " is bigger than allowed " +`)

**Returns:** `throw new`

### writeVarIntArray

```java
public FriendlyByteBuf writeVarIntArray(int[] p_130090_)
```

**Parameters:**

- `p_130090_` (`int[]`)

**Returns:** `public FriendlyByteBuf`

### readVarIntArray

```java
public int[] readVarIntArray()
```

**Returns:** `public int[]`

### readVarIntArray

```java
public int[] readVarIntArray(int p_130117_)
```

**Parameters:**

- `p_130117_` (`int`)

**Returns:** `public int[]`

### DecoderException

```java
throw new DecoderException("VarIntArray with size " + i + " is bigger than allowed " + p_130117_)
```

**Parameters:**

- `p_130117_` (`"VarIntArray with size " + i + " is bigger than allowed " +`)

**Returns:** `throw new`

### writeLongArray

```java
public FriendlyByteBuf writeLongArray(long[] p_130092_)
```

**Parameters:**

- `p_130092_` (`long[]`)

**Returns:** `public FriendlyByteBuf`

### readLongArray

```java
public long[] readLongArray()
```

**Returns:** `public long[]`

### readLongArray

```java
public long[] readLongArray(long[] p_130106_)
```

**Parameters:**

- `p_130106_` (`long[]`)

**Returns:** `public long[]`

### readLongArray

```java
public long[] readLongArray(long[] p_130094_, int p_130095_)
```

**Parameters:**

- `p_130094_` (`long[]`)
- `p_130095_` (`int`)

**Returns:** `public long[]`

### DecoderException

```java
throw new DecoderException("LongArray with size " + i + " is bigger than allowed " + p_130095_)
```

**Parameters:**

- `p_130095_` (`"LongArray with size " + i + " is bigger than allowed " +`)

**Returns:** `throw new`

### readBlockPos

```java
public BlockPos readBlockPos()
```

**Returns:** `public BlockPos`

### readBlockPos

```java
return readBlockPos()
```

**Returns:** `return`

### readBlockPos

```java
public static BlockPos readBlockPos(ByteBuf p_320037_)
```

**Parameters:**

- `p_320037_` (`ByteBuf`)

**Returns:** `public static BlockPos`

### writeBlockPos

```java
public FriendlyByteBuf writeBlockPos(BlockPos p_130065_)
```

**Parameters:**

- `p_130065_` (`BlockPos`)

**Returns:** `public FriendlyByteBuf`

### writeBlockPos

```java
 writeBlockPos()
```

**Returns:** ``

### writeBlockPos

```java
public static void writeBlockPos(ByteBuf p_320943_, BlockPos p_320546_)
```

**Parameters:**

- `p_320943_` (`ByteBuf`)
- `p_320546_` (`BlockPos`)

**Returns:** `public static void`

### readChunkPos

```java
public ChunkPos readChunkPos()
```

**Returns:** `public ChunkPos`

### writeChunkPos

```java
public FriendlyByteBuf writeChunkPos(ChunkPos p_178342_)
```

**Parameters:**

- `p_178342_` (`ChunkPos`)

**Returns:** `public FriendlyByteBuf`

### readSectionPos

```java
public SectionPos readSectionPos()
```

**Returns:** `public SectionPos`

### writeSectionPos

```java
public FriendlyByteBuf writeSectionPos(SectionPos p_178344_)
```

**Parameters:**

- `p_178344_` (`SectionPos`)

**Returns:** `public FriendlyByteBuf`

### readGlobalPos

```java
public GlobalPos readGlobalPos()
```

**Returns:** `public GlobalPos`

### writeGlobalPos

```java
public void writeGlobalPos(GlobalPos p_236815_)
```

**Parameters:**

- `p_236815_` (`GlobalPos`)

**Returns:** `public void`

### readVector3f

```java
public Vector3f readVector3f()
```

**Returns:** `public Vector3f`

### readVector3f

```java
return readVector3f()
```

**Returns:** `return`

### readVector3f

```java
public static Vector3f readVector3f(ByteBuf p_320362_)
```

**Parameters:**

- `p_320362_` (`ByteBuf`)

**Returns:** `public static Vector3f`

### writeVector3f

```java
public void writeVector3f(Vector3f p_270985_)
```

**Parameters:**

- `p_270985_` (`Vector3f`)

**Returns:** `public void`

### writeVector3f

```java
 writeVector3f()
```

**Returns:** ``

### writeVector3f

```java
public static void writeVector3f(ByteBuf p_320042_, Vector3f p_320090_)
```

**Parameters:**

- `p_320042_` (`ByteBuf`)
- `p_320090_` (`Vector3f`)

**Returns:** `public static void`

### readQuaternion

```java
public Quaternionf readQuaternion()
```

**Returns:** `public Quaternionf`

### readQuaternion

```java
return readQuaternion()
```

**Returns:** `return`

### readQuaternion

```java
public static Quaternionf readQuaternion(ByteBuf p_319961_)
```

**Parameters:**

- `p_319961_` (`ByteBuf`)

**Returns:** `public static Quaternionf`

### writeQuaternion

```java
public void writeQuaternion(Quaternionf p_270141_)
```

**Parameters:**

- `p_270141_` (`Quaternionf`)

**Returns:** `public void`

### writeQuaternion

```java
 writeQuaternion()
```

**Returns:** ``

### writeQuaternion

```java
public static void writeQuaternion(ByteBuf p_320668_, Quaternionf p_320341_)
```

**Parameters:**

- `p_320668_` (`ByteBuf`)
- `p_320341_` (`Quaternionf`)

**Returns:** `public static void`

### readVec3

```java
public Vec3 readVec3()
```

**Returns:** `public Vec3`

### writeVec3

```java
public void writeVec3(Vec3 p_296062_)
```

**Parameters:**

- `p_296062_` (`Vec3`)

**Returns:** `public void`

### readEnum

```java
public <T extends Enum<T>> T readEnum(Class<T> p_130067_)
```

**Parameters:**

- `p_130067_` (`Class<T>`)

**Returns:** `public <T extends Enum<T>> T`

### writeEnum

```java
public FriendlyByteBuf writeEnum(Enum<?> p_130069_)
```

**Parameters:**

- `p_130069_` (`Enum<?>`)

**Returns:** `public FriendlyByteBuf`

### readById

```java
<T> public <T> T readById(IntFunction<T> p_295187_)
```

**Parameters:**

- `p_295187_` (`IntFunction<T>`)

**Returns:** `public <T> T`

### writeById

```java
<T> public <T> FriendlyByteBuf writeById(ToIntFunction<T> p_295233_, T p_294192_)
```

**Parameters:**

- `p_295233_` (`ToIntFunction<T>`)
- `p_294192_` (`T`)

**Returns:** `public <T> FriendlyByteBuf`

### readVarInt

```java
public int readVarInt()
```

**Returns:** `public int`

### readVarLong

```java
public long readVarLong()
```

**Returns:** `public long`

### writeUUID

```java
public FriendlyByteBuf writeUUID(UUID p_130078_)
```

**Parameters:**

- `p_130078_` (`UUID`)

**Returns:** `public FriendlyByteBuf`

### writeUUID

```java
 writeUUID()
```

**Returns:** ``

### writeUUID

```java
public static void writeUUID(ByteBuf p_320444_, UUID p_319838_)
```

**Parameters:**

- `p_320444_` (`ByteBuf`)
- `p_319838_` (`UUID`)

**Returns:** `public static void`

### readUUID

```java
public UUID readUUID()
```

**Returns:** `public UUID`

### readUUID

```java
return readUUID()
```

**Returns:** `return`

### readUUID

```java
public static UUID readUUID(ByteBuf p_319877_)
```

**Parameters:**

- `p_319877_` (`ByteBuf`)

**Returns:** `public static UUID`

### writeVarInt

```java
public FriendlyByteBuf writeVarInt(int p_130131_)
```

**Parameters:**

- `p_130131_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeVarLong

```java
public FriendlyByteBuf writeVarLong(long p_130104_)
```

**Parameters:**

- `p_130104_` (`long`)

**Returns:** `public FriendlyByteBuf`

### writeNbt

```java
public FriendlyByteBuf writeNbt(Tag p_296432_)
```

**Parameters:**

- `p_296432_` (`Tag`)

**Returns:** `public FriendlyByteBuf`

### writeNbt

```java
 writeNbt()
```

**Returns:** ``

### writeNbt

```java
public static void writeNbt(ByteBuf p_320344_, Tag p_320692_)
```

**Parameters:**

- `p_320344_` (`ByteBuf`)
- `p_320692_` (`Tag`)

**Returns:** `public static void`

### EncoderException

```java
throw new EncoderException()
```

**Returns:** `throw new`

### readNbt

```java
public CompoundTag readNbt()
```

**Returns:** `CompoundTag`

### readNbt

```java
return readNbt()
```

**Returns:** `return`

### readNbt

```java
public static CompoundTag readNbt(ByteBuf p_320394_)
```

**Parameters:**

- `p_320394_` (`ByteBuf`)

**Returns:** `CompoundTag`

### DecoderException

```java
throw new DecoderException("Not a compound tag: " + tag)
```

**Parameters:**

- `tag` (`"Not a compound tag: " +`)

**Returns:** `throw new`

### readNbt

```java
public static Tag readNbt(ByteBuf p_320170_, NbtAccounter p_320055_)
```

**Parameters:**

- `p_320170_` (`ByteBuf`)
- `p_320055_` (`NbtAccounter`)

**Returns:** `Tag`

### EncoderException

```java
throw new EncoderException()
```

**Returns:** `throw new`

### readNbt

```java
public Tag readNbt(NbtAccounter p_130082_)
```

**Parameters:**

- `p_130082_` (`NbtAccounter`)

**Returns:** `Tag`

### readNbt

```java
return readNbt()
```

**Returns:** `return`

### readUtf

```java
public String readUtf()
```

**Returns:** `public String`

### readUtf

```java
public String readUtf(int p_130137_)
```

**Parameters:**

- `p_130137_` (`int`)

**Returns:** `public String`

### writeUtf

```java
public FriendlyByteBuf writeUtf(String p_130071_)
```

**Parameters:**

- `p_130071_` (`String`)

**Returns:** `public FriendlyByteBuf`

### writeUtf

```java
public FriendlyByteBuf writeUtf(String p_130073_, int p_130074_)
```

**Parameters:**

- `p_130073_` (`String`)
- `p_130074_` (`int`)

**Returns:** `public FriendlyByteBuf`

### readResourceLocation

```java
public ResourceLocation readResourceLocation()
```

**Returns:** `public ResourceLocation`

### writeResourceLocation

```java
public FriendlyByteBuf writeResourceLocation(ResourceLocation p_130086_)
```

**Parameters:**

- `p_130086_` (`ResourceLocation`)

**Returns:** `public FriendlyByteBuf`

### readResourceKey

```java
<T> public <T> ResourceKey<T> readResourceKey(ResourceKey<? extends Registry<T>> p_236802_)
```

**Parameters:**

- `p_236802_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `public <T> ResourceKey<T>`

### writeResourceKey

```java
public void writeResourceKey(ResourceKey<?> p_236859_)
```

**Parameters:**

- `p_236859_` (`ResourceKey<?>`)

**Returns:** `public void`

### readRegistryKey

```java
<T> public <T> ResourceKey<? extends Registry<T>> readRegistryKey()
```

**Returns:** `public <T> ResourceKey<? extends Registry<T>>`

### readDate

```java
public Date readDate()
```

**Returns:** `public Date`

### writeDate

```java
public FriendlyByteBuf writeDate(Date p_130076_)
```

**Parameters:**

- `p_130076_` (`Date`)

**Returns:** `public FriendlyByteBuf`

### readInstant

```java
public Instant readInstant()
```

**Returns:** `public Instant`

### writeInstant

```java
public void writeInstant(Instant p_236827_)
```

**Parameters:**

- `p_236827_` (`Instant`)

**Returns:** `public void`

### readPublicKey

```java
public PublicKey readPublicKey()
```

**Returns:** `public PublicKey`

### DecoderException

```java
throw new DecoderException("Malformed public key bytes")
```

**Parameters:**

- `bytes"` (`"Malformed public key`)

**Returns:** `throw new`

### writePublicKey

```java
public FriendlyByteBuf writePublicKey(PublicKey p_236825_)
```

**Parameters:**

- `p_236825_` (`PublicKey`)

**Returns:** `public FriendlyByteBuf`

### readBlockHitResult

```java
public BlockHitResult readBlockHitResult()
```

**Returns:** `public BlockHitResult`

### writeBlockHitResult

```java
public void writeBlockHitResult(BlockHitResult p_130063_)
```

**Parameters:**

- `p_130063_` (`BlockHitResult`)

**Returns:** `public void`

### readBitSet

```java
public BitSet readBitSet()
```

**Returns:** `public BitSet`

### writeBitSet

```java
public void writeBitSet(BitSet p_178351_)
```

**Parameters:**

- `p_178351_` (`BitSet`)

**Returns:** `public void`

### readFixedBitSet

```java
public BitSet readFixedBitSet(int p_249113_)
```

**Parameters:**

- `p_249113_` (`int`)

**Returns:** `public BitSet`

### writeFixedBitSet

```java
public void writeFixedBitSet(BitSet p_248698_, int p_248869_)
```

**Parameters:**

- `p_248698_` (`BitSet`)
- `p_248869_` (`int`)

**Returns:** `public void`

### isContiguous

```java
public boolean isContiguous()
```

**Returns:** `boolean`

### maxFastWritableBytes

```java
public int maxFastWritableBytes()
```

**Returns:** `int`

### capacity

```java
public int capacity()
```

**Returns:** `int`

### capacity

```java
public FriendlyByteBuf capacity(int p_295325_)
```

**Parameters:**

- `p_295325_` (`int`)

**Returns:** `public FriendlyByteBuf`

### maxCapacity

```java
public int maxCapacity()
```

**Returns:** `int`

### alloc

```java
public ByteBufAllocator alloc()
```

**Returns:** `ByteBufAllocator`

### order

```java
public ByteOrder order()
```

**Returns:** `ByteOrder`

### order

```java
public ByteBuf order(ByteOrder p_130280_)
```

**Parameters:**

- `p_130280_` (`ByteOrder`)

**Returns:** `ByteBuf`

### unwrap

```java
public ByteBuf unwrap()
```

**Returns:** `ByteBuf`

### isDirect

```java
public boolean isDirect()
```

**Returns:** `boolean`

### isReadOnly

```java
public boolean isReadOnly()
```

**Returns:** `boolean`

### asReadOnly

```java
public ByteBuf asReadOnly()
```

**Returns:** `ByteBuf`

### readerIndex

```java
public int readerIndex()
```

**Returns:** `int`

### readerIndex

```java
public FriendlyByteBuf readerIndex(int p_295519_)
```

**Parameters:**

- `p_295519_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writerIndex

```java
public int writerIndex()
```

**Returns:** `int`

### writerIndex

```java
public FriendlyByteBuf writerIndex(int p_294907_)
```

**Parameters:**

- `p_294907_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setIndex

```java
public FriendlyByteBuf setIndex(int p_296056_, int p_295480_)
```

**Parameters:**

- `p_296056_` (`int`)
- `p_295480_` (`int`)

**Returns:** `public FriendlyByteBuf`

### readableBytes

```java
public int readableBytes()
```

**Returns:** `int`

### writableBytes

```java
public int writableBytes()
```

**Returns:** `int`

### maxWritableBytes

```java
public int maxWritableBytes()
```

**Returns:** `int`

### isReadable

```java
public boolean isReadable()
```

**Returns:** `boolean`

### isReadable

```java
public boolean isReadable(int p_130254_)
```

**Parameters:**

- `p_130254_` (`int`)

**Returns:** `boolean`

### isWritable

```java
public boolean isWritable()
```

**Returns:** `boolean`

### isWritable

```java
public boolean isWritable(int p_130257_)
```

**Parameters:**

- `p_130257_` (`int`)

**Returns:** `boolean`

### clear

```java
public FriendlyByteBuf clear()
```

**Returns:** `public FriendlyByteBuf`

### markReaderIndex

```java
public FriendlyByteBuf markReaderIndex()
```

**Returns:** `public FriendlyByteBuf`

### resetReaderIndex

```java
public FriendlyByteBuf resetReaderIndex()
```

**Returns:** `public FriendlyByteBuf`

### markWriterIndex

```java
public FriendlyByteBuf markWriterIndex()
```

**Returns:** `public FriendlyByteBuf`

### resetWriterIndex

```java
public FriendlyByteBuf resetWriterIndex()
```

**Returns:** `public FriendlyByteBuf`

### discardReadBytes

```java
public FriendlyByteBuf discardReadBytes()
```

**Returns:** `public FriendlyByteBuf`

### discardSomeReadBytes

```java
public FriendlyByteBuf discardSomeReadBytes()
```

**Returns:** `public FriendlyByteBuf`

### ensureWritable

```java
public FriendlyByteBuf ensureWritable(int p_294903_)
```

**Parameters:**

- `p_294903_` (`int`)

**Returns:** `public FriendlyByteBuf`

### ensureWritable

```java
public int ensureWritable(int p_130141_, boolean p_130142_)
```

**Parameters:**

- `p_130141_` (`int`)
- `p_130142_` (`boolean`)

**Returns:** `int`

### getBoolean

```java
public boolean getBoolean(int p_130159_)
```

**Parameters:**

- `p_130159_` (`int`)

**Returns:** `boolean`

### getByte

```java
public byte getByte(int p_130161_)
```

**Parameters:**

- `p_130161_` (`int`)

**Returns:** `byte`

### getUnsignedByte

```java
public short getUnsignedByte(int p_130225_)
```

**Parameters:**

- `p_130225_` (`int`)

**Returns:** `short`

### getShort

```java
public short getShort(int p_130221_)
```

**Parameters:**

- `p_130221_` (`int`)

**Returns:** `short`

### getShortLE

```java
public short getShortLE(int p_130223_)
```

**Parameters:**

- `p_130223_` (`int`)

**Returns:** `short`

### getUnsignedShort

```java
public int getUnsignedShort(int p_130235_)
```

**Parameters:**

- `p_130235_` (`int`)

**Returns:** `int`

### getUnsignedShortLE

```java
public int getUnsignedShortLE(int p_130237_)
```

**Parameters:**

- `p_130237_` (`int`)

**Returns:** `int`

### getMedium

```java
public int getMedium(int p_130217_)
```

**Parameters:**

- `p_130217_` (`int`)

**Returns:** `int`

### getMediumLE

```java
public int getMediumLE(int p_130219_)
```

**Parameters:**

- `p_130219_` (`int`)

**Returns:** `int`

### getUnsignedMedium

```java
public int getUnsignedMedium(int p_130231_)
```

**Parameters:**

- `p_130231_` (`int`)

**Returns:** `int`

### getUnsignedMediumLE

```java
public int getUnsignedMediumLE(int p_130233_)
```

**Parameters:**

- `p_130233_` (`int`)

**Returns:** `int`

### getInt

```java
public int getInt(int p_130209_)
```

**Parameters:**

- `p_130209_` (`int`)

**Returns:** `int`

### getIntLE

```java
public int getIntLE(int p_130211_)
```

**Parameters:**

- `p_130211_` (`int`)

**Returns:** `int`

### getUnsignedInt

```java
public long getUnsignedInt(int p_130227_)
```

**Parameters:**

- `p_130227_` (`int`)

**Returns:** `long`

### getUnsignedIntLE

```java
public long getUnsignedIntLE(int p_130229_)
```

**Parameters:**

- `p_130229_` (`int`)

**Returns:** `long`

### getLong

```java
public long getLong(int p_130213_)
```

**Parameters:**

- `p_130213_` (`int`)

**Returns:** `long`

### getLongLE

```java
public long getLongLE(int p_130215_)
```

**Parameters:**

- `p_130215_` (`int`)

**Returns:** `long`

### getChar

```java
public char getChar(int p_130199_)
```

**Parameters:**

- `p_130199_` (`int`)

**Returns:** `char`

### getFloat

```java
public float getFloat(int p_130207_)
```

**Parameters:**

- `p_130207_` (`int`)

**Returns:** `float`

### getDouble

```java
public double getDouble(int p_130205_)
```

**Parameters:**

- `p_130205_` (`int`)

**Returns:** `double`

### getBytes

```java
public FriendlyByteBuf getBytes(int p_296115_, ByteBuf p_295805_)
```

**Parameters:**

- `p_296115_` (`int`)
- `p_295805_` (`ByteBuf`)

**Returns:** `public FriendlyByteBuf`

### getBytes

```java
public FriendlyByteBuf getBytes(int p_294876_, ByteBuf p_295864_, int p_294524_)
```

**Parameters:**

- `p_294876_` (`int`)
- `p_295864_` (`ByteBuf`)
- `p_294524_` (`int`)

**Returns:** `public FriendlyByteBuf`

### getBytes

```java
public FriendlyByteBuf getBytes(int p_294107_, ByteBuf p_296448_, int p_295017_, int p_294733_)
```

**Parameters:**

- `p_294107_` (`int`)
- `p_296448_` (`ByteBuf`)
- `p_295017_` (`int`)
- `p_294733_` (`int`)

**Returns:** `public FriendlyByteBuf`

### getBytes

```java
public FriendlyByteBuf getBytes(int p_294557_, byte[] p_295660_)
```

**Parameters:**

- `p_294557_` (`int`)
- `p_295660_` (`byte[]`)

**Returns:** `public FriendlyByteBuf`

### getBytes

```java
public FriendlyByteBuf getBytes(int p_295128_, byte[] p_296337_, int p_294659_, int p_294779_)
```

**Parameters:**

- `p_295128_` (`int`)
- `p_296337_` (`byte[]`)
- `p_294659_` (`int`)
- `p_294779_` (`int`)

**Returns:** `public FriendlyByteBuf`

### getBytes

```java
public FriendlyByteBuf getBytes(int p_296377_, ByteBuffer p_295139_)
```

**Parameters:**

- `p_296377_` (`int`)
- `p_295139_` (`ByteBuffer`)

**Returns:** `public FriendlyByteBuf`

### getBytes

```java
public FriendlyByteBuf getBytes(int p_294277_, OutputStream p_296069_, int p_296395_)
```

**Parameters:**

- `p_294277_` (`int`)
- `p_296069_` (`OutputStream`)
- `p_296395_` (`int`)

**Returns:** `public FriendlyByteBuf`

### getBytes

```java
public int getBytes(int p_130187_, GatheringByteChannel p_130188_, int p_130189_)
```

**Parameters:**

- `p_130187_` (`int`)
- `p_130188_` (`GatheringByteChannel`)
- `p_130189_` (`int`)

**Returns:** `int`

### getBytes

```java
public int getBytes(int p_130182_, FileChannel p_130183_, long p_130184_, int p_130185_)
```

**Parameters:**

- `p_130182_` (`int`)
- `p_130183_` (`FileChannel`)
- `p_130184_` (`long`)
- `p_130185_` (`int`)

**Returns:** `int`

### getCharSequence

```java
public CharSequence getCharSequence(int p_130201_, int p_130202_, Charset p_130203_)
```

**Parameters:**

- `p_130201_` (`int`)
- `p_130202_` (`int`)
- `p_130203_` (`Charset`)

**Returns:** `CharSequence`

### setBoolean

```java
public FriendlyByteBuf setBoolean(int p_295254_, boolean p_295072_)
```

**Parameters:**

- `p_295254_` (`int`)
- `p_295072_` (`boolean`)

**Returns:** `public FriendlyByteBuf`

### setByte

```java
public FriendlyByteBuf setByte(int p_294776_, int p_295119_)
```

**Parameters:**

- `p_294776_` (`int`)
- `p_295119_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setShort

```java
public FriendlyByteBuf setShort(int p_295713_, int p_296093_)
```

**Parameters:**

- `p_295713_` (`int`)
- `p_296093_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setShortLE

```java
public FriendlyByteBuf setShortLE(int p_295748_, int p_294784_)
```

**Parameters:**

- `p_295748_` (`int`)
- `p_294784_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setMedium

```java
public FriendlyByteBuf setMedium(int p_295726_, int p_296052_)
```

**Parameters:**

- `p_295726_` (`int`)
- `p_296052_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setMediumLE

```java
public FriendlyByteBuf setMediumLE(int p_296476_, int p_295239_)
```

**Parameters:**

- `p_296476_` (`int`)
- `p_295239_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setInt

```java
public FriendlyByteBuf setInt(int p_295466_, int p_295351_)
```

**Parameters:**

- `p_295466_` (`int`)
- `p_295351_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setIntLE

```java
public FriendlyByteBuf setIntLE(int p_296041_, int p_295343_)
```

**Parameters:**

- `p_296041_` (`int`)
- `p_295343_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setLong

```java
public FriendlyByteBuf setLong(int p_295413_, long p_294370_)
```

**Parameters:**

- `p_295413_` (`int`)
- `p_294370_` (`long`)

**Returns:** `public FriendlyByteBuf`

### setLongLE

```java
public FriendlyByteBuf setLongLE(int p_294242_, long p_295126_)
```

**Parameters:**

- `p_294242_` (`int`)
- `p_295126_` (`long`)

**Returns:** `public FriendlyByteBuf`

### setChar

```java
public FriendlyByteBuf setChar(int p_295571_, int p_295295_)
```

**Parameters:**

- `p_295571_` (`int`)
- `p_295295_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setFloat

```java
public FriendlyByteBuf setFloat(int p_295320_, float p_296028_)
```

**Parameters:**

- `p_295320_` (`int`)
- `p_296028_` (`float`)

**Returns:** `public FriendlyByteBuf`

### setDouble

```java
public FriendlyByteBuf setDouble(int p_294330_, double p_295264_)
```

**Parameters:**

- `p_294330_` (`int`)
- `p_295264_` (`double`)

**Returns:** `public FriendlyByteBuf`

### setBytes

```java
public FriendlyByteBuf setBytes(int p_294134_, ByteBuf p_294238_)
```

**Parameters:**

- `p_294134_` (`int`)
- `p_294238_` (`ByteBuf`)

**Returns:** `public FriendlyByteBuf`

### setBytes

```java
public FriendlyByteBuf setBytes(int p_295824_, ByteBuf p_294581_, int p_295654_)
```

**Parameters:**

- `p_295824_` (`int`)
- `p_294581_` (`ByteBuf`)
- `p_295654_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setBytes

```java
public FriendlyByteBuf setBytes(int p_296236_, ByteBuf p_295709_, int p_294354_, int p_295897_)
```

**Parameters:**

- `p_296236_` (`int`)
- `p_295709_` (`ByteBuf`)
- `p_294354_` (`int`)
- `p_295897_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setBytes

```java
public FriendlyByteBuf setBytes(int p_295696_, byte[] p_295990_)
```

**Parameters:**

- `p_295696_` (`int`)
- `p_295990_` (`byte[]`)

**Returns:** `public FriendlyByteBuf`

### setBytes

```java
public FriendlyByteBuf setBytes(int p_295030_, byte[] p_295276_, int p_295073_, int p_295926_)
```

**Parameters:**

- `p_295030_` (`int`)
- `p_295276_` (`byte[]`)
- `p_295073_` (`int`)
- `p_295926_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setBytes

```java
public FriendlyByteBuf setBytes(int p_294827_, ByteBuffer p_295408_)
```

**Parameters:**

- `p_294827_` (`int`)
- `p_295408_` (`ByteBuffer`)

**Returns:** `public FriendlyByteBuf`

### setBytes

```java
public int setBytes(int p_130380_, InputStream p_130381_, int p_130382_)
```

**Parameters:**

- `p_130380_` (`int`)
- `p_130381_` (`InputStream`)
- `p_130382_` (`int`)

**Returns:** `int`

### setBytes

```java
public int setBytes(int p_130392_, ScatteringByteChannel p_130393_, int p_130394_)
```

**Parameters:**

- `p_130392_` (`int`)
- `p_130393_` (`ScatteringByteChannel`)
- `p_130394_` (`int`)

**Returns:** `int`

### setBytes

```java
public int setBytes(int p_130387_, FileChannel p_130388_, long p_130389_, int p_130390_)
```

**Parameters:**

- `p_130387_` (`int`)
- `p_130388_` (`FileChannel`)
- `p_130389_` (`long`)
- `p_130390_` (`int`)

**Returns:** `int`

### setZero

```java
public FriendlyByteBuf setZero(int p_295002_, int p_295655_)
```

**Parameters:**

- `p_295002_` (`int`)
- `p_295655_` (`int`)

**Returns:** `public FriendlyByteBuf`

### setCharSequence

```java
public int setCharSequence(int p_130407_, CharSequence p_130408_, Charset p_130409_)
```

**Parameters:**

- `p_130407_` (`int`)
- `p_130408_` (`CharSequence`)
- `p_130409_` (`Charset`)

**Returns:** `int`

### readBoolean

```java
public boolean readBoolean()
```

**Returns:** `boolean`

### readByte

```java
public byte readByte()
```

**Returns:** `byte`

### readUnsignedByte

```java
public short readUnsignedByte()
```

**Returns:** `short`

### readShort

```java
public short readShort()
```

**Returns:** `short`

### readShortLE

```java
public short readShortLE()
```

**Returns:** `short`

### readUnsignedShort

```java
public int readUnsignedShort()
```

**Returns:** `int`

### readUnsignedShortLE

```java
public int readUnsignedShortLE()
```

**Returns:** `int`

### readMedium

```java
public int readMedium()
```

**Returns:** `int`

### readMediumLE

```java
public int readMediumLE()
```

**Returns:** `int`

### readUnsignedMedium

```java
public int readUnsignedMedium()
```

**Returns:** `int`

### readUnsignedMediumLE

```java
public int readUnsignedMediumLE()
```

**Returns:** `int`

### readInt

```java
public int readInt()
```

**Returns:** `int`

### readIntLE

```java
public int readIntLE()
```

**Returns:** `int`

### readUnsignedInt

```java
public long readUnsignedInt()
```

**Returns:** `long`

### readUnsignedIntLE

```java
public long readUnsignedIntLE()
```

**Returns:** `long`

### readLong

```java
public long readLong()
```

**Returns:** `long`

### readLongLE

```java
public long readLongLE()
```

**Returns:** `long`

### readChar

```java
public char readChar()
```

**Returns:** `char`

### readFloat

```java
public float readFloat()
```

**Returns:** `float`

### readDouble

```java
public double readDouble()
```

**Returns:** `double`

### readBytes

```java
public ByteBuf readBytes(int p_130287_)
```

**Parameters:**

- `p_130287_` (`int`)

**Returns:** `ByteBuf`

### readSlice

```java
public ByteBuf readSlice(int p_130332_)
```

**Parameters:**

- `p_130332_` (`int`)

**Returns:** `ByteBuf`

### readRetainedSlice

```java
public ByteBuf readRetainedSlice(int p_130328_)
```

**Parameters:**

- `p_130328_` (`int`)

**Returns:** `ByteBuf`

### readBytes

```java
public FriendlyByteBuf readBytes(ByteBuf p_296080_)
```

**Parameters:**

- `p_296080_` (`ByteBuf`)

**Returns:** `public FriendlyByteBuf`

### readBytes

```java
public FriendlyByteBuf readBytes(ByteBuf p_296068_, int p_295259_)
```

**Parameters:**

- `p_296068_` (`ByteBuf`)
- `p_295259_` (`int`)

**Returns:** `public FriendlyByteBuf`

### readBytes

```java
public FriendlyByteBuf readBytes(ByteBuf p_295701_, int p_294970_, int p_294610_)
```

**Parameters:**

- `p_295701_` (`ByteBuf`)
- `p_294970_` (`int`)
- `p_294610_` (`int`)

**Returns:** `public FriendlyByteBuf`

### readBytes

```java
public FriendlyByteBuf readBytes(byte[] p_295557_)
```

**Parameters:**

- `p_295557_` (`byte[]`)

**Returns:** `public FriendlyByteBuf`

### readBytes

```java
public FriendlyByteBuf readBytes(byte[] p_294152_, int p_294331_, int p_295481_)
```

**Parameters:**

- `p_294152_` (`byte[]`)
- `p_294331_` (`int`)
- `p_295481_` (`int`)

**Returns:** `public FriendlyByteBuf`

### readBytes

```java
public FriendlyByteBuf readBytes(ByteBuffer p_294641_)
```

**Parameters:**

- `p_294641_` (`ByteBuffer`)

**Returns:** `public FriendlyByteBuf`

### readBytes

```java
public FriendlyByteBuf readBytes(OutputStream p_296425_, int p_295786_)
```

**Parameters:**

- `p_296425_` (`OutputStream`)
- `p_295786_` (`int`)

**Returns:** `public FriendlyByteBuf`

### readBytes

```java
public int readBytes(GatheringByteChannel p_130307_, int p_130308_)
```

**Parameters:**

- `p_130307_` (`GatheringByteChannel`)
- `p_130308_` (`int`)

**Returns:** `int`

### readCharSequence

```java
public CharSequence readCharSequence(int p_130317_, Charset p_130318_)
```

**Parameters:**

- `p_130317_` (`int`)
- `p_130318_` (`Charset`)

**Returns:** `CharSequence`

### readBytes

```java
public int readBytes(FileChannel p_130303_, long p_130304_, int p_130305_)
```

**Parameters:**

- `p_130303_` (`FileChannel`)
- `p_130304_` (`long`)
- `p_130305_` (`int`)

**Returns:** `int`

### skipBytes

```java
public FriendlyByteBuf skipBytes(int p_296015_)
```

**Parameters:**

- `p_296015_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeBoolean

```java
public FriendlyByteBuf writeBoolean(boolean p_295682_)
```

**Parameters:**

- `p_295682_` (`boolean`)

**Returns:** `public FriendlyByteBuf`

### writeByte

```java
public FriendlyByteBuf writeByte(int p_295618_)
```

**Parameters:**

- `p_295618_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeShort

```java
public FriendlyByteBuf writeShort(int p_294734_)
```

**Parameters:**

- `p_294734_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeShortLE

```java
public FriendlyByteBuf writeShortLE(int p_295772_)
```

**Parameters:**

- `p_295772_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeMedium

```java
public FriendlyByteBuf writeMedium(int p_296189_)
```

**Parameters:**

- `p_296189_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeMediumLE

```java
public FriendlyByteBuf writeMediumLE(int p_295508_)
```

**Parameters:**

- `p_295508_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeInt

```java
public FriendlyByteBuf writeInt(int p_296090_)
```

**Parameters:**

- `p_296090_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeIntLE

```java
public FriendlyByteBuf writeIntLE(int p_294626_)
```

**Parameters:**

- `p_294626_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeLong

```java
public FriendlyByteBuf writeLong(long p_295423_)
```

**Parameters:**

- `p_295423_` (`long`)

**Returns:** `public FriendlyByteBuf`

### writeLongLE

```java
public FriendlyByteBuf writeLongLE(long p_294730_)
```

**Parameters:**

- `p_294730_` (`long`)

**Returns:** `public FriendlyByteBuf`

### writeChar

```java
public FriendlyByteBuf writeChar(int p_295369_)
```

**Parameters:**

- `p_295369_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeFloat

```java
public FriendlyByteBuf writeFloat(float p_294332_)
```

**Parameters:**

- `p_294332_` (`float`)

**Returns:** `public FriendlyByteBuf`

### writeDouble

```java
public FriendlyByteBuf writeDouble(double p_295463_)
```

**Parameters:**

- `p_295463_` (`double`)

**Returns:** `public FriendlyByteBuf`

### writeBytes

```java
public FriendlyByteBuf writeBytes(ByteBuf p_295011_)
```

**Parameters:**

- `p_295011_` (`ByteBuf`)

**Returns:** `public FriendlyByteBuf`

### writeBytes

```java
public FriendlyByteBuf writeBytes(ByteBuf p_295384_, int p_295311_)
```

**Parameters:**

- `p_295384_` (`ByteBuf`)
- `p_295311_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeBytes

```java
public FriendlyByteBuf writeBytes(ByteBuf p_295348_, int p_294807_, int p_294737_)
```

**Parameters:**

- `p_295348_` (`ByteBuf`)
- `p_294807_` (`int`)
- `p_294737_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeBytes

```java
public FriendlyByteBuf writeBytes(byte[] p_296194_)
```

**Parameters:**

- `p_296194_` (`byte[]`)

**Returns:** `public FriendlyByteBuf`

### writeBytes

```java
public FriendlyByteBuf writeBytes(byte[] p_294409_, int p_295416_, int p_294380_)
```

**Parameters:**

- `p_294409_` (`byte[]`)
- `p_295416_` (`int`)
- `p_294380_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeBytes

```java
public FriendlyByteBuf writeBytes(ByteBuffer p_295937_)
```

**Parameters:**

- `p_295937_` (`ByteBuffer`)

**Returns:** `public FriendlyByteBuf`

### writeBytes

```java
public int writeBytes(InputStream p_130481_, int p_130482_)
```

**Parameters:**

- `p_130481_` (`InputStream`)
- `p_130482_` (`int`)

**Returns:** `int`

### writeBytes

```java
public int writeBytes(ScatteringByteChannel p_130490_, int p_130491_)
```

**Parameters:**

- `p_130490_` (`ScatteringByteChannel`)
- `p_130491_` (`int`)

**Returns:** `int`

### writeBytes

```java
public int writeBytes(FileChannel p_130486_, long p_130487_, int p_130488_)
```

**Parameters:**

- `p_130486_` (`FileChannel`)
- `p_130487_` (`long`)
- `p_130488_` (`int`)

**Returns:** `int`

### writeZero

```java
public FriendlyByteBuf writeZero(int p_295016_)
```

**Parameters:**

- `p_295016_` (`int`)

**Returns:** `public FriendlyByteBuf`

### writeCharSequence

```java
public int writeCharSequence(CharSequence p_130501_, Charset p_130502_)
```

**Parameters:**

- `p_130501_` (`CharSequence`)
- `p_130502_` (`Charset`)

**Returns:** `int`

### indexOf

```java
public int indexOf(int p_130244_, int p_130245_, byte p_130246_)
```

**Parameters:**

- `p_130244_` (`int`)
- `p_130245_` (`int`)
- `p_130246_` (`byte`)

**Returns:** `int`

### bytesBefore

```java
public int bytesBefore(byte p_130108_)
```

**Parameters:**

- `p_130108_` (`byte`)

**Returns:** `int`

### bytesBefore

```java
public int bytesBefore(int p_130110_, byte p_130111_)
```

**Parameters:**

- `p_130110_` (`int`)
- `p_130111_` (`byte`)

**Returns:** `int`

### bytesBefore

```java
public int bytesBefore(int p_130113_, int p_130114_, byte p_130115_)
```

**Parameters:**

- `p_130113_` (`int`)
- `p_130114_` (`int`)
- `p_130115_` (`byte`)

**Returns:** `int`

### forEachByte

```java
public int forEachByte(ByteProcessor p_130150_)
```

**Parameters:**

- `p_130150_` (`ByteProcessor`)

**Returns:** `int`

### forEachByte

```java
public int forEachByte(int p_130146_, int p_130147_, ByteProcessor p_130148_)
```

**Parameters:**

- `p_130146_` (`int`)
- `p_130147_` (`int`)
- `p_130148_` (`ByteProcessor`)

**Returns:** `int`

### forEachByteDesc

```java
public int forEachByteDesc(ByteProcessor p_130156_)
```

**Parameters:**

- `p_130156_` (`ByteProcessor`)

**Returns:** `int`

### forEachByteDesc

```java
public int forEachByteDesc(int p_130152_, int p_130153_, ByteProcessor p_130154_)
```

**Parameters:**

- `p_130152_` (`int`)
- `p_130153_` (`int`)
- `p_130154_` (`ByteProcessor`)

**Returns:** `int`

### copy

```java
public ByteBuf copy()
```

**Returns:** `ByteBuf`

### copy

```java
public ByteBuf copy(int p_130128_, int p_130129_)
```

**Parameters:**

- `p_130128_` (`int`)
- `p_130129_` (`int`)

**Returns:** `ByteBuf`

### slice

```java
public ByteBuf slice()
```

**Returns:** `ByteBuf`

### retainedSlice

```java
public ByteBuf retainedSlice()
```

**Returns:** `ByteBuf`

### slice

```java
public ByteBuf slice(int p_130450_, int p_130451_)
```

**Parameters:**

- `p_130450_` (`int`)
- `p_130451_` (`int`)

**Returns:** `ByteBuf`

### retainedSlice

```java
public ByteBuf retainedSlice(int p_130359_, int p_130360_)
```

**Parameters:**

- `p_130359_` (`int`)
- `p_130360_` (`int`)

**Returns:** `ByteBuf`

### duplicate

```java
public ByteBuf duplicate()
```

**Returns:** `ByteBuf`

### retainedDuplicate

```java
public ByteBuf retainedDuplicate()
```

**Returns:** `ByteBuf`

### nioBufferCount

```java
public int nioBufferCount()
```

**Returns:** `int`

### nioBuffer

```java
public ByteBuffer nioBuffer()
```

**Returns:** `ByteBuffer`

### nioBuffer

```java
public ByteBuffer nioBuffer(int p_130270_, int p_130271_)
```

**Parameters:**

- `p_130270_` (`int`)
- `p_130271_` (`int`)

**Returns:** `ByteBuffer`

### internalNioBuffer

```java
public ByteBuffer internalNioBuffer(int p_130248_, int p_130249_)
```

**Parameters:**

- `p_130248_` (`int`)
- `p_130249_` (`int`)

**Returns:** `ByteBuffer`

### nioBuffers

```java
public ByteBuffer[] nioBuffers()
```

**Returns:** `ByteBuffer[]`

### nioBuffers

```java
public ByteBuffer[] nioBuffers(int p_130275_, int p_130276_)
```

**Parameters:**

- `p_130275_` (`int`)
- `p_130276_` (`int`)

**Returns:** `ByteBuffer[]`

### hasArray

```java
public boolean hasArray()
```

**Returns:** `boolean`

### array

```java
public byte[] array()
```

**Returns:** `byte[]`

### arrayOffset

```java
public int arrayOffset()
```

**Returns:** `int`

### hasMemoryAddress

```java
public boolean hasMemoryAddress()
```

**Returns:** `boolean`

### memoryAddress

```java
public long memoryAddress()
```

**Returns:** `long`

### toString

```java
public String toString(Charset p_130458_)
```

**Parameters:**

- `p_130458_` (`Charset`)

**Returns:** `String`

### toString

```java
public String toString(int p_130454_, int p_130455_, Charset p_130456_)
```

**Parameters:**

- `p_130454_` (`int`)
- `p_130455_` (`int`)
- `p_130456_` (`Charset`)

**Returns:** `String`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`

### equals

```java
public boolean equals(Object p_130144_)
```

**Parameters:**

- `p_130144_` (`Object`)

**Returns:** `boolean`

### compareTo

```java
public int compareTo(ByteBuf p_130123_)
```

**Parameters:**

- `p_130123_` (`ByteBuf`)

**Returns:** `int`

### toString

```java
public String toString()
```

**Returns:** `String`

### retain

```java
public FriendlyByteBuf retain(int p_294685_)
```

**Parameters:**

- `p_294685_` (`int`)

**Returns:** `public FriendlyByteBuf`

### retain

```java
public FriendlyByteBuf retain()
```

**Returns:** `public FriendlyByteBuf`

### touch

```java
public FriendlyByteBuf touch()
```

**Returns:** `public FriendlyByteBuf`

### touch

```java
public FriendlyByteBuf touch(Object p_296360_)
```

**Parameters:**

- `p_296360_` (`Object`)

**Returns:** `public FriendlyByteBuf`

### refCnt

```java
public int refCnt()
```

**Returns:** `int`

### release

```java
public boolean release()
```

**Returns:** `boolean`

### release

```java
public boolean release(int p_130347_)
```

**Parameters:**

- `p_130347_` (`int`)

**Returns:** `boolean`

### getSource

```java
.jetbrains.annotations.ApiStatus.Internal
    public ByteBuf getSource()
```

**Returns:** `.jetbrains.annotations.ApiStatus.Internal
    public ByteBuf`
