# ByteBufCodecs

**Package:** `net.minecraft.network.codec`
**Type:** interface

## Methods

### decode

```java
public Boolean decode(ByteBuf p_320813_)
```

**Parameters:**

- `p_320813_` (`ByteBuf`)

**Returns:** `public Boolean`

### encode

```java
public void encode(ByteBuf p_319896_, Boolean p_320251_)
```

**Parameters:**

- `p_319896_` (`ByteBuf`)
- `p_320251_` (`Boolean`)

**Returns:** `public void`

### decode

```java
public Byte decode(ByteBuf p_320628_)
```

**Parameters:**

- `p_320628_` (`ByteBuf`)

**Returns:** `public Byte`

### encode

```java
public void encode(ByteBuf p_320364_, Byte p_320618_)
```

**Parameters:**

- `p_320364_` (`ByteBuf`)
- `p_320618_` (`Byte`)

**Returns:** `public void`

### decode

```java
public Short decode(ByteBuf p_320513_)
```

**Parameters:**

- `p_320513_` (`ByteBuf`)

**Returns:** `public Short`

### encode

```java
public void encode(ByteBuf p_320028_, Short p_320388_)
```

**Parameters:**

- `p_320028_` (`ByteBuf`)
- `p_320388_` (`Short`)

**Returns:** `public void`

### decode

```java
public Integer decode(ByteBuf p_320319_)
```

**Parameters:**

- `p_320319_` (`ByteBuf`)

**Returns:** `public Integer`

### encode

```java
public void encode(ByteBuf p_320669_, Integer p_320205_)
```

**Parameters:**

- `p_320669_` (`ByteBuf`)
- `p_320205_` (`Integer`)

**Returns:** `public void`

### decode

```java
public Integer decode(ByteBuf p_320253_)
```

**Parameters:**

- `p_320253_` (`ByteBuf`)

**Returns:** `public Integer`

### encode

```java
public void encode(ByteBuf p_320753_, Integer p_330380_)
```

**Parameters:**

- `p_320753_` (`ByteBuf`)
- `p_330380_` (`Integer`)

**Returns:** `public void`

### decode

```java
public Integer decode(ByteBuf p_320759_)
```

**Parameters:**

- `p_320759_` (`ByteBuf`)

**Returns:** `public Integer`

### encode

```java
public void encode(ByteBuf p_320314_, Integer p_341414_)
```

**Parameters:**

- `p_320314_` (`ByteBuf`)
- `p_341414_` (`Integer`)

**Returns:** `public void`

### decode

```java
public Long decode(ByteBuf p_320635_)
```

**Parameters:**

- `p_320635_` (`ByteBuf`)

**Returns:** `public Long`

### encode

```java
public void encode(ByteBuf p_320545_, Long p_341419_)
```

**Parameters:**

- `p_320545_` (`ByteBuf`)
- `p_341419_` (`Long`)

**Returns:** `public void`

### decode

```java
public Float decode(ByteBuf p_320259_)
```

**Parameters:**

- `p_320259_` (`ByteBuf`)

**Returns:** `public Float`

### encode

```java
public void encode(ByteBuf p_320199_, Float p_341020_)
```

**Parameters:**

- `p_320199_` (`ByteBuf`)
- `p_341020_` (`Float`)

**Returns:** `public void`

### decode

```java
public Double decode(ByteBuf p_320599_)
```

**Parameters:**

- `p_320599_` (`ByteBuf`)

**Returns:** `public Double`

### encode

```java
public void encode(ByteBuf p_320880_, Double p_340812_)
```

**Parameters:**

- `p_320880_` (`ByteBuf`)
- `p_340812_` (`Double`)

**Returns:** `public void`

### decode

```java
public byte[] decode(ByteBuf p_320167_)
```

**Parameters:**

- `p_320167_` (`ByteBuf`)

**Returns:** `public byte[]`

### encode

```java
public void encode(ByteBuf p_320240_, byte[] p_341316_)
```

**Parameters:**

- `p_320240_` (`ByteBuf`)
- `p_341316_` (`byte[]`)

**Returns:** `public void`

### decode

```java
public Optional<CompoundTag> decode(ByteBuf p_320103_)
```

**Parameters:**

- `p_320103_` (`ByteBuf`)

