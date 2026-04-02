# PalettedContainer

**Package:** `net.minecraft.world.level.chunk`
**Type:** class<T> implements PaletteResize<T>, PalettedContainerRO<T>

## Methods

### acquire

```java
public void acquire()
```

**Returns:** `public void`

### release

```java
public void release()
```

**Returns:** `public void`

### codecRW

```java
<T> public static <T> Codec<PalettedContainer<T>> codecRW(IdMap<T> p_238372_, Codec<T> p_238373_, PalettedContainer.Strategy p_238374_, T p_238375_)
```

**Parameters:**

- `p_238372_` (`IdMap<T>`)
- `p_238373_` (`Codec<T>`)
- `p_238374_` (`PalettedContainer.Strategy`)
- `p_238375_` (`T`)

**Returns:** `public static <T> Codec<PalettedContainer<T>>`

### codec

```java
return codec()
```

**Returns:** `return`

### codecRO

```java
<T> public static <T> Codec<PalettedContainerRO<T>> codecRO(IdMap<T> p_238419_, Codec<T> p_238420_, PalettedContainer.Strategy p_238421_, T p_238422_)
```

**Parameters:**

- `p_238419_` (`IdMap<T>`)
- `p_238420_` (`Codec<T>`)
- `p_238421_` (`PalettedContainer.Strategy`)
- `p_238422_` (`T`)

**Returns:** `public static <T> Codec<PalettedContainerRO<T>>`

### codec

```java
return codec()
```

**Returns:** `return`

### codec

```java
private static <T, C extends PalettedContainerRO<T>> Codec<C> codec(IdMap<T> p_238428_, Codec<T> p_238429_, PalettedContainer.Strategy p_238430_, T p_238431_, PalettedContainerRO.Unpacker<T, C> p_238432_)
```

**Parameters:**

- `p_238428_` (`IdMap<T>`)
- `p_238429_` (`Codec<T>`)
- `p_238430_` (`PalettedContainer.Strategy`)
- `p_238431_` (`T`)
- `p_238432_` (`PalettedContainerRO.Unpacker<T, C>`)

**Returns:** `private static <T, C extends PalettedContainerRO<T>> Codec<C>`

### PalettedContainer

```java
public PalettedContainer(IdMap<T> p_188035_, PalettedContainer.Strategy p_188036_, PalettedContainer.Configuration<T> p_188037_, BitStorage p_188038_, List<T> p_188039_)
```

**Parameters:**

- `p_188035_` (`IdMap<T>`)
- `p_188036_` (`PalettedContainer.Strategy`)
- `p_188037_` (`PalettedContainer.Configuration<T>`)
- `p_188038_` (`BitStorage`)
- `p_188039_` (`List<T>`)

**Returns:** `public`

### PalettedContainer

```java
private PalettedContainer(IdMap<T> p_199928_, PalettedContainer.Strategy p_199929_, PalettedContainer.Data<T> p_199930_)
```

**Parameters:**

- `p_199928_` (`IdMap<T>`)
- `p_199929_` (`PalettedContainer.Strategy`)
- `p_199930_` (`PalettedContainer.Data<T>`)

**Returns:** `private`

### PalettedContainer

```java
public PalettedContainer(IdMap<T> p_188041_, T p_188042_, PalettedContainer.Strategy p_188043_)
```

**Parameters:**

- `p_188041_` (`IdMap<T>`)
- `p_188042_` (`T`)
- `p_188043_` (`PalettedContainer.Strategy`)

**Returns:** `public`

### createOrReuseData

```java
private PalettedContainer.Data<T> createOrReuseData(PalettedContainer.Data<T> p_188052_, int p_188053_)
```

**Parameters:**

- `p_188052_` (`PalettedContainer.Data<T>`)
- `p_188053_` (`int`)

**Returns:** `private PalettedContainer.Data<T>`

### onResize

```java
public int onResize(int p_63142_, T p_63143_)
```

**Parameters:**

- `p_63142_` (`int`)
- `p_63143_` (`T`)

**Returns:** `int`

### getAndSet

```java
public T getAndSet(int p_63092_, int p_63093_, int p_63094_, T p_63095_)
```

**Parameters:**

- `p_63092_` (`int`)
- `p_63093_` (`int`)
- `p_63094_` (`int`)
- `p_63095_` (`T`)

**Returns:** `public T`

### getAndSetUnchecked

```java
public T getAndSetUnchecked(int p_63128_, int p_63129_, int p_63130_, T p_63131_)
```

**Parameters:**

- `p_63128_` (`int`)
- `p_63129_` (`int`)
- `p_63130_` (`int`)
- `p_63131_` (`T`)

**Returns:** `public T`

### getAndSet

```java
private T getAndSet(int p_63097_, T p_63098_)
```

**Parameters:**

- `p_63097_` (`int`)
- `p_63098_` (`T`)

**Returns:** `private T`

### set

```java
public void set(int p_156471_, int p_156472_, int p_156473_, T p_156474_)
```

**Parameters:**

- `p_156471_` (`int`)
- `p_156472_` (`int`)
- `p_156473_` (`int`)
- `p_156474_` (`T`)

**Returns:** `public void`

### set

```java
private void set(int p_63133_, T p_63134_)
```

**Parameters:**

- `p_63133_` (`int`)
- `p_63134_` (`T`)

**Returns:** `private void`

### get

```java
public T get(int p_63088_, int p_63089_, int p_63090_)
```

**Parameters:**

