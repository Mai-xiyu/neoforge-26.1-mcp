# BucketPickup

**Package:** `net.minecraft.world.level.block`
**Type:** interface
**Extends:** `net.neoforged.neoforge.common.extensions.IBucketPickupExtension`

## Methods

### pickupBlock

```java
ItemStack pickupBlock(Player p_294682_, LevelAccessor p_152719_, BlockPos p_152720_, BlockState p_152721_)
```

**Parameters:**

- `p_294682_` (`Player`)
- `p_152719_` (`LevelAccessor`)
- `p_152720_` (`BlockPos`)
- `p_152721_` (`BlockState`)

**Returns:** `ItemStack`

### getPickupSound ⚠️ *Deprecated*

```java
Use state sensitive variant instead
    Optional<SoundEvent> getPickupSound()
```

**Returns:** `Use state sensitive variant instead
    Optional<SoundEvent>`
