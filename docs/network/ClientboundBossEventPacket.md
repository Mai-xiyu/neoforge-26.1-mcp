# ClientboundBossEventPacket

**Package:** `net.minecraft.network.protocol.game`
**Type:** class
**Implements:** `Packet<ClientGamePacketListener>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `STREAM_CODEC` | `StreamCodec<RegistryFriendlyByteBuf, ClientboundBossEventPacket>` |  |

## Methods

### getType

```java
public ClientboundBossEventPacket.OperationType getType()
```

**Returns:** `ClientboundBossEventPacket.OperationType`

### dispatch

```java
public void dispatch(UUID p_178660_, ClientboundBossEventPacket.Handler p_178661_)
```

**Parameters:**

- `p_178660_` (`UUID`)
- `p_178661_` (`ClientboundBossEventPacket.Handler`)

### write

```java
public void write(RegistryFriendlyByteBuf p_324370_)
```

**Parameters:**

- `p_324370_` (`RegistryFriendlyByteBuf`)

### ClientboundBossEventPacket

```java
private ClientboundBossEventPacket(UUID p_178635_, ClientboundBossEventPacket.Operation p_178636_)
```

**Parameters:**

- `p_178635_` (`UUID`)
- `p_178636_` (`ClientboundBossEventPacket.Operation`)

**Returns:** `private`

### ClientboundBossEventPacket

```java
private ClientboundBossEventPacket(RegistryFriendlyByteBuf p_323842_)
```

**Parameters:**

- `p_323842_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### createAddPacket

```java
public static ClientboundBossEventPacket createAddPacket(BossEvent p_178640_)
```

**Parameters:**

- `p_178640_` (`BossEvent`)

**Returns:** `public static ClientboundBossEventPacket`

### createRemovePacket

```java
public static ClientboundBossEventPacket createRemovePacket(UUID p_178642_)
```

**Parameters:**

- `p_178642_` (`UUID`)

**Returns:** `public static ClientboundBossEventPacket`

### ClientboundBossEventPacket

```java
return new ClientboundBossEventPacket()
```

**Returns:** `return new`

### createUpdateProgressPacket

```java
public static ClientboundBossEventPacket createUpdateProgressPacket(BossEvent p_178650_)
```

**Parameters:**

- `p_178650_` (`BossEvent`)

**Returns:** `public static ClientboundBossEventPacket`

### createUpdateNamePacket

```java
public static ClientboundBossEventPacket createUpdateNamePacket(BossEvent p_178652_)
```

**Parameters:**

- `p_178652_` (`BossEvent`)

**Returns:** `public static ClientboundBossEventPacket`

### createUpdateStylePacket

```java
public static ClientboundBossEventPacket createUpdateStylePacket(BossEvent p_178654_)
```

**Parameters:**

- `p_178654_` (`BossEvent`)

**Returns:** `public static ClientboundBossEventPacket`

### createUpdatePropertiesPacket

```java
public static ClientboundBossEventPacket createUpdatePropertiesPacket(BossEvent p_178656_)
```

**Parameters:**

- `p_178656_` (`BossEvent`)

**Returns:** `public static ClientboundBossEventPacket`

### write

```java
private void write(RegistryFriendlyByteBuf p_323879_)
```

**Parameters:**

- `p_323879_` (`RegistryFriendlyByteBuf`)

**Returns:** `private void`

### encodeProperties

```java
static int encodeProperties(boolean p_178646_, boolean p_178647_, boolean p_178648_)
```

**Parameters:**

- `p_178646_` (`boolean`)
- `p_178647_` (`boolean`)
- `p_178648_` (`boolean`)

**Returns:** `static int`

### type

```java
public PacketType<ClientboundBossEventPacket> type()
```

**Returns:** `PacketType<ClientboundBossEventPacket>`

### handle

```java
public void handle(ClientGamePacketListener p_131770_)
```

**Parameters:**

- `p_131770_` (`ClientGamePacketListener`)