- `p_63088_` (`int`)
- `p_63089_` (`int`)
- `p_63090_` (`int`)

**Returns:** `T`

### get

```java
protected T get(int p_63086_)
```

**Parameters:**

- `p_63086_` (`int`)

**Returns:** `protected T`

### getAll

```java
public void getAll(Consumer<T> p_196880_)
```

**Parameters:**

- `p_196880_` (`Consumer<T>`)

### read

```java
public void read(FriendlyByteBuf p_63119_)
```

**Parameters:**

- `p_63119_` (`FriendlyByteBuf`)

**Returns:** `public void`

### write

```java
public void write(FriendlyByteBuf p_63136_)
```

**Parameters:**

- `p_63136_` (`FriendlyByteBuf`)

### unpack

```java
<T> private static <T> DataResult<PalettedContainer<T>> unpack(IdMap<T> p_188068_, PalettedContainer.Strategy p_188069_, PalettedContainerRO.PackedData<T> p_238258_)
```

**Parameters:**

- `p_188068_` (`IdMap<T>`)
- `p_188069_` (`PalettedContainer.Strategy`)
- `p_238258_` (`PalettedContainerRO.PackedData<T>`)

**Returns:** `private static <T> DataResult<PalettedContainer<T>>`

### pack

```java
public PalettedContainerRO.PackedData<T> pack(IdMap<T> p_188065_, PalettedContainer.Strategy p_188066_)
```

**Parameters:**

- `p_188065_` (`IdMap<T>`)
- `p_188066_` (`PalettedContainer.Strategy`)

**Returns:** `PalettedContainerRO.PackedData<T>`

### swapPalette

```java
<T> private static <T> void swapPalette(int[] p_198190_, IntUnaryOperator p_198191_)
```

**Parameters:**

- `p_198190_` (`int[]`)
- `p_198191_` (`IntUnaryOperator`)

**Returns:** `private static <T> void`

### getSerializedSize

```java
public int getSerializedSize()
```

**Returns:** `int`

### maybeHas

```java
public boolean maybeHas(Predicate<T> p_63110_)
```

**Parameters:**

- `p_63110_` (`Predicate<T>`)

**Returns:** `boolean`

### copy

```java
public PalettedContainer<T> copy()
```

**Returns:** `public PalettedContainer<T>`

### recreate

```java
public PalettedContainer<T> recreate()
```

**Returns:** `PalettedContainer<T>`

### count

```java
public void count(PalettedContainer.CountConsumer<T> p_63100_)
```

**Parameters:**

- `p_63100_` (`PalettedContainer.CountConsumer<T>`)

### createData

```java
public PalettedContainer.Data<T> createData(IdMap<T> p_188092_, PaletteResize<T> p_188093_, int p_188094_)
```

**Parameters:**

- `p_188092_` (`IdMap<T>`)
- `p_188093_` (`PaletteResize<T>`)
- `p_188094_` (`int`)

**Returns:** `public PalettedContainer.Data<T>`

### accept

```java
void accept(T p_63145_, int p_63146_)
```

**Parameters:**

- `p_63145_` (`T`)
- `p_63146_` (`int`)

### copyFrom

```java
public void copyFrom(Palette<T> p_188112_, BitStorage p_188113_)
```

**Parameters:**

- `p_188112_` (`Palette<T>`)
- `p_188113_` (`BitStorage`)

**Returns:** `public void`

### getSerializedSize

```java
public int getSerializedSize()
```

**Returns:** `public int`

### write

```java
public void write(FriendlyByteBuf p_188115_)
```

**Parameters:**

- `p_188115_` (`FriendlyByteBuf`)

**Returns:** `public void`

### copy

```java
public PalettedContainer.Data<T> copy()
```

**Returns:** `public PalettedContainer.Data<T>`

### getConfiguration

```java
public <A> PalettedContainer.Configuration<A> getConfiguration(IdMap<A> p_188157_, int p_188158_)
```

**Parameters:**

- `p_188157_` (`IdMap<A>`)
- `p_188158_` (`int`)

**Returns:** `PalettedContainer.Configuration<A>`

### getConfiguration

```java
public <A> PalettedContainer.Configuration<A> getConfiguration(IdMap<A> p_188162_, int p_188163_)
```

**Parameters:**

- `p_188162_` (`IdMap<A>`)
- `p_188163_` (`int`)

**Returns:** `PalettedContainer.Configuration<A>`

### Strategy

```java
 Strategy(int p_188143_)
```

**Parameters:**

- `p_188143_` (`int`)

**Returns:** ``

### size

```java
public int size()
```

**Returns:** `public int`

### getConfiguration

```java
<< this.sizeBits * 3;
        }

        public int getIndex(int p_188146_, int p_188147_, int p_188148_) {
            return (p_188147_ << this.sizeBits | p_188148_) << this.sizeBits | p_188146_;
        }

        public abstract <A> PalettedContainer.Configuration<A> getConfiguration(IdMap<A> p_188149_, int p_188150_)
```

**Parameters:**

- `p_188149_` (`IdMap<A>`)
- `p_188150_` (`int`)

**Returns:** `PalettedContainer.Configuration<A>`

### calculateBitsForSerialization

```java
<A> <A> int calculateBitsForSerialization(IdMap<A> p_188152_, int p_188153_)
```

**Parameters:**

- `p_188152_` (`IdMap<A>`)
- `p_188153_` (`int`)

**Returns:** `<A> int`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `CountConsumer` | interface |  |
