# ArmorMaterials

**Package:** `net.minecraft.world.item`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LEATHER` | `Holder<ArmorMaterial>` |  |
| `CHAIN` | `Holder<ArmorMaterial>` |  |
| `IRON` | `Holder<ArmorMaterial>` |  |
| `GOLD` | `Holder<ArmorMaterial>` |  |
| `DIAMOND` | `Holder<ArmorMaterial>` |  |
| `TURTLE` | `Holder<ArmorMaterial>` |  |
| `NETHERITE` | `Holder<ArmorMaterial>` |  |
| `ARMADILLO` | `Holder<ArmorMaterial>` |  |

## Methods

### bootstrap

```java
public static Holder<ArmorMaterial> bootstrap(Registry<ArmorMaterial> p_323827_)
```

**Parameters:**

- `p_323827_` (`Registry<ArmorMaterial>`)

**Returns:** `public static Holder<ArmorMaterial>`

### register

```java
private static Holder<ArmorMaterial> register(String p_323589_, EnumMap<ArmorItem.Type, Integer> p_323819_, int p_323636_, Holder<SoundEvent> p_323958_, float p_323937_, float p_323731_, Supplier<Ingredient> p_323970_)
```

**Parameters:**

- `p_323589_` (`String`)
- `p_323819_` (`EnumMap<ArmorItem.Type, Integer>`)
- `p_323636_` (`int`)
- `p_323958_` (`Holder<SoundEvent>`)
- `p_323937_` (`float`)
- `p_323731_` (`float`)
- `p_323970_` (`Supplier<Ingredient>`)

**Returns:** `private static Holder<ArmorMaterial>`

### register

```java
return register()
```

**Returns:** `return`

### register

```java
private static Holder<ArmorMaterial> register(String p_323865_, EnumMap<ArmorItem.Type, Integer> p_324599_, int p_324319_, Holder<SoundEvent> p_324145_, float p_323494_, float p_324549_, Supplier<Ingredient> p_323845_, List<ArmorMaterial.Layer> p_323990_)
```

**Parameters:**

- `p_323865_` (`String`)
- `p_324599_` (`EnumMap<ArmorItem.Type, Integer>`)
- `p_324319_` (`int`)
- `p_324145_` (`Holder<SoundEvent>`)
- `p_323494_` (`float`)
- `p_324549_` (`float`)
- `p_323845_` (`Supplier<Ingredient>`)
- `p_323990_` (`List<ArmorMaterial.Layer>`)

**Returns:** `private static Holder<ArmorMaterial>`
