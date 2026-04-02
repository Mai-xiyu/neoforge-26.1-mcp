# PortalProcessor

**Package:** `net.minecraft.world.entity`
**Type:** class

## Methods

### PortalProcessor

```java
public PortalProcessor(Portal p_350931_, BlockPos p_350699_)
```

**Parameters:**

- `p_350931_` (`Portal`)
- `p_350699_` (`BlockPos`)

**Returns:** `public`

### processPortalTeleportation

```java
public boolean processPortalTeleportation(ServerLevel p_350279_, Entity p_350646_, boolean p_350822_)
```

**Parameters:**

- `p_350279_` (`ServerLevel`)
- `p_350646_` (`Entity`)
- `p_350822_` (`boolean`)

**Returns:** `public boolean`

### getPortalDestination

```java
public DimensionTransition getPortalDestination(ServerLevel p_350593_, Entity p_350987_)
```

**Parameters:**

- `p_350593_` (`ServerLevel`)
- `p_350987_` (`Entity`)

**Returns:** `DimensionTransition`

### getPortalLocalTransition

```java
public Portal.Transition getPortalLocalTransition()
```

**Returns:** `public Portal.Transition`

### decayTick

```java
private void decayTick()
```

**Returns:** `private void`

### hasExpired

```java
public boolean hasExpired()
```

**Returns:** `public boolean`

### getEntryPosition

```java
public BlockPos getEntryPosition()
```

**Returns:** `public BlockPos`

### updateEntryPosition

```java
public void updateEntryPosition(BlockPos p_350726_)
```

**Parameters:**

- `p_350726_` (`BlockPos`)

**Returns:** `public void`

### getPortalTime

```java
public int getPortalTime()
```

**Returns:** `public int`

### isInsidePortalThisTick

```java
public boolean isInsidePortalThisTick()
```

**Returns:** `public boolean`

### setAsInsidePortalThisTick

```java
public void setAsInsidePortalThisTick(boolean p_350796_)
```

**Parameters:**

- `p_350796_` (`boolean`)

**Returns:** `public void`

### isSamePortal

```java
public boolean isSamePortal(Portal p_350902_)
```

**Parameters:**

- `p_350902_` (`Portal`)

**Returns:** `public boolean`
