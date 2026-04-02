# FluidActionResult

**Package:** `net.neoforged.neoforge.fluids`
**Type:** class

## Description

Holds the result of a fluid action from `FluidUtil`.
Failed actions will always have `#isSuccess()` == false and an empty ItemStack result. See `#FAILURE`.
Successful actions will always have `#isSuccess()` == true.
Successful actions may have an empty ItemStack result in some cases,
for example the action succeeded and the resulting item was consumed.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `FAILURE` | `FluidActionResult` |  |
| `success` | `boolean` |  |
| `result` | `ItemStack` |  |

## Methods

### FluidActionResult

```java
public FluidActionResult(ItemStack result)
```

**Parameters:**

- `result` (`ItemStack`)

**Returns:** `public`

### this

```java
 this()
```

**Returns:** ``

### FluidActionResult

```java
private FluidActionResult(boolean success, ItemStack result)
```

**Parameters:**

- `success` (`boolean`)
- `result` (`ItemStack`)

**Returns:** `private`

### isSuccess

```java
public boolean isSuccess()
```

**Returns:** `public boolean`

### getResult

```java
public ItemStack getResult()
```

**Returns:** `public ItemStack`
