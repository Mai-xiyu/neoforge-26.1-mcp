# RandomSequences

**Package:** `net.minecraft.world`
**Type:** class
**Extends:** `SavedData`

## Methods

### factory

```java
public static SavedData.Factory<RandomSequences> factory(long p_294688_)
```

**Parameters:**

- `p_294688_` (`long`)

**Returns:** `public static SavedData.Factory<RandomSequences>`

### RandomSequences

```java
public RandomSequences(long p_287622_)
```

**Parameters:**

- `p_287622_` (`long`)

**Returns:** `public`

### get

```java
public RandomSource get(ResourceLocation p_287751_)
```

**Parameters:**

- `p_287751_` (`ResourceLocation`)

**Returns:** `public RandomSource`

### createSequence

```java
private RandomSequence createSequence(ResourceLocation p_295796_)
```

**Parameters:**

- `p_295796_` (`ResourceLocation`)

**Returns:** `private RandomSequence`

### createSequence

```java
private RandomSequence createSequence(ResourceLocation p_295614_, int p_296284_, boolean p_296271_, boolean p_295917_)
```

**Parameters:**

- `p_295614_` (`ResourceLocation`)
- `p_296284_` (`int`)
- `p_296271_` (`boolean`)
- `p_295917_` (`boolean`)

**Returns:** `private RandomSequence`

### forAllSequences

```java
public void forAllSequences(BiConsumer<ResourceLocation, RandomSequence> p_294252_)
```

**Parameters:**

- `p_294252_` (`BiConsumer<ResourceLocation, RandomSequence>`)

**Returns:** `public void`

### setSeedDefaults

```java
public void setSeedDefaults(int p_294511_, boolean p_294255_, boolean p_295889_)
```

**Parameters:**

- `p_294511_` (`int`)
- `p_294255_` (`boolean`)
- `p_295889_` (`boolean`)

**Returns:** `public void`

### save

```java
public CompoundTag save(CompoundTag p_287658_, HolderLookup.Provider p_323500_)
```

**Parameters:**

- `p_287658_` (`CompoundTag`)
- `p_323500_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### getBooleanWithDefault

```java
private static boolean getBooleanWithDefault(CompoundTag p_296109_, String p_295934_, boolean p_295516_)
```

**Parameters:**

- `p_296109_` (`CompoundTag`)
- `p_295934_` (`String`)
- `p_295516_` (`boolean`)

**Returns:** `private static boolean`

### load

```java
public static RandomSequences load(long p_287756_, CompoundTag p_287587_)
```

**Parameters:**

- `p_287756_` (`long`)
- `p_287587_` (`CompoundTag`)

**Returns:** `public static RandomSequences`

### clear

```java
public int clear()
```

**Returns:** `public int`

### reset

```java
public void reset(ResourceLocation p_296099_)
```

**Parameters:**

- `p_296099_` (`ResourceLocation`)

**Returns:** `public void`

### reset

```java
public void reset(ResourceLocation p_294608_, int p_295700_, boolean p_296000_, boolean p_294735_)
```

**Parameters:**

- `p_294608_` (`ResourceLocation`)
- `p_295700_` (`int`)
- `p_296000_` (`boolean`)
- `p_294735_` (`boolean`)

**Returns:** `public void`

### DirtyMarkingRandomSource

```java
 DirtyMarkingRandomSource(RandomSource p_295768_)
```

**Parameters:**

- `p_295768_` (`RandomSource`)

**Returns:** ``

### fork

```java
public RandomSource fork()
```

**Returns:** `RandomSource`

### forkPositional

```java
public PositionalRandomFactory forkPositional()
```

**Returns:** `PositionalRandomFactory`

### setSeed

```java
public void setSeed(long p_295551_)
```

**Parameters:**

- `p_295551_` (`long`)

### nextInt

```java
public int nextInt()
```

**Returns:** `int`

### nextInt

```java
public int nextInt(int p_294632_)
```

**Parameters:**

- `p_294632_` (`int`)

**Returns:** `int`

### nextLong

```java
public long nextLong()
```

**Returns:** `long`

### nextBoolean

```java
public boolean nextBoolean()
```

**Returns:** `boolean`

### nextFloat

```java
public float nextFloat()
```

**Returns:** `float`

### nextDouble

```java
public double nextDouble()
```

**Returns:** `double`

### nextGaussian

```java
public double nextGaussian()
```

**Returns:** `double`

### equals

```java
public boolean equals(Object p_294463_)
```

**Parameters:**

- `p_294463_` (`Object`)

**Returns:** `boolean`
