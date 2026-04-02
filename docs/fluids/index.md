# Fluids

This category contains 36 class(es).

## neoforge.fluids

| Class | Type | Description |
|-------|------|-------------|
| [`DispenseFluidContainer`](DispenseFluidContainer.md) | class | Fills or drains a fluid container item using a Dispenser. |
| [`DripstoneDripInfo`](DripstoneDripInfo.md) | record |  |
| [`FluidActionResult`](FluidActionResult.md) | class | Holds the result of a fluid action from FluidUtil. |
| [`FluidInstance`](FluidInstance.md) | interface |  |
| [`FluidStackLinkedSet`](FluidStackLinkedSet.md) | class | Utility class for creating ObjectLinkedOpenCustomHashSet linked set for FluidStack
with specific Has |
| [`FluidType`](FluidType.md) | class | A definition of common attributes, properties, and methods that is applied
to a Fluid. |
| [`FluidUtil`](FluidUtil.md) | class |  |
| [`IFluidTank`](IFluidTank.md) | interface | This interface represents a Fluid Tank. |
| [`Properties`](Properties.md) | class |  |
| [`RegisterCauldronFluidContentEvent`](RegisterCauldronFluidContentEvent.md) | class | Event to register CauldronFluidContent for modded cauldrons. |
| [`SimpleFluidContent`](SimpleFluidContent.md) | class | Stock data component class to hold a FluidStack. |

## fluids.crafting

| Class | Type | Description |
|-------|------|-------------|
| [`DataComponentFluidIngredient`](DataComponentFluidIngredient.md) | class | Fluid ingredient that matches the given set of fluids, additionally performing either a
DataComponen |
| [`EmptyFluidIngredient`](EmptyFluidIngredient.md) | class | Singleton that represents an empty fluid ingredient. |
| [`FluidIngredientCodecs`](FluidIngredientCodecs.md) | class |  |
| [`SimpleFluidIngredient`](SimpleFluidIngredient.md) | class | Fluid ingredient that matches the fluids specified by the given HolderSet. |
| [`SingleFluidIngredient`](SingleFluidIngredient.md) | class | Fluid ingredient that only matches the fluid of the given stack. |
| [`TagFluidIngredient`](TagFluidIngredient.md) | class | Fluid ingredient that matches all fluids within the given tag. |

## fluids.capability

| Class | Type | Description |
|-------|------|-------------|
| [`FluidResourceHandlerItemAdapter`](FluidResourceHandlerItemAdapter.md) | class |  |
| [`IFluidHandler`](IFluidHandler.md) | interface | Implement this interface as a capability which should handle fluids, generally storing them in
one o |
| [`IFluidHandlerItem`](IFluidHandlerItem.md) | interface | ItemStacks handled by an IFluidHandler may change, so this class allows
users of the fluid handler t |

## capability.wrappers

| Class | Type | Description |
|-------|------|-------------|
| [`BlockWrapper`](BlockWrapper.md) | class | Wrapper around any block, only accounts for fluid placement, otherwise the block acts a void. |
| [`BucketPickupHandlerWrapper`](BucketPickupHandlerWrapper.md) | class |  |
| [`CauldronWrapper`](CauldronWrapper.md) | class |  |
| [`FluidBucketWrapper`](FluidBucketWrapper.md) | class | Wrapper for vanilla and forge buckets. |
| [`LiquidContainerBlockWrapper`](LiquidContainerBlockWrapper.md) | class |  |

## capability.templates

| Class | Type | Description |
|-------|------|-------------|
| [`Consumable`](Consumable.md) | class |  |
| [`Consumable`](Consumable.md) | class |  |
| [`EmptyFluidHandler`](EmptyFluidHandler.md) | class |  |
| [`FluidHandlerItemStack`](FluidHandlerItemStack.md) | class | FluidHandlerItemStack is a template capability provider for ItemStacks. |
| [`FluidHandlerItemStackSimple`](FluidHandlerItemStackSimple.md) | class | FluidHandlerItemStackSimple is a template capability provider for ItemStacks. |
| [`FluidTank`](FluidTank.md) | class | Flexible implementation of a Fluid Storage object. |
| [`SwapEmpty`](SwapEmpty.md) | class |  |
| [`SwapEmpty`](SwapEmpty.md) | class |  |
| [`VoidFluidHandler`](VoidFluidHandler.md) | class | VoidFluidHandler is a template fluid handler that can be filled indefinitely without ever getting fu |

## crafting.display

| Class | Type | Description |
|-------|------|-------------|
| [`FluidStackContentsFactory`](FluidStackContentsFactory.md) | class | Base fluid stack contents factory: directly returns the stacks. |
| [`ForFluidStacks`](ForFluidStacks.md) | interface |  |
