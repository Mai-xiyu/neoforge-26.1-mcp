# SetFireworksFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `MapCodec<SetFireworksFunction>` |  |
| `DEFAULT_VALUE` | `Fireworks` |  |

## Methods

### SetFireworksFunction

```java
public SetFireworksFunction(List<LootItemCondition> p_333807_, Optional<ListOperation.StandAlone<FireworkExplosion>> p_333866_, Optional<Integer> p_341606_)
```

**Parameters:**

- `p_333807_` (`List<LootItemCondition>`)
- `p_333866_` (`Optional<ListOperation.StandAlone<FireworkExplosion>>`)
- `p_341606_` (`Optional<Integer>`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### run

```java
protected ItemStack run(ItemStack p_334053_, LootContext p_333744_)
```

**Parameters:**

- `p_334053_` (`ItemStack`)
- `p_333744_` (`LootContext`)

**Returns:** `ItemStack`

### apply

```java
private Fireworks apply(Fireworks p_333768_)
```

**Parameters:**

- `p_333768_` (`Fireworks`)

**Returns:** `private Fireworks`

### getType

```java
public LootItemFunctionType<SetFireworksFunction> getType()
```

**Returns:** `LootItemFunctionType<SetFireworksFunction>`
