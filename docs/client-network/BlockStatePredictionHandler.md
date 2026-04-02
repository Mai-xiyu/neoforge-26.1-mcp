# BlockStatePredictionHandler

**Package:** `net.minecraft.client.multiplayer.prediction`
**Type:** class
**Implements:** `AutoCloseable`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### retainKnownServerState

```java
public void retainKnownServerState(BlockPos p_233868_, BlockState p_233869_, LocalPlayer p_233870_)
```

**Parameters:**

- `p_233868_` (`BlockPos`)
- `p_233869_` (`BlockState`)
- `p_233870_` (`LocalPlayer`)

**Returns:** `public void`

### updateKnownServerState

```java
public boolean updateKnownServerState(BlockPos p_233865_, BlockState p_233866_)
```

**Parameters:**

- `p_233865_` (`BlockPos`)
- `p_233866_` (`BlockState`)

**Returns:** `public boolean`

### endPredictionsUpTo

```java
public void endPredictionsUpTo(int p_233857_, ClientLevel p_233858_)
```

**Parameters:**

- `p_233857_` (`int`)
- `p_233858_` (`ClientLevel`)

**Returns:** `public void`

### startPredicting

```java
public BlockStatePredictionHandler startPredicting()
```

**Returns:** `public BlockStatePredictionHandler`

### close

```java
public void close()
```

### currentSequence

```java
public int currentSequence()
```

**Returns:** `public int`

### isPredicting

```java
public boolean isPredicting()
```

**Returns:** `public boolean`

### retainSnapshot

```java
public void retainSnapshot(BlockPos pos, net.neoforged.neoforge.common.util.BlockSnapshot snapshot)
```

**Parameters:**

- `pos` (`BlockPos`)
- `snapshot` (`net.neoforged.neoforge.common.util.BlockSnapshot`)

### ServerVerifiedState

```java
 ServerVerifiedState(int p_233878_, BlockState p_233879_, Vec3 p_233880_)
```

**Parameters:**

- `p_233878_` (`int`)
- `p_233879_` (`BlockState`)
- `p_233880_` (`Vec3`)

**Returns:** ``

### setSequence

```java
BlockStatePredictionHandler.ServerVerifiedState setSequence(int p_233882_)
```

**Parameters:**

- `p_233882_` (`int`)

**Returns:** `BlockStatePredictionHandler.ServerVerifiedState`

### setBlockState

```java
void setBlockState(BlockState p_233884_)
```

**Parameters:**

- `p_233884_` (`BlockState`)