**Returns:** `public Optional<CompoundTag>`

### encode

```java
public void encode(ByteBuf p_320012_, Optional<CompoundTag> p_341059_)
```

**Parameters:**

- `p_320012_` (`ByteBuf`)
- `p_341059_` (`Optional<CompoundTag>`)

**Returns:** `public void`

### decode

```java
public Vector3f decode(ByteBuf p_319897_)
```

**Parameters:**

- `p_319897_` (`ByteBuf`)

**Returns:** `public Vector3f`

### encode

```java
public void encode(ByteBuf p_320441_, Vector3f p_340932_)
```

**Parameters:**

- `p_320441_` (`ByteBuf`)
- `p_340932_` (`Vector3f`)

**Returns:** `public void`

### decode

```java
public Quaternionf decode(ByteBuf p_324083_)
```

**Parameters:**

- `p_324083_` (`ByteBuf`)

**Returns:** `public Quaternionf`

### encode

```java
public void encode(ByteBuf p_324192_, Quaternionf p_341304_)
```

**Parameters:**

- `p_324192_` (`ByteBuf`)
- `p_341304_` (`Quaternionf`)

**Returns:** `public void`

### decode

```java
public PropertyMap decode(ByteBuf p_331129_)
```

**Parameters:**

- `p_331129_` (`ByteBuf`)

**Returns:** `public PropertyMap`

### encode

```java
public void encode(ByteBuf p_331394_, PropertyMap p_341001_)
```

**Parameters:**

- `p_331394_` (`ByteBuf`)
- `p_341001_` (`PropertyMap`)

**Returns:** `public void`

### decode

```java
public GameProfile decode(ByteBuf p_341302_)
```

**Parameters:**

- `p_341302_` (`ByteBuf`)

**Returns:** `public GameProfile`

### encode

```java
public void encode(ByteBuf p_340881_, GameProfile p_341071_)
```

**Parameters:**

- `p_340881_` (`ByteBuf`)
- `p_341071_` (`GameProfile`)

**Returns:** `public void`

### byteArray

```java
static StreamCodec<ByteBuf, byte[]> byteArray(int p_324182_)
```

**Parameters:**

- `p_324182_` (`int`)

**Returns:** `static StreamCodec<ByteBuf, byte[]>`

### decode

```java
public byte[] decode(ByteBuf p_319947_)
```

**Parameters:**

- `p_319947_` (`ByteBuf`)

**Returns:** `public byte[]`

### encode

```java
public void encode(ByteBuf p_320370_, byte[] p_331189_)
```

**Parameters:**

- `p_320370_` (`ByteBuf`)
- `p_331189_` (`byte[]`)

**Returns:** `public void`

### EncoderException

```java
throw new EncoderException("ByteArray with size " + p_331189_.length + " is bigger than allowed " + p_324182_)
```

**Parameters:**

- `p_324182_` (`"ByteArray with size " + p_331189_.length + " is bigger than allowed " +`)

**Returns:** `throw new`

### stringUtf8

```java
static StreamCodec<ByteBuf, String> stringUtf8(int p_320693_)
```

**Parameters:**

- `p_320693_` (`int`)

**Returns:** `static StreamCodec<ByteBuf, String>`

### decode

```java
public String decode(ByteBuf p_332176_)
```

**Parameters:**

- `p_332176_` (`ByteBuf`)

**Returns:** `public String`

### encode

```java
public void encode(ByteBuf p_331068_, String p_341104_)
```

**Parameters:**

- `p_331068_` (`ByteBuf`)
- `p_341104_` (`String`)

**Returns:** `public void`

### tagCodec

```java
static StreamCodec<ByteBuf, Tag> tagCodec(Supplier<NbtAccounter> p_320506_)
```

**Parameters:**

- `p_320506_` (`Supplier<NbtAccounter>`)

**Returns:** `static StreamCodec<ByteBuf, Tag>`

### decode

```java
public Tag decode(ByteBuf p_341393_)
```

**Parameters:**

- `p_341393_` (`ByteBuf`)

**Returns:** `public Tag`

### DecoderException

```java
throw new DecoderException("Expected non-null compound tag")
```

**Parameters:**

- `tag"` (`"Expected non-null compound`)

**Returns:** `throw new`

### encode

