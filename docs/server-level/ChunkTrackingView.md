# ChunkTrackingView

**Package:** `net.minecraft.server.level`
**Type:** interface

## Methods

### contains

```java
public boolean contains(int p_294225_, int p_294897_, boolean p_294644_)
```

**Parameters:**

- `p_294225_` (`int`)
- `p_294897_` (`int`)
- `p_294644_` (`boolean`)

**Returns:** `boolean`

### forEach

```java
public void forEach(Consumer<ChunkPos> p_295201_)
```

**Parameters:**

- `p_295201_` (`Consumer<ChunkPos>`)

### of

```java
static ChunkTrackingView of(ChunkPos p_296254_, int p_295979_)
```

**Parameters:**

- `p_296254_` (`ChunkPos`)
- `p_295979_` (`int`)

**Returns:** `static ChunkTrackingView`

### difference

```java
static void difference(ChunkTrackingView p_294391_, ChunkTrackingView p_294272_, Consumer<ChunkPos> p_295078_, Consumer<ChunkPos> p_294115_)
```

**Parameters:**

- `p_294391_` (`ChunkTrackingView`)
- `p_294272_` (`ChunkTrackingView`)
- `p_295078_` (`Consumer<ChunkPos>`)
- `p_294115_` (`Consumer<ChunkPos>`)

**Returns:** `static void`

### contains

```java
default boolean contains(ChunkPos p_296112_)
```

**Parameters:**

- `p_296112_` (`ChunkPos`)

**Returns:** `default boolean`

### contains

```java
default boolean contains(int p_295374_, int p_296479_)
```

**Parameters:**

- `p_295374_` (`int`)
- `p_296479_` (`int`)

**Returns:** `default boolean`

### contains

```java
boolean contains(int p_294429_, int p_295591_, boolean p_296102_)
```

**Parameters:**

- `p_294429_` (`int`)
- `p_295591_` (`int`)
- `p_296102_` (`boolean`)

**Returns:** `boolean`

### forEach

```java
void forEach(Consumer<ChunkPos> p_294937_)
```

**Parameters:**

- `p_294937_` (`Consumer<ChunkPos>`)

### isInViewDistance

```java
default boolean isInViewDistance(int p_295863_, int p_294569_)
```

**Parameters:**

- `p_295863_` (`int`)
- `p_294569_` (`int`)

**Returns:** `default boolean`

### isInViewDistance

```java
static boolean isInViewDistance(int p_294551_, int p_294918_, int p_296415_, int p_296475_, int p_295248_)
```

**Parameters:**

- `p_294551_` (`int`)
- `p_294918_` (`int`)
- `p_296415_` (`int`)
- `p_296475_` (`int`)
- `p_295248_` (`int`)

**Returns:** `static boolean`

### isWithinDistance

```java
return isWithinDistance()
```

**Returns:** `return`

### isWithinDistance

```java
static boolean isWithinDistance(int p_294927_, int p_295703_, int p_294990_, int p_295161_, int p_295394_, boolean p_295219_)
```

**Parameters:**

- `p_294927_` (`int`)
- `p_295703_` (`int`)
- `p_294990_` (`int`)
- `p_295161_` (`int`)
- `p_295394_` (`int`)
- `p_295219_` (`boolean`)

**Returns:** `static boolean`

### minX

```java
int minX()
```

**Returns:** `int`

### minZ

```java
int minZ()
```

**Returns:** `int`

### maxX

```java
int maxX()
```

**Returns:** `int`

### maxZ

```java
int maxZ()
```

**Returns:** `int`

### squareIntersects

```java
protected boolean squareIntersects(ChunkTrackingView.Positioned p_295100_)
```

**Parameters:**

- `p_295100_` (`ChunkTrackingView.Positioned`)

**Returns:** `boolean`

### contains

```java
public boolean contains(int p_295177_, int p_294248_, boolean p_294703_)
```

**Parameters:**

- `p_295177_` (`int`)
- `p_294248_` (`int`)
- `p_294703_` (`boolean`)

**Returns:** `boolean`

### forEach

```java
public void forEach(Consumer<ChunkPos> p_294236_)
```

**Parameters:**

- `p_294236_` (`Consumer<ChunkPos>`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Positioned` | record |  |
