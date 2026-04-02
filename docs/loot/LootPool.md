# LootPool

**Package:** `net.minecraft.world.level.storage.loot`
**Type:** class

## Fields

| Name | Type | Description |
|------|------|-------------|
| `CODEC` | `Codec<LootPool>` |  |

## Methods

### LootPool

```java
 LootPool(List<LootPoolEntryContainer> p_298764_, List<LootItemCondition> p_299316_, List<LootItemFunction> p_298954_, NumberProvider p_165131_, NumberProvider p_165132_, java.util.Optional<String> name)
```

**Parameters:**

- `p_298764_` (`List<LootPoolEntryContainer>`)
- `p_299316_` (`List<LootItemCondition>`)
- `p_298954_` (`List<LootItemFunction>`)
- `p_165131_` (`NumberProvider`)
- `p_165132_` (`NumberProvider`)
- `name` (`java.util.Optional<String>`)

**Returns:** ``

### addRandomItem

```java
private void addRandomItem(Consumer<ItemStack> p_79059_, LootContext p_79060_)
```

**Parameters:**

- `p_79059_` (`Consumer<ItemStack>`)
- `p_79060_` (`LootContext`)

**Returns:** `private void`

### addRandomItems

```java
public void addRandomItems(Consumer<ItemStack> p_79054_, LootContext p_79055_)
```

**Parameters:**

- `p_79054_` (`Consumer<ItemStack>`)
- `p_79055_` (`LootContext`)

**Returns:** `public void`

### validate

```java
public void validate(ValidationContext p_79052_)
```

**Parameters:**

- `p_79052_` (`ValidationContext`)

**Returns:** `public void`

### freeze

```java
public void freeze()
```

**Returns:** `public void`

### isFrozen

```java
public boolean isFrozen()
```

**Returns:** `public boolean`

### checkFrozen

```java
private void checkFrozen()
```

**Returns:** `private void`

### RuntimeException

```java
throw new RuntimeException("Attempted to modify LootPool after being frozen!")
```

**Parameters:**

- `frozen!"` (`"Attempted to modify LootPool after being`)

**Returns:** `throw new`

### getName

```java
.jetbrains.annotations.Nullable
    public String getName()
```

**Returns:** `.jetbrains.annotations.Nullable
    public String`

### setName

```java
void setName(String name)
```

**Parameters:**

- `name` (`String`)

### UnsupportedOperationException

```java
throw new UnsupportedOperationException("Cannot change the name of a pool when it has a name set!")
```

**Parameters:**

- `set!"` (`"Cannot change the name of a pool when it has a name`)

**Returns:** `throw new`

### getRolls

```java
Add getters and settings for changing the rolls for this pool
    public NumberProvider getRolls()
```

**Returns:** `Add getters and settings for changing the rolls for this pool
    public NumberProvider`

### getBonusRolls

```java
public NumberProvider getBonusRolls()
```

**Returns:** `public NumberProvider`

### setRolls

```java
public void setRolls(NumberProvider v)
```

**Parameters:**

- `v` (`NumberProvider`)

**Returns:** `public void`

### checkFrozen

```java
 checkFrozen()
```

**Returns:** ``

### setBonusRolls

```java
public void setBonusRolls(NumberProvider v)
```

**Parameters:**

- `v` (`NumberProvider`)

**Returns:** `public void`

### checkFrozen

```java
 checkFrozen()
```

**Returns:** ``

### lootPool

```java
public static LootPool.Builder lootPool()
```

**Returns:** `public static LootPool.Builder`

### setRolls

```java
public LootPool.Builder setRolls(NumberProvider p_165134_)
```

**Parameters:**

- `p_165134_` (`NumberProvider`)

**Returns:** `public LootPool.Builder`

### unwrap

```java
public LootPool.Builder unwrap()
```

**Returns:** `public LootPool.Builder`

### setBonusRolls

```java
public LootPool.Builder setBonusRolls(NumberProvider p_165136_)
```

**Parameters:**

- `p_165136_` (`NumberProvider`)

**Returns:** `public LootPool.Builder`

### add

```java
public LootPool.Builder add(LootPoolEntryContainer.Builder<?> p_79077_)
```

**Parameters:**

- `p_79077_` (`LootPoolEntryContainer.Builder<?>`)

**Returns:** `public LootPool.Builder`

### when

```java
public LootPool.Builder when(LootItemCondition.Builder p_79081_)
```

**Parameters:**

- `p_79081_` (`LootItemCondition.Builder`)

**Returns:** `public LootPool.Builder`

### apply

```java
public LootPool.Builder apply(LootItemFunction.Builder p_79079_)
```

**Parameters:**

- `p_79079_` (`LootItemFunction.Builder`)

**Returns:** `public LootPool.Builder`

### name

```java
public LootPool.Builder name(String name)
```

**Parameters:**

- `name` (`String`)

**Returns:** `public LootPool.Builder`

### build

```java
public LootPool build()
```

**Returns:** `public LootPool`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Builder` | class |  |