**Returns:** `public void`

### dispatch

```java
public void dispatch(ClientboundBossEventPacket.Handler p_178644_)
```

**Parameters:**

- `p_178644_` (`ClientboundBossEventPacket.Handler`)

**Returns:** `public void`

### AddOperation

```java
 AddOperation(BossEvent p_178672_)
```

**Parameters:**

- `p_178672_` (`BossEvent`)

**Returns:** ``

### AddOperation

```java
private AddOperation(RegistryFriendlyByteBuf p_324153_)
```

**Parameters:**

- `p_324153_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### getType

```java
public ClientboundBossEventPacket.OperationType getType()
```

**Returns:** `ClientboundBossEventPacket.OperationType`

### dispatch

```java
public void dispatch(UUID p_178677_, ClientboundBossEventPacket.Handler p_178678_)
```

**Parameters:**

- `p_178677_` (`UUID`)
- `p_178678_` (`ClientboundBossEventPacket.Handler`)

### write

```java
public void write(RegistryFriendlyByteBuf p_323847_)
```

**Parameters:**

- `p_323847_` (`RegistryFriendlyByteBuf`)

### add

```java
default void add(UUID p_178689_, Component p_178690_, float p_178691_, BossEvent.BossBarColor p_178692_, BossEvent.BossBarOverlay p_178693_, boolean p_178694_, boolean p_178695_, boolean p_178696_)
```

**Parameters:**

- `p_178689_` (`UUID`)
- `p_178690_` (`Component`)
- `p_178691_` (`float`)
- `p_178692_` (`BossEvent.BossBarColor`)
- `p_178693_` (`BossEvent.BossBarOverlay`)
- `p_178694_` (`boolean`)
- `p_178695_` (`boolean`)
- `p_178696_` (`boolean`)

**Returns:** `default void`

### remove

```java
default void remove(UUID p_178681_)
```

**Parameters:**

- `p_178681_` (`UUID`)

**Returns:** `default void`

### updateProgress

```java
default void updateProgress(UUID p_178682_, float p_178683_)
```

**Parameters:**

- `p_178682_` (`UUID`)
- `p_178683_` (`float`)

**Returns:** `default void`

### updateName

```java
default void updateName(UUID p_178687_, Component p_178688_)
```

**Parameters:**

- `p_178687_` (`UUID`)
- `p_178688_` (`Component`)

**Returns:** `default void`

### updateStyle

```java
default void updateStyle(UUID p_178684_, BossEvent.BossBarColor p_178685_, BossEvent.BossBarOverlay p_178686_)
```

**Parameters:**

- `p_178684_` (`UUID`)
- `p_178685_` (`BossEvent.BossBarColor`)
- `p_178686_` (`BossEvent.BossBarOverlay`)

**Returns:** `default void`

### updateProperties

```java
default void updateProperties(UUID p_178697_, boolean p_178698_, boolean p_178699_, boolean p_178700_)
```

**Parameters:**

- `p_178697_` (`UUID`)
- `p_178698_` (`boolean`)
- `p_178699_` (`boolean`)
- `p_178700_` (`boolean`)

**Returns:** `default void`

### getType

```java
ClientboundBossEventPacket.OperationType getType()
```

**Returns:** `ClientboundBossEventPacket.OperationType`

### dispatch

```java
void dispatch(UUID p_178701_, ClientboundBossEventPacket.Handler p_178702_)
```

**Parameters:**

- `p_178701_` (`UUID`)
- `p_178702_` (`ClientboundBossEventPacket.Handler`)

### write

```java
void write(RegistryFriendlyByteBuf p_324432_)
```

**Parameters:**

- `p_324432_` (`RegistryFriendlyByteBuf`)

### UPDATE_PROPERTIES

```java
, UPDATE_PROPERTIES()
```

**Returns:** `,`

### OperationType

```java
private OperationType(StreamDecoder<RegistryFriendlyByteBuf, ClientboundBossEventPacket.Operation> p_324602_)
```

**Parameters:**

- `p_324602_` (`StreamDecoder<RegistryFriendlyByteBuf, ClientboundBossEventPacket.Operation>`)

**Returns:** `private`

### UpdateNameOperation

```java
private UpdateNameOperation(RegistryFriendlyByteBuf p_323813_)
```

**Parameters:**

- `p_323813_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### getType

