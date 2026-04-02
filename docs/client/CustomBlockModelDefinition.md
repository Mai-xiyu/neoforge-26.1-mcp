# CustomBlockModelDefinition

**Package:** `net.neoforged.neoforge.client.model.block`
**Type:** interface
**Side:** 🖥️ Client

## Description

Custom block model definition to allow completely taking over the loading of a blockstate file

## Methods

### instantiate

```java
Map<BlockState, BlockStateModel.UnbakedRoot> instantiate(StateDefinition<Block, BlockState> states, Supplier<String> sourceSupplier)
```

**Parameters:**

- `states` (`StateDefinition<Block, BlockState>`)
- `sourceSupplier` (`Supplier<String>`)

**Returns:** `Map<BlockState, BlockStateModel.UnbakedRoot>`

### codec

```java
MapCodec<? extends CustomBlockModelDefinition> codec()
```

**Returns:** `MapCodec<? extends CustomBlockModelDefinition>`
