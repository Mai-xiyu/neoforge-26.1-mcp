# PresetEditor

**Package:** `net.minecraft.client.gui.screens.worldselection`
**Type:** interface
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### createEditScreen

```java
Screen createEditScreen(CreateWorldScreen p_232977_, WorldCreationContext p_232978_)
```

**Parameters:**

- `p_232977_` (`CreateWorldScreen`)
- `p_232978_` (`WorldCreationContext`)

**Returns:** `Screen`

### flatWorldConfigurator

```java
private static WorldCreationContext.DimensionsUpdater flatWorldConfigurator(FlatLevelGeneratorSettings p_250871_)
```

**Parameters:**

- `p_250871_` (`FlatLevelGeneratorSettings`)

**Returns:** `private static WorldCreationContext.DimensionsUpdater`

### fixedBiomeConfigurator

```java
private static WorldCreationContext.DimensionsUpdater fixedBiomeConfigurator(Holder<Biome> p_248835_)
```

**Parameters:**

- `p_248835_` (`Holder<Biome>`)

**Returns:** `private static WorldCreationContext.DimensionsUpdater`