```java
public ClientboundBossEventPacket.OperationType getType()
```

**Returns:** `ClientboundBossEventPacket.OperationType`

### dispatch

```java
public void dispatch(UUID p_178730_, ClientboundBossEventPacket.Handler p_178731_)
```

**Parameters:**

- `p_178730_` (`UUID`)
- `p_178731_` (`ClientboundBossEventPacket.Handler`)

### write

```java
public void write(RegistryFriendlyByteBuf p_324336_)
```

**Parameters:**

- `p_324336_` (`RegistryFriendlyByteBuf`)

### UpdateProgressOperation

```java
private UpdateProgressOperation(RegistryFriendlyByteBuf p_324271_)
```

**Parameters:**

- `p_324271_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### getType

```java
public ClientboundBossEventPacket.OperationType getType()
```

**Returns:** `ClientboundBossEventPacket.OperationType`

### dispatch

```java
public void dispatch(UUID p_178741_, ClientboundBossEventPacket.Handler p_178742_)
```

**Parameters:**

- `p_178741_` (`UUID`)
- `p_178742_` (`ClientboundBossEventPacket.Handler`)

### write

```java
public void write(RegistryFriendlyByteBuf p_324333_)
```

**Parameters:**

- `p_324333_` (`RegistryFriendlyByteBuf`)

### UpdatePropertiesOperation

```java
 UpdatePropertiesOperation(boolean p_178751_, boolean p_178752_, boolean p_178753_)
```

**Parameters:**

- `p_178751_` (`boolean`)
- `p_178752_` (`boolean`)
- `p_178753_` (`boolean`)

**Returns:** ``

### UpdatePropertiesOperation

```java
private UpdatePropertiesOperation(RegistryFriendlyByteBuf p_323654_)
```

**Parameters:**

- `p_323654_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### getType

```java
public ClientboundBossEventPacket.OperationType getType()
```

**Returns:** `ClientboundBossEventPacket.OperationType`

### dispatch

```java
public void dispatch(UUID p_178756_, ClientboundBossEventPacket.Handler p_178757_)
```

**Parameters:**

- `p_178756_` (`UUID`)
- `p_178757_` (`ClientboundBossEventPacket.Handler`)

### write

```java
public void write(RegistryFriendlyByteBuf p_323597_)
```

**Parameters:**

- `p_323597_` (`RegistryFriendlyByteBuf`)

### UpdateStyleOperation

```java
 UpdateStyleOperation(BossEvent.BossBarColor p_178763_, BossEvent.BossBarOverlay p_178764_)
```

**Parameters:**

- `p_178763_` (`BossEvent.BossBarColor`)
- `p_178764_` (`BossEvent.BossBarOverlay`)

**Returns:** ``

### UpdateStyleOperation

```java
private UpdateStyleOperation(RegistryFriendlyByteBuf p_323966_)
```

**Parameters:**

- `p_323966_` (`RegistryFriendlyByteBuf`)

**Returns:** `private`

### getType

```java
public ClientboundBossEventPacket.OperationType getType()
```

**Returns:** `ClientboundBossEventPacket.OperationType`

### dispatch

```java
public void dispatch(UUID p_178769_, ClientboundBossEventPacket.Handler p_178770_)
```

**Parameters:**

- `p_178769_` (`UUID`)
- `p_178770_` (`ClientboundBossEventPacket.Handler`)

### write

```java
public void write(RegistryFriendlyByteBuf p_323961_)
```

**Parameters:**

- `p_323961_` (`RegistryFriendlyByteBuf`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Handler` | interface |  |
