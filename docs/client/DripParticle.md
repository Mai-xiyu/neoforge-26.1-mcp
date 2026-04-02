# DripParticle

**Package:** `net.minecraft.client.particle`
**Type:** class
**Extends:** `TextureSheetParticle`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `isGlowing` | `boolean` |  |

## Methods

### DripParticle

```java
protected DripParticle(ClientLevel p_106051_, double p_106052_, double p_106053_, double p_106054_, Fluid p_106055_)
```

**Parameters:**

- `p_106051_` (`ClientLevel`)
- `p_106052_` (`double`)
- `p_106053_` (`double`)
- `p_106054_` (`double`)
- `p_106055_` (`Fluid`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### getType

```java
protected Fluid getType()
```

**Returns:** `protected Fluid`

### getRenderType

```java
public ParticleRenderType getRenderType()
```

**Returns:** `ParticleRenderType`

### getLightColor

```java
public int getLightColor(float p_106065_)
```

**Parameters:**

- `p_106065_` (`float`)

**Returns:** `int`

### tick

```java
public void tick()
```

### preMoveUpdate

```java
protected void preMoveUpdate()
```

**Returns:** `protected void`

### postMoveUpdate

```java
protected void postMoveUpdate()
```

**Returns:** `protected void`

### createWaterHangParticle

```java
public static TextureSheetParticle createWaterHangParticle(SimpleParticleType p_272626_, ClientLevel p_273102_, double p_273456_, double p_272984_, double p_273398_, double p_272880_, double p_273725_, double p_273051_)
```

**Parameters:**

- `p_272626_` (`SimpleParticleType`)
- `p_273102_` (`ClientLevel`)
- `p_273456_` (`double`)
- `p_272984_` (`double`)
- `p_273398_` (`double`)
- `p_272880_` (`double`)
- `p_273725_` (`double`)
- `p_273051_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createWaterFallParticle

```java
public static TextureSheetParticle createWaterFallParticle(SimpleParticleType p_273627_, ClientLevel p_273486_, double p_273309_, double p_273125_, double p_272992_, double p_273177_, double p_273537_, double p_272846_)
```

**Parameters:**

- `p_273627_` (`SimpleParticleType`)
- `p_273486_` (`ClientLevel`)
- `p_273309_` (`double`)
- `p_273125_` (`double`)
- `p_272992_` (`double`)
- `p_273177_` (`double`)
- `p_273537_` (`double`)
- `p_272846_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createLavaHangParticle

```java
public static TextureSheetParticle createLavaHangParticle(SimpleParticleType p_273228_, ClientLevel p_273622_, double p_273666_, double p_273570_, double p_273214_, double p_273664_, double p_273595_, double p_272690_)
```

**Parameters:**

- `p_273228_` (`SimpleParticleType`)
- `p_273622_` (`ClientLevel`)
- `p_273666_` (`double`)
- `p_273570_` (`double`)
- `p_273214_` (`double`)
- `p_273664_` (`double`)
- `p_273595_` (`double`)
- `p_272690_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createLavaFallParticle

```java
public static TextureSheetParticle createLavaFallParticle(SimpleParticleType p_273238_, ClientLevel p_273752_, double p_272651_, double p_273625_, double p_273136_, double p_273204_, double p_272797_, double p_273362_)
```

**Parameters:**

- `p_273238_` (`SimpleParticleType`)
- `p_273752_` (`ClientLevel`)
- `p_272651_` (`double`)
- `p_273625_` (`double`)
- `p_273136_` (`double`)
- `p_273204_` (`double`)
- `p_272797_` (`double`)
- `p_273362_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createLavaLandParticle

```java
public static TextureSheetParticle createLavaLandParticle(SimpleParticleType p_273607_, ClientLevel p_272692_, double p_273544_, double p_272768_, double p_272726_, double p_273719_, double p_272833_, double p_272949_)
```

**Parameters:**

- `p_273607_` (`SimpleParticleType`)
- `p_272692_` (`ClientLevel`)
- `p_273544_` (`double`)
- `p_272768_` (`double`)
- `p_272726_` (`double`)
- `p_273719_` (`double`)
- `p_272833_` (`double`)
- `p_272949_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createHoneyHangParticle

```java
public static TextureSheetParticle createHoneyHangParticle(SimpleParticleType p_273557_, ClientLevel p_273367_, double p_272749_, double p_272697_, double p_272849_, double p_273144_, double p_273170_, double p_272932_)
```

**Parameters:**

- `p_273557_` (`SimpleParticleType`)
- `p_273367_` (`ClientLevel`)
- `p_272749_` (`double`)
- `p_272697_` (`double`)
- `p_272849_` (`double`)
- `p_273144_` (`double`)
- `p_273170_` (`double`)
- `p_272932_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createHoneyFallParticle

```java
public static TextureSheetParticle createHoneyFallParticle(SimpleParticleType p_273140_, ClientLevel p_273042_, double p_272969_, double p_273737_, double p_273454_, double p_273211_, double p_273723_, double p_273474_)
```

**Parameters:**

- `p_273140_` (`SimpleParticleType`)
- `p_273042_` (`ClientLevel`)
- `p_272969_` (`double`)
- `p_273737_` (`double`)
- `p_273454_` (`double`)
- `p_273211_` (`double`)
- `p_273723_` (`double`)
- `p_273474_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createHoneyLandParticle

```java
public static TextureSheetParticle createHoneyLandParticle(SimpleParticleType p_273477_, ClientLevel p_273770_, double p_272822_, double p_273147_, double p_272597_, double p_273614_, double p_273085_, double p_273097_)
```

**Parameters:**

- `p_273477_` (`SimpleParticleType`)
- `p_273770_` (`ClientLevel`)
- `p_272822_` (`double`)
- `p_273147_` (`double`)
- `p_272597_` (`double`)
- `p_273614_` (`double`)
- `p_273085_` (`double`)
- `p_273097_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createDripstoneWaterHangParticle

```java
public static TextureSheetParticle createDripstoneWaterHangParticle(SimpleParticleType p_273781_, ClientLevel p_272876_, double p_273499_, double p_273028_, double p_273663_, double p_273004_, double p_272801_, double p_272665_)
```

**Parameters:**

- `p_273781_` (`SimpleParticleType`)
- `p_272876_` (`ClientLevel`)
- `p_273499_` (`double`)
- `p_273028_` (`double`)
- `p_273663_` (`double`)
- `p_273004_` (`double`)
- `p_272801_` (`double`)
- `p_272665_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createDripstoneWaterFallParticle

```java
public static TextureSheetParticle createDripstoneWaterFallParticle(SimpleParticleType p_272684_, ClientLevel p_273226_, double p_273142_, double p_273070_, double p_273153_, double p_273735_, double p_273317_, double p_273234_)
```

**Parameters:**

- `p_272684_` (`SimpleParticleType`)
- `p_273226_` (`ClientLevel`)
- `p_273142_` (`double`)
- `p_273070_` (`double`)
- `p_273153_` (`double`)
- `p_273735_` (`double`)
- `p_273317_` (`double`)
- `p_273234_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createDripstoneLavaHangParticle

```java
public static TextureSheetParticle createDripstoneLavaHangParticle(SimpleParticleType p_273453_, ClientLevel p_273616_, double p_272691_, double p_272725_, double p_273259_, double p_273634_, double p_273065_, double p_273428_)
```

**Parameters:**

- `p_273453_` (`SimpleParticleType`)
- `p_273616_` (`ClientLevel`)
- `p_272691_` (`double`)
- `p_272725_` (`double`)
- `p_273259_` (`double`)
- `p_273634_` (`double`)
- `p_273065_` (`double`)
- `p_273428_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createDripstoneLavaFallParticle

```java
public static TextureSheetParticle createDripstoneLavaFallParticle(SimpleParticleType p_272890_, ClientLevel p_273172_, double p_272954_, double p_272803_, double p_273427_, double p_273081_, double p_273047_, double p_272960_)
```

**Parameters:**

- `p_272890_` (`SimpleParticleType`)
- `p_273172_` (`ClientLevel`)
- `p_272954_` (`double`)
- `p_272803_` (`double`)
- `p_273427_` (`double`)
- `p_273081_` (`double`)
- `p_273047_` (`double`)
- `p_272960_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createNectarFallParticle

```java
public static TextureSheetParticle createNectarFallParticle(SimpleParticleType p_273349_, ClientLevel p_272672_, double p_272820_, double p_273386_, double p_272886_, double p_272935_, double p_273715_, double p_273202_)
```

**Parameters:**

- `p_273349_` (`SimpleParticleType`)
- `p_272672_` (`ClientLevel`)
- `p_272820_` (`double`)
- `p_273386_` (`double`)
- `p_272886_` (`double`)
- `p_272935_` (`double`)
- `p_273715_` (`double`)
- `p_273202_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createSporeBlossomFallParticle

```java
public static TextureSheetParticle createSporeBlossomFallParticle(SimpleParticleType p_273654_, ClientLevel p_272678_, double p_272637_, double p_273253_, double p_273293_, double p_273363_, double p_273132_, double p_273215_)
```

**Parameters:**

- `p_273654_` (`SimpleParticleType`)
- `p_272678_` (`ClientLevel`)
- `p_272637_` (`double`)
- `p_273253_` (`double`)
- `p_273293_` (`double`)
- `p_273363_` (`double`)
- `p_273132_` (`double`)
- `p_273215_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createObsidianTearHangParticle

```java
public static TextureSheetParticle createObsidianTearHangParticle(SimpleParticleType p_273120_, ClientLevel p_272664_, double p_272879_, double p_272592_, double p_272967_, double p_272834_, double p_273440_, double p_272888_)
```

**Parameters:**

- `p_273120_` (`SimpleParticleType`)
- `p_272664_` (`ClientLevel`)
- `p_272879_` (`double`)
- `p_272592_` (`double`)
- `p_272967_` (`double`)
- `p_272834_` (`double`)
- `p_273440_` (`double`)
- `p_272888_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createObsidianTearFallParticle

```java
public static TextureSheetParticle createObsidianTearFallParticle(SimpleParticleType p_272859_, ClientLevel p_273478_, double p_273621_, double p_273279_, double p_273227_, double p_273061_, double p_273257_, double p_273164_)
```

**Parameters:**

- `p_272859_` (`SimpleParticleType`)
- `p_273478_` (`ClientLevel`)
- `p_273621_` (`double`)
- `p_273279_` (`double`)
- `p_273227_` (`double`)
- `p_273061_` (`double`)
- `p_273257_` (`double`)
- `p_273164_` (`double`)

**Returns:** `public static TextureSheetParticle`

### createObsidianTearLandParticle

```java
public static TextureSheetParticle createObsidianTearLandParticle(SimpleParticleType p_272836_, ClientLevel p_273162_, double p_273543_, double p_273247_, double p_272921_, double p_273397_, double p_273472_, double p_273488_)
```

**Parameters:**

- `p_272836_` (`SimpleParticleType`)
- `p_273162_` (`ClientLevel`)
- `p_273543_` (`double`)
- `p_273247_` (`double`)
- `p_272921_` (`double`)
- `p_273397_` (`double`)
- `p_273472_` (`double`)
- `p_273488_` (`double`)

**Returns:** `public static TextureSheetParticle`

### CoolingDripHangParticle

```java
 CoolingDripHangParticle(ClientLevel p_106068_, double p_106069_, double p_106070_, double p_106071_, Fluid p_106072_, ParticleOptions p_106073_)
```

**Parameters:**

- `p_106068_` (`ClientLevel`)
- `p_106069_` (`double`)
- `p_106070_` (`double`)
- `p_106071_` (`double`)
- `p_106072_` (`Fluid`)
- `p_106073_` (`ParticleOptions`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### preMoveUpdate

```java
protected void preMoveUpdate()
```

### DripHangParticle

```java
 DripHangParticle(ClientLevel p_106085_, double p_106086_, double p_106087_, double p_106088_, Fluid p_106089_, ParticleOptions p_106090_)
```

**Parameters:**

- `p_106085_` (`ClientLevel`)
- `p_106086_` (`double`)
- `p_106087_` (`double`)
- `p_106088_` (`double`)
- `p_106089_` (`Fluid`)
- `p_106090_` (`ParticleOptions`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### preMoveUpdate

```java
protected void preMoveUpdate()
```

### postMoveUpdate

```java
protected void postMoveUpdate()
```

### DripLandParticle

```java
 DripLandParticle(ClientLevel p_106102_, double p_106103_, double p_106104_, double p_106105_, Fluid p_106106_)
```

**Parameters:**

- `p_106102_` (`ClientLevel`)
- `p_106103_` (`double`)
- `p_106104_` (`double`)
- `p_106105_` (`double`)
- `p_106106_` (`Fluid`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### DripstoneFallAndLandParticle

```java
 DripstoneFallAndLandParticle(ClientLevel p_171930_, double p_171931_, double p_171932_, double p_171933_, Fluid p_171934_, ParticleOptions p_171935_)
```

**Parameters:**

- `p_171930_` (`ClientLevel`)
- `p_171931_` (`double`)
- `p_171932_` (`double`)
- `p_171933_` (`double`)
- `p_171934_` (`Fluid`)
- `p_171935_` (`ParticleOptions`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### postMoveUpdate

```java
protected void postMoveUpdate()
```

### FallAndLandParticle

```java
 FallAndLandParticle(ClientLevel p_106116_, double p_106117_, double p_106118_, double p_106119_, Fluid p_106120_, ParticleOptions p_106121_)
```

**Parameters:**

- `p_106116_` (`ClientLevel`)
- `p_106117_` (`double`)
- `p_106118_` (`double`)
- `p_106119_` (`double`)
- `p_106120_` (`Fluid`)
- `p_106121_` (`ParticleOptions`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### postMoveUpdate

```java
protected void postMoveUpdate()
```

### FallingParticle

```java
 FallingParticle(ClientLevel p_106132_, double p_106133_, double p_106134_, double p_106135_, Fluid p_106136_)
```

**Parameters:**

- `p_106132_` (`ClientLevel`)
- `p_106133_` (`double`)
- `p_106134_` (`double`)
- `p_106135_` (`double`)
- `p_106136_` (`Fluid`)

**Returns:** ``

### FallingParticle

```java
 FallingParticle(ClientLevel p_172022_, double p_172023_, double p_172024_, double p_172025_, Fluid p_172026_, int p_172027_)
```

**Parameters:**

- `p_172022_` (`ClientLevel`)
- `p_172023_` (`double`)
- `p_172024_` (`double`)
- `p_172025_` (`double`)
- `p_172026_` (`Fluid`)
- `p_172027_` (`int`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### postMoveUpdate

```java
protected void postMoveUpdate()
```

### HoneyFallAndLandParticle

```java
 HoneyFallAndLandParticle(ClientLevel p_106146_, double p_106147_, double p_106148_, double p_106149_, Fluid p_106150_, ParticleOptions p_106151_)
```

**Parameters:**

- `p_106146_` (`ClientLevel`)
- `p_106147_` (`double`)
- `p_106148_` (`double`)
- `p_106149_` (`double`)
- `p_106150_` (`Fluid`)
- `p_106151_` (`ParticleOptions`)

**Returns:** ``

### super

```java
 super()
```

**Returns:** ``

### postMoveUpdate

```java
protected void postMoveUpdate()
```
