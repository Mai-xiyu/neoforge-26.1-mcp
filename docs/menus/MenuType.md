# MenuType

**Package:** `net.minecraft.world.inventory`
**Type:** class<T extends AbstractContainerMenu> implements FeatureElement, net.neoforged.neoforge.common.extensions.IMenuTypeExtension<T>

## Fields

| Name | Type | Description |
|------|------|-------------|
| `GENERIC_9x1` | `MenuType<ChestMenu>` |  |
| `GENERIC_9x2` | `MenuType<ChestMenu>` |  |
| `GENERIC_9x3` | `MenuType<ChestMenu>` |  |
| `GENERIC_9x4` | `MenuType<ChestMenu>` |  |
| `GENERIC_9x5` | `MenuType<ChestMenu>` |  |
| `GENERIC_9x6` | `MenuType<ChestMenu>` |  |
| `GENERIC_3x3` | `MenuType<DispenserMenu>` |  |
| `CRAFTER_3x3` | `MenuType<CrafterMenu>` |  |
| `ANVIL` | `MenuType<AnvilMenu>` |  |
| `BEACON` | `MenuType<BeaconMenu>` |  |
| `BLAST_FURNACE` | `MenuType<BlastFurnaceMenu>` |  |
| `BREWING_STAND` | `MenuType<BrewingStandMenu>` |  |
| `CRAFTING` | `MenuType<CraftingMenu>` |  |
| `ENCHANTMENT` | `MenuType<EnchantmentMenu>` |  |
| `FURNACE` | `MenuType<FurnaceMenu>` |  |
| `GRINDSTONE` | `MenuType<GrindstoneMenu>` |  |
| `HOPPER` | `MenuType<HopperMenu>` |  |
| `LECTERN` | `MenuType<LecternMenu>` |  |
| `LOOM` | `MenuType<LoomMenu>` |  |
| `MERCHANT` | `MenuType<MerchantMenu>` |  |
| `SHULKER_BOX` | `MenuType<ShulkerBoxMenu>` |  |
| `SMITHING` | `MenuType<SmithingMenu>` |  |
| `SMOKER` | `MenuType<SmokerMenu>` |  |
| `CARTOGRAPHY_TABLE` | `MenuType<CartographyTableMenu>` |  |
| `STONECUTTER` | `MenuType<StonecutterMenu>` |  |

## Methods

### register

```java
<T extends AbstractContainerMenu> private static <T extends AbstractContainerMenu> MenuType<T> register(String p_39989_, MenuType.MenuSupplier<T> p_39990_)
```

**Parameters:**

- `p_39989_` (`String`)
- `p_39990_` (`MenuType.MenuSupplier<T>`)

**Returns:** `private static <T extends AbstractContainerMenu> MenuType<T>`

### register

```java
<T extends AbstractContainerMenu> private static <T extends AbstractContainerMenu> MenuType<T> register(String p_267295_, MenuType.MenuSupplier<T> p_266945_, FeatureFlag[]... p_267055_)
```

**Parameters:**

- `p_267295_` (`String`)
- `p_266945_` (`MenuType.MenuSupplier<T>`)
- `p_267055_` (`FeatureFlag[]...`)

**Returns:** `private static <T extends AbstractContainerMenu> MenuType<T>`

### MenuType

```java
public MenuType(MenuType.MenuSupplier<T> p_267054_, FeatureFlagSet p_266909_)
```

**Parameters:**

- `p_267054_` (`MenuType.MenuSupplier<T>`)
- `p_266909_` (`FeatureFlagSet`)

**Returns:** `public`

### create

```java
public T create(int p_39986_, Inventory p_39987_)
```

**Parameters:**

- `p_39986_` (`int`)
- `p_39987_` (`Inventory`)

**Returns:** `public T`

### create

```java
public T create(int windowId, Inventory playerInv, net.minecraft.network.RegistryFriendlyByteBuf extraData)
```

**Parameters:**

- `windowId` (`int`)
- `playerInv` (`Inventory`)
- `extraData` (`net.minecraft.network.RegistryFriendlyByteBuf`)

**Returns:** `T`

### create

```java
return create()
```

**Returns:** `return`

### requiredFeatures

```java
public FeatureFlagSet requiredFeatures()
```

**Returns:** `FeatureFlagSet`

### create

```java
T create(int p_39995_, Inventory p_39996_)
```

**Parameters:**

- `p_39995_` (`int`)
- `p_39996_` (`Inventory`)

**Returns:** `T`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `MenuSupplier` | interface |  |
