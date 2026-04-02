# NeoForgeConfig

**Package:** `net.neoforged.neoforge.common`
**Type:** class

## Description

NeoForge's own configuration.

## Fields

| Name | Type | Description |
|------|------|-------------|
| `removeErroringBlockEntities` | `BooleanValue` |  |
| `removeErroringEntities` | `BooleanValue` |  |
| `fullBoundingBoxLadders` | `BooleanValue` |  |
| `permissionHandler` | `ConfigValue<String>` |  |
| `advertiseDedicatedServerToLan` | `BooleanValue` |  |
| `logUntranslatedItemTagWarnings` | `ModConfigSpec.EnumValue<TagConventionLogWarning.LogWarningMode>` |  |
| `logLegacyTagWarnings` | `ModConfigSpec.EnumValue<TagConventionLogWarning.LogWarningMode>` |  |
| `attributeAdvancedTooltipDebugInfo` | `BooleanValue` |  |
| `experimentalForgeLightPipelineEnabled` | `BooleanValue` |  |
| `showLoadWarnings` | `BooleanValue` |  |
| `useCombinedDepthStencilAttachment` | `BooleanValue` |  |
| `logUntranslatedConfigurationWarnings` | `BooleanValue` |  |

## Methods

### Server

```java
 Server(ModConfigSpec.Builder builder)
```

**Parameters:**

- `builder` (`ModConfigSpec.Builder`)

**Returns:** ``

### Common

```java
 Common(ModConfigSpec.Builder builder)
```

**Parameters:**

- `builder` (`ModConfigSpec.Builder`)

**Returns:** ``

### Client

```java
 Client(ModConfigSpec.Builder builder)
```

**Parameters:**

- `builder` (`ModConfigSpec.Builder`)

**Returns:** ``

### onLoad

```java
public static void onLoad(ModConfigEvent.Loading configEvent)
```

**Parameters:**

- `configEvent` (`ModConfigEvent.Loading`)

### onFileChange

```java
public static void onFileChange(ModConfigEvent.Reloading configEvent)
```

**Parameters:**

- `configEvent` (`ModConfigEvent.Reloading`)

## Inner Classes

| Name | Type | Description |
|------|------|-------------|
| `Server` | class |  |
| `Common` | class |  |
| `Client` | class |  |
