# EntityDataSerializers

**Package:** `net.minecraft.network.syncher`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `BYTE` | `EntityDataSerializer<Byte>` |  |
| `INT` | `EntityDataSerializer<Integer>` |  |
| `LONG` | `EntityDataSerializer<Long>` |  |
| `FLOAT` | `EntityDataSerializer<Float>` |  |
| `STRING` | `EntityDataSerializer<String>` |  |
| `COMPONENT` | `EntityDataSerializer<Component>` |  |
| `OPTIONAL_COMPONENT` | `EntityDataSerializer<Optional<Component>>` |  |
| `ITEM_STACK` | `EntityDataSerializer<ItemStack>` |  |
| `BLOCK_STATE` | `EntityDataSerializer<BlockState>` |  |
| `OPTIONAL_BLOCK_STATE` | `EntityDataSerializer<Optional<BlockState>>` |  |
| `BOOLEAN` | `EntityDataSerializer<Boolean>` |  |
| `PARTICLE` | `EntityDataSerializer<ParticleOptions>` |  |
| `PARTICLES` | `EntityDataSerializer<List<ParticleOptions>>` |  |
| `ROTATIONS` | `EntityDataSerializer<Rotations>` |  |
| `BLOCK_POS` | `EntityDataSerializer<BlockPos>` |  |
| `OPTIONAL_BLOCK_POS` | `EntityDataSerializer<Optional<BlockPos>>` |  |
| `DIRECTION` | `EntityDataSerializer<Direction>` |  |
| `OPTIONAL_UUID` | `EntityDataSerializer<Optional<UUID>>` |  |
| `OPTIONAL_GLOBAL_POS` | `EntityDataSerializer<Optional<GlobalPos>>` |  |
| `COMPOUND_TAG` | `EntityDataSerializer<CompoundTag>` |  |
| `VILLAGER_DATA` | `EntityDataSerializer<VillagerData>` |  |
| `OPTIONAL_UNSIGNED_INT` | `EntityDataSerializer<OptionalInt>` |  |

## Methods

### codec

```java
public StreamCodec<? super RegistryFriendlyByteBuf, ItemStack> codec()
```

**Returns:** `StreamCodec<? super RegistryFriendlyByteBuf, ItemStack>`

### copy

```java
public ItemStack copy(ItemStack p_238121_)
```

**Parameters:**

- `p_238121_` (`ItemStack`)

**Returns:** `public ItemStack`

### encode

```java
public void encode(ByteBuf p_319957_, Optional<BlockState> p_319966_)
```

**Parameters:**

- `p_319957_` (`ByteBuf`)
- `p_319966_` (`Optional<BlockState>`)

**Returns:** `public void`

### decode

```java
public Optional<BlockState> decode(ByteBuf p_320226_)
```

**Parameters:**

- `p_320226_` (`ByteBuf`)

**Returns:** `public Optional<BlockState>`

### codec

```java
public StreamCodec<? super RegistryFriendlyByteBuf, CompoundTag> codec()
```

**Returns:** `StreamCodec<? super RegistryFriendlyByteBuf, CompoundTag>`

### copy

```java
public CompoundTag copy(CompoundTag p_319777_)
```

**Parameters:**

- `p_319777_` (`CompoundTag`)

**Returns:** `public CompoundTag`

### decode

```java
public OptionalInt decode(ByteBuf p_320752_)
```

**Parameters:**

- `p_320752_` (`ByteBuf`)

**Returns:** `public OptionalInt`

### encode

```java
public void encode(ByteBuf p_320049_, OptionalInt p_320782_)
```

**Parameters:**

- `p_320049_` (`ByteBuf`)
- `p_320782_` (`OptionalInt`)

**Returns:** `public void`

### registerSerializer

```java
public static void registerSerializer(EntityDataSerializer<?> p_135051_)
```

**Parameters:**

- `p_135051_` (`EntityDataSerializer<?>`)

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Modded EntityDataSerializers must be registered to NeoForgeRegistries.ENTITY_DATA_SERIALIZERS instead to prevent ID mismatches between client and server!")
```

**Parameters:**

- `server!"` (`"Modded EntityDataSerializers must be registered to NeoForgeRegistries.ENTITY_DATA_SERIALIZERS instead to prevent ID mismatches between client and`)

**Returns:** `throw new`

### RuntimeException

```java
throw new RuntimeException("Vanilla EntityDataSerializer ID limit exceeded")
```

**Parameters:**

- `exceeded"` (`"Vanilla EntityDataSerializer ID limit`)

**Returns:** `throw new`

### getSerializer

```java
public static EntityDataSerializer<?> getSerializer(int p_135049_)
```

**Parameters:**

- `p_135049_` (`int`)

**Returns:** `EntityDataSerializer<?>`

### getSerializedId

```java
public static int getSerializedId(EntityDataSerializer<?> p_135053_)
```

**Parameters:**

- `p_135053_` (`EntityDataSerializer<?>`)

**Returns:** `public static int`

### EntityDataSerializers

```java
private EntityDataSerializers()
```

**Returns:** `private`

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``

### registerSerializer

```java
 registerSerializer()
```

**Returns:** ``
