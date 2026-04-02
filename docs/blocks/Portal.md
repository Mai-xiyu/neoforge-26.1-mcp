# Portal

**Package:** `net.minecraft.world.level.block`
**Type:** interface

## Methods

### getPortalTransitionTime

```java
default int getPortalTransitionTime(ServerLevel p_350613_, Entity p_350544_)
```

**Parameters:**

- `p_350613_` (`ServerLevel`)
- `p_350544_` (`Entity`)

**Returns:** `default int`

### getPortalDestination

```java
DimensionTransition getPortalDestination(ServerLevel p_350469_, Entity p_350401_, BlockPos p_350443_)
```

**Parameters:**

- `p_350469_` (`ServerLevel`)
- `p_350401_` (`Entity`)
- `p_350443_` (`BlockPos`)

**Returns:** `DimensionTransition`

### getLocalTransition

```java
default Portal.Transition getLocalTransition()
```

**Returns:** `default Portal.Transition`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Transition` | enum |  |
