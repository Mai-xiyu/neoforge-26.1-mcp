# CustomFluidRenderer

**Package:** `net.neoforged.neoforge.client.fluid`
**Type:** interface
**Side:** 🖥️ Client

## Methods

### renderFluid

```java
true if vanilla fluid rendering should be skipped
    boolean renderFluid(FluidRenderer fluidRenderer, FluidState fluidState, BlockAndTintGetter getter, BlockPos pos, FluidRenderer.Output output, BlockState blockState)
```

**Parameters:**

- `fluidRenderer` (`FluidRenderer`)
- `fluidState` (`FluidState`)
- `getter` (`BlockAndTintGetter`)
- `pos` (`BlockPos`)
- `output` (`FluidRenderer.Output`)
- `blockState` (`BlockState`)

**Returns:** `true if vanilla fluid rendering should be skipped
    boolean`
