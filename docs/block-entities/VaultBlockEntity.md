# VaultBlockEntity

**Package:** `net.minecraft.world.level.block.entity.vault`
**Type:** class
**Extends:** `BlockEntity`

## Methods

### VaultBlockEntity

```java
public VaultBlockEntity(BlockPos p_324016_, BlockState p_324022_)
```

**Parameters:**

- `p_324016_` (`BlockPos`)
- `p_324022_` (`BlockState`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### getUpdatePacket

```java
public Packet<ClientGamePacketListener> getUpdatePacket()
```

**Returns:** `Packet<ClientGamePacketListener>`

### getUpdateTag

```java
public CompoundTag getUpdateTag(HolderLookup.Provider p_324118_)
```

**Parameters:**

- `p_324118_` (`HolderLookup.Provider`)

**Returns:** `CompoundTag`

### saveAdditional

```java
protected void saveAdditional(CompoundTag p_323998_, HolderLookup.Provider p_324356_)
```

**Parameters:**

- `p_323998_` (`CompoundTag`)
- `p_324356_` (`HolderLookup.Provider`)

### encode

```java
<T> private static <T> Tag encode(Codec<T> p_324465_, T p_324338_, HolderLookup.Provider p_331118_)
```

**Parameters:**

- `p_324465_` (`Codec<T>`)
- `p_324338_` (`T`)
- `p_331118_` (`HolderLookup.Provider`)

**Returns:** `private static <T> Tag`

### loadAdditional

```java
protected void loadAdditional(CompoundTag p_324011_, HolderLookup.Provider p_324430_)
```

**Parameters:**

- `p_324011_` (`CompoundTag`)
- `p_324430_` (`HolderLookup.Provider`)

### getServerData

```java
public VaultServerData getServerData()
```

**Returns:** `VaultServerData`

### getSharedData

```java
public VaultSharedData getSharedData()
```

**Returns:** `public VaultSharedData`

### getClientData

```java
public VaultClientData getClientData()
```

**Returns:** `public VaultClientData`

### getConfig

```java
public VaultConfig getConfig()
```

**Returns:** `public VaultConfig`

### setConfig

```java
public void setConfig(VaultConfig p_324010_)
```

**Parameters:**

- `p_324010_` (`VaultConfig`)

### tick

```java
public static void tick(Level p_324312_, BlockPos p_323810_, BlockState p_323862_, VaultClientData p_324314_, VaultSharedData p_323914_)
```

**Parameters:**

- `p_324312_` (`Level`)
- `p_323810_` (`BlockPos`)
- `p_323862_` (`BlockState`)
- `p_324314_` (`VaultClientData`)
- `p_323914_` (`VaultSharedData`)

**Returns:** `public static void`

### emitConnectionParticlesForNearbyPlayers

```java
 emitConnectionParticlesForNearbyPlayers()
```

**Returns:** ``

### playIdleSounds

```java
 playIdleSounds()
```

**Returns:** ``

### emitActivationParticles

```java
public static void emitActivationParticles(Level p_323761_, BlockPos p_324150_, BlockState p_324527_, VaultSharedData p_324466_, ParticleOptions p_338551_)
```

**Parameters:**

- `p_323761_` (`Level`)
- `p_324150_` (`BlockPos`)
- `p_324527_` (`BlockState`)
- `p_324466_` (`VaultSharedData`)
- `p_338551_` (`ParticleOptions`)

**Returns:** `public static void`

### emitConnectionParticlesForNearbyPlayers

```java
 emitConnectionParticlesForNearbyPlayers()
```

**Returns:** ``

### emitDeactivationParticles

```java
public static void emitDeactivationParticles(Level p_324419_, BlockPos p_324587_, ParticleOptions p_338582_)
```

**Parameters:**

- `p_324419_` (`Level`)
- `p_324587_` (`BlockPos`)
- `p_338582_` (`ParticleOptions`)

**Returns:** `public static void`

### emitIdleParticles

```java
private static void emitIdleParticles(Level p_324004_, BlockPos p_324516_, VaultSharedData p_324173_, ParticleOptions p_338823_)
```

**Parameters:**

- `p_324004_` (`Level`)
- `p_324516_` (`BlockPos`)
- `p_324173_` (`VaultSharedData`)
- `p_338823_` (`ParticleOptions`)

**Returns:** `private static void`

### emitConnectionParticlesForPlayer

```java
private static void emitConnectionParticlesForPlayer(Level p_323629_, Vec3 p_324592_, Player p_324428_)
```

**Parameters:**

- `p_323629_` (`Level`)
- `p_324592_` (`Vec3`)
- `p_324428_` (`Player`)

**Returns:** `private static void`

### emitConnectionParticlesForNearbyPlayers

```java
private static void emitConnectionParticlesForNearbyPlayers(Level p_324593_, BlockPos p_324162_, BlockState p_324246_, VaultSharedData p_323584_)
```

**Parameters:**

- `p_324593_` (`Level`)
- `p_324162_` (`BlockPos`)
- `p_324246_` (`BlockState`)
- `p_323584_` (`VaultSharedData`)

**Returns:** `private static void`

### emitConnectionParticlesForPlayer

```java
 emitConnectionParticlesForPlayer()
```

**Returns:** ``

### isWithinConnectionRange

```java
private static boolean isWithinConnectionRange(BlockPos p_324081_, VaultSharedData p_323688_, Player p_324438_)
```

**Parameters:**

- `p_324081_` (`BlockPos`)
- `p_323688_` (`VaultSharedData`)
- `p_324438_` (`Player`)

**Returns:** `private static boolean`

### playIdleSounds

```java
private static void playIdleSounds(Level p_323802_, BlockPos p_323510_, VaultSharedData p_324457_)
```

**Parameters:**

- `p_323802_` (`Level`)
- `p_323510_` (`BlockPos`)
- `p_324457_` (`VaultSharedData`)

**Returns:** `private static void`

### shouldDisplayActiveEffects

```java
public static boolean shouldDisplayActiveEffects(VaultSharedData p_323681_)
```

**Parameters:**

- `p_323681_` (`VaultSharedData`)

**Returns:** `public static boolean`

### randomPosCenterOfCage

```java
private static Vec3 randomPosCenterOfCage(BlockPos p_323493_, RandomSource p_324481_)
```

**Parameters:**

- `p_323493_` (`BlockPos`)
- `p_324481_` (`RandomSource`)

**Returns:** `private static Vec3`

### randomPosInsideCage

```java
private static Vec3 randomPosInsideCage(BlockPos p_324080_, RandomSource p_324532_)
```

**Parameters:**

- `p_324080_` (`BlockPos`)
- `p_324532_` (`RandomSource`)

**Returns:** `private static Vec3`

### keyholePos

```java
private static Vec3 keyholePos(BlockPos p_323572_, Direction p_324503_)
```

**Parameters:**

- `p_323572_` (`BlockPos`)
- `p_324503_` (`Direction`)

**Returns:** `private static Vec3`

### tick

```java
public static void tick(ServerLevel p_323841_, BlockPos p_324265_, BlockState p_324343_, VaultConfig p_324129_, VaultServerData p_324579_, VaultSharedData p_324317_)
```

**Parameters:**

- `p_323841_` (`ServerLevel`)
- `p_324265_` (`BlockPos`)
- `p_324343_` (`BlockState`)
- `p_324129_` (`VaultConfig`)
- `p_324579_` (`VaultServerData`)
- `p_324317_` (`VaultSharedData`)

**Returns:** `public static void`

### cycleDisplayItemFromLootTable

```java
 cycleDisplayItemFromLootTable()
```

**Returns:** ``

### setVaultState

```java
 setVaultState()
```

**Returns:** ``

### tryInsertKey

```java
public static void tryInsertKey(ServerLevel p_323533_, BlockPos p_323777_, BlockState p_324589_, VaultConfig p_323660_, VaultServerData p_323829_, VaultSharedData p_324341_, Player p_324373_, ItemStack p_324551_)
```

**Parameters:**

- `p_323533_` (`ServerLevel`)
- `p_323777_` (`BlockPos`)
- `p_324589_` (`BlockState`)
- `p_323660_` (`VaultConfig`)
- `p_323829_` (`VaultServerData`)
- `p_324341_` (`VaultSharedData`)
- `p_324373_` (`Player`)
- `p_324551_` (`ItemStack`)

**Returns:** `public static void`

### playInsertFailSound

```java
 playInsertFailSound()
```

**Returns:** ``

### playInsertFailSound

```java
 playInsertFailSound()
```

**Returns:** ``

### unlock

```java
 unlock()
```

**Returns:** ``

### setVaultState

```java
static void setVaultState(ServerLevel p_324091_, BlockPos p_324620_, BlockState p_323759_, BlockState p_324027_, VaultConfig p_324140_, VaultSharedData p_323624_)
```

**Parameters:**

- `p_324091_` (`ServerLevel`)
- `p_324620_` (`BlockPos`)
- `p_323759_` (`BlockState`)
- `p_324027_` (`BlockState`)
- `p_324140_` (`VaultConfig`)
- `p_323624_` (`VaultSharedData`)

**Returns:** `static void`

### cycleDisplayItemFromLootTable

```java
static void cycleDisplayItemFromLootTable(ServerLevel p_323551_, VaultState p_324221_, VaultConfig p_324332_, VaultSharedData p_323644_, BlockPos p_323602_)
```

**Parameters:**

- `p_323551_` (`ServerLevel`)
- `p_324221_` (`VaultState`)
- `p_324332_` (`VaultConfig`)
- `p_323644_` (`VaultSharedData`)
- `p_323602_` (`BlockPos`)

**Returns:** `static void`

### getRandomDisplayItemFromLootTable

```java
private static ItemStack getRandomDisplayItemFromLootTable(ServerLevel p_323781_, BlockPos p_324109_, ResourceKey<LootTable> p_336119_)
```

**Parameters:**

- `p_323781_` (`ServerLevel`)
- `p_324109_` (`BlockPos`)
- `p_336119_` (`ResourceKey<LootTable>`)

**Returns:** `private static ItemStack`

### unlock

```java
private static void unlock(ServerLevel p_323501_, BlockState p_323758_, BlockPos p_323773_, VaultConfig p_324195_, VaultServerData p_324600_, VaultSharedData p_324277_, List<ItemStack> p_324574_)
```

**Parameters:**

- `p_323501_` (`ServerLevel`)
- `p_323758_` (`BlockState`)
- `p_323773_` (`BlockPos`)
- `p_324195_` (`VaultConfig`)
- `p_324600_` (`VaultServerData`)
- `p_324277_` (`VaultSharedData`)
- `p_324574_` (`List<ItemStack>`)

**Returns:** `private static void`

### resolveItemsToEject

```java
private static List<ItemStack> resolveItemsToEject(ServerLevel p_323877_, VaultConfig p_324041_, BlockPos p_324255_, Player p_324347_)
```

**Parameters:**

- `p_323877_` (`ServerLevel`)
- `p_324041_` (`VaultConfig`)
- `p_324255_` (`BlockPos`)
- `p_324347_` (`Player`)

**Returns:** `private static List<ItemStack>`

### canEjectReward

```java
private static boolean canEjectReward(VaultConfig p_323595_, VaultState p_324160_)
```

**Parameters:**

- `p_323595_` (`VaultConfig`)
- `p_324160_` (`VaultState`)

**Returns:** `private static boolean`

### isValidToInsert

```java
private static boolean isValidToInsert(VaultConfig p_323488_, ItemStack p_324101_)
```

**Parameters:**

- `p_323488_` (`VaultConfig`)
- `p_324101_` (`ItemStack`)

**Returns:** `private static boolean`

### shouldCycleDisplayItem

```java
private static boolean shouldCycleDisplayItem(long p_323548_, VaultState p_323823_)
```

**Parameters:**

- `p_323548_` (`long`)
- `p_323823_` (`VaultState`)

**Returns:** `private static boolean`

### playInsertFailSound

```java
private static void playInsertFailSound(ServerLevel p_324555_, VaultServerData p_324017_, BlockPos p_324186_, SoundEvent p_350407_)
```

**Parameters:**

- `p_324555_` (`ServerLevel`)
- `p_324017_` (`VaultServerData`)
- `p_324186_` (`BlockPos`)
- `p_350407_` (`SoundEvent`)

**Returns:** `private static void`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Client` | class |  |
| `Server` | class |  |
