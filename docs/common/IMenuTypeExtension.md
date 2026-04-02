# IMenuTypeExtension

**Package:** `net.neoforged.neoforge.common.extensions`
**Type:** interface<T>

## Methods

### create

```java
static <T extends AbstractContainerMenu> MenuType<T> create(IContainerFactory<T> factory)
```

**Parameters:**

- `factory` (`IContainerFactory<T>`)

**Returns:** `MenuType<T>`

### create

```java
T create(int windowId, Inventory playerInv, RegistryFriendlyByteBuf extraData)
```

**Parameters:**

- `windowId` (`int`)
- `playerInv` (`Inventory`)
- `extraData` (`RegistryFriendlyByteBuf`)

**Returns:** `T`
