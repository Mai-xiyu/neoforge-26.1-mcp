# VanillaClientListeners

**Package:** `net.neoforged.neoforge.client.resources`
**Type:** class
**Side:** 🖥️ Client

## Description

Keys for vanilla `PreparableReloadListener reload listeners`, used to specify dependency ordering in the `AddClientReloadListenersEvent`.



Due to the volume of vanilla listeners, these keys are automatically generated based on the class name.
@see `VanillaServerListeners` for vanilla server listener names.
@see `NeoForgeReloadListeners` for Neo-added listener names.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `LANGUAGE` | `Identifier` |  |
| `TEXTURES` | `Identifier` |  |
| `SHADERS` | `Identifier` |  |
| `SOUNDS` | `Identifier` |  |
| `SPLASHES` | `Identifier` |  |
| `ATLASES` | `Identifier` |  |
| `FONTS` | `Identifier` |  |
| `GRASS_COLOR` | `Identifier` |  |
| `FOLIAGE_COLOR` | `Identifier` |  |
| `DRY_FOLIAGE_COLOR` | `Identifier` |  |
| `MODELS` | `Identifier` |  |
| `EQUIPMENT_ASSETS` | `Identifier` |  |
| `ENTITY_RENDERER` | `Identifier` |  |
| `BLOCK_ENTITY_RENDERER` | `Identifier` |  |
| `PARTICLE_RESOURCES` | `Identifier` |  |
| `WAYPOINT_STYLES` | `Identifier` |  |
| `LEVEL_RENDERER` | `Identifier` |  |
| `CLOUD_RENDERER` | `Identifier` |  |
| `GPU_WARNLIST` | `Identifier` |  |
| `REGIONAL_COMPLIANCES` | `Identifier` |  |

## Methods

### key

```java
private static Identifier key(Class<? extends PreparableReloadListener> cls)
```

**Parameters:**

- `cls` (`Class<? extends PreparableReloadListener>`)

**Returns:** `private static Identifier`

### UnsupportedOperationException

```java
Prevent duplicate registration, in case we accidentally use the same class in two different fields.
            throw new UnsupportedOperationException("Attempted to create two keys for the same class")
```

**Parameters:**

- `class"` (`"Attempted to create two keys for the same`)

**Returns:** `Prevent duplicate registration, in case we accidentally use the same class in two different fields.
            throw new`

### getNameForClass

```java
.Internal
    public static Identifier getNameForClass(Class<? extends PreparableReloadListener> cls)
```

**Parameters:**

- `cls` (`Class<? extends PreparableReloadListener>`)

**Returns:** `.Internal
    public static Identifier`
