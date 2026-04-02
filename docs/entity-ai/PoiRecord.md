# PoiRecord

**Package:** `net.minecraft.world.entity.ai.village.poi`
**Type:** class

## Methods

### codec

```java
public static Codec<PoiRecord> codec(Runnable p_27243_)
```

**Parameters:**

- `p_27243_` (`Runnable`)

**Returns:** `public static Codec<PoiRecord>`

### PoiRecord

```java
private PoiRecord(BlockPos p_218008_, Holder<PoiType> p_218009_, int p_218010_, Runnable p_218011_)
```

**Parameters:**

- `p_218008_` (`BlockPos`)
- `p_218009_` (`Holder<PoiType>`)
- `p_218010_` (`int`)
- `p_218011_` (`Runnable`)

**Returns:** `private`

### PoiRecord

```java
public PoiRecord(BlockPos p_218013_, Holder<PoiType> p_218014_, Runnable p_218015_)
```

**Parameters:**

- `p_218013_` (`BlockPos`)
- `p_218014_` (`Holder<PoiType>`)
- `p_218015_` (`Runnable`)

**Returns:** `public`

### getFreeTickets

```java
public int getFreeTickets()
```

**Returns:** `int`

### acquireTicket

```java
protected boolean acquireTicket()
```

**Returns:** `protected boolean`

### releaseTicket

```java
protected boolean releaseTicket()
```

**Returns:** `protected boolean`

### hasSpace

```java
public boolean hasSpace()
```

**Returns:** `public boolean`

### isOccupied

```java
public boolean isOccupied()
```

**Returns:** `public boolean`

### getPos

```java
public BlockPos getPos()
```

**Returns:** `public BlockPos`

### getPoiType

```java
public Holder<PoiType> getPoiType()
```

**Returns:** `public Holder<PoiType>`

### equals

```java
public boolean equals(Object p_27256_)
```

**Parameters:**

- `p_27256_` (`Object`)

**Returns:** `boolean`

### hashCode

```java
public int hashCode()
```

**Returns:** `int`