```java
public void encode(ByteBuf p_340857_, Tag p_341321_)
```

**Parameters:**

- `p_340857_` (`ByteBuf`)
- `p_341321_` (`Tag`)

**Returns:** `public void`

### EncoderException

```java
throw new EncoderException("Expected non-null compound tag")
```

**Parameters:**

- `tag"` (`"Expected non-null compound`)

**Returns:** `throw new`

### compoundTagCodec

```java
static StreamCodec<ByteBuf, CompoundTag> compoundTagCodec(Supplier<NbtAccounter> p_331128_)
```

**Parameters:**

- `p_331128_` (`Supplier<NbtAccounter>`)

**Returns:** `static StreamCodec<ByteBuf, CompoundTag>`

### DecoderException

```java
throw new DecoderException("Not a compound tag: " + p_339405_)
```

**Parameters:**

- `p_339405_` (`"Not a compound tag: " +`)

**Returns:** `throw new`

### fromCodecTrusted

```java
<T> static <T> StreamCodec<ByteBuf, T> fromCodecTrusted(Codec<T> p_331105_)
```

**Parameters:**

- `p_331105_` (`Codec<T>`)

**Returns:** `static <T> StreamCodec<ByteBuf, T>`

### fromCodec

```java
return fromCodec()
```

**Returns:** `return`

### fromCodec

```java
<T> static <T> StreamCodec<ByteBuf, T> fromCodec(Codec<T> p_320615_)
```

**Parameters:**

- `p_320615_` (`Codec<T>`)

**Returns:** `static <T> StreamCodec<ByteBuf, T>`

### fromCodec

```java
<T> static <T> StreamCodec<ByteBuf, T> fromCodec(Codec<T> p_330943_, Supplier<NbtAccounter> p_330382_)
```

**Parameters:**

- `p_330943_` (`Codec<T>`)
- `p_330382_` (`Supplier<NbtAccounter>`)

**Returns:** `static <T> StreamCodec<ByteBuf, T>`

### fromCodecWithRegistriesTrusted

```java
<T> static <T> StreamCodec<RegistryFriendlyByteBuf, T> fromCodecWithRegistriesTrusted(Codec<T> p_331713_)
```

**Parameters:**

- `p_331713_` (`Codec<T>`)

**Returns:** `static <T> StreamCodec<RegistryFriendlyByteBuf, T>`

### fromCodecWithRegistries

```java
return fromCodecWithRegistries()
```

**Returns:** `return`

### fromCodecWithRegistries

```java
<T> static <T> StreamCodec<RegistryFriendlyByteBuf, T> fromCodecWithRegistries(Codec<T> p_323797_)
```

**Parameters:**

- `p_323797_` (`Codec<T>`)

**Returns:** `static <T> StreamCodec<RegistryFriendlyByteBuf, T>`

### fromCodecWithRegistries

```java
<T> static <T> StreamCodec<RegistryFriendlyByteBuf, T> fromCodecWithRegistries(Codec<T> p_331571_, Supplier<NbtAccounter> p_331922_)
```

**Parameters:**

- `p_331571_` (`Codec<T>`)
- `p_331922_` (`Supplier<NbtAccounter>`)

**Returns:** `static <T> StreamCodec<RegistryFriendlyByteBuf, T>`

### decode

```java
public T decode(RegistryFriendlyByteBuf p_340878_)
```

**Parameters:**

- `p_340878_` (`RegistryFriendlyByteBuf`)

**Returns:** `public T`

### encode

```java
public void encode(RegistryFriendlyByteBuf p_341221_, T p_341320_)
```

**Parameters:**

- `p_341221_` (`RegistryFriendlyByteBuf`)
- `p_341320_` (`T`)

**Returns:** `public void`

### optional

```java
<B extends ByteBuf, V> static <B extends ByteBuf, V> StreamCodec<B, Optional<V>> optional(StreamCodec<B, V> p_320522_)
```

**Parameters:**

- `p_320522_` (`StreamCodec<B, V>`)

**Returns:** `static <B extends ByteBuf, V> StreamCodec<B, Optional<V>>`

### decode

```java
public Optional<V> decode(B p_324595_)
```

**Parameters:**

- `p_324595_` (`B`)

**Returns:** `public Optional<V>`

### encode

