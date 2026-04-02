# SetOminousBottleAmplifierFunction

**Package:** `net.minecraft.world.level.storage.loot.functions`
**Type:** class
**Extends:** `LootItemConditionalFunction`

## Methods

### SetOminousBottleAmplifierFunction

```java
private SetOminousBottleAmplifierFunction(List<LootItemCondition> p_338757_, NumberProvider p_338865_)
```

**Parameters:**

- `p_338757_` (`List<LootItemCondition>`)
- `p_338865_` (`NumberProvider`)

**Returns:** `private`

### super

```java
 super()
```

**Returns:** ``

### getReferencedContextParams

```java
public Set<LootContextParam<?>> getReferencedContextParams()
```

**Returns:** `Set<LootContextParam<?>>`

### getType

```java
public LootItemFunctionType<SetOminousBottleAmplifierFunction> getType()
```

**Returns:** `LootItemFunctionType<SetOminousBottleAmplifierFunction>`

### run

```java
public ItemStack run(ItemStack p_338554_, LootContext p_338336_)
```

**Parameters:**

- `p_338554_` (`ItemStack`)
- `p_338336_` (`LootContext`)

**Returns:** `ItemStack`

### amplifier

```java
public NumberProvider amplifier()
```

**Returns:** `public NumberProvider`

### setAmplifier

```java
public static LootItemConditionalFunction.Builder<?> setAmplifier(NumberProvider p_338338_)
```

**Parameters:**

- `p_338338_` (`NumberProvider`)

**Returns:** `public static LootItemConditionalFunction.Builder<?>`
