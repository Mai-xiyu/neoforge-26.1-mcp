# TerrainParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `TextureSheetParticle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### TerrainParticle

```java
public TerrainParticle(ClientLevel p_108282_, double p_108283_, double p_108284_, double p_108285_, double p_108286_, double p_108287_, double p_108288_, BlockState p_108289_)
```

**Parameters:**

- `p_108282_` (`ClientLevel`)
- `p_108283_` (`double`)
- `p_108284_` (`double`)
- `p_108285_` (`double`)
- `p_108286_` (`double`)
- `p_108287_` (`double`)
- `p_108288_` (`double`)
- `p_108289_` (`BlockState`)

**Returns:** `public`

### TerrainParticle

```java
public TerrainParticle(ClientLevel p_172451_, double p_172452_, double p_172453_, double p_172454_, double p_172455_, double p_172456_, double p_172457_, BlockState p_172458_, BlockPos p_172459_)
```

**Parameters:**

- `p_172451_` (`ClientLevel`)
- `p_172452_` (`double`)
- `p_172453_` (`double`)
- `p_172454_` (`double`)
- `p_172455_` (`double`)
- `p_172456_` (`double`)
- `p_172457_` (`double`)
- `p_172458_` (`BlockState`)
- `p_172459_` (`BlockPos`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getRenderType

```java
public ParticleRenderType getRenderType()
```

**Returns:** `ParticleRenderType`

### getU0

```java
protected float getU0()
```

**Returns:** `float`

### getU1

```java
protected float getU1()
```

**Returns:** `float`

### getV0

```java
protected float getV0()
```

**Returns:** `float`

### getV1

```java
protected float getV1()
```

**Returns:** `float`

### getLightColor

```java
public int getLightColor(float p_108291_)
```

**Parameters:**

- `p_108291_` (`float`)

**Returns:** `int`

### createTerrainParticle

```java
static TerrainParticle createTerrainParticle(BlockParticleOption p_338588_, ClientLevel p_338858_, double p_338212_, double p_338420_, double p_338623_, double p_338262_, double p_338289_, double p_338400_)
```

**Parameters:**

- `p_338588_` (`BlockParticleOption`)
- `p_338858_` (`ClientLevel`)
- `p_338212_` (`double`)
- `p_338420_` (`double`)
- `p_338623_` (`double`)
- `p_338262_` (`double`)
- `p_338289_` (`double`)
- `p_338400_` (`double`)

**Returns:** `TerrainParticle`

### updateSprite

```java
public TerrainParticle updateSprite(BlockState state, BlockPos pos)
```

**Parameters:**

- `state` (`BlockState`)
- `pos` (`BlockPos`)

**Returns:** `public TerrainParticle`

### createParticle

```java
public Particle createParticle(BlockParticleOption p_338199_, ClientLevel p_338462_, double p_338552_, double p_338714_, double p_338211_, double p_338881_, double p_338238_, double p_338376_)
```

**Parameters:**

- `p_338199_` (`BlockParticleOption`)
- `p_338462_` (`ClientLevel`)
- `p_338552_` (`double`)
- `p_338714_` (`double`)
- `p_338211_` (`double`)
- `p_338881_` (`double`)
- `p_338238_` (`double`)
- `p_338376_` (`double`)

**Returns:** `Particle`

### createParticle

```java
public Particle createParticle(BlockParticleOption p_108304_, ClientLevel p_108305_, double p_108306_, double p_108307_, double p_108308_, double p_108309_, double p_108310_, double p_108311_)
```

**Parameters:**

- `p_108304_` (`BlockParticleOption`)
- `p_108305_` (`ClientLevel`)
- `p_108306_` (`double`)
- `p_108307_` (`double`)
- `p_108308_` (`double`)
- `p_108309_` (`double`)
- `p_108310_` (`double`)
- `p_108311_` (`double`)

**Returns:** `Particle`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `DustPillarProvider` | class |  |
| `Provider` | class |  |