```java
public void encode(B p_324147_, Optional<V> p_340875_)
```

**Parameters:**

- `p_324147_` (`B`)
- `p_340875_` (`Optional<V>`)

**Returns:** `public void`

### readCount

```java
static int readCount(ByteBuf p_331813_, int p_331668_)
```

**Parameters:**

- `p_331813_` (`ByteBuf`)
- `p_331668_` (`int`)

**Returns:** `static int`

### DecoderException

```java
throw new DecoderException(i + " elements exceeded max size of: " + p_331668_)
```

**Parameters:**

- `p_331668_` (`i + " elements exceeded max size of: " +`)

**Returns:** `throw new`

### writeCount

```java
static void writeCount(ByteBuf p_330907_, int p_330535_, int p_331447_)
```

**Parameters:**

- `p_330907_` (`ByteBuf`)
- `p_330535_` (`int`)
- `p_331447_` (`int`)

**Returns:** `static void`

### EncoderException

```java
throw new EncoderException(p_330535_ + " elements exceeded max size of: " + p_331447_)
```

**Parameters:**

- `p_331447_` (`p_330535_ + " elements exceeded max size of: " +`)

**Returns:** `throw new`

### collection

```java
static <B extends ByteBuf, V, C extends Collection<V>> StreamCodec<B, C> collection(IntFunction<C> p_320579_, StreamCodec<? super B, V> p_319970_)
```

**Parameters:**

- `p_320579_` (`IntFunction<C>`)
- `p_319970_` (`StreamCodec<? super B, V>`)

**Returns:** `static <B extends ByteBuf, V, C extends Collection<V>> StreamCodec<B, C>`

### collection

```java
return collection()
```

**Returns:** `return`

### collection

```java
static <B extends ByteBuf, V, C extends Collection<V>> StreamCodec<B, C> collection(IntFunction<C> p_332198_, StreamCodec<? super B, V> p_332183_, int p_332173_)
```

**Parameters:**

- `p_332198_` (`IntFunction<C>`)
- `p_332183_` (`StreamCodec<? super B, V>`)
- `p_332173_` (`int`)

**Returns:** `static <B extends ByteBuf, V, C extends Collection<V>> StreamCodec<B, C>`

### decode

```java
public C decode(B p_324220_)
```

**Parameters:**

- `p_324220_` (`B`)

**Returns:** `public C`

### encode

```java
public void encode(B p_323874_, C p_340813_)
```

**Parameters:**

- `p_323874_` (`B`)
- `p_340813_` (`C`)

**Returns:** `public void`

### collection

```java
static <B extends ByteBuf, V, C extends Collection<V>> StreamCodec.CodecOperation<B, V, C> collection(IntFunction<C> p_319808_)
```

**Parameters:**

- `p_319808_` (`IntFunction<C>`)

**Returns:** `static <B extends ByteBuf, V, C extends Collection<V>> StreamCodec.CodecOperation<B, V, C>`

### collection

```java
> collection()
```

**Returns:** `>`

### list

```java
<B extends ByteBuf, V> static <B extends ByteBuf, V> StreamCodec.CodecOperation<B, V, List<V>> list()
```

**Returns:** `static <B extends ByteBuf, V> StreamCodec.CodecOperation<B, V, List<V>>`

### collection

```java
> collection()
```

**Returns:** `>`

### list

```java
<B extends ByteBuf, V> static <B extends ByteBuf, V> StreamCodec.CodecOperation<B, V, List<V>> list(int p_330434_)
```

**Parameters:**

- `p_330434_` (`int`)

**Returns:** `static <B extends ByteBuf, V> StreamCodec.CodecOperation<B, V, List<V>>`

### collection

```java
> collection()
```

**Returns:** `>`

### map

```java
static <B extends ByteBuf, K, V, M extends Map<K, V>> StreamCodec<B, M> map(IntFunction<? extends M> p_320265_, StreamCodec<? super B, K> p_320113_, StreamCodec<? super B, V> p_320275_)
```

**Parameters:**

- `p_320265_` (`IntFunction<? extends M>`)
- `p_320113_` (`StreamCodec<? super B, K>`)
- `p_320275_` (`StreamCodec<? super B, V>`)

**Returns:** `static <B extends ByteBuf, K, V, M extends Map<K, V>> StreamCodec<B, M>`

