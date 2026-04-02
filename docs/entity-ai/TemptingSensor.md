# TemptingSensor

**Package:** `net.minecraft.world.entity.ai.sensing`
**Type:** class
**Extends:** `Sensor<PathfinderMob>`

## Fields

| Name | Type | Description |
|------|------|-------------|
| `TEMPTATION_RANGE` | `int` |  |

## Methods

### TemptingSensor

```java
public TemptingSensor(Predicate<ItemStack> p_335605_)
```

**Parameters:**

- `p_335605_` (`Predicate<ItemStack>`)

**Returns:** `public`

### doTick

```java
protected void doTick(ServerLevel p_148331_, PathfinderMob p_148332_)
```

**Parameters:**

- `p_148331_` (`ServerLevel`)
- `p_148332_` (`PathfinderMob`)

**Returns:** `protected void`

### playerHoldingTemptation

```java
private boolean playerHoldingTemptation(Player p_148337_)
```

**Parameters:**

- `p_148337_` (`Player`)

**Returns:** `private boolean`

### isTemptation

```java
private boolean isTemptation(ItemStack p_148339_)
```

**Parameters:**

- `p_148339_` (`ItemStack`)

**Returns:** `private boolean`

### requires

```java
public Set<MemoryModuleType<?>> requires()
```

**Returns:** `Set<MemoryModuleType<?>>`
