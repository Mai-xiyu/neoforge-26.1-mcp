# TrimMaterials

**Package:** `net.minecraft.world.item.armortrim`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `QUARTZ` | `ResourceKey<TrimMaterial>` |  |
| `IRON` | `ResourceKey<TrimMaterial>` |  |
| `NETHERITE` | `ResourceKey<TrimMaterial>` |  |
| `REDSTONE` | `ResourceKey<TrimMaterial>` |  |
| `COPPER` | `ResourceKey<TrimMaterial>` |  |
| `GOLD` | `ResourceKey<TrimMaterial>` |  |
| `EMERALD` | `ResourceKey<TrimMaterial>` |  |
| `DIAMOND` | `ResourceKey<TrimMaterial>` |  |
| `LAPIS` | `ResourceKey<TrimMaterial>` |  |
| `AMETHYST` | `ResourceKey<TrimMaterial>` |  |

## Methods

### bootstrap

```java
public static void bootstrap(BootstrapContext<TrimMaterial> p_321806_)
```

**Parameters:**

- `p_321806_` (`BootstrapContext<TrimMaterial>`)

**Returns:** `public static void`

### getFromIngredient

```java
public static Optional<Holder.Reference<TrimMaterial>> getFromIngredient(HolderLookup.Provider p_335701_, ItemStack p_267327_)
```

**Parameters:**

- `p_335701_` (`HolderLookup.Provider`)
- `p_267327_` (`ItemStack`)

**Returns:** `public static Optional<Holder.Reference<TrimMaterial>>`

### register

```java
private static void register(BootstrapContext<TrimMaterial> p_321637_, ResourceKey<TrimMaterial> p_268293_, Item p_268156_, Style p_268174_, float p_268274_)
```

**Parameters:**

- `p_321637_` (`BootstrapContext<TrimMaterial>`)
- `p_268293_` (`ResourceKey<TrimMaterial>`)
- `p_268156_` (`Item`)
- `p_268174_` (`Style`)
- `p_268274_` (`float`)

**Returns:** `private static void`

### register

```java
private static void register(BootstrapContext<TrimMaterial> p_321693_, ResourceKey<TrimMaterial> p_268139_, Item p_268311_, Style p_268232_, float p_268197_, Map<Holder<ArmorMaterial>, String> p_268352_)
```

**Parameters:**

- `p_321693_` (`BootstrapContext<TrimMaterial>`)
- `p_268139_` (`ResourceKey<TrimMaterial>`)
- `p_268311_` (`Item`)
- `p_268232_` (`Style`)
- `p_268197_` (`float`)
- `p_268352_` (`Map<Holder<ArmorMaterial>, String>`)

**Returns:** `private static void`

### registryKey

```java
private static ResourceKey<TrimMaterial> registryKey(String p_266965_)
```

**Parameters:**

- `p_266965_` (`String`)

**Returns:** `private static ResourceKey<TrimMaterial>`