### map

```java
return map()
```

**Returns:** `return`

### map

```java
static <B extends ByteBuf, K, V, M extends Map<K, V>> StreamCodec<B, M> map(IntFunction<? extends M> p_331325_, StreamCodec<? super B, K> p_331975_, StreamCodec<? super B, V> p_331254_, int p_330938_)
```

**Parameters:**

- `p_331325_` (`IntFunction<? extends M>`)
- `p_331975_` (`StreamCodec<? super B, K>`)
- `p_331254_` (`StreamCodec<? super B, V>`)
- `p_330938_` (`int`)

**Returns:** `static <B extends ByteBuf, K, V, M extends Map<K, V>> StreamCodec<B, M>`

### encode

```java
public void encode(B p_331539_, M p_341314_)
```

**Parameters:**

- `p_331539_` (`B`)
- `p_341314_` (`M`)

**Returns:** `public void`

### decode

```java
public M decode(B p_331901_)
```

**Parameters:**

- `p_331901_` (`B`)

**Returns:** `public M`

### either

```java
<B extends ByteBuf, L, R> static <B extends ByteBuf, L, R> StreamCodec<B, Either<L, R>> either(StreamCodec<? super B, L> p_331983_, StreamCodec<? super B, R> p_332156_)
```

**Parameters:**

- `p_331983_` (`StreamCodec<? super B, L>`)
- `p_332156_` (`StreamCodec<? super B, R>`)

**Returns:** `static <B extends ByteBuf, L, R> StreamCodec<B, Either<L, R>>`

### decode

```java
public Either<L, R> decode(B p_332082_)
```

**Parameters:**

- `p_332082_` (`B`)

**Returns:** `public Either<L, R>`

### encode

```java
public void encode(B p_331172_, Either<L, R> p_340944_)
```

**Parameters:**

- `p_331172_` (`B`)
- `p_340944_` (`Either<L, R>`)

**Returns:** `public void`

### idMapper

```java
<T> static <T> StreamCodec<ByteBuf, T> idMapper(IntFunction<T> p_320877_, ToIntFunction<T> p_319985_)
```

**Parameters:**

- `p_320877_` (`IntFunction<T>`)
- `p_319985_` (`ToIntFunction<T>`)

**Returns:** `static <T> StreamCodec<ByteBuf, T>`

### decode

```java
public T decode(ByteBuf p_340809_)
```

**Parameters:**

- `p_340809_` (`ByteBuf`)

**Returns:** `public T`

### encode

```java
public void encode(ByteBuf p_341417_, T p_330257_)
```

**Parameters:**

- `p_341417_` (`ByteBuf`)
- `p_330257_` (`T`)

**Returns:** `public void`

### idMapper

```java
<T> static <T> StreamCodec<ByteBuf, T> idMapper(IdMap<T> p_319822_)
```

**Parameters:**

- `p_319822_` (`IdMap<T>`)

**Returns:** `static <T> StreamCodec<ByteBuf, T>`

### idMapper

```java
return idMapper()
```

**Returns:** `return`

### registry

```java
<T, R> private static <T, R> StreamCodec<RegistryFriendlyByteBuf, R> registry(ResourceKey<? extends Registry<T>> p_319942_, Function<Registry<T>, IdMap<R>> p_320353_)
```

**Parameters:**

- `p_319942_` (`ResourceKey<? extends Registry<T>>`)
- `p_320353_` (`Function<Registry<T>, IdMap<R>>`)

**Returns:** `private static <T, R> StreamCodec<RegistryFriendlyByteBuf, R>`

### getRegistryOrThrow

```java
private IdMap<R> getRegistryOrThrow(RegistryFriendlyByteBuf p_330361_)
```

**Parameters:**

- `p_330361_` (`RegistryFriendlyByteBuf`)

**Returns:** `private IdMap<R>`

### decode

```java
public R decode(RegistryFriendlyByteBuf p_331253_)
```

**Parameters:**

- `p_331253_` (`RegistryFriendlyByteBuf`)

**Returns:** `public R`

### encode

```java
public void encode(RegistryFriendlyByteBuf p_331775_, R p_341178_)
```

**Parameters:**

- `p_331775_` (`RegistryFriendlyByteBuf`)
- `p_341178_` (`R`)

