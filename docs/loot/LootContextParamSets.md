# LootContextParamSets

**Package:** `net.minecraft.world.level.storage.loot.parameters`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<LootContextParamSet>` |  |
| `EMPTY` | `LootContextParamSet` |  |
| `CHEST` | `LootContextParamSet` |  |
| `COMMAND` | `LootContextParamSet` |  |
| `SELECTOR` | `LootContextParamSet` |  |
| `FISHING` | `LootContextParamSet` |  |
| `ENTITY` | `LootContextParamSet` |  |
| `EQUIPMENT` | `LootContextParamSet` |  |
| `ARCHAEOLOGY` | `LootContextParamSet` |  |
| `GIFT` | `LootContextParamSet` |  |
| `PIGLIN_BARTER` | `LootContextParamSet` |  |
| `VAULT` | `LootContextParamSet` |  |
| `ADVANCEMENT_REWARD` | `LootContextParamSet` |  |
| `ADVANCEMENT_ENTITY` | `LootContextParamSet` |  |
| `ADVANCEMENT_LOCATION` | `LootContextParamSet` |  |
| `BLOCK_USE` | `LootContextParamSet` |  |
| `ALL_PARAMS` | `LootContextParamSet` |  |

## Methods

### register

```java
private static LootContextParamSet register(String p_81429_, Consumer<LootContextParamSet.Builder> p_81430_)
```

**Parameters:**

- `p_81429_` (`String`)
- `p_81430_` (`Consumer<LootContextParamSet.Builder>`)

**Returns:** `private static LootContextParamSet`

### IllegalStateException

```java
throw new IllegalStateException("Loot table parameter set " + resourcelocation + " is already registered")
```

**Parameters:**

- `registered"` (`"Loot table parameter set " + resourcelocation + " is already`)

**Returns:** `throw new`
