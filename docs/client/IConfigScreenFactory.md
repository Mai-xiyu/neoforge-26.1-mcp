# IConfigScreenFactory

**Package:** `net.neoforged.neoforge.client.gui`
**Type:** interface
**Extends:** `IExtensionPoint`
**Side:** 🖥️ Client

## Description

Register an instance to `ModContainer#registerExtensionPoint(Class, Supplier)`
to supply a config screen for your mod.


The config screen will be accessible from the mod list menu.

## Methods

### createScreen

```java
Screen createScreen(ModContainer container, Screen modListScreen)
```

**Parameters:**

- `container` (`ModContainer`)
- `modListScreen` (`Screen`)

**Returns:** `Screen`

### getForMod

```java
static Optional<IConfigScreenFactory> getForMod(IModInfo selectedMod)
```

**Parameters:**

- `selectedMod` (`IModInfo`)

**Returns:** `static Optional<IConfigScreenFactory>`
