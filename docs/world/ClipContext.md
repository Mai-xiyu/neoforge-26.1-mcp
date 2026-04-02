# ClipContext

**Package:** `net.minecraft.world.level`
**Type:** class

## Methods

### ClipContext

```java
public ClipContext(Vec3 p_45688_, Vec3 p_45689_, ClipContext.Block p_45690_, ClipContext.Fluid p_45691_, Entity p_45692_)
```

**Parameters:**

- `p_45688_` (`Vec3`)
- `p_45689_` (`Vec3`)
- `p_45690_` (`ClipContext.Block`)
- `p_45691_` (`ClipContext.Fluid`)
- `p_45692_` (`Entity`)

**Returns:** `public`

### ClipContext

```java
public ClipContext(Vec3 p_311916_, Vec3 p_312802_, ClipContext.Block p_312540_, ClipContext.Fluid p_312487_, CollisionContext p_311823_)
```

**Parameters:**

- `p_311916_` (`Vec3`)
- `p_312802_` (`Vec3`)
- `p_312540_` (`ClipContext.Block`)
- `p_312487_` (`ClipContext.Fluid`)
- `p_311823_` (`CollisionContext`)

**Returns:** `public`

### getTo

```java
public Vec3 getTo()
```

**Returns:** `public Vec3`

### getFrom

```java
public Vec3 getFrom()
```

**Returns:** `public Vec3`

### getBlockShape

```java
public VoxelShape getBlockShape(BlockState p_45695_, BlockGetter p_45696_, BlockPos p_45697_)
```

**Parameters:**

- `p_45695_` (`BlockState`)
- `p_45696_` (`BlockGetter`)
- `p_45697_` (`BlockPos`)

**Returns:** `public VoxelShape`

### getFluidShape

```java
public VoxelShape getFluidShape(FluidState p_45699_, BlockGetter p_45700_, BlockPos p_45701_)
```

**Parameters:**

- `p_45699_` (`FluidState`)
- `p_45700_` (`BlockGetter`)
- `p_45701_` (`BlockPos`)

**Returns:** `public VoxelShape`

### Block

```java
private Block(ClipContext.ShapeGetter p_45712_)
```

**Parameters:**

- `p_45712_` (`ClipContext.ShapeGetter`)

**Returns:** `private`

### get

```java
public VoxelShape get(BlockState p_45714_, BlockGetter p_45715_, BlockPos p_45716_, CollisionContext p_45717_)
```

**Parameters:**

- `p_45714_` (`BlockState`)
- `p_45715_` (`BlockGetter`)
- `p_45716_` (`BlockPos`)
- `p_45717_` (`CollisionContext`)

**Returns:** `VoxelShape`

### Fluid

```java
private Fluid(Predicate<FluidState> p_45730_)
```

**Parameters:**

- `p_45730_` (`Predicate<FluidState>`)

**Returns:** `private`

### canPick

```java
public boolean canPick(FluidState p_45732_)
```

**Parameters:**

- `p_45732_` (`FluidState`)

**Returns:** `public boolean`

### get

```java
VoxelShape get(BlockState p_45740_, BlockGetter p_45741_, BlockPos p_45742_, CollisionContext p_45743_)
```

**Parameters:**

- `p_45740_` (`BlockState`)
- `p_45741_` (`BlockGetter`)
- `p_45742_` (`BlockPos`)
- `p_45743_` (`CollisionContext`)

**Returns:** `VoxelShape`

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Block` | enum |  |
| `Fluid` | enum |  |
| `ShapeGetter` | interface |  |
