# VaultState

**Package:** `net.minecraft.world.level.block.entity.vault`
**Type:** enum
**Implements:** `StringRepresentable`

## Methods

### INACTIVE

```java
 INACTIVE()
```

**Returns:** ``

### onEnter

```java
protected void onEnter(ServerLevel p_324512_, BlockPos p_324300_, VaultConfig p_323552_, VaultSharedData p_324096_, boolean p_338586_)
```

**Parameters:**

- `p_324512_` (`ServerLevel`)
- `p_324300_` (`BlockPos`)
- `p_323552_` (`VaultConfig`)
- `p_324096_` (`VaultSharedData`)
- `p_338586_` (`boolean`)

### ACTIVE

```java
, ACTIVE()
```

**Returns:** `,`

### onEnter

```java
protected void onEnter(ServerLevel p_324513_, BlockPos p_324445_, VaultConfig p_323855_, VaultSharedData p_323750_, boolean p_338489_)
```

**Parameters:**

- `p_324513_` (`ServerLevel`)
- `p_324445_` (`BlockPos`)
- `p_323855_` (`VaultConfig`)
- `p_323750_` (`VaultSharedData`)
- `p_338489_` (`boolean`)

### UNLOCKING

```java
, UNLOCKING()
```

**Returns:** `,`

### onEnter

```java
protected void onEnter(ServerLevel p_324077_, BlockPos p_323729_, VaultConfig p_323520_, VaultSharedData p_323550_, boolean p_338182_)
```

**Parameters:**

- `p_324077_` (`ServerLevel`)
- `p_323729_` (`BlockPos`)
- `p_323520_` (`VaultConfig`)
- `p_323550_` (`VaultSharedData`)
- `p_338182_` (`boolean`)

### EJECTING

```java
, EJECTING()
```

**Returns:** `,`

### onEnter

```java
protected void onEnter(ServerLevel p_324167_, BlockPos p_324285_, VaultConfig p_324106_, VaultSharedData p_324596_, boolean p_338590_)
```

**Parameters:**

- `p_324167_` (`ServerLevel`)
- `p_324285_` (`BlockPos`)
- `p_324106_` (`VaultConfig`)
- `p_324596_` (`VaultSharedData`)
- `p_338590_` (`boolean`)

### onExit

```java
protected void onExit(ServerLevel p_323987_, BlockPos p_324064_, VaultConfig p_323588_, VaultSharedData p_324224_)
```

**Parameters:**

- `p_323987_` (`ServerLevel`)
- `p_324064_` (`BlockPos`)
- `p_323588_` (`VaultConfig`)
- `p_324224_` (`VaultSharedData`)

### VaultState

```java
 VaultState(String p_323637_, VaultState.LightLevel p_324597_)
```

**Parameters:**

- `p_323637_` (`String`)
- `p_324597_` (`VaultState.LightLevel`)

**Returns:** ``

### getSerializedName

```java
public String getSerializedName()
```

**Returns:** `String`

### lightLevel

```java
public int lightLevel()
```

**Returns:** `public int`

### tickAndGetNext

```java
public VaultState tickAndGetNext(ServerLevel p_324582_, BlockPos p_323837_, VaultConfig p_323770_, VaultServerData p_324291_, VaultSharedData p_324388_)
```

**Parameters:**

- `p_324582_` (`ServerLevel`)
- `p_323837_` (`BlockPos`)
- `p_323770_` (`VaultConfig`)
- `p_324291_` (`VaultServerData`)
- `p_324388_` (`VaultSharedData`)

**Returns:** `public VaultState`

### updateStateForConnectedPlayers

```java
private static VaultState updateStateForConnectedPlayers(ServerLevel p_324451_, BlockPos p_324085_, VaultConfig p_323780_, VaultServerData p_323896_, VaultSharedData p_323954_, double p_324489_)
```

**Parameters:**

- `p_324451_` (`ServerLevel`)
- `p_324085_` (`BlockPos`)
- `p_323780_` (`VaultConfig`)
- `p_323896_` (`VaultServerData`)
- `p_323954_` (`VaultSharedData`)
- `p_324489_` (`double`)

**Returns:** `private static VaultState`

### onTransition

```java
public void onTransition(ServerLevel p_323698_, BlockPos p_324545_, VaultState p_324339_, VaultConfig p_324218_, VaultSharedData p_323812_, boolean p_338417_)
```

**Parameters:**

- `p_323698_` (`ServerLevel`)
- `p_324545_` (`BlockPos`)
- `p_324339_` (`VaultState`)
- `p_324218_` (`VaultConfig`)
- `p_323812_` (`VaultSharedData`)
- `p_338417_` (`boolean`)

**Returns:** `public void`

### onEnter

```java
protected void onEnter(ServerLevel p_323591_, BlockPos p_324053_, VaultConfig p_324561_, VaultSharedData p_323516_, boolean p_338369_)
```

**Parameters:**

- `p_323591_` (`ServerLevel`)
- `p_324053_` (`BlockPos`)
- `p_324561_` (`VaultConfig`)
- `p_323516_` (`VaultSharedData`)
- `p_338369_` (`boolean`)

**Returns:** `protected void`

### onExit

```java
protected void onExit(ServerLevel p_324093_, BlockPos p_324256_, VaultConfig p_324614_, VaultSharedData p_324591_)
```

**Parameters:**

- `p_324093_` (`ServerLevel`)
- `p_324256_` (`BlockPos`)
- `p_324614_` (`VaultConfig`)
- `p_324591_` (`VaultSharedData`)

**Returns:** `protected void`

### ejectResultItem

```java
private void ejectResultItem(ServerLevel p_324066_, BlockPos p_324594_, ItemStack p_324065_, float p_324283_)
```

**Parameters:**

- `p_324066_` (`ServerLevel`)
- `p_324594_` (`BlockPos`)
- `p_324065_` (`ItemStack`)
- `p_324283_` (`float`)

**Returns:** `private void`

### LIT

```java
, LIT()
```

**Returns:** `,`

### LightLevel

```java
private LightLevel(int p_324585_)
```

**Parameters:**

- `p_324585_` (`int`)

**Returns:** `private`
