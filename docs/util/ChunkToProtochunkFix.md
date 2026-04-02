# ChunkToProtochunkFix

**Package:** `net.minecraft.util.datafix.fixes`
**Type:** class
**Extends:** `DataFix`

## Methods

### ChunkToProtochunkFix

```java
public ChunkToProtochunkFix(Schema p_15285_, boolean p_15286_)
```

**Parameters:**

- `p_15285_` (`Schema`)
- `p_15286_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### makeRule

```java
public TypeRewriteRule makeRule()
```

**Returns:** `TypeRewriteRule`

### fixChunkData

```java
<T> private static <T> Dynamic<T> fixChunkData(Dynamic<T> p_199856_)
```

**Parameters:**

- `p_199856_` (`Dynamic<T>`)

**Returns:** `private static <T> Dynamic<T>`

### repackBiomes

```java
<T> private static <T> Dynamic<T> repackBiomes(Dynamic<T> p_199880_)
```

**Parameters:**

- `p_199880_` (`Dynamic<T>`)

**Returns:** `private static <T> Dynamic<T>`

### repackTicks

```java
< p_199868_.capacity()) {
                        aint[i] = p_199868_.get(i) & 255;
                    }
                }

                return p_199880_.createIntList(Arrays.stream(aint));
            }), p_337614_));
    }

    private static <T> Dynamic<T> repackTicks(Dynamic<T> p_199882_)
```

**Parameters:**

- `p_199882_` (`Dynamic<T>`)

**Returns:** `Dynamic<T>`

### packOffsetCoordinates

```java
private static short packOffsetCoordinates(int p_15291_, int p_15292_, int p_15293_)
```

**Parameters:**

- `p_15291_` (`int`)
- `p_15292_` (`int`)
- `p_15293_` (`int`)

**Returns:** `private static short`