**Returns:** `public void`

### registry

```java
<T> static <T> StreamCodec<RegistryFriendlyByteBuf, T> registry(ResourceKey<? extends Registry<T>> p_320404_)
```

**Parameters:**

- `p_320404_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `static <T> StreamCodec<RegistryFriendlyByteBuf, T>`

### registry

```java
return registry(p_332056_ -> p_332056_)
```

**Parameters:**

- `p_332056_` (`p_332056_ ->`)

**Returns:** `return`

### holderRegistry

```java
<T> static <T> StreamCodec<RegistryFriendlyByteBuf, Holder<T>> holderRegistry(ResourceKey<? extends Registry<T>> p_320387_)
```

**Parameters:**

- `p_320387_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `static <T> StreamCodec<RegistryFriendlyByteBuf, Holder<T>>`

### registry

```java
return registry()
```

**Returns:** `return`

### holder

```java
<T> static <T> StreamCodec<RegistryFriendlyByteBuf, Holder<T>> holder(ResourceKey<? extends Registry<T>> p_320391_, StreamCodec<? super RegistryFriendlyByteBuf, T> p_320595_)
```

**Parameters:**

- `p_320391_` (`ResourceKey<? extends Registry<T>>`)
- `p_320595_` (`StreamCodec<? super RegistryFriendlyByteBuf, T>`)

**Returns:** `static <T> StreamCodec<RegistryFriendlyByteBuf, Holder<T>>`

### getRegistryOrThrow

```java
private IdMap<Holder<T>> getRegistryOrThrow(RegistryFriendlyByteBuf p_341377_)
```

**Parameters:**

- `p_341377_` (`RegistryFriendlyByteBuf`)

**Returns:** `private IdMap<Holder<T>>`

### decode

```java
public Holder<T> decode(RegistryFriendlyByteBuf p_330998_)
```

**Parameters:**

- `p_330998_` (`RegistryFriendlyByteBuf`)

**Returns:** `public Holder<T>`

### encode

```java
public void encode(RegistryFriendlyByteBuf p_330557_, Holder<T> p_341109_)
```

**Parameters:**

- `p_330557_` (`RegistryFriendlyByteBuf`)
- `p_341109_` (`Holder<T>`)

**Returns:** `public void`

### holderSet

```java
<T> static <T> StreamCodec<RegistryFriendlyByteBuf, HolderSet<T>> holderSet(ResourceKey<? extends Registry<T>> p_332137_)
```

**Parameters:**

- `p_332137_` (`ResourceKey<? extends Registry<T>>`)

**Returns:** `static <T> StreamCodec<RegistryFriendlyByteBuf, HolderSet<T>>`

### holderSetCodec

```java
private StreamCodec<RegistryFriendlyByteBuf, ? extends net.neoforged.neoforge.registries.holdersets.ICustomHolderSet<T>> holderSetCodec(net.neoforged.neoforge.registries.holdersets.HolderSetType type)
```

**Parameters:**

- `type` (`net.neoforged.neoforge.registries.holdersets.HolderSetType`)

**Returns:** `private StreamCodec<RegistryFriendlyByteBuf, ? extends net.neoforged.neoforge.registries.holdersets.ICustomHolderSet<T>>`

### cast

```java
private <H extends net.neoforged.neoforge.registries.holdersets.ICustomHolderSet<T>> H cast(net.neoforged.neoforge.registries.holdersets.ICustomHolderSet<T> holderSet)
```

**Parameters:**

- `holderSet` (`net.neoforged.neoforge.registries.holdersets.ICustomHolderSet<T>`)

**Returns:** `private <H extends net.neoforged.neoforge.registries.holdersets.ICustomHolderSet<T>> H`

### decode

```java
public HolderSet<T> decode(RegistryFriendlyByteBuf p_340887_)
```

**Parameters:**

- `p_340887_` (`RegistryFriendlyByteBuf`)

**Returns:** `public HolderSet<T>`

### encode

```java
public void encode(RegistryFriendlyByteBuf p_341009_, HolderSet<T> p_340834_)
```

**Parameters:**

- `p_341009_` (`RegistryFriendlyByteBuf`)
- `p_340834_` (`HolderSet<T>`)

**Returns:** `public void`
